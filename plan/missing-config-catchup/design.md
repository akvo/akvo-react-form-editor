# Design: Missing Config Catchup

> All structures verified against `example/src/example.json`.

---

## Architecture Overview

```
src/lib/store.js          ← questionType registry
src/lib/data.js           ← toEditor / toWebform conversion
src/lib/i18n.js           ← all new UI strings
src/components/           ← shared UI panels
src/components/question-type/  ← per-type setting panels
```

---

## 1. `src/lib/store.js`

### 1.1 Extend `questionType`

```js
const questionType = {
  // existing 12 types unchanged...
  geotrace:  'geotrace',
  geoshape:  'geoshape',
  signature: 'signature',
  attachment: 'attachment',
  // entity is NOT added — it is cascade + extra config
};
```

### 1.2 Extend `showMetaCheckbox` exclusion list

```js
![
  questionType.tree, questionType.table,
  questionType.geotrace, questionType.geoshape,
  questionType.signature, questionType.attachment,
].includes(type)
```

(`geo` already excluded from meta via `disableMetaForGeo` logic.)

---

## 2. `src/lib/data.js`

### 2.1 `toWebform` — new cleanup rules

```js
// attachment: allowedFileTypes lives in rule; api has different shape
if (q.type !== questionType.attachment) {
  // allowedFileTypes is already inside rule — no separate cleanup needed
  // but strip attachment-only api fields (response_key) from other types
  if (q?.api?.response_key) {
    const { response_key, ...restApi } = q.api;
    q = { ...q, api: restApi };
  }
}

// cascade: strip entity extra from non-cascade; handle entityExtra toggle
if (q.type !== questionType.cascade) {
  q = clearQuestionObj(['partialRequired', 'entityExtra'], q);
}
if (q.type === questionType.cascade && q?.entityExtra) {
  q = {
    ...q,
    extra: {
      type: 'entity',
      name: q.entityExtra.name,
      parentId: q.entityExtra.parentId,
    },
  };
}
q = clearQuestionObj(['entityExtra'], q); // always remove internal key

// tree
if (q.type !== questionType.tree) {
  q = clearQuestionObj(['checkStrategy', 'expandAll'], q);
}

// geo / geotrace / geoshape — center
const geoTypes = [questionType.geo, questionType.geotrace, questionType.geoshape];
if (!geoTypes.includes(q.type)) {
  q = clearQuestionObj(['center'], q);
} else if (q?.center) {
  const [lat, lng] = Array.isArray(q.center)
    ? q.center
    : [q.center.lat, q.center.lng];
  if (lat == null && lng == null) {
    q = clearQuestionObj(['center'], q);
  } else {
    q = { ...q, center: [lat, lng] };
  }
}

// disabled and dependency_rule pass through as-is
```

### 2.2 `toEditor` — map entity extra + normalize center

```js
// entity extra: incoming cascade may have extra.type === "entity"
if (q.type === questionType.cascade && q?.extra?.type === 'entity') {
  q = {
    ...q,
    entityExtra: {
      name: q.extra.name,
      parentId: q.extra.parentId,
    },
  };
  q = clearQuestionObj(['extra'], q);
}

// center: normalize both formats to [lat, lng]
if (q?.center && !Array.isArray(q.center)) {
  q = { ...q, center: [q.center.lat, q.center.lng] };
}
```

---

## 3. `src/lib/i18n.js` — New Keys

```js
// QuestionGroupSetting
inputLeadingQuestionLabel: 'Leading Question',
inputShowRepeatInQuestionLevelCheckbox: 'Show repeat in question level',

// QuestionSetting
inputQuestionDisabledCheckbox: 'Disabled',
inputQuestionIsRepeatIdentifierCheckbox: 'Repeat identifier',

// QuestionSkipLogic
inputDependencyRuleLabel: 'Dependency Rule',

// SettingGeo (shared geo/geotrace/geoshape)
questionMoreGeoSettingText: 'Geo Settings',
inputGeoLatitudeLabel: 'Center Latitude',
inputGeoLongitudeLabel: 'Center Longitude',

// SettingAttachment
questionMoreAttachmentSettingText: 'Attachment Settings',
inputAllowedFileTypesLabel: 'Allowed File Types',
inputAttachmentEndpointLabel: 'Upload Endpoint',
inputAttachmentResponseKeyLabel: 'Response Key',

// SettingCascade additions
inputEntityConfigToggleCheckbox: 'Entity config',
inputEntityNameLabel: 'Entity Name',
inputEntityParentIdLabel: 'Parent Question',
inputPartialRequiredCheckbox: 'Partial required',

// SettingTree additions
inputCheckStrategyLabel: 'Check Strategy',
inputExpandAllCheckbox: 'Expand all nodes by default',
```

---

## 4. Component Changes

### 4.1 `QuestionGroupSetting.jsx`

Inside the existing `repeatable` conditional block:

```
[existing] repeatText input
[NEW]      leading_question Select (all questions, cross-group)
[NEW]      show_repeat_in_question_level Checkbox
```

`leading_question` options built from all question groups:
```js
const allQuestions = questionGroups.flatMap(qg =>
  qg.questions.map(q => ({
    label: `${qg.order}.${q.order}. ${q.label}`,
    value: q.id,
  }))
);
```

### 4.2 `QuestionSetting.jsx`

**Meta exclusion** — extend memo:
```js
![tree, table, geotrace, geoshape, signature, attachment].includes(type)
```

