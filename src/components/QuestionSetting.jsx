import React, { useCallback, useMemo, useState } from 'react';
import {
  Form,
  Input,
  Select,
  Checkbox,
  Alert,
  Row,
  Col,
  Tag,
  Button,
  Tooltip,
  Typography,
  Space,
} from 'antd';
import styles from '../styles.module.css';
import {
  UIStore,
  questionType,
  questionGroupFn,
  ErrorStore,
} from '../lib/store';
import {
  SettingInput,
  SettingTree,
  SettingNumber,
  SettingOption,
  SettingCascade,
  SettingDate,
  SettingTable,
  SettingImage,
  SettingAutofield,
} from './question-type';
import QuestionHint from './QuestionHint';
import QuestionStats from './QuestionStats';
import { map, groupBy, orderBy, isEmpty, snakeCase } from 'lodash';
import { AiOutlineQuestionCircle, AiOutlineCopy } from 'react-icons/ai';

const questionTypeWithRule = ['number', 'date'];
const { Text } = Typography;

const QuestionSetting = ({ question, dependant }) => {
  const {
    id,
    label,
    name,
    short_label,
    type,
    variable,
    tooltip,
    required,
    questionGroupId,
    meta,
    displayOnly,
    disableDelete,
  } = question;
  const namePreffix = `question-${id}`;
  const form = Form.useFormInstance();
  const qType = Form.useWatch(`${namePreffix}-type`, form);
  const { UIText, hostParams } = UIStore.useState((s) => s);
  const limitQuestionType = hostParams?.limitQuestionType;
  const settingHintURL = hostParams?.settingHintURL;
  const defaultQuestionParam = hostParams?.defaultQuestionParam;
  const questionGroups = questionGroupFn.store.useState(
    (s) => s.questionGroups
  );
  const [copied, setCopied] = useState(false);
  const [nameFieldValue, setNameFieldValue] = useState(
    name ? snakeCase(name) : snakeCase(label)
  );
  const questionErrors = ErrorStore.useState((s) => s.questionErrors);

  const currentQuestionNameError = useMemo(() => {
    const findError = questionErrors.find(
      (e) => e.id === id && e.field === 'name'
    );
    if (findError) {
      return findError;
    }
    return false;
  }, [id, questionErrors]);

  const checkIfQuestionNameExist = (val) => {
    const checkVal = snakeCase(val);
    const questions = questionGroups
      .flatMap((qg) => qg.questions)
      .filter((q) => q.id !== id);
    const isNameExist = questions.find((q) => q.name === checkVal);
    if (isNameExist) {
      // add to error list
      ErrorStore.update((s) => {
        s.questionErrors = [
          ...s.questionErrors,
          { id: id, field: 'name', message: `${checkVal} exist` },
        ];
      });
    } else {
      // remove from error list
      ErrorStore.update((s) => {
        s.questionErrors = s.questionErrors.filter(
          (e) => e.id !== id && e.field !== 'name'
        );
      });
    }
  };

  const disableMetaForGeo = useMemo(() => {
    const metaGeoQuestionDefined = questionGroups
      .flatMap((qg) =>
        qg.questions.filter((q) => q.type === questionType.geo && q?.meta)
      )
      .map((q) => q.id);
    return (
      type === questionType.geo &&
      metaGeoQuestionDefined.length &&
      !metaGeoQuestionDefined.includes(id)
    );
  }, [questionGroups, type, id]);

  const showMetaCheckbox = useMemo(() => {
    const currentQuestionGroup = questionGroups.find(
      (qg) => qg.id === questionGroupId
    );
    return (
      ![questionType.tree, questionType.table].includes(type) &&
      !currentQuestionGroup?.repeatable
    );
  }, [type, questionGroups, questionGroupId]);

  const questionTypeDropdownValue = useMemo(() => {
    if (limitQuestionType && limitQuestionType?.length) {
      return limitQuestionType;
    }
    return Object.keys(questionType).map((key) => ({
      label: questionType[key]?.split('_').join(' '),
      value: questionType[key],
    }));
  }, [limitQuestionType]);

  const showHintSetting = useMemo(() => {
    if (!settingHintURL || !settingHintURL?.settings?.length) {
      return false;
    }
    if (
      settingHintURL?.questionTypes &&
      settingHintURL?.questionTypes?.length
    ) {
      return settingHintURL.questionTypes.includes(type);
    }
    return settingHintURL?.settings?.length;
  }, [settingHintURL, type]);

  const updateState = useCallback(
    (name, value) => {
      questionGroupFn.store.update((s) => {
        s.questionGroups = s.questionGroups.map((qg) => {
          if (qg.id === questionGroupId) {
            const questions = qg.questions.map((q) => {
              if (q.id === id) {
                // delete rule from number/date question
                if (
                  questionTypeWithRule.includes(q.type) &&
                  questionTypeWithRule.includes(value)
                ) {
                  delete q?.rule;
                }
                // eol delete rule from number/date question
                return {
                  ...q,
                  [name]: value,
                };
              }
              return q;
            });
            return {
              ...qg,
              questions: questions,
            };
          }
          return qg;
        });
      });
    },
    [id, questionGroupId]
  );

  const defaultTypeValue = useMemo(() => {
    if (questionTypeDropdownValue.length) {
      const checkType = questionTypeDropdownValue.find((x) => x.value === type);
      if (checkType) {
        return type;
      }
      if (!isEmpty(defaultQuestionParam) && defaultQuestionParam?.type) {
        updateState('type', defaultQuestionParam.type);
        return defaultQuestionParam.type;
      }
      const checkText = questionTypeDropdownValue.find(
        (x) => x.value === questionType.text
      );
      const defType = checkText
        ? checkText.value
        : questionTypeDropdownValue?.[0]?.value;
      updateState('type', defType);
      return defType;
    }
    return type;
  }, [type, questionTypeDropdownValue, defaultQuestionParam, updateState]);

  const handleChangeLabel = (e) => {
    const labelValue = e?.target?.value;
    let nameValue = name;
    if (!name.trim() || name === snakeCase(label)) {
      nameValue = snakeCase(labelValue);
    }
    setNameFieldValue(nameValue);
    checkIfQuestionNameExist(nameValue);
    updateState('label', labelValue);
    updateState('name', nameValue);
  };

  const handleChangeName = (e) => {
    const val = e?.target?.value || '';
    setNameFieldValue(val);
    checkIfQuestionNameExist(val);
  };

  const handleChangeShortLabel = (e) => {
    updateState('short_label', e?.target?.value);
  };

  const handleBlurName = () => {
    setNameFieldValue(nameFieldValue ? snakeCase(nameFieldValue) : '');
    updateState('name', nameFieldValue ? snakeCase(nameFieldValue) : '');
  };

  const handleChangeType = (e) => {
    updateState('type', e);
  };

  const handleChangeVariableName = (e) => {
    updateState('variableName', e?.target?.value);
  };

  const handleChangeTooltip = (e) => {
    const value = e?.target?.value;
    if (value) {
      updateState('tooltip', { ...tooltip, text: value });
    } else {
      updateState('tooltip', null);
    }
  };

  const handleChangeRequired = (e) => {
    updateState('required', e?.target?.checked);
  };

  const handleChangeDisplayOnly = (e) => {
    updateState('displayOnly', e?.target?.checked);
  };

  const handleChangeMeta = (e) => {
    updateState('meta', e?.target?.checked);
  };

  const dependantGroup = map(
    groupBy(
      dependant.map((x) => ({
        name: `${x.questionGroup.order}.${x.order}. ${x.name}`,
        group: `${x.questionGroup.order}. ${x.questionGroup.name}`,
      })),
      'group'
    ),
    (i, g) => ({
      items: orderBy(i, 'name'),
      group: g,
    })
  );

  return (
    <div>
      {!!dependant.length && (
        <Alert
          message={
            <div>
              <ul className="arfe-dependant-list-box">
                Dependant Questions:
                {dependantGroup.map((d, di) => (
                  <li key={di}>
                    {d.group}
                    <ul>
                      {d.items.map((i, ii) => (
                        <li key={ii}>{i.name}</li>
                      ))}
                    </ul>
                  </li>
                ))}
              </ul>
            </div>
          }
          type="info"
          style={{ marginBottom: 24 }}
        />
      )}
      <Form.Item
        label={UIText.inputQuestionLabelLabel}
        initialValue={label || name}
        name={`${namePreffix}-label`}
        required
      >
        <Input
          onChange={handleChangeLabel}
          allowClear
        />
      </Form.Item>
      {/* TAG QID */}
      <div style={{ marginTop: '-18px', marginBottom: '24px' }}>
        <Tag>{`${UIText.questionIdText}: ${id}`} </Tag>
        <Tooltip
          title={
            copied ? UIText.copiedText : UIText.copyQuestionIdToClipboardText
          }
          placement="right"
        >
          <Button
            type="link"
            icon={<AiOutlineCopy />}
            size="small"
            onClick={() => {
              navigator.clipboard.writeText(id);
              setCopied(true);
              setTimeout(() => {
                setCopied(false);
              }, 1000);
            }}
          />
        </Tooltip>
      </div>
      {/* EOL QID */}
      <Form.Item
        label={UIText.inputQuestionNameLabel}
        // name={`${namePreffix}-name`}
        required
      >
        <Input
          onChange={handleChangeName}
          onBlur={handleBlurName}
          allowClear
          value={nameFieldValue}
        />
      </Form.Item>
      {currentQuestionNameError?.id ? (
        <div className={styles['field-error-wrapper']}>
          <Text type="danger">{currentQuestionNameError.message}</Text>
        </div>
      ) : (
        ''
      )}
      <Form.Item
        label={
          <Space align="center">
            <div>{UIText.inputQuestionShortLabelLabel}</div>
            <Tooltip
              title={UIText.inputQuestionShortLabelTooltip}
              placement="right"
            >
              <AiOutlineQuestionCircle
                style={{ marginBottom: '-2px' }}
                size={16}
              />
            </Tooltip>
          </Space>
        }
        name={`${namePreffix}-short_label`}
        initialValue={short_label}
      >
        <Input
          onChange={handleChangeShortLabel}
          allowClear
        />
      </Form.Item>
      <Form.Item
        label={UIText.inputQuestionTypeLabel}
        initialValue={defaultTypeValue}
        name={`${namePreffix}-type`}
        required
      >
        <Select
          showSearch
          optionFilterProp="label"
          className={styles['select-dropdown']}
          options={questionTypeDropdownValue}
          getPopupContainer={(triggerNode) => triggerNode.parentElement}
          onChange={handleChangeType}
          disabled={dependant.length || disableDelete}
        />
      </Form.Item>
      <Form.Item
        label={UIText.inputQuestionVariableNameLabel}
        initialValue={variable}
        name={`${namePreffix}-variable`}
      >
        <Input
          onChange={handleChangeVariableName}
          allowClear
        />
      </Form.Item>
      <Form.Item
        label={UIText.inputQuestionTooltipLabel}
        initialValue={tooltip?.text}
        name={`${namePreffix}-tooltip`}
      >
        <Input.TextArea
          onChange={handleChangeTooltip}
          allowClear
          rows={5}
        />
      </Form.Item>
      <Row
        gutter={[24, 24]}
        align="middle"
      >
        <Col>
          <Form.Item
            name={`${namePreffix}-required`}
            className={styles['input-checkbox-wrapper']}
          >
            <Checkbox
              onChange={handleChangeRequired}
              checked={required}
            >
              {' '}
              {UIText.inputQuestionRequiredCheckbox}
            </Checkbox>
          </Form.Item>
        </Col>
        <Col>
          <Form.Item
            name={`${namePreffix}-displayOnly`}
            className={styles['input-checkbox-wrapper']}
          >
            <Checkbox
              onChange={handleChangeDisplayOnly}
              checked={displayOnly}
            >
              {' '}
              {UIText.inputQuestionDisplayOnlyCheckbox}
            </Checkbox>
            <Tooltip
              placement="right"
              title={UIText.inputQuestionDisplayOnlyCheckboxTooltip}
            >
              <AiOutlineQuestionCircle
                style={{
                  marginLeft: '-4px',
                  marginBottom: '-2px',
                }}
                size={16}
              />
            </Tooltip>
          </Form.Item>
        </Col>
        {showMetaCheckbox && (
          <Col>
            <div>
              <Form.Item
                name={`${namePreffix}-meta`}
                className={styles['input-checkbox-wrapper']}
              >
                <Checkbox
                  onChange={handleChangeMeta}
                  checked={meta}
                  disabled={disableMetaForGeo}
                >
                  {' '}
                  {UIText.inputQuestionMetaCheckbox}
                </Checkbox>
                <Tooltip
                  placement="right"
                  title={UIText.inputQuestionMetaCheckboxHint}
                >
                  <AiOutlineQuestionCircle
                    style={{
                      marginLeft: '-4px',
                      marginBottom: '-2px',
                    }}
                    size={16}
                  />
                </Tooltip>
              </Form.Item>
            </div>
          </Col>
        )}
      </Row>
      {/* Question Hint */}
      {showHintSetting && <QuestionHint {...question} />}
      {/* Question Type Setting */}
      {qType === questionType.input && <SettingInput {...question} />}
      {qType === questionType.number && <SettingNumber {...question} />}
      {[questionType.option, questionType.multiple_option].includes(qType) && (
        <SettingOption {...question} />
      )}
      {qType === questionType.tree && <SettingTree {...question} />}
      {qType === questionType.cascade && <SettingCascade {...question} />}
      {qType === questionType.date && <SettingDate {...question} />}
      {qType === questionType.table && <SettingTable {...question} />}
      {qType === questionType.image && <SettingImage {...question} />}
      {qType === questionType.autofield && <SettingAutofield {...question} />}
      {/* Question Stats  */}
      <QuestionStats {...question} />
    </div>
  );
};

export default QuestionSetting;
