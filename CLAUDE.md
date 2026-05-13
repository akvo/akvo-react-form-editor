# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## MCP Tools: code-review-graph

**IMPORTANT: This project has a knowledge graph. ALWAYS use the
code-review-graph MCP tools BEFORE using Grep/Glob/Read to explore
the codebase.** The graph is faster, cheaper (fewer tokens), and gives
you structural context (callers, dependents, test coverage) that file
scanning cannot.

### When to use graph tools FIRST

- **Exploring code**: `semantic_search_nodes` or `query_graph` instead of Grep
- **Understanding impact**: `get_impact_radius` instead of manually tracing imports
- **Code review**: `detect_changes` + `get_review_context` instead of reading entire files
- **Finding relationships**: `query_graph` with callers_of/callees_of/imports_of/tests_for
- **Architecture questions**: `get_architecture_overview` + `list_communities`

Fall back to Grep/Glob/Read **only** when the graph doesn't cover what you need.

### Key Tools

| Tool | Use when |
|------|----------|
| `detect_changes` | Reviewing code changes — gives risk-scored analysis |
| `get_review_context` | Need source snippets for review — token-efficient |
| `get_impact_radius` | Understanding blast radius of a change |
| `get_affected_flows` | Finding which execution paths are impacted |
| `query_graph` | Tracing callers, callees, imports, tests, dependencies |
| `semantic_search_nodes` | Finding functions/classes by name or keyword |
| `get_architecture_overview` | Understanding high-level codebase structure |
| `refactor_tool` | Planning renames, finding dead code |

### Workflow

1. The graph auto-updates on file changes (via hooks).
2. Use `detect_changes` for code review.
3. Use `get_affected_flows` to understand impact.
4. Use `query_graph` pattern="tests_for" to check coverage.

---

## Commands

### Library development (root)
```bash
yarn start          # watch mode — rebuilds dist/ on change
yarn build          # one-off build to dist/
yarn test           # full suite: unit tests + lint + build
yarn test:unit      # jest only (fast)
yarn test:watch     # jest in watch mode
yarn test:lint      # eslint only
```

### Example app (separate workspace)
```bash
cd example && yarn install && yarn start   # run demo at localhost:3000
```

> The library and the example are two separate yarn workspaces with separate `node_modules`. Run `yarn install` in both root and `example/` when setting up.

### Run a single test
```bash
# jest --testPathPattern is available via react-scripts
yarn test:unit -- --testPathPattern="index.test"
```

---

## Architecture

### What this project is

A React component library (`WebformEditor`) that provides a GUI for building survey definitions compatible with [akvo-react-form](https://www.npmjs.com/package/akvo-react-form). It exports a single default component and ships as `dist/index.js` + `dist/index.css` via microbundle-crl.

### State management — `src/lib/store.js`

All state lives in four [pullstate](https://lostpebble.github.io/pullstate/) stores. Components subscribe with `.useState()` and mutate with `.update()`.

| Store | Holds |
|-------|-------|
| `UIStore` | Active tab, open/collapsed panels, move/copy flags, UI text (i18n), host-provided config params |
| `FormStore` (via `formFn.store`) | Form-level metadata: id, name, version, description, languages, translations |
| `QuestionGroupStore` (via `questionGroupFn.store`) | The full `questionGroups[]` tree including all nested `questions[]` |
| `ErrorStore` | Validation errors for groups and questions before save |

### Data format conversion — `src/lib/data.js`

The webform JSON (output/input) uses snake_case keys (`question_group`, `question`) and different dependency offset semantics. The editor uses camelCase (`questionGroups`, `questions`).

- `data.toEditor(webformJson)` — converts incoming JSON into editor-internal shape
- `data.toWebform(formStore, questionGroups)` — converts editor state back to webform JSON on save
- `data.generateTranslations(key, value, saved, language)` — merges a single field translation into the translations array

### Component tree

```
WebformEditor (src/index.js)        ← single exported component
├── Tabs (Edit Form / Translations / Preview)
│
├── [edit-form tab]
│   ├── FormDefinition              ← form-level fields (name, description, languages)
│   └── QuestionGroupDefinition[]   ← one card per question group
│       └── QuestionDefinition[]    ← one row per question
│           ├── QuestionSetting     ← common fields (label, type, required, …)
│           ├── QuestionSkipLogic   ← dependency / skip-logic rules
│           ├── QuestionCustomParams
│           └── [question-type/]    ← type-specific settings panel
│               SettingInput | SettingNumber | SettingOption |
│               SettingCascade | SettingTree | SettingDate |
│               SettingTable | SettingImage | SettingAutofield
│
├── [translations tab]
│   └── FormTranslations
│       ├── FormDefinitionTranslation
│       ├── QuestionGroupDefinitionTranslation[]
│       └── QuestionDefinitionTranslation[]
│
└── [preview tab]
    └── FormPreview                 ← renders live form via akvo-react-form
```

### Adding a new question type

1. Add the key/value to `questionType` in `src/lib/store.js`.
2. Create `src/components/question-type/SettingXxx.jsx` and export it from `src/components/question-type/index.js`.
3. Wire it into `QuestionSetting.jsx` (type switch) and `data.js` (`toEditor` / `toWebform` cleanup logic).

### Key conventions

- **CSS Modules** — all class names are prefixed `arfe-` at build time. Use `styles['my-class']` from `styles.module.css`.
- **i18n** — all user-visible strings live in `src/lib/i18n.js`. Reference them via `UIText` from `UIStore`.
- **Host params** — external config (cascade URLs, tree dropdown values, hint URLs, custom params) is passed as props to `WebformEditor`, sanitized in `useEffect`, and stored in `UIStore.hostParams`. Deep components read from `UIStore` rather than receiving props.
- **`generateId()`** — returns `Date.now()`. IDs for questions and groups are integers, not UUIDs.
