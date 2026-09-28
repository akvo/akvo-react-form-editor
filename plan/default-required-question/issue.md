# Feature: Make "Required" (Mandatory) Default Selected for New Questions

## Summary
When users create a new question in the form editor (either upon opening an empty editor or adding a new question/question group), the question should default to having the `required` (Mandatory) setting checked (`true`).

## Problem Statement
Currently, newly added questions default to `required: false`. In most Akvo survey workflows, survey questions are mandatory by default, forcing form authors to manually toggle the "Mandatory" checkbox for every question they create.

## Proposed Changes
1. **Store Factory (`src/lib/store.js`)**:
   - Update `defaultQuestion` default argument `required = true` (previously `false`).
2. **Host Configuration Fallback (`src/index.js`)**:
   - Update `sanitizeDefaultQuestion` to use nullish coalescing:
     ```js
     required: defaultQuestion?.required !== null && defaultQuestion?.required !== undefined 
       ? defaultQuestion.required 
       : true,
     ```
   - This ensures host applications can still explicitly pass `defaultQuestion: { required: false }` if desired, while defaulting to `true` when unset.
3. **Preserve Existing Form Data (`src/lib/data.js`)**:
   - Ensure `data.toEditor` continues to preserve existing `required: false` values when loading pre-existing survey definitions.

## Acceptance Criteria
- [ ] Newly added questions have `required: true` by default.
- [ ] Initial question in an empty editor has `required: true` by default.
- [ ] Host applications can override the default with `<WebformEditor defaultQuestion={{ required: false }} />`.
- [ ] Loading existing forms with `required: false` preserves `required: false`.
- [ ] All unit tests pass (`yarn test:unit`).
