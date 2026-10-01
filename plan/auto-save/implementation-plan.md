# [#80] Auto-Save in Form Editor - Implementation Plan

> Linked Issue: [#80](https://github.com/akvo/akvo-react-form-editor/issues/80)

> **Template Adaptation & Path Standard**:
> - **Project-Root-Relative Paths**: All paths relative to workspace root (`src/components/...`, `src/lib/...`, `plan/...`).
> - **Target Project Alignment**: `akvo-react-form-editor` (React 18 component library, Pullstate stores, i18n, CSS Modules `arfe-*`, `src/lib/data.js` transformations).

## Overview
Enable an intelligent auto-save system in `akvo-react-form-editor` that prevents loss of work without overloading API backends. The architecture implements a **two-tier cache and sync protocol**:
1. **Tier 1 (Instant Local Storage Cache)**: On every keystroke or question edit, changes are written directly to browser `localStorage` and a local status table records `status = 1` (dirty). Zero network calls are dispatched.
2. **Tier 2 (Event-driven & Interval API Sync)**: An asynchronous sync worker triggers remote sync when `status === 1` based on configurable intervals (default: 30s), tab switching (`edit-form` ➔ `translations` ➔ `preview`), or structural actions (e.g. adding a new question).
3. **Status Reversion & Indicators**: Successful sync reverts status to `0` (saved). An unobtrusive status indicator in the top header keeps the user informed in real time ("Saved", "Saving...", "Unsaved changes").

---

## 1. Store & Foundation
**Files**: `src/lib/store.js`, `src/lib/i18n.js`, `src/lib/storage.js`

### 1.1 Store State (`UIStore`)
Add auto-save state slice into `UIStore`:
- `saveStatus`: `'saved'` (`0`) | `'dirty'` (`1`) | `'saving'` | `'error'`
- `lastSaved`: Unix timestamp or `null`
- `autoSaveConfig`:
  ```js
  {
    enabled: true,
    interval: 30000, // 30 seconds
    storageKeyPrefix: 'arfe_',
    enableDraftRecovery: true,
  }
  ```

### 1.2 Storage Manager (`src/lib/storage.js`)
Create a resilient browser storage helper:
- `saveDraft(formId, formState, questionGroups)`: writes serialized editor state to `localStorage`.
- `getDraft(formId)`: retrieves cached draft.
- `clearDraft(formId)`: removes cache on clean discard or successful publish.
- `setDirtyStatus(formId, status: 0 | 1, meta)`: updates local status table with timestamps.
- `getDirtyStatus(formId)`: returns current dirty flag and metadata.

### 1.3 i18n Keys (`src/lib/i18n.js`)
Add localized status strings:
```js
// English strings in src/lib/i18n.js
autoSaveStatusSaved: 'All changes saved',
autoSaveStatusDirty: 'Unsaved changes',
autoSaveStatusSaving: 'Saving changes...',
autoSaveStatusError: 'Auto-save failed. Retry',
autoSaveLastSavedAt: 'Saved at {time}',
autoSaveDraftRecovered: 'Draft restored from local cache',
```

---

## 2. Auto-Save Controller & Synchronization
**Files**: `src/hooks/useAutoSave.js`, `src/index.js`

### 2.1 Auto-Save Hook (`src/hooks/useAutoSave.js`)
Implement custom React hook managing:
1. **Store Subscription**: Debounced listener (150ms) on `[formStore, questionGroups]` that updates `localStorage` draft and sets `saveStatus = 'dirty'` (`1`).
2. **Interval Timer**: Sets up `setInterval(intervalMs)` checking if `saveStatus === 'dirty'` and no blocking errors exist in `ErrorStore`.
3. **Sync Runner (`triggerSync(triggerSource)`)**:
   - Skips if `saveStatus === 'saved'` (`0`).
   - Checks `ErrorStore` (questionGroupErrors, questionErrors).
   - Sets `saveStatus = 'saving'`.
   - Calls `onAutoSave(payload)` or `onSave(payload, { isAutoSave: true })`.
   - On promise resolution: sets `saveStatus = 'saved'` (`0`), updates `lastSaved`, updates storage status table to `0`.
   - On error: sets `saveStatus = 'error'`, retains local draft cache.
4. **Window Lifecycle Safeguards**: Registers `beforeunload` listener if `saveStatus === 'dirty'` to prevent accidental tab closing.

### 2.2 Tab & Page Navigation Integration (`src/index.js`)
- In `handleTabsOnChange(nextTabKey)`: if `saveStatus === 'dirty'`, trigger sync immediately before changing `UIStore.current.tab`.
- In Question/Group additions (`handleAddQuestionGroup`, `handleAddQuestion`): trigger sync checkpoint.

---

## 3. UI Component & Status Display
**Files**: `src/support/SaveStatusIndicator.jsx`, `src/support/ButtonSave.jsx`, `src/index.js`, `src/styles.module.css`

### 3.1 Status Indicator Component
- Renders in the tab bar header next to the question counters.
- Visual variants:
  - **Saved (`0`)**: Subtle gray/green check icon + "Saved" / "Saved at 14:02".
  - **Dirty (`1`)**: Subtle amber dot/cloud icon + "Unsaved changes".
  - **Saving**: Ant Design spinner + "Saving...".
  - **Error**: Warning icon with tooltip and click-to-retry trigger.

### 3.2 Manual Save Button Sync
- Manual Save button remains primary explicit save CTA.
- Clicking Save immediately triggers validation, forces sync, and clears dirty status upon success.

---

## 4. Verification & Testing

### 4.1 Automated Tests
- **Unit Tests**: `yarn test:unit`
- **Targeted Test**: `yarn test:unit -- --testPathPattern="AutoSave|storage"`
- **Test Scenarios**:
  - `storage.js`: verify saving draft, retrieving draft, status table `0` vs `1` transitions, error handling when `localStorage` is disabled.
  - `useAutoSave.js`: verify store mutations trigger local storage write without API call; verify interval triggers API call only when dirty; verify tab switch triggers immediate sync; verify status resets to 0 after sync.
  - `WebformEditor.test.js`: verify render with `enableAutoSave`, status indicators, manual save interaction.
- **Lint & Build**: `yarn test:lint && yarn build`

### 4.2 Manual Verification in Example App
1. Run `cd example && yarn start`
2. Open `http://localhost:3000`
3. Edit question label ➔ Check DevTools Application tab: `arfe_draft_*` and `arfe_status_*` updated immediately; API not called; status shows "Unsaved changes".
4. Wait 30 seconds ➔ Verify auto-save triggers; status changes to "Saving..." then "All changes saved"; `status` reverts to `0`.
5. Switch tab from "Edit Form" to "Translations" ➔ Verify immediate sync is triggered upon tab change.
6. Refresh browser ➔ Verify draft state can be recovered seamlessly.

---

## 5. Epic & Vibe Coding Estimation ⏱️

- **Confidence Level**: High
- **Dependencies**: None (`localStorage` native API, existing Pullstate stores)

| Task ID | Component & Description | Vibe Coding (Dev) | Automated Testing | QA & Review | Total Est. Time | Priority |
| :--- | :--- | :---: | :---: | :---: | :---: | :--- |
| **TASK-01** | **Storage Layer & Status Table** (`src/lib/storage.js`)<br>Local cache manager, schema versioning, dirty status flag (`0` vs `1`), quota handling. | 25m | 20m | 10m | **55m (0.9h)** | High |
| **TASK-02** | **Store & i18n Foundation** (`src/lib/store.js`, `src/lib/i18n.js`)<br>Add saveStatus, lastSaved, autoSaveConfig to `UIStore`, plus all status string translations. | 15m | 10m | 5m | **30m (0.5h)** | High |
| **TASK-03** | **Auto-Save Hook & Sync Manager** (`src/hooks/useAutoSave.js`)<br>Store change subscription (keystroke cache), interval timer, tab switch sync, beforeunload handler. | 35m | 25m | 15m | **75m (1.25h)** | High |
| **TASK-04** | **UI Status Indicator & Editor Wiring** (`src/support/SaveStatusIndicator.jsx`, `src/index.js`, `styles.module.css`)<br>Integrate indicator into header, wire tab switch trigger, connect manual save button. | 25m | 15m | 10m | **50m (0.8h)** | High |
| **TASK-05** | **Draft Recovery & Example App Showcase** (`example/src/App.js`, tests)<br>Integration test suite, draft recovery UI prompt, and example demo verification. | 20m | 20m | 10m | **50m (0.8h)** | Medium |
| **TOTAL** | **Full Auto-Save Feature Implementation** | **120m (2.0h)** | **90m (1.5h)** | **50m (0.8h)** | **260m (4.3h)** | |
