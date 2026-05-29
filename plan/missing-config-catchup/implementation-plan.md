# Implementation Plan: Missing Config Catchup

> All tasks verified against `example/src/example.json`.

## Goal

Ship all missing-config items so the editor produces JSON that exactly matches
the shape used in `akvo-react-form@feature/192-extending-geo-collections-feature`.

## Phases

- [x] Phase 0: Brainstorm & requirements discovery
- [x] Phase 1: Design (architecture, component map, data flow)
- [x] Phase 2: Foundation — store + i18n
- [x] Phase 3: data.js — toWebform / toEditor round-trip
- [ ] Phase 4: New question-type components (SettingGeo, SettingAttachment)
- [ ] Phase 5: Extend existing components (Tree, Cascade, QuestionSetting, SkipLogic)
- [ ] Phase 6: Question group config + is_repeat_identifier
- [ ] Phase 7: Wire-up & integration (routing, exports)
- [ ] Phase 8: Tests + build verification

---

## Phase 2 — Foundation (store + i18n)

**Files:** `src/lib/store.js`, `src/lib/i18n.js`

- [ ] **2.1** Add 4 new keys to `questionType`:
  `geotrace`, `geoshape`, `signature`, `attachment`
  *(entity is NOT a type — it is cascade + extra config)*

- [ ] **2.2** Add new i18n keys (English):
  ```
  inputLeadingQuestionLabel
  inputShowRepeatInQuestionLevelCheckbox
  inputQuestionDisabledCheckbox
  inputQuestionIsRepeatIdentifierCheckbox
  inputDependencyRuleLabel
  questionMoreGeoSettingText
  inputGeoLatitudeLabel
  inputGeoLongitudeLabel
  questionMoreAttachmentSettingText
  inputAllowedFileTypesLabel
  inputAttachmentEndpointLabel
  inputAttachmentResponseKeyLabel
  inputEntityConfigToggleCheckbox
  inputEntityNameLabel
  inputEntityParentIdLabel
  inputPartialRequiredCheckbox
  inputCheckStrategyLabel
  inputExpandAllCheckbox
  ```

**Exit criteria:** `yarn test:unit` passes with new types registered.

---

## Phase 3 — data.js Round-trip

**File:** `src/lib/data.js`

- [ ] **3.1** `toEditor` — normalize `center` from object to array:
  ```js
  if (q?.center && !Array.isArray(q.center)) {
    q = { ...q, center: [q.center.lat, q.center.lng] };
  }
  ```

- [ ] **3.2** `toEditor` — map entity `extra` → `entityExtra`:
  ```js
  if (q.type === 'cascade' && q?.extra?.type === 'entity') {
    q = { ...q, entityExtra: { name: q.extra.name, parentId: q.extra.parentId } };
    q = clearQuestionObj(['extra'], q);
  }
  ```

- [ ] **3.3** `toWebform` — geo center cleanup:
  ```js
  const geoTypes = [questionType.geo, questionType.geotrace, questionType.geoshape];
  if (!geoTypes.includes(q.type)) {
    q = clearQuestionObj(['center'], q);
  } else if (q?.center) {
    const [lat, lng] = q.center;
    if (lat == null && lng == null) q = clearQuestionObj(['center'], q);
  }
  ```

- [ ] **3.4** `toWebform` — entity extra mapping:
  ```js
  if (q.type === questionType.cascade && q?.entityExtra) {
    q = { ...q, extra: { type: 'entity', name: q.entityExtra.name, parentId: q.entityExtra.parentId } };
  }
  q = clearQuestionObj(['entityExtra'], q);
  ```

- [ ] **3.5** `toWebform` — cascade cleanup (strip non-cascade fields):
  ```js
  if (q.type !== questionType.cascade) {
    q = clearQuestionObj(['partialRequired'], q);
  }
  ```

- [ ] **3.6** `toWebform` — tree cleanup:
  ```js
  if (q.type !== questionType.tree) {
    q = clearQuestionObj(['checkStrategy', 'expandAll'], q);
  }
  ```

- [ ] **3.7** `toWebform` — attachment: strip `response_key` from non-attachment `api`:
  ```js
  if (q.type !== questionType.attachment && q?.api?.response_key) {
    const { response_key, ...restApi } = q.api;
    q = { ...q, api: restApi };
  }
  ```

- [ ] **3.8** `toWebform` — pass through `disabled`, `dependency_rule`,
  `is_repeat_identifier` as-is.

- [ ] **3.9** `toWebform` — add `leading_question` and
  `show_repeat_in_question_level` to group output (mirror `repeatText` pattern).

**Exit criteria:** JSON round-trip for all new types matches example.json shape.

---

## Phase 4 — New Type Components

- [ ] **4.1** Create `src/components/question-type/SettingGeo.jsx`
  - Props: `id`, `questionGroupId`, `center` (`[lat, lng]` or null)
  - Two `InputNumber` fields: Latitude, Longitude
  - On change: writes `center: [lat, lng]` to question state
  - If both null/empty: omit center from state
  - Shared by `geo`, `geotrace`, `geoshape`

- [ ] **4.2** Create `src/components/question-type/SettingAttachment.jsx`
  - Props: `id`, `questionGroupId`, `rule`, `api`
  - `rule.allowedFileTypes`: Select `mode="multiple"` with predefined extensions
  - `api.endpoint`: Input text
  - `api.response_key`: Input text
  - On change: writes to `question.rule.allowedFileTypes` / `question.api.*`

