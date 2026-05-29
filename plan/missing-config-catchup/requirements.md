# Requirements: Missing Config Catchup

> Catch up `akvo-react-form-editor` with the latest config surface area from
> `akvo-react-form` (branch `feature/192-extending-geo-collections-feature`).
> All decisions verified against `example/src/example.json`.

---

## Context

`akvo-react-form` now supports 17 question types (up from 12) and several new
per-question and per-group properties. The editor must be able to produce valid
JSON for all of them.

---

## Functional Requirements

### FR-1 — New Question Types

| ID | Type | Behaviour in editor |
|----|------|---------------------|
| FR-1.1 | `geotrace` | Selectable from type dropdown; shows `SettingGeo` panel with `center` field; excluded from meta |
| FR-1.2 | `geoshape` | Same as FR-1.1 |
| FR-1.3 | `signature` | Selectable from type dropdown; no extra settings panel; excluded from meta |
| FR-1.4 | `attachment` | Selectable from type dropdown; shows `SettingAttachment` panel (see FR-4); excluded from meta |

> **`entity` is NOT a separate question type.** Confirmed from example.json:
> entity is a **cascade** question with `extra: { type:"entity", name, parentId }`.
> Entity config lives in `SettingCascade` (see FR-3).

> **`geo` already exists** in the editor. FR-1 adds `center` to its settings (see FR-9).

### FR-2 — Question Group Config

Applies only when `repeatable: true` is checked.

| ID | Property | UI | Constraint |
|----|----------|----|-----------|
| FR-2.1 | `leading_question` | Select dropdown — **all questions across all groups** | Optional; value = question `id` (integer) |
| FR-2.2 | `show_repeat_in_question_level` | Checkbox | Optional; default false |

> **Cross-group confirmed (example.json):** Group 12 (repeatable) has
> `leading_question: 88`; Q88 lives in Group 11.

### FR-2.3 — `is_repeat_identifier` (question-level)

| ID | Property | UI | Constraint |
|----|----------|----|-----------|
| FR-2.3 | `is_repeat_identifier` | Checkbox on questions **inside a repeatable group** only | Optional |

### FR-3 — Entity Sub-Config on Cascade Questions

Entity is an `extra` object on a cascade question, not a separate type.

| ID | Property | JSON path | UI | Notes |
|----|----------|-----------|----|-------|
| FR-3.1 | `extra.type` | `extra.type` | Not shown — always `"entity"` | Auto-injected |
| FR-3.2 | `extra.name` | `extra.name` | Free-text Input | Entity display label |
| FR-3.3 | `extra.parentId` | `extra.parentId` | Select — all questions in form | Links to source question id |

In `SettingCascade`, add an "Entity config" toggle. When enabled, the `extra`
object is written; when disabled, `extra` is omitted.

### FR-4 — Attachment Question Settings

| ID | Property | JSON path | UI | Notes |
|----|----------|-----------|----|-------|
| FR-4.1 | `allowedFileTypes` | `rule.allowedFileTypes` | Select `mode="multiple"`, predefined extensions | Optional; `[]` = all types |
| FR-4.2 | Upload `api.endpoint` | `api.endpoint` | Text Input | Optional upload endpoint |
| FR-4.3 | Upload `api.response_key` | `api.response_key` | Text Input | Key in upload response containing the file URL |

> **`allowedFileTypes` is inside `rule`**, not top-level (confirmed from
> example.json Q75–77). Values are file **extensions**, not MIME types.

Predefined extension options:
- `jpeg`, `jpg`, `png` — Images
- `gif`, `webp` — Web images
- `pdf` — PDF
- `doc`, `docx` — Word
- `xls`, `xlsx` — Excel
- `odt`, `ods` — OpenDocument
- `csv` — CSV
- `mp4`, `mov`, `avi` — Video
- `mp3`, `wav` — Audio

### FR-5 — Tree Question Extended Settings

| ID | Property | UI | Notes |
|----|----------|----|-------|
| FR-5.1 | `checkStrategy` | Select: `"parent"` / `"children"` | Confirmed: `"children"` in example |
| FR-5.2 | `expandAll` | Checkbox | Confirmed: `true` in example |

### FR-6 — Cascade Extended Settings

| ID | Property | UI | Notes |
|----|----------|----|-------|
| FR-6.1 | `partialRequired` | Checkbox | Confirmed: top-level question prop in example Q28 |

### FR-7 — Common Question Settings

| ID | Property | UI | Notes |
|----|----------|----|-------|
| FR-7.1 | `disabled` | Checkbox alongside required/displayOnly | Not in example.json but documented in README; include |

### FR-8 — Skip Logic (`dependency_rule`)

| ID | Property | UI | Notes |
|----|----------|----|-------|
| FR-8.1 | `dependency_rule` | Select: `"AND"` / `"OR"` | Visible **only when** 2+ dependency rules exist; confirmed Q94 (OR), Q96 (AND) |

### FR-9 — Geo / Geotrace / Geoshape `center` Property

| ID | Type | Property | UI | Notes |
|----|------|----------|----|-------|
| FR-9.1 | `geo` (existing) | `center` | Two lat/lng inputs | Confirmed in example Q2 (object), Q52 (array) |
| FR-9.2 | `geotrace` | `center` | Same | Confirmed in example Q97 |
| FR-9.3 | `geoshape` | `center` | Same | Confirmed in example Q98 |

`center` is stored/output as `[lat, lng]` array. Editor shows two number
inputs (Latitude, Longitude). Cleared from output if both are null/empty.

> `geo` already exists in the editor; it currently has no settings panel.
> A new `SettingGeo.jsx` is needed, shared by `geo`, `geotrace`, `geoshape`.

---

## Non-Functional Requirements

- **NFR-1** — No regressions on existing question types or tests.
- **NFR-2** — `toWebform` output matches exact shape from example.json.
- **NFR-3** — `toEditor` round-trips all new props without data loss.
- **NFR-4** — i18n keys for all new UI strings in `src/lib/i18n.js` (English).
- **NFR-5** — New components follow existing conventions (CSS modules, pullstate).
- **NFR-6** — `yarn test` passes after all changes.

---

## Out of Scope

- Form-level renderer props (`sidebar`, `sticky`, `printConfig`, `autoSave`, etc.)
- `extra` array on non-entity questions (content injection) — renderer concern.
- `requiredSign` — renderer display concern.
- `api.query_params` on attachment — auto-generated from `allowedFileTypes` by the renderer; editor does not need to configure it.
- `lead_repeat_group` (question-level) — companion to `leading_question`; deferred.
- Translations tab updates — new types auto-inherit existing behaviour.
