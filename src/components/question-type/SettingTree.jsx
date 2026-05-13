import React from 'react';
import { Form, Select, Checkbox, Space } from 'antd';
import styles from '../../styles.module.css';
import { UIStore, questionGroupFn } from '../../lib/store';

const checkStrategyOptions = [
  { label: 'Parent', value: 'parent' },
  { label: 'Children', value: 'children' },
];

const SettingTree = ({
  id,
  questionGroupId,
  option,
  checkStrategy,
  expandAll,
}) => {
  const namePreffix = `question-${id}`;
  const { UIText, hostParams } = UIStore.useState((s) => s);
  const settingTreeDropdownValue = hostParams?.settingTreeDropdownValue;

  const updateState = (name, value) => {
    questionGroupFn.store.update((s) => {
      s.questionGroups = s.questionGroups.map((qg) => {
        if (qg.id === questionGroupId) {
          const questions = qg.questions.map((q) => {
            if (q.id === id) {
              return { ...q, [name]: value };
            }
            return q;
          });
          return { ...qg, questions };
        }
        return qg;
      });
    });
  };

  return (
    <div>
      <p className={styles['more-question-setting-text']}>
        {UIText.questionMoreTreeSettingText}
      </p>
      <Form.Item
        label={UIText.inputSelectTreeDropdownValueLabel}
        name={`${namePreffix}-tree-options`}
        initialValue={option}
      >
        <Select
          showSearch
          className={styles['select-dropdown']}
          optionFilterProp="label"
          options={settingTreeDropdownValue}
          getPopupContainer={(triggerNode) => triggerNode.parentElement}
          onChange={(e) => updateState('option', e)}
        />
      </Form.Item>
      <Form.Item
        label={UIText.inputCheckStrategyLabel}
        name={`${namePreffix}-check_strategy`}
        initialValue={checkStrategy}
      >
        <Select
          className={styles['select-dropdown']}
          options={checkStrategyOptions}
          getPopupContainer={(triggerNode) => triggerNode.parentElement}
          onChange={(e) => updateState('checkStrategy', e)}
          allowClear
        />
      </Form.Item>
      <Space className={styles['space-align-left']}>
        <Form.Item name={`${namePreffix}-expand_all`}>
          <Checkbox
            onChange={(e) => updateState('expandAll', e?.target?.checked)}
            checked={expandAll}
          >
            {' '}
            {UIText.inputExpandAllCheckbox}
          </Checkbox>
        </Form.Item>
      </Space>
    </div>
  );
};

export default SettingTree;
