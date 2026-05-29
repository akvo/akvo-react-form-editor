import React from 'react';
import { Form, Input, Select } from 'antd';
import styles from '../../styles.module.css';
import { UIStore, questionGroupFn } from '../../lib/store';

const allowedFileTypeOptions = [
  { label: 'JPEG', value: 'jpeg' },
  { label: 'JPG', value: 'jpg' },
  { label: 'PNG', value: 'png' },
  { label: 'GIF', value: 'gif' },
  { label: 'WebP', value: 'webp' },
  { label: 'PDF', value: 'pdf' },
  { label: 'DOC', value: 'doc' },
  { label: 'DOCX', value: 'docx' },
  { label: 'XLS', value: 'xls' },
  { label: 'XLSX', value: 'xlsx' },
  { label: 'ODT', value: 'odt' },
  { label: 'ODS', value: 'ods' },
  { label: 'CSV', value: 'csv' },
  { label: 'MP4', value: 'mp4' },
  { label: 'MOV', value: 'mov' },
  { label: 'AVI', value: 'avi' },
  { label: 'MP3', value: 'mp3' },
  { label: 'WAV', value: 'wav' },
];

const SettingAttachment = ({ id, questionGroupId, rule, api }) => {
  const namePreffix = `question-${id}`;
  const UIText = UIStore.useState((s) => s.UIText);
  const allowedFileTypes = rule?.allowedFileTypes || [];
  const endpoint = api?.endpoint || null;
  const responseKey = api?.response_key || null;

  const updateState = (name, value) => {
    questionGroupFn.store.update((s) => {
      s.questionGroups = s.questionGroups.map((qg) => {
        if (qg.id === questionGroupId) {
          const questions = qg.questions.map((q) => {
            if (q.id === id) {
              if (name === 'allowedFileTypes') {
                return { ...q, rule: { ...q?.rule, allowedFileTypes: value } };
              }
              return { ...q, api: { ...q?.api, [name]: value } };
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
        {UIText.questionMoreAttachmentSettingText}
      </p>
      <Form.Item
        label={UIText.inputAllowedFileTypesLabel}
        name={`${namePreffix}-allowed_file_types`}
        initialValue={allowedFileTypes}
      >
        <Select
          mode="multiple"
          className={styles['select-dropdown']}
          options={allowedFileTypeOptions}
          getPopupContainer={(triggerNode) => triggerNode.parentElement}
          onChange={(v) => updateState('allowedFileTypes', v)}
          allowClear
        />
      </Form.Item>
      <Form.Item
        label={UIText.inputAttachmentEndpointLabel}
        name={`${namePreffix}-attachment_endpoint`}
        initialValue={endpoint}
      >
        <Input
          onChange={(e) => updateState('endpoint', e?.target?.value || null)}
          allowClear
        />
      </Form.Item>
      <Form.Item
        label={UIText.inputAttachmentResponseKeyLabel}
        name={`${namePreffix}-attachment_response_key`}
        initialValue={responseKey}
      >
        <Input
          onChange={(e) =>
            updateState('response_key', e?.target?.value || null)
          }
          allowClear
        />
      </Form.Item>
    </div>
  );
};

export default SettingAttachment;
