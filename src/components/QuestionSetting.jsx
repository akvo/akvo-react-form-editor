import React from 'react';
import { Form, Input, Select, Checkbox, Alert } from 'antd';
import styles from '../styles.module.css';
import { UIStore, questionType, questionGroupFn } from '../lib/store';
import {
  SettingInput,
  SettingTree,
  SettingNumber,
  SettingOption,
  SettingCascade,
} from './question-type';

const QuestionSetting = ({ question, dependant }) => {
  const { id, name, type, variable, tooltip, required, questionGroupId } =
    question;
  const namePreffix = `question-${id}`;
  const UIText = UIStore.useState((s) => s.UIText);
  const form = Form.useFormInstance();
  const qType = Form.useWatch(`${namePreffix}-type`, form);

  const updateState = (name, value) => {
    questionGroupFn.store.update((s) => {
      s.questionGroups = s.questionGroups.map((qg) => {
        if (qg.id === questionGroupId) {
          const questions = qg.questions.map((q) => {
            if (q.id === id) {
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
  };

  const handleChangeName = (e) => {
    updateState('name', e?.target?.value);
  };

  const handleChangeType = (e) => {
    updateState('type', e);
  };

  const handleChangeVariableName = (e) => {
    updateState('variableName', e?.target?.value);
  };

  const handleChangeTooltip = (e) => {
    updateState('tooltip', e?.target?.value);
  };

  const handleChangeRequired = (e) => {
    updateState('required', e?.target?.checked);
  };

  return (
    <div>
      {!!dependant.length && (
        <Alert
          message="Dependent Questions:"
          description={
            <ul>
              {dependant.map((d, di) => (
                <li key={di}>{d.name}</li>
              ))}
            </ul>
          }
          type="info"
          style={{ marginBottom: '20px' }}
          showIcon
        />
      )}
      <Form.Item
        label={UIText.inputQuestionNameLabel}
        initialValue={name}
        name={`${namePreffix}-name`}
        required
      >
        <Input onChange={handleChangeName} />
      </Form.Item>
      <Form.Item
        label={UIText.inputQuestionTypeLabel}
        initialValue={type}
        name={`${namePreffix}-type`}
        required
      >
        <Select
          className={styles['select-dropdown']}
          options={Object.keys(questionType).map((key) => ({
            label: questionType[key]?.split('_').join(' '),
            value: questionType[key],
          }))}
          getPopupContainer={(triggerNode) => triggerNode.parentElement}
          onChange={handleChangeType}
          disabled={dependant.length}
        />
      </Form.Item>
      <Form.Item
        label={UIText.inputQuestionVariableNameLabel}
        initialValue={variable}
        name={`${namePreffix}-variable`}
      >
        <Input onChange={handleChangeVariableName} />
      </Form.Item>
      <Form.Item
        label={UIText.inputQuestionTooltipLabel}
        initialValue={tooltip}
        name={`${namePreffix}-tooltip`}
      >
        <Input.TextArea onChange={handleChangeTooltip} />
      </Form.Item>
      <Form.Item
        initialValue={required}
        name={`${namePreffix}-required`}
        className={styles['input-checkbox-wrapper']}
      >
        <Checkbox onChange={handleChangeRequired}>
          {' '}
          {UIText.inputQuestionRequiredCheckbox}
        </Checkbox>
      </Form.Item>
      {qType === questionType.input && <SettingInput {...question} />}
      {qType === questionType.number && <SettingNumber {...question} />}
      {[questionType.option, questionType.multiple_option].includes(qType) && (
        <SettingOption {...question} />
      )}
      {qType === questionType.tree && <SettingTree {...question} />}
      {qType === questionType.cascade && <SettingCascade {...question} />}
    </div>
  );
};

export default QuestionSetting;