**`disabled` checkbox** — add to the checkbox row (alongside required/displayOnly).

**`is_repeat_identifier` checkbox** — shown only when parent group has
`repeatable === true`:
```js
const isInRepeatableGroup = useMemo(() =>
  questionGroups.find(qg => qg.id === questionGroupId)?.repeatable,
  [questionGroups, questionGroupId]
);
```

**Type-setting panel routing** — add:
```jsx
{[questionType.geo, questionType.geotrace, questionType.geoshape].includes(qType)
  && <SettingGeo {...question} />}
{qType === questionType.attachment && <SettingAttachment {...question} />}
```

(`signature` gets no settings panel.)

### 4.3 `QuestionSkipLogic.jsx`

Add `dependency_rule` selector above the rules list:
```jsx
{question.dependency?.length >= 2 && (
  <Form.Item label={UIText.inputDependencyRuleLabel} ...>
    <Select options={[{label:'AND',value:'AND'},{label:'OR',value:'OR'}]}
            allowClear />
  </Form.Item>
)}
```

### 4.4 `SettingCascade.jsx`

Add below existing API fields:

```
[existing] endpoint Select + display
[existing] initial InputNumber
[NEW]      partialRequired Checkbox
[NEW]      ── Entity Config ──
[NEW]      entityConfig Checkbox (toggle)
[NEW]      (when toggled on) entityExtra.name Input
[NEW]      (when toggled on) entityExtra.parentId Select (all questions)
```

Internal state field: `entityExtra: { name, parentId }` (editor-only).
Written to `extra: { type:"entity", name, parentId }` in `toWebform`.

### 4.5 `SettingTree.jsx`

Add below existing option selector:
```
[existing] option Select
[NEW]      checkStrategy Select ("parent" | "children")
[NEW]      expandAll Checkbox
```

---

## 5. New Components

### 5.1 `src/components/question-type/SettingGeo.jsx`

Shared by `geo`, `geotrace`, `geoshape`.

```
Props: id, questionGroupId, center (stored as [lat, lng] or null)
UI:
  Two InputNumber fields: Latitude, Longitude
  Both optional — if both empty, center is omitted from output
```

State: `question.center = [lat, lng]`

### 5.2 `src/components/question-type/SettingAttachment.jsx`

```
Props: id, questionGroupId, rule (contains allowedFileTypes), api
UI:
  allowedFileTypes  → Select mode="multiple" (predefined extensions)
  api.endpoint      → Input text (upload URL)
  api.response_key  → Input text (key in upload response)
```

Predefined extension options (label → value):
```
JPEG  → "jpeg"    JPG → "jpg"    PNG → "png"
GIF   → "gif"     WebP → "webp"
PDF   → "pdf"
Word  → "doc" / "docx"
Excel → "xls" / "xlsx"
ODT   → "odt"     ODS → "ods"
CSV   → "csv"
MP4   → "mp4"     MOV → "mov"    AVI → "avi"
MP3   → "mp3"     WAV → "wav"
```

State:
- `question.rule.allowedFileTypes` — string[]
- `question.api.endpoint` — string
- `question.api.response_key` — string

### 5.3 Export

Add to `src/components/question-type/index.js`:
```js
export { default as SettingGeo } from './SettingGeo';
export { default as SettingAttachment } from './SettingAttachment';
```

Import in `QuestionSetting.jsx`.

---

## 6. `toWebform` — entity key mapping detail

```
Editor internal state (cascade question):
  q.api.endpoint = "https://..."
  q.entityExtra = { name: "School", parentId: 5 }

toWebform output:
  {
    type: "cascade",
    api: { endpoint: "https://..." },
    extra: { type: "entity", name: "School", parentId: 5 }
  }
```

`query_params` on attachment API is **not configured in the editor** — the
renderer generates it from `allowedFileTypes` automatically.

---

## 7. Data Flow Diagram

```
Host JSON (webform)
    │
    ▼ toEditor()
    │  cascade + extra.type=="entity" → entityExtra (internal)
    │  center {lat,lng} → center [lat, lng] (normalize)
    │
Editor pullstate state
    │  new types: geotrace, geoshape, signature, attachment
    │  new props: disabled, dependency_rule, center
    │             entityExtra, partialRequired
    │             checkStrategy, expandAll
    │             rule.allowedFileTypes, api.response_key
    │             leading_question, show_repeat_in_question_level
    │             is_repeat_identifier
    │
    ▼ toWebform()
    │  entityExtra → extra: { type:"entity", name, parentId }
    │  center [lat,lng] → center [lat, lng] (or omit)
    │  per-type cleanup of irrelevant keys
    │
Output JSON → matches example.json shape exactly
```

---

## File Count

| Action | File |
|--------|------|
| NEW | `src/components/question-type/SettingGeo.jsx` |
| NEW | `src/components/question-type/SettingAttachment.jsx` |
| MOD | `src/lib/store.js` |
| MOD | `src/lib/data.js` |
| MOD | `src/lib/i18n.js` |
| MOD | `src/components/QuestionSetting.jsx` |
| MOD | `src/components/QuestionGroupSetting.jsx` |
| MOD | `src/components/QuestionSkipLogic.jsx` |
| MOD | `src/components/question-type/SettingCascade.jsx` |
| MOD | `src/components/question-type/SettingTree.jsx` |
| MOD | `src/components/question-type/index.js` |

Total: **2 new files, 9 modified files** (was 2 new + 7 modified; entity removal
and SettingGeo addition net +2 modified).