- [ ] **4.3** Export both from `src/components/question-type/index.js`

**Exit criteria:** Both components render and update state correctly.

---

## Phase 5 — Extend Existing Components

- [ ] **5.1** `SettingTree.jsx` — add:
  - `checkStrategy` Select (`"parent"` / `"children"`) — confirmed `"children"` in example
  - `expandAll` Checkbox — confirmed `true` in example

- [ ] **5.2** `SettingCascade.jsx` — add:
  - `partialRequired` Checkbox (top-level question prop)
  - Entity config section:
    - `entityConfig` Checkbox toggle (maps to presence of `entityExtra`)
    - When on: `entityExtra.name` Input + `entityExtra.parentId` Select (all questions)

- [ ] **5.3** `QuestionSetting.jsx` — changes:
  - Extend `showMetaCheckbox` memo to exclude `geotrace`, `geoshape`, `signature`, `attachment`
  - Destructure `disabled`, `is_repeat_identifier` from question
  - Add `disabled` Checkbox to checkbox row
  - Add `is_repeat_identifier` Checkbox (only when parent group `repeatable === true`)
  - Add panel routing:
    ```jsx
    {[geo, geotrace, geoshape].includes(qType) && <SettingGeo {...question} />}
    {qType === attachment && <SettingAttachment {...question} />}
    ```
  - Import `SettingGeo`, `SettingAttachment`

**Exit criteria:** All type panels render correctly; meta absent for new types.

---

## Phase 6 — Question Group Config + is_repeat_identifier

**File:** `src/components/QuestionGroupSetting.jsx` (+ QuestionGroupDefinition.jsx)

- [ ] **6.1** `leading_question` Select (shown when `repeatable === true`)
  - Options: **all questions across all groups** (cross-group confirmed)
  - Format: `"<group.order>.<q.order>. <q.label>"` → value = `q.id`
  - Needs `questionGroupFn.store` read to build options
  - Allow clear

- [ ] **6.2** `show_repeat_in_question_level` Checkbox (shown when `repeatable === true`)

- [ ] **6.3** Pass `leading_question`, `show_repeat_in_question_level` as props
  from `QuestionGroupDefinition.jsx`

*(is_repeat_identifier is in QuestionSetting — handled in Phase 5.3)*

**Exit criteria:** Both fields visible when repeatable; hidden when not;
`leading_question` lists all questions.

---

## Phase 7 — Skip Logic `dependency_rule`

**File:** `src/components/QuestionSkipLogic.jsx`

- [ ] **7.1** Add `dependency_rule` Select (AND / OR) above rules list
- [ ] **7.2** Visible **only** when `dependency?.length >= 2`
- [ ] **7.3** Allow clear (so it can be unset)
- [ ] **7.4** Handler writes `dependency_rule` to question state

**Exit criteria:** Selector hidden at 0–1 rules; appears at 2+; AND/OR persists.

---

## Phase 8 — Tests + Build

- [ ] **8.1** `yarn test:unit` — fix any failures
- [ ] **8.2** `yarn test:lint` — fix lint errors
- [ ] **8.3** `yarn build` — verify dist output
- [ ] **8.4** Manual smoke test in `example/` against example.json questions:
  - Q2, Q52, Q97, Q98 — geo/geotrace/geoshape with center
  - Q75–77 — attachment with allowedFileTypes and api
  - Q78 — signature (no panel)
  - Q67–68 — cascade + entity extra
  - Q28 — cascade + partialRequired
  - Q24 — tree + checkStrategy + expandAll
  - Q88–96 — leading_question + show_repeat_in_question_level + is_repeat_identifier
  - Q94, Q96 — dependency_rule OR / AND

---

## Key Decisions

| Decision | Rationale |
|----------|-----------|
| `entity` not a separate type | Confirmed from example.json: entity is `cascade` + `extra.type:"entity"` |
| `entityExtra` as internal key | Avoids collision with cascade's own `extra` array (some cascade questions have `extra` for content injection) |
| `allowedFileTypes` in `rule` | Confirmed from example.json Q75–77: `rule.allowedFileTypes: ["jpeg","jpg","png"]` |
| Extensions not MIME types | Confirmed from example.json values: "jpeg", "pdf", "doc" etc. |
| `SettingGeo` shared component | `geo`, `geotrace`, `geoshape` all use `center`; same UI panel |
| `center` as `[lat, lng]` array | Normalize in `toEditor`; example uses both formats, output always array |
| `api.query_params` out of scope | Renderer generates it from `allowedFileTypes`; editor does not configure it |
| `dependency_rule` hidden < 2 | Single rule has no ambiguity; confirmed pattern from example Q94/Q96 |

## Risks

| Risk | Mitigation |
|------|------------|
| `cascade.extra` collision: entity vs content `extra` | Internal `entityExtra` key avoids this; `toEditor` only maps `extra` when `extra.type === "entity"` |
| `center` two input formats (object vs array) | Normalize to array in `toEditor`; always write array in `toWebform` |
| `attachment.rule.allowedFileTypes` vs existing `rule` usage | `rule` on attachment is purely `{ allowedFileTypes }` — no min/max conflict |
