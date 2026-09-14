import React from 'react';
import {
  Form,
  InputNumber,
  Row,
  Col,
  Checkbox,
  Tooltip,
  Space,
  Typography,
} from 'antd';
import { AiOutlineQuestionCircle } from 'react-icons/ai';
import styles from '../../styles.module.css';
import { UIStore, questionGroupFn, questionType } from '../../lib/store';

const { Text } = Typography;

const SettingGeo = ({ id, questionGroupId, center, type, extra }) => {
  const namePreffix = `question-${id}`;
  const UIText = UIStore.useState((s) => s.UIText);
  const lat = Array.isArray(center) ? center[0] : null;
  const lng = Array.isArray(center) ? center[1] : null;

  // geoConfig is authored on geoshape only. `center` stays available to
  // geo and geotrace, so the gate is here rather than in QuestionSetting's
  // dispatch, which renders this component for all three geo types.
  const showGeoConfig = type === questionType.geoshape;
  const geoConfig = extra?.geoConfig;
  const detectOverlaps = !!geoConfig?.detectOverlaps;

  const updateQuestion = (mapper) => {
    questionGroupFn.store.update((s) => {
      s.questionGroups = s.questionGroups.map((qg) => {
        if (qg.id === questionGroupId) {
          const questions = qg.questions.map((q) =>
            q.id === id ? mapper(q) : q
          );
          return { ...qg, questions };
        }
        return qg;
      });
    });
  };

  const updateCenter = (index, value) => {
    updateQuestion((q) => {
      const current = Array.isArray(q.center) ? [...q.center] : [null, null];
      current[index] = value;
      return { ...q, center: current };
    });
  };

  // Merge into `extra` rather than replacing it. Cascade entity questions
  // keep type/name/parentId in the same object, and a clear of the numeric
  // input hands us null, which we drop so the client-side default applies
  // instead of a stored null.
  const updateGeoConfig = (key, value) => {
    updateQuestion((q) => {
      const nextConfig = { ...q?.extra?.geoConfig };
      if (value === null || typeof value === 'undefined') {
        delete nextConfig[key];
      } else {
        nextConfig[key] = value;
      }
      return { ...q, extra: { ...q?.extra, geoConfig: nextConfig } };
    });
  };

  return (
    <div>
      <p className={styles['more-question-setting-text']}>
        {UIText.questionMoreGeoSettingText}
      </p>
      <Row
        align="middle"
        gutter={[24, 24]}
      >
        <Col span={8}>
          <Form.Item
            label={UIText.inputGeoLatitudeLabel}
            name={`${namePreffix}-center_lat`}
            initialValue={lat}
          >
            <InputNumber
              style={{ width: '100%' }}
              controls={false}
              keyboard={false}
              onChange={(v) => updateCenter(0, v)}
            />
          </Form.Item>
        </Col>
        <Col span={8}>
          <Form.Item
            label={UIText.inputGeoLongitudeLabel}
            name={`${namePreffix}-center_lng`}
            initialValue={lng}
          >
            <InputNumber
              style={{ width: '100%' }}
              controls={false}
              keyboard={false}
              onChange={(v) => updateCenter(1, v)}
            />
          </Form.Item>
        </Col>
      </Row>
      {showGeoConfig && (
        <div>
          <p className={styles['more-question-setting-text']}>
            {UIText.questionGeoConfigSettingText}
          </p>
          <Row
            align="middle"
            gutter={[24, 24]}
          >
            <Col span={8}>
              <Form.Item
                label={
                  <Space align="center">
                    <div>{UIText.inputGeoAccuracyThresholdLabel}</div>
                    <Tooltip
                      title={UIText.inputGeoAccuracyThresholdTooltip}
                      placement="right"
                    >
                      <AiOutlineQuestionCircle
                        style={{ marginBottom: '-2px' }}
                        size={16}
                      />
                    </Tooltip>
                  </Space>
                }
                name={`${namePreffix}-geo_accuracy_threshold`}
                initialValue={geoConfig?.accuracyThreshold}
              >
                <InputNumber
                  style={{ width: '100%' }}
                  min={1}
                  precision={0}
                  controls={false}
                  keyboard={false}
                  onChange={(v) => updateGeoConfig('accuracyThreshold', v)}
                />
              </Form.Item>
            </Col>
          </Row>
          <Form.Item
            name={`${namePreffix}-geo_detect_overlaps`}
            className={styles['input-checkbox-wrapper']}
          >
            <Checkbox
              onChange={(e) =>
                updateGeoConfig('detectOverlaps', !!e?.target?.checked)
              }
              checked={detectOverlaps}
            >
              {' '}
              {UIText.inputGeoDetectOverlapsCheckbox}
            </Checkbox>
          </Form.Item>
          <div className={styles['field-error-wrapper']}>
            <Text type="warning">{UIText.inputGeoDetectOverlapsHint}</Text>
          </div>
          {detectOverlaps && (
            <Row
              align="middle"
              gutter={[24, 24]}
            >
              <Col span={8}>
                <Form.Item
                  label={UIText.inputGeoOverlapThresholdLabel}
                  name={`${namePreffix}-geo_overlap_threshold`}
                  initialValue={geoConfig?.overlapThreshold}
                >
                  <InputNumber
                    style={{ width: '100%' }}
                    min={1}
                    max={100}
                    precision={0}
                    controls={false}
                    keyboard={false}
                    onChange={(v) => updateGeoConfig('overlapThreshold', v)}
                  />
                </Form.Item>
              </Col>
            </Row>
          )}
        </div>
      )}
    </div>
  );
};

export default SettingGeo;
