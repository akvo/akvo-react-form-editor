import { Store } from 'pullstate';
import UIStaticText from './i18n';
import { dummyName } from './debug';
import * as locale from 'locale-codes';
import uniqBy from 'lodash/uniqBy';
import snakeCase from 'lodash/snakeCase';

const localeDropdownValue = uniqBy(
  locale.all
    .filter((x) => x.location)
    .map((x) => ({ label: x.name, value: x['iso639-1'] }))
    .filter((x) => x.value),
  'value'
);

const generateId = () => new Date().getTime();

const questionType = {
  input: 'input',
  number: 'number',
  cascade: 'cascade',
  geo: 'geo',
  text: 'text',
  date: 'date',
  option: 'option',
  multiple_option: 'multiple_option',
  tree: 'tree',
  table: 'table',
  image: 'image',
  autofield: 'autofield',
};

const defaultForm = () => {
  return {
    id: generateId(),
    name: 'New Form',
    version: 1,
    description: 'New Form Description',
  };
};

const defaultQuestion = ({
  questionGroup,
  label,
  name,
  prevOrder = 0,
  type = questionType.input,
  required = false,
  params = {},
}) => {
  const labelTemp = label ? label : dummyName(5);
  const q = {
    id: generateId() + 2,
    order: prevOrder + 1,
    questionGroupId: questionGroup.id,
    label: labelTemp,
    name: name ? name : snakeCase(labelTemp),
    short_label: null,
    type: type,
    required: required,
    meta: false,
    tooltip: null,
    displayOnly: false,
    pre: {},
  };
  if (type === questionType.option || type === questionType.multiple_option) {
    return {
      ...q,
      options: [],
      allowOther: false,
    };
  }
  if (type === questionType.cascade) {
    return {
      ...q,
      api: {
        endpoint: null,
        initial: 0,
        list: false,
      },
    };
  }
  return { ...q, ...params };
};

const defaultQuestionGroup = ({
  label = dummyName(),
  name,
  prevOrder = 0,
  defaultQuestionParam = {},
}) => {
  const qg = {
    id: generateId() + 1,
    label: label,
    name: name ? name : snakeCase(label),
    order: prevOrder + 1,
    description: null,
    repeatable: false,
  };
  return {
    ...qg,
    questions: [
      defaultQuestion({ questionGroup: qg, ...defaultQuestionParam }),
    ],
  };
};

const UIStore = new Store({
  current: {
    tab: 'edit-form',
    formId: null,
    questionGroupId: null,
    questionId: null,
  },
  activeEditFormSetting: true,
  activeQuestionGroups: [],
  activeEditQuestionGroups: [],
  activeMoveQuestionGroup: null,
  isCopyingQuestionGroup: false,
  activeEditQuestions: [],
  activeMoveQuestion: null,
  isCopyingQuestion: false,
  UIText: UIStaticText.en,
  localeDropdownValue: localeDropdownValue,
  existingTranslation: null,
  activeTranslationQuestionGroups: [],
  activeEditTranslationQuestionGroups: [],
  activeEditTranslationQuestions: [],
  hostParams: {},
});

const ErrorStore = new Store({
  questionGroupErrors: [], // [{ id: int, message:'' }]
  questionErrors: [], // [{ id: int, field: '', message:'' }]
});

const FormStore = new Store({
  ...defaultForm(),
});

const QuestionGroupStore = new Store({
  questionGroups: [defaultQuestionGroup({})],
});

const formFn = {
  add: defaultForm,
  store: FormStore,
};

const questionGroupFn = {
  add: defaultQuestionGroup,
  store: QuestionGroupStore,
};

const questionFn = {
  add: defaultQuestion,
  update: ({ id, type, questionGroup, params }) =>
    defaultQuestion({
      id: id,
      type: type,
      questionGroup: questionGroup,
      ...params,
    }),
};

export {
  UIStore,
  ErrorStore,
  questionType,
  formFn,
  questionGroupFn,
  questionFn,
  generateId,
};
