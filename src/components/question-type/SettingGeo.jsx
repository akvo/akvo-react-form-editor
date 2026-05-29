import React from 'react';
import { Form, InputNumber, Row, Col } from 'antd';
import styles from '../../styles.module.css';
import { UIStore, questionGroupFn } from '../../lib/store';

const SettingGeo = ({ id, questionGroupId, center }) => {
  const namePreffix = `question-${id}`;
  const UIText = UIStore.useState((s) => s.UIText);
  const lat = Array.isArray(center) ? center[0] : null;
  const lng = Array.isArray(center) ? center[1] : null;

  const updateCenter = (index, value) => {
    questionGroupFn.store.update((s) => {
      s.questionGroups = s.questionGroups.map((qg) => {
        if (qg.id === questionGroupId) {
          const questions = qg.questions.map((q) => {
            if (q.id === id) {
              const current = Array.isArray(q.center)
                ? [...q.center]
                : [null, null];
              current[index] = value;
              return { ...q, center: current };
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
    </div>
  );
};

export default SettingGeo;
