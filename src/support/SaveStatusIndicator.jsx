import React from 'react';
import { Space, Tag, Spin } from 'antd';
import { UIStore } from '../lib/store';
import { STATUS_DIRTY, STATUS_SAVING, STATUS_ERROR } from '../lib/storage';
import {
  AiOutlineCheckCircle,
  AiOutlineCloudUpload,
  AiOutlineExclamationCircle,
} from 'react-icons/ai';
import styles from '../styles.module.css';

const formatTime = (timestamp) => {
  if (!timestamp) {
    return '';
  }
  const date = new Date(timestamp);
  const hours = String(date.getHours()).padStart(2, '0');
  const minutes = String(date.getMinutes()).padStart(2, '0');
  const seconds = String(date.getSeconds()).padStart(2, '0');
  return `${hours}:${minutes}:${seconds}`;
};

const SaveStatusIndicator = ({ onRetry }) => {
  const { saveStatus, lastSaved, UIText } = UIStore.useState((s) => ({
    saveStatus: s.saveStatus,
    lastSaved: s.lastSaved,
    UIText: s.UIText,
  }));

  const {
    autoSaveStatusSaved,
    autoSaveStatusDirty,
    autoSaveStatusSaving,
    autoSaveStatusError,
    autoSaveLastSavedAt,
  } = UIText;

  if (saveStatus === STATUS_SAVING) {
    return (
      <Tag
        color="processing"
        className={styles['save-status-indicator']}
      >
        <Space size={4}>
          <Spin size="small" />
          <span>{autoSaveStatusSaving || 'Saving changes...'}</span>
        </Space>
      </Tag>
    );
  }

  if (saveStatus === STATUS_DIRTY) {
    return (
      <Tag
        color="warning"
        className={styles['save-status-indicator']}
      >
        <Space size={4}>
          <AiOutlineCloudUpload />
          <span>{autoSaveStatusDirty || 'Unsaved changes'}</span>
        </Space>
      </Tag>
    );
  }

  if (saveStatus === STATUS_ERROR) {
    return (
      <Tag
        color="error"
        className={`${styles['save-status-indicator']} ${styles['save-status-clickable']}`}
        onClick={onRetry}
        style={{ cursor: 'pointer' }}
      >
        <Space size={4}>
          <AiOutlineExclamationCircle />
          <span>
            {autoSaveStatusError || 'Auto-save failed. Click to retry'}
          </span>
        </Space>
      </Tag>
    );
  }

  // STATUS_SAVED (0)
  const savedLabel = lastSaved
    ? `${autoSaveLastSavedAt || 'Saved at'} ${formatTime(lastSaved)}`
    : autoSaveStatusSaved || 'All changes saved';

  return (
    <Tag
      color="default"
      className={styles['save-status-indicator']}
    >
      <Space size={4}>
        <AiOutlineCheckCircle style={{ color: '#52c41a' }} />
        <span>{savedLabel}</span>
      </Space>
    </Tag>
  );
};

export default SaveStatusIndicator;
