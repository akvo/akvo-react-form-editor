function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var React = require('react');
var React__default = _interopDefault(React);
require('antd/dist/antd.min.css');
var antd = require('antd');
var pullstate = require('pullstate');
var locale = require('locale-codes');
var uniqBy = _interopDefault(require('lodash/uniqBy'));
var snakeCase$1 = _interopDefault(require('lodash/snakeCase'));
var tb = require('react-icons/tb');
var ri = require('react-icons/ri');
var bi = require('react-icons/bi');
var md = require('react-icons/md');
var ai = require('react-icons/ai');
var lodash = require('lodash');
var orderBy = _interopDefault(require('lodash/orderBy'));
require('akvo-react-form/dist/index.css');
var akvoReactForm = require('akvo-react-form');
var reactColor = require('react-color');
var isEmpty = _interopDefault(require('lodash/isEmpty'));
var vsc = require('react-icons/vsc');

function _extends() {
  _extends = Object.assign ? Object.assign.bind() : function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };
  return _extends.apply(this, arguments);
}

var styles = {"container":"arfe-container","form-definition":"arfe-form-definition","form-item-no-bottom-margin":"arfe-form-item-no-bottom-margin","input-checkbox-wrapper":"arfe-input-checkbox-wrapper","button-icon":"arfe-button-icon","reorder-wrapper":"arfe-reorder-wrapper","reorder-button":"arfe-reorder-button","select-dropdown":"arfe-select-dropdown","tabs-wrapper":"arfe-tabs-wrapper","tabs-wrapper-sticky":"arfe-tabs-wrapper-sticky","right-tabs":"arfe-right-tabs","tab-pane-name-icon":"arfe-tab-pane-name-icon","question-group-title":"arfe-question-group-title","space-align-right":"arfe-space-align-right","space-align-left":"arfe-space-align-left","space-vertical-align-left":"arfe-space-vertical-align-left","space-vertical-align-right":"arfe-space-vertical-align-right","more-question-setting-text":"arfe-more-question-setting-text","dependant-list-box":"arfe-dependant-list-box","tags":"arfe-tags","tags-active":"arfe-tags-active","translation-form-item":"arfe-translation-form-item","translation-form-item-card":"arfe-translation-form-item-card","field-error-wrapper":"arfe-field-error-wrapper"};

var FormWrapper = function FormWrapper(_ref) {
  var children = _ref.children;

  var _Form$useForm = antd.Form.useForm(),
      form = _Form$useForm[0];

  var handleOnValuesChange = function handleOnValuesChange() {};

  var handleOnFinish = function handleOnFinish() {};

  var handleOnFinishFailed = function handleOnFinishFailed() {};

  return /*#__PURE__*/React__default.createElement(antd.Form, {
    form: form,
    key: "akvo-react-form-editor",
    name: "akvo-react-form-editor",
    layout: "vertical",
    onValuesChange: handleOnValuesChange,
    onFinish: handleOnFinish,
    onFinishFailed: handleOnFinishFailed
  }, children);
};

var UIStaticText = {
  en: {
    inputFormNameLabel: 'Form Name',
    inputFormDescriptionLabel: 'Form Description',
    inputFormTranslationLabel: 'Add New Translation',
    inputFormExistingTranslationsLabel: 'Existing Translations',
    inputFormDefaultLanguageLabel: 'Default Language',
    formTabPane: 'Edit Form',
    formTranslationPane: 'Translations',
    previewTabPane: 'Preview',
    questionCount: 'Questions',
    questionGroupCount: 'Question Groups',
    mandatoryQuestionCount: 'Mandatory Questions',
    version: 'Version',
    inputQuestionGroupNameLabel: 'Question Group Name',
    inputQuestionGroupLabelLabel: 'Question Group Label',
    inputQuestionGroupDescriptionLabel: 'Question Group Description',
    inputRepeatThisGroupCheckbox: 'Repeat this group',
    inputRepeatTextLabel: 'Repeat Text',
    buttonShowQuestionsText: 'Show Questions',
    buttonHideQuestionsText: 'Hide Questions',
    buttonEditGroupText: 'Edit Group',
    buttonCancelEditGroupText: 'Cancel Edit Group',
    buttonDeleteText: 'Delete',
    buttonCancelText: 'Cancel',
    buttonAddNewQuestionGroupText: 'Insert group here',
    buttonCopyQuestionGroupText: 'Copy group here',
    buttonMoveQuestionGroupText: 'Move group here',
    buttonAddNewQuestionText: 'Add new question',
    buttonCopyQuestionText: 'Copy question here',
    buttonMoveQuestionText: 'Move question here',
    inputQuestionLabelLabel: 'Question Label',
    inputQuestionNameLabel: 'Question Name',
    inputQuestionTypeLabel: 'Question Type',
    inputQuestionVariableNameLabel: 'Variable Name',
    inputQuestionTooltipLabel: 'Question Tooltip',
    inputQuestionRequiredCheckbox: 'Required',
    inputQuestionMetaCheckbox: 'Data point name',
    inputQuestionMetaCheckboxHint: 'A string value that represents the name of the data point',
    buttonSaveText: 'Save',
    questionSettingTabPane: 'Setting',
    questionSkipLogicTabPane: 'Skip Logic',
    questionCustomParamsTabPane: 'Custom Params',
    questionExtraTabPane: 'Extra',
    inputQuestionDependentToLabel: 'Dependent to Question',
    inputQuestionDependentLogicLabel: 'Logic',
    inputQuestionDependentAnswerLabel: 'Value',
    questionMoreInputTypeSettingText: 'More Input Question Setting',
    inputQuestionRequireDoubleEntryCheckbox: 'Require double entry of answer',
    inputQuestionHiddenStringCheckbox: 'Hidden String/Password',
    questionMoreInputNumberSettingText: 'More Number Question Setting',
    inputQuestionAllowDecimalCheckbox: 'Allow Decimal',
    inputQuestionMinimumValueLabel: 'Minimum Value',
    inputQuestionMaximumValueLabel: 'Maximum Value',
    inputQuestionMinimumValidationText: 'Min value must be less than',
    inputQuestionMaximumValidationText: 'Max value must be greater than',
    inputQuestionEqualValueLabel: 'Equal Value',
    questionMoreOptionTypeSettingText: 'More Option Question Setting',
    questionMoreOptionTranslationText: 'Option Translations',
    inputQuestionAllowOtherCheckbox: 'Allow Other',
    inputQuestionAllowOtherTextLabel: 'Allow Other Text',
    inputQuestionOptionNameLabel: 'Option',
    questionMoreTreeSettingText: 'More Nested List Question Setting',
    inputSelectTreeDropdownValueLabel: 'Select Nested List Value',
    deleteQuestionGroupError: 'Unable to delete question group',
    deleteQuestionError: 'Unable to delete question',
    infoNoDependentQuestionText: 'No dependent questions',
    questionMoreCascadeSettingText: 'More Cascade Question Setting',
    inputQuestionEndpointLabel: 'Cascade Endpoint',
    inputQuestionEndpointValidationText: 'Invalid URL',
    inputQuestionInitialValueLabel: 'Initial Value',
    inputQuestionListCheckbox: 'Use Specific Object Name',
    inputQuestionListLabel: 'Object Name',
    questionMoreInputDateSettingText: 'More Date Question Setting',
    inputQuestionAfterDateValueLabel: 'After Date',
    inputQuestionBeforeDateValueLabel: 'Before Date',
    alertDeleteQuestionTitle: 'Delete Question',
    alertDeleteQuestion: 'Do you want to delete this question?',
    alertDeleteQuestionGroupTitle: 'Delete Question Group',
    alertDeleteQuestionGroup: 'Do you want to delete this question group and all the questions?',
    questionMoreTableTypeSettingText: 'More Table Question Setting',
    inputColumnNameLabel: 'Column Name',
    inputColumnTypeLabel: 'Column Type',
    inputColumnOptionsLabel: 'Column Options',
    questionTableTypeDefineOptionsText: 'Define Options',
    questionHintSettingText: 'Hint Setting',
    inputQuestionStaticValueLabel: 'Static Value',
    inputSelectHintEndpointLabel: 'Hint Endpoint',
    inputSelectHintPathLabel: 'Hint Path',
    inputQuestionHintButtonTextLabel: 'Hint Button Text',
    questionMoreImageTypeSettingText: 'More Image Question Setting',
    inputQuestionImageLimitValidationText: 'Limit / Max file size',
    questionMoreAutofieldTypeSettingText: 'More Autofield Question Setting',
    inputQuestionAutofieldMultiline: 'Support Multiline Function',
    inputQuestionAutofieldFnString: 'Add Function (String) Here',
    inputQuestionAutofieldFnColor: 'Add Function Color Here',
    questionStatsSettingTest: 'Stats Setting',
    inputStatsUrlText: 'Add Stats Endpoint Here',
    inpuStatsUrlValidationText: 'Invalid URL format',
    questionIdText: 'Question ID',
    copyQuestionIdToClipboardText: 'Copy Question ID',
    copiedText: 'Copied',
    validationErrorTitle: 'Validation Error',
    validationErrorDescription: 'Please fix all validation before save the form.',
    inputQuestionShortLabelLabel: 'Short Label',
    inputQuestionShortLabelTooltip: 'The value entered in the Sort Label field will be used as a replacement for the question label in the Excel export.',
    inputQuestionDisplayOnlyCheckbox: 'Display Only',
    inputQuestionDisplayOnlyCheckboxTooltip: 'If you check "Display Only", the answer value for this question will not be submitted.',
    evaluatefnStringButton: 'Evaluate Function',
    evaluatefnStringError: 'Error evaluating function string',
    evaluatefnStringSuccess: 'Function string evaluated correctly!',
    prefilledQuestionTitle: 'Would you like to add a prefill to this question?',
    prefilledYesText: 'Yes',
    prefilledNoText: 'No',
    prefilledSourceQuestion: 'Source Question',
    prefilledSQPlaceholder: 'Select source question',
    prefilledSourceAnswer: 'Source Answer',
    prefilledSAPlaceholder: 'Select source answer',
    prefilledDefaultValue: 'Default Value',
    prefilledDVPlaceholder: 'Select default value',
    addonBefore: 'AddonBefore',
    addonBeforePlaceholder: 'e.g., +62 or other required prefixes',
    addonAfter: 'AddonAfter',
    addonAfterPlaceholder: 'e.g., Kilogram, Unit, or any other necessary suffix.'
  }
};

var fake = [
	"Lorem",
	"ipsum",
	"dolor",
	"sit",
	"amet",
	"consectetur",
	"adipiscing",
	"elit",
	"Sed",
	"aliquet",
	"quis",
	"neque",
	"quis",
	"ultrices",
	"Nullam",
	"at",
	"ante",
	"lorem",
	"Fusce",
	"id",
	"mauris",
	"sed",
	"augue",
	"porta",
	"ultrices",
	"eu",
	"vitae",
	"mauris",
	"Fusce",
	"sed",
	"nisl",
	"eget",
	"augue",
	"commodo",
	"ullamcorper",
	"Phasellus",
	"lectus",
	"augue",
	"eleifend",
	"sit",
	"amet",
	"sapien",
	"sit",
	"amet",
	"tincidunt",
	"pretium",
	"nisl",
	"Donec",
	"tristique",
	"eleifend",
	"sapien",
	"blandit",
	"suscipit",
	"eros",
	"dapibus",
	"ac",
	"Aliquam",
	"facilisis",
	"ornare",
	"lorem",
	"at",
	"iaculis",
	"Duis",
	"consequat",
	"magna",
	"at",
	"tincidunt",
	"sodales",
	"Nam",
	"eu",
	"interdum",
	"augue"
];

var titleCase = function titleCase(str) {
  return str.replace(/\w\S*/g, function (txt) {
    return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
  });
};

var getWords = function getWords() {
  return fake[Math.floor(Math.random() * fake.length)];
};

var dummyName = function dummyName(len) {
  if (len === void 0) {
    len = 2;
  }

  return Array.from('x'.repeat(len)).reduce(function (curr) {
    return curr + ' ' + getWords();
  }, titleCase(getWords()));
};

var localeDropdownValue = uniqBy(locale.all.filter(function (x) {
  return x.location;
}).map(function (x) {
  return {
    label: x.name,
    value: x['iso639-1']
  };
}).filter(function (x) {
  return x.value;
}), 'value');

var generateId = function generateId() {
  return new Date().getTime();
};

var questionType = {
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
  autofield: 'autofield'
};

var defaultForm = function defaultForm() {
  return {
    id: generateId(),
    name: 'New Form',
    version: 1,
    description: 'New Form Description'
  };
};

var defaultQuestion = function defaultQuestion(_ref) {
  var questionGroup = _ref.questionGroup,
      label = _ref.label,
      name = _ref.name,
      _ref$prevOrder = _ref.prevOrder,
      prevOrder = _ref$prevOrder === void 0 ? 0 : _ref$prevOrder,
      _ref$type = _ref.type,
      type = _ref$type === void 0 ? questionType.input : _ref$type,
      _ref$required = _ref.required,
      required = _ref$required === void 0 ? false : _ref$required,
      _ref$params = _ref.params,
      params = _ref$params === void 0 ? {} : _ref$params;
  var labelTemp = label ? label : dummyName(5);
  var q = {
    id: generateId() + 2,
    order: prevOrder + 1,
    questionGroupId: questionGroup.id,
    label: labelTemp,
    name: name ? name : snakeCase$1(labelTemp),
    short_label: null,
    type: type,
    required: required,
    meta: false,
    tooltip: null,
    displayOnly: false,
    pre: {}
  };

  if (type === questionType.option || type === questionType.multiple_option) {
    return _extends({}, q, {
      options: [],
      allowOther: false
    });
  }

  if (type === questionType.cascade) {
    return _extends({}, q, {
      api: {
        endpoint: null,
        initial: 0,
        list: false
      }
    });
  }

  return _extends({}, q, params);
};

var defaultQuestionGroup = function defaultQuestionGroup(_ref2) {
  var _ref2$label = _ref2.label,
      label = _ref2$label === void 0 ? dummyName() : _ref2$label,
      name = _ref2.name,
      _ref2$prevOrder = _ref2.prevOrder,
      prevOrder = _ref2$prevOrder === void 0 ? 0 : _ref2$prevOrder,
      _ref2$defaultQuestion = _ref2.defaultQuestionParam,
      defaultQuestionParam = _ref2$defaultQuestion === void 0 ? {} : _ref2$defaultQuestion;
  var qg = {
    id: generateId() + 1,
    label: label,
    name: name ? name : snakeCase$1(label),
    order: prevOrder + 1,
    description: null,
    repeatable: false
  };
  return _extends({}, qg, {
    questions: [defaultQuestion(_extends({
      questionGroup: qg
    }, defaultQuestionParam))]
  });
};

var UIStore = new pullstate.Store({
  current: {
    tab: 'edit-form',
    formId: null,
    questionGroupId: null,
    questionId: null
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
  hostParams: {}
});
var ErrorStore = new pullstate.Store({
  questionGroupErrors: [],
  questionErrors: []
});
var FormStore = new pullstate.Store(_extends({}, defaultForm()));
var QuestionGroupStore = new pullstate.Store({
  questionGroups: [defaultQuestionGroup({})]
});
var formFn = {
  add: defaultForm,
  store: FormStore
};
var questionGroupFn = {
  add: defaultQuestionGroup,
  store: QuestionGroupStore
};
var questionFn = {
  add: defaultQuestion,
  update: function update(_ref3) {
    var id = _ref3.id,
        type = _ref3.type,
        questionGroup = _ref3.questionGroup,
        params = _ref3.params;
    return defaultQuestion(_extends({
      id: id,
      type: type,
      questionGroup: questionGroup
    }, params));
  }
};

var IconContext = /*#__PURE__*/React.createContext({});

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);

  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    enumerableOnly && (symbols = symbols.filter(function (sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    })), keys.push.apply(keys, symbols);
  }

  return keys;
}

function _objectSpread2(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = null != arguments[i] ? arguments[i] : {};
    i % 2 ? ownKeys(Object(source), !0).forEach(function (key) {
      _defineProperty(target, key, source[key]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) {
      Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
    });
  }

  return target;
}

function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}

function _iterableToArrayLimit(arr, i) {
  var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"];

  if (_i == null) return;
  var _arr = [];
  var _n = true;
  var _d = false;

  var _s, _e;

  try {
    for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);

      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }

  return _arr;
}

function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;

  for (var i = 0, arr2 = new Array(len); i < len; i++) {
    arr2[i] = arr[i];
  }

  return arr2;
}

function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return _arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}

function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

function _slicedToArray(arr, i) {
  return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();
}

function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

function _objectWithoutProperties(source, excluded) {
  if (source == null) return {};
  var target = _objectWithoutPropertiesLoose(source, excluded);
  var key, i;

  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);

    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
      target[key] = source[key];
    }
  }

  return target;
}

var commonjsGlobal = typeof globalThis !== 'undefined' ? globalThis : typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};

function createCommonjsModule(fn, module) {
	return module = { exports: {} }, fn(module, module.exports), module.exports;
}

function commonjsRequire () {
	throw new Error('Dynamic requires are not currently supported by @rollup/plugin-commonjs');
}

var classnames = createCommonjsModule(function (module) {
/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/
/* global define */

(function () {

	var hasOwn = {}.hasOwnProperty;

	function classNames() {
		var classes = [];

		for (var i = 0; i < arguments.length; i++) {
			var arg = arguments[i];
			if (!arg) continue;

			var argType = typeof arg;

			if (argType === 'string' || argType === 'number') {
				classes.push(arg);
			} else if (Array.isArray(arg)) {
				if (arg.length) {
					var inner = classNames.apply(null, arg);
					if (inner) {
						classes.push(inner);
					}
				}
			} else if (argType === 'object') {
				if (arg.toString !== Object.prototype.toString && !arg.toString.toString().includes('[native code]')) {
					classes.push(arg.toString());
					continue;
				}

				for (var key in arg) {
					if (hasOwn.call(arg, key) && arg[key]) {
						classes.push(key);
					}
				}
			}
		}

		return classes.join(' ');
	}

	if ( module.exports) {
		classNames.default = classNames;
		module.exports = classNames;
	} else {
		window.classNames = classNames;
	}
}());
});

function _typeof(obj) {
  "@babel/helpers - typeof";

  return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) {
    return typeof obj;
  } : function (obj) {
    return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
  }, _typeof(obj);
}

/**
 * Take input from [0, n] and return it as [0, 1]
 * @hidden
 */
function bound01(n, max) {
    if (isOnePointZero(n)) {
        n = '100%';
    }
    var isPercent = isPercentage(n);
    n = max === 360 ? n : Math.min(max, Math.max(0, parseFloat(n)));
    // Automatically convert percentage into number
    if (isPercent) {
        n = parseInt(String(n * max), 10) / 100;
    }
    // Handle floating point rounding errors
    if (Math.abs(n - max) < 0.000001) {
        return 1;
    }
    // Convert into [0, 1] range if it isn't already
    if (max === 360) {
        // If n is a hue given in degrees,
        // wrap around out-of-range values into [0, 360] range
        // then convert into [0, 1].
        n = (n < 0 ? (n % max) + max : n % max) / parseFloat(String(max));
    }
    else {
        // If n not a hue given in degrees
        // Convert into [0, 1] range if it isn't already.
        n = (n % max) / parseFloat(String(max));
    }
    return n;
}
/**
 * Need to handle 1.0 as 100%, since once it is a number, there is no difference between it and 1
 * <http://stackoverflow.com/questions/7422072/javascript-how-to-detect-number-as-a-decimal-including-1-0>
 * @hidden
 */
function isOnePointZero(n) {
    return typeof n === 'string' && n.indexOf('.') !== -1 && parseFloat(n) === 1;
}
/**
 * Check to see if string passed in is a percentage
 * @hidden
 */
function isPercentage(n) {
    return typeof n === 'string' && n.indexOf('%') !== -1;
}
/**
 * Return a valid alpha value [0,1] with all invalid values being set to 1
 * @hidden
 */
function boundAlpha(a) {
    a = parseFloat(a);
    if (isNaN(a) || a < 0 || a > 1) {
        a = 1;
    }
    return a;
}
/**
 * Replace a decimal with it's percentage value
 * @hidden
 */
function convertToPercentage(n) {
    if (n <= 1) {
        return "".concat(Number(n) * 100, "%");
    }
    return n;
}
/**
 * Force a hex value to have 2 characters
 * @hidden
 */
function pad2(c) {
    return c.length === 1 ? '0' + c : String(c);
}

// `rgbToHsl`, `rgbToHsv`, `hslToRgb`, `hsvToRgb` modified from:
// <http://mjijackson.com/2008/02/rgb-to-hsl-and-rgb-to-hsv-color-model-conversion-algorithms-in-javascript>
/**
 * Handle bounds / percentage checking to conform to CSS color spec
 * <http://www.w3.org/TR/css3-color/>
 * *Assumes:* r, g, b in [0, 255] or [0, 1]
 * *Returns:* { r, g, b } in [0, 255]
 */
function rgbToRgb(r, g, b) {
    return {
        r: bound01(r, 255) * 255,
        g: bound01(g, 255) * 255,
        b: bound01(b, 255) * 255,
    };
}
function hue2rgb(p, q, t) {
    if (t < 0) {
        t += 1;
    }
    if (t > 1) {
        t -= 1;
    }
    if (t < 1 / 6) {
        return p + (q - p) * (6 * t);
    }
    if (t < 1 / 2) {
        return q;
    }
    if (t < 2 / 3) {
        return p + (q - p) * (2 / 3 - t) * 6;
    }
    return p;
}
/**
 * Converts an HSL color value to RGB.
 *
 * *Assumes:* h is contained in [0, 1] or [0, 360] and s and l are contained [0, 1] or [0, 100]
 * *Returns:* { r, g, b } in the set [0, 255]
 */
function hslToRgb(h, s, l) {
    var r;
    var g;
    var b;
    h = bound01(h, 360);
    s = bound01(s, 100);
    l = bound01(l, 100);
    if (s === 0) {
        // achromatic
        g = l;
        b = l;
        r = l;
    }
    else {
        var q = l < 0.5 ? l * (1 + s) : l + s - l * s;
        var p = 2 * l - q;
        r = hue2rgb(p, q, h + 1 / 3);
        g = hue2rgb(p, q, h);
        b = hue2rgb(p, q, h - 1 / 3);
    }
    return { r: r * 255, g: g * 255, b: b * 255 };
}
/**
 * Converts an RGB color value to HSV
 *
 * *Assumes:* r, g, and b are contained in the set [0, 255] or [0, 1]
 * *Returns:* { h, s, v } in [0,1]
 */
function rgbToHsv(r, g, b) {
    r = bound01(r, 255);
    g = bound01(g, 255);
    b = bound01(b, 255);
    var max = Math.max(r, g, b);
    var min = Math.min(r, g, b);
    var h = 0;
    var v = max;
    var d = max - min;
    var s = max === 0 ? 0 : d / max;
    if (max === min) {
        h = 0; // achromatic
    }
    else {
        switch (max) {
            case r:
                h = (g - b) / d + (g < b ? 6 : 0);
                break;
            case g:
                h = (b - r) / d + 2;
                break;
            case b:
                h = (r - g) / d + 4;
                break;
        }
        h /= 6;
    }
    return { h: h, s: s, v: v };
}
/**
 * Converts an HSV color value to RGB.
 *
 * *Assumes:* h is contained in [0, 1] or [0, 360] and s and v are contained in [0, 1] or [0, 100]
 * *Returns:* { r, g, b } in the set [0, 255]
 */
function hsvToRgb(h, s, v) {
    h = bound01(h, 360) * 6;
    s = bound01(s, 100);
    v = bound01(v, 100);
    var i = Math.floor(h);
    var f = h - i;
    var p = v * (1 - s);
    var q = v * (1 - f * s);
    var t = v * (1 - (1 - f) * s);
    var mod = i % 6;
    var r = [v, q, p, p, t, v][mod];
    var g = [t, v, v, q, p, p][mod];
    var b = [p, p, t, v, v, q][mod];
    return { r: r * 255, g: g * 255, b: b * 255 };
}
/**
 * Converts an RGB color to hex
 *
 * Assumes r, g, and b are contained in the set [0, 255]
 * Returns a 3 or 6 character hex
 */
function rgbToHex(r, g, b, allow3Char) {
    var hex = [
        pad2(Math.round(r).toString(16)),
        pad2(Math.round(g).toString(16)),
        pad2(Math.round(b).toString(16)),
    ];
    // Return a 3 character hex if possible
    if (allow3Char &&
        hex[0].startsWith(hex[0].charAt(1)) &&
        hex[1].startsWith(hex[1].charAt(1)) &&
        hex[2].startsWith(hex[2].charAt(1))) {
        return hex[0].charAt(0) + hex[1].charAt(0) + hex[2].charAt(0);
    }
    return hex.join('');
}
/** Converts a hex value to a decimal */
function convertHexToDecimal(h) {
    return parseIntFromHex(h) / 255;
}
/** Parse a base-16 hex value into a base-10 integer */
function parseIntFromHex(val) {
    return parseInt(val, 16);
}

// https://github.com/bahamas10/css-color-names/blob/master/css-color-names.json
/**
 * @hidden
 */
var names = {
    aliceblue: '#f0f8ff',
    antiquewhite: '#faebd7',
    aqua: '#00ffff',
    aquamarine: '#7fffd4',
    azure: '#f0ffff',
    beige: '#f5f5dc',
    bisque: '#ffe4c4',
    black: '#000000',
    blanchedalmond: '#ffebcd',
    blue: '#0000ff',
    blueviolet: '#8a2be2',
    brown: '#a52a2a',
    burlywood: '#deb887',
    cadetblue: '#5f9ea0',
    chartreuse: '#7fff00',
    chocolate: '#d2691e',
    coral: '#ff7f50',
    cornflowerblue: '#6495ed',
    cornsilk: '#fff8dc',
    crimson: '#dc143c',
    cyan: '#00ffff',
    darkblue: '#00008b',
    darkcyan: '#008b8b',
    darkgoldenrod: '#b8860b',
    darkgray: '#a9a9a9',
    darkgreen: '#006400',
    darkgrey: '#a9a9a9',
    darkkhaki: '#bdb76b',
    darkmagenta: '#8b008b',
    darkolivegreen: '#556b2f',
    darkorange: '#ff8c00',
    darkorchid: '#9932cc',
    darkred: '#8b0000',
    darksalmon: '#e9967a',
    darkseagreen: '#8fbc8f',
    darkslateblue: '#483d8b',
    darkslategray: '#2f4f4f',
    darkslategrey: '#2f4f4f',
    darkturquoise: '#00ced1',
    darkviolet: '#9400d3',
    deeppink: '#ff1493',
    deepskyblue: '#00bfff',
    dimgray: '#696969',
    dimgrey: '#696969',
    dodgerblue: '#1e90ff',
    firebrick: '#b22222',
    floralwhite: '#fffaf0',
    forestgreen: '#228b22',
    fuchsia: '#ff00ff',
    gainsboro: '#dcdcdc',
    ghostwhite: '#f8f8ff',
    goldenrod: '#daa520',
    gold: '#ffd700',
    gray: '#808080',
    green: '#008000',
    greenyellow: '#adff2f',
    grey: '#808080',
    honeydew: '#f0fff0',
    hotpink: '#ff69b4',
    indianred: '#cd5c5c',
    indigo: '#4b0082',
    ivory: '#fffff0',
    khaki: '#f0e68c',
    lavenderblush: '#fff0f5',
    lavender: '#e6e6fa',
    lawngreen: '#7cfc00',
    lemonchiffon: '#fffacd',
    lightblue: '#add8e6',
    lightcoral: '#f08080',
    lightcyan: '#e0ffff',
    lightgoldenrodyellow: '#fafad2',
    lightgray: '#d3d3d3',
    lightgreen: '#90ee90',
    lightgrey: '#d3d3d3',
    lightpink: '#ffb6c1',
    lightsalmon: '#ffa07a',
    lightseagreen: '#20b2aa',
    lightskyblue: '#87cefa',
    lightslategray: '#778899',
    lightslategrey: '#778899',
    lightsteelblue: '#b0c4de',
    lightyellow: '#ffffe0',
    lime: '#00ff00',
    limegreen: '#32cd32',
    linen: '#faf0e6',
    magenta: '#ff00ff',
    maroon: '#800000',
    mediumaquamarine: '#66cdaa',
    mediumblue: '#0000cd',
    mediumorchid: '#ba55d3',
    mediumpurple: '#9370db',
    mediumseagreen: '#3cb371',
    mediumslateblue: '#7b68ee',
    mediumspringgreen: '#00fa9a',
    mediumturquoise: '#48d1cc',
    mediumvioletred: '#c71585',
    midnightblue: '#191970',
    mintcream: '#f5fffa',
    mistyrose: '#ffe4e1',
    moccasin: '#ffe4b5',
    navajowhite: '#ffdead',
    navy: '#000080',
    oldlace: '#fdf5e6',
    olive: '#808000',
    olivedrab: '#6b8e23',
    orange: '#ffa500',
    orangered: '#ff4500',
    orchid: '#da70d6',
    palegoldenrod: '#eee8aa',
    palegreen: '#98fb98',
    paleturquoise: '#afeeee',
    palevioletred: '#db7093',
    papayawhip: '#ffefd5',
    peachpuff: '#ffdab9',
    peru: '#cd853f',
    pink: '#ffc0cb',
    plum: '#dda0dd',
    powderblue: '#b0e0e6',
    purple: '#800080',
    rebeccapurple: '#663399',
    red: '#ff0000',
    rosybrown: '#bc8f8f',
    royalblue: '#4169e1',
    saddlebrown: '#8b4513',
    salmon: '#fa8072',
    sandybrown: '#f4a460',
    seagreen: '#2e8b57',
    seashell: '#fff5ee',
    sienna: '#a0522d',
    silver: '#c0c0c0',
    skyblue: '#87ceeb',
    slateblue: '#6a5acd',
    slategray: '#708090',
    slategrey: '#708090',
    snow: '#fffafa',
    springgreen: '#00ff7f',
    steelblue: '#4682b4',
    tan: '#d2b48c',
    teal: '#008080',
    thistle: '#d8bfd8',
    tomato: '#ff6347',
    turquoise: '#40e0d0',
    violet: '#ee82ee',
    wheat: '#f5deb3',
    white: '#ffffff',
    whitesmoke: '#f5f5f5',
    yellow: '#ffff00',
    yellowgreen: '#9acd32',
};

/**
 * Given a string or object, convert that input to RGB
 *
 * Possible string inputs:
 * ```
 * "red"
 * "#f00" or "f00"
 * "#ff0000" or "ff0000"
 * "#ff000000" or "ff000000"
 * "rgb 255 0 0" or "rgb (255, 0, 0)"
 * "rgb 1.0 0 0" or "rgb (1, 0, 0)"
 * "rgba (255, 0, 0, 1)" or "rgba 255, 0, 0, 1"
 * "rgba (1.0, 0, 0, 1)" or "rgba 1.0, 0, 0, 1"
 * "hsl(0, 100%, 50%)" or "hsl 0 100% 50%"
 * "hsla(0, 100%, 50%, 1)" or "hsla 0 100% 50%, 1"
 * "hsv(0, 100%, 100%)" or "hsv 0 100% 100%"
 * ```
 */
function inputToRGB(color) {
    var rgb = { r: 0, g: 0, b: 0 };
    var a = 1;
    var s = null;
    var v = null;
    var l = null;
    var ok = false;
    var format = false;
    if (typeof color === 'string') {
        color = stringInputToObject(color);
    }
    if (typeof color === 'object') {
        if (isValidCSSUnit(color.r) && isValidCSSUnit(color.g) && isValidCSSUnit(color.b)) {
            rgb = rgbToRgb(color.r, color.g, color.b);
            ok = true;
            format = String(color.r).substr(-1) === '%' ? 'prgb' : 'rgb';
        }
        else if (isValidCSSUnit(color.h) && isValidCSSUnit(color.s) && isValidCSSUnit(color.v)) {
            s = convertToPercentage(color.s);
            v = convertToPercentage(color.v);
            rgb = hsvToRgb(color.h, s, v);
            ok = true;
            format = 'hsv';
        }
        else if (isValidCSSUnit(color.h) && isValidCSSUnit(color.s) && isValidCSSUnit(color.l)) {
            s = convertToPercentage(color.s);
            l = convertToPercentage(color.l);
            rgb = hslToRgb(color.h, s, l);
            ok = true;
            format = 'hsl';
        }
        if (Object.prototype.hasOwnProperty.call(color, 'a')) {
            a = color.a;
        }
    }
    a = boundAlpha(a);
    return {
        ok: ok,
        format: color.format || format,
        r: Math.min(255, Math.max(rgb.r, 0)),
        g: Math.min(255, Math.max(rgb.g, 0)),
        b: Math.min(255, Math.max(rgb.b, 0)),
        a: a,
    };
}
// <http://www.w3.org/TR/css3-values/#integers>
var CSS_INTEGER = '[-\\+]?\\d+%?';
// <http://www.w3.org/TR/css3-values/#number-value>
var CSS_NUMBER = '[-\\+]?\\d*\\.\\d+%?';
// Allow positive/negative integer/number.  Don't capture the either/or, just the entire outcome.
var CSS_UNIT = "(?:".concat(CSS_NUMBER, ")|(?:").concat(CSS_INTEGER, ")");
// Actual matching.
// Parentheses and commas are optional, but not required.
// Whitespace can take the place of commas or opening paren
var PERMISSIVE_MATCH3 = "[\\s|\\(]+(".concat(CSS_UNIT, ")[,|\\s]+(").concat(CSS_UNIT, ")[,|\\s]+(").concat(CSS_UNIT, ")\\s*\\)?");
var PERMISSIVE_MATCH4 = "[\\s|\\(]+(".concat(CSS_UNIT, ")[,|\\s]+(").concat(CSS_UNIT, ")[,|\\s]+(").concat(CSS_UNIT, ")[,|\\s]+(").concat(CSS_UNIT, ")\\s*\\)?");
var matchers = {
    CSS_UNIT: new RegExp(CSS_UNIT),
    rgb: new RegExp('rgb' + PERMISSIVE_MATCH3),
    rgba: new RegExp('rgba' + PERMISSIVE_MATCH4),
    hsl: new RegExp('hsl' + PERMISSIVE_MATCH3),
    hsla: new RegExp('hsla' + PERMISSIVE_MATCH4),
    hsv: new RegExp('hsv' + PERMISSIVE_MATCH3),
    hsva: new RegExp('hsva' + PERMISSIVE_MATCH4),
    hex3: /^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
    hex6: /^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/,
    hex4: /^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
    hex8: /^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/,
};
/**
 * Permissive string parsing.  Take in a number of formats, and output an object
 * based on detected format.  Returns `{ r, g, b }` or `{ h, s, l }` or `{ h, s, v}`
 */
function stringInputToObject(color) {
    color = color.trim().toLowerCase();
    if (color.length === 0) {
        return false;
    }
    var named = false;
    if (names[color]) {
        color = names[color];
        named = true;
    }
    else if (color === 'transparent') {
        return { r: 0, g: 0, b: 0, a: 0, format: 'name' };
    }
    // Try to match string input using regular expressions.
    // Keep most of the number bounding out of this function - don't worry about [0,1] or [0,100] or [0,360]
    // Just return an object and let the conversion functions handle that.
    // This way the result will be the same whether the tinycolor is initialized with string or object.
    var match = matchers.rgb.exec(color);
    if (match) {
        return { r: match[1], g: match[2], b: match[3] };
    }
    match = matchers.rgba.exec(color);
    if (match) {
        return { r: match[1], g: match[2], b: match[3], a: match[4] };
    }
    match = matchers.hsl.exec(color);
    if (match) {
        return { h: match[1], s: match[2], l: match[3] };
    }
    match = matchers.hsla.exec(color);
    if (match) {
        return { h: match[1], s: match[2], l: match[3], a: match[4] };
    }
    match = matchers.hsv.exec(color);
    if (match) {
        return { h: match[1], s: match[2], v: match[3] };
    }
    match = matchers.hsva.exec(color);
    if (match) {
        return { h: match[1], s: match[2], v: match[3], a: match[4] };
    }
    match = matchers.hex8.exec(color);
    if (match) {
        return {
            r: parseIntFromHex(match[1]),
            g: parseIntFromHex(match[2]),
            b: parseIntFromHex(match[3]),
            a: convertHexToDecimal(match[4]),
            format: named ? 'name' : 'hex8',
        };
    }
    match = matchers.hex6.exec(color);
    if (match) {
        return {
            r: parseIntFromHex(match[1]),
            g: parseIntFromHex(match[2]),
            b: parseIntFromHex(match[3]),
            format: named ? 'name' : 'hex',
        };
    }
    match = matchers.hex4.exec(color);
    if (match) {
        return {
            r: parseIntFromHex(match[1] + match[1]),
            g: parseIntFromHex(match[2] + match[2]),
            b: parseIntFromHex(match[3] + match[3]),
            a: convertHexToDecimal(match[4] + match[4]),
            format: named ? 'name' : 'hex8',
        };
    }
    match = matchers.hex3.exec(color);
    if (match) {
        return {
            r: parseIntFromHex(match[1] + match[1]),
            g: parseIntFromHex(match[2] + match[2]),
            b: parseIntFromHex(match[3] + match[3]),
            format: named ? 'name' : 'hex',
        };
    }
    return false;
}
/**
 * Check to see if it looks like a CSS unit
 * (see `matchers` above for definition).
 */
function isValidCSSUnit(color) {
    return Boolean(matchers.CSS_UNIT.exec(String(color)));
}

var hueStep = 2; // 色相阶梯

var saturationStep = 0.16; // 饱和度阶梯，浅色部分

var saturationStep2 = 0.05; // 饱和度阶梯，深色部分

var brightnessStep1 = 0.05; // 亮度阶梯，浅色部分

var brightnessStep2 = 0.15; // 亮度阶梯，深色部分

var lightColorCount = 5; // 浅色数量，主色上

var darkColorCount = 4; // 深色数量，主色下
// 暗色主题颜色映射关系表

var darkColorMap = [{
  index: 7,
  opacity: 0.15
}, {
  index: 6,
  opacity: 0.25
}, {
  index: 5,
  opacity: 0.3
}, {
  index: 5,
  opacity: 0.45
}, {
  index: 5,
  opacity: 0.65
}, {
  index: 5,
  opacity: 0.85
}, {
  index: 4,
  opacity: 0.9
}, {
  index: 3,
  opacity: 0.95
}, {
  index: 2,
  opacity: 0.97
}, {
  index: 1,
  opacity: 0.98
}]; // Wrapper function ported from TinyColor.prototype.toHsv
// Keep it here because of `hsv.h * 360`

function toHsv(_ref) {
  var r = _ref.r,
      g = _ref.g,
      b = _ref.b;
  var hsv = rgbToHsv(r, g, b);
  return {
    h: hsv.h * 360,
    s: hsv.s,
    v: hsv.v
  };
} // Wrapper function ported from TinyColor.prototype.toHexString
// Keep it here because of the prefix `#`


function toHex(_ref2) {
  var r = _ref2.r,
      g = _ref2.g,
      b = _ref2.b;
  return "#".concat(rgbToHex(r, g, b, false));
} // Wrapper function ported from TinyColor.prototype.mix, not treeshakable.
// Amount in range [0, 1]
// Assume color1 & color2 has no alpha, since the following src code did so.


function mix(rgb1, rgb2, amount) {
  var p = amount / 100;
  var rgb = {
    r: (rgb2.r - rgb1.r) * p + rgb1.r,
    g: (rgb2.g - rgb1.g) * p + rgb1.g,
    b: (rgb2.b - rgb1.b) * p + rgb1.b
  };
  return rgb;
}

function getHue(hsv, i, light) {
  var hue; // 根据色相不同，色相转向不同

  if (Math.round(hsv.h) >= 60 && Math.round(hsv.h) <= 240) {
    hue = light ? Math.round(hsv.h) - hueStep * i : Math.round(hsv.h) + hueStep * i;
  } else {
    hue = light ? Math.round(hsv.h) + hueStep * i : Math.round(hsv.h) - hueStep * i;
  }

  if (hue < 0) {
    hue += 360;
  } else if (hue >= 360) {
    hue -= 360;
  }

  return hue;
}

function getSaturation(hsv, i, light) {
  // grey color don't change saturation
  if (hsv.h === 0 && hsv.s === 0) {
    return hsv.s;
  }

  var saturation;

  if (light) {
    saturation = hsv.s - saturationStep * i;
  } else if (i === darkColorCount) {
    saturation = hsv.s + saturationStep;
  } else {
    saturation = hsv.s + saturationStep2 * i;
  } // 边界值修正


  if (saturation > 1) {
    saturation = 1;
  } // 第一格的 s 限制在 0.06-0.1 之间


  if (light && i === lightColorCount && saturation > 0.1) {
    saturation = 0.1;
  }

  if (saturation < 0.06) {
    saturation = 0.06;
  }

  return Number(saturation.toFixed(2));
}

function getValue(hsv, i, light) {
  var value;

  if (light) {
    value = hsv.v + brightnessStep1 * i;
  } else {
    value = hsv.v - brightnessStep2 * i;
  }

  if (value > 1) {
    value = 1;
  }

  return Number(value.toFixed(2));
}

function generate(color) {
  var opts = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var patterns = [];
  var pColor = inputToRGB(color);

  for (var i = lightColorCount; i > 0; i -= 1) {
    var hsv = toHsv(pColor);
    var colorString = toHex(inputToRGB({
      h: getHue(hsv, i, true),
      s: getSaturation(hsv, i, true),
      v: getValue(hsv, i, true)
    }));
    patterns.push(colorString);
  }

  patterns.push(toHex(pColor));

  for (var _i = 1; _i <= darkColorCount; _i += 1) {
    var _hsv = toHsv(pColor);

    var _colorString = toHex(inputToRGB({
      h: getHue(_hsv, _i),
      s: getSaturation(_hsv, _i),
      v: getValue(_hsv, _i)
    }));

    patterns.push(_colorString);
  } // dark theme patterns


  if (opts.theme === 'dark') {
    return darkColorMap.map(function (_ref3) {
      var index = _ref3.index,
          opacity = _ref3.opacity;
      var darkColorString = toHex(mix(inputToRGB(opts.backgroundColor || '#141414'), inputToRGB(patterns[index]), opacity * 100));
      return darkColorString;
    });
  }

  return patterns;
}

var presetPrimaryColors = {
  red: '#F5222D',
  volcano: '#FA541C',
  orange: '#FA8C16',
  gold: '#FAAD14',
  yellow: '#FADB14',
  lime: '#A0D911',
  green: '#52C41A',
  cyan: '#13C2C2',
  blue: '#1890FF',
  geekblue: '#2F54EB',
  purple: '#722ED1',
  magenta: '#EB2F96',
  grey: '#666666'
};
var presetPalettes = {};
var presetDarkPalettes = {};
Object.keys(presetPrimaryColors).forEach(function (key) {
  presetPalettes[key] = generate(presetPrimaryColors[key]);
  presetPalettes[key].primary = presetPalettes[key][5]; // dark presetPalettes

  presetDarkPalettes[key] = generate(presetPrimaryColors[key], {
    theme: 'dark',
    backgroundColor: '#141414'
  });
  presetDarkPalettes[key].primary = presetDarkPalettes[key][5];
});

/* eslint-disable no-console */
var warned = {};
function warning(valid, message) {
  // Support uglify
  if (process.env.NODE_ENV !== 'production' && !valid && console !== undefined) {
    console.error("Warning: ".concat(message));
  }
}
function call(method, valid, message) {
  if (!valid && !warned[message]) {
    method(false, message);
    warned[message] = true;
  }
}
function warningOnce(valid, message) {
  call(warning, valid, message);
}
/* eslint-enable */

function canUseDom() {
  return !!(typeof window !== 'undefined' && window.document && window.document.createElement);
}

function contains(root, n) {
  if (!root) {
    return false;
  } // Use native if support


  if (root.contains) {
    return root.contains(n);
  } // `document.contains` not support with IE11


  var node = n;

  while (node) {
    if (node === root) {
      return true;
    }

    node = node.parentNode;
  }

  return false;
}

var APPEND_ORDER = 'data-rc-order';
var MARK_KEY = "rc-util-key";
var containerCache = new Map();

function getMark() {
  var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
      mark = _ref.mark;

  if (mark) {
    return mark.startsWith('data-') ? mark : "data-".concat(mark);
  }

  return MARK_KEY;
}

function getContainer(option) {
  if (option.attachTo) {
    return option.attachTo;
  }

  var head = document.querySelector('head');
  return head || document.body;
}

function getOrder(prepend) {
  if (prepend === 'queue') {
    return 'prependQueue';
  }

  return prepend ? 'prepend' : 'append';
}
/**
 * Find style which inject by rc-util
 */


function findStyles(container) {
  return Array.from((containerCache.get(container) || container).children).filter(function (node) {
    return node.tagName === 'STYLE';
  });
}

function injectCSS(css) {
  var option = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

  if (!canUseDom()) {
    return null;
  }

  var csp = option.csp,
      prepend = option.prepend;
  var styleNode = document.createElement('style');
  styleNode.setAttribute(APPEND_ORDER, getOrder(prepend));

  if (csp === null || csp === void 0 ? void 0 : csp.nonce) {
    styleNode.nonce = csp === null || csp === void 0 ? void 0 : csp.nonce;
  }

  styleNode.innerHTML = css;
  var container = getContainer(option);
  var firstChild = container.firstChild;

  if (prepend) {
    // If is queue `prepend`, it will prepend first style and then append rest style
    if (prepend === 'queue') {
      var existStyle = findStyles(container).filter(function (node) {
        return ['prepend', 'prependQueue'].includes(node.getAttribute(APPEND_ORDER));
      });

      if (existStyle.length) {
        container.insertBefore(styleNode, existStyle[existStyle.length - 1].nextSibling);
        return styleNode;
      }
    } // Use `insertBefore` as `prepend`


    container.insertBefore(styleNode, firstChild);
  } else {
    container.appendChild(styleNode);
  }

  return styleNode;
}

function findExistNode(key) {
  var option = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var container = getContainer(option);
  return findStyles(container).find(function (node) {
    return node.getAttribute(getMark(option)) === key;
  });
}
/**
 * qiankun will inject `appendChild` to insert into other
 */

function syncRealContainer(container, option) {
  var cachedRealContainer = containerCache.get(container); // Find real container when not cached or cached container removed

  if (!cachedRealContainer || !contains(document, cachedRealContainer)) {
    var placeholderStyle = injectCSS('', option);
    var parentNode = placeholderStyle.parentNode;
    containerCache.set(container, parentNode);
    parentNode.removeChild(placeholderStyle);
  }
}

function updateCSS(css, key) {
  var option = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
  var container = getContainer(option); // Sync real parent

  syncRealContainer(container, option);
  var existNode = findExistNode(key, option);

  if (existNode) {
    var _option$csp, _option$csp2;

    if (((_option$csp = option.csp) === null || _option$csp === void 0 ? void 0 : _option$csp.nonce) && existNode.nonce !== ((_option$csp2 = option.csp) === null || _option$csp2 === void 0 ? void 0 : _option$csp2.nonce)) {
      var _option$csp3;

      existNode.nonce = (_option$csp3 = option.csp) === null || _option$csp3 === void 0 ? void 0 : _option$csp3.nonce;
    }

    if (existNode.innerHTML !== css) {
      existNode.innerHTML = css;
    }

    return existNode;
  }

  var newNode = injectCSS(css, option);
  newNode.setAttribute(getMark(option), key);
  return newNode;
}

function warning$1(valid, message) {
  warningOnce(valid, "[@ant-design/icons] ".concat(message));
}
function isIconDefinition(target) {
  return _typeof(target) === 'object' && typeof target.name === 'string' && typeof target.theme === 'string' && (_typeof(target.icon) === 'object' || typeof target.icon === 'function');
}
function normalizeAttrs() {
  var attrs = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  return Object.keys(attrs).reduce(function (acc, key) {
    var val = attrs[key];

    switch (key) {
      case 'class':
        acc.className = val;
        delete acc.class;
        break;

      default:
        acc[key] = val;
    }

    return acc;
  }, {});
}
function generate$1(node, key, rootProps) {
  if (!rootProps) {
    return /*#__PURE__*/React__default.createElement(node.tag, _objectSpread2({
      key: key
    }, normalizeAttrs(node.attrs)), (node.children || []).map(function (child, index) {
      return generate$1(child, "".concat(key, "-").concat(node.tag, "-").concat(index));
    }));
  }

  return /*#__PURE__*/React__default.createElement(node.tag, _objectSpread2(_objectSpread2({
    key: key
  }, normalizeAttrs(node.attrs)), rootProps), (node.children || []).map(function (child, index) {
    return generate$1(child, "".concat(key, "-").concat(node.tag, "-").concat(index));
  }));
}
function getSecondaryColor(primaryColor) {
  // choose the second color
  return generate(primaryColor)[0];
}
function normalizeTwoToneColors(twoToneColor) {
  if (!twoToneColor) {
    return [];
  }

  return Array.isArray(twoToneColor) ? twoToneColor : [twoToneColor];
} // These props make sure that the SVG behaviours like general text.
var iconStyles = "\n.anticon {\n  display: inline-block;\n  color: inherit;\n  font-style: normal;\n  line-height: 0;\n  text-align: center;\n  text-transform: none;\n  vertical-align: -0.125em;\n  text-rendering: optimizeLegibility;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n}\n\n.anticon > * {\n  line-height: 1;\n}\n\n.anticon svg {\n  display: inline-block;\n}\n\n.anticon::before {\n  display: none;\n}\n\n.anticon .anticon-icon {\n  display: block;\n}\n\n.anticon[tabindex] {\n  cursor: pointer;\n}\n\n.anticon-spin::before,\n.anticon-spin {\n  display: inline-block;\n  -webkit-animation: loadingCircle 1s infinite linear;\n  animation: loadingCircle 1s infinite linear;\n}\n\n@-webkit-keyframes loadingCircle {\n  100% {\n    -webkit-transform: rotate(360deg);\n    transform: rotate(360deg);\n  }\n}\n\n@keyframes loadingCircle {\n  100% {\n    -webkit-transform: rotate(360deg);\n    transform: rotate(360deg);\n  }\n}\n";
var useInsertStyles = function useInsertStyles() {
  var styleStr = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : iconStyles;

  var _useContext = React.useContext(IconContext),
      csp = _useContext.csp;

  React.useEffect(function () {
    updateCSS(styleStr, '@ant-design-icons', {
      prepend: true,
      csp: csp
    });
  }, []);
};

var _excluded = ["icon", "className", "onClick", "style", "primaryColor", "secondaryColor"];
var twoToneColorPalette = {
  primaryColor: '#333',
  secondaryColor: '#E6E6E6',
  calculated: false
};

function setTwoToneColors(_ref) {
  var primaryColor = _ref.primaryColor,
      secondaryColor = _ref.secondaryColor;
  twoToneColorPalette.primaryColor = primaryColor;
  twoToneColorPalette.secondaryColor = secondaryColor || getSecondaryColor(primaryColor);
  twoToneColorPalette.calculated = !!secondaryColor;
}

function getTwoToneColors() {
  return _objectSpread2({}, twoToneColorPalette);
}

var IconBase = function IconBase(props) {
  var icon = props.icon,
      className = props.className,
      onClick = props.onClick,
      style = props.style,
      primaryColor = props.primaryColor,
      secondaryColor = props.secondaryColor,
      restProps = _objectWithoutProperties(props, _excluded);

  var colors = twoToneColorPalette;

  if (primaryColor) {
    colors = {
      primaryColor: primaryColor,
      secondaryColor: secondaryColor || getSecondaryColor(primaryColor)
    };
  }

  useInsertStyles();
  warning$1(isIconDefinition(icon), "icon should be icon definiton, but got ".concat(icon));

  if (!isIconDefinition(icon)) {
    return null;
  }

  var target = icon;

  if (target && typeof target.icon === 'function') {
    target = _objectSpread2(_objectSpread2({}, target), {}, {
      icon: target.icon(colors.primaryColor, colors.secondaryColor)
    });
  }

  return generate$1(target.icon, "svg-".concat(target.name), _objectSpread2({
    className: className,
    onClick: onClick,
    style: style,
    'data-icon': target.name,
    width: '1em',
    height: '1em',
    fill: 'currentColor',
    'aria-hidden': 'true'
  }, restProps));
};

IconBase.displayName = 'IconReact';
IconBase.getTwoToneColors = getTwoToneColors;
IconBase.setTwoToneColors = setTwoToneColors;

function setTwoToneColor(twoToneColor) {
  var _normalizeTwoToneColo = normalizeTwoToneColors(twoToneColor),
      _normalizeTwoToneColo2 = _slicedToArray(_normalizeTwoToneColo, 2),
      primaryColor = _normalizeTwoToneColo2[0],
      secondaryColor = _normalizeTwoToneColo2[1];

  return IconBase.setTwoToneColors({
    primaryColor: primaryColor,
    secondaryColor: secondaryColor
  });
}
function getTwoToneColor() {
  var colors = IconBase.getTwoToneColors();

  if (!colors.calculated) {
    return colors.primaryColor;
  }

  return [colors.primaryColor, colors.secondaryColor];
}

var _excluded$1 = ["className", "icon", "spin", "rotate", "tabIndex", "onClick", "twoToneColor"];
// should move it to antd main repo?

setTwoToneColor('#1890ff');
var Icon = /*#__PURE__*/React.forwardRef(function (props, ref) {
  var _classNames;

  var className = props.className,
      icon = props.icon,
      spin = props.spin,
      rotate = props.rotate,
      tabIndex = props.tabIndex,
      onClick = props.onClick,
      twoToneColor = props.twoToneColor,
      restProps = _objectWithoutProperties(props, _excluded$1);

  var _React$useContext = React.useContext(IconContext),
      _React$useContext$pre = _React$useContext.prefixCls,
      prefixCls = _React$useContext$pre === void 0 ? 'anticon' : _React$useContext$pre;

  var classString = classnames(prefixCls, (_classNames = {}, _defineProperty(_classNames, "".concat(prefixCls, "-").concat(icon.name), !!icon.name), _defineProperty(_classNames, "".concat(prefixCls, "-spin"), !!spin || icon.name === 'loading'), _classNames), className);
  var iconTabIndex = tabIndex;

  if (iconTabIndex === undefined && onClick) {
    iconTabIndex = -1;
  }

  var svgStyle = rotate ? {
    msTransform: "rotate(".concat(rotate, "deg)"),
    transform: "rotate(".concat(rotate, "deg)")
  } : undefined;

  var _normalizeTwoToneColo = normalizeTwoToneColors(twoToneColor),
      _normalizeTwoToneColo2 = _slicedToArray(_normalizeTwoToneColo, 2),
      primaryColor = _normalizeTwoToneColo2[0],
      secondaryColor = _normalizeTwoToneColo2[1];

  return /*#__PURE__*/React.createElement("span", _objectSpread2(_objectSpread2({
    role: "img",
    "aria-label": icon.name
  }, restProps), {}, {
    ref: ref,
    tabIndex: iconTabIndex,
    onClick: onClick,
    className: classString
  }), /*#__PURE__*/React.createElement(IconBase, {
    icon: icon,
    primaryColor: primaryColor,
    secondaryColor: secondaryColor,
    style: svgStyle
  }));
});
Icon.displayName = 'AntdIcon';
Icon.getTwoToneColor = getTwoToneColor;
Icon.setTwoToneColor = setTwoToneColor;

// This icon file is generated automatically.
var BugOutlined = { "icon": { "tag": "svg", "attrs": { "viewBox": "64 64 896 896", "focusable": "false" }, "children": [{ "tag": "path", "attrs": { "d": "M304 280h56c4.4 0 8-3.6 8-8 0-28.3 5.9-53.2 17.1-73.5 10.6-19.4 26-34.8 45.4-45.4C450.9 142 475.7 136 504 136h16c28.3 0 53.2 5.9 73.5 17.1 19.4 10.6 34.8 26 45.4 45.4C650 218.9 656 243.7 656 272c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8 0-40-8.8-76.7-25.9-108.1a184.31 184.31 0 00-74-74C596.7 72.8 560 64 520 64h-16c-40 0-76.7 8.8-108.1 25.9a184.31 184.31 0 00-74 74C304.8 195.3 296 232 296 272c0 4.4 3.6 8 8 8z" } }, { "tag": "path", "attrs": { "d": "M940 512H792V412c76.8 0 139-62.2 139-139 0-4.4-3.6-8-8-8h-60c-4.4 0-8 3.6-8 8a63 63 0 01-63 63H232a63 63 0 01-63-63c0-4.4-3.6-8-8-8h-60c-4.4 0-8 3.6-8 8 0 76.8 62.2 139 139 139v100H84c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h148v96c0 6.5.2 13 .7 19.3C164.1 728.6 116 796.7 116 876c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8 0-44.2 23.9-82.9 59.6-103.7a273 273 0 0022.7 49c24.3 41.5 59 76.2 100.5 100.5S460.5 960 512 960s99.8-13.9 141.3-38.2a281.38 281.38 0 00123.2-149.5A120 120 0 01836 876c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8 0-79.3-48.1-147.4-116.7-176.7.4-6.4.7-12.8.7-19.3v-96h148c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zM716 680c0 36.8-9.7 72-27.8 102.9-17.7 30.3-43 55.6-73.3 73.3C584 874.3 548.8 884 512 884s-72-9.7-102.9-27.8c-30.3-17.7-55.6-43-73.3-73.3A202.75 202.75 0 01308 680V412h408v268z" } }] }, "name": "bug", "theme": "outlined" };

var BugOutlined$1 = function BugOutlined$1(props, ref) {
  return /*#__PURE__*/React.createElement(Icon, _objectSpread2(_objectSpread2({}, props), {}, {
    ref: ref,
    icon: BugOutlined
  }));
};

BugOutlined$1.displayName = 'BugOutlined';
var BugOutlined$2 = /*#__PURE__*/React.forwardRef(BugOutlined$1);

// This icon file is generated automatically.
var CaretRightOutlined = { "icon": { "tag": "svg", "attrs": { "viewBox": "0 0 1024 1024", "focusable": "false" }, "children": [{ "tag": "path", "attrs": { "d": "M715.8 493.5L335 165.1c-14.2-12.2-35-1.2-35 18.5v656.8c0 19.7 20.8 30.7 35 18.5l380.8-328.4c10.9-9.4 10.9-27.6 0-37z" } }] }, "name": "caret-right", "theme": "outlined" };

var CaretRightOutlined$1 = function CaretRightOutlined$1(props, ref) {
  return /*#__PURE__*/React.createElement(Icon, _objectSpread2(_objectSpread2({}, props), {}, {
    ref: ref,
    icon: CaretRightOutlined
  }));
};

CaretRightOutlined$1.displayName = 'CaretRightOutlined';
var CaretRightOutlined$2 = /*#__PURE__*/React.forwardRef(CaretRightOutlined$1);

// This icon file is generated automatically.
var CheckCircleTwoTone = { "icon": function render(primaryColor, secondaryColor) { return { "tag": "svg", "attrs": { "viewBox": "64 64 896 896", "focusable": "false" }, "children": [{ "tag": "path", "attrs": { "d": "M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372z", "fill": primaryColor } }, { "tag": "path", "attrs": { "d": "M512 140c-205.4 0-372 166.6-372 372s166.6 372 372 372 372-166.6 372-372-166.6-372-372-372zm193.4 225.7l-210.6 292a31.8 31.8 0 01-51.7 0L318.5 484.9c-3.8-5.3 0-12.7 6.5-12.7h46.9c10.3 0 19.9 5 25.9 13.3l71.2 98.8 157.2-218c6-8.4 15.7-13.3 25.9-13.3H699c6.5 0 10.3 7.4 6.4 12.7z", "fill": secondaryColor } }, { "tag": "path", "attrs": { "d": "M699 353h-46.9c-10.2 0-19.9 4.9-25.9 13.3L469 584.3l-71.2-98.8c-6-8.3-15.6-13.3-25.9-13.3H325c-6.5 0-10.3 7.4-6.5 12.7l124.6 172.8a31.8 31.8 0 0051.7 0l210.6-292c3.9-5.3.1-12.7-6.4-12.7z", "fill": primaryColor } }] }; }, "name": "check-circle", "theme": "twotone" };

var CheckCircleTwoTone$1 = function CheckCircleTwoTone$1(props, ref) {
  return /*#__PURE__*/React.createElement(Icon, _objectSpread2(_objectSpread2({}, props), {}, {
    ref: ref,
    icon: CheckCircleTwoTone
  }));
};

CheckCircleTwoTone$1.displayName = 'CheckCircleTwoTone';
var CheckCircleTwoTone$2 = /*#__PURE__*/React.forwardRef(CheckCircleTwoTone$1);

// This icon file is generated automatically.
var CloseCircleTwoTone = { "icon": function render(primaryColor, secondaryColor) { return { "tag": "svg", "attrs": { "viewBox": "64 64 896 896", "focusable": "false" }, "children": [{ "tag": "path", "attrs": { "d": "M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372z", "fill": primaryColor } }, { "tag": "path", "attrs": { "d": "M512 140c-205.4 0-372 166.6-372 372s166.6 372 372 372 372-166.6 372-372-166.6-372-372-372zm171.8 527.1c1.2 1.5 1.9 3.3 1.9 5.2 0 4.5-3.6 8-8 8l-66-.3-99.3-118.4-99.3 118.5-66.1.3c-4.4 0-8-3.6-8-8 0-1.9.7-3.7 1.9-5.2L471 512.3l-130.1-155a8.32 8.32 0 01-1.9-5.2c0-4.5 3.6-8 8-8l66.1.3 99.3 118.4 99.4-118.5 66-.3c4.4 0 8 3.6 8 8 0 1.9-.6 3.8-1.8 5.2l-130.1 155 129.9 154.9z", "fill": secondaryColor } }, { "tag": "path", "attrs": { "d": "M685.8 352c0-4.4-3.6-8-8-8l-66 .3-99.4 118.5-99.3-118.4-66.1-.3c-4.4 0-8 3.5-8 8 0 1.9.7 3.7 1.9 5.2l130.1 155-130.1 154.9a8.32 8.32 0 00-1.9 5.2c0 4.4 3.6 8 8 8l66.1-.3 99.3-118.5L611.7 680l66 .3c4.4 0 8-3.5 8-8 0-1.9-.7-3.7-1.9-5.2L553.9 512.2l130.1-155c1.2-1.4 1.8-3.3 1.8-5.2z", "fill": primaryColor } }] }; }, "name": "close-circle", "theme": "twotone" };

var CloseCircleTwoTone$1 = function CloseCircleTwoTone$1(props, ref) {
  return /*#__PURE__*/React.createElement(Icon, _objectSpread2(_objectSpread2({}, props), {}, {
    ref: ref,
    icon: CloseCircleTwoTone
  }));
};

CloseCircleTwoTone$1.displayName = 'CloseCircleTwoTone';
var CloseCircleTwoTone$2 = /*#__PURE__*/React.forwardRef(CloseCircleTwoTone$1);

// This icon file is generated automatically.
var PlusOutlined = { "icon": { "tag": "svg", "attrs": { "viewBox": "64 64 896 896", "focusable": "false" }, "children": [{ "tag": "defs", "attrs": {}, "children": [{ "tag": "style", "attrs": {} }] }, { "tag": "path", "attrs": { "d": "M482 152h60q8 0 8 8v704q0 8-8 8h-60q-8 0-8-8V160q0-8 8-8z" } }, { "tag": "path", "attrs": { "d": "M176 474h672q8 0 8 8v60q0 8-8 8H176q-8 0-8-8v-60q0-8 8-8z" } }] }, "name": "plus", "theme": "outlined" };

var PlusOutlined$1 = function PlusOutlined$1(props, ref) {
  return /*#__PURE__*/React.createElement(Icon, _objectSpread2(_objectSpread2({}, props), {}, {
    ref: ref,
    icon: PlusOutlined
  }));
};

PlusOutlined$1.displayName = 'PlusOutlined';
var PlusOutlined$2 = /*#__PURE__*/React.forwardRef(PlusOutlined$1);

var ButtonAddMove = function ButtonAddMove(_ref) {
  var text = _ref.text,
      className = _ref.className,
      _ref$movingItem = _ref.movingItem,
      movingItem = _ref$movingItem === void 0 ? null : _ref$movingItem,
      _ref$handleCancelMove = _ref.handleCancelMove,
      handleCancelMove = _ref$handleCancelMove === void 0 ? function () {} : _ref$handleCancelMove,
      _ref$disabled = _ref.disabled,
      disabled = _ref$disabled === void 0 ? false : _ref$disabled,
      _ref$handleOnAdd = _ref.handleOnAdd,
      handleOnAdd = _ref$handleOnAdd === void 0 ? function () {} : _ref$handleOnAdd,
      _ref$handleOnMove = _ref.handleOnMove,
      handleOnMove = _ref$handleOnMove === void 0 ? function () {} : _ref$handleOnMove;

  var _UIStore$useState = UIStore.useState(function (s) {
    return s.UIText;
  }),
      buttonCancelText = _UIStore$useState.buttonCancelText;

  return /*#__PURE__*/React__default.createElement(antd.Row, {
    align: "middle",
    justify: "start",
    className: "arfe-reorder-wrapper " + className
  }, /*#__PURE__*/React__default.createElement(antd.Col, {
    span: movingItem ? 12 : 24,
    align: "left"
  }, /*#__PURE__*/React__default.createElement(antd.Button, {
    type: "dashed",
    className: "arfe-reorder-button",
    size: "small",
    onClick: movingItem ? handleOnMove : handleOnAdd,
    disabled: disabled,
    icon: movingItem ? /*#__PURE__*/React__default.createElement(CaretRightOutlined$2, null) : /*#__PURE__*/React__default.createElement(PlusOutlined$2, null)
  }, text)), movingItem && /*#__PURE__*/React__default.createElement(antd.Col, {
    span: 12,
    align: "right"
  }, /*#__PURE__*/React__default.createElement(antd.Button, {
    type: "danger",
    className: "reorder-button",
    size: "small",
    onClick: handleCancelMove
  }, buttonCancelText)));
};

var ButtonWithIcon = function ButtonWithIcon(_ref) {
  var _ref$type = _ref.type,
      type = _ref$type === void 0 ? 'delete-button' : _ref$type,
      _ref$isExpand = _ref.isExpand,
      isExpand = _ref$isExpand === void 0 ? false : _ref$isExpand,
      _ref$onClick = _ref.onClick,
      onClick = _ref$onClick === void 0 ? function () {} : _ref$onClick,
      _ref$onCancel = _ref.onCancel,
      onCancel = _ref$onCancel === void 0 ? function () {} : _ref$onCancel,
      _ref$disabled = _ref.disabled,
      disabled = _ref$disabled === void 0 ? false : _ref$disabled;
  var buttonProps = {};

  switch (type) {
    case 'show-button':
      if (isExpand) {
        buttonProps = {
          onClick: onCancel,
          icon: /*#__PURE__*/React__default.createElement(tb.TbEditOff, null)
        };
        break;
      }

      buttonProps = {
        onClick: onClick,
        icon: /*#__PURE__*/React__default.createElement(tb.TbEdit, null)
      };
      break;

    case 'copy-button':
      buttonProps = {
        onClick: onClick,
        icon: /*#__PURE__*/React__default.createElement(bi.BiCopy, null)
      };
      break;

    case 'move-button':
      buttonProps = {
        onClick: onClick,
        icon: /*#__PURE__*/React__default.createElement(bi.BiMove, null)
      };
      break;

    case 'edit-button':
      if (isExpand) {
        buttonProps = {
          onClick: onCancel,
          icon: /*#__PURE__*/React__default.createElement(ri.RiSettings5Fill, null)
        };
        break;
      }

      buttonProps = {
        onClick: onClick,
        icon: /*#__PURE__*/React__default.createElement(ri.RiSettings5Line, null)
      };
      break;

    case 'add-button':
      buttonProps = {
        onClick: onClick,
        icon: /*#__PURE__*/React__default.createElement(md.MdOutlineAddCircleOutline, null)
      };
      break;

    case 'save-button':
      buttonProps = {
        onClick: onClick,
        icon: /*#__PURE__*/React__default.createElement(ri.RiSave3Fill, null)
      };
      break;

    case 'expand-all-button':
      if (isExpand) {
        buttonProps = {
          onClick: onCancel,
          icon: /*#__PURE__*/React__default.createElement(ai.AiOutlineEyeInvisible, null)
        };
        break;
      }

      buttonProps = {
        onClick: onClick,
        icon: /*#__PURE__*/React__default.createElement(ai.AiOutlineEye, null)
      };
      break;

    default:
      buttonProps = {
        onClick: onClick,
        icon: /*#__PURE__*/React__default.createElement(ri.RiDeleteBin2Line, null)
      };
      break;
  }

  return /*#__PURE__*/React__default.createElement(antd.Button, _extends({
    type: "link",
    className: styles['button-icon'],
    disabled: disabled
  }, buttonProps));
};

var CardTitle = function CardTitle(_ref) {
  var id = _ref.id,
      title = _ref.title,
      buttons = _ref.buttons,
      _ref$dependency = _ref.dependency,
      dependency = _ref$dependency === void 0 ? [] : _ref$dependency;
  return /*#__PURE__*/React__default.createElement(antd.Space, null, !!dependency.length && /*#__PURE__*/React__default.createElement(antd.Tag, {
    style: {
      margin: 'auto'
    }
  }, dependency.length, " Dependenc", dependency.length > 1 ? 'ies' : 'y'), buttons === null || buttons === void 0 ? void 0 : buttons.map(function (cfg) {
    return /*#__PURE__*/React__default.createElement(ButtonWithIcon, {
      key: cfg.type + "-" + id,
      type: cfg.type,
      isExpand: cfg.isExpand,
      onClick: function onClick() {
        return cfg.onClick();
      },
      onCancel: function onCancel() {
        return cfg.onCancel();
      },
      disabled: cfg === null || cfg === void 0 ? void 0 : cfg.disabled
    });
  }), title && /*#__PURE__*/React__default.createElement("div", {
    className: "arfe-question-group-title"
  }, title));
};

var Text = antd.Typography.Text;

var TranslationFormItem = function TranslationFormItem(_ref) {
  var _ref$labelText = _ref.labelText,
      labelText = _ref$labelText === void 0 ? '' : _ref$labelText,
      _ref$name = _ref.name,
      name = _ref$name === void 0 ? '' : _ref$name,
      _ref$currentValue = _ref.currentValue,
      currentValue = _ref$currentValue === void 0 ? '' : _ref$currentValue,
      _ref$children = _ref.children,
      children = _ref$children === void 0 ? '' : _ref$children,
      _ref$initialValue = _ref.initialValue,
      initialValue = _ref$initialValue === void 0 ? '' : _ref$initialValue;
  return /*#__PURE__*/React__default.createElement(antd.Row, {
    align: "top",
    justify: "space-between",
    gutter: [24, 24],
    style: {
      marginBottom: 24
    }
  }, /*#__PURE__*/React__default.createElement(antd.Col, {
    span: 12
  }, /*#__PURE__*/React__default.createElement(antd.Space, {
    direction: "vertical",
    style: {
      width: '100%'
    }
  }, /*#__PURE__*/React__default.createElement("b", null, labelText), /*#__PURE__*/React__default.createElement(Text, null, currentValue))), /*#__PURE__*/React__default.createElement(antd.Col, {
    span: 12
  }, /*#__PURE__*/React__default.createElement(antd.Form.Item, {
    name: name,
    label: /*#__PURE__*/React__default.createElement("b", null, labelText),
    className: styles['translation-form-item'],
    initialValue: initialValue
  }, children)));
};

var AlertPopup = function AlertPopup(_ref) {
  var onConfirm = _ref.onConfirm,
      onCancel = _ref.onCancel,
      visible = _ref.visible,
      children = _ref.children,
      _ref$title = _ref.title,
      title = _ref$title === void 0 ? 'Alert' : _ref$title,
      _ref$okButtonProps = _ref.okButtonProps,
      okButtonProps = _ref$okButtonProps === void 0 ? {} : _ref$okButtonProps,
      _ref$okText = _ref.okText,
      okText = _ref$okText === void 0 ? 'OK' : _ref$okText;
  return /*#__PURE__*/React__default.createElement(antd.Modal, {
    title: title,
    visible: visible,
    onOk: onConfirm,
    onCancel: onCancel,
    centered: true,
    okButtonProps: okButtonProps,
    okText: okText
  }, children);
};

var SettingAddons = function SettingAddons(_ref) {
  var namePreffix = _ref.namePreffix,
      addonBefore = _ref.addonBefore,
      addonAfter = _ref.addonAfter,
      onAddonBefore = _ref.onAddonBefore,
      onAddonAfter = _ref.onAddonAfter;
  var UIText = UIStore.useState(function (s) {
    return s.UIText;
  });
  return /*#__PURE__*/React__default.createElement(antd.Row, {
    gutter: [16, 8]
  }, /*#__PURE__*/React__default.createElement(antd.Col, {
    span: 12
  }, /*#__PURE__*/React__default.createElement(antd.Form.Item, {
    label: UIText.addonBefore,
    name: namePreffix + "-addon_before"
  }, /*#__PURE__*/React__default.createElement(antd.Input, {
    placeholder: UIText.addonBeforePlaceholder,
    onChange: function onChange(e) {
      return onAddonBefore(e.target.value);
    },
    defaultValue: addonBefore,
    maxLength: 50
  }))), /*#__PURE__*/React__default.createElement(antd.Col, {
    span: 12
  }, /*#__PURE__*/React__default.createElement(antd.Form.Item, {
    label: UIText.addonAfter,
    name: namePreffix + "-addon_after"
  }, /*#__PURE__*/React__default.createElement(antd.Input, {
    placeholder: UIText.addonAfterPlaceholder,
    onChange: function onChange(e) {
      return onAddonAfter(e.target.value);
    },
    defaultValue: addonAfter,
    maxLength: 50
  }))));
};

var clearQuestionObj = function clearQuestionObj(keysToRemove, obj, checkEmpty) {
  if (keysToRemove === void 0) {
    keysToRemove = [];
  }

  if (obj === void 0) {
    obj = false;
  }

  if (checkEmpty === void 0) {
    checkEmpty = false;
  }

  var clearedQuestion = {};

  if (obj) {
    Object.keys(obj).forEach(function (key) {
      if (!keysToRemove.includes(key)) {
        var _obj;

        if (!checkEmpty) {
          var _extends2;

          clearedQuestion = _extends({}, clearedQuestion, (_extends2 = {}, _extends2[key] = obj[key], _extends2));
          return key;
        }

        if (checkEmpty && !lodash.isEmpty((_obj = obj) === null || _obj === void 0 ? void 0 : _obj[key])) {
          var _extends3;

          clearedQuestion = _extends({}, clearedQuestion, (_extends3 = {}, _extends3[key] = obj[key], _extends3));
          return key;
        }
      }
    });
  }

  return clearedQuestion;
};

var clearTranslations = function clearTranslations(obj, translations) {
  var newObj = _extends({}, obj);

  var clearedTranslations = translations.map(function (tl) {
    var clearedObj = clearQuestionObj([], tl, true);

    if (Object.keys(clearedObj).length === 1 && clearedObj !== null && clearedObj !== void 0 && clearedObj.language) {
      return false;
    }

    return clearedObj;
  }).filter(function (x) {
    return x;
  });

  if (clearedTranslations.length) {
    newObj = _extends({}, newObj, {
      translations: clearedTranslations
    });
  } else {
    var _newObj;

    (_newObj = newObj) === null || _newObj === void 0 ? true : delete _newObj.translations;
  }

  return newObj;
};

var toEditor = function toEditor(webFormData) {
  webFormData = lodash.mapKeys(webFormData, function (_, k) {
    return k === 'question_group' ? 'questionGroups' : k;
  });
  var questionGroups = webFormData.questionGroups.map(function (qg, qgi) {
    var _qg, _qg2;

    var gid = ((_qg = qg) === null || _qg === void 0 ? void 0 : _qg.id) || generateId() + qgi;
    qg = lodash.mapKeys(qg, function (_, k) {
      return k === 'question' ? 'questions' : k;
    });
    var questions = qg.questions.map(function (q, qi) {
      var _q, _q2, _q3;

      var isNotOption = ![questionType.option, questionType.multiple_option].includes(q.type);

      if (isNotOption && q.type !== questionType.tree) {
        q = clearQuestionObj(['option'], q);
      }

      if ([questionType.option, questionType.multiple_option].includes(q.type)) {
        q = lodash.mapKeys(q, function (_, k) {
          return k === 'option' ? 'options' : k;
        });
      }

      if ((_q = q) !== null && _q !== void 0 && _q.options) {
        var options = q.options.map(function (o, oi) {
          return _extends({
            id: (o === null || o === void 0 ? void 0 : o.id) || qi + 1 + (oi + 1)
          }, o, {
            order: (o === null || o === void 0 ? void 0 : o.order) || oi + 1
          });
        });
        q = _extends({}, q, {
          options: lodash.orderBy(options, 'order')
        });
      }

      if ((_q2 = q) !== null && _q2 !== void 0 && _q2.dependency) {
        var dependency = q.dependency.map(function (d) {
          var _d, _d2;

          if ((_d = d) !== null && _d !== void 0 && _d.max) {
            d = _extends({}, d, {
              max: d.max + 1
            });
          }

          if ((_d2 = d) !== null && _d2 !== void 0 && _d2.min) {
            d = _extends({}, d, {
              min: d.min - 1
            });
          }

          return d;
        });
        q = _extends({}, q, {
          dependency: dependency
        });
      }

      return _extends({}, q, {
        order: ((_q3 = q) === null || _q3 === void 0 ? void 0 : _q3.order) || qi + 1,
        questionGroupId: gid
      });
    });
    qg = _extends({}, qg, {
      id: gid,
      order: ((_qg2 = qg) === null || _qg2 === void 0 ? void 0 : _qg2.order) || qgi + 1,
      questions: lodash.orderBy(questions, 'order')
    });
    return qg;
  });
  webFormData = _extends({}, webFormData, {
    questionGroups: lodash.orderBy(questionGroups, 'order')
  });
  return webFormData;
};

var toWebform = function toWebform(formData, questionGroups) {
  var _formData$languages;

  var webformData = {
    id: (formData === null || formData === void 0 ? void 0 : formData.id) || generateId(),
    name: formData.name,
    description: formData.description
  };

  if (formData !== null && formData !== void 0 && formData.languages && formData !== null && formData !== void 0 && (_formData$languages = formData.languages) !== null && _formData$languages !== void 0 && _formData$languages.length) {
    webformData = _extends({}, webformData, {
      languages: ['en'].concat(formData.languages),
      defaultLanguage: (formData === null || formData === void 0 ? void 0 : formData.defaultLanguage) || 'en'
    });
  }

  if (formData !== null && formData !== void 0 && formData.translations) {
    webformData = clearTranslations(webformData, formData.translations);
  }

  var output = questionGroups.map(function (qg) {
    var questions = qg.questions.map(function (q) {
      var _q4, _q5, _q6, _q7, _q8, _q8$hint, _q9, _q9$hint, _q10, _q10$hint, _q10$hint$path;

      var isNotOption = ![questionType.option, questionType.multiple_option].includes(q.type);

      if (q.type !== questionType.input) {
        q = clearQuestionObj(['requiredDoubleEntry', 'hiddenString'], q);
      }

      if (q.type !== questionType.number && q.type !== questionType.date) {
        q = clearQuestionObj(['rule'], q);
      }

      if ([questionType.option, questionType.multiple_option].includes(q.type)) {
        var options = q.options.map(function (op) {
          if (op !== null && op !== void 0 && op.translations) {
            return clearTranslations(op, op.translations);
          }

          return op;
        });
        q = _extends({}, q, {
          option: options
        });
      }

      if (isNotOption) {
        q = clearQuestionObj(['allowOther'], q);
      }

      if (q.type !== questionType.cascade) {
        q = clearQuestionObj(['api'], q);
      }

      if (q.type !== questionType.tree && isNotOption) {
        q = clearQuestionObj(['option'], q);
      }

      if (q.type !== questionType.table) {
        q = clearQuestionObj(['columns'], q);
      }

      if (!((_q4 = q) !== null && _q4 !== void 0 && _q4.tooltip)) {
        q = clearQuestionObj(['tooltip'], q);
      }

      if ((_q5 = q) !== null && _q5 !== void 0 && _q5.dependency) {
        var dependency = q.dependency.map(function (d) {
          var _d3, _d4;

          if ((_d3 = d) !== null && _d3 !== void 0 && _d3.max) {
            d = _extends({}, d, {
              max: d.max - 1
            });
          }

          if ((_d4 = d) !== null && _d4 !== void 0 && _d4.min) {
            d = _extends({}, d, {
              min: d.min + 1
            });
          }

          return d;
        });
        q = _extends({}, q, {
          dependency: dependency
        });
      }

      if ((_q6 = q) !== null && _q6 !== void 0 && _q6.translations) {
        q = clearTranslations(q, q.translations);
      }

      if ((_q7 = q) !== null && _q7 !== void 0 && _q7.hint && !((_q8 = q) !== null && _q8 !== void 0 && (_q8$hint = _q8.hint) !== null && _q8$hint !== void 0 && _q8$hint["static"]) && (!((_q9 = q) !== null && _q9 !== void 0 && (_q9$hint = _q9.hint) !== null && _q9$hint !== void 0 && _q9$hint.endpoint) || !((_q10 = q) !== null && _q10 !== void 0 && (_q10$hint = _q10.hint) !== null && _q10$hint !== void 0 && (_q10$hint$path = _q10$hint.path) !== null && _q10$hint$path !== void 0 && _q10$hint$path.length))) {
        q = clearQuestionObj(['hint'], q);
      }

      q = clearQuestionObj(['options'], q);
      return q;
    });
    var result = {
      id: qg.id,
      label: qg.label,
      name: qg.name,
      order: qg.order,
      repeatable: qg.repeatable,
      question: questions
    };

    if (qg !== null && qg !== void 0 && qg.repeatText) {
      result = _extends({}, result, {
        repeatText: qg.repeatText
      });
    }

    if (qg !== null && qg !== void 0 && qg.description) {
      result = _extends({}, result, {
        description: qg.description
      });
    }

    if (qg !== null && qg !== void 0 && qg.translations) {
      result = clearTranslations(result, qg.translations);
    }

    return result;
  });
  return _extends({}, webformData, {
    question_group: output
  });
};

var generateTranslations = function generateTranslations(key, value, savedTranslations, existingTranslation) {
  var _ref;

  var newTranslations = [(_ref = {
    language: existingTranslation
  }, _ref[key] = value, _ref)];
  var currentTranslations = null;

  if (savedTranslations && savedTranslations !== null && savedTranslations !== void 0 && savedTranslations.length) {
    currentTranslations = savedTranslations.map(function (tl) {
      if (tl.language === existingTranslation) {
        var _extends4;

        return _extends({}, tl, (_extends4 = {}, _extends4[key] = value, _extends4));
      }

      return tl;
    });
    var isExistingExist = lodash.findIndex(savedTranslations, function (tr) {
      return tr.language === existingTranslation;
    });

    if (isExistingExist === -1) {
      currentTranslations = [].concat(currentTranslations, newTranslations);
    }
  }

  return {
    newTranslations: newTranslations,
    currentTranslations: currentTranslations
  };
};

var data = {
  clear: clearQuestionObj,
  toWebform: toWebform,
  toEditor: toEditor,
  generateTranslations: generateTranslations
};

var FormDefinitionTranslation = function FormDefinitionTranslation() {
  var _UIStore$useState = UIStore.useState(function (s) {
    return s;
  }),
      UIText = _UIStore$useState.UIText,
      existingTranslation = _UIStore$useState.existingTranslation;

  var formStore = formFn.store.useState(function (s) {
    return s;
  });
  var namePreffix = "translation-" + existingTranslation;
  var existingTranslationValues = React.useMemo(function () {
    var _formStore$translatio;

    return formStore === null || formStore === void 0 ? void 0 : (_formStore$translatio = formStore.translations) === null || _formStore$translatio === void 0 ? void 0 : _formStore$translatio.find(function (tl) {
      return tl.language === existingTranslation;
    });
  }, [formStore, existingTranslation]);

  var updateTranslation = function updateTranslation(key, value) {
    var _data$generateTransla = data.generateTranslations(key, value, formStore === null || formStore === void 0 ? void 0 : formStore.translations, existingTranslation),
        newTranslations = _data$generateTransla.newTranslations,
        currentTranslations = _data$generateTransla.currentTranslations;

    formFn.store.update(function (u) {
      u.translations = !currentTranslations ? newTranslations : currentTranslations;
    });
  };

  var handleChangeName = function handleChangeName(e) {
    var _e$target;

    updateTranslation('name', e === null || e === void 0 ? void 0 : (_e$target = e.target) === null || _e$target === void 0 ? void 0 : _e$target.value);
  };

  var handleChangeDescription = function handleChangeDescription(e) {
    var _e$target2;

    updateTranslation('description', e === null || e === void 0 ? void 0 : (_e$target2 = e.target) === null || _e$target2 === void 0 ? void 0 : _e$target2.value);
  };

  return /*#__PURE__*/React__default.createElement("div", null, (formStore === null || formStore === void 0 ? void 0 : formStore.name) && /*#__PURE__*/React__default.createElement(TranslationFormItem, {
    labelText: UIText.inputFormNameLabel,
    currentValue: formStore.name,
    name: namePreffix + "-form-name",
    initialValue: existingTranslationValues === null || existingTranslationValues === void 0 ? void 0 : existingTranslationValues.name
  }, /*#__PURE__*/React__default.createElement(antd.Input, {
    disabled: !existingTranslation,
    onChange: handleChangeName
  })), (formStore === null || formStore === void 0 ? void 0 : formStore.description) && /*#__PURE__*/React__default.createElement(TranslationFormItem, {
    labelText: UIText.inputFormDescriptionLabel,
    currentValue: formStore.description,
    name: namePreffix + "-form-description",
    initialValue: existingTranslationValues === null || existingTranslationValues === void 0 ? void 0 : existingTranslationValues.description
  }, /*#__PURE__*/React__default.createElement(antd.Input.TextArea, {
    rows: 5,
    disabled: !existingTranslation,
    onChange: handleChangeDescription
  })));
};

var QuestionSettingTranslation = function QuestionSettingTranslation(_ref) {
  var id = _ref.id,
      questionGroupId = _ref.questionGroupId,
      label = _ref.label,
      type = _ref.type,
      _ref$tooltip = _ref.tooltip,
      tooltip = _ref$tooltip === void 0 ? {} : _ref$tooltip,
      allowOther = _ref.allowOther,
      allowOtherText = _ref.allowOtherText,
      _ref$options = _ref.options,
      options = _ref$options === void 0 ? [] : _ref$options,
      _ref$translations = _ref.translations,
      translations = _ref$translations === void 0 ? [] : _ref$translations;

  var _UIStore$useState = UIStore.useState(function (s) {
    return s;
  }),
      UIText = _UIStore$useState.UIText,
      existingTranslation = _UIStore$useState.existingTranslation;

  var namePreffix = "translation-" + existingTranslation + "-question-" + id;
  var existingTranslationValues = React.useMemo(function () {
    return translations === null || translations === void 0 ? void 0 : translations.find(function (tl) {
      return tl.language === existingTranslation;
    });
  }, [translations, existingTranslation]);
  var existingTooltipTranslationValues = React.useMemo(function () {
    var _tooltip$translations;

    return tooltip === null || tooltip === void 0 ? void 0 : (_tooltip$translations = tooltip.translations) === null || _tooltip$translations === void 0 ? void 0 : _tooltip$translations.find(function (tl) {
      return tl.language === existingTranslation;
    });
  }, [tooltip, existingTranslation]);

  var updateTranslation = function updateTranslation(key, value) {
    var _data$generateTransla = data.generateTranslations(key, value, translations, existingTranslation),
        newTranslations = _data$generateTransla.newTranslations,
        currentTranslations = _data$generateTransla.currentTranslations;

    questionGroupFn.store.update(function (u) {
      u.questionGroups = u.questionGroups.map(function (qg) {
        if (qg.id === questionGroupId) {
          var questions = qg.questions.map(function (q) {
            if (q.id === id) {
              return _extends({}, q, {
                translations: !currentTranslations ? newTranslations : currentTranslations
              });
            }

            return q;
          });
          return _extends({}, qg, {
            questions: questions
          });
        }

        return qg;
      });
    });
  };

  var handleChangeTooltip = function handleChangeTooltip(e) {
    var _e$target;

    var key = 'text';
    var value = e === null || e === void 0 ? void 0 : (_e$target = e.target) === null || _e$target === void 0 ? void 0 : _e$target.value;

    var _data$generateTransla2 = data.generateTranslations(key, value, tooltip === null || tooltip === void 0 ? void 0 : tooltip.translations, existingTranslation),
        newTranslations = _data$generateTransla2.newTranslations,
        currentTranslations = _data$generateTransla2.currentTranslations;

    questionGroupFn.store.update(function (u) {
      u.questionGroups = u.questionGroups.map(function (qg) {
        if (qg.id === questionGroupId) {
          var questions = qg.questions.map(function (q) {
            var _q$tooltip;

            if (q.id === id && q !== null && q !== void 0 && (_q$tooltip = q.tooltip) !== null && _q$tooltip !== void 0 && _q$tooltip.text) {
              return _extends({}, q, {
                tooltip: _extends({}, q.tooltip, {
                  translations: !currentTranslations ? newTranslations : currentTranslations
                })
              });
            }

            return q;
          });
          return _extends({}, qg, {
            questions: questions
          });
        }

        return qg;
      });
    });
  };

  var handleChangeName = function handleChangeName(e) {
    var _e$target2;

    updateTranslation('name', e === null || e === void 0 ? void 0 : (_e$target2 = e.target) === null || _e$target2 === void 0 ? void 0 : _e$target2.value);
  };

  var handleChangeAllowOtherText = function handleChangeAllowOtherText(e) {
    var _e$target3;

    updateTranslation('allowOtherText', e === null || e === void 0 ? void 0 : (_e$target3 = e.target) === null || _e$target3 === void 0 ? void 0 : _e$target3.value);
  };

  var handleChangeOptionName = function handleChangeOptionName(e, optionTranslations, optionId) {
    var _e$target4;

    var key = 'name';
    var value = e === null || e === void 0 ? void 0 : (_e$target4 = e.target) === null || _e$target4 === void 0 ? void 0 : _e$target4.value;

    var _data$generateTransla3 = data.generateTranslations(key, value, optionTranslations, existingTranslation),
        newTranslations = _data$generateTransla3.newTranslations,
        currentTranslations = _data$generateTransla3.currentTranslations;

    questionGroupFn.store.update(function (u) {
      u.questionGroups = u.questionGroups.map(function (qg) {
        if (qg.id === questionGroupId) {
          var questions = qg.questions.map(function (q) {
            if (q.id === id && [questionType.option, questionType.multiple_option].includes(q.type)) {
              var _options = q.options.map(function (opt) {
                if (opt.id === optionId) {
                  return _extends({}, opt, {
                    translations: !currentTranslations ? newTranslations : currentTranslations
                  });
                }

                return opt;
              });

              return _extends({}, q, {
                options: _options
              });
            }

            return q;
          });
          return _extends({}, qg, {
            questions: questions
          });
        }

        return qg;
      });
    });
  };

  return /*#__PURE__*/React__default.createElement("div", null, label && /*#__PURE__*/React__default.createElement(TranslationFormItem, {
    labelText: UIText.inputQuestionLabelLabel,
    currentValue: label,
    name: namePreffix + "-label",
    initialValue: existingTranslationValues === null || existingTranslationValues === void 0 ? void 0 : existingTranslationValues.name
  }, /*#__PURE__*/React__default.createElement(antd.Input, {
    disabled: !existingTranslation,
    onChange: handleChangeName
  })), (tooltip === null || tooltip === void 0 ? void 0 : tooltip.text) && /*#__PURE__*/React__default.createElement(TranslationFormItem, {
    labelText: UIText.inputQuestionTooltipLabel,
    currentValue: tooltip.text,
    name: namePreffix + "-tooltip",
    initialValue: existingTooltipTranslationValues === null || existingTooltipTranslationValues === void 0 ? void 0 : existingTooltipTranslationValues.text
  }, /*#__PURE__*/React__default.createElement(antd.Input.TextArea, {
    disabled: !existingTranslation,
    onChange: handleChangeTooltip
  })), [questionType.option, questionType.multiple_option].includes(type) && /*#__PURE__*/React__default.createElement("div", null, /*#__PURE__*/React__default.createElement("p", {
    className: styles['more-question-setting-text']
  }, UIText.questionMoreOptionTranslationText), allowOther && allowOtherText && /*#__PURE__*/React__default.createElement(TranslationFormItem, {
    labelText: UIText.inputQuestionAllowOtherTextLabel,
    currentValue: allowOtherText,
    name: namePreffix + "-allow_other_text",
    initialValue: existingTranslationValues === null || existingTranslationValues === void 0 ? void 0 : existingTranslationValues.allowOtherText
  }, /*#__PURE__*/React__default.createElement(antd.Input, {
    disabled: !existingTranslation,
    onChange: handleChangeAllowOtherText
  })), orderBy(options, 'order').filter(function (d) {
    return (d === null || d === void 0 ? void 0 : d.label) || (d === null || d === void 0 ? void 0 : d.value) || d.name;
  }).map(function (d, di) {
    var _d$translations;

    var existingOptionTranslationValues = d === null || d === void 0 ? void 0 : (_d$translations = d.translations) === null || _d$translations === void 0 ? void 0 : _d$translations.find(function (tl) {
      return tl.language === existingTranslation;
    });
    return /*#__PURE__*/React__default.createElement(TranslationFormItem, {
      key: "translation-option-" + d.id + "-" + di,
      labelText: UIText.inputQuestionOptionNameLabel + " " + d.order,
      currentValue: (d === null || d === void 0 ? void 0 : d.label) || d.name,
      name: namePreffix + "-option-name-" + ((d === null || d === void 0 ? void 0 : d.id) || (d === null || d === void 0 ? void 0 : d.value)),
      initialValue: existingOptionTranslationValues === null || existingOptionTranslationValues === void 0 ? void 0 : existingOptionTranslationValues.name
    }, /*#__PURE__*/React__default.createElement(antd.Input, {
      disabled: !existingTranslation,
      onChange: function onChange(e) {
        return handleChangeOptionName(e, d === null || d === void 0 ? void 0 : d.translations, d.id);
      }
    }));
  })));
};

var QuestionDefinitionTranslation = function QuestionDefinitionTranslation(_ref2) {
  var index = _ref2.index,
      question = _ref2.question;
  var id = question.id,
      label = question.label,
      order = question.order,
      questionGroupOrder = question.questionGroupOrder;

  var _UIStore$useState2 = UIStore.useState(function (s) {
    return s;
  }),
      activeEditTranslationQuestions = _UIStore$useState2.activeEditTranslationQuestions;

  var isEditTranslationQuestion = React.useMemo(function () {
    return activeEditTranslationQuestions.includes(id);
  }, [activeEditTranslationQuestions, id]);

  var handleEditTranslationQuestion = function handleEditTranslationQuestion() {
    UIStore.update(function (s) {
      s.activeEditTranslationQuestions = [].concat(activeEditTranslationQuestions, [id]);
    });
  };

  var handleCancelEditTranslationQuestion = function handleCancelEditTranslationQuestion() {
    UIStore.update(function (s) {
      s.activeEditTranslationQuestions = activeEditTranslationQuestions.filter(function (qId) {
        return qId !== id;
      });
    });
  };

  var cardTitleButton = [{
    type: 'show-button',
    isExpand: isEditTranslationQuestion,
    onClick: handleEditTranslationQuestion,
    onCancel: handleCancelEditTranslationQuestion
  }];
  return /*#__PURE__*/React__default.createElement(antd.Card, {
    key: "translation-question-" + index + "-" + id,
    title: /*#__PURE__*/React__default.createElement(CardTitle, {
      title: questionGroupOrder + "." + order + ". " + label,
      buttons: cardTitleButton
    }),
    headStyle: {
      textAlign: 'left',
      padding: '0 12px'
    },
    bodyStyle: {
      padding: isEditTranslationQuestion ? 24 : 0,
      borderTop: isEditTranslationQuestion ? '1px solid #f3f3f3' : 'none'
    }
  }, isEditTranslationQuestion && /*#__PURE__*/React__default.createElement(QuestionSettingTranslation, question));
};

var QuestionGroupSettingTranslation = function QuestionGroupSettingTranslation(_ref) {
  var id = _ref.id,
      label = _ref.label,
      description = _ref.description,
      repeatable = _ref.repeatable,
      repeatText = _ref.repeatText,
      _ref$translations = _ref.translations,
      translations = _ref$translations === void 0 ? [] : _ref$translations;

  var _UIStore$useState = UIStore.useState(function (s) {
    return s;
  }),
      UIText = _UIStore$useState.UIText,
      existingTranslation = _UIStore$useState.existingTranslation;

  var namePreffix = "translation-" + existingTranslation + "-question_group-" + id;
  var existingTranslationValues = React.useMemo(function () {
    return translations === null || translations === void 0 ? void 0 : translations.find(function (tl) {
      return tl.language === existingTranslation;
    });
  }, [translations, existingTranslation]);

  var updateTranslation = function updateTranslation(key, value) {
    var _data$generateTransla = data.generateTranslations(key, value, translations, existingTranslation),
        newTranslations = _data$generateTransla.newTranslations,
        currentTranslations = _data$generateTransla.currentTranslations;

    questionGroupFn.store.update(function (u) {
      u.questionGroups = u.questionGroups.map(function (qg) {
        if (qg.id === id) {
          return _extends({}, qg, {
            translations: !currentTranslations ? newTranslations : currentTranslations
          });
        }

        return qg;
      });
    });
  };

  var handleChangeName = function handleChangeName(e) {
    var _e$target;

    updateTranslation('name', e === null || e === void 0 ? void 0 : (_e$target = e.target) === null || _e$target === void 0 ? void 0 : _e$target.value);
  };

  var handleChangeDescription = function handleChangeDescription(e) {
    var _e$target2;

    updateTranslation('description', e === null || e === void 0 ? void 0 : (_e$target2 = e.target) === null || _e$target2 === void 0 ? void 0 : _e$target2.value);
  };

  var handleChangeRepeatText = function handleChangeRepeatText(e) {
    var _e$target3;

    updateTranslation('repeatText', e === null || e === void 0 ? void 0 : (_e$target3 = e.target) === null || _e$target3 === void 0 ? void 0 : _e$target3.value);
  };

  return /*#__PURE__*/React__default.createElement("div", null, label && /*#__PURE__*/React__default.createElement(TranslationFormItem, {
    labelText: UIText.inputQuestionGroupLabelLabel,
    currentValue: label,
    name: namePreffix + "-label",
    initialValue: existingTranslationValues === null || existingTranslationValues === void 0 ? void 0 : existingTranslationValues.name
  }, /*#__PURE__*/React__default.createElement(antd.Input, {
    disabled: !existingTranslation,
    onChange: handleChangeName
  })), description && /*#__PURE__*/React__default.createElement(TranslationFormItem, {
    labelText: UIText.inputQuestionGroupDescriptionLabel,
    currentValue: description,
    name: namePreffix + "-description",
    initialValue: existingTranslationValues === null || existingTranslationValues === void 0 ? void 0 : existingTranslationValues.description
  }, /*#__PURE__*/React__default.createElement(antd.Input.TextArea, {
    rows: 5,
    disabled: !existingTranslation,
    onChange: handleChangeDescription
  })), repeatable && repeatText && /*#__PURE__*/React__default.createElement(TranslationFormItem, {
    labelText: UIText.inputRepeatTextLabel,
    currentValue: repeatText,
    name: namePreffix + "-repeat_text",
    initialValue: existingTranslationValues === null || existingTranslationValues === void 0 ? void 0 : existingTranslationValues.repeatText
  }, /*#__PURE__*/React__default.createElement(antd.Input, {
    disabled: !existingTranslation,
    onChange: handleChangeRepeatText
  })));
};

var QuestionGroupDefinitionTranslation = function QuestionGroupDefinitionTranslation(_ref2) {
  var index = _ref2.index,
      questionGroup = _ref2.questionGroup;
  var id = questionGroup.id,
      label = questionGroup.label,
      order = questionGroup.order,
      questions = questionGroup.questions;

  var _UIStore$useState2 = UIStore.useState(function (s) {
    return s;
  }),
      activeTranslationQuestionGroups = _UIStore$useState2.activeTranslationQuestionGroups,
      activeEditTranslationQuestionGroups = _UIStore$useState2.activeEditTranslationQuestionGroups,
      activeEditTranslationQuestions = _UIStore$useState2.activeEditTranslationQuestions;

  var questionIds = questions.map(function (q) {
    return q.id;
  });
  var showTranslationQuestion = React.useMemo(function () {
    return activeTranslationQuestionGroups.includes(id);
  }, [activeTranslationQuestionGroups, id]);
  var isEditTranslationQuestionGroup = React.useMemo(function () {
    return activeEditTranslationQuestionGroups.includes(id);
  }, [activeEditTranslationQuestionGroups, id]);

  var handleHideTranslationQuestions = function handleHideTranslationQuestions() {
    UIStore.update(function (s) {
      s.activeTranslationQuestionGroups = activeTranslationQuestionGroups.filter(function (qgId) {
        return qgId !== id;
      });
    });
  };

  var handleCancelEditTranslationGroup = function handleCancelEditTranslationGroup() {
    UIStore.update(function (s) {
      s.activeEditTranslationQuestionGroups = activeEditTranslationQuestionGroups.filter(function (qgId) {
        return qgId !== id;
      });
    });
    handleHideTranslationQuestions();
  };

  var handleEditTranslationGroup = function handleEditTranslationGroup() {
    UIStore.update(function (s) {
      if (!activeEditTranslationQuestionGroups.includes(id)) {
        s.activeEditTranslationQuestionGroups = [].concat(activeEditTranslationQuestionGroups, [id]);
      } else {
        s.activeEditTranslationQuestionGroups = activeEditTranslationQuestionGroups.filter(function (a) {
          return a !== id;
        });
      }
    });
  };

  var handleExpandAll = function handleExpandAll() {
    UIStore.update(function (s) {
      s.activeEditTranslationQuestionGroups = lodash.uniq([].concat(activeEditTranslationQuestionGroups, [id]));
      s.activeEditTranslationQuestions = lodash.uniq([].concat(s.activeEditTranslationQuestions, questionIds));
    });
  };

  var handleCancelExpandAll = function handleCancelExpandAll() {
    handleCancelEditTranslationGroup();
    UIStore.update(function (s) {
      s.activeEditTranslationQuestions = lodash.difference(s.activeEditTranslationQuestions, questionIds);
    });
  };

  var cardTitleButton = [{
    type: 'show-button',
    isExpand: isEditTranslationQuestionGroup,
    onClick: handleEditTranslationGroup,
    onCancel: handleCancelEditTranslationGroup
  }];
  var cardExtraButton = [{
    type: 'expand-all-button',
    isExpand: lodash.intersection(activeEditTranslationQuestions, questionIds).length,
    onClick: handleExpandAll,
    onCancel: handleCancelExpandAll
  }];
  return /*#__PURE__*/React__default.createElement(antd.Card, {
    key: "translation-" + index + "-" + id,
    title: /*#__PURE__*/React__default.createElement(CardTitle, {
      title: order + ". " + label,
      buttons: cardTitleButton
    }),
    headStyle: {
      textAlign: 'left',
      padding: '0 12px'
    },
    bodyStyle: {
      padding: isEditTranslationQuestionGroup || showTranslationQuestion ? 24 : 0,
      borderTop: isEditTranslationQuestionGroup || showTranslationQuestion ? '1px solid #f3f3f3' : 'none'
    },
    extra: /*#__PURE__*/React__default.createElement(CardTitle, {
      buttons: cardExtraButton
    })
  }, isEditTranslationQuestionGroup && /*#__PURE__*/React__default.createElement(QuestionGroupSettingTranslation, questionGroup), isEditTranslationQuestionGroup && questions.map(function (q, qi) {
    return /*#__PURE__*/React__default.createElement(QuestionDefinitionTranslation, {
      key: "question-definition-translation-" + qi,
      index: qi,
      question: _extends({}, q, {
        questionGroupOrder: order
      })
    });
  }));
};

var staticDefaultLang = 'en';

var ExistingTranslation = function ExistingTranslation() {
  var _UIStore$useState = UIStore.useState(function (s) {
    return s;
  }),
      localeDropdownValue = _UIStore$useState.localeDropdownValue,
      existingTranslation = _UIStore$useState.existingTranslation;

  var formStore = formFn.store.useState(function (s) {
    return s;
  });
  var languages = (formStore === null || formStore === void 0 ? void 0 : formStore.languages) || [];

  var handleCloseTag = function handleCloseTag(lang) {
    UIStore.update(function (u) {
      u.existingTranslation = existingTranslation === lang ? null : existingTranslation;
    });
    formFn.store.update(function (u) {
      var _formStore$translatio;

      u.languages = languages.filter(function (ln) {
        return ln !== lang;
      });
      u.translations = formStore === null || formStore === void 0 ? void 0 : (_formStore$translatio = formStore.translations) === null || _formStore$translatio === void 0 ? void 0 : _formStore$translatio.filter(function (tl) {
        return tl.language !== lang;
      });
    });
    questionGroupFn.store.update(function (u) {
      u.questionGroups = u.questionGroups.map(function (qg) {
        var _qg$translations;

        var questions = qg.questions.map(function (q) {
          var _q$options, _q$translations;

          var newObj = q;

          if (q !== null && q !== void 0 && q.options && q !== null && q !== void 0 && (_q$options = q.options) !== null && _q$options !== void 0 && _q$options.length) {
            var options = q.options.map(function (op) {
              var _op$translations;

              return _extends({}, op, {
                translations: op === null || op === void 0 ? void 0 : (_op$translations = op.translations) === null || _op$translations === void 0 ? void 0 : _op$translations.filter(function (tl) {
                  return tl.language !== lang;
                })
              });
            });
            newObj = _extends({}, newObj, {
              options: options
            });
          }

          return _extends({}, newObj, {
            translations: q === null || q === void 0 ? void 0 : (_q$translations = q.translations) === null || _q$translations === void 0 ? void 0 : _q$translations.filter(function (tl) {
              return tl.language !== lang;
            })
          });
        });
        return _extends({}, qg, {
          questions: questions,
          translations: qg === null || qg === void 0 ? void 0 : (_qg$translations = qg.translations) === null || _qg$translations === void 0 ? void 0 : _qg$translations.filter(function (tl) {
            return tl.language !== lang;
          })
        });
      });
    });
  };

  return languages.map(function (lang) {
    var findLang = localeDropdownValue.find(function (lc) {
      return lc.value === lang;
    });
    return /*#__PURE__*/React__default.createElement("a", {
      key: lang,
      href: "#",
      onClick: function onClick() {
        return UIStore.update(function (u) {
          u.existingTranslation = existingTranslation !== lang ? lang : null;
        });
      }
    }, /*#__PURE__*/React__default.createElement(antd.Tag, {
      className: styles.tags + " " + (existingTranslation === lang ? styles['tags-active'] : ''),
      closable: true,
      onClose: function onClose() {
        return handleCloseTag(lang);
      }
    }, findLang.label));
  });
};

var FormTranslations = function FormTranslations() {
  var _Form$useForm = antd.Form.useForm(),
      formTranslation = _Form$useForm[0];

  var _UIStore$useState2 = UIStore.useState(function (s) {
    return s;
  }),
      UIText = _UIStore$useState2.UIText,
      localeDropdownValue = _UIStore$useState2.localeDropdownValue;

  var formStore = formFn.store.useState(function (s) {
    return s;
  });
  var questionGroups = questionGroupFn.store.useState(function (s) {
    return s === null || s === void 0 ? void 0 : s.questionGroups;
  });
  var languages = React.useMemo(function () {
    return (formStore === null || formStore === void 0 ? void 0 : formStore.languages) || [];
  }, [formStore === null || formStore === void 0 ? void 0 : formStore.languages]);
  var defaultLangDropdownValue = React.useMemo(function () {
    return localeDropdownValue.filter(function (ld) {
      return [staticDefaultLang].concat(languages).includes(ld.value);
    });
  }, [localeDropdownValue, languages]);
  return /*#__PURE__*/React__default.createElement(antd.Space, {
    direction: "vertical",
    style: {
      width: '100%'
    },
    size: 24
  }, /*#__PURE__*/React__default.createElement(antd.Row, {
    align: "top",
    justify: "space-between",
    gutter: [24, 24]
  }, /*#__PURE__*/React__default.createElement(antd.Col, {
    sm: 24,
    md: 6,
    lg: 4
  }, /*#__PURE__*/React__default.createElement("h4", null, UIText.inputFormDefaultLanguageLabel), /*#__PURE__*/React__default.createElement(antd.Select, {
    showSearch: true,
    className: styles['select-dropdown'],
    optionFilterProp: "label",
    options: defaultLangDropdownValue,
    onChange: function onChange(e) {
      return formFn.store.update(function (u) {
        u.defaultLanguage = e;
      });
    },
    value: (formStore === null || formStore === void 0 ? void 0 : formStore.defaultLanguage) || staticDefaultLang,
    disabled: defaultLangDropdownValue.length === 1,
    getPopupContainer: function getPopupContainer(triggerNode) {
      return triggerNode.parentElement;
    }
  })), /*#__PURE__*/React__default.createElement(antd.Col, {
    sm: 24,
    md: 8,
    lg: 8
  }, /*#__PURE__*/React__default.createElement("h4", null, UIText.inputFormTranslationLabel), /*#__PURE__*/React__default.createElement(antd.Select, {
    showSearch: true,
    className: styles['select-dropdown'],
    optionFilterProp: "children",
    onChange: function onChange(e) {
      return formFn.store.update(function (u) {
        u.languages = [].concat(languages, [e]);
      });
    },
    value: [],
    getPopupContainer: function getPopupContainer(triggerNode) {
      return triggerNode.parentElement;
    }
  }, localeDropdownValue.map(function (ld, ldi) {
    return /*#__PURE__*/React__default.createElement(antd.Select.Option, {
      key: ld.value + "-" + ldi,
      value: ld.value,
      disabled: languages.includes(ld.value) || ld.value === staticDefaultLang
    }, ld.label);
  }))), /*#__PURE__*/React__default.createElement(antd.Col, {
    sm: 24,
    md: 10,
    lg: 12
  }, /*#__PURE__*/React__default.createElement("h4", null, UIText.inputFormExistingTranslationsLabel), /*#__PURE__*/React__default.createElement(antd.Row, {
    align: "middle",
    gutter: [12, 12]
  }, /*#__PURE__*/React__default.createElement(ExistingTranslation, null)))), /*#__PURE__*/React__default.createElement(antd.Divider, null), /*#__PURE__*/React__default.createElement(antd.Form, {
    form: formTranslation,
    key: "akvo-react-form-editor-translation",
    name: "akvo-react-form-editor-translation",
    layout: "vertical"
  }, /*#__PURE__*/React__default.createElement(FormDefinitionTranslation, null), questionGroups.map(function (qg, qgi) {
    return /*#__PURE__*/React__default.createElement(QuestionGroupDefinitionTranslation, {
      key: "translation-question-group-definition-" + qgi,
      index: qgi,
      questionGroup: qg
    });
  })));
};

var FormPreview = function FormPreview() {
  var _questionGroupFn$stor = questionGroupFn.store.useState(function (s) {
    return s;
  }),
      questionGroups = _questionGroupFn$stor.questionGroups;

  var formStore = formFn.store.useState(function (s) {
    return s;
  });
  return /*#__PURE__*/React__default.createElement(akvoReactForm.Webform, {
    forms: data.toWebform(formStore, questionGroups)
  });
};

var FormDefinition = function FormDefinition(_ref) {
  var name = _ref.name,
      description = _ref.description;
  var form = antd.Form.useFormInstance();
  var UIText = UIStore.useState(function (s) {
    return s.UIText;
  });
  var inputFormNameLabel = UIText.inputFormNameLabel,
      inputFormDescriptionLabel = UIText.inputFormDescriptionLabel;
  React.useEffect(function () {
    form.setFieldsValue({
      'form-name': name
    });
    form.setFieldsValue({
      'form-description': description
    });
  }, [form, name, description]);
  return /*#__PURE__*/React__default.createElement("div", {
    key: "form-definition-input",
    className: "arfe-form-definition"
  }, /*#__PURE__*/React__default.createElement(antd.Form.Item, {
    label: inputFormNameLabel,
    name: "form-name",
    initialValue: name
  }, /*#__PURE__*/React__default.createElement(antd.Input, {
    allowClear: true,
    onChange: function onChange(e) {
      return formFn.store.update(function (u) {
        var _e$target;

        u.name = e === null || e === void 0 ? void 0 : (_e$target = e.target) === null || _e$target === void 0 ? void 0 : _e$target.value;
      });
    }
  })), /*#__PURE__*/React__default.createElement(antd.Form.Item, {
    label: inputFormDescriptionLabel,
    name: "form-description",
    initialValue: description
  }, /*#__PURE__*/React__default.createElement(antd.Input.TextArea, {
    rows: 5,
    allowClear: true,
    onChange: function onChange(e) {
      return formFn.store.update(function (u) {
        var _e$target2;

        u.description = e === null || e === void 0 ? void 0 : (_e$target2 = e.target) === null || _e$target2 === void 0 ? void 0 : _e$target2.value;
      });
    }
  })));
};

var Text$1 = antd.Typography.Text;

var QuestionGroupSetting = function QuestionGroupSetting(_ref) {
  var id = _ref.id,
      label = _ref.label,
      name = _ref.name,
      description = _ref.description,
      repeatable = _ref.repeatable,
      repeatText = _ref.repeatText;
  var namePreffix = "question_group-" + id;
  var UIText = UIStore.useState(function (s) {
    return s.UIText;
  });

  var _useState = React.useState(name ? snakeCase$1(name) : snakeCase$1(label)),
      nameFieldValue = _useState[0],
      setNameFieldValue = _useState[1];

  var questionGroups = questionGroupFn.store.useState(function (s) {
    return s.questionGroups;
  });
  var questionGroupErrors = ErrorStore.useState(function (s) {
    return s.questionGroupErrors;
  });
  var currentGroupError = React.useMemo(function () {
    var findError = questionGroupErrors.find(function (e) {
      return e.id === id;
    });

    if (findError) {
      return findError;
    }

    return false;
  }, [id, questionGroupErrors]);

  var checkIfGroupNameExist = function checkIfGroupNameExist(val) {
    var checkVal = snakeCase$1(val);
    var isNameExist = questionGroups.filter(function (qg) {
      return qg.id !== id;
    }).find(function (qg) {
      return qg.name === checkVal;
    });

    if (isNameExist) {
      ErrorStore.update(function (s) {
        s.questionGroupErrors = [].concat(s.questionGroupErrors, [{
          id: id,
          message: checkVal + " exist."
        }]);
      });
    } else {
      ErrorStore.update(function (s) {
        s.questionGroupErrors = s.questionGroupErrors.filter(function (e) {
          return e.id !== id;
        });
      });
    }
  };

  var handleChangeLabel = function handleChangeLabel(e) {
    var _e$target;

    var labelValue = e === null || e === void 0 ? void 0 : (_e$target = e.target) === null || _e$target === void 0 ? void 0 : _e$target.value;
    var nameValue = name;

    if (!name.trim() || name === snakeCase$1(label)) {
      nameValue = snakeCase$1(labelValue);
    }

    setNameFieldValue(nameValue);
    checkIfGroupNameExist(nameValue);
    questionGroupFn.store.update(function (s) {
      s.questionGroups = s.questionGroups.map(function (x) {
        if (x.id === id) {
          return _extends({}, x, {
            label: labelValue,
            name: nameValue
          });
        }

        return x;
      });
    });
  };

  var handleChangeName = function handleChangeName(e) {
    var _e$target2;

    var val = (e === null || e === void 0 ? void 0 : (_e$target2 = e.target) === null || _e$target2 === void 0 ? void 0 : _e$target2.value) || '';
    setNameFieldValue(val);
    checkIfGroupNameExist(val);
  };

  var handleBlurName = function handleBlurName() {
    setNameFieldValue(nameFieldValue ? snakeCase$1(nameFieldValue) : '');
    questionGroupFn.store.update(function (s) {
      s.questionGroups = s.questionGroups.map(function (x) {
        if (x.id === id) {
          return _extends({}, x, {
            name: nameFieldValue ? snakeCase$1(nameFieldValue) : ''
          });
        }

        return x;
      });
    });
  };

  var handleChangeDescription = function handleChangeDescription(e) {
    questionGroupFn.store.update(function (s) {
      s.questionGroups = s.questionGroups.map(function (x) {
        if (x.id === id) {
          var _e$target3;

          return _extends({}, x, {
            description: e === null || e === void 0 ? void 0 : (_e$target3 = e.target) === null || _e$target3 === void 0 ? void 0 : _e$target3.value
          });
        }

        return x;
      });
    });
  };

  var handleChangeRepeatable = function handleChangeRepeatable(e) {
    questionGroupFn.store.update(function (s) {
      s.questionGroups = s.questionGroups.map(function (x) {
        if (x.id === id) {
          var _e$target4;

          return _extends({}, x, {
            repeatable: e === null || e === void 0 ? void 0 : (_e$target4 = e.target) === null || _e$target4 === void 0 ? void 0 : _e$target4.checked
          });
        }

        return x;
      });
    });
  };

  var handleChangeRepeatText = function handleChangeRepeatText(e) {
    questionGroupFn.store.update(function (s) {
      s.questionGroups = s.questionGroups.map(function (x) {
        if (x.id === id) {
          var _e$target5;

          return _extends({}, x, {
            repeatText: e === null || e === void 0 ? void 0 : (_e$target5 = e.target) === null || _e$target5 === void 0 ? void 0 : _e$target5.value
          });
        }

        return x;
      });
    });
  };

  return /*#__PURE__*/React__default.createElement("div", null, /*#__PURE__*/React__default.createElement(antd.Form.Item, {
    label: UIText.inputQuestionGroupLabelLabel,
    initialValue: label || name,
    name: namePreffix + "-label",
    required: true
  }, /*#__PURE__*/React__default.createElement(antd.Input, {
    onChange: handleChangeLabel,
    allowClear: true
  })), /*#__PURE__*/React__default.createElement(antd.Form.Item, {
    label: UIText.inputQuestionGroupNameLabel,
    required: true
  }, /*#__PURE__*/React__default.createElement(antd.Input, {
    onChange: handleChangeName,
    onBlur: handleBlurName,
    allowClear: true,
    value: nameFieldValue
  })), currentGroupError !== null && currentGroupError !== void 0 && currentGroupError.id ? /*#__PURE__*/React__default.createElement("div", {
    className: styles['field-error-wrapper']
  }, /*#__PURE__*/React__default.createElement(Text$1, {
    type: "danger"
  }, currentGroupError.message)) : '', /*#__PURE__*/React__default.createElement(antd.Form.Item, {
    label: UIText.inputQuestionGroupDescriptionLabel,
    initialValue: description,
    name: namePreffix + "-description"
  }, /*#__PURE__*/React__default.createElement(antd.Input.TextArea, {
    onChange: handleChangeDescription,
    allowClear: true,
    rows: 5
  })), /*#__PURE__*/React__default.createElement(antd.Row, {
    align: "bottom",
    gutter: [24, 24]
  }, /*#__PURE__*/React__default.createElement(antd.Col, null, /*#__PURE__*/React__default.createElement(antd.Form.Item, {
    name: namePreffix + "-repeatable",
    className: styles['input-checkbox-wrapper']
  }, /*#__PURE__*/React__default.createElement(antd.Checkbox, {
    onChange: handleChangeRepeatable,
    checked: repeatable
  }, ' ', UIText.inputRepeatThisGroupCheckbox))), repeatable && /*#__PURE__*/React__default.createElement(antd.Col, {
    span: 10
  }, /*#__PURE__*/React__default.createElement(antd.Form.Item, {
    label: UIText.inputRepeatTextLabel,
    name: namePreffix + "-repeat_text",
    initialValue: repeatText
  }, /*#__PURE__*/React__default.createElement(antd.Input, {
    onChange: handleChangeRepeatText,
    allowClear: true
  })))));
};

var SettingInput = function SettingInput(_ref) {
  var id = _ref.id,
      questionGroupId = _ref.questionGroupId,
      requiredDoubleEntry = _ref.requiredDoubleEntry,
      hiddenString = _ref.hiddenString,
      addonBefore = _ref.addonBefore,
      addonAfter = _ref.addonAfter;
  var namePreffix = "question-" + id;
  var UIText = UIStore.useState(function (s) {
    return s.UIText;
  });

  var updateState = function updateState(name, value) {
    questionGroupFn.store.update(function (s) {
      s.questionGroups = s.questionGroups.map(function (qg) {
        if (qg.id === questionGroupId) {
          var questions = qg.questions.map(function (q) {
            if (q.id === id) {
              var _extends2;

              return _extends({}, q, (_extends2 = {}, _extends2[name] = value, _extends2));
            }

            return q;
          });
          return _extends({}, qg, {
            questions: questions
          });
        }

        return qg;
      });
    });
  };

  var handleChangeDoubleEntry = function handleChangeDoubleEntry(e) {
    var _e$target;

    updateState('requiredDoubleEntry', e === null || e === void 0 ? void 0 : (_e$target = e.target) === null || _e$target === void 0 ? void 0 : _e$target.checked);
  };

  var handleChangeHiddenString = function handleChangeHiddenString(e) {
    var _e$target2;

    updateState('hiddenString', e === null || e === void 0 ? void 0 : (_e$target2 = e.target) === null || _e$target2 === void 0 ? void 0 : _e$target2.checked);
  };

  var onAddonBefore = function onAddonBefore(value) {
    return updateState('addonBefore', value);
  };

  var onAddonAfter = function onAddonAfter(value) {
    return updateState('addonAfter', value);
  };

  return /*#__PURE__*/React__default.createElement("div", null, /*#__PURE__*/React__default.createElement("p", {
    className: styles['more-question-setting-text']
  }, UIText.questionMoreInputTypeSettingText), /*#__PURE__*/React__default.createElement(antd.Space, {
    className: styles['space-align-left']
  }, /*#__PURE__*/React__default.createElement(antd.Form.Item, {
    name: namePreffix + "-require_double_entry"
  }, /*#__PURE__*/React__default.createElement(antd.Checkbox, {
    onChange: handleChangeDoubleEntry,
    checked: requiredDoubleEntry
  }, ' ', UIText.inputQuestionRequireDoubleEntryCheckbox)), /*#__PURE__*/React__default.createElement(antd.Form.Item, {
    name: namePreffix + "-hidden_string"
  }, /*#__PURE__*/React__default.createElement(antd.Checkbox, {
    onChange: handleChangeHiddenString,
    checked: hiddenString
  }, ' ', UIText.inputQuestionHiddenStringCheckbox))), /*#__PURE__*/React__default.createElement(SettingAddons, {
    namePreffix: namePreffix,
    addonBefore: addonBefore,
    addonAfter: addonAfter,
    onAddonBefore: onAddonBefore,
    onAddonAfter: onAddonAfter
  }));
};

var SettingNumber = function SettingNumber(_ref) {
  var id = _ref.id,
      questionGroupId = _ref.questionGroupId,
      _ref$rule = _ref.rule,
      rule = _ref$rule === void 0 ? {
    allowDecimal: false,
    min: null,
    max: null
  } : _ref$rule,
      addonBefore = _ref.addonBefore,
      addonAfter = _ref.addonAfter;
  var namePreffix = "question-" + id;
  var UIText = UIStore.useState(function (s) {
    return s.UIText;
  });
  var allowDecimal = rule === null || rule === void 0 ? void 0 : rule.allowDecimal;
  var min = rule === null || rule === void 0 ? void 0 : rule.min;
  var max = rule === null || rule === void 0 ? void 0 : rule.max;
  var moreNumberSettings = [{
    label: UIText.inputQuestionMinimumValueLabel,
    value: min,
    key: 'min',
    rules: {
      max: max - 1,
      message: UIText.inputQuestionMinimumValidationText + " " + max
    }
  }, {
    label: UIText.inputQuestionMaximumValueLabel,
    value: max,
    key: 'max',
    rules: {
      min: min + 1,
      message: UIText.inputQuestionMaximumValidationText + " " + min
    }
  }];

  var updateState = function updateState(name, value) {
    questionGroupFn.store.update(function (s) {
      s.questionGroups = s.questionGroups.map(function (qg) {
        if (qg.id === questionGroupId) {
          var questions = qg.questions.map(function (q) {
            if (q.id === id) {
              var _extends3;

              if (['addonBefore', 'addonAfter'].includes(name)) {
                var _extends2;

                return _extends({}, q, (_extends2 = {}, _extends2[name] = value, _extends2));
              }

              return _extends({}, q, {
                rule: _extends({}, q === null || q === void 0 ? void 0 : q.rule, (_extends3 = {}, _extends3[name] = value, _extends3))
              });
            }

            return q;
          });
          return _extends({}, qg, {
            questions: questions
          });
        }

        return qg;
      });
    });
  };

  var handleChangeAllowDecimal = function handleChangeAllowDecimal(e) {
    var _e$target;

    updateState('allowDecimal', e === null || e === void 0 ? void 0 : (_e$target = e.target) === null || _e$target === void 0 ? void 0 : _e$target.checked);
  };

  var handleChangeMinMax = function handleChangeMinMax(key, e) {
    updateState(key, e);
  };

  var onAddonBefore = function onAddonBefore(value) {
    return updateState('addonBefore', value);
  };

  var onAddonAfter = function onAddonAfter(value) {
    return updateState('addonAfter', value);
  };

  return /*#__PURE__*/React__default.createElement("div", null, /*#__PURE__*/React__default.createElement("p", {
    className: styles['more-question-setting-text']
  }, UIText.questionMoreInputNumberSettingText), /*#__PURE__*/React__default.createElement(antd.Space, {
    className: styles['space-align-left']
  }, /*#__PURE__*/React__default.createElement(antd.Form.Item, {
    name: namePreffix + "-allow_decimal"
  }, /*#__PURE__*/React__default.createElement(antd.Checkbox, {
    onChange: handleChangeAllowDecimal,
    checked: allowDecimal
  }, ' ', UIText.inputQuestionAllowDecimalCheckbox))), /*#__PURE__*/React__default.createElement(antd.Row, {
    align: "middle",
    gutter: [24, 24]
  }, moreNumberSettings.map(function (x) {
    return /*#__PURE__*/React__default.createElement(antd.Col, {
      key: namePreffix + "-" + x.key,
      span: 8
    }, /*#__PURE__*/React__default.createElement(antd.Form.Item, {
      label: x.label,
      initialValue: x.value,
      name: namePreffix + "-" + x.key,
      rules: [_extends({
        type: 'number'
      }, x.rules)]
    }, /*#__PURE__*/React__default.createElement(antd.InputNumber, {
      style: {
        width: '100%'
      },
      controls: false,
      keyboard: false,
      onChange: function onChange(e) {
        return handleChangeMinMax(x.key, e);
      }
    })));
  })), /*#__PURE__*/React__default.createElement(SettingAddons, {
    namePreffix: namePreffix,
    addonBefore: addonBefore,
    addonAfter: addonAfter,
    onAddonBefore: onAddonBefore,
    onAddonAfter: onAddonAfter
  }));
};

var allowedQuestionTypes = [questionType.option, questionType.multiple_option];

var QuestionPrefilled = function QuestionPrefilled(_ref) {
  var id = _ref.id,
      questionGroupId = _ref.questionGroupId,
      _ref$options = _ref.options,
      options = _ref$options === void 0 ? [] : _ref$options,
      _ref$mode = _ref.mode,
      mode = _ref$mode === void 0 ? null : _ref$mode,
      _ref$initialPre = _ref.initialPre,
      initialPre = _ref$initialPre === void 0 ? {} : _ref$initialPre;

  var _useState = React.useState(0),
      isPrefilled = _useState[0],
      setIsPrefilled = _useState[1];

  var _useState2 = React.useState(true),
      preload = _useState2[0],
      setPreload = _useState2[1];

  var _useState3 = React.useState([]),
      settings = _useState3[0],
      setSettings = _useState3[1];

  var _UIStore$useState = UIStore.useState(function (s) {
    return s;
  }),
      UIText = _UIStore$useState.UIText;

  var questionGroups = questionGroupFn.store.useState(function (s) {
    return s.questionGroups;
  });
  var namePreffix = "prefilled-" + id;
  var allOptionTypeQuestions = React.useMemo(function () {
    var _questionGroups$flatM, _questionGroups$flatM2;

    return (questionGroups === null || questionGroups === void 0 ? void 0 : (_questionGroups$flatM = questionGroups.flatMap(function (qg) {
      return qg.questions;
    })) === null || _questionGroups$flatM === void 0 ? void 0 : (_questionGroups$flatM2 = _questionGroups$flatM.filter(function (q) {
      return allowedQuestionTypes.includes(q.type) && (q === null || q === void 0 ? void 0 : q.id) < id;
    })) === null || _questionGroups$flatM2 === void 0 ? void 0 : _questionGroups$flatM2.map(function (q) {
      return {
        value: q.name,
        label: q.label
      };
    })) || [];
  }, [id, questionGroups]);

  var onChangeAnswer = function onChangeAnswer(sid, answer) {
    var updatedSettings = settings.map(function (s) {
      if (s.id === sid) {
        return _extends({}, s, {
          answer: answer
        });
      }

      return s;
    });
    setSettings(updatedSettings);
  };

  var onChangeQuestion = function onChangeQuestion(sid, value) {
    var question = questionGroups.flatMap(function (qg) {
      return qg.questions;
    }).find(function (q) {
      return q.name === value;
    });

    if (question) {
      var _question$options;

      var existingAnswers = settings.filter(function (s) {
        return s.question === value;
      }).map(function (s) {
        return s.answer;
      });
      var answerList = (question === null || question === void 0 ? void 0 : (_question$options = question.options) === null || _question$options === void 0 ? void 0 : _question$options.filter(function (o) {
        return !existingAnswers.includes(o === null || o === void 0 ? void 0 : o.value);
      })) || [];
      var updatedSettings = settings.map(function (s) {
        if (s.id === sid) {
          return _extends({}, s, {
            question: value,
            answerList: answerList
          });
        }

        return s;
      });
      setSettings(updatedSettings);
    }
  };

  var onClearQuestion = function onClearQuestion(sid) {
    var updatedSettings = settings.map(function (s) {
      if (s.id === sid) {
        return _extends({}, s, {
          answer: null,
          value: mode === 'multiple' ? [] : null,
          answerList: []
        });
      }

      return s;
    });
    setSettings(updatedSettings);
  };

  var handleOnAddSettings = function handleOnAddSettings() {
    setSettings([].concat(settings, [{
      id: generateId(),
      question: null,
      answer: null,
      answerList: [],
      value: mode === 'multiple' ? [] : null
    }]));
  };

  var handleOnRemoveSettings = function handleOnRemoveSettings(id) {
    var removedSettings = settings.filter(function (s) {
      return s.id !== id;
    });
    var removedItem = settings.find(function (s) {
      return s.id === id;
    });
    var removedAnswer = removedItem.answerList.find(function (a) {
      return (a === null || a === void 0 ? void 0 : a.value) === removedItem.answer;
    });

    if (removedAnswer) {
      removedSettings = removedSettings.map(function (s) {
        if (!s.answerList.map(function (a) {
          return a.value;
        }).includes(removedAnswer.value)) {
          return _extends({}, s, {
            answerList: [].concat(s.answerList, [removedAnswer])
          });
        }

        return s;
      });
    }

    if (removedSettings.length === 0) {
      setIsPrefilled(0);
    }

    setSettings(removedSettings);
  };

  var onChangeConfirm = function onChangeConfirm(e) {
    if (e.target.value === 0) {
      setSettings([]);
    }

    if (e.target.value === 1 && settings.length === 0) {
      handleOnAddSettings();
    }

    setIsPrefilled(e.target.value);
  };

  var onChangeDefaultValue = function onChangeDefaultValue(sid, v) {
    var updatedSettings = settings.map(function (s) {
      if (s.id === sid) {
        return _extends({}, s, {
          value: v
        });
      }

      return s;
    });
    setSettings(updatedSettings);
    var pre = updatedSettings.reduce(function (acc, item) {
      if (!acc[item.question]) {
        acc[item.question] = {};
      }

      if (!acc[item.question][item.answer]) {
        acc[item.question][item.answer] = [];
      }

      if (Array.isArray(item.value)) {
        acc[item.question][item.answer] = [].concat(acc[item.question][item.answer], item.value);
      } else {
        acc[item.question][item.answer].push(item.value);
      }

      return acc;
    }, {});
    updatePreState(pre);
  };

  var updatePreState = React.useCallback(function (pre) {
    if (pre === void 0) {
      pre = {};
    }

    questionGroupFn.store.update(function (s) {
      s.questionGroups = s.questionGroups.map(function (qg) {
        if (qg.id === questionGroupId) {
          var questions = qg.questions.map(function (q) {
            if (q.id === id) {
              return _extends({}, q, {
                pre: pre
              });
            }

            return q;
          });
          return _extends({}, qg, {
            questions: questions
          });
        }

        return qg;
      });
    });
  }, [id, questionGroupId]);
  React.useEffect(function () {
    if (preload && Object.keys(initialPre).length && isPrefilled === 0 && settings.length === 0) {
      setPreload(false);
      setIsPrefilled(1);
      var initSettings = Object.keys(initialPre).flatMap(function (qn, qx) {
        var fq = questionGroups.flatMap(function (qg) {
          return qg.questions;
        }).find(function (q) {
          return q.name === qn;
        });
        return Object.keys(initialPre[qn]).map(function (av, ax) {
          var _Object$keys, _fq$options, _initialPre$qn$av;

          var prev = (_Object$keys = Object.keys(initialPre[qn])) === null || _Object$keys === void 0 ? void 0 : _Object$keys[ax - 1];
          return {
            id: "" + qx + ax,
            question: qn,
            answer: av,
            answerList: fq === null || fq === void 0 ? void 0 : (_fq$options = fq.options) === null || _fq$options === void 0 ? void 0 : _fq$options.filter(function (o) {
              return prev ? (o === null || o === void 0 ? void 0 : o.value) !== prev : o;
            }),
            value: mode === 'multiple' ? initialPre[qn][av] : (_initialPre$qn$av = initialPre[qn][av]) === null || _initialPre$qn$av === void 0 ? void 0 : _initialPre$qn$av[0]
          };
        });
      });
      setSettings(initSettings);
    }
  }, [preload, isPrefilled, questionGroups, settings, initialPre, mode]);

  if (!allOptionTypeQuestions.length) {
    return null;
  }

  return /*#__PURE__*/React__default.createElement("div", {
    className: styles['more-question-setting-text']
  }, /*#__PURE__*/React__default.createElement(antd.Divider, {
    orientation: "left",
    orientationMargin: 0
  }, /*#__PURE__*/React__default.createElement(antd.Space, null, UIText.prefilledQuestionTitle, /*#__PURE__*/React__default.createElement(antd.Radio.Group, {
    onChange: onChangeConfirm,
    value: isPrefilled,
    name: namePreffix + "_confirm"
  }, /*#__PURE__*/React__default.createElement(antd.Radio, {
    value: 1
  }, UIText.prefilledYesText), /*#__PURE__*/React__default.createElement(antd.Radio, {
    value: 0
  }, UIText.prefilledNoText)))), settings.map(function (s) {
    return /*#__PURE__*/React__default.createElement(antd.Row, {
      gutter: [16, 8],
      align: "middle",
      key: namePreffix + "_" + s.id
    }, /*#__PURE__*/React__default.createElement(antd.Col, {
      span: 20
    }, /*#__PURE__*/React__default.createElement(antd.Row, {
      gutter: [16, 8]
    }, /*#__PURE__*/React__default.createElement(antd.Col, {
      lg: 8
    }, /*#__PURE__*/React__default.createElement(antd.Form.Item, {
      label: UIText.prefilledSourceQuestion
    }, /*#__PURE__*/React__default.createElement(antd.Select, {
      showSearch: true,
      name: namePreffix + "_question_" + s.id,
      placeholder: UIText.prefilledSQPlaceholder,
      className: styles['select-dropdown'],
      options: allOptionTypeQuestions,
      getPopupContainer: function getPopupContainer(triggerNode) {
        return triggerNode.parentElement;
      },
      onChange: function onChange(v) {
        return onChangeQuestion(s.id, v);
      },
      value: s.question,
      onClear: function onClear() {
        return onClearQuestion(s.id);
      },
      allowClear: true
    }))), /*#__PURE__*/React__default.createElement(antd.Col, {
      lg: 8
    }, /*#__PURE__*/React__default.createElement(antd.Form.Item, {
      label: UIText.prefilledSourceAnswer
    }, /*#__PURE__*/React__default.createElement(antd.Select, {
      showSearch: true,
      name: namePreffix + "_answer_" + s.id,
      placeholder: UIText.prefilledSAPlaceholder,
      className: styles['select-dropdown'],
      options: s.answerList,
      getPopupContainer: function getPopupContainer(triggerNode) {
        return triggerNode.parentElement;
      },
      onChange: function onChange(v) {
        return onChangeAnswer(s.id, v);
      },
      value: s.answer
    }))), /*#__PURE__*/React__default.createElement(antd.Col, {
      lg: 8
    }, /*#__PURE__*/React__default.createElement(antd.Form.Item, {
      label: UIText.prefilledDefaultValue
    }, /*#__PURE__*/React__default.createElement(antd.Select, {
      showSearch: true,
      name: namePreffix + "_value_" + s.id,
      placeholder: UIText.prefilledDVPlaceholder,
      className: styles['select-dropdown'],
      options: options,
      getPopupContainer: function getPopupContainer(triggerNode) {
        return triggerNode.parentElement;
      },
      disabled: s.answerList.length === 0,
      onChange: function onChange(v) {
        return onChangeDefaultValue(s.id, v);
      },
      value: s.value,
      mode: mode
    }))))), /*#__PURE__*/React__default.createElement(antd.Col, {
      span: 4
    }, /*#__PURE__*/React__default.createElement(antd.Button, {
      type: "link",
      className: styles['button-icon'],
      icon: /*#__PURE__*/React__default.createElement(md.MdOutlineAddCircleOutline, null),
      onClick: handleOnAddSettings,
      disabled: s.answerList.length === 0
    }), /*#__PURE__*/React__default.createElement(antd.Button, {
      type: "link",
      className: styles['button-icon'],
      icon: /*#__PURE__*/React__default.createElement(md.MdOutlineRemoveCircleOutline, null),
      onClick: function onClick() {
        return handleOnRemoveSettings(s.id);
      }
    })));
  }), settings.length > 0 && /*#__PURE__*/React__default.createElement(antd.Divider, null));
};

var snakeCase = function snakeCase(txt) {
  var _txt, _txt$toLowerCase;

  if (txt === void 0) {
    txt = '';
  }

  return (_txt = txt) === null || _txt === void 0 ? void 0 : (_txt$toLowerCase = _txt.toLowerCase()) === null || _txt$toLowerCase === void 0 ? void 0 : _txt$toLowerCase.replace(/\s+/g, '_');
};

var defaultOptions = function defaultOptions(_ref) {
  var _ref$init = _ref.init,
      init = _ref$init === void 0 ? false : _ref$init,
      _ref$order = _ref.order,
      order = _ref$order === void 0 ? 0 : _ref$order;
  var optTextTemp = 'New Option';
  var option = {
    value: snakeCase(optTextTemp),
    label: optTextTemp,
    order: 1
  };

  if (init) {
    return [_extends({}, option, {
      id: generateId(),
      label: optTextTemp + " 1",
      value: snakeCase(optTextTemp + " 1"),
      order: 1
    }), _extends({}, option, {
      id: generateId() + 1,
      label: optTextTemp + " 2",
      value: snakeCase(optTextTemp + " 2"),
      order: 2
    })];
  }

  return _extends({}, option, {
    id: generateId(),
    order: order
  });
};

var SettingOption = function SettingOption(_ref2) {
  var id = _ref2.id,
      questionGroupId = _ref2.questionGroupId,
      allowOther = _ref2.allowOther,
      allowOtherText = _ref2.allowOtherText,
      initialOptions = _ref2.options,
      optionType = _ref2.type,
      initialPre = _ref2.pre;
  var namePreffix = "question-" + id;
  var UIText = UIStore.useState(function (s) {
    return s.UIText;
  });

  var _useState = React.useState(initialOptions !== null && initialOptions !== void 0 && initialOptions.length ? initialOptions.map(function (x, xi) {
    return _extends({}, x, {
      label: (x === null || x === void 0 ? void 0 : x.label) || x.name,
      value: (x === null || x === void 0 ? void 0 : x.value) || snakeCase(x.name),
      id: (x === null || x === void 0 ? void 0 : x.id) || generateId() + xi,
      order: (x === null || x === void 0 ? void 0 : x.order) || xi + 1
    });
  }) : defaultOptions({
    init: true
  })),
      options = _useState[0],
      setOptions = _useState[1];

  var _useState2 = React.useState(null),
      displayColorPicker = _useState2[0],
      setDisplayColorPicker = _useState2[1];

  var updateState = React.useCallback(function (name, value) {
    questionGroupFn.store.update(function (s) {
      s.questionGroups = s.questionGroups.map(function (qg) {
        if (qg.id === questionGroupId) {
          var questions = qg.questions.map(function (q) {
            if (q.id === id) {
              var _extends2;

              return _extends({}, q, (_extends2 = {}, _extends2[name] = value, _extends2));
            }

            return q;
          });
          return _extends({}, qg, {
            questions: questions
          });
        }

        return qg;
      });
    });
  }, [id, questionGroupId]);
  React.useEffect(function () {
    updateState('options', options);
  }, [options, id, questionGroupId, updateState]);

  var handleOnChangeAllowOther = function handleOnChangeAllowOther(e) {
    var _e$target;

    updateState('allowOther', e === null || e === void 0 ? void 0 : (_e$target = e.target) === null || _e$target === void 0 ? void 0 : _e$target.checked);
  };

  var handleOnChangeAllowOtherText = function handleOnChangeAllowOtherText(e) {
    var _e$target2;

    updateState('allowOtherText', e === null || e === void 0 ? void 0 : (_e$target2 = e.target) === null || _e$target2 === void 0 ? void 0 : _e$target2.value);
  };

  var handleOnChangeCode = function handleOnChangeCode(e, current) {
    var _e$target3;

    var currentId = current.id;
    var val = e === null || e === void 0 ? void 0 : (_e$target3 = e.target) === null || _e$target3 === void 0 ? void 0 : _e$target3.value;
    setOptions(options.map(function (opt) {
      if (opt.id === currentId) {
        return _extends({}, opt, {
          value: val ? val : ''
        });
      }

      return opt;
    }));
  };

  var handleOnBlurCode = function handleOnBlurCode() {
    var updatedOptions = options.map(function (opt) {
      return _extends({}, opt, {
        value: opt.value ? snakeCase(opt.value) : ''
      });
    });
    setOptions(updatedOptions);
    updateState('options', updatedOptions);
  };

  var handleOnChangeOption = function handleOnChangeOption(e, current) {
    var _e$target4;

    var currentId = current.id;
    var val = e === null || e === void 0 ? void 0 : (_e$target4 = e.target) === null || _e$target4 === void 0 ? void 0 : _e$target4.value;
    setOptions(options.map(function (opt) {
      if (opt.id === currentId) {
        var _opt$value;

        var valueTemp = opt.value;

        if (!(opt !== null && opt !== void 0 && (_opt$value = opt.value) !== null && _opt$value !== void 0 && _opt$value.trim()) || opt.value === snakeCase(opt.label)) {
          valueTemp = snakeCase(val);
        }

        return _extends({}, opt, {
          label: val ? val : '',
          value: valueTemp ? valueTemp : ''
        });
      }

      return opt;
    }));
  };

  var handleOnAddOption = function handleOnAddOption(current) {
    var currentOrder = current.order;
    var lastOrder = lodash.takeRight(lodash.orderBy(options, 'order'))[0].order;
    var reorderOptions = options.map(function (opt) {
      if (opt.order > currentOrder) {
        opt['order'] = opt['order'] + 1;
      }

      if (opt.order < currentOrder && opt.order !== 1 && currentOrder !== lastOrder) {
        opt['order'] = opt['order'] - 1;
      }

      return opt;
    });
    var addOptions = [].concat(reorderOptions, [defaultOptions({
      order: currentOrder + 1
    })]);
    setOptions(lodash.orderBy(addOptions, 'order'));
  };

  var handleOnMoveOption = function handleOnMoveOption(current, targetOrder) {
    var currentOrder = current.order;
    var prevOptions = options.filter(function (opt) {
      return opt.order !== currentOrder && opt.order !== targetOrder;
    });
    var currentOption = options.filter(function (opt) {
      return opt.order === currentOrder;
    }).map(function (opt) {
      return _extends({}, opt, {
        order: targetOrder
      });
    });
    var targetOption = options.filter(function (opt) {
      return opt.order === targetOrder;
    }).map(function (opt) {
      return _extends({}, opt, {
        order: currentOrder
      });
    });
    setOptions(lodash.orderBy([].concat(prevOptions, currentOption, targetOption), 'order'));
  };

  var handleOnDeleteOption = function handleOnDeleteOption(currentId) {
    setOptions(lodash.orderBy(options, 'order').filter(function (opt) {
      return opt.id !== currentId;
    }).map(function (opt, opti) {
      return _extends({}, opt, {
        order: opti + 1
      });
    }));
  };

  var handleDisplayColorPicker = function handleDisplayColorPicker(optionId) {
    if (displayColorPicker === optionId) {
      setDisplayColorPicker(null);
      return;
    }

    setDisplayColorPicker(optionId);
  };

  var handleOnPickColor = function handleOnPickColor(colorHex, current) {
    var currentId = current.id;
    setOptions(options.map(function (opt) {
      if (opt.id === currentId) {
        return _extends({}, opt, {
          color: colorHex || null
        });
      }

      return opt;
    }));
    setDisplayColorPicker(null);
  };

  return /*#__PURE__*/React__default.createElement("div", null, /*#__PURE__*/React__default.createElement("p", {
    className: styles['more-question-setting-text']
  }, UIText.questionMoreOptionTypeSettingText), /*#__PURE__*/React__default.createElement(antd.Row, {
    align: "bottom",
    gutter: [24, 24]
  }, /*#__PURE__*/React__default.createElement(antd.Col, null, /*#__PURE__*/React__default.createElement(antd.Form.Item, {
    name: namePreffix + "-allow_other"
  }, /*#__PURE__*/React__default.createElement(antd.Checkbox, {
    onChange: handleOnChangeAllowOther,
    checked: allowOther
  }, ' ', UIText.inputQuestionAllowOtherCheckbox))), allowOther && /*#__PURE__*/React__default.createElement(antd.Col, {
    span: 11
  }, /*#__PURE__*/React__default.createElement(antd.Form.Item, {
    label: UIText.inputQuestionAllowOtherTextLabel,
    name: namePreffix + "-allow_other_text",
    initialValue: allowOtherText
  }, /*#__PURE__*/React__default.createElement(antd.Input, {
    onChange: handleOnChangeAllowOtherText,
    allowClear: true
  })))), lodash.orderBy(options, 'order').map(function (d, di) {
    return /*#__PURE__*/React__default.createElement(antd.Row, {
      key: "option-" + id + "-" + di,
      align: "start",
      justify: "start",
      gutter: [12, 12]
    }, /*#__PURE__*/React__default.createElement(antd.Col, {
      span: 4
    }, /*#__PURE__*/React__default.createElement(antd.Form.Item, null, /*#__PURE__*/React__default.createElement(antd.Input, {
      placeholder: "Value",
      onChange: function onChange(e) {
        return handleOnChangeCode(e, d);
      },
      onBlur: handleOnBlurCode,
      allowClear: true,
      value: d.value
    }))), /*#__PURE__*/React__default.createElement(antd.Col, {
      span: 8
    }, /*#__PURE__*/React__default.createElement(antd.Form.Item, {
      initialValue: d.label,
      name: namePreffix + "-option_label_" + d.id
    }, /*#__PURE__*/React__default.createElement(antd.Input, {
      onChange: function onChange(e) {
        return handleOnChangeOption(e, d);
      },
      allowClear: true
    }))), /*#__PURE__*/React__default.createElement(antd.Col, {
      span: 2
    }, /*#__PURE__*/React__default.createElement(antd.Form.Item, {
      initialValue: (d === null || d === void 0 ? void 0 : d.color) || null,
      name: namePreffix + "-option_color_" + d.id
    }, /*#__PURE__*/React__default.createElement(antd.Input, {
      addonBefore: /*#__PURE__*/React__default.createElement("div", {
        style: {
          width: 20,
          height: 15,
          backgroundColor: (d === null || d === void 0 ? void 0 : d.color) || '#fffffff'
        }
      }, "\xA0"),
      onClick: function onClick() {
        return handleDisplayColorPicker(d.id);
      },
      onChange: function onChange(e) {
        var _e$target5;

        return handleOnPickColor(e === null || e === void 0 ? void 0 : (_e$target5 = e.target) === null || _e$target5 === void 0 ? void 0 : _e$target5.value, d);
      },
      placeholder: "#FFFFFF",
      value: (d === null || d === void 0 ? void 0 : d.color) || null
    }), displayColorPicker === d.id && /*#__PURE__*/React__default.createElement("div", {
      style: {
        position: 'absolute',
        zIndex: '2'
      }
    }, /*#__PURE__*/React__default.createElement(reactColor.SketchPicker, {
      color: (d === null || d === void 0 ? void 0 : d.color) || '#ffffff',
      onChange: function onChange(e) {
        return handleOnPickColor(e === null || e === void 0 ? void 0 : e.hex, d);
      }
    })))), /*#__PURE__*/React__default.createElement(antd.Col, null, /*#__PURE__*/React__default.createElement(antd.Space, null, /*#__PURE__*/React__default.createElement(antd.Button, {
      type: "link",
      className: styles['button-icon'],
      icon: /*#__PURE__*/React__default.createElement(md.MdOutlineAddCircleOutline, null),
      onClick: function onClick() {
        return handleOnAddOption(d);
      }
    }), /*#__PURE__*/React__default.createElement(antd.Button, {
      type: "link",
      className: styles['button-icon'],
      icon: /*#__PURE__*/React__default.createElement(md.MdOutlineArrowCircleUp, null),
      onClick: function onClick() {
        return handleOnMoveOption(d, d.order - 1);
      },
      disabled: di === 0
    }), /*#__PURE__*/React__default.createElement(antd.Button, {
      type: "link",
      className: styles['button-icon'],
      icon: /*#__PURE__*/React__default.createElement(md.MdOutlineArrowCircleDown, null),
      onClick: function onClick() {
        return handleOnMoveOption(d, d.order + 1);
      },
      disabled: di === options.length - 1
    }), /*#__PURE__*/React__default.createElement(antd.Button, {
      type: "link",
      className: styles['button-icon'],
      icon: /*#__PURE__*/React__default.createElement(md.MdOutlineRemoveCircleOutline, null),
      onClick: function onClick() {
        return handleOnDeleteOption(d.id);
      },
      disabled: options.length === 1
    }))));
  }), /*#__PURE__*/React__default.createElement(QuestionPrefilled, {
    id: id,
    options: options,
    questionGroupId: questionGroupId,
    initialPre: initialPre,
    mode: questionType.multiple_option === optionType ? 'multiple' : null
  }));
};

var SettingTree = function SettingTree(_ref) {
  var id = _ref.id,
      questionGroupId = _ref.questionGroupId,
      option = _ref.option;
  var namePreffix = "question-" + id;

  var _UIStore$useState = UIStore.useState(function (s) {
    return s;
  }),
      UIText = _UIStore$useState.UIText,
      hostParams = _UIStore$useState.hostParams;

  var settingTreeDropdownValue = hostParams === null || hostParams === void 0 ? void 0 : hostParams.settingTreeDropdownValue;

  var handleChangeTreeDropdown = function handleChangeTreeDropdown(e) {
    questionGroupFn.store.update(function (s) {
      s.questionGroups = s.questionGroups.map(function (qg) {
        if (qg.id === questionGroupId) {
          var questions = qg.questions.map(function (q) {
            if (q.id === id) {
              return _extends({}, q, {
                option: e
              });
            }

            return q;
          });
          return _extends({}, qg, {
            questions: questions
          });
        }

        return qg;
      });
    });
  };

  return /*#__PURE__*/React__default.createElement("div", null, /*#__PURE__*/React__default.createElement("p", {
    className: styles['more-question-setting-text']
  }, UIText.questionMoreTreeSettingText), /*#__PURE__*/React__default.createElement(antd.Form.Item, {
    label: UIText.inputSelectTreeDropdownValueLabel,
    name: namePreffix + "-tree-options",
    initialValue: option
  }, /*#__PURE__*/React__default.createElement(antd.Select, {
    showSearch: true,
    className: styles['select-dropdown'],
    optionFilterProp: "label",
    options: settingTreeDropdownValue,
    getPopupContainer: function getPopupContainer(triggerNode) {
      return triggerNode.parentElement;
    },
    onChange: handleChangeTreeDropdown
  })));
};

var SettingCascade = function SettingCascade(_ref) {
  var id = _ref.id,
      questionGroupId = _ref.questionGroupId,
      _ref$api = _ref.api,
      api = _ref$api === void 0 ? {
    endpoint: null,
    initial: 0,
    list: false
  } : _ref$api;
  var namePreffix = "question-" + id;

  var _UIStore$useState = UIStore.useState(function (s) {
    return s;
  }),
      UIText = _UIStore$useState.UIText,
      hostParams = _UIStore$useState.hostParams;

  var settingCascadeURL = hostParams === null || hostParams === void 0 ? void 0 : hostParams.settingCascadeURL;
  var form = antd.Form.useFormInstance();
  var cascadeURLDropdownValue = React.useMemo(function () {
    return settingCascadeURL.map(function (x) {
      return {
        label: x.name,
        value: x.id
      };
    });
  }, [settingCascadeURL]);

  var updateGlobalState = function updateGlobalState(values) {
    if (values === void 0) {
      values = {};
    }

    questionGroupFn.store.update(function (s) {
      s.questionGroups = s.questionGroups.map(function (qg) {
        if (qg.id === questionGroupId) {
          var questions = qg.questions.map(function (q) {
            if (q.id === id) {
              return _extends({}, q, {
                api: _extends({}, q === null || q === void 0 ? void 0 : q.api, values)
              });
            }

            return q;
          });
          return _extends({}, qg, {
            questions: questions
          });
        }

        return qg;
      });
    });
  };

  var handleChangeEndpoint = function handleChangeEndpoint(e) {
    var findURL = settingCascadeURL.find(function (x) {
      return x.id === e;
    });

    if (findURL) {
      var _form$setFieldsValue;

      form.setFieldsValue((_form$setFieldsValue = {}, _form$setFieldsValue[namePreffix + "-api_initial"] = findURL.initial, _form$setFieldsValue[namePreffix + "-api_list"] = findURL.list, _form$setFieldsValue));
      updateGlobalState({
        endpoint: findURL.endpoint,
        initial: findURL.initial || 0,
        list: findURL.list || false
      });
    }
  };

  var handleChangeInitial = function handleChangeInitial(e) {
    updateGlobalState({
      initial: e
    });
  };

  return /*#__PURE__*/React__default.createElement("div", null, /*#__PURE__*/React__default.createElement("p", {
    className: styles['more-question-setting-text']
  }, UIText.questionMoreCascadeSettingText), /*#__PURE__*/React__default.createElement(antd.Form.Item, {
    label: UIText.inputQuestionEndpointLabel,
    name: namePreffix + "-api_endpoint"
  }, /*#__PURE__*/React__default.createElement(antd.Row, {
    align: "middle",
    gutter: [24, 24]
  }, /*#__PURE__*/React__default.createElement(antd.Col, {
    span: 10
  }, /*#__PURE__*/React__default.createElement(antd.Select, {
    showSearch: true,
    className: styles['select-dropdown'],
    optionFilterProp: "label",
    options: cascadeURLDropdownValue,
    getPopupContainer: function getPopupContainer(triggerNode) {
      return triggerNode.parentElement;
    },
    onChange: handleChangeEndpoint
  })), /*#__PURE__*/React__default.createElement(antd.Col, {
    span: 14
  }, /*#__PURE__*/React__default.createElement(antd.Input, {
    value: api === null || api === void 0 ? void 0 : api.endpoint,
    disabled: true
  })))), /*#__PURE__*/React__default.createElement(antd.Row, {
    align: "bottom",
    gutter: [24, 24]
  }, /*#__PURE__*/React__default.createElement(antd.Col, {
    span: 4
  }, /*#__PURE__*/React__default.createElement(antd.Form.Item, {
    label: UIText.inputQuestionInitialValueLabel,
    initialValue: api === null || api === void 0 ? void 0 : api.initial,
    name: namePreffix + "-api_initial"
  }, /*#__PURE__*/React__default.createElement(antd.InputNumber, {
    style: {
      width: '100%'
    },
    controls: false,
    keyboard: false,
    onChange: handleChangeInitial
  })))));
};

var moment = createCommonjsModule(function (module, exports) {
(function (global, factory) {
     module.exports = factory() ;
}(commonjsGlobal, (function () {
    var hookCallback;

    function hooks() {
        return hookCallback.apply(null, arguments);
    }

    // This is done to register the method called with moment()
    // without creating circular dependencies.
    function setHookCallback(callback) {
        hookCallback = callback;
    }

    function isArray(input) {
        return (
            input instanceof Array ||
            Object.prototype.toString.call(input) === '[object Array]'
        );
    }

    function isObject(input) {
        // IE8 will treat undefined and null as object if it wasn't for
        // input != null
        return (
            input != null &&
            Object.prototype.toString.call(input) === '[object Object]'
        );
    }

    function hasOwnProp(a, b) {
        return Object.prototype.hasOwnProperty.call(a, b);
    }

    function isObjectEmpty(obj) {
        if (Object.getOwnPropertyNames) {
            return Object.getOwnPropertyNames(obj).length === 0;
        } else {
            var k;
            for (k in obj) {
                if (hasOwnProp(obj, k)) {
                    return false;
                }
            }
            return true;
        }
    }

    function isUndefined(input) {
        return input === void 0;
    }

    function isNumber(input) {
        return (
            typeof input === 'number' ||
            Object.prototype.toString.call(input) === '[object Number]'
        );
    }

    function isDate(input) {
        return (
            input instanceof Date ||
            Object.prototype.toString.call(input) === '[object Date]'
        );
    }

    function map(arr, fn) {
        var res = [],
            i,
            arrLen = arr.length;
        for (i = 0; i < arrLen; ++i) {
            res.push(fn(arr[i], i));
        }
        return res;
    }

    function extend(a, b) {
        for (var i in b) {
            if (hasOwnProp(b, i)) {
                a[i] = b[i];
            }
        }

        if (hasOwnProp(b, 'toString')) {
            a.toString = b.toString;
        }

        if (hasOwnProp(b, 'valueOf')) {
            a.valueOf = b.valueOf;
        }

        return a;
    }

    function createUTC(input, format, locale, strict) {
        return createLocalOrUTC(input, format, locale, strict, true).utc();
    }

    function defaultParsingFlags() {
        // We need to deep clone this object.
        return {
            empty: false,
            unusedTokens: [],
            unusedInput: [],
            overflow: -2,
            charsLeftOver: 0,
            nullInput: false,
            invalidEra: null,
            invalidMonth: null,
            invalidFormat: false,
            userInvalidated: false,
            iso: false,
            parsedDateParts: [],
            era: null,
            meridiem: null,
            rfc2822: false,
            weekdayMismatch: false,
        };
    }

    function getParsingFlags(m) {
        if (m._pf == null) {
            m._pf = defaultParsingFlags();
        }
        return m._pf;
    }

    var some;
    if (Array.prototype.some) {
        some = Array.prototype.some;
    } else {
        some = function (fun) {
            var t = Object(this),
                len = t.length >>> 0,
                i;

            for (i = 0; i < len; i++) {
                if (i in t && fun.call(this, t[i], i, t)) {
                    return true;
                }
            }

            return false;
        };
    }

    function isValid(m) {
        if (m._isValid == null) {
            var flags = getParsingFlags(m),
                parsedParts = some.call(flags.parsedDateParts, function (i) {
                    return i != null;
                }),
                isNowValid =
                    !isNaN(m._d.getTime()) &&
                    flags.overflow < 0 &&
                    !flags.empty &&
                    !flags.invalidEra &&
                    !flags.invalidMonth &&
                    !flags.invalidWeekday &&
                    !flags.weekdayMismatch &&
                    !flags.nullInput &&
                    !flags.invalidFormat &&
                    !flags.userInvalidated &&
                    (!flags.meridiem || (flags.meridiem && parsedParts));

            if (m._strict) {
                isNowValid =
                    isNowValid &&
                    flags.charsLeftOver === 0 &&
                    flags.unusedTokens.length === 0 &&
                    flags.bigHour === undefined;
            }

            if (Object.isFrozen == null || !Object.isFrozen(m)) {
                m._isValid = isNowValid;
            } else {
                return isNowValid;
            }
        }
        return m._isValid;
    }

    function createInvalid(flags) {
        var m = createUTC(NaN);
        if (flags != null) {
            extend(getParsingFlags(m), flags);
        } else {
            getParsingFlags(m).userInvalidated = true;
        }

        return m;
    }

    // Plugins that add properties should also add the key here (null value),
    // so we can properly clone ourselves.
    var momentProperties = (hooks.momentProperties = []),
        updateInProgress = false;

    function copyConfig(to, from) {
        var i,
            prop,
            val,
            momentPropertiesLen = momentProperties.length;

        if (!isUndefined(from._isAMomentObject)) {
            to._isAMomentObject = from._isAMomentObject;
        }
        if (!isUndefined(from._i)) {
            to._i = from._i;
        }
        if (!isUndefined(from._f)) {
            to._f = from._f;
        }
        if (!isUndefined(from._l)) {
            to._l = from._l;
        }
        if (!isUndefined(from._strict)) {
            to._strict = from._strict;
        }
        if (!isUndefined(from._tzm)) {
            to._tzm = from._tzm;
        }
        if (!isUndefined(from._isUTC)) {
            to._isUTC = from._isUTC;
        }
        if (!isUndefined(from._offset)) {
            to._offset = from._offset;
        }
        if (!isUndefined(from._pf)) {
            to._pf = getParsingFlags(from);
        }
        if (!isUndefined(from._locale)) {
            to._locale = from._locale;
        }

        if (momentPropertiesLen > 0) {
            for (i = 0; i < momentPropertiesLen; i++) {
                prop = momentProperties[i];
                val = from[prop];
                if (!isUndefined(val)) {
                    to[prop] = val;
                }
            }
        }

        return to;
    }

    // Moment prototype object
    function Moment(config) {
        copyConfig(this, config);
        this._d = new Date(config._d != null ? config._d.getTime() : NaN);
        if (!this.isValid()) {
            this._d = new Date(NaN);
        }
        // Prevent infinite loop in case updateOffset creates new moment
        // objects.
        if (updateInProgress === false) {
            updateInProgress = true;
            hooks.updateOffset(this);
            updateInProgress = false;
        }
    }

    function isMoment(obj) {
        return (
            obj instanceof Moment || (obj != null && obj._isAMomentObject != null)
        );
    }

    function warn(msg) {
        if (
            hooks.suppressDeprecationWarnings === false &&
            typeof console !== 'undefined' &&
            console.warn
        ) {
            console.warn('Deprecation warning: ' + msg);
        }
    }

    function deprecate(msg, fn) {
        var firstTime = true;

        return extend(function () {
            if (hooks.deprecationHandler != null) {
                hooks.deprecationHandler(null, msg);
            }
            if (firstTime) {
                var args = [],
                    arg,
                    i,
                    key,
                    argLen = arguments.length;
                for (i = 0; i < argLen; i++) {
                    arg = '';
                    if (typeof arguments[i] === 'object') {
                        arg += '\n[' + i + '] ';
                        for (key in arguments[0]) {
                            if (hasOwnProp(arguments[0], key)) {
                                arg += key + ': ' + arguments[0][key] + ', ';
                            }
                        }
                        arg = arg.slice(0, -2); // Remove trailing comma and space
                    } else {
                        arg = arguments[i];
                    }
                    args.push(arg);
                }
                warn(
                    msg +
                        '\nArguments: ' +
                        Array.prototype.slice.call(args).join('') +
                        '\n' +
                        new Error().stack
                );
                firstTime = false;
            }
            return fn.apply(this, arguments);
        }, fn);
    }

    var deprecations = {};

    function deprecateSimple(name, msg) {
        if (hooks.deprecationHandler != null) {
            hooks.deprecationHandler(name, msg);
        }
        if (!deprecations[name]) {
            warn(msg);
            deprecations[name] = true;
        }
    }

    hooks.suppressDeprecationWarnings = false;
    hooks.deprecationHandler = null;

    function isFunction(input) {
        return (
            (typeof Function !== 'undefined' && input instanceof Function) ||
            Object.prototype.toString.call(input) === '[object Function]'
        );
    }

    function set(config) {
        var prop, i;
        for (i in config) {
            if (hasOwnProp(config, i)) {
                prop = config[i];
                if (isFunction(prop)) {
                    this[i] = prop;
                } else {
                    this['_' + i] = prop;
                }
            }
        }
        this._config = config;
        // Lenient ordinal parsing accepts just a number in addition to
        // number + (possibly) stuff coming from _dayOfMonthOrdinalParse.
        // TODO: Remove "ordinalParse" fallback in next major release.
        this._dayOfMonthOrdinalParseLenient = new RegExp(
            (this._dayOfMonthOrdinalParse.source || this._ordinalParse.source) +
                '|' +
                /\d{1,2}/.source
        );
    }

    function mergeConfigs(parentConfig, childConfig) {
        var res = extend({}, parentConfig),
            prop;
        for (prop in childConfig) {
            if (hasOwnProp(childConfig, prop)) {
                if (isObject(parentConfig[prop]) && isObject(childConfig[prop])) {
                    res[prop] = {};
                    extend(res[prop], parentConfig[prop]);
                    extend(res[prop], childConfig[prop]);
                } else if (childConfig[prop] != null) {
                    res[prop] = childConfig[prop];
                } else {
                    delete res[prop];
                }
            }
        }
        for (prop in parentConfig) {
            if (
                hasOwnProp(parentConfig, prop) &&
                !hasOwnProp(childConfig, prop) &&
                isObject(parentConfig[prop])
            ) {
                // make sure changes to properties don't modify parent config
                res[prop] = extend({}, res[prop]);
            }
        }
        return res;
    }

    function Locale(config) {
        if (config != null) {
            this.set(config);
        }
    }

    var keys;

    if (Object.keys) {
        keys = Object.keys;
    } else {
        keys = function (obj) {
            var i,
                res = [];
            for (i in obj) {
                if (hasOwnProp(obj, i)) {
                    res.push(i);
                }
            }
            return res;
        };
    }

    var defaultCalendar = {
        sameDay: '[Today at] LT',
        nextDay: '[Tomorrow at] LT',
        nextWeek: 'dddd [at] LT',
        lastDay: '[Yesterday at] LT',
        lastWeek: '[Last] dddd [at] LT',
        sameElse: 'L',
    };

    function calendar(key, mom, now) {
        var output = this._calendar[key] || this._calendar['sameElse'];
        return isFunction(output) ? output.call(mom, now) : output;
    }

    function zeroFill(number, targetLength, forceSign) {
        var absNumber = '' + Math.abs(number),
            zerosToFill = targetLength - absNumber.length,
            sign = number >= 0;
        return (
            (sign ? (forceSign ? '+' : '') : '-') +
            Math.pow(10, Math.max(0, zerosToFill)).toString().substr(1) +
            absNumber
        );
    }

    var formattingTokens =
            /(\[[^\[]*\])|(\\)?([Hh]mm(ss)?|Mo|MM?M?M?|Do|DDDo|DD?D?D?|ddd?d?|do?|w[o|w]?|W[o|W]?|Qo?|N{1,5}|YYYYYY|YYYYY|YYYY|YY|y{2,4}|yo?|gg(ggg?)?|GG(GGG?)?|e|E|a|A|hh?|HH?|kk?|mm?|ss?|S{1,9}|x|X|zz?|ZZ?|.)/g,
        localFormattingTokens = /(\[[^\[]*\])|(\\)?(LTS|LT|LL?L?L?|l{1,4})/g,
        formatFunctions = {},
        formatTokenFunctions = {};

    // token:    'M'
    // padded:   ['MM', 2]
    // ordinal:  'Mo'
    // callback: function () { this.month() + 1 }
    function addFormatToken(token, padded, ordinal, callback) {
        var func = callback;
        if (typeof callback === 'string') {
            func = function () {
                return this[callback]();
            };
        }
        if (token) {
            formatTokenFunctions[token] = func;
        }
        if (padded) {
            formatTokenFunctions[padded[0]] = function () {
                return zeroFill(func.apply(this, arguments), padded[1], padded[2]);
            };
        }
        if (ordinal) {
            formatTokenFunctions[ordinal] = function () {
                return this.localeData().ordinal(
                    func.apply(this, arguments),
                    token
                );
            };
        }
    }

    function removeFormattingTokens(input) {
        if (input.match(/\[[\s\S]/)) {
            return input.replace(/^\[|\]$/g, '');
        }
        return input.replace(/\\/g, '');
    }

    function makeFormatFunction(format) {
        var array = format.match(formattingTokens),
            i,
            length;

        for (i = 0, length = array.length; i < length; i++) {
            if (formatTokenFunctions[array[i]]) {
                array[i] = formatTokenFunctions[array[i]];
            } else {
                array[i] = removeFormattingTokens(array[i]);
            }
        }

        return function (mom) {
            var output = '',
                i;
            for (i = 0; i < length; i++) {
                output += isFunction(array[i])
                    ? array[i].call(mom, format)
                    : array[i];
            }
            return output;
        };
    }

    // format date using native date object
    function formatMoment(m, format) {
        if (!m.isValid()) {
            return m.localeData().invalidDate();
        }

        format = expandFormat(format, m.localeData());
        formatFunctions[format] =
            formatFunctions[format] || makeFormatFunction(format);

        return formatFunctions[format](m);
    }

    function expandFormat(format, locale) {
        var i = 5;

        function replaceLongDateFormatTokens(input) {
            return locale.longDateFormat(input) || input;
        }

        localFormattingTokens.lastIndex = 0;
        while (i >= 0 && localFormattingTokens.test(format)) {
            format = format.replace(
                localFormattingTokens,
                replaceLongDateFormatTokens
            );
            localFormattingTokens.lastIndex = 0;
            i -= 1;
        }

        return format;
    }

    var defaultLongDateFormat = {
        LTS: 'h:mm:ss A',
        LT: 'h:mm A',
        L: 'MM/DD/YYYY',
        LL: 'MMMM D, YYYY',
        LLL: 'MMMM D, YYYY h:mm A',
        LLLL: 'dddd, MMMM D, YYYY h:mm A',
    };

    function longDateFormat(key) {
        var format = this._longDateFormat[key],
            formatUpper = this._longDateFormat[key.toUpperCase()];

        if (format || !formatUpper) {
            return format;
        }

        this._longDateFormat[key] = formatUpper
            .match(formattingTokens)
            .map(function (tok) {
                if (
                    tok === 'MMMM' ||
                    tok === 'MM' ||
                    tok === 'DD' ||
                    tok === 'dddd'
                ) {
                    return tok.slice(1);
                }
                return tok;
            })
            .join('');

        return this._longDateFormat[key];
    }

    var defaultInvalidDate = 'Invalid date';

    function invalidDate() {
        return this._invalidDate;
    }

    var defaultOrdinal = '%d',
        defaultDayOfMonthOrdinalParse = /\d{1,2}/;

    function ordinal(number) {
        return this._ordinal.replace('%d', number);
    }

    var defaultRelativeTime = {
        future: 'in %s',
        past: '%s ago',
        s: 'a few seconds',
        ss: '%d seconds',
        m: 'a minute',
        mm: '%d minutes',
        h: 'an hour',
        hh: '%d hours',
        d: 'a day',
        dd: '%d days',
        w: 'a week',
        ww: '%d weeks',
        M: 'a month',
        MM: '%d months',
        y: 'a year',
        yy: '%d years',
    };

    function relativeTime(number, withoutSuffix, string, isFuture) {
        var output = this._relativeTime[string];
        return isFunction(output)
            ? output(number, withoutSuffix, string, isFuture)
            : output.replace(/%d/i, number);
    }

    function pastFuture(diff, output) {
        var format = this._relativeTime[diff > 0 ? 'future' : 'past'];
        return isFunction(format) ? format(output) : format.replace(/%s/i, output);
    }

    var aliases = {};

    function addUnitAlias(unit, shorthand) {
        var lowerCase = unit.toLowerCase();
        aliases[lowerCase] = aliases[lowerCase + 's'] = aliases[shorthand] = unit;
    }

    function normalizeUnits(units) {
        return typeof units === 'string'
            ? aliases[units] || aliases[units.toLowerCase()]
            : undefined;
    }

    function normalizeObjectUnits(inputObject) {
        var normalizedInput = {},
            normalizedProp,
            prop;

        for (prop in inputObject) {
            if (hasOwnProp(inputObject, prop)) {
                normalizedProp = normalizeUnits(prop);
                if (normalizedProp) {
                    normalizedInput[normalizedProp] = inputObject[prop];
                }
            }
        }

        return normalizedInput;
    }

    var priorities = {};

    function addUnitPriority(unit, priority) {
        priorities[unit] = priority;
    }

    function getPrioritizedUnits(unitsObj) {
        var units = [],
            u;
        for (u in unitsObj) {
            if (hasOwnProp(unitsObj, u)) {
                units.push({ unit: u, priority: priorities[u] });
            }
        }
        units.sort(function (a, b) {
            return a.priority - b.priority;
        });
        return units;
    }

    function isLeapYear(year) {
        return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
    }

    function absFloor(number) {
        if (number < 0) {
            // -0 -> 0
            return Math.ceil(number) || 0;
        } else {
            return Math.floor(number);
        }
    }

    function toInt(argumentForCoercion) {
        var coercedNumber = +argumentForCoercion,
            value = 0;

        if (coercedNumber !== 0 && isFinite(coercedNumber)) {
            value = absFloor(coercedNumber);
        }

        return value;
    }

    function makeGetSet(unit, keepTime) {
        return function (value) {
            if (value != null) {
                set$1(this, unit, value);
                hooks.updateOffset(this, keepTime);
                return this;
            } else {
                return get(this, unit);
            }
        };
    }

    function get(mom, unit) {
        return mom.isValid()
            ? mom._d['get' + (mom._isUTC ? 'UTC' : '') + unit]()
            : NaN;
    }

    function set$1(mom, unit, value) {
        if (mom.isValid() && !isNaN(value)) {
            if (
                unit === 'FullYear' &&
                isLeapYear(mom.year()) &&
                mom.month() === 1 &&
                mom.date() === 29
            ) {
                value = toInt(value);
                mom._d['set' + (mom._isUTC ? 'UTC' : '') + unit](
                    value,
                    mom.month(),
                    daysInMonth(value, mom.month())
                );
            } else {
                mom._d['set' + (mom._isUTC ? 'UTC' : '') + unit](value);
            }
        }
    }

    // MOMENTS

    function stringGet(units) {
        units = normalizeUnits(units);
        if (isFunction(this[units])) {
            return this[units]();
        }
        return this;
    }

    function stringSet(units, value) {
        if (typeof units === 'object') {
            units = normalizeObjectUnits(units);
            var prioritized = getPrioritizedUnits(units),
                i,
                prioritizedLen = prioritized.length;
            for (i = 0; i < prioritizedLen; i++) {
                this[prioritized[i].unit](units[prioritized[i].unit]);
            }
        } else {
            units = normalizeUnits(units);
            if (isFunction(this[units])) {
                return this[units](value);
            }
        }
        return this;
    }

    var match1 = /\d/, //       0 - 9
        match2 = /\d\d/, //      00 - 99
        match3 = /\d{3}/, //     000 - 999
        match4 = /\d{4}/, //    0000 - 9999
        match6 = /[+-]?\d{6}/, // -999999 - 999999
        match1to2 = /\d\d?/, //       0 - 99
        match3to4 = /\d\d\d\d?/, //     999 - 9999
        match5to6 = /\d\d\d\d\d\d?/, //   99999 - 999999
        match1to3 = /\d{1,3}/, //       0 - 999
        match1to4 = /\d{1,4}/, //       0 - 9999
        match1to6 = /[+-]?\d{1,6}/, // -999999 - 999999
        matchUnsigned = /\d+/, //       0 - inf
        matchSigned = /[+-]?\d+/, //    -inf - inf
        matchOffset = /Z|[+-]\d\d:?\d\d/gi, // +00:00 -00:00 +0000 -0000 or Z
        matchShortOffset = /Z|[+-]\d\d(?::?\d\d)?/gi, // +00 -00 +00:00 -00:00 +0000 -0000 or Z
        matchTimestamp = /[+-]?\d+(\.\d{1,3})?/, // 123456789 123456789.123
        // any word (or two) characters or numbers including two/three word month in arabic.
        // includes scottish gaelic two word and hyphenated months
        matchWord =
            /[0-9]{0,256}['a-z\u00A0-\u05FF\u0700-\uD7FF\uF900-\uFDCF\uFDF0-\uFF07\uFF10-\uFFEF]{1,256}|[\u0600-\u06FF\/]{1,256}(\s*?[\u0600-\u06FF]{1,256}){1,2}/i,
        regexes;

    regexes = {};

    function addRegexToken(token, regex, strictRegex) {
        regexes[token] = isFunction(regex)
            ? regex
            : function (isStrict, localeData) {
                  return isStrict && strictRegex ? strictRegex : regex;
              };
    }

    function getParseRegexForToken(token, config) {
        if (!hasOwnProp(regexes, token)) {
            return new RegExp(unescapeFormat(token));
        }

        return regexes[token](config._strict, config._locale);
    }

    // Code from http://stackoverflow.com/questions/3561493/is-there-a-regexp-escape-function-in-javascript
    function unescapeFormat(s) {
        return regexEscape(
            s
                .replace('\\', '')
                .replace(
                    /\\(\[)|\\(\])|\[([^\]\[]*)\]|\\(.)/g,
                    function (matched, p1, p2, p3, p4) {
                        return p1 || p2 || p3 || p4;
                    }
                )
        );
    }

    function regexEscape(s) {
        return s.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&');
    }

    var tokens = {};

    function addParseToken(token, callback) {
        var i,
            func = callback,
            tokenLen;
        if (typeof token === 'string') {
            token = [token];
        }
        if (isNumber(callback)) {
            func = function (input, array) {
                array[callback] = toInt(input);
            };
        }
        tokenLen = token.length;
        for (i = 0; i < tokenLen; i++) {
            tokens[token[i]] = func;
        }
    }

    function addWeekParseToken(token, callback) {
        addParseToken(token, function (input, array, config, token) {
            config._w = config._w || {};
            callback(input, config._w, config, token);
        });
    }

    function addTimeToArrayFromToken(token, input, config) {
        if (input != null && hasOwnProp(tokens, token)) {
            tokens[token](input, config._a, config, token);
        }
    }

    var YEAR = 0,
        MONTH = 1,
        DATE = 2,
        HOUR = 3,
        MINUTE = 4,
        SECOND = 5,
        MILLISECOND = 6,
        WEEK = 7,
        WEEKDAY = 8;

    function mod(n, x) {
        return ((n % x) + x) % x;
    }

    var indexOf;

    if (Array.prototype.indexOf) {
        indexOf = Array.prototype.indexOf;
    } else {
        indexOf = function (o) {
            // I know
            var i;
            for (i = 0; i < this.length; ++i) {
                if (this[i] === o) {
                    return i;
                }
            }
            return -1;
        };
    }

    function daysInMonth(year, month) {
        if (isNaN(year) || isNaN(month)) {
            return NaN;
        }
        var modMonth = mod(month, 12);
        year += (month - modMonth) / 12;
        return modMonth === 1
            ? isLeapYear(year)
                ? 29
                : 28
            : 31 - ((modMonth % 7) % 2);
    }

    // FORMATTING

    addFormatToken('M', ['MM', 2], 'Mo', function () {
        return this.month() + 1;
    });

    addFormatToken('MMM', 0, 0, function (format) {
        return this.localeData().monthsShort(this, format);
    });

    addFormatToken('MMMM', 0, 0, function (format) {
        return this.localeData().months(this, format);
    });

    // ALIASES

    addUnitAlias('month', 'M');

    // PRIORITY

    addUnitPriority('month', 8);

    // PARSING

    addRegexToken('M', match1to2);
    addRegexToken('MM', match1to2, match2);
    addRegexToken('MMM', function (isStrict, locale) {
        return locale.monthsShortRegex(isStrict);
    });
    addRegexToken('MMMM', function (isStrict, locale) {
        return locale.monthsRegex(isStrict);
    });

    addParseToken(['M', 'MM'], function (input, array) {
        array[MONTH] = toInt(input) - 1;
    });

    addParseToken(['MMM', 'MMMM'], function (input, array, config, token) {
        var month = config._locale.monthsParse(input, token, config._strict);
        // if we didn't find a month name, mark the date as invalid.
        if (month != null) {
            array[MONTH] = month;
        } else {
            getParsingFlags(config).invalidMonth = input;
        }
    });

    // LOCALES

    var defaultLocaleMonths =
            'January_February_March_April_May_June_July_August_September_October_November_December'.split(
                '_'
            ),
        defaultLocaleMonthsShort =
            'Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec'.split('_'),
        MONTHS_IN_FORMAT = /D[oD]?(\[[^\[\]]*\]|\s)+MMMM?/,
        defaultMonthsShortRegex = matchWord,
        defaultMonthsRegex = matchWord;

    function localeMonths(m, format) {
        if (!m) {
            return isArray(this._months)
                ? this._months
                : this._months['standalone'];
        }
        return isArray(this._months)
            ? this._months[m.month()]
            : this._months[
                  (this._months.isFormat || MONTHS_IN_FORMAT).test(format)
                      ? 'format'
                      : 'standalone'
              ][m.month()];
    }

    function localeMonthsShort(m, format) {
        if (!m) {
            return isArray(this._monthsShort)
                ? this._monthsShort
                : this._monthsShort['standalone'];
        }
        return isArray(this._monthsShort)
            ? this._monthsShort[m.month()]
            : this._monthsShort[
                  MONTHS_IN_FORMAT.test(format) ? 'format' : 'standalone'
              ][m.month()];
    }

    function handleStrictParse(monthName, format, strict) {
        var i,
            ii,
            mom,
            llc = monthName.toLocaleLowerCase();
        if (!this._monthsParse) {
            // this is not used
            this._monthsParse = [];
            this._longMonthsParse = [];
            this._shortMonthsParse = [];
            for (i = 0; i < 12; ++i) {
                mom = createUTC([2000, i]);
                this._shortMonthsParse[i] = this.monthsShort(
                    mom,
                    ''
                ).toLocaleLowerCase();
                this._longMonthsParse[i] = this.months(mom, '').toLocaleLowerCase();
            }
        }

        if (strict) {
            if (format === 'MMM') {
                ii = indexOf.call(this._shortMonthsParse, llc);
                return ii !== -1 ? ii : null;
            } else {
                ii = indexOf.call(this._longMonthsParse, llc);
                return ii !== -1 ? ii : null;
            }
        } else {
            if (format === 'MMM') {
                ii = indexOf.call(this._shortMonthsParse, llc);
                if (ii !== -1) {
                    return ii;
                }
                ii = indexOf.call(this._longMonthsParse, llc);
                return ii !== -1 ? ii : null;
            } else {
                ii = indexOf.call(this._longMonthsParse, llc);
                if (ii !== -1) {
                    return ii;
                }
                ii = indexOf.call(this._shortMonthsParse, llc);
                return ii !== -1 ? ii : null;
            }
        }
    }

    function localeMonthsParse(monthName, format, strict) {
        var i, mom, regex;

        if (this._monthsParseExact) {
            return handleStrictParse.call(this, monthName, format, strict);
        }

        if (!this._monthsParse) {
            this._monthsParse = [];
            this._longMonthsParse = [];
            this._shortMonthsParse = [];
        }

        // TODO: add sorting
        // Sorting makes sure if one month (or abbr) is a prefix of another
        // see sorting in computeMonthsParse
        for (i = 0; i < 12; i++) {
            // make the regex if we don't have it already
            mom = createUTC([2000, i]);
            if (strict && !this._longMonthsParse[i]) {
                this._longMonthsParse[i] = new RegExp(
                    '^' + this.months(mom, '').replace('.', '') + '$',
                    'i'
                );
                this._shortMonthsParse[i] = new RegExp(
                    '^' + this.monthsShort(mom, '').replace('.', '') + '$',
                    'i'
                );
            }
            if (!strict && !this._monthsParse[i]) {
                regex =
                    '^' + this.months(mom, '') + '|^' + this.monthsShort(mom, '');
                this._monthsParse[i] = new RegExp(regex.replace('.', ''), 'i');
            }
            // test the regex
            if (
                strict &&
                format === 'MMMM' &&
                this._longMonthsParse[i].test(monthName)
            ) {
                return i;
            } else if (
                strict &&
                format === 'MMM' &&
                this._shortMonthsParse[i].test(monthName)
            ) {
                return i;
            } else if (!strict && this._monthsParse[i].test(monthName)) {
                return i;
            }
        }
    }

    // MOMENTS

    function setMonth(mom, value) {
        var dayOfMonth;

        if (!mom.isValid()) {
            // No op
            return mom;
        }

        if (typeof value === 'string') {
            if (/^\d+$/.test(value)) {
                value = toInt(value);
            } else {
                value = mom.localeData().monthsParse(value);
                // TODO: Another silent failure?
                if (!isNumber(value)) {
                    return mom;
                }
            }
        }

        dayOfMonth = Math.min(mom.date(), daysInMonth(mom.year(), value));
        mom._d['set' + (mom._isUTC ? 'UTC' : '') + 'Month'](value, dayOfMonth);
        return mom;
    }

    function getSetMonth(value) {
        if (value != null) {
            setMonth(this, value);
            hooks.updateOffset(this, true);
            return this;
        } else {
            return get(this, 'Month');
        }
    }

    function getDaysInMonth() {
        return daysInMonth(this.year(), this.month());
    }

    function monthsShortRegex(isStrict) {
        if (this._monthsParseExact) {
            if (!hasOwnProp(this, '_monthsRegex')) {
                computeMonthsParse.call(this);
            }
            if (isStrict) {
                return this._monthsShortStrictRegex;
            } else {
                return this._monthsShortRegex;
            }
        } else {
            if (!hasOwnProp(this, '_monthsShortRegex')) {
                this._monthsShortRegex = defaultMonthsShortRegex;
            }
            return this._monthsShortStrictRegex && isStrict
                ? this._monthsShortStrictRegex
                : this._monthsShortRegex;
        }
    }

    function monthsRegex(isStrict) {
        if (this._monthsParseExact) {
            if (!hasOwnProp(this, '_monthsRegex')) {
                computeMonthsParse.call(this);
            }
            if (isStrict) {
                return this._monthsStrictRegex;
            } else {
                return this._monthsRegex;
            }
        } else {
            if (!hasOwnProp(this, '_monthsRegex')) {
                this._monthsRegex = defaultMonthsRegex;
            }
            return this._monthsStrictRegex && isStrict
                ? this._monthsStrictRegex
                : this._monthsRegex;
        }
    }

    function computeMonthsParse() {
        function cmpLenRev(a, b) {
            return b.length - a.length;
        }

        var shortPieces = [],
            longPieces = [],
            mixedPieces = [],
            i,
            mom;
        for (i = 0; i < 12; i++) {
            // make the regex if we don't have it already
            mom = createUTC([2000, i]);
            shortPieces.push(this.monthsShort(mom, ''));
            longPieces.push(this.months(mom, ''));
            mixedPieces.push(this.months(mom, ''));
            mixedPieces.push(this.monthsShort(mom, ''));
        }
        // Sorting makes sure if one month (or abbr) is a prefix of another it
        // will match the longer piece.
        shortPieces.sort(cmpLenRev);
        longPieces.sort(cmpLenRev);
        mixedPieces.sort(cmpLenRev);
        for (i = 0; i < 12; i++) {
            shortPieces[i] = regexEscape(shortPieces[i]);
            longPieces[i] = regexEscape(longPieces[i]);
        }
        for (i = 0; i < 24; i++) {
            mixedPieces[i] = regexEscape(mixedPieces[i]);
        }

        this._monthsRegex = new RegExp('^(' + mixedPieces.join('|') + ')', 'i');
        this._monthsShortRegex = this._monthsRegex;
        this._monthsStrictRegex = new RegExp(
            '^(' + longPieces.join('|') + ')',
            'i'
        );
        this._monthsShortStrictRegex = new RegExp(
            '^(' + shortPieces.join('|') + ')',
            'i'
        );
    }

    // FORMATTING

    addFormatToken('Y', 0, 0, function () {
        var y = this.year();
        return y <= 9999 ? zeroFill(y, 4) : '+' + y;
    });

    addFormatToken(0, ['YY', 2], 0, function () {
        return this.year() % 100;
    });

    addFormatToken(0, ['YYYY', 4], 0, 'year');
    addFormatToken(0, ['YYYYY', 5], 0, 'year');
    addFormatToken(0, ['YYYYYY', 6, true], 0, 'year');

    // ALIASES

    addUnitAlias('year', 'y');

    // PRIORITIES

    addUnitPriority('year', 1);

    // PARSING

    addRegexToken('Y', matchSigned);
    addRegexToken('YY', match1to2, match2);
    addRegexToken('YYYY', match1to4, match4);
    addRegexToken('YYYYY', match1to6, match6);
    addRegexToken('YYYYYY', match1to6, match6);

    addParseToken(['YYYYY', 'YYYYYY'], YEAR);
    addParseToken('YYYY', function (input, array) {
        array[YEAR] =
            input.length === 2 ? hooks.parseTwoDigitYear(input) : toInt(input);
    });
    addParseToken('YY', function (input, array) {
        array[YEAR] = hooks.parseTwoDigitYear(input);
    });
    addParseToken('Y', function (input, array) {
        array[YEAR] = parseInt(input, 10);
    });

    // HELPERS

    function daysInYear(year) {
        return isLeapYear(year) ? 366 : 365;
    }

    // HOOKS

    hooks.parseTwoDigitYear = function (input) {
        return toInt(input) + (toInt(input) > 68 ? 1900 : 2000);
    };

    // MOMENTS

    var getSetYear = makeGetSet('FullYear', true);

    function getIsLeapYear() {
        return isLeapYear(this.year());
    }

    function createDate(y, m, d, h, M, s, ms) {
        // can't just apply() to create a date:
        // https://stackoverflow.com/q/181348
        var date;
        // the date constructor remaps years 0-99 to 1900-1999
        if (y < 100 && y >= 0) {
            // preserve leap years using a full 400 year cycle, then reset
            date = new Date(y + 400, m, d, h, M, s, ms);
            if (isFinite(date.getFullYear())) {
                date.setFullYear(y);
            }
        } else {
            date = new Date(y, m, d, h, M, s, ms);
        }

        return date;
    }

    function createUTCDate(y) {
        var date, args;
        // the Date.UTC function remaps years 0-99 to 1900-1999
        if (y < 100 && y >= 0) {
            args = Array.prototype.slice.call(arguments);
            // preserve leap years using a full 400 year cycle, then reset
            args[0] = y + 400;
            date = new Date(Date.UTC.apply(null, args));
            if (isFinite(date.getUTCFullYear())) {
                date.setUTCFullYear(y);
            }
        } else {
            date = new Date(Date.UTC.apply(null, arguments));
        }

        return date;
    }

    // start-of-first-week - start-of-year
    function firstWeekOffset(year, dow, doy) {
        var // first-week day -- which january is always in the first week (4 for iso, 1 for other)
            fwd = 7 + dow - doy,
            // first-week day local weekday -- which local weekday is fwd
            fwdlw = (7 + createUTCDate(year, 0, fwd).getUTCDay() - dow) % 7;

        return -fwdlw + fwd - 1;
    }

    // https://en.wikipedia.org/wiki/ISO_week_date#Calculating_a_date_given_the_year.2C_week_number_and_weekday
    function dayOfYearFromWeeks(year, week, weekday, dow, doy) {
        var localWeekday = (7 + weekday - dow) % 7,
            weekOffset = firstWeekOffset(year, dow, doy),
            dayOfYear = 1 + 7 * (week - 1) + localWeekday + weekOffset,
            resYear,
            resDayOfYear;

        if (dayOfYear <= 0) {
            resYear = year - 1;
            resDayOfYear = daysInYear(resYear) + dayOfYear;
        } else if (dayOfYear > daysInYear(year)) {
            resYear = year + 1;
            resDayOfYear = dayOfYear - daysInYear(year);
        } else {
            resYear = year;
            resDayOfYear = dayOfYear;
        }

        return {
            year: resYear,
            dayOfYear: resDayOfYear,
        };
    }

    function weekOfYear(mom, dow, doy) {
        var weekOffset = firstWeekOffset(mom.year(), dow, doy),
            week = Math.floor((mom.dayOfYear() - weekOffset - 1) / 7) + 1,
            resWeek,
            resYear;

        if (week < 1) {
            resYear = mom.year() - 1;
            resWeek = week + weeksInYear(resYear, dow, doy);
        } else if (week > weeksInYear(mom.year(), dow, doy)) {
            resWeek = week - weeksInYear(mom.year(), dow, doy);
            resYear = mom.year() + 1;
        } else {
            resYear = mom.year();
            resWeek = week;
        }

        return {
            week: resWeek,
            year: resYear,
        };
    }

    function weeksInYear(year, dow, doy) {
        var weekOffset = firstWeekOffset(year, dow, doy),
            weekOffsetNext = firstWeekOffset(year + 1, dow, doy);
        return (daysInYear(year) - weekOffset + weekOffsetNext) / 7;
    }

    // FORMATTING

    addFormatToken('w', ['ww', 2], 'wo', 'week');
    addFormatToken('W', ['WW', 2], 'Wo', 'isoWeek');

    // ALIASES

    addUnitAlias('week', 'w');
    addUnitAlias('isoWeek', 'W');

    // PRIORITIES

    addUnitPriority('week', 5);
    addUnitPriority('isoWeek', 5);

    // PARSING

    addRegexToken('w', match1to2);
    addRegexToken('ww', match1to2, match2);
    addRegexToken('W', match1to2);
    addRegexToken('WW', match1to2, match2);

    addWeekParseToken(
        ['w', 'ww', 'W', 'WW'],
        function (input, week, config, token) {
            week[token.substr(0, 1)] = toInt(input);
        }
    );

    // HELPERS

    // LOCALES

    function localeWeek(mom) {
        return weekOfYear(mom, this._week.dow, this._week.doy).week;
    }

    var defaultLocaleWeek = {
        dow: 0, // Sunday is the first day of the week.
        doy: 6, // The week that contains Jan 6th is the first week of the year.
    };

    function localeFirstDayOfWeek() {
        return this._week.dow;
    }

    function localeFirstDayOfYear() {
        return this._week.doy;
    }

    // MOMENTS

    function getSetWeek(input) {
        var week = this.localeData().week(this);
        return input == null ? week : this.add((input - week) * 7, 'd');
    }

    function getSetISOWeek(input) {
        var week = weekOfYear(this, 1, 4).week;
        return input == null ? week : this.add((input - week) * 7, 'd');
    }

    // FORMATTING

    addFormatToken('d', 0, 'do', 'day');

    addFormatToken('dd', 0, 0, function (format) {
        return this.localeData().weekdaysMin(this, format);
    });

    addFormatToken('ddd', 0, 0, function (format) {
        return this.localeData().weekdaysShort(this, format);
    });

    addFormatToken('dddd', 0, 0, function (format) {
        return this.localeData().weekdays(this, format);
    });

    addFormatToken('e', 0, 0, 'weekday');
    addFormatToken('E', 0, 0, 'isoWeekday');

    // ALIASES

    addUnitAlias('day', 'd');
    addUnitAlias('weekday', 'e');
    addUnitAlias('isoWeekday', 'E');

    // PRIORITY
    addUnitPriority('day', 11);
    addUnitPriority('weekday', 11);
    addUnitPriority('isoWeekday', 11);

    // PARSING

    addRegexToken('d', match1to2);
    addRegexToken('e', match1to2);
    addRegexToken('E', match1to2);
    addRegexToken('dd', function (isStrict, locale) {
        return locale.weekdaysMinRegex(isStrict);
    });
    addRegexToken('ddd', function (isStrict, locale) {
        return locale.weekdaysShortRegex(isStrict);
    });
    addRegexToken('dddd', function (isStrict, locale) {
        return locale.weekdaysRegex(isStrict);
    });

    addWeekParseToken(['dd', 'ddd', 'dddd'], function (input, week, config, token) {
        var weekday = config._locale.weekdaysParse(input, token, config._strict);
        // if we didn't get a weekday name, mark the date as invalid
        if (weekday != null) {
            week.d = weekday;
        } else {
            getParsingFlags(config).invalidWeekday = input;
        }
    });

    addWeekParseToken(['d', 'e', 'E'], function (input, week, config, token) {
        week[token] = toInt(input);
    });

    // HELPERS

    function parseWeekday(input, locale) {
        if (typeof input !== 'string') {
            return input;
        }

        if (!isNaN(input)) {
            return parseInt(input, 10);
        }

        input = locale.weekdaysParse(input);
        if (typeof input === 'number') {
            return input;
        }

        return null;
    }

    function parseIsoWeekday(input, locale) {
        if (typeof input === 'string') {
            return locale.weekdaysParse(input) % 7 || 7;
        }
        return isNaN(input) ? null : input;
    }

    // LOCALES
    function shiftWeekdays(ws, n) {
        return ws.slice(n, 7).concat(ws.slice(0, n));
    }

    var defaultLocaleWeekdays =
            'Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday'.split('_'),
        defaultLocaleWeekdaysShort = 'Sun_Mon_Tue_Wed_Thu_Fri_Sat'.split('_'),
        defaultLocaleWeekdaysMin = 'Su_Mo_Tu_We_Th_Fr_Sa'.split('_'),
        defaultWeekdaysRegex = matchWord,
        defaultWeekdaysShortRegex = matchWord,
        defaultWeekdaysMinRegex = matchWord;

    function localeWeekdays(m, format) {
        var weekdays = isArray(this._weekdays)
            ? this._weekdays
            : this._weekdays[
                  m && m !== true && this._weekdays.isFormat.test(format)
                      ? 'format'
                      : 'standalone'
              ];
        return m === true
            ? shiftWeekdays(weekdays, this._week.dow)
            : m
            ? weekdays[m.day()]
            : weekdays;
    }

    function localeWeekdaysShort(m) {
        return m === true
            ? shiftWeekdays(this._weekdaysShort, this._week.dow)
            : m
            ? this._weekdaysShort[m.day()]
            : this._weekdaysShort;
    }

    function localeWeekdaysMin(m) {
        return m === true
            ? shiftWeekdays(this._weekdaysMin, this._week.dow)
            : m
            ? this._weekdaysMin[m.day()]
            : this._weekdaysMin;
    }

    function handleStrictParse$1(weekdayName, format, strict) {
        var i,
            ii,
            mom,
            llc = weekdayName.toLocaleLowerCase();
        if (!this._weekdaysParse) {
            this._weekdaysParse = [];
            this._shortWeekdaysParse = [];
            this._minWeekdaysParse = [];

            for (i = 0; i < 7; ++i) {
                mom = createUTC([2000, 1]).day(i);
                this._minWeekdaysParse[i] = this.weekdaysMin(
                    mom,
                    ''
                ).toLocaleLowerCase();
                this._shortWeekdaysParse[i] = this.weekdaysShort(
                    mom,
                    ''
                ).toLocaleLowerCase();
                this._weekdaysParse[i] = this.weekdays(mom, '').toLocaleLowerCase();
            }
        }

        if (strict) {
            if (format === 'dddd') {
                ii = indexOf.call(this._weekdaysParse, llc);
                return ii !== -1 ? ii : null;
            } else if (format === 'ddd') {
                ii = indexOf.call(this._shortWeekdaysParse, llc);
                return ii !== -1 ? ii : null;
            } else {
                ii = indexOf.call(this._minWeekdaysParse, llc);
                return ii !== -1 ? ii : null;
            }
        } else {
            if (format === 'dddd') {
                ii = indexOf.call(this._weekdaysParse, llc);
                if (ii !== -1) {
                    return ii;
                }
                ii = indexOf.call(this._shortWeekdaysParse, llc);
                if (ii !== -1) {
                    return ii;
                }
                ii = indexOf.call(this._minWeekdaysParse, llc);
                return ii !== -1 ? ii : null;
            } else if (format === 'ddd') {
                ii = indexOf.call(this._shortWeekdaysParse, llc);
                if (ii !== -1) {
                    return ii;
                }
                ii = indexOf.call(this._weekdaysParse, llc);
                if (ii !== -1) {
                    return ii;
                }
                ii = indexOf.call(this._minWeekdaysParse, llc);
                return ii !== -1 ? ii : null;
            } else {
                ii = indexOf.call(this._minWeekdaysParse, llc);
                if (ii !== -1) {
                    return ii;
                }
                ii = indexOf.call(this._weekdaysParse, llc);
                if (ii !== -1) {
                    return ii;
                }
                ii = indexOf.call(this._shortWeekdaysParse, llc);
                return ii !== -1 ? ii : null;
            }
        }
    }

    function localeWeekdaysParse(weekdayName, format, strict) {
        var i, mom, regex;

        if (this._weekdaysParseExact) {
            return handleStrictParse$1.call(this, weekdayName, format, strict);
        }

        if (!this._weekdaysParse) {
            this._weekdaysParse = [];
            this._minWeekdaysParse = [];
            this._shortWeekdaysParse = [];
            this._fullWeekdaysParse = [];
        }

        for (i = 0; i < 7; i++) {
            // make the regex if we don't have it already

            mom = createUTC([2000, 1]).day(i);
            if (strict && !this._fullWeekdaysParse[i]) {
                this._fullWeekdaysParse[i] = new RegExp(
                    '^' + this.weekdays(mom, '').replace('.', '\\.?') + '$',
                    'i'
                );
                this._shortWeekdaysParse[i] = new RegExp(
                    '^' + this.weekdaysShort(mom, '').replace('.', '\\.?') + '$',
                    'i'
                );
                this._minWeekdaysParse[i] = new RegExp(
                    '^' + this.weekdaysMin(mom, '').replace('.', '\\.?') + '$',
                    'i'
                );
            }
            if (!this._weekdaysParse[i]) {
                regex =
                    '^' +
                    this.weekdays(mom, '') +
                    '|^' +
                    this.weekdaysShort(mom, '') +
                    '|^' +
                    this.weekdaysMin(mom, '');
                this._weekdaysParse[i] = new RegExp(regex.replace('.', ''), 'i');
            }
            // test the regex
            if (
                strict &&
                format === 'dddd' &&
                this._fullWeekdaysParse[i].test(weekdayName)
            ) {
                return i;
            } else if (
                strict &&
                format === 'ddd' &&
                this._shortWeekdaysParse[i].test(weekdayName)
            ) {
                return i;
            } else if (
                strict &&
                format === 'dd' &&
                this._minWeekdaysParse[i].test(weekdayName)
            ) {
                return i;
            } else if (!strict && this._weekdaysParse[i].test(weekdayName)) {
                return i;
            }
        }
    }

    // MOMENTS

    function getSetDayOfWeek(input) {
        if (!this.isValid()) {
            return input != null ? this : NaN;
        }
        var day = this._isUTC ? this._d.getUTCDay() : this._d.getDay();
        if (input != null) {
            input = parseWeekday(input, this.localeData());
            return this.add(input - day, 'd');
        } else {
            return day;
        }
    }

    function getSetLocaleDayOfWeek(input) {
        if (!this.isValid()) {
            return input != null ? this : NaN;
        }
        var weekday = (this.day() + 7 - this.localeData()._week.dow) % 7;
        return input == null ? weekday : this.add(input - weekday, 'd');
    }

    function getSetISODayOfWeek(input) {
        if (!this.isValid()) {
            return input != null ? this : NaN;
        }

        // behaves the same as moment#day except
        // as a getter, returns 7 instead of 0 (1-7 range instead of 0-6)
        // as a setter, sunday should belong to the previous week.

        if (input != null) {
            var weekday = parseIsoWeekday(input, this.localeData());
            return this.day(this.day() % 7 ? weekday : weekday - 7);
        } else {
            return this.day() || 7;
        }
    }

    function weekdaysRegex(isStrict) {
        if (this._weekdaysParseExact) {
            if (!hasOwnProp(this, '_weekdaysRegex')) {
                computeWeekdaysParse.call(this);
            }
            if (isStrict) {
                return this._weekdaysStrictRegex;
            } else {
                return this._weekdaysRegex;
            }
        } else {
            if (!hasOwnProp(this, '_weekdaysRegex')) {
                this._weekdaysRegex = defaultWeekdaysRegex;
            }
            return this._weekdaysStrictRegex && isStrict
                ? this._weekdaysStrictRegex
                : this._weekdaysRegex;
        }
    }

    function weekdaysShortRegex(isStrict) {
        if (this._weekdaysParseExact) {
            if (!hasOwnProp(this, '_weekdaysRegex')) {
                computeWeekdaysParse.call(this);
            }
            if (isStrict) {
                return this._weekdaysShortStrictRegex;
            } else {
                return this._weekdaysShortRegex;
            }
        } else {
            if (!hasOwnProp(this, '_weekdaysShortRegex')) {
                this._weekdaysShortRegex = defaultWeekdaysShortRegex;
            }
            return this._weekdaysShortStrictRegex && isStrict
                ? this._weekdaysShortStrictRegex
                : this._weekdaysShortRegex;
        }
    }

    function weekdaysMinRegex(isStrict) {
        if (this._weekdaysParseExact) {
            if (!hasOwnProp(this, '_weekdaysRegex')) {
                computeWeekdaysParse.call(this);
            }
            if (isStrict) {
                return this._weekdaysMinStrictRegex;
            } else {
                return this._weekdaysMinRegex;
            }
        } else {
            if (!hasOwnProp(this, '_weekdaysMinRegex')) {
                this._weekdaysMinRegex = defaultWeekdaysMinRegex;
            }
            return this._weekdaysMinStrictRegex && isStrict
                ? this._weekdaysMinStrictRegex
                : this._weekdaysMinRegex;
        }
    }

    function computeWeekdaysParse() {
        function cmpLenRev(a, b) {
            return b.length - a.length;
        }

        var minPieces = [],
            shortPieces = [],
            longPieces = [],
            mixedPieces = [],
            i,
            mom,
            minp,
            shortp,
            longp;
        for (i = 0; i < 7; i++) {
            // make the regex if we don't have it already
            mom = createUTC([2000, 1]).day(i);
            minp = regexEscape(this.weekdaysMin(mom, ''));
            shortp = regexEscape(this.weekdaysShort(mom, ''));
            longp = regexEscape(this.weekdays(mom, ''));
            minPieces.push(minp);
            shortPieces.push(shortp);
            longPieces.push(longp);
            mixedPieces.push(minp);
            mixedPieces.push(shortp);
            mixedPieces.push(longp);
        }
        // Sorting makes sure if one weekday (or abbr) is a prefix of another it
        // will match the longer piece.
        minPieces.sort(cmpLenRev);
        shortPieces.sort(cmpLenRev);
        longPieces.sort(cmpLenRev);
        mixedPieces.sort(cmpLenRev);

        this._weekdaysRegex = new RegExp('^(' + mixedPieces.join('|') + ')', 'i');
        this._weekdaysShortRegex = this._weekdaysRegex;
        this._weekdaysMinRegex = this._weekdaysRegex;

        this._weekdaysStrictRegex = new RegExp(
            '^(' + longPieces.join('|') + ')',
            'i'
        );
        this._weekdaysShortStrictRegex = new RegExp(
            '^(' + shortPieces.join('|') + ')',
            'i'
        );
        this._weekdaysMinStrictRegex = new RegExp(
            '^(' + minPieces.join('|') + ')',
            'i'
        );
    }

    // FORMATTING

    function hFormat() {
        return this.hours() % 12 || 12;
    }

    function kFormat() {
        return this.hours() || 24;
    }

    addFormatToken('H', ['HH', 2], 0, 'hour');
    addFormatToken('h', ['hh', 2], 0, hFormat);
    addFormatToken('k', ['kk', 2], 0, kFormat);

    addFormatToken('hmm', 0, 0, function () {
        return '' + hFormat.apply(this) + zeroFill(this.minutes(), 2);
    });

    addFormatToken('hmmss', 0, 0, function () {
        return (
            '' +
            hFormat.apply(this) +
            zeroFill(this.minutes(), 2) +
            zeroFill(this.seconds(), 2)
        );
    });

    addFormatToken('Hmm', 0, 0, function () {
        return '' + this.hours() + zeroFill(this.minutes(), 2);
    });

    addFormatToken('Hmmss', 0, 0, function () {
        return (
            '' +
            this.hours() +
            zeroFill(this.minutes(), 2) +
            zeroFill(this.seconds(), 2)
        );
    });

    function meridiem(token, lowercase) {
        addFormatToken(token, 0, 0, function () {
            return this.localeData().meridiem(
                this.hours(),
                this.minutes(),
                lowercase
            );
        });
    }

    meridiem('a', true);
    meridiem('A', false);

    // ALIASES

    addUnitAlias('hour', 'h');

    // PRIORITY
    addUnitPriority('hour', 13);

    // PARSING

    function matchMeridiem(isStrict, locale) {
        return locale._meridiemParse;
    }

    addRegexToken('a', matchMeridiem);
    addRegexToken('A', matchMeridiem);
    addRegexToken('H', match1to2);
    addRegexToken('h', match1to2);
    addRegexToken('k', match1to2);
    addRegexToken('HH', match1to2, match2);
    addRegexToken('hh', match1to2, match2);
    addRegexToken('kk', match1to2, match2);

    addRegexToken('hmm', match3to4);
    addRegexToken('hmmss', match5to6);
    addRegexToken('Hmm', match3to4);
    addRegexToken('Hmmss', match5to6);

    addParseToken(['H', 'HH'], HOUR);
    addParseToken(['k', 'kk'], function (input, array, config) {
        var kInput = toInt(input);
        array[HOUR] = kInput === 24 ? 0 : kInput;
    });
    addParseToken(['a', 'A'], function (input, array, config) {
        config._isPm = config._locale.isPM(input);
        config._meridiem = input;
    });
    addParseToken(['h', 'hh'], function (input, array, config) {
        array[HOUR] = toInt(input);
        getParsingFlags(config).bigHour = true;
    });
    addParseToken('hmm', function (input, array, config) {
        var pos = input.length - 2;
        array[HOUR] = toInt(input.substr(0, pos));
        array[MINUTE] = toInt(input.substr(pos));
        getParsingFlags(config).bigHour = true;
    });
    addParseToken('hmmss', function (input, array, config) {
        var pos1 = input.length - 4,
            pos2 = input.length - 2;
        array[HOUR] = toInt(input.substr(0, pos1));
        array[MINUTE] = toInt(input.substr(pos1, 2));
        array[SECOND] = toInt(input.substr(pos2));
        getParsingFlags(config).bigHour = true;
    });
    addParseToken('Hmm', function (input, array, config) {
        var pos = input.length - 2;
        array[HOUR] = toInt(input.substr(0, pos));
        array[MINUTE] = toInt(input.substr(pos));
    });
    addParseToken('Hmmss', function (input, array, config) {
        var pos1 = input.length - 4,
            pos2 = input.length - 2;
        array[HOUR] = toInt(input.substr(0, pos1));
        array[MINUTE] = toInt(input.substr(pos1, 2));
        array[SECOND] = toInt(input.substr(pos2));
    });

    // LOCALES

    function localeIsPM(input) {
        // IE8 Quirks Mode & IE7 Standards Mode do not allow accessing strings like arrays
        // Using charAt should be more compatible.
        return (input + '').toLowerCase().charAt(0) === 'p';
    }

    var defaultLocaleMeridiemParse = /[ap]\.?m?\.?/i,
        // Setting the hour should keep the time, because the user explicitly
        // specified which hour they want. So trying to maintain the same hour (in
        // a new timezone) makes sense. Adding/subtracting hours does not follow
        // this rule.
        getSetHour = makeGetSet('Hours', true);

    function localeMeridiem(hours, minutes, isLower) {
        if (hours > 11) {
            return isLower ? 'pm' : 'PM';
        } else {
            return isLower ? 'am' : 'AM';
        }
    }

    var baseConfig = {
        calendar: defaultCalendar,
        longDateFormat: defaultLongDateFormat,
        invalidDate: defaultInvalidDate,
        ordinal: defaultOrdinal,
        dayOfMonthOrdinalParse: defaultDayOfMonthOrdinalParse,
        relativeTime: defaultRelativeTime,

        months: defaultLocaleMonths,
        monthsShort: defaultLocaleMonthsShort,

        week: defaultLocaleWeek,

        weekdays: defaultLocaleWeekdays,
        weekdaysMin: defaultLocaleWeekdaysMin,
        weekdaysShort: defaultLocaleWeekdaysShort,

        meridiemParse: defaultLocaleMeridiemParse,
    };

    // internal storage for locale config files
    var locales = {},
        localeFamilies = {},
        globalLocale;

    function commonPrefix(arr1, arr2) {
        var i,
            minl = Math.min(arr1.length, arr2.length);
        for (i = 0; i < minl; i += 1) {
            if (arr1[i] !== arr2[i]) {
                return i;
            }
        }
        return minl;
    }

    function normalizeLocale(key) {
        return key ? key.toLowerCase().replace('_', '-') : key;
    }

    // pick the locale from the array
    // try ['en-au', 'en-gb'] as 'en-au', 'en-gb', 'en', as in move through the list trying each
    // substring from most specific to least, but move to the next array item if it's a more specific variant than the current root
    function chooseLocale(names) {
        var i = 0,
            j,
            next,
            locale,
            split;

        while (i < names.length) {
            split = normalizeLocale(names[i]).split('-');
            j = split.length;
            next = normalizeLocale(names[i + 1]);
            next = next ? next.split('-') : null;
            while (j > 0) {
                locale = loadLocale(split.slice(0, j).join('-'));
                if (locale) {
                    return locale;
                }
                if (
                    next &&
                    next.length >= j &&
                    commonPrefix(split, next) >= j - 1
                ) {
                    //the next array item is better than a shallower substring of this one
                    break;
                }
                j--;
            }
            i++;
        }
        return globalLocale;
    }

    function isLocaleNameSane(name) {
        // Prevent names that look like filesystem paths, i.e contain '/' or '\'
        return name.match('^[^/\\\\]*$') != null;
    }

    function loadLocale(name) {
        var oldLocale = null,
            aliasedRequire;
        // TODO: Find a better way to register and load all the locales in Node
        if (
            locales[name] === undefined &&
            'object' !== 'undefined' &&
            module &&
            module.exports &&
            isLocaleNameSane(name)
        ) {
            try {
                oldLocale = globalLocale._abbr;
                aliasedRequire = commonjsRequire;
                aliasedRequire('./locale/' + name);
                getSetGlobalLocale(oldLocale);
            } catch (e) {
                // mark as not found to avoid repeating expensive file require call causing high CPU
                // when trying to find en-US, en_US, en-us for every format call
                locales[name] = null; // null means not found
            }
        }
        return locales[name];
    }

    // This function will load locale and then set the global locale.  If
    // no arguments are passed in, it will simply return the current global
    // locale key.
    function getSetGlobalLocale(key, values) {
        var data;
        if (key) {
            if (isUndefined(values)) {
                data = getLocale(key);
            } else {
                data = defineLocale(key, values);
            }

            if (data) {
                // moment.duration._locale = moment._locale = data;
                globalLocale = data;
            } else {
                if (typeof console !== 'undefined' && console.warn) {
                    //warn user if arguments are passed but the locale could not be set
                    console.warn(
                        'Locale ' + key + ' not found. Did you forget to load it?'
                    );
                }
            }
        }

        return globalLocale._abbr;
    }

    function defineLocale(name, config) {
        if (config !== null) {
            var locale,
                parentConfig = baseConfig;
            config.abbr = name;
            if (locales[name] != null) {
                deprecateSimple(
                    'defineLocaleOverride',
                    'use moment.updateLocale(localeName, config) to change ' +
                        'an existing locale. moment.defineLocale(localeName, ' +
                        'config) should only be used for creating a new locale ' +
                        'See http://momentjs.com/guides/#/warnings/define-locale/ for more info.'
                );
                parentConfig = locales[name]._config;
            } else if (config.parentLocale != null) {
                if (locales[config.parentLocale] != null) {
                    parentConfig = locales[config.parentLocale]._config;
                } else {
                    locale = loadLocale(config.parentLocale);
                    if (locale != null) {
                        parentConfig = locale._config;
                    } else {
                        if (!localeFamilies[config.parentLocale]) {
                            localeFamilies[config.parentLocale] = [];
                        }
                        localeFamilies[config.parentLocale].push({
                            name: name,
                            config: config,
                        });
                        return null;
                    }
                }
            }
            locales[name] = new Locale(mergeConfigs(parentConfig, config));

            if (localeFamilies[name]) {
                localeFamilies[name].forEach(function (x) {
                    defineLocale(x.name, x.config);
                });
            }

            // backwards compat for now: also set the locale
            // make sure we set the locale AFTER all child locales have been
            // created, so we won't end up with the child locale set.
            getSetGlobalLocale(name);

            return locales[name];
        } else {
            // useful for testing
            delete locales[name];
            return null;
        }
    }

    function updateLocale(name, config) {
        if (config != null) {
            var locale,
                tmpLocale,
                parentConfig = baseConfig;

            if (locales[name] != null && locales[name].parentLocale != null) {
                // Update existing child locale in-place to avoid memory-leaks
                locales[name].set(mergeConfigs(locales[name]._config, config));
            } else {
                // MERGE
                tmpLocale = loadLocale(name);
                if (tmpLocale != null) {
                    parentConfig = tmpLocale._config;
                }
                config = mergeConfigs(parentConfig, config);
                if (tmpLocale == null) {
                    // updateLocale is called for creating a new locale
                    // Set abbr so it will have a name (getters return
                    // undefined otherwise).
                    config.abbr = name;
                }
                locale = new Locale(config);
                locale.parentLocale = locales[name];
                locales[name] = locale;
            }

            // backwards compat for now: also set the locale
            getSetGlobalLocale(name);
        } else {
            // pass null for config to unupdate, useful for tests
            if (locales[name] != null) {
                if (locales[name].parentLocale != null) {
                    locales[name] = locales[name].parentLocale;
                    if (name === getSetGlobalLocale()) {
                        getSetGlobalLocale(name);
                    }
                } else if (locales[name] != null) {
                    delete locales[name];
                }
            }
        }
        return locales[name];
    }

    // returns locale data
    function getLocale(key) {
        var locale;

        if (key && key._locale && key._locale._abbr) {
            key = key._locale._abbr;
        }

        if (!key) {
            return globalLocale;
        }

        if (!isArray(key)) {
            //short-circuit everything else
            locale = loadLocale(key);
            if (locale) {
                return locale;
            }
            key = [key];
        }

        return chooseLocale(key);
    }

    function listLocales() {
        return keys(locales);
    }

    function checkOverflow(m) {
        var overflow,
            a = m._a;

        if (a && getParsingFlags(m).overflow === -2) {
            overflow =
                a[MONTH] < 0 || a[MONTH] > 11
                    ? MONTH
                    : a[DATE] < 1 || a[DATE] > daysInMonth(a[YEAR], a[MONTH])
                    ? DATE
                    : a[HOUR] < 0 ||
                      a[HOUR] > 24 ||
                      (a[HOUR] === 24 &&
                          (a[MINUTE] !== 0 ||
                              a[SECOND] !== 0 ||
                              a[MILLISECOND] !== 0))
                    ? HOUR
                    : a[MINUTE] < 0 || a[MINUTE] > 59
                    ? MINUTE
                    : a[SECOND] < 0 || a[SECOND] > 59
                    ? SECOND
                    : a[MILLISECOND] < 0 || a[MILLISECOND] > 999
                    ? MILLISECOND
                    : -1;

            if (
                getParsingFlags(m)._overflowDayOfYear &&
                (overflow < YEAR || overflow > DATE)
            ) {
                overflow = DATE;
            }
            if (getParsingFlags(m)._overflowWeeks && overflow === -1) {
                overflow = WEEK;
            }
            if (getParsingFlags(m)._overflowWeekday && overflow === -1) {
                overflow = WEEKDAY;
            }

            getParsingFlags(m).overflow = overflow;
        }

        return m;
    }

    // iso 8601 regex
    // 0000-00-00 0000-W00 or 0000-W00-0 + T + 00 or 00:00 or 00:00:00 or 00:00:00.000 + +00:00 or +0000 or +00)
    var extendedIsoRegex =
            /^\s*((?:[+-]\d{6}|\d{4})-(?:\d\d-\d\d|W\d\d-\d|W\d\d|\d\d\d|\d\d))(?:(T| )(\d\d(?::\d\d(?::\d\d(?:[.,]\d+)?)?)?)([+-]\d\d(?::?\d\d)?|\s*Z)?)?$/,
        basicIsoRegex =
            /^\s*((?:[+-]\d{6}|\d{4})(?:\d\d\d\d|W\d\d\d|W\d\d|\d\d\d|\d\d|))(?:(T| )(\d\d(?:\d\d(?:\d\d(?:[.,]\d+)?)?)?)([+-]\d\d(?::?\d\d)?|\s*Z)?)?$/,
        tzRegex = /Z|[+-]\d\d(?::?\d\d)?/,
        isoDates = [
            ['YYYYYY-MM-DD', /[+-]\d{6}-\d\d-\d\d/],
            ['YYYY-MM-DD', /\d{4}-\d\d-\d\d/],
            ['GGGG-[W]WW-E', /\d{4}-W\d\d-\d/],
            ['GGGG-[W]WW', /\d{4}-W\d\d/, false],
            ['YYYY-DDD', /\d{4}-\d{3}/],
            ['YYYY-MM', /\d{4}-\d\d/, false],
            ['YYYYYYMMDD', /[+-]\d{10}/],
            ['YYYYMMDD', /\d{8}/],
            ['GGGG[W]WWE', /\d{4}W\d{3}/],
            ['GGGG[W]WW', /\d{4}W\d{2}/, false],
            ['YYYYDDD', /\d{7}/],
            ['YYYYMM', /\d{6}/, false],
            ['YYYY', /\d{4}/, false],
        ],
        // iso time formats and regexes
        isoTimes = [
            ['HH:mm:ss.SSSS', /\d\d:\d\d:\d\d\.\d+/],
            ['HH:mm:ss,SSSS', /\d\d:\d\d:\d\d,\d+/],
            ['HH:mm:ss', /\d\d:\d\d:\d\d/],
            ['HH:mm', /\d\d:\d\d/],
            ['HHmmss.SSSS', /\d\d\d\d\d\d\.\d+/],
            ['HHmmss,SSSS', /\d\d\d\d\d\d,\d+/],
            ['HHmmss', /\d\d\d\d\d\d/],
            ['HHmm', /\d\d\d\d/],
            ['HH', /\d\d/],
        ],
        aspNetJsonRegex = /^\/?Date\((-?\d+)/i,
        // RFC 2822 regex: For details see https://tools.ietf.org/html/rfc2822#section-3.3
        rfc2822 =
            /^(?:(Mon|Tue|Wed|Thu|Fri|Sat|Sun),?\s)?(\d{1,2})\s(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)\s(\d{2,4})\s(\d\d):(\d\d)(?::(\d\d))?\s(?:(UT|GMT|[ECMP][SD]T)|([Zz])|([+-]\d{4}))$/,
        obsOffsets = {
            UT: 0,
            GMT: 0,
            EDT: -4 * 60,
            EST: -5 * 60,
            CDT: -5 * 60,
            CST: -6 * 60,
            MDT: -6 * 60,
            MST: -7 * 60,
            PDT: -7 * 60,
            PST: -8 * 60,
        };

    // date from iso format
    function configFromISO(config) {
        var i,
            l,
            string = config._i,
            match = extendedIsoRegex.exec(string) || basicIsoRegex.exec(string),
            allowTime,
            dateFormat,
            timeFormat,
            tzFormat,
            isoDatesLen = isoDates.length,
            isoTimesLen = isoTimes.length;

        if (match) {
            getParsingFlags(config).iso = true;
            for (i = 0, l = isoDatesLen; i < l; i++) {
                if (isoDates[i][1].exec(match[1])) {
                    dateFormat = isoDates[i][0];
                    allowTime = isoDates[i][2] !== false;
                    break;
                }
            }
            if (dateFormat == null) {
                config._isValid = false;
                return;
            }
            if (match[3]) {
                for (i = 0, l = isoTimesLen; i < l; i++) {
                    if (isoTimes[i][1].exec(match[3])) {
                        // match[2] should be 'T' or space
                        timeFormat = (match[2] || ' ') + isoTimes[i][0];
                        break;
                    }
                }
                if (timeFormat == null) {
                    config._isValid = false;
                    return;
                }
            }
            if (!allowTime && timeFormat != null) {
                config._isValid = false;
                return;
            }
            if (match[4]) {
                if (tzRegex.exec(match[4])) {
                    tzFormat = 'Z';
                } else {
                    config._isValid = false;
                    return;
                }
            }
            config._f = dateFormat + (timeFormat || '') + (tzFormat || '');
            configFromStringAndFormat(config);
        } else {
            config._isValid = false;
        }
    }

    function extractFromRFC2822Strings(
        yearStr,
        monthStr,
        dayStr,
        hourStr,
        minuteStr,
        secondStr
    ) {
        var result = [
            untruncateYear(yearStr),
            defaultLocaleMonthsShort.indexOf(monthStr),
            parseInt(dayStr, 10),
            parseInt(hourStr, 10),
            parseInt(minuteStr, 10),
        ];

        if (secondStr) {
            result.push(parseInt(secondStr, 10));
        }

        return result;
    }

    function untruncateYear(yearStr) {
        var year = parseInt(yearStr, 10);
        if (year <= 49) {
            return 2000 + year;
        } else if (year <= 999) {
            return 1900 + year;
        }
        return year;
    }

    function preprocessRFC2822(s) {
        // Remove comments and folding whitespace and replace multiple-spaces with a single space
        return s
            .replace(/\([^()]*\)|[\n\t]/g, ' ')
            .replace(/(\s\s+)/g, ' ')
            .replace(/^\s\s*/, '')
            .replace(/\s\s*$/, '');
    }

    function checkWeekday(weekdayStr, parsedInput, config) {
        if (weekdayStr) {
            // TODO: Replace the vanilla JS Date object with an independent day-of-week check.
            var weekdayProvided = defaultLocaleWeekdaysShort.indexOf(weekdayStr),
                weekdayActual = new Date(
                    parsedInput[0],
                    parsedInput[1],
                    parsedInput[2]
                ).getDay();
            if (weekdayProvided !== weekdayActual) {
                getParsingFlags(config).weekdayMismatch = true;
                config._isValid = false;
                return false;
            }
        }
        return true;
    }

    function calculateOffset(obsOffset, militaryOffset, numOffset) {
        if (obsOffset) {
            return obsOffsets[obsOffset];
        } else if (militaryOffset) {
            // the only allowed military tz is Z
            return 0;
        } else {
            var hm = parseInt(numOffset, 10),
                m = hm % 100,
                h = (hm - m) / 100;
            return h * 60 + m;
        }
    }

    // date and time from ref 2822 format
    function configFromRFC2822(config) {
        var match = rfc2822.exec(preprocessRFC2822(config._i)),
            parsedArray;
        if (match) {
            parsedArray = extractFromRFC2822Strings(
                match[4],
                match[3],
                match[2],
                match[5],
                match[6],
                match[7]
            );
            if (!checkWeekday(match[1], parsedArray, config)) {
                return;
            }

            config._a = parsedArray;
            config._tzm = calculateOffset(match[8], match[9], match[10]);

            config._d = createUTCDate.apply(null, config._a);
            config._d.setUTCMinutes(config._d.getUTCMinutes() - config._tzm);

            getParsingFlags(config).rfc2822 = true;
        } else {
            config._isValid = false;
        }
    }

    // date from 1) ASP.NET, 2) ISO, 3) RFC 2822 formats, or 4) optional fallback if parsing isn't strict
    function configFromString(config) {
        var matched = aspNetJsonRegex.exec(config._i);
        if (matched !== null) {
            config._d = new Date(+matched[1]);
            return;
        }

        configFromISO(config);
        if (config._isValid === false) {
            delete config._isValid;
        } else {
            return;
        }

        configFromRFC2822(config);
        if (config._isValid === false) {
            delete config._isValid;
        } else {
            return;
        }

        if (config._strict) {
            config._isValid = false;
        } else {
            // Final attempt, use Input Fallback
            hooks.createFromInputFallback(config);
        }
    }

    hooks.createFromInputFallback = deprecate(
        'value provided is not in a recognized RFC2822 or ISO format. moment construction falls back to js Date(), ' +
            'which is not reliable across all browsers and versions. Non RFC2822/ISO date formats are ' +
            'discouraged. Please refer to http://momentjs.com/guides/#/warnings/js-date/ for more info.',
        function (config) {
            config._d = new Date(config._i + (config._useUTC ? ' UTC' : ''));
        }
    );

    // Pick the first defined of two or three arguments.
    function defaults(a, b, c) {
        if (a != null) {
            return a;
        }
        if (b != null) {
            return b;
        }
        return c;
    }

    function currentDateArray(config) {
        // hooks is actually the exported moment object
        var nowValue = new Date(hooks.now());
        if (config._useUTC) {
            return [
                nowValue.getUTCFullYear(),
                nowValue.getUTCMonth(),
                nowValue.getUTCDate(),
            ];
        }
        return [nowValue.getFullYear(), nowValue.getMonth(), nowValue.getDate()];
    }

    // convert an array to a date.
    // the array should mirror the parameters below
    // note: all values past the year are optional and will default to the lowest possible value.
    // [year, month, day , hour, minute, second, millisecond]
    function configFromArray(config) {
        var i,
            date,
            input = [],
            currentDate,
            expectedWeekday,
            yearToUse;

        if (config._d) {
            return;
        }

        currentDate = currentDateArray(config);

        //compute day of the year from weeks and weekdays
        if (config._w && config._a[DATE] == null && config._a[MONTH] == null) {
            dayOfYearFromWeekInfo(config);
        }

        //if the day of the year is set, figure out what it is
        if (config._dayOfYear != null) {
            yearToUse = defaults(config._a[YEAR], currentDate[YEAR]);

            if (
                config._dayOfYear > daysInYear(yearToUse) ||
                config._dayOfYear === 0
            ) {
                getParsingFlags(config)._overflowDayOfYear = true;
            }

            date = createUTCDate(yearToUse, 0, config._dayOfYear);
            config._a[MONTH] = date.getUTCMonth();
            config._a[DATE] = date.getUTCDate();
        }

        // Default to current date.
        // * if no year, month, day of month are given, default to today
        // * if day of month is given, default month and year
        // * if month is given, default only year
        // * if year is given, don't default anything
        for (i = 0; i < 3 && config._a[i] == null; ++i) {
            config._a[i] = input[i] = currentDate[i];
        }

        // Zero out whatever was not defaulted, including time
        for (; i < 7; i++) {
            config._a[i] = input[i] =
                config._a[i] == null ? (i === 2 ? 1 : 0) : config._a[i];
        }

        // Check for 24:00:00.000
        if (
            config._a[HOUR] === 24 &&
            config._a[MINUTE] === 0 &&
            config._a[SECOND] === 0 &&
            config._a[MILLISECOND] === 0
        ) {
            config._nextDay = true;
            config._a[HOUR] = 0;
        }

        config._d = (config._useUTC ? createUTCDate : createDate).apply(
            null,
            input
        );
        expectedWeekday = config._useUTC
            ? config._d.getUTCDay()
            : config._d.getDay();

        // Apply timezone offset from input. The actual utcOffset can be changed
        // with parseZone.
        if (config._tzm != null) {
            config._d.setUTCMinutes(config._d.getUTCMinutes() - config._tzm);
        }

        if (config._nextDay) {
            config._a[HOUR] = 24;
        }

        // check for mismatching day of week
        if (
            config._w &&
            typeof config._w.d !== 'undefined' &&
            config._w.d !== expectedWeekday
        ) {
            getParsingFlags(config).weekdayMismatch = true;
        }
    }

    function dayOfYearFromWeekInfo(config) {
        var w, weekYear, week, weekday, dow, doy, temp, weekdayOverflow, curWeek;

        w = config._w;
        if (w.GG != null || w.W != null || w.E != null) {
            dow = 1;
            doy = 4;

            // TODO: We need to take the current isoWeekYear, but that depends on
            // how we interpret now (local, utc, fixed offset). So create
            // a now version of current config (take local/utc/offset flags, and
            // create now).
            weekYear = defaults(
                w.GG,
                config._a[YEAR],
                weekOfYear(createLocal(), 1, 4).year
            );
            week = defaults(w.W, 1);
            weekday = defaults(w.E, 1);
            if (weekday < 1 || weekday > 7) {
                weekdayOverflow = true;
            }
        } else {
            dow = config._locale._week.dow;
            doy = config._locale._week.doy;

            curWeek = weekOfYear(createLocal(), dow, doy);

            weekYear = defaults(w.gg, config._a[YEAR], curWeek.year);

            // Default to current week.
            week = defaults(w.w, curWeek.week);

            if (w.d != null) {
                // weekday -- low day numbers are considered next week
                weekday = w.d;
                if (weekday < 0 || weekday > 6) {
                    weekdayOverflow = true;
                }
            } else if (w.e != null) {
                // local weekday -- counting starts from beginning of week
                weekday = w.e + dow;
                if (w.e < 0 || w.e > 6) {
                    weekdayOverflow = true;
                }
            } else {
                // default to beginning of week
                weekday = dow;
            }
        }
        if (week < 1 || week > weeksInYear(weekYear, dow, doy)) {
            getParsingFlags(config)._overflowWeeks = true;
        } else if (weekdayOverflow != null) {
            getParsingFlags(config)._overflowWeekday = true;
        } else {
            temp = dayOfYearFromWeeks(weekYear, week, weekday, dow, doy);
            config._a[YEAR] = temp.year;
            config._dayOfYear = temp.dayOfYear;
        }
    }

    // constant that refers to the ISO standard
    hooks.ISO_8601 = function () {};

    // constant that refers to the RFC 2822 form
    hooks.RFC_2822 = function () {};

    // date from string and format string
    function configFromStringAndFormat(config) {
        // TODO: Move this to another part of the creation flow to prevent circular deps
        if (config._f === hooks.ISO_8601) {
            configFromISO(config);
            return;
        }
        if (config._f === hooks.RFC_2822) {
            configFromRFC2822(config);
            return;
        }
        config._a = [];
        getParsingFlags(config).empty = true;

        // This array is used to make a Date, either with `new Date` or `Date.UTC`
        var string = '' + config._i,
            i,
            parsedInput,
            tokens,
            token,
            skipped,
            stringLength = string.length,
            totalParsedInputLength = 0,
            era,
            tokenLen;

        tokens =
            expandFormat(config._f, config._locale).match(formattingTokens) || [];
        tokenLen = tokens.length;
        for (i = 0; i < tokenLen; i++) {
            token = tokens[i];
            parsedInput = (string.match(getParseRegexForToken(token, config)) ||
                [])[0];
            if (parsedInput) {
                skipped = string.substr(0, string.indexOf(parsedInput));
                if (skipped.length > 0) {
                    getParsingFlags(config).unusedInput.push(skipped);
                }
                string = string.slice(
                    string.indexOf(parsedInput) + parsedInput.length
                );
                totalParsedInputLength += parsedInput.length;
            }
            // don't parse if it's not a known token
            if (formatTokenFunctions[token]) {
                if (parsedInput) {
                    getParsingFlags(config).empty = false;
                } else {
                    getParsingFlags(config).unusedTokens.push(token);
                }
                addTimeToArrayFromToken(token, parsedInput, config);
            } else if (config._strict && !parsedInput) {
                getParsingFlags(config).unusedTokens.push(token);
            }
        }

        // add remaining unparsed input length to the string
        getParsingFlags(config).charsLeftOver =
            stringLength - totalParsedInputLength;
        if (string.length > 0) {
            getParsingFlags(config).unusedInput.push(string);
        }

        // clear _12h flag if hour is <= 12
        if (
            config._a[HOUR] <= 12 &&
            getParsingFlags(config).bigHour === true &&
            config._a[HOUR] > 0
        ) {
            getParsingFlags(config).bigHour = undefined;
        }

        getParsingFlags(config).parsedDateParts = config._a.slice(0);
        getParsingFlags(config).meridiem = config._meridiem;
        // handle meridiem
        config._a[HOUR] = meridiemFixWrap(
            config._locale,
            config._a[HOUR],
            config._meridiem
        );

        // handle era
        era = getParsingFlags(config).era;
        if (era !== null) {
            config._a[YEAR] = config._locale.erasConvertYear(era, config._a[YEAR]);
        }

        configFromArray(config);
        checkOverflow(config);
    }

    function meridiemFixWrap(locale, hour, meridiem) {
        var isPm;

        if (meridiem == null) {
            // nothing to do
            return hour;
        }
        if (locale.meridiemHour != null) {
            return locale.meridiemHour(hour, meridiem);
        } else if (locale.isPM != null) {
            // Fallback
            isPm = locale.isPM(meridiem);
            if (isPm && hour < 12) {
                hour += 12;
            }
            if (!isPm && hour === 12) {
                hour = 0;
            }
            return hour;
        } else {
            // this is not supposed to happen
            return hour;
        }
    }

    // date from string and array of format strings
    function configFromStringAndArray(config) {
        var tempConfig,
            bestMoment,
            scoreToBeat,
            i,
            currentScore,
            validFormatFound,
            bestFormatIsValid = false,
            configfLen = config._f.length;

        if (configfLen === 0) {
            getParsingFlags(config).invalidFormat = true;
            config._d = new Date(NaN);
            return;
        }

        for (i = 0; i < configfLen; i++) {
            currentScore = 0;
            validFormatFound = false;
            tempConfig = copyConfig({}, config);
            if (config._useUTC != null) {
                tempConfig._useUTC = config._useUTC;
            }
            tempConfig._f = config._f[i];
            configFromStringAndFormat(tempConfig);

            if (isValid(tempConfig)) {
                validFormatFound = true;
            }

            // if there is any input that was not parsed add a penalty for that format
            currentScore += getParsingFlags(tempConfig).charsLeftOver;

            //or tokens
            currentScore += getParsingFlags(tempConfig).unusedTokens.length * 10;

            getParsingFlags(tempConfig).score = currentScore;

            if (!bestFormatIsValid) {
                if (
                    scoreToBeat == null ||
                    currentScore < scoreToBeat ||
                    validFormatFound
                ) {
                    scoreToBeat = currentScore;
                    bestMoment = tempConfig;
                    if (validFormatFound) {
                        bestFormatIsValid = true;
                    }
                }
            } else {
                if (currentScore < scoreToBeat) {
                    scoreToBeat = currentScore;
                    bestMoment = tempConfig;
                }
            }
        }

        extend(config, bestMoment || tempConfig);
    }

    function configFromObject(config) {
        if (config._d) {
            return;
        }

        var i = normalizeObjectUnits(config._i),
            dayOrDate = i.day === undefined ? i.date : i.day;
        config._a = map(
            [i.year, i.month, dayOrDate, i.hour, i.minute, i.second, i.millisecond],
            function (obj) {
                return obj && parseInt(obj, 10);
            }
        );

        configFromArray(config);
    }

    function createFromConfig(config) {
        var res = new Moment(checkOverflow(prepareConfig(config)));
        if (res._nextDay) {
            // Adding is smart enough around DST
            res.add(1, 'd');
            res._nextDay = undefined;
        }

        return res;
    }

    function prepareConfig(config) {
        var input = config._i,
            format = config._f;

        config._locale = config._locale || getLocale(config._l);

        if (input === null || (format === undefined && input === '')) {
            return createInvalid({ nullInput: true });
        }

        if (typeof input === 'string') {
            config._i = input = config._locale.preparse(input);
        }

        if (isMoment(input)) {
            return new Moment(checkOverflow(input));
        } else if (isDate(input)) {
            config._d = input;
        } else if (isArray(format)) {
            configFromStringAndArray(config);
        } else if (format) {
            configFromStringAndFormat(config);
        } else {
            configFromInput(config);
        }

        if (!isValid(config)) {
            config._d = null;
        }

        return config;
    }

    function configFromInput(config) {
        var input = config._i;
        if (isUndefined(input)) {
            config._d = new Date(hooks.now());
        } else if (isDate(input)) {
            config._d = new Date(input.valueOf());
        } else if (typeof input === 'string') {
            configFromString(config);
        } else if (isArray(input)) {
            config._a = map(input.slice(0), function (obj) {
                return parseInt(obj, 10);
            });
            configFromArray(config);
        } else if (isObject(input)) {
            configFromObject(config);
        } else if (isNumber(input)) {
            // from milliseconds
            config._d = new Date(input);
        } else {
            hooks.createFromInputFallback(config);
        }
    }

    function createLocalOrUTC(input, format, locale, strict, isUTC) {
        var c = {};

        if (format === true || format === false) {
            strict = format;
            format = undefined;
        }

        if (locale === true || locale === false) {
            strict = locale;
            locale = undefined;
        }

        if (
            (isObject(input) && isObjectEmpty(input)) ||
            (isArray(input) && input.length === 0)
        ) {
            input = undefined;
        }
        // object construction must be done this way.
        // https://github.com/moment/moment/issues/1423
        c._isAMomentObject = true;
        c._useUTC = c._isUTC = isUTC;
        c._l = locale;
        c._i = input;
        c._f = format;
        c._strict = strict;

        return createFromConfig(c);
    }

    function createLocal(input, format, locale, strict) {
        return createLocalOrUTC(input, format, locale, strict, false);
    }

    var prototypeMin = deprecate(
            'moment().min is deprecated, use moment.max instead. http://momentjs.com/guides/#/warnings/min-max/',
            function () {
                var other = createLocal.apply(null, arguments);
                if (this.isValid() && other.isValid()) {
                    return other < this ? this : other;
                } else {
                    return createInvalid();
                }
            }
        ),
        prototypeMax = deprecate(
            'moment().max is deprecated, use moment.min instead. http://momentjs.com/guides/#/warnings/min-max/',
            function () {
                var other = createLocal.apply(null, arguments);
                if (this.isValid() && other.isValid()) {
                    return other > this ? this : other;
                } else {
                    return createInvalid();
                }
            }
        );

    // Pick a moment m from moments so that m[fn](other) is true for all
    // other. This relies on the function fn to be transitive.
    //
    // moments should either be an array of moment objects or an array, whose
    // first element is an array of moment objects.
    function pickBy(fn, moments) {
        var res, i;
        if (moments.length === 1 && isArray(moments[0])) {
            moments = moments[0];
        }
        if (!moments.length) {
            return createLocal();
        }
        res = moments[0];
        for (i = 1; i < moments.length; ++i) {
            if (!moments[i].isValid() || moments[i][fn](res)) {
                res = moments[i];
            }
        }
        return res;
    }

    // TODO: Use [].sort instead?
    function min() {
        var args = [].slice.call(arguments, 0);

        return pickBy('isBefore', args);
    }

    function max() {
        var args = [].slice.call(arguments, 0);

        return pickBy('isAfter', args);
    }

    var now = function () {
        return Date.now ? Date.now() : +new Date();
    };

    var ordering = [
        'year',
        'quarter',
        'month',
        'week',
        'day',
        'hour',
        'minute',
        'second',
        'millisecond',
    ];

    function isDurationValid(m) {
        var key,
            unitHasDecimal = false,
            i,
            orderLen = ordering.length;
        for (key in m) {
            if (
                hasOwnProp(m, key) &&
                !(
                    indexOf.call(ordering, key) !== -1 &&
                    (m[key] == null || !isNaN(m[key]))
                )
            ) {
                return false;
            }
        }

        for (i = 0; i < orderLen; ++i) {
            if (m[ordering[i]]) {
                if (unitHasDecimal) {
                    return false; // only allow non-integers for smallest unit
                }
                if (parseFloat(m[ordering[i]]) !== toInt(m[ordering[i]])) {
                    unitHasDecimal = true;
                }
            }
        }

        return true;
    }

    function isValid$1() {
        return this._isValid;
    }

    function createInvalid$1() {
        return createDuration(NaN);
    }

    function Duration(duration) {
        var normalizedInput = normalizeObjectUnits(duration),
            years = normalizedInput.year || 0,
            quarters = normalizedInput.quarter || 0,
            months = normalizedInput.month || 0,
            weeks = normalizedInput.week || normalizedInput.isoWeek || 0,
            days = normalizedInput.day || 0,
            hours = normalizedInput.hour || 0,
            minutes = normalizedInput.minute || 0,
            seconds = normalizedInput.second || 0,
            milliseconds = normalizedInput.millisecond || 0;

        this._isValid = isDurationValid(normalizedInput);

        // representation for dateAddRemove
        this._milliseconds =
            +milliseconds +
            seconds * 1e3 + // 1000
            minutes * 6e4 + // 1000 * 60
            hours * 1000 * 60 * 60; //using 1000 * 60 * 60 instead of 36e5 to avoid floating point rounding errors https://github.com/moment/moment/issues/2978
        // Because of dateAddRemove treats 24 hours as different from a
        // day when working around DST, we need to store them separately
        this._days = +days + weeks * 7;
        // It is impossible to translate months into days without knowing
        // which months you are are talking about, so we have to store
        // it separately.
        this._months = +months + quarters * 3 + years * 12;

        this._data = {};

        this._locale = getLocale();

        this._bubble();
    }

    function isDuration(obj) {
        return obj instanceof Duration;
    }

    function absRound(number) {
        if (number < 0) {
            return Math.round(-1 * number) * -1;
        } else {
            return Math.round(number);
        }
    }

    // compare two arrays, return the number of differences
    function compareArrays(array1, array2, dontConvert) {
        var len = Math.min(array1.length, array2.length),
            lengthDiff = Math.abs(array1.length - array2.length),
            diffs = 0,
            i;
        for (i = 0; i < len; i++) {
            if (
                (dontConvert && array1[i] !== array2[i]) ||
                (!dontConvert && toInt(array1[i]) !== toInt(array2[i]))
            ) {
                diffs++;
            }
        }
        return diffs + lengthDiff;
    }

    // FORMATTING

    function offset(token, separator) {
        addFormatToken(token, 0, 0, function () {
            var offset = this.utcOffset(),
                sign = '+';
            if (offset < 0) {
                offset = -offset;
                sign = '-';
            }
            return (
                sign +
                zeroFill(~~(offset / 60), 2) +
                separator +
                zeroFill(~~offset % 60, 2)
            );
        });
    }

    offset('Z', ':');
    offset('ZZ', '');

    // PARSING

    addRegexToken('Z', matchShortOffset);
    addRegexToken('ZZ', matchShortOffset);
    addParseToken(['Z', 'ZZ'], function (input, array, config) {
        config._useUTC = true;
        config._tzm = offsetFromString(matchShortOffset, input);
    });

    // HELPERS

    // timezone chunker
    // '+10:00' > ['10',  '00']
    // '-1530'  > ['-15', '30']
    var chunkOffset = /([\+\-]|\d\d)/gi;

    function offsetFromString(matcher, string) {
        var matches = (string || '').match(matcher),
            chunk,
            parts,
            minutes;

        if (matches === null) {
            return null;
        }

        chunk = matches[matches.length - 1] || [];
        parts = (chunk + '').match(chunkOffset) || ['-', 0, 0];
        minutes = +(parts[1] * 60) + toInt(parts[2]);

        return minutes === 0 ? 0 : parts[0] === '+' ? minutes : -minutes;
    }

    // Return a moment from input, that is local/utc/zone equivalent to model.
    function cloneWithOffset(input, model) {
        var res, diff;
        if (model._isUTC) {
            res = model.clone();
            diff =
                (isMoment(input) || isDate(input)
                    ? input.valueOf()
                    : createLocal(input).valueOf()) - res.valueOf();
            // Use low-level api, because this fn is low-level api.
            res._d.setTime(res._d.valueOf() + diff);
            hooks.updateOffset(res, false);
            return res;
        } else {
            return createLocal(input).local();
        }
    }

    function getDateOffset(m) {
        // On Firefox.24 Date#getTimezoneOffset returns a floating point.
        // https://github.com/moment/moment/pull/1871
        return -Math.round(m._d.getTimezoneOffset());
    }

    // HOOKS

    // This function will be called whenever a moment is mutated.
    // It is intended to keep the offset in sync with the timezone.
    hooks.updateOffset = function () {};

    // MOMENTS

    // keepLocalTime = true means only change the timezone, without
    // affecting the local hour. So 5:31:26 +0300 --[utcOffset(2, true)]-->
    // 5:31:26 +0200 It is possible that 5:31:26 doesn't exist with offset
    // +0200, so we adjust the time as needed, to be valid.
    //
    // Keeping the time actually adds/subtracts (one hour)
    // from the actual represented time. That is why we call updateOffset
    // a second time. In case it wants us to change the offset again
    // _changeInProgress == true case, then we have to adjust, because
    // there is no such time in the given timezone.
    function getSetOffset(input, keepLocalTime, keepMinutes) {
        var offset = this._offset || 0,
            localAdjust;
        if (!this.isValid()) {
            return input != null ? this : NaN;
        }
        if (input != null) {
            if (typeof input === 'string') {
                input = offsetFromString(matchShortOffset, input);
                if (input === null) {
                    return this;
                }
            } else if (Math.abs(input) < 16 && !keepMinutes) {
                input = input * 60;
            }
            if (!this._isUTC && keepLocalTime) {
                localAdjust = getDateOffset(this);
            }
            this._offset = input;
            this._isUTC = true;
            if (localAdjust != null) {
                this.add(localAdjust, 'm');
            }
            if (offset !== input) {
                if (!keepLocalTime || this._changeInProgress) {
                    addSubtract(
                        this,
                        createDuration(input - offset, 'm'),
                        1,
                        false
                    );
                } else if (!this._changeInProgress) {
                    this._changeInProgress = true;
                    hooks.updateOffset(this, true);
                    this._changeInProgress = null;
                }
            }
            return this;
        } else {
            return this._isUTC ? offset : getDateOffset(this);
        }
    }

    function getSetZone(input, keepLocalTime) {
        if (input != null) {
            if (typeof input !== 'string') {
                input = -input;
            }

            this.utcOffset(input, keepLocalTime);

            return this;
        } else {
            return -this.utcOffset();
        }
    }

    function setOffsetToUTC(keepLocalTime) {
        return this.utcOffset(0, keepLocalTime);
    }

    function setOffsetToLocal(keepLocalTime) {
        if (this._isUTC) {
            this.utcOffset(0, keepLocalTime);
            this._isUTC = false;

            if (keepLocalTime) {
                this.subtract(getDateOffset(this), 'm');
            }
        }
        return this;
    }

    function setOffsetToParsedOffset() {
        if (this._tzm != null) {
            this.utcOffset(this._tzm, false, true);
        } else if (typeof this._i === 'string') {
            var tZone = offsetFromString(matchOffset, this._i);
            if (tZone != null) {
                this.utcOffset(tZone);
            } else {
                this.utcOffset(0, true);
            }
        }
        return this;
    }

    function hasAlignedHourOffset(input) {
        if (!this.isValid()) {
            return false;
        }
        input = input ? createLocal(input).utcOffset() : 0;

        return (this.utcOffset() - input) % 60 === 0;
    }

    function isDaylightSavingTime() {
        return (
            this.utcOffset() > this.clone().month(0).utcOffset() ||
            this.utcOffset() > this.clone().month(5).utcOffset()
        );
    }

    function isDaylightSavingTimeShifted() {
        if (!isUndefined(this._isDSTShifted)) {
            return this._isDSTShifted;
        }

        var c = {},
            other;

        copyConfig(c, this);
        c = prepareConfig(c);

        if (c._a) {
            other = c._isUTC ? createUTC(c._a) : createLocal(c._a);
            this._isDSTShifted =
                this.isValid() && compareArrays(c._a, other.toArray()) > 0;
        } else {
            this._isDSTShifted = false;
        }

        return this._isDSTShifted;
    }

    function isLocal() {
        return this.isValid() ? !this._isUTC : false;
    }

    function isUtcOffset() {
        return this.isValid() ? this._isUTC : false;
    }

    function isUtc() {
        return this.isValid() ? this._isUTC && this._offset === 0 : false;
    }

    // ASP.NET json date format regex
    var aspNetRegex = /^(-|\+)?(?:(\d*)[. ])?(\d+):(\d+)(?::(\d+)(\.\d*)?)?$/,
        // from http://docs.closure-library.googlecode.com/git/closure_goog_date_date.js.source.html
        // somewhat more in line with 4.4.3.2 2004 spec, but allows decimal anywhere
        // and further modified to allow for strings containing both week and day
        isoRegex =
            /^(-|\+)?P(?:([-+]?[0-9,.]*)Y)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)W)?(?:([-+]?[0-9,.]*)D)?(?:T(?:([-+]?[0-9,.]*)H)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)S)?)?$/;

    function createDuration(input, key) {
        var duration = input,
            // matching against regexp is expensive, do it on demand
            match = null,
            sign,
            ret,
            diffRes;

        if (isDuration(input)) {
            duration = {
                ms: input._milliseconds,
                d: input._days,
                M: input._months,
            };
        } else if (isNumber(input) || !isNaN(+input)) {
            duration = {};
            if (key) {
                duration[key] = +input;
            } else {
                duration.milliseconds = +input;
            }
        } else if ((match = aspNetRegex.exec(input))) {
            sign = match[1] === '-' ? -1 : 1;
            duration = {
                y: 0,
                d: toInt(match[DATE]) * sign,
                h: toInt(match[HOUR]) * sign,
                m: toInt(match[MINUTE]) * sign,
                s: toInt(match[SECOND]) * sign,
                ms: toInt(absRound(match[MILLISECOND] * 1000)) * sign, // the millisecond decimal point is included in the match
            };
        } else if ((match = isoRegex.exec(input))) {
            sign = match[1] === '-' ? -1 : 1;
            duration = {
                y: parseIso(match[2], sign),
                M: parseIso(match[3], sign),
                w: parseIso(match[4], sign),
                d: parseIso(match[5], sign),
                h: parseIso(match[6], sign),
                m: parseIso(match[7], sign),
                s: parseIso(match[8], sign),
            };
        } else if (duration == null) {
            // checks for null or undefined
            duration = {};
        } else if (
            typeof duration === 'object' &&
            ('from' in duration || 'to' in duration)
        ) {
            diffRes = momentsDifference(
                createLocal(duration.from),
                createLocal(duration.to)
            );

            duration = {};
            duration.ms = diffRes.milliseconds;
            duration.M = diffRes.months;
        }

        ret = new Duration(duration);

        if (isDuration(input) && hasOwnProp(input, '_locale')) {
            ret._locale = input._locale;
        }

        if (isDuration(input) && hasOwnProp(input, '_isValid')) {
            ret._isValid = input._isValid;
        }

        return ret;
    }

    createDuration.fn = Duration.prototype;
    createDuration.invalid = createInvalid$1;

    function parseIso(inp, sign) {
        // We'd normally use ~~inp for this, but unfortunately it also
        // converts floats to ints.
        // inp may be undefined, so careful calling replace on it.
        var res = inp && parseFloat(inp.replace(',', '.'));
        // apply sign while we're at it
        return (isNaN(res) ? 0 : res) * sign;
    }

    function positiveMomentsDifference(base, other) {
        var res = {};

        res.months =
            other.month() - base.month() + (other.year() - base.year()) * 12;
        if (base.clone().add(res.months, 'M').isAfter(other)) {
            --res.months;
        }

        res.milliseconds = +other - +base.clone().add(res.months, 'M');

        return res;
    }

    function momentsDifference(base, other) {
        var res;
        if (!(base.isValid() && other.isValid())) {
            return { milliseconds: 0, months: 0 };
        }

        other = cloneWithOffset(other, base);
        if (base.isBefore(other)) {
            res = positiveMomentsDifference(base, other);
        } else {
            res = positiveMomentsDifference(other, base);
            res.milliseconds = -res.milliseconds;
            res.months = -res.months;
        }

        return res;
    }

    // TODO: remove 'name' arg after deprecation is removed
    function createAdder(direction, name) {
        return function (val, period) {
            var dur, tmp;
            //invert the arguments, but complain about it
            if (period !== null && !isNaN(+period)) {
                deprecateSimple(
                    name,
                    'moment().' +
                        name +
                        '(period, number) is deprecated. Please use moment().' +
                        name +
                        '(number, period). ' +
                        'See http://momentjs.com/guides/#/warnings/add-inverted-param/ for more info.'
                );
                tmp = val;
                val = period;
                period = tmp;
            }

            dur = createDuration(val, period);
            addSubtract(this, dur, direction);
            return this;
        };
    }

    function addSubtract(mom, duration, isAdding, updateOffset) {
        var milliseconds = duration._milliseconds,
            days = absRound(duration._days),
            months = absRound(duration._months);

        if (!mom.isValid()) {
            // No op
            return;
        }

        updateOffset = updateOffset == null ? true : updateOffset;

        if (months) {
            setMonth(mom, get(mom, 'Month') + months * isAdding);
        }
        if (days) {
            set$1(mom, 'Date', get(mom, 'Date') + days * isAdding);
        }
        if (milliseconds) {
            mom._d.setTime(mom._d.valueOf() + milliseconds * isAdding);
        }
        if (updateOffset) {
            hooks.updateOffset(mom, days || months);
        }
    }

    var add = createAdder(1, 'add'),
        subtract = createAdder(-1, 'subtract');

    function isString(input) {
        return typeof input === 'string' || input instanceof String;
    }

    // type MomentInput = Moment | Date | string | number | (number | string)[] | MomentInputObject | void; // null | undefined
    function isMomentInput(input) {
        return (
            isMoment(input) ||
            isDate(input) ||
            isString(input) ||
            isNumber(input) ||
            isNumberOrStringArray(input) ||
            isMomentInputObject(input) ||
            input === null ||
            input === undefined
        );
    }

    function isMomentInputObject(input) {
        var objectTest = isObject(input) && !isObjectEmpty(input),
            propertyTest = false,
            properties = [
                'years',
                'year',
                'y',
                'months',
                'month',
                'M',
                'days',
                'day',
                'd',
                'dates',
                'date',
                'D',
                'hours',
                'hour',
                'h',
                'minutes',
                'minute',
                'm',
                'seconds',
                'second',
                's',
                'milliseconds',
                'millisecond',
                'ms',
            ],
            i,
            property,
            propertyLen = properties.length;

        for (i = 0; i < propertyLen; i += 1) {
            property = properties[i];
            propertyTest = propertyTest || hasOwnProp(input, property);
        }

        return objectTest && propertyTest;
    }

    function isNumberOrStringArray(input) {
        var arrayTest = isArray(input),
            dataTypeTest = false;
        if (arrayTest) {
            dataTypeTest =
                input.filter(function (item) {
                    return !isNumber(item) && isString(input);
                }).length === 0;
        }
        return arrayTest && dataTypeTest;
    }

    function isCalendarSpec(input) {
        var objectTest = isObject(input) && !isObjectEmpty(input),
            propertyTest = false,
            properties = [
                'sameDay',
                'nextDay',
                'lastDay',
                'nextWeek',
                'lastWeek',
                'sameElse',
            ],
            i,
            property;

        for (i = 0; i < properties.length; i += 1) {
            property = properties[i];
            propertyTest = propertyTest || hasOwnProp(input, property);
        }

        return objectTest && propertyTest;
    }

    function getCalendarFormat(myMoment, now) {
        var diff = myMoment.diff(now, 'days', true);
        return diff < -6
            ? 'sameElse'
            : diff < -1
            ? 'lastWeek'
            : diff < 0
            ? 'lastDay'
            : diff < 1
            ? 'sameDay'
            : diff < 2
            ? 'nextDay'
            : diff < 7
            ? 'nextWeek'
            : 'sameElse';
    }

    function calendar$1(time, formats) {
        // Support for single parameter, formats only overload to the calendar function
        if (arguments.length === 1) {
            if (!arguments[0]) {
                time = undefined;
                formats = undefined;
            } else if (isMomentInput(arguments[0])) {
                time = arguments[0];
                formats = undefined;
            } else if (isCalendarSpec(arguments[0])) {
                formats = arguments[0];
                time = undefined;
            }
        }
        // We want to compare the start of today, vs this.
        // Getting start-of-today depends on whether we're local/utc/offset or not.
        var now = time || createLocal(),
            sod = cloneWithOffset(now, this).startOf('day'),
            format = hooks.calendarFormat(this, sod) || 'sameElse',
            output =
                formats &&
                (isFunction(formats[format])
                    ? formats[format].call(this, now)
                    : formats[format]);

        return this.format(
            output || this.localeData().calendar(format, this, createLocal(now))
        );
    }

    function clone() {
        return new Moment(this);
    }

    function isAfter(input, units) {
        var localInput = isMoment(input) ? input : createLocal(input);
        if (!(this.isValid() && localInput.isValid())) {
            return false;
        }
        units = normalizeUnits(units) || 'millisecond';
        if (units === 'millisecond') {
            return this.valueOf() > localInput.valueOf();
        } else {
            return localInput.valueOf() < this.clone().startOf(units).valueOf();
        }
    }

    function isBefore(input, units) {
        var localInput = isMoment(input) ? input : createLocal(input);
        if (!(this.isValid() && localInput.isValid())) {
            return false;
        }
        units = normalizeUnits(units) || 'millisecond';
        if (units === 'millisecond') {
            return this.valueOf() < localInput.valueOf();
        } else {
            return this.clone().endOf(units).valueOf() < localInput.valueOf();
        }
    }

    function isBetween(from, to, units, inclusivity) {
        var localFrom = isMoment(from) ? from : createLocal(from),
            localTo = isMoment(to) ? to : createLocal(to);
        if (!(this.isValid() && localFrom.isValid() && localTo.isValid())) {
            return false;
        }
        inclusivity = inclusivity || '()';
        return (
            (inclusivity[0] === '('
                ? this.isAfter(localFrom, units)
                : !this.isBefore(localFrom, units)) &&
            (inclusivity[1] === ')'
                ? this.isBefore(localTo, units)
                : !this.isAfter(localTo, units))
        );
    }

    function isSame(input, units) {
        var localInput = isMoment(input) ? input : createLocal(input),
            inputMs;
        if (!(this.isValid() && localInput.isValid())) {
            return false;
        }
        units = normalizeUnits(units) || 'millisecond';
        if (units === 'millisecond') {
            return this.valueOf() === localInput.valueOf();
        } else {
            inputMs = localInput.valueOf();
            return (
                this.clone().startOf(units).valueOf() <= inputMs &&
                inputMs <= this.clone().endOf(units).valueOf()
            );
        }
    }

    function isSameOrAfter(input, units) {
        return this.isSame(input, units) || this.isAfter(input, units);
    }

    function isSameOrBefore(input, units) {
        return this.isSame(input, units) || this.isBefore(input, units);
    }

    function diff(input, units, asFloat) {
        var that, zoneDelta, output;

        if (!this.isValid()) {
            return NaN;
        }

        that = cloneWithOffset(input, this);

        if (!that.isValid()) {
            return NaN;
        }

        zoneDelta = (that.utcOffset() - this.utcOffset()) * 6e4;

        units = normalizeUnits(units);

        switch (units) {
            case 'year':
                output = monthDiff(this, that) / 12;
                break;
            case 'month':
                output = monthDiff(this, that);
                break;
            case 'quarter':
                output = monthDiff(this, that) / 3;
                break;
            case 'second':
                output = (this - that) / 1e3;
                break; // 1000
            case 'minute':
                output = (this - that) / 6e4;
                break; // 1000 * 60
            case 'hour':
                output = (this - that) / 36e5;
                break; // 1000 * 60 * 60
            case 'day':
                output = (this - that - zoneDelta) / 864e5;
                break; // 1000 * 60 * 60 * 24, negate dst
            case 'week':
                output = (this - that - zoneDelta) / 6048e5;
                break; // 1000 * 60 * 60 * 24 * 7, negate dst
            default:
                output = this - that;
        }

        return asFloat ? output : absFloor(output);
    }

    function monthDiff(a, b) {
        if (a.date() < b.date()) {
            // end-of-month calculations work correct when the start month has more
            // days than the end month.
            return -monthDiff(b, a);
        }
        // difference in months
        var wholeMonthDiff = (b.year() - a.year()) * 12 + (b.month() - a.month()),
            // b is in (anchor - 1 month, anchor + 1 month)
            anchor = a.clone().add(wholeMonthDiff, 'months'),
            anchor2,
            adjust;

        if (b - anchor < 0) {
            anchor2 = a.clone().add(wholeMonthDiff - 1, 'months');
            // linear across the month
            adjust = (b - anchor) / (anchor - anchor2);
        } else {
            anchor2 = a.clone().add(wholeMonthDiff + 1, 'months');
            // linear across the month
            adjust = (b - anchor) / (anchor2 - anchor);
        }

        //check for negative zero, return zero if negative zero
        return -(wholeMonthDiff + adjust) || 0;
    }

    hooks.defaultFormat = 'YYYY-MM-DDTHH:mm:ssZ';
    hooks.defaultFormatUtc = 'YYYY-MM-DDTHH:mm:ss[Z]';

    function toString() {
        return this.clone().locale('en').format('ddd MMM DD YYYY HH:mm:ss [GMT]ZZ');
    }

    function toISOString(keepOffset) {
        if (!this.isValid()) {
            return null;
        }
        var utc = keepOffset !== true,
            m = utc ? this.clone().utc() : this;
        if (m.year() < 0 || m.year() > 9999) {
            return formatMoment(
                m,
                utc
                    ? 'YYYYYY-MM-DD[T]HH:mm:ss.SSS[Z]'
                    : 'YYYYYY-MM-DD[T]HH:mm:ss.SSSZ'
            );
        }
        if (isFunction(Date.prototype.toISOString)) {
            // native implementation is ~50x faster, use it when we can
            if (utc) {
                return this.toDate().toISOString();
            } else {
                return new Date(this.valueOf() + this.utcOffset() * 60 * 1000)
                    .toISOString()
                    .replace('Z', formatMoment(m, 'Z'));
            }
        }
        return formatMoment(
            m,
            utc ? 'YYYY-MM-DD[T]HH:mm:ss.SSS[Z]' : 'YYYY-MM-DD[T]HH:mm:ss.SSSZ'
        );
    }

    /**
     * Return a human readable representation of a moment that can
     * also be evaluated to get a new moment which is the same
     *
     * @link https://nodejs.org/dist/latest/docs/api/util.html#util_custom_inspect_function_on_objects
     */
    function inspect() {
        if (!this.isValid()) {
            return 'moment.invalid(/* ' + this._i + ' */)';
        }
        var func = 'moment',
            zone = '',
            prefix,
            year,
            datetime,
            suffix;
        if (!this.isLocal()) {
            func = this.utcOffset() === 0 ? 'moment.utc' : 'moment.parseZone';
            zone = 'Z';
        }
        prefix = '[' + func + '("]';
        year = 0 <= this.year() && this.year() <= 9999 ? 'YYYY' : 'YYYYYY';
        datetime = '-MM-DD[T]HH:mm:ss.SSS';
        suffix = zone + '[")]';

        return this.format(prefix + year + datetime + suffix);
    }

    function format(inputString) {
        if (!inputString) {
            inputString = this.isUtc()
                ? hooks.defaultFormatUtc
                : hooks.defaultFormat;
        }
        var output = formatMoment(this, inputString);
        return this.localeData().postformat(output);
    }

    function from(time, withoutSuffix) {
        if (
            this.isValid() &&
            ((isMoment(time) && time.isValid()) || createLocal(time).isValid())
        ) {
            return createDuration({ to: this, from: time })
                .locale(this.locale())
                .humanize(!withoutSuffix);
        } else {
            return this.localeData().invalidDate();
        }
    }

    function fromNow(withoutSuffix) {
        return this.from(createLocal(), withoutSuffix);
    }

    function to(time, withoutSuffix) {
        if (
            this.isValid() &&
            ((isMoment(time) && time.isValid()) || createLocal(time).isValid())
        ) {
            return createDuration({ from: this, to: time })
                .locale(this.locale())
                .humanize(!withoutSuffix);
        } else {
            return this.localeData().invalidDate();
        }
    }

    function toNow(withoutSuffix) {
        return this.to(createLocal(), withoutSuffix);
    }

    // If passed a locale key, it will set the locale for this
    // instance.  Otherwise, it will return the locale configuration
    // variables for this instance.
    function locale(key) {
        var newLocaleData;

        if (key === undefined) {
            return this._locale._abbr;
        } else {
            newLocaleData = getLocale(key);
            if (newLocaleData != null) {
                this._locale = newLocaleData;
            }
            return this;
        }
    }

    var lang = deprecate(
        'moment().lang() is deprecated. Instead, use moment().localeData() to get the language configuration. Use moment().locale() to change languages.',
        function (key) {
            if (key === undefined) {
                return this.localeData();
            } else {
                return this.locale(key);
            }
        }
    );

    function localeData() {
        return this._locale;
    }

    var MS_PER_SECOND = 1000,
        MS_PER_MINUTE = 60 * MS_PER_SECOND,
        MS_PER_HOUR = 60 * MS_PER_MINUTE,
        MS_PER_400_YEARS = (365 * 400 + 97) * 24 * MS_PER_HOUR;

    // actual modulo - handles negative numbers (for dates before 1970):
    function mod$1(dividend, divisor) {
        return ((dividend % divisor) + divisor) % divisor;
    }

    function localStartOfDate(y, m, d) {
        // the date constructor remaps years 0-99 to 1900-1999
        if (y < 100 && y >= 0) {
            // preserve leap years using a full 400 year cycle, then reset
            return new Date(y + 400, m, d) - MS_PER_400_YEARS;
        } else {
            return new Date(y, m, d).valueOf();
        }
    }

    function utcStartOfDate(y, m, d) {
        // Date.UTC remaps years 0-99 to 1900-1999
        if (y < 100 && y >= 0) {
            // preserve leap years using a full 400 year cycle, then reset
            return Date.UTC(y + 400, m, d) - MS_PER_400_YEARS;
        } else {
            return Date.UTC(y, m, d);
        }
    }

    function startOf(units) {
        var time, startOfDate;
        units = normalizeUnits(units);
        if (units === undefined || units === 'millisecond' || !this.isValid()) {
            return this;
        }

        startOfDate = this._isUTC ? utcStartOfDate : localStartOfDate;

        switch (units) {
            case 'year':
                time = startOfDate(this.year(), 0, 1);
                break;
            case 'quarter':
                time = startOfDate(
                    this.year(),
                    this.month() - (this.month() % 3),
                    1
                );
                break;
            case 'month':
                time = startOfDate(this.year(), this.month(), 1);
                break;
            case 'week':
                time = startOfDate(
                    this.year(),
                    this.month(),
                    this.date() - this.weekday()
                );
                break;
            case 'isoWeek':
                time = startOfDate(
                    this.year(),
                    this.month(),
                    this.date() - (this.isoWeekday() - 1)
                );
                break;
            case 'day':
            case 'date':
                time = startOfDate(this.year(), this.month(), this.date());
                break;
            case 'hour':
                time = this._d.valueOf();
                time -= mod$1(
                    time + (this._isUTC ? 0 : this.utcOffset() * MS_PER_MINUTE),
                    MS_PER_HOUR
                );
                break;
            case 'minute':
                time = this._d.valueOf();
                time -= mod$1(time, MS_PER_MINUTE);
                break;
            case 'second':
                time = this._d.valueOf();
                time -= mod$1(time, MS_PER_SECOND);
                break;
        }

        this._d.setTime(time);
        hooks.updateOffset(this, true);
        return this;
    }

    function endOf(units) {
        var time, startOfDate;
        units = normalizeUnits(units);
        if (units === undefined || units === 'millisecond' || !this.isValid()) {
            return this;
        }

        startOfDate = this._isUTC ? utcStartOfDate : localStartOfDate;

        switch (units) {
            case 'year':
                time = startOfDate(this.year() + 1, 0, 1) - 1;
                break;
            case 'quarter':
                time =
                    startOfDate(
                        this.year(),
                        this.month() - (this.month() % 3) + 3,
                        1
                    ) - 1;
                break;
            case 'month':
                time = startOfDate(this.year(), this.month() + 1, 1) - 1;
                break;
            case 'week':
                time =
                    startOfDate(
                        this.year(),
                        this.month(),
                        this.date() - this.weekday() + 7
                    ) - 1;
                break;
            case 'isoWeek':
                time =
                    startOfDate(
                        this.year(),
                        this.month(),
                        this.date() - (this.isoWeekday() - 1) + 7
                    ) - 1;
                break;
            case 'day':
            case 'date':
                time = startOfDate(this.year(), this.month(), this.date() + 1) - 1;
                break;
            case 'hour':
                time = this._d.valueOf();
                time +=
                    MS_PER_HOUR -
                    mod$1(
                        time + (this._isUTC ? 0 : this.utcOffset() * MS_PER_MINUTE),
                        MS_PER_HOUR
                    ) -
                    1;
                break;
            case 'minute':
                time = this._d.valueOf();
                time += MS_PER_MINUTE - mod$1(time, MS_PER_MINUTE) - 1;
                break;
            case 'second':
                time = this._d.valueOf();
                time += MS_PER_SECOND - mod$1(time, MS_PER_SECOND) - 1;
                break;
        }

        this._d.setTime(time);
        hooks.updateOffset(this, true);
        return this;
    }

    function valueOf() {
        return this._d.valueOf() - (this._offset || 0) * 60000;
    }

    function unix() {
        return Math.floor(this.valueOf() / 1000);
    }

    function toDate() {
        return new Date(this.valueOf());
    }

    function toArray() {
        var m = this;
        return [
            m.year(),
            m.month(),
            m.date(),
            m.hour(),
            m.minute(),
            m.second(),
            m.millisecond(),
        ];
    }

    function toObject() {
        var m = this;
        return {
            years: m.year(),
            months: m.month(),
            date: m.date(),
            hours: m.hours(),
            minutes: m.minutes(),
            seconds: m.seconds(),
            milliseconds: m.milliseconds(),
        };
    }

    function toJSON() {
        // new Date(NaN).toJSON() === null
        return this.isValid() ? this.toISOString() : null;
    }

    function isValid$2() {
        return isValid(this);
    }

    function parsingFlags() {
        return extend({}, getParsingFlags(this));
    }

    function invalidAt() {
        return getParsingFlags(this).overflow;
    }

    function creationData() {
        return {
            input: this._i,
            format: this._f,
            locale: this._locale,
            isUTC: this._isUTC,
            strict: this._strict,
        };
    }

    addFormatToken('N', 0, 0, 'eraAbbr');
    addFormatToken('NN', 0, 0, 'eraAbbr');
    addFormatToken('NNN', 0, 0, 'eraAbbr');
    addFormatToken('NNNN', 0, 0, 'eraName');
    addFormatToken('NNNNN', 0, 0, 'eraNarrow');

    addFormatToken('y', ['y', 1], 'yo', 'eraYear');
    addFormatToken('y', ['yy', 2], 0, 'eraYear');
    addFormatToken('y', ['yyy', 3], 0, 'eraYear');
    addFormatToken('y', ['yyyy', 4], 0, 'eraYear');

    addRegexToken('N', matchEraAbbr);
    addRegexToken('NN', matchEraAbbr);
    addRegexToken('NNN', matchEraAbbr);
    addRegexToken('NNNN', matchEraName);
    addRegexToken('NNNNN', matchEraNarrow);

    addParseToken(
        ['N', 'NN', 'NNN', 'NNNN', 'NNNNN'],
        function (input, array, config, token) {
            var era = config._locale.erasParse(input, token, config._strict);
            if (era) {
                getParsingFlags(config).era = era;
            } else {
                getParsingFlags(config).invalidEra = input;
            }
        }
    );

    addRegexToken('y', matchUnsigned);
    addRegexToken('yy', matchUnsigned);
    addRegexToken('yyy', matchUnsigned);
    addRegexToken('yyyy', matchUnsigned);
    addRegexToken('yo', matchEraYearOrdinal);

    addParseToken(['y', 'yy', 'yyy', 'yyyy'], YEAR);
    addParseToken(['yo'], function (input, array, config, token) {
        var match;
        if (config._locale._eraYearOrdinalRegex) {
            match = input.match(config._locale._eraYearOrdinalRegex);
        }

        if (config._locale.eraYearOrdinalParse) {
            array[YEAR] = config._locale.eraYearOrdinalParse(input, match);
        } else {
            array[YEAR] = parseInt(input, 10);
        }
    });

    function localeEras(m, format) {
        var i,
            l,
            date,
            eras = this._eras || getLocale('en')._eras;
        for (i = 0, l = eras.length; i < l; ++i) {
            switch (typeof eras[i].since) {
                case 'string':
                    // truncate time
                    date = hooks(eras[i].since).startOf('day');
                    eras[i].since = date.valueOf();
                    break;
            }

            switch (typeof eras[i].until) {
                case 'undefined':
                    eras[i].until = +Infinity;
                    break;
                case 'string':
                    // truncate time
                    date = hooks(eras[i].until).startOf('day').valueOf();
                    eras[i].until = date.valueOf();
                    break;
            }
        }
        return eras;
    }

    function localeErasParse(eraName, format, strict) {
        var i,
            l,
            eras = this.eras(),
            name,
            abbr,
            narrow;
        eraName = eraName.toUpperCase();

        for (i = 0, l = eras.length; i < l; ++i) {
            name = eras[i].name.toUpperCase();
            abbr = eras[i].abbr.toUpperCase();
            narrow = eras[i].narrow.toUpperCase();

            if (strict) {
                switch (format) {
                    case 'N':
                    case 'NN':
                    case 'NNN':
                        if (abbr === eraName) {
                            return eras[i];
                        }
                        break;

                    case 'NNNN':
                        if (name === eraName) {
                            return eras[i];
                        }
                        break;

                    case 'NNNNN':
                        if (narrow === eraName) {
                            return eras[i];
                        }
                        break;
                }
            } else if ([name, abbr, narrow].indexOf(eraName) >= 0) {
                return eras[i];
            }
        }
    }

    function localeErasConvertYear(era, year) {
        var dir = era.since <= era.until ? +1 : -1;
        if (year === undefined) {
            return hooks(era.since).year();
        } else {
            return hooks(era.since).year() + (year - era.offset) * dir;
        }
    }

    function getEraName() {
        var i,
            l,
            val,
            eras = this.localeData().eras();
        for (i = 0, l = eras.length; i < l; ++i) {
            // truncate time
            val = this.clone().startOf('day').valueOf();

            if (eras[i].since <= val && val <= eras[i].until) {
                return eras[i].name;
            }
            if (eras[i].until <= val && val <= eras[i].since) {
                return eras[i].name;
            }
        }

        return '';
    }

    function getEraNarrow() {
        var i,
            l,
            val,
            eras = this.localeData().eras();
        for (i = 0, l = eras.length; i < l; ++i) {
            // truncate time
            val = this.clone().startOf('day').valueOf();

            if (eras[i].since <= val && val <= eras[i].until) {
                return eras[i].narrow;
            }
            if (eras[i].until <= val && val <= eras[i].since) {
                return eras[i].narrow;
            }
        }

        return '';
    }

    function getEraAbbr() {
        var i,
            l,
            val,
            eras = this.localeData().eras();
        for (i = 0, l = eras.length; i < l; ++i) {
            // truncate time
            val = this.clone().startOf('day').valueOf();

            if (eras[i].since <= val && val <= eras[i].until) {
                return eras[i].abbr;
            }
            if (eras[i].until <= val && val <= eras[i].since) {
                return eras[i].abbr;
            }
        }

        return '';
    }

    function getEraYear() {
        var i,
            l,
            dir,
            val,
            eras = this.localeData().eras();
        for (i = 0, l = eras.length; i < l; ++i) {
            dir = eras[i].since <= eras[i].until ? +1 : -1;

            // truncate time
            val = this.clone().startOf('day').valueOf();

            if (
                (eras[i].since <= val && val <= eras[i].until) ||
                (eras[i].until <= val && val <= eras[i].since)
            ) {
                return (
                    (this.year() - hooks(eras[i].since).year()) * dir +
                    eras[i].offset
                );
            }
        }

        return this.year();
    }

    function erasNameRegex(isStrict) {
        if (!hasOwnProp(this, '_erasNameRegex')) {
            computeErasParse.call(this);
        }
        return isStrict ? this._erasNameRegex : this._erasRegex;
    }

    function erasAbbrRegex(isStrict) {
        if (!hasOwnProp(this, '_erasAbbrRegex')) {
            computeErasParse.call(this);
        }
        return isStrict ? this._erasAbbrRegex : this._erasRegex;
    }

    function erasNarrowRegex(isStrict) {
        if (!hasOwnProp(this, '_erasNarrowRegex')) {
            computeErasParse.call(this);
        }
        return isStrict ? this._erasNarrowRegex : this._erasRegex;
    }

    function matchEraAbbr(isStrict, locale) {
        return locale.erasAbbrRegex(isStrict);
    }

    function matchEraName(isStrict, locale) {
        return locale.erasNameRegex(isStrict);
    }

    function matchEraNarrow(isStrict, locale) {
        return locale.erasNarrowRegex(isStrict);
    }

    function matchEraYearOrdinal(isStrict, locale) {
        return locale._eraYearOrdinalRegex || matchUnsigned;
    }

    function computeErasParse() {
        var abbrPieces = [],
            namePieces = [],
            narrowPieces = [],
            mixedPieces = [],
            i,
            l,
            eras = this.eras();

        for (i = 0, l = eras.length; i < l; ++i) {
            namePieces.push(regexEscape(eras[i].name));
            abbrPieces.push(regexEscape(eras[i].abbr));
            narrowPieces.push(regexEscape(eras[i].narrow));

            mixedPieces.push(regexEscape(eras[i].name));
            mixedPieces.push(regexEscape(eras[i].abbr));
            mixedPieces.push(regexEscape(eras[i].narrow));
        }

        this._erasRegex = new RegExp('^(' + mixedPieces.join('|') + ')', 'i');
        this._erasNameRegex = new RegExp('^(' + namePieces.join('|') + ')', 'i');
        this._erasAbbrRegex = new RegExp('^(' + abbrPieces.join('|') + ')', 'i');
        this._erasNarrowRegex = new RegExp(
            '^(' + narrowPieces.join('|') + ')',
            'i'
        );
    }

    // FORMATTING

    addFormatToken(0, ['gg', 2], 0, function () {
        return this.weekYear() % 100;
    });

    addFormatToken(0, ['GG', 2], 0, function () {
        return this.isoWeekYear() % 100;
    });

    function addWeekYearFormatToken(token, getter) {
        addFormatToken(0, [token, token.length], 0, getter);
    }

    addWeekYearFormatToken('gggg', 'weekYear');
    addWeekYearFormatToken('ggggg', 'weekYear');
    addWeekYearFormatToken('GGGG', 'isoWeekYear');
    addWeekYearFormatToken('GGGGG', 'isoWeekYear');

    // ALIASES

    addUnitAlias('weekYear', 'gg');
    addUnitAlias('isoWeekYear', 'GG');

    // PRIORITY

    addUnitPriority('weekYear', 1);
    addUnitPriority('isoWeekYear', 1);

    // PARSING

    addRegexToken('G', matchSigned);
    addRegexToken('g', matchSigned);
    addRegexToken('GG', match1to2, match2);
    addRegexToken('gg', match1to2, match2);
    addRegexToken('GGGG', match1to4, match4);
    addRegexToken('gggg', match1to4, match4);
    addRegexToken('GGGGG', match1to6, match6);
    addRegexToken('ggggg', match1to6, match6);

    addWeekParseToken(
        ['gggg', 'ggggg', 'GGGG', 'GGGGG'],
        function (input, week, config, token) {
            week[token.substr(0, 2)] = toInt(input);
        }
    );

    addWeekParseToken(['gg', 'GG'], function (input, week, config, token) {
        week[token] = hooks.parseTwoDigitYear(input);
    });

    // MOMENTS

    function getSetWeekYear(input) {
        return getSetWeekYearHelper.call(
            this,
            input,
            this.week(),
            this.weekday(),
            this.localeData()._week.dow,
            this.localeData()._week.doy
        );
    }

    function getSetISOWeekYear(input) {
        return getSetWeekYearHelper.call(
            this,
            input,
            this.isoWeek(),
            this.isoWeekday(),
            1,
            4
        );
    }

    function getISOWeeksInYear() {
        return weeksInYear(this.year(), 1, 4);
    }

    function getISOWeeksInISOWeekYear() {
        return weeksInYear(this.isoWeekYear(), 1, 4);
    }

    function getWeeksInYear() {
        var weekInfo = this.localeData()._week;
        return weeksInYear(this.year(), weekInfo.dow, weekInfo.doy);
    }

    function getWeeksInWeekYear() {
        var weekInfo = this.localeData()._week;
        return weeksInYear(this.weekYear(), weekInfo.dow, weekInfo.doy);
    }

    function getSetWeekYearHelper(input, week, weekday, dow, doy) {
        var weeksTarget;
        if (input == null) {
            return weekOfYear(this, dow, doy).year;
        } else {
            weeksTarget = weeksInYear(input, dow, doy);
            if (week > weeksTarget) {
                week = weeksTarget;
            }
            return setWeekAll.call(this, input, week, weekday, dow, doy);
        }
    }

    function setWeekAll(weekYear, week, weekday, dow, doy) {
        var dayOfYearData = dayOfYearFromWeeks(weekYear, week, weekday, dow, doy),
            date = createUTCDate(dayOfYearData.year, 0, dayOfYearData.dayOfYear);

        this.year(date.getUTCFullYear());
        this.month(date.getUTCMonth());
        this.date(date.getUTCDate());
        return this;
    }

    // FORMATTING

    addFormatToken('Q', 0, 'Qo', 'quarter');

    // ALIASES

    addUnitAlias('quarter', 'Q');

    // PRIORITY

    addUnitPriority('quarter', 7);

    // PARSING

    addRegexToken('Q', match1);
    addParseToken('Q', function (input, array) {
        array[MONTH] = (toInt(input) - 1) * 3;
    });

    // MOMENTS

    function getSetQuarter(input) {
        return input == null
            ? Math.ceil((this.month() + 1) / 3)
            : this.month((input - 1) * 3 + (this.month() % 3));
    }

    // FORMATTING

    addFormatToken('D', ['DD', 2], 'Do', 'date');

    // ALIASES

    addUnitAlias('date', 'D');

    // PRIORITY
    addUnitPriority('date', 9);

    // PARSING

    addRegexToken('D', match1to2);
    addRegexToken('DD', match1to2, match2);
    addRegexToken('Do', function (isStrict, locale) {
        // TODO: Remove "ordinalParse" fallback in next major release.
        return isStrict
            ? locale._dayOfMonthOrdinalParse || locale._ordinalParse
            : locale._dayOfMonthOrdinalParseLenient;
    });

    addParseToken(['D', 'DD'], DATE);
    addParseToken('Do', function (input, array) {
        array[DATE] = toInt(input.match(match1to2)[0]);
    });

    // MOMENTS

    var getSetDayOfMonth = makeGetSet('Date', true);

    // FORMATTING

    addFormatToken('DDD', ['DDDD', 3], 'DDDo', 'dayOfYear');

    // ALIASES

    addUnitAlias('dayOfYear', 'DDD');

    // PRIORITY
    addUnitPriority('dayOfYear', 4);

    // PARSING

    addRegexToken('DDD', match1to3);
    addRegexToken('DDDD', match3);
    addParseToken(['DDD', 'DDDD'], function (input, array, config) {
        config._dayOfYear = toInt(input);
    });

    // HELPERS

    // MOMENTS

    function getSetDayOfYear(input) {
        var dayOfYear =
            Math.round(
                (this.clone().startOf('day') - this.clone().startOf('year')) / 864e5
            ) + 1;
        return input == null ? dayOfYear : this.add(input - dayOfYear, 'd');
    }

    // FORMATTING

    addFormatToken('m', ['mm', 2], 0, 'minute');

    // ALIASES

    addUnitAlias('minute', 'm');

    // PRIORITY

    addUnitPriority('minute', 14);

    // PARSING

    addRegexToken('m', match1to2);
    addRegexToken('mm', match1to2, match2);
    addParseToken(['m', 'mm'], MINUTE);

    // MOMENTS

    var getSetMinute = makeGetSet('Minutes', false);

    // FORMATTING

    addFormatToken('s', ['ss', 2], 0, 'second');

    // ALIASES

    addUnitAlias('second', 's');

    // PRIORITY

    addUnitPriority('second', 15);

    // PARSING

    addRegexToken('s', match1to2);
    addRegexToken('ss', match1to2, match2);
    addParseToken(['s', 'ss'], SECOND);

    // MOMENTS

    var getSetSecond = makeGetSet('Seconds', false);

    // FORMATTING

    addFormatToken('S', 0, 0, function () {
        return ~~(this.millisecond() / 100);
    });

    addFormatToken(0, ['SS', 2], 0, function () {
        return ~~(this.millisecond() / 10);
    });

    addFormatToken(0, ['SSS', 3], 0, 'millisecond');
    addFormatToken(0, ['SSSS', 4], 0, function () {
        return this.millisecond() * 10;
    });
    addFormatToken(0, ['SSSSS', 5], 0, function () {
        return this.millisecond() * 100;
    });
    addFormatToken(0, ['SSSSSS', 6], 0, function () {
        return this.millisecond() * 1000;
    });
    addFormatToken(0, ['SSSSSSS', 7], 0, function () {
        return this.millisecond() * 10000;
    });
    addFormatToken(0, ['SSSSSSSS', 8], 0, function () {
        return this.millisecond() * 100000;
    });
    addFormatToken(0, ['SSSSSSSSS', 9], 0, function () {
        return this.millisecond() * 1000000;
    });

    // ALIASES

    addUnitAlias('millisecond', 'ms');

    // PRIORITY

    addUnitPriority('millisecond', 16);

    // PARSING

    addRegexToken('S', match1to3, match1);
    addRegexToken('SS', match1to3, match2);
    addRegexToken('SSS', match1to3, match3);

    var token, getSetMillisecond;
    for (token = 'SSSS'; token.length <= 9; token += 'S') {
        addRegexToken(token, matchUnsigned);
    }

    function parseMs(input, array) {
        array[MILLISECOND] = toInt(('0.' + input) * 1000);
    }

    for (token = 'S'; token.length <= 9; token += 'S') {
        addParseToken(token, parseMs);
    }

    getSetMillisecond = makeGetSet('Milliseconds', false);

    // FORMATTING

    addFormatToken('z', 0, 0, 'zoneAbbr');
    addFormatToken('zz', 0, 0, 'zoneName');

    // MOMENTS

    function getZoneAbbr() {
        return this._isUTC ? 'UTC' : '';
    }

    function getZoneName() {
        return this._isUTC ? 'Coordinated Universal Time' : '';
    }

    var proto = Moment.prototype;

    proto.add = add;
    proto.calendar = calendar$1;
    proto.clone = clone;
    proto.diff = diff;
    proto.endOf = endOf;
    proto.format = format;
    proto.from = from;
    proto.fromNow = fromNow;
    proto.to = to;
    proto.toNow = toNow;
    proto.get = stringGet;
    proto.invalidAt = invalidAt;
    proto.isAfter = isAfter;
    proto.isBefore = isBefore;
    proto.isBetween = isBetween;
    proto.isSame = isSame;
    proto.isSameOrAfter = isSameOrAfter;
    proto.isSameOrBefore = isSameOrBefore;
    proto.isValid = isValid$2;
    proto.lang = lang;
    proto.locale = locale;
    proto.localeData = localeData;
    proto.max = prototypeMax;
    proto.min = prototypeMin;
    proto.parsingFlags = parsingFlags;
    proto.set = stringSet;
    proto.startOf = startOf;
    proto.subtract = subtract;
    proto.toArray = toArray;
    proto.toObject = toObject;
    proto.toDate = toDate;
    proto.toISOString = toISOString;
    proto.inspect = inspect;
    if (typeof Symbol !== 'undefined' && Symbol.for != null) {
        proto[Symbol.for('nodejs.util.inspect.custom')] = function () {
            return 'Moment<' + this.format() + '>';
        };
    }
    proto.toJSON = toJSON;
    proto.toString = toString;
    proto.unix = unix;
    proto.valueOf = valueOf;
    proto.creationData = creationData;
    proto.eraName = getEraName;
    proto.eraNarrow = getEraNarrow;
    proto.eraAbbr = getEraAbbr;
    proto.eraYear = getEraYear;
    proto.year = getSetYear;
    proto.isLeapYear = getIsLeapYear;
    proto.weekYear = getSetWeekYear;
    proto.isoWeekYear = getSetISOWeekYear;
    proto.quarter = proto.quarters = getSetQuarter;
    proto.month = getSetMonth;
    proto.daysInMonth = getDaysInMonth;
    proto.week = proto.weeks = getSetWeek;
    proto.isoWeek = proto.isoWeeks = getSetISOWeek;
    proto.weeksInYear = getWeeksInYear;
    proto.weeksInWeekYear = getWeeksInWeekYear;
    proto.isoWeeksInYear = getISOWeeksInYear;
    proto.isoWeeksInISOWeekYear = getISOWeeksInISOWeekYear;
    proto.date = getSetDayOfMonth;
    proto.day = proto.days = getSetDayOfWeek;
    proto.weekday = getSetLocaleDayOfWeek;
    proto.isoWeekday = getSetISODayOfWeek;
    proto.dayOfYear = getSetDayOfYear;
    proto.hour = proto.hours = getSetHour;
    proto.minute = proto.minutes = getSetMinute;
    proto.second = proto.seconds = getSetSecond;
    proto.millisecond = proto.milliseconds = getSetMillisecond;
    proto.utcOffset = getSetOffset;
    proto.utc = setOffsetToUTC;
    proto.local = setOffsetToLocal;
    proto.parseZone = setOffsetToParsedOffset;
    proto.hasAlignedHourOffset = hasAlignedHourOffset;
    proto.isDST = isDaylightSavingTime;
    proto.isLocal = isLocal;
    proto.isUtcOffset = isUtcOffset;
    proto.isUtc = isUtc;
    proto.isUTC = isUtc;
    proto.zoneAbbr = getZoneAbbr;
    proto.zoneName = getZoneName;
    proto.dates = deprecate(
        'dates accessor is deprecated. Use date instead.',
        getSetDayOfMonth
    );
    proto.months = deprecate(
        'months accessor is deprecated. Use month instead',
        getSetMonth
    );
    proto.years = deprecate(
        'years accessor is deprecated. Use year instead',
        getSetYear
    );
    proto.zone = deprecate(
        'moment().zone is deprecated, use moment().utcOffset instead. http://momentjs.com/guides/#/warnings/zone/',
        getSetZone
    );
    proto.isDSTShifted = deprecate(
        'isDSTShifted is deprecated. See http://momentjs.com/guides/#/warnings/dst-shifted/ for more information',
        isDaylightSavingTimeShifted
    );

    function createUnix(input) {
        return createLocal(input * 1000);
    }

    function createInZone() {
        return createLocal.apply(null, arguments).parseZone();
    }

    function preParsePostFormat(string) {
        return string;
    }

    var proto$1 = Locale.prototype;

    proto$1.calendar = calendar;
    proto$1.longDateFormat = longDateFormat;
    proto$1.invalidDate = invalidDate;
    proto$1.ordinal = ordinal;
    proto$1.preparse = preParsePostFormat;
    proto$1.postformat = preParsePostFormat;
    proto$1.relativeTime = relativeTime;
    proto$1.pastFuture = pastFuture;
    proto$1.set = set;
    proto$1.eras = localeEras;
    proto$1.erasParse = localeErasParse;
    proto$1.erasConvertYear = localeErasConvertYear;
    proto$1.erasAbbrRegex = erasAbbrRegex;
    proto$1.erasNameRegex = erasNameRegex;
    proto$1.erasNarrowRegex = erasNarrowRegex;

    proto$1.months = localeMonths;
    proto$1.monthsShort = localeMonthsShort;
    proto$1.monthsParse = localeMonthsParse;
    proto$1.monthsRegex = monthsRegex;
    proto$1.monthsShortRegex = monthsShortRegex;
    proto$1.week = localeWeek;
    proto$1.firstDayOfYear = localeFirstDayOfYear;
    proto$1.firstDayOfWeek = localeFirstDayOfWeek;

    proto$1.weekdays = localeWeekdays;
    proto$1.weekdaysMin = localeWeekdaysMin;
    proto$1.weekdaysShort = localeWeekdaysShort;
    proto$1.weekdaysParse = localeWeekdaysParse;

    proto$1.weekdaysRegex = weekdaysRegex;
    proto$1.weekdaysShortRegex = weekdaysShortRegex;
    proto$1.weekdaysMinRegex = weekdaysMinRegex;

    proto$1.isPM = localeIsPM;
    proto$1.meridiem = localeMeridiem;

    function get$1(format, index, field, setter) {
        var locale = getLocale(),
            utc = createUTC().set(setter, index);
        return locale[field](utc, format);
    }

    function listMonthsImpl(format, index, field) {
        if (isNumber(format)) {
            index = format;
            format = undefined;
        }

        format = format || '';

        if (index != null) {
            return get$1(format, index, field, 'month');
        }

        var i,
            out = [];
        for (i = 0; i < 12; i++) {
            out[i] = get$1(format, i, field, 'month');
        }
        return out;
    }

    // ()
    // (5)
    // (fmt, 5)
    // (fmt)
    // (true)
    // (true, 5)
    // (true, fmt, 5)
    // (true, fmt)
    function listWeekdaysImpl(localeSorted, format, index, field) {
        if (typeof localeSorted === 'boolean') {
            if (isNumber(format)) {
                index = format;
                format = undefined;
            }

            format = format || '';
        } else {
            format = localeSorted;
            index = format;
            localeSorted = false;

            if (isNumber(format)) {
                index = format;
                format = undefined;
            }

            format = format || '';
        }

        var locale = getLocale(),
            shift = localeSorted ? locale._week.dow : 0,
            i,
            out = [];

        if (index != null) {
            return get$1(format, (index + shift) % 7, field, 'day');
        }

        for (i = 0; i < 7; i++) {
            out[i] = get$1(format, (i + shift) % 7, field, 'day');
        }
        return out;
    }

    function listMonths(format, index) {
        return listMonthsImpl(format, index, 'months');
    }

    function listMonthsShort(format, index) {
        return listMonthsImpl(format, index, 'monthsShort');
    }

    function listWeekdays(localeSorted, format, index) {
        return listWeekdaysImpl(localeSorted, format, index, 'weekdays');
    }

    function listWeekdaysShort(localeSorted, format, index) {
        return listWeekdaysImpl(localeSorted, format, index, 'weekdaysShort');
    }

    function listWeekdaysMin(localeSorted, format, index) {
        return listWeekdaysImpl(localeSorted, format, index, 'weekdaysMin');
    }

    getSetGlobalLocale('en', {
        eras: [
            {
                since: '0001-01-01',
                until: +Infinity,
                offset: 1,
                name: 'Anno Domini',
                narrow: 'AD',
                abbr: 'AD',
            },
            {
                since: '0000-12-31',
                until: -Infinity,
                offset: 1,
                name: 'Before Christ',
                narrow: 'BC',
                abbr: 'BC',
            },
        ],
        dayOfMonthOrdinalParse: /\d{1,2}(th|st|nd|rd)/,
        ordinal: function (number) {
            var b = number % 10,
                output =
                    toInt((number % 100) / 10) === 1
                        ? 'th'
                        : b === 1
                        ? 'st'
                        : b === 2
                        ? 'nd'
                        : b === 3
                        ? 'rd'
                        : 'th';
            return number + output;
        },
    });

    // Side effect imports

    hooks.lang = deprecate(
        'moment.lang is deprecated. Use moment.locale instead.',
        getSetGlobalLocale
    );
    hooks.langData = deprecate(
        'moment.langData is deprecated. Use moment.localeData instead.',
        getLocale
    );

    var mathAbs = Math.abs;

    function abs() {
        var data = this._data;

        this._milliseconds = mathAbs(this._milliseconds);
        this._days = mathAbs(this._days);
        this._months = mathAbs(this._months);

        data.milliseconds = mathAbs(data.milliseconds);
        data.seconds = mathAbs(data.seconds);
        data.minutes = mathAbs(data.minutes);
        data.hours = mathAbs(data.hours);
        data.months = mathAbs(data.months);
        data.years = mathAbs(data.years);

        return this;
    }

    function addSubtract$1(duration, input, value, direction) {
        var other = createDuration(input, value);

        duration._milliseconds += direction * other._milliseconds;
        duration._days += direction * other._days;
        duration._months += direction * other._months;

        return duration._bubble();
    }

    // supports only 2.0-style add(1, 's') or add(duration)
    function add$1(input, value) {
        return addSubtract$1(this, input, value, 1);
    }

    // supports only 2.0-style subtract(1, 's') or subtract(duration)
    function subtract$1(input, value) {
        return addSubtract$1(this, input, value, -1);
    }

    function absCeil(number) {
        if (number < 0) {
            return Math.floor(number);
        } else {
            return Math.ceil(number);
        }
    }

    function bubble() {
        var milliseconds = this._milliseconds,
            days = this._days,
            months = this._months,
            data = this._data,
            seconds,
            minutes,
            hours,
            years,
            monthsFromDays;

        // if we have a mix of positive and negative values, bubble down first
        // check: https://github.com/moment/moment/issues/2166
        if (
            !(
                (milliseconds >= 0 && days >= 0 && months >= 0) ||
                (milliseconds <= 0 && days <= 0 && months <= 0)
            )
        ) {
            milliseconds += absCeil(monthsToDays(months) + days) * 864e5;
            days = 0;
            months = 0;
        }

        // The following code bubbles up values, see the tests for
        // examples of what that means.
        data.milliseconds = milliseconds % 1000;

        seconds = absFloor(milliseconds / 1000);
        data.seconds = seconds % 60;

        minutes = absFloor(seconds / 60);
        data.minutes = minutes % 60;

        hours = absFloor(minutes / 60);
        data.hours = hours % 24;

        days += absFloor(hours / 24);

        // convert days to months
        monthsFromDays = absFloor(daysToMonths(days));
        months += monthsFromDays;
        days -= absCeil(monthsToDays(monthsFromDays));

        // 12 months -> 1 year
        years = absFloor(months / 12);
        months %= 12;

        data.days = days;
        data.months = months;
        data.years = years;

        return this;
    }

    function daysToMonths(days) {
        // 400 years have 146097 days (taking into account leap year rules)
        // 400 years have 12 months === 4800
        return (days * 4800) / 146097;
    }

    function monthsToDays(months) {
        // the reverse of daysToMonths
        return (months * 146097) / 4800;
    }

    function as(units) {
        if (!this.isValid()) {
            return NaN;
        }
        var days,
            months,
            milliseconds = this._milliseconds;

        units = normalizeUnits(units);

        if (units === 'month' || units === 'quarter' || units === 'year') {
            days = this._days + milliseconds / 864e5;
            months = this._months + daysToMonths(days);
            switch (units) {
                case 'month':
                    return months;
                case 'quarter':
                    return months / 3;
                case 'year':
                    return months / 12;
            }
        } else {
            // handle milliseconds separately because of floating point math errors (issue #1867)
            days = this._days + Math.round(monthsToDays(this._months));
            switch (units) {
                case 'week':
                    return days / 7 + milliseconds / 6048e5;
                case 'day':
                    return days + milliseconds / 864e5;
                case 'hour':
                    return days * 24 + milliseconds / 36e5;
                case 'minute':
                    return days * 1440 + milliseconds / 6e4;
                case 'second':
                    return days * 86400 + milliseconds / 1000;
                // Math.floor prevents floating point math errors here
                case 'millisecond':
                    return Math.floor(days * 864e5) + milliseconds;
                default:
                    throw new Error('Unknown unit ' + units);
            }
        }
    }

    // TODO: Use this.as('ms')?
    function valueOf$1() {
        if (!this.isValid()) {
            return NaN;
        }
        return (
            this._milliseconds +
            this._days * 864e5 +
            (this._months % 12) * 2592e6 +
            toInt(this._months / 12) * 31536e6
        );
    }

    function makeAs(alias) {
        return function () {
            return this.as(alias);
        };
    }

    var asMilliseconds = makeAs('ms'),
        asSeconds = makeAs('s'),
        asMinutes = makeAs('m'),
        asHours = makeAs('h'),
        asDays = makeAs('d'),
        asWeeks = makeAs('w'),
        asMonths = makeAs('M'),
        asQuarters = makeAs('Q'),
        asYears = makeAs('y');

    function clone$1() {
        return createDuration(this);
    }

    function get$2(units) {
        units = normalizeUnits(units);
        return this.isValid() ? this[units + 's']() : NaN;
    }

    function makeGetter(name) {
        return function () {
            return this.isValid() ? this._data[name] : NaN;
        };
    }

    var milliseconds = makeGetter('milliseconds'),
        seconds = makeGetter('seconds'),
        minutes = makeGetter('minutes'),
        hours = makeGetter('hours'),
        days = makeGetter('days'),
        months = makeGetter('months'),
        years = makeGetter('years');

    function weeks() {
        return absFloor(this.days() / 7);
    }

    var round = Math.round,
        thresholds = {
            ss: 44, // a few seconds to seconds
            s: 45, // seconds to minute
            m: 45, // minutes to hour
            h: 22, // hours to day
            d: 26, // days to month/week
            w: null, // weeks to month
            M: 11, // months to year
        };

    // helper function for moment.fn.from, moment.fn.fromNow, and moment.duration.fn.humanize
    function substituteTimeAgo(string, number, withoutSuffix, isFuture, locale) {
        return locale.relativeTime(number || 1, !!withoutSuffix, string, isFuture);
    }

    function relativeTime$1(posNegDuration, withoutSuffix, thresholds, locale) {
        var duration = createDuration(posNegDuration).abs(),
            seconds = round(duration.as('s')),
            minutes = round(duration.as('m')),
            hours = round(duration.as('h')),
            days = round(duration.as('d')),
            months = round(duration.as('M')),
            weeks = round(duration.as('w')),
            years = round(duration.as('y')),
            a =
                (seconds <= thresholds.ss && ['s', seconds]) ||
                (seconds < thresholds.s && ['ss', seconds]) ||
                (minutes <= 1 && ['m']) ||
                (minutes < thresholds.m && ['mm', minutes]) ||
                (hours <= 1 && ['h']) ||
                (hours < thresholds.h && ['hh', hours]) ||
                (days <= 1 && ['d']) ||
                (days < thresholds.d && ['dd', days]);

        if (thresholds.w != null) {
            a =
                a ||
                (weeks <= 1 && ['w']) ||
                (weeks < thresholds.w && ['ww', weeks]);
        }
        a = a ||
            (months <= 1 && ['M']) ||
            (months < thresholds.M && ['MM', months]) ||
            (years <= 1 && ['y']) || ['yy', years];

        a[2] = withoutSuffix;
        a[3] = +posNegDuration > 0;
        a[4] = locale;
        return substituteTimeAgo.apply(null, a);
    }

    // This function allows you to set the rounding function for relative time strings
    function getSetRelativeTimeRounding(roundingFunction) {
        if (roundingFunction === undefined) {
            return round;
        }
        if (typeof roundingFunction === 'function') {
            round = roundingFunction;
            return true;
        }
        return false;
    }

    // This function allows you to set a threshold for relative time strings
    function getSetRelativeTimeThreshold(threshold, limit) {
        if (thresholds[threshold] === undefined) {
            return false;
        }
        if (limit === undefined) {
            return thresholds[threshold];
        }
        thresholds[threshold] = limit;
        if (threshold === 's') {
            thresholds.ss = limit - 1;
        }
        return true;
    }

    function humanize(argWithSuffix, argThresholds) {
        if (!this.isValid()) {
            return this.localeData().invalidDate();
        }

        var withSuffix = false,
            th = thresholds,
            locale,
            output;

        if (typeof argWithSuffix === 'object') {
            argThresholds = argWithSuffix;
            argWithSuffix = false;
        }
        if (typeof argWithSuffix === 'boolean') {
            withSuffix = argWithSuffix;
        }
        if (typeof argThresholds === 'object') {
            th = Object.assign({}, thresholds, argThresholds);
            if (argThresholds.s != null && argThresholds.ss == null) {
                th.ss = argThresholds.s - 1;
            }
        }

        locale = this.localeData();
        output = relativeTime$1(this, !withSuffix, th, locale);

        if (withSuffix) {
            output = locale.pastFuture(+this, output);
        }

        return locale.postformat(output);
    }

    var abs$1 = Math.abs;

    function sign(x) {
        return (x > 0) - (x < 0) || +x;
    }

    function toISOString$1() {
        // for ISO strings we do not use the normal bubbling rules:
        //  * milliseconds bubble up until they become hours
        //  * days do not bubble at all
        //  * months bubble up until they become years
        // This is because there is no context-free conversion between hours and days
        // (think of clock changes)
        // and also not between days and months (28-31 days per month)
        if (!this.isValid()) {
            return this.localeData().invalidDate();
        }

        var seconds = abs$1(this._milliseconds) / 1000,
            days = abs$1(this._days),
            months = abs$1(this._months),
            minutes,
            hours,
            years,
            s,
            total = this.asSeconds(),
            totalSign,
            ymSign,
            daysSign,
            hmsSign;

        if (!total) {
            // this is the same as C#'s (Noda) and python (isodate)...
            // but not other JS (goog.date)
            return 'P0D';
        }

        // 3600 seconds -> 60 minutes -> 1 hour
        minutes = absFloor(seconds / 60);
        hours = absFloor(minutes / 60);
        seconds %= 60;
        minutes %= 60;

        // 12 months -> 1 year
        years = absFloor(months / 12);
        months %= 12;

        // inspired by https://github.com/dordille/moment-isoduration/blob/master/moment.isoduration.js
        s = seconds ? seconds.toFixed(3).replace(/\.?0+$/, '') : '';

        totalSign = total < 0 ? '-' : '';
        ymSign = sign(this._months) !== sign(total) ? '-' : '';
        daysSign = sign(this._days) !== sign(total) ? '-' : '';
        hmsSign = sign(this._milliseconds) !== sign(total) ? '-' : '';

        return (
            totalSign +
            'P' +
            (years ? ymSign + years + 'Y' : '') +
            (months ? ymSign + months + 'M' : '') +
            (days ? daysSign + days + 'D' : '') +
            (hours || minutes || seconds ? 'T' : '') +
            (hours ? hmsSign + hours + 'H' : '') +
            (minutes ? hmsSign + minutes + 'M' : '') +
            (seconds ? hmsSign + s + 'S' : '')
        );
    }

    var proto$2 = Duration.prototype;

    proto$2.isValid = isValid$1;
    proto$2.abs = abs;
    proto$2.add = add$1;
    proto$2.subtract = subtract$1;
    proto$2.as = as;
    proto$2.asMilliseconds = asMilliseconds;
    proto$2.asSeconds = asSeconds;
    proto$2.asMinutes = asMinutes;
    proto$2.asHours = asHours;
    proto$2.asDays = asDays;
    proto$2.asWeeks = asWeeks;
    proto$2.asMonths = asMonths;
    proto$2.asQuarters = asQuarters;
    proto$2.asYears = asYears;
    proto$2.valueOf = valueOf$1;
    proto$2._bubble = bubble;
    proto$2.clone = clone$1;
    proto$2.get = get$2;
    proto$2.milliseconds = milliseconds;
    proto$2.seconds = seconds;
    proto$2.minutes = minutes;
    proto$2.hours = hours;
    proto$2.days = days;
    proto$2.weeks = weeks;
    proto$2.months = months;
    proto$2.years = years;
    proto$2.humanize = humanize;
    proto$2.toISOString = toISOString$1;
    proto$2.toString = toISOString$1;
    proto$2.toJSON = toISOString$1;
    proto$2.locale = locale;
    proto$2.localeData = localeData;

    proto$2.toIsoString = deprecate(
        'toIsoString() is deprecated. Please use toISOString() instead (notice the capitals)',
        toISOString$1
    );
    proto$2.lang = lang;

    // FORMATTING

    addFormatToken('X', 0, 0, 'unix');
    addFormatToken('x', 0, 0, 'valueOf');

    // PARSING

    addRegexToken('x', matchSigned);
    addRegexToken('X', matchTimestamp);
    addParseToken('X', function (input, array, config) {
        config._d = new Date(parseFloat(input) * 1000);
    });
    addParseToken('x', function (input, array, config) {
        config._d = new Date(toInt(input));
    });

    //! moment.js

    hooks.version = '2.29.4';

    setHookCallback(createLocal);

    hooks.fn = proto;
    hooks.min = min;
    hooks.max = max;
    hooks.now = now;
    hooks.utc = createUTC;
    hooks.unix = createUnix;
    hooks.months = listMonths;
    hooks.isDate = isDate;
    hooks.locale = getSetGlobalLocale;
    hooks.invalid = createInvalid;
    hooks.duration = createDuration;
    hooks.isMoment = isMoment;
    hooks.weekdays = listWeekdays;
    hooks.parseZone = createInZone;
    hooks.localeData = getLocale;
    hooks.isDuration = isDuration;
    hooks.monthsShort = listMonthsShort;
    hooks.weekdaysMin = listWeekdaysMin;
    hooks.defineLocale = defineLocale;
    hooks.updateLocale = updateLocale;
    hooks.locales = listLocales;
    hooks.weekdaysShort = listWeekdaysShort;
    hooks.normalizeUnits = normalizeUnits;
    hooks.relativeTimeRounding = getSetRelativeTimeRounding;
    hooks.relativeTimeThreshold = getSetRelativeTimeThreshold;
    hooks.calendarFormat = getCalendarFormat;
    hooks.prototype = proto;

    // currently HTML5 input type only supports 24-hour formats
    hooks.HTML5_FMT = {
        DATETIME_LOCAL: 'YYYY-MM-DDTHH:mm', // <input type="datetime-local" />
        DATETIME_LOCAL_SECONDS: 'YYYY-MM-DDTHH:mm:ss', // <input type="datetime-local" step="1" />
        DATETIME_LOCAL_MS: 'YYYY-MM-DDTHH:mm:ss.SSS', // <input type="datetime-local" step="0.001" />
        DATE: 'YYYY-MM-DD', // <input type="date" />
        TIME: 'HH:mm', // <input type="time" />
        TIME_SECONDS: 'HH:mm:ss', // <input type="time" step="1" />
        TIME_MS: 'HH:mm:ss.SSS', // <input type="time" step="0.001" />
        WEEK: 'GGGG-[W]WW', // <input type="week" />
        MONTH: 'YYYY-MM', // <input type="month" />
    };

    return hooks;

})));
});

var SettingDate = function SettingDate(_ref) {
  var id = _ref.id,
      questionGroupId = _ref.questionGroupId,
      _ref$rule = _ref.rule,
      rule = _ref$rule === void 0 ? {
    minDate: null,
    maxDate: null
  } : _ref$rule;
  var namePreffix = "question-" + id;
  var UIText = UIStore.useState(function (s) {
    return s.UIText;
  });
  var minDate = rule === null || rule === void 0 ? void 0 : rule.minDate;
  var maxDate = rule === null || rule === void 0 ? void 0 : rule.maxDate;
  var moreDateSettings = [{
    label: UIText.inputQuestionAfterDateValueLabel,
    value: minDate,
    key: 'minDate',
    disabledDate: function disabledDate(current) {
      return current && maxDate && current >= moment(maxDate);
    }
  }, {
    label: UIText.inputQuestionBeforeDateValueLabel,
    value: maxDate,
    key: 'maxDate',
    disabledDate: function disabledDate(current) {
      return current && minDate && current <= moment(minDate);
    }
  }];

  var handleChangeAfterBefore = function handleChangeAfterBefore(name, value) {
    questionGroupFn.store.update(function (s) {
      s.questionGroups = s.questionGroups.map(function (qg) {
        if (qg.id === questionGroupId) {
          var questions = qg.questions.map(function (q) {
            if (q.id === id) {
              var _q$rule;

              if (value) {
                var _extends2;

                return _extends({}, q, {
                  rule: _extends({}, q === null || q === void 0 ? void 0 : q.rule, (_extends2 = {}, _extends2[name] = moment(value).format('YYYY-MM-DD'), _extends2))
                });
              }

              if (!value && q !== null && q !== void 0 && (_q$rule = q.rule) !== null && _q$rule !== void 0 && _q$rule[name]) {
                delete q.rule[name];

                if (isEmpty(q.rule)) {
                  delete q.rule;
                }
              }
            }

            return q;
          });
          return _extends({}, qg, {
            questions: questions
          });
        }

        return qg;
      });
    });
  };

  return /*#__PURE__*/React__default.createElement("div", null, /*#__PURE__*/React__default.createElement("p", {
    className: styles['more-question-setting-text']
  }, UIText.questionMoreInputDateSettingText), /*#__PURE__*/React__default.createElement(antd.Row, {
    align: "middle",
    gutter: [24, 24]
  }, moreDateSettings.map(function (x) {
    return /*#__PURE__*/React__default.createElement(antd.Col, {
      key: namePreffix + "-" + x.key,
      span: 8
    }, /*#__PURE__*/React__default.createElement(antd.Form.Item, {
      label: x.label,
      initialValue: x.value ? moment(x.value) : null,
      name: namePreffix + "-" + x.key
    }, /*#__PURE__*/React__default.createElement(antd.DatePicker, {
      disabledDate: x.disabledDate,
      style: {
        width: '100%'
      },
      onChange: function onChange(e) {
        return handleChangeAfterBefore(x.key, e);
      }
    })));
  })));
};

var generateColumnName = function generateColumnName(text) {
  return text.trim().toLowerCase().split(' ').join('_');
};

var columnType = {
  input: 'input',
  number: 'number',
  option: 'option',
  text: 'text'
};

var defaultColumns = function defaultColumns(_ref) {
  var _ref$init = _ref.init,
      init = _ref$init === void 0 ? false : _ref$init;
  var column = {
    name: null,
    label: null,
    type: null
  };

  if (init) {
    return [_extends({}, column, {
      id: generateId()
    })];
  }

  return _extends({}, column, {
    id: generateId()
  });
};

var defaultColumnOptions = function defaultColumnOptions(_ref2) {
  var _ref2$init = _ref2.init,
      init = _ref2$init === void 0 ? false : _ref2$init,
      _ref2$order = _ref2.order,
      order = _ref2$order === void 0 ? 0 : _ref2$order;
  var option = {
    name: 'New Option',
    order: 1
  };

  if (init) {
    return [_extends({}, option, {
      id: generateId()
    })];
  }

  return _extends({}, option, {
    id: generateId(),
    order: order
  });
};

var SettingTable = function SettingTable(_ref3) {
  var id = _ref3.id,
      questionGroupId = _ref3.questionGroupId,
      initialColumns = _ref3.columns;
  var namePreffix = "question-" + id;
  var UIText = UIStore.useState(function (s) {
    return s.UIText;
  });

  var _useState = React.useState(initialColumns !== null && initialColumns !== void 0 && initialColumns.length ? initialColumns.map(function (cl, cli) {
    var _cl$options;

    if (cl !== null && cl !== void 0 && cl.options && cl !== null && cl !== void 0 && (_cl$options = cl.options) !== null && _cl$options !== void 0 && _cl$options.length) {
      var options = cl.options.map(function (op, opi) {
        return _extends({}, op, {
          id: (op === null || op === void 0 ? void 0 : op.id) || generateId() + initialColumns.length + opi + 1
        });
      });
      return _extends({}, cl, {
        id: (cl === null || cl === void 0 ? void 0 : cl.id) || generateId() + cli,
        options: options
      });
    }

    return _extends({}, cl, {
      id: (cl === null || cl === void 0 ? void 0 : cl.id) || generateId() + cli
    });
  }) : defaultColumns({
    init: true
  })),
      columns = _useState[0],
      setColumns = _useState[1];

  var columnTypeOptions = Object.keys(columnType).map(function (key) {
    return {
      label: columnType[key],
      value: key
    };
  });
  React.useEffect(function () {
    questionGroupFn.store.update(function (s) {
      s.questionGroups = s.questionGroups.map(function (qg) {
        if (qg.id === questionGroupId) {
          var questions = qg.questions.map(function (q) {
            if (q.id === id) {
              return _extends({}, q, {
                columns: columns
              });
            }

            return q;
          });
          return _extends({}, qg, {
            questions: questions
          });
        }

        return qg;
      });
    });
  }, [id, questionGroupId, columns]);
  var updateColumns = React.useCallback(function (columnId, obj) {
    var updatedColumn = columns.map(function (cl) {
      if (cl.id === columnId) {
        return _extends({}, cl, obj);
      }

      return cl;
    });
    setColumns(updatedColumn);
  }, [columns]);

  var handleChangeColumnName = function handleChangeColumnName(columnId, value) {
    updateColumns(columnId, {
      name: generateColumnName(value),
      label: value
    });
  };

  var handleChangeColumnType = function handleChangeColumnType(columnId, value) {
    var obj = {
      type: value
    };

    if (value === columnType.option) {
      obj = _extends({}, obj, {
        options: defaultColumnOptions({
          init: true
        })
      });
    }

    updateColumns(columnId, obj);
  };

  var handleAddColumn = function handleAddColumn() {
    var addColumns = [].concat(columns, [defaultColumns({
      init: false
    })]);
    setColumns(addColumns);
  };

  var handleDeleteColumn = function handleDeleteColumn(currentColumn) {
    var updatedColumn = columns.filter(function (cl) {
      return cl.id !== currentColumn.id;
    });
    setColumns(updatedColumn);
  };

  var handleOnAddOption = function handleOnAddOption(currentColumn, currentOption) {
    var columnId = currentColumn.id,
        options = currentColumn.options;
    var currentOrder = currentOption.order;
    var lastOrder = lodash.takeRight(lodash.orderBy(options, 'order'))[0].order;
    var reorderOptions = options.map(function (opt) {
      var order = opt.order;

      if (opt.order > currentOrder) {
        order = order + 1;
      }

      if (opt.order < currentOrder && opt.order !== 1 && currentOrder !== lastOrder) {
        order = order - 1;
      }

      return _extends({}, opt, {
        order: order
      });
    });
    var addOptions = [].concat(reorderOptions, [defaultColumnOptions({
      order: currentOrder + 1
    })]);
    updateColumns(columnId, {
      options: addOptions
    });
  };

  var handleOnMoveOption = function handleOnMoveOption(currentColumn, currentOption, targetOrder) {
    var columnId = currentColumn.id,
        options = currentColumn.options;
    var currentOrder = currentOption.order;
    var prevOptions = options.filter(function (opt) {
      return opt.order !== currentOrder && opt.order !== targetOrder;
    });
    var currentOptions = options.filter(function (opt) {
      return opt.order === currentOrder;
    }).map(function (opt) {
      return _extends({}, opt, {
        order: targetOrder
      });
    });
    var targetOptions = options.filter(function (opt) {
      return opt.order === targetOrder;
    }).map(function (opt) {
      return _extends({}, opt, {
        order: currentOrder
      });
    });
    updateColumns(columnId, {
      options: lodash.orderBy([].concat(prevOptions, currentOptions, targetOptions), 'order')
    });
  };

  var handleOnDeleteOption = function handleOnDeleteOption(currentColumn, currentOptionId) {
    var columnId = currentColumn.id,
        options = currentColumn.options;
    updateColumns(columnId, {
      options: lodash.orderBy(options, 'order').filter(function (opt) {
        return opt.id !== currentOptionId;
      }).map(function (opt, opti) {
        return _extends({}, opt, {
          order: opti + 1
        });
      })
    });
  };

  var handleOnChangeOption = function handleOnChangeOption(currentColumn, currentOption, value) {
    var columnId = currentColumn.id,
        options = currentColumn.options;
    var currentOptId = currentOption.id;
    var updatedOptions = options.map(function (op) {
      if (op.id === currentOptId) {
        return _extends({}, op, {
          name: value
        });
      }

      return op;
    });
    updateColumns(columnId, {
      options: updatedOptions
    });
  };

  return /*#__PURE__*/React__default.createElement("div", {
    className: styles['more-question-setting-text']
  }, /*#__PURE__*/React__default.createElement("p", null, UIText.questionMoreTableTypeSettingText), columns.map(function (cl, cli) {
    var _cl$options2;

    return /*#__PURE__*/React__default.createElement(antd.Card, {
      key: "column-" + id + "-" + cli + "-" + cl.id,
      title: /*#__PURE__*/React__default.createElement(antd.Row, {
        gutter: [24, 24],
        align: "middle",
        justify: "space-between"
      }, /*#__PURE__*/React__default.createElement(antd.Col, {
        span: 20
      }, "Column - " + (cli + 1)), /*#__PURE__*/React__default.createElement(antd.Col, {
        span: 4,
        align: "end"
      }, /*#__PURE__*/React__default.createElement(antd.Space, null, /*#__PURE__*/React__default.createElement(antd.Button, {
        type: "link",
        className: styles['button-icon'],
        icon: /*#__PURE__*/React__default.createElement(md.MdOutlineAddCircleOutline, null),
        onClick: function onClick() {
          return handleAddColumn();
        }
      }), /*#__PURE__*/React__default.createElement(antd.Button, {
        type: "link",
        className: styles['button-icon'],
        icon: /*#__PURE__*/React__default.createElement(md.MdOutlineRemoveCircleOutline, null),
        onClick: function onClick() {
          return handleDeleteColumn(cl);
        },
        disabled: columns.length === 1
      }))))
    }, /*#__PURE__*/React__default.createElement(antd.Row, {
      gutter: [24, 20]
    }, /*#__PURE__*/React__default.createElement(antd.Col, {
      span: 12
    }, /*#__PURE__*/React__default.createElement(antd.Form.Item, {
      name: namePreffix + "-column_name_" + cl.id,
      className: styles['form-item-no-bottom-margin'],
      label: UIText.inputColumnNameLabel,
      initialValue: cl.label
    }, /*#__PURE__*/React__default.createElement(antd.Input, {
      allowClear: true,
      onChange: function onChange(e) {
        var _e$target;

        return handleChangeColumnName(cl.id, e === null || e === void 0 ? void 0 : (_e$target = e.target) === null || _e$target === void 0 ? void 0 : _e$target.value);
      }
    }))), /*#__PURE__*/React__default.createElement(antd.Col, {
      span: 12
    }, /*#__PURE__*/React__default.createElement(antd.Form.Item, {
      name: namePreffix + "-column_type_" + cl.id,
      className: styles['form-item-no-bottom-margin'],
      label: UIText.inputColumnTypeLabel,
      initialValue: cl.type
    }, /*#__PURE__*/React__default.createElement(antd.Select, {
      showSearch: true,
      optionFilterProp: "label",
      options: columnTypeOptions,
      getPopupContainer: function getPopupContainer(triggerNode) {
        return triggerNode.parentElement;
      },
      onChange: function onChange(val) {
        return handleChangeColumnType(cl.id, val);
      }
    }))), /*#__PURE__*/React__default.createElement(antd.Col, {
      span: 24
    }, cl.type === columnType.option && /*#__PURE__*/React__default.createElement("div", null, /*#__PURE__*/React__default.createElement("p", null, UIText.questionTableTypeDefineOptionsText), cl === null || cl === void 0 ? void 0 : (_cl$options2 = cl.options) === null || _cl$options2 === void 0 ? void 0 : _cl$options2.map(function (op, opi) {
      return /*#__PURE__*/React__default.createElement(antd.Row, {
        key: "option-" + id + "-" + opi + "-" + op.id,
        gutter: [24, 24]
      }, /*#__PURE__*/React__default.createElement(antd.Col, {
        span: 12
      }, /*#__PURE__*/React__default.createElement(antd.Form.Item, {
        initialValue: op.name,
        name: namePreffix + "-option_name_" + op.id + "_" + cl.id
      }, /*#__PURE__*/React__default.createElement(antd.Input, {
        allowClear: true,
        onChange: function onChange(e) {
          var _e$target2;

          return handleOnChangeOption(cl, op, e === null || e === void 0 ? void 0 : (_e$target2 = e.target) === null || _e$target2 === void 0 ? void 0 : _e$target2.value);
        }
      }))), /*#__PURE__*/React__default.createElement(antd.Col, null, /*#__PURE__*/React__default.createElement(antd.Space, null, /*#__PURE__*/React__default.createElement(antd.Button, {
        type: "link",
        className: styles['button-icon'],
        icon: /*#__PURE__*/React__default.createElement(md.MdOutlineAddCircleOutline, null),
        onClick: function onClick() {
          return handleOnAddOption(cl, op);
        }
      }), /*#__PURE__*/React__default.createElement(antd.Button, {
        type: "link",
        className: styles['button-icon'],
        icon: /*#__PURE__*/React__default.createElement(md.MdOutlineArrowCircleUp, null),
        onClick: function onClick() {
          return handleOnMoveOption(cl, op, op.order - 1);
        },
        disabled: opi === 0
      }), /*#__PURE__*/React__default.createElement(antd.Button, {
        type: "link",
        className: styles['button-icon'],
        icon: /*#__PURE__*/React__default.createElement(md.MdOutlineArrowCircleDown, null),
        onClick: function onClick() {
          return handleOnMoveOption(cl, op, op.order + 1);
        },
        disabled: opi === cl.options.length - 1
      }), /*#__PURE__*/React__default.createElement(antd.Button, {
        type: "link",
        className: styles['button-icon'],
        icon: /*#__PURE__*/React__default.createElement(md.MdOutlineRemoveCircleOutline, null),
        onClick: function onClick() {
          return handleOnDeleteOption(cl, op.id);
        },
        disabled: cl.options.length === 1
      }))));
    })))));
  }));
};

var SettingImage = function SettingImage(_ref) {
  var id = _ref.id,
      questionGroupId = _ref.questionGroupId,
      limit = _ref.limit;
  var namePreffix = "question-" + id;
  var UIText = UIStore.useState(function (s) {
    return s.UIText;
  });

  var updateState = function updateState(name, value) {
    questionGroupFn.store.update(function (s) {
      s.questionGroups = s.questionGroups.map(function (qg) {
        if (qg.id === questionGroupId) {
          var questions = qg.questions.map(function (q) {
            if (q.id === id) {
              var _extends2;

              return _extends({}, q, (_extends2 = {}, _extends2[name] = value, _extends2));
            }

            return q;
          });
          return _extends({}, qg, {
            questions: questions
          });
        }

        return qg;
      });
    });
  };

  var handleOnLimit = function handleOnLimit(value) {
    updateState('limit', value);
  };

  return /*#__PURE__*/React__default.createElement("div", null, /*#__PURE__*/React__default.createElement("p", {
    className: styles['more-question-setting-text']
  }, UIText.questionMoreImageTypeSettingText), /*#__PURE__*/React__default.createElement(antd.Row, {
    align: "middle",
    gutter: [24, 24]
  }, /*#__PURE__*/React__default.createElement(antd.Col, {
    span: 8
  }, /*#__PURE__*/React__default.createElement(antd.Form.Item, {
    label: UIText.inputQuestionImageLimitValidationText,
    name: namePreffix + "-limit_file_size"
  }, /*#__PURE__*/React__default.createElement(antd.InputNumber, {
    onChange: handleOnLimit,
    value: limit,
    addonAfter: "MB"
  })))));
};

var fnStringExample = "Search question_name by typing #\nExample format below:\n#question_name# / #question_name#\nOR\n#question_name#.includes('Test') ? #question_name# / #question_name# : 0 }";
var fnColorExample = "{ 'answer_value': '#CCFFC4' }";
var allowedQuestionTypes$1 = [questionType.input, questionType.number, questionType.text, questionType.option, questionType.multiple_option, questionType.autofield];
var Text$2 = antd.Typography.Text;

var SettingAutofield = function SettingAutofield(_ref) {
  var id = _ref.id,
      questionGroupId = _ref.questionGroupId,
      _ref$fn = _ref.fn,
      fn = _ref$fn === void 0 ? {
    multiline: false,
    fnString: null,
    fnColor: {}
  } : _ref$fn,
      addonBefore = _ref.addonBefore,
      addonAfter = _ref.addonAfter;
  var namePreffix = "question-" + id;
  var UIText = UIStore.useState(function (s) {
    return s.UIText;
  });
  var questionGroups = questionGroupFn.store.useState(function (s) {
    return s.questionGroups;
  });

  var _useState = React.useState(null),
      search = _useState[0],
      setSearch = _useState[1];

  var _useState2 = React.useState(false),
      isCorrect = _useState2[0],
      setIsCorrect = _useState2[1];

  var questionErrors = ErrorStore.useState(function (s) {
    return s.questionErrors;
  });
  var currentAutofieldFnStringError = React.useMemo(function () {
    var findError = questionErrors.find(function (e) {
      return e.id === id && e.field === 'autofield_fnString';
    });

    if (findError) {
      return findError;
    }

    return false;
  }, [id, questionErrors]);
  var allAllowedQuestions = questionGroups.flatMap(function (qg) {
    return qg.questions;
  }).filter(function (q) {
    return allowedQuestionTypes$1.includes(q.type);
  }).map(function (q) {
    return {
      id: q.id,
      name: q.name,
      type: q.type
    };
  });
  var questionNames = React.useMemo(function () {
    var preffix = '';

    var escapeRegExp = function escapeRegExp(string) {
      return string.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
    };

    var searchPattern = search ? escapeRegExp(search) : '';
    var res = allAllowedQuestions.filter(function (q) {
      return q.id !== id;
    });

    if (searchPattern) {
      try {
        var regex = new RegExp(searchPattern, 'gi');
        res = res.filter(function (q) {
          var _q$name$match;

          return (_q$name$match = q.name.match(regex)) === null || _q$name$match === void 0 ? void 0 : _q$name$match.length;
        });
      } catch (e) {
        console.error('Invalid regular expression:', e.message);
      }
    }

    if (fn.fnString) {
      var _fn$fnString;

      preffix = ((_fn$fnString = fn.fnString) === null || _fn$fnString === void 0 ? void 0 : _fn$fnString.trim()) + " ";
    }

    return res.map(function (q) {
      return {
        label: preffix + "#" + q.name + "#",
        value: preffix + "#" + q.name + "#"
      };
    });
  }, [allAllowedQuestions, id, search, fn.fnString]);
  var sampleValues = React.useMemo(function () {
    return allAllowedQuestions.reduce(function (acc, q) {
      var _extends2;

      var key = "#" + q.name + "#";
      var sampleValue = 0;

      if ([questionType.input, questionType.text, questionType.autofield].includes(q.type)) {
        sampleValue = 'lorem';
      } else if (q.type === questionType.option) {
        sampleValue = 'option_lorem';
      } else if (q.type === questionType.multiple_option) {
        sampleValue = 'option_lorem | option_ipsum';
      }

      return _extends({}, acc, (_extends2 = {}, _extends2[key] = sampleValue, _extends2));
    }, {});
  }, [allAllowedQuestions]);

  var validateAndExecute = function validateAndExecute(fnStringValue) {
    var functionBody = fnStringValue;
    Object.keys(sampleValues).forEach(function (key) {
      var placeholder = new RegExp(key, 'g');
      var value = sampleValues[key];
      functionBody = functionBody.replace(placeholder, JSON.stringify(value));
    });

    try {
      new Function("return " + functionBody)();
      ErrorStore.update(function (s) {
        s.questionErrors = s.questionErrors.filter(function (e) {
          return e.id !== id && e.field !== 'autofield_fnString';
        });
      });
      setIsCorrect(true);
    } catch (error) {
      setIsCorrect(false);
      ErrorStore.update(function (s) {
        s.questionErrors = [].concat(s.questionErrors, [{
          id: id,
          field: 'autofield_fnString',
          message: "" + UIText.evaluatefnStringError + (error !== null && error !== void 0 && error.message ? ": " + error.message : '')
        }]);
      });
    }
  };

  var updateState = function updateState(name, value) {
    questionGroupFn.store.update(function (s) {
      s.questionGroups = s.questionGroups.map(function (qg) {
        if (qg.id === questionGroupId) {
          var questions = qg.questions.map(function (q) {
            if (q.id === id) {
              var _extends3;

              return _extends({}, q, (_extends3 = {}, _extends3[name] = value, _extends3));
            }

            return q;
          });
          return _extends({}, qg, {
            questions: questions
          });
        }

        return qg;
      });
    });
  };

  var handleChangeMultiline = function handleChangeMultiline(e) {
    var _e$target;

    var value = e === null || e === void 0 ? void 0 : (_e$target = e.target) === null || _e$target === void 0 ? void 0 : _e$target.checked;
    updateState('fn', _extends({}, fn, {
      multiline: value
    }));
  };

  var handleChangeFnString = function handleChangeFnString(e) {
    var _e$target2;

    var val = e === null || e === void 0 ? void 0 : (_e$target2 = e.target) === null || _e$target2 === void 0 ? void 0 : _e$target2.value;
    var check = val ? val.split(' ').pop() : '';

    if (!check.includes('#')) {
      updateState('fn', _extends({}, fn, {
        fnString: val
      }));
    }
  };

  var handleBlurFnString = function handleBlurFnString(e) {
    var _e$target3;

    var val = e === null || e === void 0 ? void 0 : (_e$target3 = e.target) === null || _e$target3 === void 0 ? void 0 : _e$target3.value;
    var match = val === null || val === void 0 ? void 0 : val.match(/return\s+([^;]+)/);
    var extractedContent = match ? match[1].trim() : val === null || val === void 0 ? void 0 : val.trim();
    setSearch(null);
    updateState('fn', _extends({}, fn, {
      fnString: extractedContent
    }));
  };

  var handleSelectAutoCompleteFnString = function handleSelectAutoCompleteFnString(val) {
    setSearch(null);
    updateState('fn', _extends({}, fn, {
      fnString: val
    }));
  };

  var handleChangeFnColor = function handleChangeFnColor(e) {
    var _e$target4;

    var value = e === null || e === void 0 ? void 0 : (_e$target4 = e.target) === null || _e$target4 === void 0 ? void 0 : _e$target4.value;

    try {
      value = JSON.parse(value);
      updateState('fn', _extends({}, fn, {
        fnColor: value
      }));
      return true;
    } catch (error) {
      return false;
    }
  };

  var handleSearch = function handleSearch(val) {
    var searchTerm = val.split(' ').pop();

    if (searchTerm.includes('#')) {
      setSearch(searchTerm.replace(/#/g, ''));
    } else {
      setSearch(null);
    }
  };

  var onAddonBefore = function onAddonBefore(value) {
    return updateState('addonBefore', value);
  };

  var onAddonAfter = function onAddonAfter(value) {
    return updateState('addonAfter', value);
  };

  return /*#__PURE__*/React__default.createElement("div", null, /*#__PURE__*/React__default.createElement("p", {
    className: styles['more-question-setting-text']
  }, UIText.questionMoreAutofieldTypeSettingText), /*#__PURE__*/React__default.createElement(antd.Space, {
    className: styles['space-align-left']
  }, /*#__PURE__*/React__default.createElement(antd.Form.Item, {
    name: namePreffix + "-autofield_multiline"
  }, /*#__PURE__*/React__default.createElement(antd.Checkbox, {
    onChange: handleChangeMultiline,
    checked: (fn === null || fn === void 0 ? void 0 : fn.multiline) || false
  }, ' ', UIText.inputQuestionAutofieldMultiline))), /*#__PURE__*/React__default.createElement(antd.Form.Item, {
    label: UIText.inputQuestionAutofieldFnString,
    name: namePreffix + "-autofield_fnString",
    initialValue: (fn === null || fn === void 0 ? void 0 : fn.fnString) || null,
    validateStatus: isCorrect ? 'success' : currentAutofieldFnStringError !== null && currentAutofieldFnStringError !== void 0 && currentAutofieldFnStringError.id ? 'error' : null,
    hasFeedback: true,
    required: true
  }, /*#__PURE__*/React__default.createElement(antd.AutoComplete, {
    options: questionNames,
    onSearch: handleSearch,
    onSelect: handleSelectAutoCompleteFnString,
    backfill: true,
    open: search !== null,
    value: (fn === null || fn === void 0 ? void 0 : fn.fnString) || null
  }, /*#__PURE__*/React__default.createElement(antd.Input.TextArea, {
    rows: 5,
    allowClear: true,
    onChange: handleChangeFnString,
    onBlur: handleBlurFnString,
    placeholder: fnStringExample,
    value: (fn === null || fn === void 0 ? void 0 : fn.fnString) || null
  }))), /*#__PURE__*/React__default.createElement(antd.Space, {
    className: styles['field-error-wrapper'],
    align: "center"
  }, /*#__PURE__*/React__default.createElement(antd.Button, {
    icon: /*#__PURE__*/React__default.createElement(BugOutlined$2, null),
    onClick: function onClick() {
      return validateAndExecute(fn.fnString);
    },
    type: "primary",
    size: "middle",
    ghost: true
  }, UIText.evaluatefnStringButton), (currentAutofieldFnStringError === null || currentAutofieldFnStringError === void 0 ? void 0 : currentAutofieldFnStringError.id) && /*#__PURE__*/React__default.createElement(antd.Space, null, /*#__PURE__*/React__default.createElement(CloseCircleTwoTone$2, {
    twoToneColor: "#ff4d4f"
  }), /*#__PURE__*/React__default.createElement(Text$2, {
    type: "danger"
  }, currentAutofieldFnStringError.message)), isCorrect && /*#__PURE__*/React__default.createElement(antd.Space, null, /*#__PURE__*/React__default.createElement(CheckCircleTwoTone$2, {
    twoToneColor: '#52c41a'
  }), /*#__PURE__*/React__default.createElement(Text$2, {
    type: "success"
  }, UIText.evaluatefnStringSuccess))), /*#__PURE__*/React__default.createElement(antd.Form.Item, {
    label: UIText.inputQuestionAutofieldFnColor,
    name: namePreffix + "-autofield_fnColor",
    initialValue: isEmpty(fn === null || fn === void 0 ? void 0 : fn.fnColor) ? null : JSON.stringify(fn === null || fn === void 0 ? void 0 : fn.fnColor)
  }, /*#__PURE__*/React__default.createElement(antd.Input.TextArea, {
    rows: 5,
    allowClear: true,
    onChange: handleChangeFnColor,
    placeholder: fnColorExample
  })), /*#__PURE__*/React__default.createElement(SettingAddons, {
    namePreffix: namePreffix,
    addonBefore: addonBefore,
    addonAfter: addonAfter,
    onAddonBefore: onAddonBefore,
    onAddonAfter: onAddonAfter
  }));
};

var QuestionHint = function QuestionHint(_ref) {
  var _hostParams$settingHi;

  var id = _ref.id,
      questionGroupId = _ref.questionGroupId,
      _ref$hint = _ref.hint,
      hint = _ref$hint === void 0 ? {
    id: null,
    endpoint: null,
    path: [],
    "static": null,
    buttonText: null
  } : _ref$hint;
  var namePreffix = "question-" + id;

  var _UIStore$useState = UIStore.useState(function (s) {
    return s;
  }),
      UIText = _UIStore$useState.UIText,
      hostParams = _UIStore$useState.hostParams;

  var settingHintURL = hostParams === null || hostParams === void 0 ? void 0 : (_hostParams$settingHi = hostParams.settingHintURL) === null || _hostParams$settingHi === void 0 ? void 0 : _hostParams$settingHi.settings;
  var form = antd.Form.useFormInstance();
  var updateGlobalState = React.useCallback(function (values) {
    if (values === void 0) {
      values = {};
    }

    questionGroupFn.store.update(function (s) {
      s.questionGroups = s.questionGroups.map(function (qg) {
        if (qg.id === questionGroupId) {
          var questions = qg.questions.map(function (q) {
            if (q.id === id) {
              return _extends({}, q, {
                hint: _extends({}, q === null || q === void 0 ? void 0 : q.hint, values)
              });
            }

            return q;
          });
          return _extends({}, qg, {
            questions: questions
          });
        }

        return qg;
      });
    });
  }, [id, questionGroupId]);
  var hintURLDropdownValue = React.useMemo(function () {
    return settingHintURL && settingHintURL !== null && settingHintURL !== void 0 && settingHintURL.length ? settingHintURL.map(function (x) {
      return {
        label: x.name,
        value: x.id
      };
    }) : [];
  }, [settingHintURL]);
  var hintPathDropdownValue = React.useMemo(function () {
    var endpoint = hint === null || hint === void 0 ? void 0 : hint.endpoint;

    if (hint !== null && hint !== void 0 && hint.endpoint && endpoint.includes(String(id))) {
      endpoint = endpoint.replace("/" + String(id), '');
    }

    var findURL = settingHintURL.find(function (x) {
      return x.id === (hint === null || hint === void 0 ? void 0 : hint.id) || x.endpoint === endpoint;
    });
    updateGlobalState({
      id: findURL === null || findURL === void 0 ? void 0 : findURL.id
    });
    return (findURL === null || findURL === void 0 ? void 0 : findURL.path) || [];
  }, [settingHintURL, hint === null || hint === void 0 ? void 0 : hint.id, hint === null || hint === void 0 ? void 0 : hint.endpoint, id, updateGlobalState]);

  var handleChangeEndpoint = function handleChangeEndpoint(e) {
    var _form$setFieldsValue;

    var findURL = settingHintURL.find(function (x) {
      return x.id === e;
    });
    form.setFieldsValue((_form$setFieldsValue = {}, _form$setFieldsValue[namePreffix + "-hint_path"] = [], _form$setFieldsValue));
    updateGlobalState({
      id: e,
      endpoint: findURL !== null && findURL !== void 0 && findURL.endpoint ? findURL.endpoint + "/" + id : null,
      path: []
    });
  };

  var handleChangePath = function handleChangePath(val) {
    updateGlobalState({
      path: val
    });
  };

  var handleChangeStaticValue = function handleChangeStaticValue(e) {
    var _e$target;

    updateGlobalState({
      id: null,
      "static": e === null || e === void 0 ? void 0 : (_e$target = e.target) === null || _e$target === void 0 ? void 0 : _e$target.value,
      endpoint: null,
      path: []
    });
  };

  var handleChangeButtonText = function handleChangeButtonText(e) {
    var _e$target2;

    updateGlobalState({
      buttonText: e === null || e === void 0 ? void 0 : (_e$target2 = e.target) === null || _e$target2 === void 0 ? void 0 : _e$target2.value
    });
  };

  return /*#__PURE__*/React__default.createElement("div", null, /*#__PURE__*/React__default.createElement("p", {
    className: styles['more-question-setting-text']
  }, UIText.questionHintSettingText), /*#__PURE__*/React__default.createElement(antd.Form.Item, {
    label: UIText.inputSelectHintEndpointLabel,
    name: namePreffix + "-hint_endpoint"
  }, /*#__PURE__*/React__default.createElement(antd.Row, {
    align: "middle",
    gutter: [24, 24]
  }, /*#__PURE__*/React__default.createElement(antd.Col, {
    span: 10
  }, /*#__PURE__*/React__default.createElement(antd.Select, {
    showSearch: true,
    allowClear: true,
    className: styles['select-dropdown'],
    optionFilterProp: "label",
    options: hintURLDropdownValue,
    getPopupContainer: function getPopupContainer(triggerNode) {
      return triggerNode.parentElement;
    },
    onChange: handleChangeEndpoint,
    value: hint === null || hint === void 0 ? void 0 : hint.id,
    disabled: hint === null || hint === void 0 ? void 0 : hint["static"]
  })), /*#__PURE__*/React__default.createElement(antd.Col, {
    span: 14
  }, /*#__PURE__*/React__default.createElement(antd.Input, {
    value: hint === null || hint === void 0 ? void 0 : hint.endpoint,
    disabled: true
  })))), /*#__PURE__*/React__default.createElement(antd.Form.Item, {
    label: UIText.inputSelectHintPathLabel,
    name: namePreffix + "-hint_path",
    initialValue: hint === null || hint === void 0 ? void 0 : hint.path
  }, /*#__PURE__*/React__default.createElement(antd.Select, {
    showSearch: true,
    allowClear: true,
    mode: "multiple",
    showArrow: true,
    className: styles['select-dropdown'],
    optionFilterProp: "label",
    options: hintPathDropdownValue,
    getPopupContainer: function getPopupContainer(triggerNode) {
      return triggerNode.parentElement;
    },
    onChange: handleChangePath,
    disabled: hint === null || hint === void 0 ? void 0 : hint["static"]
  })), /*#__PURE__*/React__default.createElement(antd.Row, {
    align: "middle",
    gutter: [24, 24]
  }, /*#__PURE__*/React__default.createElement(antd.Col, {
    span: 12
  }, /*#__PURE__*/React__default.createElement(antd.Form.Item, {
    label: UIText.inputQuestionStaticValueLabel,
    name: namePreffix + "-hint_static_value",
    initialValue: hint === null || hint === void 0 ? void 0 : hint["static"]
  }, /*#__PURE__*/React__default.createElement(antd.Input, {
    onChange: handleChangeStaticValue,
    disabled: hint === null || hint === void 0 ? void 0 : hint.endpoint
  }))), /*#__PURE__*/React__default.createElement(antd.Col, {
    span: 12
  }, /*#__PURE__*/React__default.createElement(antd.Form.Item, {
    label: UIText.inputQuestionHintButtonTextLabel,
    name: namePreffix + "-hint_button_text",
    initialValue: hint === null || hint === void 0 ? void 0 : hint.buttonText
  }, /*#__PURE__*/React__default.createElement(antd.Input, {
    onChange: handleChangeButtonText
  })))));
};

var QuestionStats = function QuestionStats(_ref) {
  var id = _ref.id,
      questionGroupId = _ref.questionGroupId,
      _ref$dataApiUrl = _ref.dataApiUrl,
      dataApiUrl = _ref$dataApiUrl === void 0 ? null : _ref$dataApiUrl;
  var namePreffix = "question-" + id;

  var _UIStore$useState = UIStore.useState(function (s) {
    return s;
  }),
      UIText = _UIStore$useState.UIText;

  var updateState = function updateState(name, value) {
    questionGroupFn.store.update(function (s) {
      s.questionGroups = s.questionGroups.map(function (qg) {
        if (qg.id === questionGroupId) {
          var questions = qg.questions.map(function (q) {
            if (q.id === id) {
              var _extends2;

              return _extends({}, q, (_extends2 = {}, _extends2[name] = value, _extends2));
            }

            return q;
          });
          return _extends({}, qg, {
            questions: questions
          });
        }

        return qg;
      });
    });
  };

  var handleChangeStatsEndpoint = function handleChangeStatsEndpoint(e) {
    var _e$target;

    var value = e === null || e === void 0 ? void 0 : (_e$target = e.target) === null || _e$target === void 0 ? void 0 : _e$target.value;
    updateState('dataApiUrl', value);
  };

  return /*#__PURE__*/React__default.createElement("div", null, /*#__PURE__*/React__default.createElement("p", {
    className: styles['more-question-setting-text']
  }, UIText.questionStatsSettingTest), /*#__PURE__*/React__default.createElement(antd.Form.Item, {
    label: UIText.inputStatsUrlText,
    name: namePreffix + "-dataApiUrl",
    initialValue: dataApiUrl
  }, /*#__PURE__*/React__default.createElement(antd.Input, {
    onChange: handleChangeStatsEndpoint
  })));
};

var questionTypeWithRule = ['number', 'date'];
var Text$3 = antd.Typography.Text;

var QuestionSetting = function QuestionSetting(_ref) {
  var question = _ref.question,
      dependant = _ref.dependant;
  var id = question.id,
      label = question.label,
      name = question.name,
      short_label = question.short_label,
      type = question.type,
      variable = question.variable,
      tooltip = question.tooltip,
      required = question.required,
      questionGroupId = question.questionGroupId,
      meta = question.meta,
      displayOnly = question.displayOnly,
      disableDelete = question.disableDelete;
  var namePreffix = "question-" + id;
  var form = antd.Form.useFormInstance();
  var qType = antd.Form.useWatch(namePreffix + "-type", form);

  var _UIStore$useState = UIStore.useState(function (s) {
    return s;
  }),
      UIText = _UIStore$useState.UIText,
      hostParams = _UIStore$useState.hostParams;

  var limitQuestionType = hostParams === null || hostParams === void 0 ? void 0 : hostParams.limitQuestionType;
  var settingHintURL = hostParams === null || hostParams === void 0 ? void 0 : hostParams.settingHintURL;
  var defaultQuestionParam = hostParams === null || hostParams === void 0 ? void 0 : hostParams.defaultQuestionParam;
  var questionGroups = questionGroupFn.store.useState(function (s) {
    return s.questionGroups;
  });

  var _useState = React.useState(false),
      copied = _useState[0],
      setCopied = _useState[1];

  var _useState2 = React.useState(name ? lodash.snakeCase(name) : lodash.snakeCase(label)),
      nameFieldValue = _useState2[0],
      setNameFieldValue = _useState2[1];

  var questionErrors = ErrorStore.useState(function (s) {
    return s.questionErrors;
  });
  var currentQuestionNameError = React.useMemo(function () {
    var findError = questionErrors.find(function (e) {
      return e.id === id && e.field === 'name';
    });

    if (findError) {
      return findError;
    }

    return false;
  }, [id, questionErrors]);

  var checkIfQuestionNameExist = function checkIfQuestionNameExist(val) {
    var checkVal = lodash.snakeCase(val);
    var questions = questionGroups.flatMap(function (qg) {
      return qg.questions;
    }).filter(function (q) {
      return q.id !== id;
    });
    var isNameExist = questions.find(function (q) {
      return q.name === checkVal;
    });

    if (isNameExist) {
      ErrorStore.update(function (s) {
        s.questionErrors = [].concat(s.questionErrors, [{
          id: id,
          field: 'name',
          message: checkVal + " exist"
        }]);
      });
    } else {
      ErrorStore.update(function (s) {
        s.questionErrors = s.questionErrors.filter(function (e) {
          return e.id !== id && e.field !== 'name';
        });
      });
    }
  };

  var disableMetaForGeo = React.useMemo(function () {
    var metaGeoQuestionDefined = questionGroups.flatMap(function (qg) {
      return qg.questions.filter(function (q) {
        return q.type === questionType.geo && (q === null || q === void 0 ? void 0 : q.meta);
      });
    }).map(function (q) {
      return q.id;
    });
    return type === questionType.geo && metaGeoQuestionDefined.length && !metaGeoQuestionDefined.includes(id);
  }, [questionGroups, type, id]);
  var showMetaCheckbox = React.useMemo(function () {
    var currentQuestionGroup = questionGroups.find(function (qg) {
      return qg.id === questionGroupId;
    });
    return ![questionType.tree, questionType.table].includes(type) && !(currentQuestionGroup !== null && currentQuestionGroup !== void 0 && currentQuestionGroup.repeatable);
  }, [type, questionGroups, questionGroupId]);
  var questionTypeDropdownValue = React.useMemo(function () {
    if (limitQuestionType && limitQuestionType !== null && limitQuestionType !== void 0 && limitQuestionType.length) {
      return limitQuestionType;
    }

    return Object.keys(questionType).map(function (key) {
      var _questionType$key;

      return {
        label: (_questionType$key = questionType[key]) === null || _questionType$key === void 0 ? void 0 : _questionType$key.split('_').join(' '),
        value: questionType[key]
      };
    });
  }, [limitQuestionType]);
  var showHintSetting = React.useMemo(function () {
    var _settingHintURL$setti, _settingHintURL$quest, _settingHintURL$setti2;

    if (!settingHintURL || !(settingHintURL !== null && settingHintURL !== void 0 && (_settingHintURL$setti = settingHintURL.settings) !== null && _settingHintURL$setti !== void 0 && _settingHintURL$setti.length)) {
      return false;
    }

    if (settingHintURL !== null && settingHintURL !== void 0 && settingHintURL.questionTypes && settingHintURL !== null && settingHintURL !== void 0 && (_settingHintURL$quest = settingHintURL.questionTypes) !== null && _settingHintURL$quest !== void 0 && _settingHintURL$quest.length) {
      return settingHintURL.questionTypes.includes(type);
    }

    return settingHintURL === null || settingHintURL === void 0 ? void 0 : (_settingHintURL$setti2 = settingHintURL.settings) === null || _settingHintURL$setti2 === void 0 ? void 0 : _settingHintURL$setti2.length;
  }, [settingHintURL, type]);
  var updateState = React.useCallback(function (name, value) {
    questionGroupFn.store.update(function (s) {
      s.questionGroups = s.questionGroups.map(function (qg) {
        if (qg.id === questionGroupId) {
          var questions = qg.questions.map(function (q) {
            if (q.id === id) {
              var _extends2;

              if (questionTypeWithRule.includes(q.type) && questionTypeWithRule.includes(value)) {
                q === null || q === void 0 ? true : delete q.rule;
              }

              return _extends({}, q, (_extends2 = {}, _extends2[name] = value, _extends2));
            }

            return q;
          });
          return _extends({}, qg, {
            questions: questions
          });
        }

        return qg;
      });
    });
  }, [id, questionGroupId]);
  var defaultTypeValue = React.useMemo(function () {
    if (questionTypeDropdownValue.length) {
      var _questionTypeDropdown;

      var checkType = questionTypeDropdownValue.find(function (x) {
        return x.value === type;
      });

      if (checkType) {
        return type;
      }

      if (!lodash.isEmpty(defaultQuestionParam) && defaultQuestionParam !== null && defaultQuestionParam !== void 0 && defaultQuestionParam.type) {
        updateState('type', defaultQuestionParam.type);
        return defaultQuestionParam.type;
      }

      var checkText = questionTypeDropdownValue.find(function (x) {
        return x.value === questionType.text;
      });
      var defType = checkText ? checkText.value : questionTypeDropdownValue === null || questionTypeDropdownValue === void 0 ? void 0 : (_questionTypeDropdown = questionTypeDropdownValue[0]) === null || _questionTypeDropdown === void 0 ? void 0 : _questionTypeDropdown.value;
      updateState('type', defType);
      return defType;
    }

    return type;
  }, [type, questionTypeDropdownValue, defaultQuestionParam, updateState]);

  var handleChangeLabel = function handleChangeLabel(e) {
    var _e$target;

    var labelValue = e === null || e === void 0 ? void 0 : (_e$target = e.target) === null || _e$target === void 0 ? void 0 : _e$target.value;
    var nameValue = name;

    if (!name.trim() || name === lodash.snakeCase(label)) {
      nameValue = lodash.snakeCase(labelValue);
    }

    setNameFieldValue(nameValue);
    checkIfQuestionNameExist(nameValue);
    updateState('label', labelValue);
    updateState('name', nameValue);
  };

  var handleChangeName = function handleChangeName(e) {
    var _e$target2;

    var val = (e === null || e === void 0 ? void 0 : (_e$target2 = e.target) === null || _e$target2 === void 0 ? void 0 : _e$target2.value) || '';
    setNameFieldValue(val);
    checkIfQuestionNameExist(val);
  };

  var handleChangeShortLabel = function handleChangeShortLabel(e) {
    var _e$target3;

    updateState('short_label', e === null || e === void 0 ? void 0 : (_e$target3 = e.target) === null || _e$target3 === void 0 ? void 0 : _e$target3.value);
  };

  var handleBlurName = function handleBlurName() {
    setNameFieldValue(nameFieldValue ? lodash.snakeCase(nameFieldValue) : '');
    updateState('name', nameFieldValue ? lodash.snakeCase(nameFieldValue) : '');
  };

  var handleChangeType = function handleChangeType(e) {
    updateState('type', e);
  };

  var handleChangeVariableName = function handleChangeVariableName(e) {
    var _e$target4;

    updateState('variableName', e === null || e === void 0 ? void 0 : (_e$target4 = e.target) === null || _e$target4 === void 0 ? void 0 : _e$target4.value);
  };

  var handleChangeTooltip = function handleChangeTooltip(e) {
    var _e$target5;

    var value = e === null || e === void 0 ? void 0 : (_e$target5 = e.target) === null || _e$target5 === void 0 ? void 0 : _e$target5.value;

    if (value) {
      updateState('tooltip', _extends({}, tooltip, {
        text: value
      }));
    } else {
      updateState('tooltip', null);
    }
  };

  var handleChangeRequired = function handleChangeRequired(e) {
    var _e$target6;

    updateState('required', e === null || e === void 0 ? void 0 : (_e$target6 = e.target) === null || _e$target6 === void 0 ? void 0 : _e$target6.checked);
  };

  var handleChangeDisplayOnly = function handleChangeDisplayOnly(e) {
    var _e$target7;

    updateState('displayOnly', e === null || e === void 0 ? void 0 : (_e$target7 = e.target) === null || _e$target7 === void 0 ? void 0 : _e$target7.checked);
  };

  var handleChangeMeta = function handleChangeMeta(e) {
    var _e$target8;

    updateState('meta', e === null || e === void 0 ? void 0 : (_e$target8 = e.target) === null || _e$target8 === void 0 ? void 0 : _e$target8.checked);
  };

  var dependantGroup = lodash.map(lodash.groupBy(dependant.map(function (x) {
    return {
      name: x.questionGroup.order + "." + x.order + ". " + x.name,
      group: x.questionGroup.order + ". " + x.questionGroup.name
    };
  }), 'group'), function (i, g) {
    return {
      items: lodash.orderBy(i, 'name'),
      group: g
    };
  });
  return /*#__PURE__*/React__default.createElement("div", null, !!dependant.length && /*#__PURE__*/React__default.createElement(antd.Alert, {
    message: /*#__PURE__*/React__default.createElement("div", null, /*#__PURE__*/React__default.createElement("ul", {
      className: "arfe-dependant-list-box"
    }, "Dependant Questions:", dependantGroup.map(function (d, di) {
      return /*#__PURE__*/React__default.createElement("li", {
        key: di
      }, d.group, /*#__PURE__*/React__default.createElement("ul", null, d.items.map(function (i, ii) {
        return /*#__PURE__*/React__default.createElement("li", {
          key: ii
        }, i.name);
      })));
    }))),
    type: "info",
    style: {
      marginBottom: 24
    }
  }), /*#__PURE__*/React__default.createElement(antd.Form.Item, {
    label: UIText.inputQuestionLabelLabel,
    initialValue: label || name,
    name: namePreffix + "-label",
    required: true
  }, /*#__PURE__*/React__default.createElement(antd.Input, {
    onChange: handleChangeLabel,
    allowClear: true
  })), /*#__PURE__*/React__default.createElement("div", {
    style: {
      marginTop: '-18px',
      marginBottom: '24px'
    }
  }, /*#__PURE__*/React__default.createElement(antd.Tag, null, UIText.questionIdText + ": " + id, " "), /*#__PURE__*/React__default.createElement(antd.Tooltip, {
    title: copied ? UIText.copiedText : UIText.copyQuestionIdToClipboardText,
    placement: "right"
  }, /*#__PURE__*/React__default.createElement(antd.Button, {
    type: "link",
    icon: /*#__PURE__*/React__default.createElement(ai.AiOutlineCopy, null),
    size: "small",
    onClick: function onClick() {
      navigator.clipboard.writeText(id);
      setCopied(true);
      setTimeout(function () {
        setCopied(false);
      }, 1000);
    }
  }))), /*#__PURE__*/React__default.createElement(antd.Form.Item, {
    label: UIText.inputQuestionNameLabel,
    required: true
  }, /*#__PURE__*/React__default.createElement(antd.Input, {
    onChange: handleChangeName,
    onBlur: handleBlurName,
    allowClear: true,
    value: nameFieldValue
  })), currentQuestionNameError !== null && currentQuestionNameError !== void 0 && currentQuestionNameError.id ? /*#__PURE__*/React__default.createElement("div", {
    className: styles['field-error-wrapper']
  }, /*#__PURE__*/React__default.createElement(Text$3, {
    type: "danger"
  }, currentQuestionNameError.message)) : '', /*#__PURE__*/React__default.createElement(antd.Form.Item, {
    label: /*#__PURE__*/React__default.createElement(antd.Space, {
      align: "center"
    }, /*#__PURE__*/React__default.createElement("div", null, UIText.inputQuestionShortLabelLabel), /*#__PURE__*/React__default.createElement(antd.Tooltip, {
      title: UIText.inputQuestionShortLabelTooltip,
      placement: "right"
    }, /*#__PURE__*/React__default.createElement(ai.AiOutlineQuestionCircle, {
      style: {
        marginBottom: '-2px'
      },
      size: 16
    }))),
    name: namePreffix + "-short_label",
    initialValue: short_label
  }, /*#__PURE__*/React__default.createElement(antd.Input, {
    onChange: handleChangeShortLabel,
    allowClear: true
  })), /*#__PURE__*/React__default.createElement(antd.Form.Item, {
    label: UIText.inputQuestionTypeLabel,
    initialValue: defaultTypeValue,
    name: namePreffix + "-type",
    required: true
  }, /*#__PURE__*/React__default.createElement(antd.Select, {
    showSearch: true,
    optionFilterProp: "label",
    className: styles['select-dropdown'],
    options: questionTypeDropdownValue,
    getPopupContainer: function getPopupContainer(triggerNode) {
      return triggerNode.parentElement;
    },
    onChange: handleChangeType,
    disabled: dependant.length || disableDelete
  })), /*#__PURE__*/React__default.createElement(antd.Form.Item, {
    label: UIText.inputQuestionVariableNameLabel,
    initialValue: variable,
    name: namePreffix + "-variable"
  }, /*#__PURE__*/React__default.createElement(antd.Input, {
    onChange: handleChangeVariableName,
    allowClear: true
  })), /*#__PURE__*/React__default.createElement(antd.Form.Item, {
    label: UIText.inputQuestionTooltipLabel,
    initialValue: tooltip === null || tooltip === void 0 ? void 0 : tooltip.text,
    name: namePreffix + "-tooltip"
  }, /*#__PURE__*/React__default.createElement(antd.Input.TextArea, {
    onChange: handleChangeTooltip,
    allowClear: true,
    rows: 5
  })), /*#__PURE__*/React__default.createElement(antd.Row, {
    gutter: [24, 24],
    align: "middle"
  }, /*#__PURE__*/React__default.createElement(antd.Col, null, /*#__PURE__*/React__default.createElement(antd.Form.Item, {
    name: namePreffix + "-required",
    className: styles['input-checkbox-wrapper']
  }, /*#__PURE__*/React__default.createElement(antd.Checkbox, {
    onChange: handleChangeRequired,
    checked: required
  }, ' ', UIText.inputQuestionRequiredCheckbox))), /*#__PURE__*/React__default.createElement(antd.Col, null, /*#__PURE__*/React__default.createElement(antd.Form.Item, {
    name: namePreffix + "-displayOnly",
    className: styles['input-checkbox-wrapper']
  }, /*#__PURE__*/React__default.createElement(antd.Checkbox, {
    onChange: handleChangeDisplayOnly,
    checked: displayOnly
  }, ' ', UIText.inputQuestionDisplayOnlyCheckbox), /*#__PURE__*/React__default.createElement(antd.Tooltip, {
    placement: "right",
    title: UIText.inputQuestionDisplayOnlyCheckboxTooltip
  }, /*#__PURE__*/React__default.createElement(ai.AiOutlineQuestionCircle, {
    style: {
      marginLeft: '-4px',
      marginBottom: '-2px'
    },
    size: 16
  })))), showMetaCheckbox && /*#__PURE__*/React__default.createElement(antd.Col, null, /*#__PURE__*/React__default.createElement("div", null, /*#__PURE__*/React__default.createElement(antd.Form.Item, {
    name: namePreffix + "-meta",
    className: styles['input-checkbox-wrapper']
  }, /*#__PURE__*/React__default.createElement(antd.Checkbox, {
    onChange: handleChangeMeta,
    checked: meta,
    disabled: disableMetaForGeo
  }, ' ', UIText.inputQuestionMetaCheckbox), /*#__PURE__*/React__default.createElement(antd.Tooltip, {
    placement: "right",
    title: UIText.inputQuestionMetaCheckboxHint
  }, /*#__PURE__*/React__default.createElement(ai.AiOutlineQuestionCircle, {
    style: {
      marginLeft: '-4px',
      marginBottom: '-2px'
    },
    size: 16
  })))))), showHintSetting && /*#__PURE__*/React__default.createElement(QuestionHint, question), qType === questionType.input && /*#__PURE__*/React__default.createElement(SettingInput, question), qType === questionType.number && /*#__PURE__*/React__default.createElement(SettingNumber, question), [questionType.option, questionType.multiple_option].includes(qType) && /*#__PURE__*/React__default.createElement(SettingOption, question), qType === questionType.tree && /*#__PURE__*/React__default.createElement(SettingTree, question), qType === questionType.cascade && /*#__PURE__*/React__default.createElement(SettingCascade, question), qType === questionType.date && /*#__PURE__*/React__default.createElement(SettingDate, question), qType === questionType.table && /*#__PURE__*/React__default.createElement(SettingTable, question), qType === questionType.image && /*#__PURE__*/React__default.createElement(SettingImage, question), qType === questionType.autofield && /*#__PURE__*/React__default.createElement(SettingAutofield, question), /*#__PURE__*/React__default.createElement(QuestionStats, question));
};

var dependencyTypes = [{
  type: [questionType.option, questionType.multiple_option],
  logicDropdowns: [{
    label: 'contains',
    value: 'options'
  }]
}, {
  type: [questionType.number],
  logicDropdowns: [{
    label: 'not equal',
    value: 'notEqual'
  }, {
    label: 'less than',
    value: 'max'
  }, {
    label: 'greater than',
    value: 'min'
  }]
}, {
  type: [questionType.date],
  logicDropdowns: [{
    label: 'before',
    value: 'before'
  }, {
    label: 'after',
    value: 'after'
  }]
}];

var defaultSkipLogic = function defaultSkipLogic() {
  return [{
    id: generateId(),
    dependentTo: null,
    dependentToType: null,
    dependentLogic: null,
    dependentAnswer: null,
    dependencyLogicDropdownValue: [],
    dependencyAnswerDropdownValue: []
  }];
};

var fetchDependencyLogicDropdown = function fetchDependencyLogicDropdown(question) {
  var _dependencyTypes$find;

  var value = (_dependencyTypes$find = dependencyTypes.find(function (dt) {
    return dt.type.includes(question.type);
  })) === null || _dependencyTypes$find === void 0 ? void 0 : _dependencyTypes$find.logicDropdowns;
  return value || [];
};

var fetchDependencyAnswerDropdown = function fetchDependencyAnswerDropdown(question) {
  if (question !== null && question !== void 0 && question.options) {
    return question.options.map(function (opt) {
      return {
        label: (opt === null || opt === void 0 ? void 0 : opt.label) || opt.name,
        value: (opt === null || opt === void 0 ? void 0 : opt.value) || opt.name
      };
    });
  }

  return [];
};

var transformDependencyValue = function transformDependencyValue(dependency, questionGroups) {
  var questions = questionGroups.flatMap(function (qg) {
    return qg.questions;
  });
  var logicDropdowns = dependencyTypes.flatMap(function (d) {
    return d.logicDropdowns;
  }).map(function (x) {
    return x.value;
  });
  var value = dependency.map(function (d) {
    var _logicDropdowns$map$f;

    var dependentLogic = null;
    var dependentAnswer = (_logicDropdowns$map$f = logicDropdowns.map(function (lg) {
      if (d !== null && d !== void 0 && d[lg]) {
        dependentLogic = lg;
      }

      return d === null || d === void 0 ? void 0 : d[lg];
    }).filter(function (x) {
      return x;
    })) === null || _logicDropdowns$map$f === void 0 ? void 0 : _logicDropdowns$map$f[0];
    var findQ = questions.find(function (q) {
      return q.id === d.id;
    });
    return {
      id: generateId(),
      dependentTo: d.id,
      dependentToType: findQ.type,
      dependentLogic: dependentLogic,
      dependentAnswer: dependentAnswer,
      dependencyLogicDropdownValue: fetchDependencyLogicDropdown(findQ),
      dependencyAnswerDropdownValue: fetchDependencyAnswerDropdown(findQ)
    };
  });
  return value;
};

var SettingSkipLogic = function SettingSkipLogic(_ref) {
  var question = _ref.question,
      questions = _ref.questions,
      dependency = _ref.dependency,
      dependencies = _ref.dependencies,
      setDependencies = _ref.setDependencies,
      dependentToQuestions = _ref.dependentToQuestions;
  var id = question.id,
      questionGroupId = question.questionGroupId,
      savedDependency = question.dependency;
  var namePreffix = "question-" + id;
  var UIText = UIStore.useState(function (s) {
    return s.UIText;
  });
  var form = antd.Form.useFormInstance();
  var updateGlobalStore = React.useCallback(function (dependencyValue, isDelete) {
    if (isDelete === void 0) {
      isDelete = false;
    }

    var transformDependencies = dependencyValue.map(function (dp) {
      var _ref2;

      return _ref2 = {
        id: dp.dependentTo
      }, _ref2[dp.dependentLogic] = dp.dependentAnswer, _ref2;
    }).filter(function (d) {
      return d.id;
    });
    questionGroupFn.store.update(function (s) {
      s.questionGroups = s.questionGroups.map(function (qg) {
        if (qg.id === questionGroupId) {
          var _questions = qg.questions.map(function (q) {
            if (q.id === id && !isDelete) {
              return _extends({}, q, {
                dependency: transformDependencies
              });
            }

            if (q.id === id && !isDelete && !transformDependencies.length) {
              q.dependency && delete q.dependency;
              return q;
            }

            if (q.id === id && isDelete && transformDependencies.length) {
              return _extends({}, q, {
                dependency: transformDependencies
              });
            }

            if (q.id === id && isDelete && !transformDependencies.length) {
              q.dependency && delete q.dependency;
              return q;
            }

            return q;
          });

          return _extends({}, qg, {
            questions: _questions
          });
        }

        return qg;
      });
    });
  }, [id, questionGroupId]);
  React.useEffect(function () {
    var checkDependencies = dependencies.filter(function (dp) {
      if (dp.dependentTo && dp.dependentLogic && Array.isArray(dp.dependentAnswer) && dp.dependentAnswer.length) {
        return dp;
      }

      if (dp.dependentTo && dp.dependentLogic && !Array.isArray(dp.dependentAnswer) && dp.dependentAnswer) {
        return dp;
      }
    });

    if (checkDependencies.length) {
      updateGlobalStore(checkDependencies);
    }
  }, [dependencies, id, questionGroupId, updateGlobalStore]);
  var updateLocalState = React.useCallback(function (dependencyId, values) {
    if (values === void 0) {
      values = {};
    }

    var updatedDependencies = dependencies.map(function (d) {
      if (d.id === dependencyId) {
        return _extends({}, d, values);
      }

      return d;
    }).filter(function (d) {
      return dependencyTypes.flatMap(function (dt) {
        return dt.type;
      }).includes(d.dependentToType);
    });
    setDependencies(updatedDependencies);
  }, [dependencies, setDependencies]);
  React.useEffect(function () {
    setTimeout(function () {
      var checkChangedType = dependencies.map(function (d) {
        var findQ = questions.find(function (q) {
          return q.id === d.dependentTo;
        });

        if (findQ !== null && findQ !== void 0 && findQ.id && findQ.type !== d.dependentToType) {
          return findQ;
        }

        return false;
      }).filter(function (x) {
        return x;
      });

      if (dependencies.length && checkChangedType.length) {
        checkChangedType.forEach(function (q) {
          var _form$setFieldsValue;

          var updatedDependency = dependencies.find(function (d) {
            return d.dependentTo === q.id;
          });
          updateLocalState(updatedDependency.id, _extends({}, updatedDependency, {
            dependentToType: q.type,
            dependencyLogicDropdownValue: fetchDependencyLogicDropdown(q),
            dependencyAnswerDropdownValue: fetchDependencyAnswerDropdown(q)
          }));
          form.setFieldsValue((_form$setFieldsValue = {}, _form$setFieldsValue[namePreffix + "-dependent_logic-" + updatedDependency.id] = null, _form$setFieldsValue));
        });
      }
    }, 500);
  }, [dependencies, questions, form, namePreffix, updateLocalState]);

  var handleChangeDependentTo = function handleChangeDependentTo(dependencyId, e) {
    var question = questions.find(function (q) {
      return q.id === e;
    });
    var values = {
      dependentTo: e,
      dependentToType: question.type,
      dependencyLogicDropdownValue: fetchDependencyLogicDropdown(question),
      dependencyAnswerDropdownValue: fetchDependencyAnswerDropdown(question)
    };
    updateLocalState(dependencyId, values);
  };

  var handleChangeDependentLogic = function handleChangeDependentLogic(dependencyId, e) {
    updateLocalState(dependencyId, {
      dependentLogic: e
    });
  };

  var handleChangeDependentAnswer = function handleChangeDependentAnswer(dependencyId, val) {
    updateLocalState(dependencyId, {
      dependentAnswer: val
    });

    if (savedDependency !== null && savedDependency !== void 0 && savedDependency.length) {
      var updatedDependencies = savedDependency.filter(function (d) {
        return d.id !== dependencyId;
      });

      if (Array.isArray(val) && !val.length) {
        updateGlobalStore(updatedDependencies, true);
        return;
      }

      if (!Array.isArray(val) && !val) {
        updateGlobalStore(updatedDependencies, true);
        return;
      }
    }
  };

  var handleAddMoreDependency = function handleAddMoreDependency() {
    var newDependencies = [].concat(dependencies, defaultSkipLogic());
    setDependencies(newDependencies);
  };

  var handleDeleteDependentTo = function handleDeleteDependentTo(dependencyId) {
    var _form$setFieldsValue2;

    form.setFieldsValue((_form$setFieldsValue2 = {}, _form$setFieldsValue2[namePreffix + "-dependent_logic-" + dependencyId] = null, _form$setFieldsValue2));
    var updatedDependencies = dependencies.filter(function (dependency) {
      return dependency.id !== dependencyId;
    });

    if (updatedDependencies.length) {
      setDependencies(updatedDependencies);
    } else {
      setDependencies(defaultSkipLogic());
      updateGlobalStore([], true);
    }
  };

  var dropdown = lodash.map(lodash.groupBy(dependentToQuestions, 'group'), function (i, l) {
    return {
      label: l,
      item: i
    };
  }).map(function (g, gi) {
    return _extends({}, g, {
      key: gi
    });
  });
  return /*#__PURE__*/React__default.createElement(antd.Col, {
    key: "dependency-" + id + "-" + dependency.id,
    span: 24
  }, /*#__PURE__*/React__default.createElement(antd.Form.Item, {
    label: UIText.inputQuestionDependentToLabel,
    name: namePreffix + "-dependent_to-" + dependency.id
  }, /*#__PURE__*/React__default.createElement(antd.Row, {
    align: "middle",
    justify: "space-between",
    gutter: [12, 12]
  }, /*#__PURE__*/React__default.createElement(antd.Col, {
    span: 22
  }, /*#__PURE__*/React__default.createElement(antd.Select, {
    showSearch: true,
    className: styles['select-dropdown'],
    getPopupContainer: function getPopupContainer(triggerNode) {
      return triggerNode.parentElement;
    },
    onChange: function onChange(e) {
      return handleChangeDependentTo(dependency.id, e);
    },
    value: dependency.dependentTo || [],
    optionFilterProp: "children"
  }, dropdown.map(function (g) {
    return /*#__PURE__*/React__default.createElement(antd.Select.OptGroup, {
      key: g.key,
      label: g.label
    }, g.item.map(function (dq) {
      return /*#__PURE__*/React__default.createElement(antd.Select.Option, {
        key: dq.value + "-dq",
        value: dq.value,
        disabled: dependencies.map(function (d) {
          return d.dependentTo;
        }).includes(dq.value)
      }, dq.label);
    }));
  }))), /*#__PURE__*/React__default.createElement(antd.Col, {
    span: 2,
    align: "end"
  }, /*#__PURE__*/React__default.createElement(antd.Space, null, /*#__PURE__*/React__default.createElement(ButtonWithIcon, {
    type: "add-button",
    disabled: !(dependentToQuestions !== null && dependentToQuestions !== void 0 && dependentToQuestions.length) || dependentToQuestions.length === dependencies.length,
    onClick: handleAddMoreDependency
  }), /*#__PURE__*/React__default.createElement(ButtonWithIcon, {
    type: "delete-button",
    disabled: !dependency.dependentTo,
    onClick: function onClick() {
      return handleDeleteDependentTo(dependency.id);
    }
  }))))), /*#__PURE__*/React__default.createElement(antd.Row, {
    align: "middle",
    justify: "space-between",
    gutter: [12, 12]
  }, /*#__PURE__*/React__default.createElement(antd.Col, {
    span: 8
  }, /*#__PURE__*/React__default.createElement(antd.Form.Item, {
    label: UIText.inputQuestionDependentLogicLabel,
    initialValue: dependency.dependentLogic || [],
    name: namePreffix + "-dependent_logic-" + dependency.id
  }, /*#__PURE__*/React__default.createElement(antd.Select, {
    className: styles['select-dropdown'],
    options: dependency.dependencyLogicDropdownValue,
    getPopupContainer: function getPopupContainer(triggerNode) {
      return triggerNode.parentElement;
    },
    onChange: function onChange(e) {
      return handleChangeDependentLogic(dependency.id, e);
    }
  }))), /*#__PURE__*/React__default.createElement(antd.Col, {
    span: 16
  }, /*#__PURE__*/React__default.createElement(antd.Form.Item, {
    label: UIText.inputQuestionDependentAnswerLabel,
    name: namePreffix + "-dependent_answer-" + dependency.id
  }, !dependency.dependentTo && /*#__PURE__*/React__default.createElement(antd.Input, {
    disabled: true
  }), dependency.dependentToType === questionType.number && /*#__PURE__*/React__default.createElement(antd.InputNumber, {
    style: {
      width: '100%'
    },
    controls: false,
    keyboard: false,
    onChange: function onChange(e) {
      return handleChangeDependentAnswer(dependency.id, e);
    },
    value: dependency.dependentAnswer || null
  }), [questionType.option, questionType.multiple_option].includes(dependency.dependentToType) && /*#__PURE__*/React__default.createElement(antd.Select, {
    className: styles['select-dropdown'],
    options: dependency.dependencyAnswerDropdownValue,
    getPopupContainer: function getPopupContainer(triggerNode) {
      return triggerNode.parentElement;
    },
    onChange: function onChange(e) {
      return handleChangeDependentAnswer(dependency.id, e);
    },
    mode: "multiple",
    showSearch: true,
    allowClear: true,
    showArrow: true,
    value: Array.isArray(dependency.dependentAnswer) ? dependency.dependentAnswer : dependency.dependentAnswer ? [dependency.dependentAnswer] : []
  }), dependency.dependentToType === questionType.date && /*#__PURE__*/React__default.createElement(antd.DatePicker, {
    style: {
      width: '100%'
    },
    onChange: function onChange(e) {
      return handleChangeDependentAnswer(dependency.id, moment(e).format('YYYY-MM-DD'));
    }
  })))));
};

var QuestionSkipLogic = function QuestionSkipLogic(_ref3) {
  var _dependencies$;

  var question = _ref3.question;
  var id = question.id,
      questionGroupId = question.questionGroupId,
      dependency = question.dependency,
      currentQuestionOrder = question.order;
  var UIText = UIStore.useState(function (s) {
    return s.UIText;
  });
  var questionGroups = questionGroupFn.store.useState(function (s) {
    return s.questionGroups;
  });

  var _useState = React.useState(dependency !== null && dependency !== void 0 && dependency.length ? transformDependencyValue(dependency, questionGroups) : defaultSkipLogic()),
      dependencies = _useState[0],
      setDependencies = _useState[1];

  var currentQuestionGroupOrder = React.useMemo(function () {
    var _questionGroups$find;

    return (_questionGroups$find = questionGroups.find(function (qg) {
      return qg.id === questionGroupId;
    })) === null || _questionGroups$find === void 0 ? void 0 : _questionGroups$find.order;
  }, [questionGroups, questionGroupId]);
  var questions = React.useMemo(function () {
    return questionGroups.filter(function (qg) {
      return qg.order <= currentQuestionGroupOrder;
    }).flatMap(function (qg) {
      return qg.questions;
    }).filter(function (q) {
      return q.questionGroupId === questionGroupId && q.order < currentQuestionOrder || q.questionGroupId !== questionGroupId;
    });
  }, [questionGroups, currentQuestionGroupOrder, currentQuestionOrder, questionGroupId]);
  var dependentToQuestions = React.useMemo(function () {
    return questions.filter(function (q) {
      return dependencyTypes.flatMap(function (dt) {
        return dt.type;
      }).includes(q.type);
    }).map(function (q) {
      var group = questionGroups.find(function (g) {
        return g.id === q.questionGroupId;
      });
      return {
        label: group.order + "." + q.order + ". " + q.name,
        value: q.id,
        group: group.order + ". " + group.name
      };
    });
  }, [questions, questionGroups]);

  if (!(dependencies !== null && dependencies !== void 0 && (_dependencies$ = dependencies[0]) !== null && _dependencies$ !== void 0 && _dependencies$.dependentTo) && !(dependentToQuestions !== null && dependentToQuestions !== void 0 && dependentToQuestions.length)) {
    return /*#__PURE__*/React__default.createElement(antd.Alert, {
      message: UIText.infoNoDependentQuestionText,
      type: "info",
      showIcon: true,
      style: {
        marginBottom: 24
      }
    });
  }

  return /*#__PURE__*/React__default.createElement(antd.Row, {
    gutter: [24, 24]
  }, dependencies === null || dependencies === void 0 ? void 0 : dependencies.map(function (dependency, di) {
    return /*#__PURE__*/React__default.createElement(SettingSkipLogic, {
      key: "dependency-" + id + "-" + di,
      dependency: dependency,
      question: question,
      questions: questions,
      dependencies: dependencies,
      setDependencies: setDependencies,
      dependentToQuestions: dependentToQuestions
    });
  }));
};

var QuestionCustomParams = function QuestionCustomParams(_ref) {
  var _customParams$params2;

  var question = _ref.question;
  var id = question.id,
      questionGroupId = question.questionGroupId;
  var namePreffix = "question-" + id;
  var hostParams = UIStore.useState(function (s) {
    return s.hostParams;
  });
  var customParams = hostParams === null || hostParams === void 0 ? void 0 : hostParams.customParams;

  var _useState = React.useState(true),
      initLoad = _useState[0],
      setInitLoad = _useState[1];

  var _useState2 = React.useState({}),
      paramValue = _useState2[0],
      setParamValue = _useState2[1];

  React.useEffect(function () {
    if (initLoad) {
      var _customParams$params;

      var customParamObj = customParams === null || customParams === void 0 ? void 0 : (_customParams$params = customParams.params) === null || _customParams$params === void 0 ? void 0 : _customParams$params.map(function (cp) {
        var findValue = question === null || question === void 0 ? void 0 : question[cp.name];

        if (Array.isArray(findValue) && cp.type === 'input') {
          findValue = findValue[0];
        }

        if (findValue) {
          var _ref2;

          return _ref2 = {}, _ref2[cp.name] = findValue, _ref2;
        }

        return false;
      }).filter(function (x) {
        return x;
      });

      if (customParamObj.length) {
        setParamValue(customParamObj.reduce(function (res, curr) {
          return _extends({}, res, curr);
        }));
      }

      setInitLoad(false);
    }
  }, [customParams, question, initLoad]);
  var updateGlobalStore = React.useCallback(function (objKey, value, isDelete) {
    if (isDelete === void 0) {
      isDelete = false;
    }

    questionGroupFn.store.update(function (s) {
      s.questionGroups = s.questionGroups.map(function (qg) {
        if (qg.id === questionGroupId) {
          var questions = qg.questions.map(function (q) {
            if (q.id === id) {
              var _extends2;

              if (isDelete && q !== null && q !== void 0 && q[objKey]) {
                delete q[objKey];
                return q;
              }

              return _extends({}, q, (_extends2 = {}, _extends2[objKey] = value, _extends2));
            }

            return q;
          });
          return _extends({}, qg, {
            questions: questions
          });
        }

        return qg;
      });
    });
  }, [id, questionGroupId]);

  var handleChangeParameterValue = function handleChangeParameterValue(objKey, val) {
    var _extends3;

    setParamValue(_extends({}, paramValue, (_extends3 = {}, _extends3[objKey] = val, _extends3)));
    var isDelete = !val || !(val !== null && val !== void 0 && val.length);
    var value = Array.isArray(val) ? val : [val];
    updateGlobalStore(objKey, value, isDelete);
  };

  return customParams === null || customParams === void 0 ? void 0 : (_customParams$params2 = customParams.params) === null || _customParams$params2 === void 0 ? void 0 : _customParams$params2.map(function (cp, cpi) {
    var multipleProps = {};

    if (cp !== null && cp !== void 0 && cp.multiple) {
      multipleProps = {
        mode: 'multiple',
        showArrow: true
      };
    }

    return /*#__PURE__*/React__default.createElement("div", {
      key: cp.name + "-" + cpi
    }, /*#__PURE__*/React__default.createElement(antd.Form.Item, {
      label: cp.label,
      name: namePreffix + "-" + cp.name
    }, cp.type === 'option' && /*#__PURE__*/React__default.createElement(antd.Select, _extends({
      showSearch: true,
      allowClear: true,
      className: styles['select-dropdown'],
      options: (cp === null || cp === void 0 ? void 0 : cp.options) || [],
      optionFilterProp: "label",
      onChange: function onChange(val) {
        return handleChangeParameterValue(cp.name, val);
      },
      getPopupContainer: function getPopupContainer(triggerNode) {
        return triggerNode.parentElement;
      },
      value: (paramValue === null || paramValue === void 0 ? void 0 : paramValue[cp.name]) || []
    }, multipleProps)), cp.type === 'input' && /*#__PURE__*/React__default.createElement(antd.Input, {
      onChange: function onChange(e) {
        var _e$target;

        return handleChangeParameterValue(cp.name, e === null || e === void 0 ? void 0 : (_e$target = e.target) === null || _e$target === void 0 ? void 0 : _e$target.value);
      },
      value: (paramValue === null || paramValue === void 0 ? void 0 : paramValue[cp.name]) || null,
      allowClear: true
    })));
  });
};

var QuestionDefinition = function QuestionDefinition(_ref) {
  var _customParams$params;

  var index = _ref.index,
      question = _ref.question,
      questionGroup = _ref.questionGroup,
      isLastItem = _ref.isLastItem;
  var questionGroups = questionGroupFn.store.useState(function (s) {
    return s.questionGroups;
  });
  var questions = questionGroup === null || questionGroup === void 0 ? void 0 : questionGroup.questions;

  var _UIStore$useState = UIStore.useState(function (s) {
    return s;
  }),
      UIText = _UIStore$useState.UIText,
      hostParams = _UIStore$useState.hostParams,
      activeEditQuestions = _UIStore$useState.activeEditQuestions;

  var movingQ = UIStore.useState(function (s) {
    return s.activeMoveQuestion;
  });
  var isCopying = UIStore.useState(function (s) {
    return s.isCopyingQuestion;
  });

  var _useState = React.useState('setting'),
      activeTab = _useState[0],
      setActiveTab = _useState[1];

  var _useState2 = React.useState(false),
      isModalOpen = _useState2[0],
      setIsModalOpen = _useState2[1];

  var id = question.id,
      questionGroupId = question.questionGroupId,
      order = question.order,
      label = question.label,
      dependency = question.dependency,
      disableDelete = question.disableDelete;
  var defaultQuestionParam = hostParams === null || hostParams === void 0 ? void 0 : hostParams.defaultQuestionParam;
  var customParams = hostParams === null || hostParams === void 0 ? void 0 : hostParams.customParams;
  var enableCustomParams = customParams && (customParams === null || customParams === void 0 ? void 0 : customParams.label) && (customParams === null || customParams === void 0 ? void 0 : (_customParams$params = customParams.params) === null || _customParams$params === void 0 ? void 0 : _customParams$params.length);
  var allQuestions = questionGroups.map(function (qg) {
    return qg.questions;
  }).flatMap(function (x) {
    return x;
  }).map(function (q) {
    return _extends({}, q, {
      questionGroup: questionGroups.find(function (qg) {
        return q.questionGroupId === qg.id;
      })
    });
  });
  var dependant = React.useMemo(function () {
    var _movingQ$dependency, _movingQDependency$qu, _movingQDependant$que;

    var dependant = allQuestions.filter(function (q) {
      var _q$dependency;

      return (q === null || q === void 0 ? void 0 : (_q$dependency = q.dependency) === null || _q$dependency === void 0 ? void 0 : _q$dependency.filter(function (d) {
        return d.id === id;
      }).length) || false;
    });
    var disabled = {
      current: false,
      last: false
    };
    var movingQDependency = lodash.maxBy(movingQ === null || movingQ === void 0 ? void 0 : (_movingQ$dependency = movingQ.dependency) === null || _movingQ$dependency === void 0 ? void 0 : _movingQ$dependency.map(function (q) {
      return allQuestions.find(function (a) {
        return a.id === q.id;
      });
    }), 'questionGroup.order');

    if ((movingQDependency === null || movingQDependency === void 0 ? void 0 : (_movingQDependency$qu = movingQDependency.questionGroup) === null || _movingQDependency$qu === void 0 ? void 0 : _movingQDependency$qu.order) >= (questionGroup === null || questionGroup === void 0 ? void 0 : questionGroup.order)) {
      var _movingQDependency$qu2, _movingQDependency$qu3;

      disabled = _extends({}, disabled, {
        current: (movingQDependency === null || movingQDependency === void 0 ? void 0 : (_movingQDependency$qu2 = movingQDependency.questionGroup) === null || _movingQDependency$qu2 === void 0 ? void 0 : _movingQDependency$qu2.order) === questionGroup.order ? movingQDependency.order >= order : true
      });
      disabled = _extends({}, disabled, {
        last: (movingQDependency === null || movingQDependency === void 0 ? void 0 : (_movingQDependency$qu3 = movingQDependency.questionGroup) === null || _movingQDependency$qu3 === void 0 ? void 0 : _movingQDependency$qu3.order) === questionGroup.order ? movingQDependency.order >= order + 1 : true
      });
    }

    var movingQDependant = lodash.minBy(allQuestions.filter(function (q) {
      var _q$dependency2;

      return (q === null || q === void 0 ? void 0 : (_q$dependency2 = q.dependency) === null || _q$dependency2 === void 0 ? void 0 : _q$dependency2.filter(function (d) {
        return d.id === (movingQ === null || movingQ === void 0 ? void 0 : movingQ.id);
      }).length) || false;
    }), 'questionGroup.order');

    if ((movingQDependant === null || movingQDependant === void 0 ? void 0 : (_movingQDependant$que = movingQDependant.questionGroup) === null || _movingQDependant$que === void 0 ? void 0 : _movingQDependant$que.order) <= (questionGroup === null || questionGroup === void 0 ? void 0 : questionGroup.order)) {
      var _movingQDependant$que2, _movingQDependant$que3;

      disabled = _extends({}, disabled, {
        current: (movingQDependant === null || movingQDependant === void 0 ? void 0 : (_movingQDependant$que2 = movingQDependant.questionGroup) === null || _movingQDependant$que2 === void 0 ? void 0 : _movingQDependant$que2.order) === questionGroup.order ? movingQDependant.order <= order - 1 : true
      });
      disabled = _extends({}, disabled, {
        last: (movingQDependant === null || movingQDependant === void 0 ? void 0 : (_movingQDependant$que3 = movingQDependant.questionGroup) === null || _movingQDependant$que3 === void 0 ? void 0 : _movingQDependant$que3.order) === questionGroup.order ? movingQDependant.order <= order : true
      });
    }

    return {
      disabled: disabled,
      dependant: dependant
    };
  }, [id, order, questionGroup, allQuestions, movingQ]);
  var isEditQuestion = React.useMemo(function () {
    return activeEditQuestions.includes(id);
  }, [activeEditQuestions, id]);

  var handleEdit = function handleEdit() {
    UIStore.update(function (s) {
      s.activeEditQuestions = [].concat(activeEditQuestions, [id]);
    });
  };

  var handleCancelEdit = function handleCancelEdit() {
    UIStore.update(function (s) {
      s.activeEditQuestions = activeEditQuestions.filter(function (qId) {
        return qId !== id;
      });
    });
  };

  var handleCancelMove = function handleCancelMove() {
    UIStore.update(function (s) {
      s.isCopyingQuestion = false;
      s.activeMoveQuestion = null;
    });
  };

  var handleMove = function handleMove() {
    UIStore.update(function (s) {
      s.activeMoveQuestion = movingQ === question && !s.isCopyingQuestion ? null : question;
      s.isCopyingQuestion = false;
    });
  };

  var handleCopy = function handleCopy() {
    UIStore.update(function (s) {
      s.activeMoveQuestion = movingQ === question && s.isCopyingQuestion ? null : question;
      s.isCopyingQuestion = !s.isCopyingQuestion;
    });
  };

  var handleDelete = function handleDelete() {
    var newQuestions = questions.filter(function (q) {
      return q.id !== id;
    }).map(function (q) {
      if (q.order > order) {
        return _extends({}, q, {
          order: q.order - 1
        });
      }

      return q;
    });
    questionGroupFn.store.update(function (s) {
      s.questionGroups = s.questionGroups.map(function (qg) {
        if (qg.id === questionGroupId) {
          return _extends({}, qg, {
            questions: newQuestions
          });
        }

        return qg;
      });
    });
    setIsModalOpen(false);
  };

  var _handleOnAdd = function handleOnAdd(prevOrder) {
    var prevQ = questions.filter(function (q) {
      return q.order <= prevOrder;
    });
    var nextQ = questions.filter(function (q) {
      return q.order > prevOrder;
    }).map(function (q) {
      return _extends({}, q, {
        order: q.order + 1
      });
    });

    var newQ = _extends({}, defaultQuestionParam, {
      questionGroup: questionGroup,
      prevOrder: prevOrder,
      params: data.clear(['id', 'order', 'questionGroupId'], movingQ)
    });

    var newQuestions = [].concat(prevQ, [questionFn.add(newQ)], nextQ);
    questionGroupFn.store.update(function (s) {
      s.questionGroups = s.questionGroups.map(function (qg) {
        if (qg.id === questionGroupId) {
          return _extends({}, qg, {
            questions: lodash.orderBy(newQuestions, 'order')
          });
        }

        return qg;
      });
    });
    UIStore.update(function (s) {
      s.activeMoveQuestion = null;
      s.isCopyingQuestion = false;
    });
  };

  var _handleOnMove = function handleOnMove(prevOrder, lastItem) {
    if (lastItem === void 0) {
      lastItem = false;
    }

    var currentQ = _extends({}, movingQ, {
      questionGroupId: questionGroupId,
      order: questionGroupId !== movingQ.questionGroupId ? prevOrder + 1 : movingQ.order < prevOrder ? prevOrder : prevOrder + 1
    });

    var changedQg = questionGroups.filter(function (qg) {
      return qg.id === movingQ.questionGroupId || qg.id === questionGroupId;
    }).map(function (qg) {
      var addedQ = qg.id === questionGroupId ? currentQ : false;
      var newQuestions = qg.questions.filter(function (q) {
        return q.id !== movingQ.id;
      });

      if (questionGroupId !== movingQ.questionGroupId && newQuestions.length < qg.questions.length) {
        newQuestions = newQuestions.map(function (q, qi) {
          return _extends({}, q, {
            order: qi + 1
          });
        });
      }

      if (questionGroupId !== movingQ.questionGroupId && qg.id === questionGroupId) {
        newQuestions = newQuestions.map(function (x) {
          if (lastItem) {
            return x;
          }

          if (x.order >= prevOrder + 1) {
            return _extends({}, x, {
              order: x.order + 1
            });
          }

          return x;
        });
      }

      if (questionGroupId === movingQ.questionGroupId) {
        newQuestions = newQuestions.map(function (x) {
          if (lastItem) {
            if (x.order > movingQ.order) {
              return _extends({}, x, {
                order: x.order - 1
              });
            }

            return x;
          }

          if (prevOrder > movingQ.order && x.order > movingQ.order && x.order <= prevOrder) {
            return _extends({}, x, {
              order: x.order - 1
            });
          }

          if (prevOrder < movingQ.order && x.order < movingQ.order && x.order >= prevOrder + 1) {
            return _extends({}, x, {
              order: x.order + 1
            });
          }

          return x;
        });
      }

      newQuestions = addedQ ? [].concat(newQuestions, [addedQ]) : newQuestions;
      return _extends({}, qg, {
        questions: lodash.orderBy(newQuestions, 'order')
      });
    });
    var oldQg = questionGroups.filter(function (qg) {
      return qg.id !== movingQ.questionGroupId;
    });
    oldQg = movingQ.questionGroupId !== questionGroupId ? oldQg.filter(function (qg) {
      return qg.id !== questionGroupId;
    }) : oldQg;
    questionGroupFn.store.update(function (s) {
      s.questionGroups = lodash.orderBy([].concat(oldQg, changedQg), 'order');
    });
    UIStore.update(function (s) {
      s.activeMoveQuestion = null;
    });
  };

  var rightButtons = [{
    type: 'copy-button',
    onClick: handleCopy
  }, {
    type: 'delete-button',
    onClick: function onClick() {
      return setIsModalOpen(true);
    },
    disabled: !index && isLastItem || dependant.dependant.length || disableDelete
  }];
  var leftButtons = [{
    type: 'move-button',
    onClick: handleMove,
    disabled: !index && isLastItem
  }, {
    type: 'show-button',
    isExpand: isEditQuestion,
    onClick: handleEdit,
    onCancel: handleCancelEdit
  }];
  return /*#__PURE__*/React__default.createElement("div", null, /*#__PURE__*/React__default.createElement(ButtonAddMove, {
    text: movingQ ? isCopying ? UIText.buttonCopyQuestionText : UIText.buttonMoveQuestionText : UIText.buttonAddNewQuestionText,
    disabled: movingQ === question && !isCopying || (movingQ === null || movingQ === void 0 ? void 0 : movingQ.order) + 1 === order && (movingQ === null || movingQ === void 0 ? void 0 : movingQ.questionGroupId) === questionGroupId && !isCopying || dependant.disabled.current,
    handleCancelMove: handleCancelMove,
    movingItem: movingQ,
    isCopying: isCopying,
    handleOnAdd: function handleOnAdd() {
      return _handleOnAdd(order - 1);
    },
    handleOnMove: function handleOnMove() {
      return isCopying ? _handleOnAdd(order - 1) : _handleOnMove(order - 1);
    }
  }), /*#__PURE__*/React__default.createElement(antd.Card, {
    key: index + "-" + id,
    title: /*#__PURE__*/React__default.createElement(CardTitle, {
      title: questionGroup.order + "." + order + ". " + label,
      buttons: leftButtons
    }),
    headStyle: {
      textAlign: 'left',
      padding: '0 12px',
      backgroundColor: (movingQ === null || movingQ === void 0 ? void 0 : movingQ.id) === id ? '#FFF2CA' : '#FFF',
      border: (movingQ === null || movingQ === void 0 ? void 0 : movingQ.id) === id ? '1px dashed #ffc107' : 'none'
    },
    bodyStyle: {
      borderTop: isEditQuestion ? '1px solid #f3f3f3' : 'none',
      padding: isEditQuestion ? 24 : 0
    },
    loading: false,
    extra: /*#__PURE__*/React__default.createElement(CardTitle, {
      buttons: rightButtons,
      dependency: allQuestions.filter(function (q) {
        return dependency === null || dependency === void 0 ? void 0 : dependency.find(function (d) {
          return d.id === q.id;
        });
      })
    })
  }, isEditQuestion && /*#__PURE__*/React__default.createElement("div", null, /*#__PURE__*/React__default.createElement(antd.Tabs, {
    defaultActiveKey: activeTab,
    onChange: function onChange(key) {
      return setActiveTab(key);
    },
    tabBarGutter: 24,
    className: styles['tabs-wrapper']
  }, /*#__PURE__*/React__default.createElement(antd.Tabs.TabPane, {
    tab: UIText.questionSettingTabPane,
    key: "setting"
  }), /*#__PURE__*/React__default.createElement(antd.Tabs.TabPane, {
    tab: UIText.questionSkipLogicTabPane,
    key: "skip-logic"
  }), enableCustomParams && /*#__PURE__*/React__default.createElement(antd.Tabs.TabPane, {
    tab: (customParams === null || customParams === void 0 ? void 0 : customParams.label) || UIText.questionCustomParamsTabPane,
    key: "custom-params"
  })), activeTab === 'setting' && /*#__PURE__*/React__default.createElement(QuestionSetting, {
    question: question,
    dependant: dependant.dependant
  }), activeTab === 'skip-logic' && /*#__PURE__*/React__default.createElement(QuestionSkipLogic, {
    question: question
  }), enableCustomParams && activeTab === 'custom-params' && /*#__PURE__*/React__default.createElement(QuestionCustomParams, {
    question: question
  }))), isLastItem && /*#__PURE__*/React__default.createElement(ButtonAddMove, {
    text: movingQ ? isCopying ? UIText.buttonCopyQuestionText : UIText.buttonMoveQuestionText : UIText.buttonAddNewQuestionText,
    disabled: movingQ === question && !isCopying || dependant.disabled.last,
    movingItem: movingQ,
    handleCancelMove: handleCancelMove,
    handleOnAdd: function handleOnAdd() {
      return _handleOnAdd(order);
    },
    handleOnMove: function handleOnMove() {
      return isCopying ? _handleOnAdd(order) : _handleOnMove(order, true);
    }
  }), /*#__PURE__*/React__default.createElement(AlertPopup, {
    visible: isModalOpen,
    onConfirm: handleDelete,
    onCancel: function onCancel() {
      return setIsModalOpen(false);
    },
    okButtonProps: {
      danger: true
    },
    title: UIText.alertDeleteQuestionTitle,
    okText: UIText.buttonDeleteText
  }, UIText.alertDeleteQuestion));
};

var QuestionGroupDefinition = function QuestionGroupDefinition(_ref) {
  var index = _ref.index,
      questionGroup = _ref.questionGroup,
      isLastItem = _ref.isLastItem;

  var _useState = React.useState(false),
      isModalOpen = _useState[0],
      setIsModalOpen = _useState[1];

  var questionGroups = questionGroupFn.store.useState(function (s) {
    return s.questionGroups;
  });
  var movingQg = UIStore.useState(function (s) {
    return s.activeMoveQuestionGroup;
  });

  var _UIStore$useState = UIStore.useState(function (s) {
    return s;
  }),
      activeQuestionGroups = _UIStore$useState.activeQuestionGroups,
      activeEditQuestionGroups = _UIStore$useState.activeEditQuestionGroups,
      activeEditQuestions = _UIStore$useState.activeEditQuestions,
      hostParams = _UIStore$useState.hostParams;

  var defaultQuestionParam = hostParams === null || hostParams === void 0 ? void 0 : hostParams.defaultQuestionParam;
  var id = questionGroup.id,
      label = questionGroup.label,
      questions = questionGroup.questions,
      order = questionGroup.order;
  var questionIds = questions.map(function (q) {
    return q.id;
  });

  var _UIStore$useState2 = UIStore.useState(function (s) {
    return s.UIText;
  }),
      buttonAddNewQuestionGroupText = _UIStore$useState2.buttonAddNewQuestionGroupText,
      buttonMoveQuestionGroupText = _UIStore$useState2.buttonMoveQuestionGroupText,
      alertDeleteQuestionGroupTitle = _UIStore$useState2.alertDeleteQuestionGroupTitle,
      alertDeleteQuestionGroup = _UIStore$useState2.alertDeleteQuestionGroup,
      buttonDeleteText = _UIStore$useState2.buttonDeleteText;

  var showQuestion = React.useMemo(function () {
    return activeQuestionGroups.includes(id);
  }, [activeQuestionGroups, id]);
  var isEditQuestionGroup = React.useMemo(function () {
    return activeEditQuestionGroups.includes(id);
  }, [activeEditQuestionGroups, id]);
  var disableDelete = React.useMemo(function () {
    var _questions$filter;

    return (_questions$filter = questions.filter(function (q) {
      return q === null || q === void 0 ? void 0 : q.disableDelete;
    })) === null || _questions$filter === void 0 ? void 0 : _questions$filter.length;
  }, [questions]);

  var handleHideQuestions = function handleHideQuestions() {
    UIStore.update(function (s) {
      s.activeQuestionGroups = activeQuestionGroups.filter(function (qgId) {
        return qgId !== id;
      });
    });
  };

  var handleCancelEditGroup = function handleCancelEditGroup() {
    UIStore.update(function (s) {
      s.activeEditQuestionGroups = activeEditQuestionGroups.filter(function (qgId) {
        return qgId !== id;
      });
    });
  };

  var handleShowQuestions = function handleShowQuestions() {
    UIStore.update(function (s) {
      s.activeQuestionGroups = [].concat(activeQuestionGroups, [id]);
    });
    handleCancelEditGroup();
  };

  var handleEditGroup = function handleEditGroup() {
    UIStore.update(function (s) {
      s.activeEditQuestionGroups = [].concat(activeEditQuestionGroups, [id]);
    });
    handleHideQuestions();
  };

  var handleCancelMove = function handleCancelMove() {
    UIStore.update(function (s) {
      s.activeMoveQuestionGroup = null;
    });
  };

  var handleMove = function handleMove() {
    UIStore.update(function (s) {
      s.activeMoveQuestionGroup = movingQg === questionGroup ? null : questionGroup;
    });
  };

  var handleExpandAll = function handleExpandAll() {
    handleShowQuestions();
    UIStore.update(function (s) {
      s.activeEditQuestions = lodash.uniq([].concat(s.activeEditQuestions, questionIds));
    });
  };

  var handleCancelExpandAll = function handleCancelExpandAll() {
    handleHideQuestions();
    UIStore.update(function (s) {
      s.activeEditQuestions = lodash.difference(s.activeEditQuestions, questionIds);
    });
  };

  var handleDelete = function handleDelete() {
    var newQuestionGroups = questionGroups.filter(function (qg) {
      return id !== qg.id;
    }).map(function (qg) {
      if (qg.order > order) {
        return _extends({}, qg, {
          order: qg.order - 1
        });
      }

      return qg;
    });
    questionGroupFn.store.update(function (s) {
      s.questionGroups = newQuestionGroups;
    });
    setIsModalOpen(false);
  };

  var _handleOnAdd = function handleOnAdd(prevOrder) {
    var prevQg = questionGroups.filter(function (qg) {
      return qg.order <= prevOrder;
    });
    var nextQg = questionGroups.filter(function (qg) {
      return qg.order > prevOrder;
    }).map(function (qg) {
      return _extends({}, qg, {
        order: qg.order + 1
      });
    });
    var newQuestionGroups = [].concat(prevQg, [questionGroupFn.add({
      prevOrder: prevOrder,
      defaultQuestionParam: defaultQuestionParam
    })], nextQg);
    questionGroupFn.store.update(function (s) {
      s.questionGroups = newQuestionGroups;
    });
  };

  var _handleOnMove = function handleOnMove(prevOrder, lastItem) {
    if (lastItem === void 0) {
      lastItem = false;
    }

    var currentQg = _extends({}, movingQg, {
      order: movingQg.order < prevOrder ? prevOrder : prevOrder + 1
    });

    var orderedQg = questionGroups.filter(function (qg) {
      return qg.order !== movingQg.order;
    }).map(function (x) {
      if (lastItem) {
        if (x.order > movingQg.order) {
          return _extends({}, x, {
            order: x.order - 1
          });
        }

        return x;
      }

      if (prevOrder > movingQg.order && x.order > movingQg.order && x.order <= prevOrder) {
        return _extends({}, x, {
          order: x.order - 1
        });
      }

      if (prevOrder < movingQg.order && x.order < movingQg.order && x.order >= prevOrder + 1) {
        return _extends({}, x, {
          order: x.order + 1
        });
      }

      return x;
    });
    questionGroupFn.store.update(function (s) {
      s.questionGroups = lodash.orderBy([].concat(orderedQg, [currentQg]), 'order');
    });
    UIStore.update(function (s) {
      s.activeMoveQuestionGroup = null;
    });
  };

  var dependant = React.useMemo(function () {
    var _movingQg$questions, _movingQg$questions2, _movingQ$map, _movingQDependency$qu, _movingQDependant$que;

    var allQ = questionGroups.map(function (qg) {
      return qg.questions;
    }).flatMap(function (x) {
      return x;
    }).map(function (q) {
      return _extends({}, q, {
        questionGroup: questionGroups.find(function (qg) {
          return q.questionGroupId === qg.id;
        })
      });
    });
    var dependencies = allQ.filter(function (q) {
      var _q$dependency;

      return (q === null || q === void 0 ? void 0 : (_q$dependency = q.dependency) === null || _q$dependency === void 0 ? void 0 : _q$dependency.filter(function (d) {
        return questionIds.find(function (qid) {
          return qid === d.id;
        });
      }).length) || false;
    });
    var movingQids = (movingQg === null || movingQg === void 0 ? void 0 : (_movingQg$questions = movingQg.questions) === null || _movingQg$questions === void 0 ? void 0 : _movingQg$questions.map(function (q) {
      return q.id;
    })) || [];
    var movingQ = movingQg === null || movingQg === void 0 ? void 0 : (_movingQg$questions2 = movingQg.questions) === null || _movingQg$questions2 === void 0 ? void 0 : _movingQg$questions2.filter(function (q) {
      var _q$dependency2, _q$dependency2$filter;

      var selfDependency = (q === null || q === void 0 ? void 0 : (_q$dependency2 = q.dependency) === null || _q$dependency2 === void 0 ? void 0 : (_q$dependency2$filter = _q$dependency2.filter(function (d) {
        return movingQids.includes(d.id);
      })) === null || _q$dependency2$filter === void 0 ? void 0 : _q$dependency2$filter.length) || 0;
      return !selfDependency;
    });
    var disabled = {
      current: false,
      last: false
    };
    var movingQDependency = lodash.maxBy((movingQ === null || movingQ === void 0 ? void 0 : (_movingQ$map = movingQ.map(function (q) {
      var _q$dependency3;

      return (q === null || q === void 0 ? void 0 : (_q$dependency3 = q.dependency) === null || _q$dependency3 === void 0 ? void 0 : _q$dependency3.map(function (q) {
        return allQ.find(function (a) {
          return a.id === q.id;
        });
      })) || [];
    })) === null || _movingQ$map === void 0 ? void 0 : _movingQ$map.flatMap(function (q) {
      return q;
    })) || [], 'questionGroup.order');

    if ((movingQDependency === null || movingQDependency === void 0 ? void 0 : (_movingQDependency$qu = movingQDependency.questionGroup) === null || _movingQDependency$qu === void 0 ? void 0 : _movingQDependency$qu.order) >= order) {
      disabled = {
        current: true,
        last: true
      };
    }

    var movingQDependant = lodash.minBy(allQ.filter(function (q) {
      var _q$dependency4;

      return (q === null || q === void 0 ? void 0 : (_q$dependency4 = q.dependency) === null || _q$dependency4 === void 0 ? void 0 : _q$dependency4.filter(function (d) {
        return movingQ === null || movingQ === void 0 ? void 0 : movingQ.find(function (qs) {
          return qs.id === d.id;
        });
      }).length) || false;
    }), 'questionGroup.order');
    var dependantIsLessThanOrder = (movingQDependant === null || movingQDependant === void 0 ? void 0 : (_movingQDependant$que = movingQDependant.questionGroup) === null || _movingQDependant$que === void 0 ? void 0 : _movingQDependant$que.order) < (isLastItem ? order + 1 : order);

    if (dependantIsLessThanOrder) {
      disabled = {
        current: true,
        last: true
      };
    }

    return {
      disabled: disabled,
      dependant: dependencies
    };
  }, [questionGroups, questionIds, movingQg, order, isLastItem]);
  var rightButtons = [{
    type: 'expand-all-button',
    isExpand: showQuestion && lodash.intersection(activeEditQuestions, questionIds).length,
    onClick: handleExpandAll,
    onCancel: handleCancelExpandAll
  }, {
    type: 'delete-button',
    onClick: function onClick() {
      return setIsModalOpen(true);
    },
    disabled: !index && isLastItem || disableDelete
  }, {
    type: 'edit-button',
    isExpand: isEditQuestionGroup,
    onClick: handleEditGroup,
    onCancel: handleCancelEditGroup
  }];
  var leftButtons = [{
    type: 'move-button',
    onClick: handleMove,
    onCancel: handleHideQuestions,
    disabled: !index && isLastItem
  }, {
    type: 'show-button',
    isExpand: showQuestion,
    onClick: handleShowQuestions,
    onCancel: handleHideQuestions
  }];
  return /*#__PURE__*/React__default.createElement("div", null, /*#__PURE__*/React__default.createElement(ButtonAddMove, {
    text: movingQg ? buttonMoveQuestionGroupText : buttonAddNewQuestionGroupText,
    disabled: movingQg === questionGroup || (movingQg === null || movingQg === void 0 ? void 0 : movingQg.order) + 1 === order || dependant.disabled.current,
    movingItem: movingQg,
    handleCancelMove: handleCancelMove,
    handleOnAdd: function handleOnAdd() {
      return _handleOnAdd(order - 1);
    },
    handleOnMove: function handleOnMove() {
      return _handleOnMove(order - 1);
    }
  }), /*#__PURE__*/React__default.createElement(antd.Card, {
    key: index + "-" + id,
    title: /*#__PURE__*/React__default.createElement(CardTitle, {
      buttons: leftButtons,
      title: order + ". " + label
    }),
    headStyle: {
      textAlign: 'left',
      padding: '0 12px',
      backgroundColor: (movingQg === null || movingQg === void 0 ? void 0 : movingQg.id) === id ? '#FFF2CA' : '#FFF',
      border: (movingQg === null || movingQg === void 0 ? void 0 : movingQg.id) === id ? '1px dashed #ffc107' : 'none'
    },
    bodyStyle: {
      padding: isEditQuestionGroup || showQuestion ? 24 : 0,
      borderTop: isEditQuestionGroup || showQuestion ? '1px solid #f3f3f3' : 'none'
    },
    extra: /*#__PURE__*/React__default.createElement(CardTitle, {
      buttons: rightButtons
    })
  }, isEditQuestionGroup && /*#__PURE__*/React__default.createElement(QuestionGroupSetting, questionGroup), showQuestion && questions.map(function (q, qi) {
    return /*#__PURE__*/React__default.createElement(QuestionDefinition, {
      key: "question-definition-" + qi,
      index: qi,
      question: q,
      questionGroup: questionGroup,
      isLastItem: qi === questions.length - 1
    });
  })), isLastItem && /*#__PURE__*/React__default.createElement(ButtonAddMove, {
    text: movingQg ? buttonMoveQuestionGroupText : buttonAddNewQuestionGroupText,
    disabled: movingQg === questionGroup || dependant.disabled.last,
    movingItem: movingQg,
    handleCancelMove: handleCancelMove,
    handleOnAdd: function handleOnAdd() {
      return _handleOnAdd(order);
    },
    handleOnMove: function handleOnMove() {
      return _handleOnMove(order, true);
    }
  }), /*#__PURE__*/React__default.createElement(AlertPopup, {
    visible: isModalOpen,
    onConfirm: handleDelete,
    onCancel: function onCancel() {
      return setIsModalOpen(false);
    },
    okButtonProps: {
      danger: true
    },
    title: alertDeleteQuestionGroupTitle,
    okText: buttonDeleteText
  }, alertDeleteQuestionGroup));
};

var WebformEditor = function WebformEditor(_ref) {
  var _ref$onSave = _ref.onSave,
      onSave = _ref$onSave === void 0 ? false : _ref$onSave,
      _ref$initialValue = _ref.initialValue,
      initialValue = _ref$initialValue === void 0 ? null : _ref$initialValue,
      _ref$settingTreeDropd = _ref.settingTreeDropdownValue,
      settingTreeDropdownValue = _ref$settingTreeDropd === void 0 ? [{
    label: null,
    value: null
  }] : _ref$settingTreeDropd,
      _ref$settingCascadeUR = _ref.settingCascadeURL,
      settingCascadeURL = _ref$settingCascadeUR === void 0 ? [{
    name: null,
    endpoint: null,
    initial: 0,
    list: false
  }] : _ref$settingCascadeUR,
      _ref$settingHintURL = _ref.settingHintURL,
      settingHintURL = _ref$settingHintURL === void 0 ? {
    questionTypes: [],
    settings: [{
      name: null,
      endpoint: null,
      path: []
    }]
  } : _ref$settingHintURL,
      _ref$defaultQuestion = _ref.defaultQuestion,
      defaultQuestion = _ref$defaultQuestion === void 0 ? {
    type: null,
    name: null,
    required: null
  } : _ref$defaultQuestion,
      _ref$limitQuestionTyp = _ref.limitQuestionType,
      limitQuestionType = _ref$limitQuestionTyp === void 0 ? [] : _ref$limitQuestionTyp,
      _ref$customParams = _ref.customParams,
      customParams = _ref$customParams === void 0 ? {
    label: null,
    params: [{
      name: null,
      label: 'Single Option Param',
      type: 'option',
      multiple: true,
      options: []
    }, {
      name: null,
      label: 'Multiple Option Param',
      type: 'option',
      multiple: false,
      options: []
    }, {
      name: null,
      label: 'Input Param',
      type: 'input'
    }]
  } : _ref$customParams;

  var _useState = React.useState(defaultQuestion),
      init = _useState[0],
      setInit = _useState[1];

  var formStore = formFn.store.useState(function (s) {
    return s;
  });
  var current = UIStore.useState(function (s) {
    return s.current;
  });

  var _UIStore$useState = UIStore.useState(function (s) {
    return s;
  }),
      UIText = _UIStore$useState.UIText,
      hostParams = _UIStore$useState.hostParams;

  var questionGroups = questionGroupFn.store.useState(function (s) {
    return s.questionGroups;
  });
  var activeEditFormSetting = UIStore.useState(function (s) {
    return s.activeEditFormSetting;
  });
  var defaultQuestionParam = hostParams === null || hostParams === void 0 ? void 0 : hostParams.defaultQuestionParam;
  var currentTab = current.tab;
  var formTabPane = UIText.formTabPane,
      formTranslationPane = UIText.formTranslationPane,
      previewTabPane = UIText.previewTabPane,
      questionCount = UIText.questionCount,
      questionGroupCount = UIText.questionGroupCount,
      mandatoryQuestionCount = UIText.mandatoryQuestionCount,
      version = UIText.version,
      validationErrorTitle = UIText.validationErrorTitle,
      validationErrorDescription = UIText.validationErrorDescription;

  var _ErrorStore$useState = ErrorStore.useState(function (s) {
    return s;
  }),
      questionGroupErrors = _ErrorStore$useState.questionGroupErrors,
      questionErrors = _ErrorStore$useState.questionErrors;

  if (!initialValue) {
    console.error('initialValue required as an empty object {}');
  }

  React.useEffect(function () {
    var _settingHintURL$setti, _settingHintURL$setti2, _customParams$params;

    var checkDefaultQuestion = defaultQuestion ? Object.values(defaultQuestion).filter(function (x) {
      return x;
    }).length : false;
    var sanitizeSettingTreeDropdownValue = settingTreeDropdownValue.filter(function (x) {
      return (x === null || x === void 0 ? void 0 : x.label) && (x === null || x === void 0 ? void 0 : x.value);
    });
    var sanitizeSettingCascadeURL = settingCascadeURL.filter(function (x) {
      return (x === null || x === void 0 ? void 0 : x.name) && (x === null || x === void 0 ? void 0 : x.endpoint);
    }).map(function (x, xi) {
      return _extends({}, x, {
        id: (x === null || x === void 0 ? void 0 : x.id) || xi + 1
      });
    });
    var sanitizeSettingHintURL = !lodash.isEmpty(settingHintURL) ? _extends({}, settingHintURL, {
      settings: settingHintURL === null || settingHintURL === void 0 ? void 0 : (_settingHintURL$setti = settingHintURL.settings) === null || _settingHintURL$setti === void 0 ? void 0 : (_settingHintURL$setti2 = _settingHintURL$setti.filter(function (x) {
        var _x$path;

        return (x === null || x === void 0 ? void 0 : x.name) && (x === null || x === void 0 ? void 0 : x.endpoint) && (x === null || x === void 0 ? void 0 : (_x$path = x.path) === null || _x$path === void 0 ? void 0 : _x$path.length);
      })) === null || _settingHintURL$setti2 === void 0 ? void 0 : _settingHintURL$setti2.map(function (x, xi) {
        return _extends({}, x, {
          id: (x === null || x === void 0 ? void 0 : x.id) || xi + 1
        });
      })
    }) : {};
    var sanitizeDefaultQuestion = {
      type: (defaultQuestion === null || defaultQuestion === void 0 ? void 0 : defaultQuestion.type) || questionType.input,
      name: defaultQuestion === null || defaultQuestion === void 0 ? void 0 : defaultQuestion.name,
      required: (defaultQuestion === null || defaultQuestion === void 0 ? void 0 : defaultQuestion.required) || false
    };
    var sanitizeCustomParams = customParams === null || customParams === void 0 ? void 0 : (_customParams$params = customParams.params) === null || _customParams$params === void 0 ? void 0 : _customParams$params.filter(function (x) {
      return x === null || x === void 0 ? void 0 : x.name;
    });
    UIStore.update(function (s) {
      var _sanitizeSettingHintU;

      if (sanitizeSettingTreeDropdownValue.length) {
        s.hostParams = _extends({}, s.hostParams, {
          settingTreeDropdownValue: sanitizeSettingTreeDropdownValue
        });
      }

      if (sanitizeSettingCascadeURL.length) {
        s.hostParams = _extends({}, s.hostParams, {
          settingCascadeURL: sanitizeSettingCascadeURL
        });
      }

      if (!lodash.isEmpty(sanitizeSettingHintURL) && sanitizeSettingHintURL !== null && sanitizeSettingHintURL !== void 0 && (_sanitizeSettingHintU = sanitizeSettingHintURL.settings) !== null && _sanitizeSettingHintU !== void 0 && _sanitizeSettingHintU.length) {
        s.hostParams = _extends({}, s.hostParams, {
          settingHintURL: sanitizeSettingHintURL
        });
      }

      if (checkDefaultQuestion) {
        s.hostParams = _extends({}, s.hostParams, {
          defaultQuestionParam: sanitizeDefaultQuestion
        });
      } else {
        s.hostParams = _extends({}, s.hostParams, {
          defaultQuestionParam: {}
        });
      }

      if (limitQuestionType.length) {
        s.hostParams = _extends({}, s.hostParams, {
          limitQuestionType: Object.keys(questionType).map(function (key) {
            var _questionType$key;

            return {
              label: (_questionType$key = questionType[key]) === null || _questionType$key === void 0 ? void 0 : _questionType$key.split('_').join(' '),
              value: questionType[key]
            };
          }).filter(function (x) {
            return limitQuestionType.includes(x.value);
          })
        });
      }

      if (customParams !== null && customParams !== void 0 && customParams.label && sanitizeCustomParams !== null && sanitizeCustomParams !== void 0 && sanitizeCustomParams.length) {
        s.hostParams = _extends({}, s.hostParams, {
          customParams: _extends({}, customParams, {
            params: sanitizeCustomParams
          })
        });
      }
    });
  }, [settingTreeDropdownValue, settingCascadeURL, settingHintURL, defaultQuestion, limitQuestionType, customParams]);
  React.useEffect(function () {
    if (defaultQuestionParam && init) {
      questionGroupFn.store.update(function (s) {
        s.questionGroups = [questionGroupFn.add({
          defaultQuestionParam: defaultQuestionParam
        })];
      });
      setInit(false);
    }
  }, [defaultQuestionParam, init]);
  React.useEffect(function () {
    if (!lodash.isEmpty(initialValue)) {
      var initialData = data.toEditor(initialValue);
      formFn.store.update(function (s) {
        var _initialData$language;

        s.id = (initialData === null || initialData === void 0 ? void 0 : initialData.id) || generateId();
        s.version = (initialData === null || initialData === void 0 ? void 0 : initialData.version) || 1;
        s.name = (initialData === null || initialData === void 0 ? void 0 : initialData.name) || 'Unknown Form';
        s.description = (initialData === null || initialData === void 0 ? void 0 : initialData.description) || 'Unknown Description';
        s.languages = (initialData === null || initialData === void 0 ? void 0 : (_initialData$language = initialData.languages) === null || _initialData$language === void 0 ? void 0 : _initialData$language.filter(function (x) {
          return x !== 'en';
        })) || [];
        s.defaultLanguage = (initialData === null || initialData === void 0 ? void 0 : initialData.defaultLanguage) || 'en';
        s.translations = (initialData === null || initialData === void 0 ? void 0 : initialData.translations) || [];
      });
      questionGroupFn.store.update(function (s) {
        s.questionGroups = initialData.questionGroups;
      });
    } else {
      var defaultForm = formFn.add();
      formFn.store.update(function (s) {
        s.id = defaultForm.id;
        s.name = defaultForm.name;
        s.version = defaultForm.version;
        s.description = defaultForm.description;
        s.languages = [];
        s.defaultLanguage = 'en';
        s.translations = [];
      });
      questionGroupFn.store.update(function (s) {
        s.questionGroups = [questionGroupFn.add({})];
      });
    }
  }, [initialValue]);

  var handleTabsOnChange = function handleTabsOnChange(e) {
    UIStore.update(function (s) {
      s.current = _extends({}, current, {
        tab: e
      });
    });
  };

  var handleShowFormSetting = function handleShowFormSetting(e) {
    e.preventDefault();
    UIStore.update(function (s) {
      s.activeEditFormSetting = activeEditFormSetting ? false : true;
    });
  };

  var handleSave = function handleSave() {
    if (onSave) {
      if (questionGroupErrors.length || questionErrors.length) {
        antd.notification.error({
          message: validationErrorTitle,
          description: validationErrorDescription
        });
        return;
      }

      onSave(data.toWebform(formStore, questionGroups));
    }
  };

  var questions = questionGroups.reduce(function (curr, qg) {
    return [].concat(curr, qg.questions);
  }, []);
  var mandatory = questions.filter(function (q) {
    return q === null || q === void 0 ? void 0 : q.required;
  });
  var tabProps = [{
    icon: tb.TbEdit,
    tab: formTabPane,
    key: 'edit-form'
  }, {
    icon: md.MdOutlineLanguage,
    tab: formTranslationPane,
    key: 'translations'
  }, {
    icon: vsc.VscPreview,
    tab: previewTabPane,
    key: 'preview'
  }];
  return /*#__PURE__*/React__default.createElement("div", {
    key: "container",
    className: styles.container
  }, /*#__PURE__*/React__default.createElement(antd.Card, null, /*#__PURE__*/React__default.createElement(antd.Tabs, {
    defaultActiveKey: current.tab,
    onChange: handleTabsOnChange,
    tabBarExtraContent: /*#__PURE__*/React__default.createElement("div", {
      className: styles['right-tabs']
    }, /*#__PURE__*/React__default.createElement(antd.Space, null, /*#__PURE__*/React__default.createElement(antd.Tag, {
      style: {
        margin: 0
      }
    }, questions.length, " ", questionCount), /*#__PURE__*/React__default.createElement(antd.Tag, {
      style: {
        margin: 0
      }
    }, mandatory.length, " ", mandatoryQuestionCount), /*#__PURE__*/React__default.createElement(antd.Tag, {
      style: {
        margin: 0
      }
    }, questionGroups.length, " ", questionGroupCount), /*#__PURE__*/React__default.createElement(antd.Tag, {
      style: {
        margin: 0
      }
    }, version, " ", formStore.version || 1), currentTab === 'edit-form' && /*#__PURE__*/React__default.createElement(ButtonWithIcon, {
      type: "edit-button",
      isExpand: activeEditFormSetting,
      onClick: handleShowFormSetting,
      onCancel: handleShowFormSetting
    }), /*#__PURE__*/React__default.createElement(ButtonWithIcon, {
      type: "save-button",
      onClick: handleSave
    }))),
    tabBarGutter: 24,
    className: styles['tabs-wrapper'] + " " + styles['tabs-wrapper-sticky']
  }, tabProps.map(function (prop) {
    return /*#__PURE__*/React__default.createElement(antd.Tabs.TabPane, {
      tab: /*#__PURE__*/React__default.createElement(antd.Space, {
        size: 2,
        className: styles['tab-pane-name-icon']
      }, /*#__PURE__*/React__default.createElement(prop.icon, null), " ", prop.tab),
      key: prop.key
    });
  })), currentTab === 'edit-form' && /*#__PURE__*/React__default.createElement(FormWrapper, null, activeEditFormSetting && /*#__PURE__*/React__default.createElement(FormDefinition, formStore), questionGroups.map(function (qg, qgi) {
    return /*#__PURE__*/React__default.createElement(QuestionGroupDefinition, {
      key: "question-group-definition-" + qgi,
      index: qgi,
      questionGroup: qg,
      isLastItem: qgi === questionGroups.length - 1
    });
  })), currentTab === 'translations' && /*#__PURE__*/React__default.createElement(FormTranslations, null), currentTab === 'preview' && /*#__PURE__*/React__default.createElement(FormPreview, null)));
};

module.exports = WebformEditor;
//# sourceMappingURL=index.js.map
