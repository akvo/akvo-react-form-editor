import React, { useMemo } from 'react';
import {
  Form,
  Row,
  Col,
  Input,
  InputNumber,
  Select,
  Checkbox,
  Space,
} from 'antd';
import styles from '../../styles.module.css';
import { UIStore, questionGroupFn } from '../../lib/store';

const SettingCascade = ({
  id,
  questionGroupId,
  api = {
    endpoint: null,
    initial: 0,
    list: false,
  },
  partialRequired,
  entityExtra,
}) => {
  const namePreffix = `question-${id}`;
  const { UIText, hostParams } = UIStore.useState((s) => s);
  const settingCascadeURL = hostParams?.settingCascadeURL;
  const form = Form.useFormInstance();
  const questionGroups = questionGroupFn.store.useState(
    (s) => s.questionGroups
  );

  const cascadeURLDropdownValue = useMemo(() => {
    return settingCascadeURL.map((x) => ({ label: x.name, value: x.id }));
  }, [settingCascadeURL]);

  const allQuestionsDropdownValue = useMemo(() => {
    return questionGroups.flatMap((qg) =>
      qg.questions.map((q) => ({
        label: `${qg.order}.${q.order}. ${q.label || q.name}`,
        value: q.id,
      }))
    );
  }, [questionGroups]);

  const entityConfigEnabled = !!entityExtra;

  const updateGlobalState = (values = {}) => {
    questionGroupFn.store.update((s) => {
      s.questionGroups = s.questionGroups.map((qg) => {
        if (qg.id === questionGroupId) {
          const questions = qg.questions.map((q) => {
            if (q.id === id) {
              return {
                ...q,
                api: {
                  ...q?.api,
                  ...values,
                },
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

  const handleChangeEndpoint = (e) => {
    const findURL = settingCascadeURL.find((x) => x.id === e);
    if (findURL) {
      form.setFieldsValue({
        [`${namePreffix}-api_initial`]: findURL.initial,
        [`${namePreffix}-api_list`]: findURL.list,
      });
      updateGlobalState({
        endpoint: findURL.endpoint,
        initial: findURL.initial || 0,
        list: findURL.list || false,
      });
    }
  };

  const handleChangeInitial = (e) => {
    updateGlobalState({ initial: e });
  };

  const handleChangePartialRequired = (e) => {
    questionGroupFn.store.update((s) => {
      s.questionGroups = s.questionGroups.map((qg) => {
        if (qg.id === questionGroupId) {
          const questions = qg.questions.map((q) => {
            if (q.id === id) {
              return { ...q, partialRequired: e?.target?.checked };
            }
            return q;
          });
          return { ...qg, questions };
        }
        return qg;
      });
    });
  };

  const handleToggleEntityConfig = (e) => {
    questionGroupFn.store.update((s) => {
      s.questionGroups = s.questionGroups.map((qg) => {
        if (qg.id === questionGroupId) {
          const questions = qg.questions.map((q) => {
            if (q.id === id) {
              if (e?.target?.checked) {
                return { ...q, entityExtra: { name: '', parentId: null } };
              }
              const next = { ...q };
              delete next.entityExtra;
              return next;
            }
            return q;
          });
          return { ...qg, questions };
        }
        return qg;
      });
    });
  };

  const handleChangeEntityField = (field, value) => {
    questionGroupFn.store.update((s) => {
      s.questionGroups = s.questionGroups.map((qg) => {
        if (qg.id === questionGroupId) {
          const questions = qg.questions.map((q) => {
            if (q.id === id) {
              return {
                ...q,
                entityExtra: { ...q.entityExtra, [field]: value },
              };
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
        {UIText.questionMoreCascadeSettingText}
      </p>
      <Form.Item
        label={UIText.inputQuestionEndpointLabel}
        name={`${namePreffix}-api_endpoint`}
      >
        <Row
          align="middle"
          gutter={[24, 24]}
        >
          <Col span={10}>
            <Select
              showSearch
              className={styles['select-dropdown']}
              optionFilterProp="label"
              options={cascadeURLDropdownValue}
              getPopupContainer={(triggerNode) => triggerNode.parentElement}
              onChange={handleChangeEndpoint}
            />
          </Col>
          <Col span={14}>
            <Input
              value={api?.endpoint}
              disabled
            />
          </Col>
        </Row>
      </Form.Item>
      <Row
        align="bottom"
        gutter={[24, 24]}
      >
        <Col span={4}>
          <Form.Item
            label={UIText.inputQuestionInitialValueLabel}
            initialValue={api?.initial}
            name={`${namePreffix}-api_initial`}
          >
            <InputNumber
              style={{ width: '100%' }}
              controls={false}
              keyboard={false}
              onChange={handleChangeInitial}
            />
          </Form.Item>
        </Col>
      </Row>
      <Space className={styles['space-align-left']}>
        <Form.Item name={`${namePreffix}-partial_required`}>
          <Checkbox
            onChange={handleChangePartialRequired}
            checked={partialRequired}
          >
            {' '}
            {UIText.inputPartialRequiredCheckbox}
          </Checkbox>
        </Form.Item>
        <Form.Item name={`${namePreffix}-entity_config`}>
          <Checkbox
            onChange={handleToggleEntityConfig}
            checked={entityConfigEnabled}
          >
            {' '}
            {UIText.inputEntityConfigToggleCheckbox}
          </Checkbox>
        </Form.Item>
      </Space>
      {entityConfigEnabled && (
        <div>
          <Form.Item
            label={UIText.inputEntityNameLabel}
            name={`${namePreffix}-entity_name`}
            initialValue={entityExtra?.name}
          >
            <Input
              onChange={(e) =>
                handleChangeEntityField('name', e?.target?.value)
              }
              allowClear
            />
          </Form.Item>
          <Form.Item
            label={UIText.inputEntityParentIdLabel}
            name={`${namePreffix}-entity_parent_id`}
            initialValue={entityExtra?.parentId}
          >
            <Select
              showSearch
              className={styles['select-dropdown']}
              optionFilterProp="label"
              options={allQuestionsDropdownValue}
              getPopupContainer={(triggerNode) => triggerNode.parentElement}
              onChange={(e) => handleChangeEntityField('parentId', e)}
              allowClear
            />
          </Form.Item>
        </div>
      )}
    </div>
  );
};

export default SettingCascade;
