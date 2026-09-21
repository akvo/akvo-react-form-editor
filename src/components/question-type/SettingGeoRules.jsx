import React from 'react';
import {
  InputNumber,
  Row,
  Col,
  Select,
  Tooltip,
  Space,
  Typography,
} from 'antd';
import { AiOutlineQuestionCircle } from 'react-icons/ai';
import styles from '../../styles.module.css';
import { UIStore } from '../../lib/store';
import {
  polygonRuleGroups,
  severityValues,
  toGroupValue,
  fromGroupValue,
} from '../../lib/geo-rules';

const { Text } = Typography;

// GEO-014 D-5 clamps the overlap threshold between these two, so a floor
// above a ceiling inverts the clamp. Each input is bounded by the other,
// falling back to the documented default rather than to 1/100 — otherwise a
// floor could be authored above a ceiling that is merely unset.
const DEFAULT_OVERLAP_THRESHOLD = 20;
const DEFAULT_OVERLAP_FLOOR = 5;

// 0.001 ha is 10 m², the hardcoded area floor, so nothing smaller is a
// meaningful ceiling. Hectares are fractional by nature — a smallholder plot
// is routinely well under one — so this input takes decimals where the
// percentage and metre inputs do not.
const MIN_MAX_AREA_HA = 0.001;

const LabelWithTooltip = ({ label, tooltip }) => (
  <Space align="center">
    <div>{label}</div>
    <Tooltip
      title={tooltip}
      placement="right"
    >
      <AiOutlineQuestionCircle
        style={{ marginBottom: '-2px' }}
        size={16}
      />
    </Tooltip>
  </Space>
);

const SettingGeoRules = ({ id, geoConfig, updateGeoConfig }) => {
  const namePreffix = `question-${id}`;
  const UIText = UIStore.useState((s) => s.UIText);

  const detectOverlaps = !!geoConfig?.detectOverlaps;

  const severityOptions = (group) => {
    const graded = [
      { label: UIText.geoSeverityDefault, value: severityValues.default },
      { label: UIText.geoSeverityBlock, value: severityValues.block },
      { label: UIText.geoSeverityWarn, value: severityValues.warn },
    ];
    // "Do not check" leads, because it is the only option that stops the rule
    // running rather than grading its failure.
    return group.enableKey
      ? [{ label: UIText.geoSeverityOff, value: severityValues.off }, ...graded]
      : graded;
  };

  const renderLimit = (rule) => {
    if (rule.key === 'maxArea') {
      return (
        <Space align="center">
          <InputNumber
            id={`${namePreffix}-geo_max_area_ha`}
            aria-label={UIText.inputGeoMaxAreaLabel}
            min={MIN_MAX_AREA_HA}
            controls={false}
            keyboard={false}
            value={geoConfig?.maxAreaHa}
            onChange={(v) => updateGeoConfig('maxAreaHa', v)}
          />
          <Tooltip
            title={UIText.inputGeoMaxAreaTooltip}
            placement="right"
          >
            <span>ha</span>
          </Tooltip>
        </Space>
      );
    }
    if (rule.key === 'overlap') {
      if (!detectOverlaps) {
        return <span>{UIText.geoRuleNoLimit}</span>;
      }
      return (
        <div className={styles['geo-rule-limit-stack']}>
          <div className={styles['field-error-wrapper']}>
            <Text type="warning">{UIText.inputGeoDetectOverlapsHint}</Text>
          </div>
          <div>
            <LabelWithTooltip
              label={UIText.inputGeoOverlapThresholdLabel}
              tooltip={UIText.inputGeoOverlapThresholdTooltip}
            />
            <InputNumber
              id={`${namePreffix}-geo_overlap_threshold`}
              aria-label={UIText.inputGeoOverlapThresholdLabel}
              min={geoConfig?.overlapThresholdFloor ?? DEFAULT_OVERLAP_FLOOR}
              max={100}
              precision={0}
              controls={false}
              keyboard={false}
              value={geoConfig?.overlapThreshold}
              onChange={(v) => updateGeoConfig('overlapThreshold', v)}
            />
          </div>
          <div>
            <LabelWithTooltip
              label={UIText.inputGeoOverlapThresholdFloorLabel}
              tooltip={UIText.inputGeoOverlapThresholdFloorTooltip}
            />
            <InputNumber
              id={`${namePreffix}-geo_overlap_threshold_floor`}
              aria-label={UIText.inputGeoOverlapThresholdFloorLabel}
              min={1}
              max={geoConfig?.overlapThreshold ?? DEFAULT_OVERLAP_THRESHOLD}
              precision={0}
              controls={false}
              keyboard={false}
              value={geoConfig?.overlapThresholdFloor}
              onChange={(v) => updateGeoConfig('overlapThresholdFloor', v)}
            />
          </div>
        </div>
      );
    }
    return <span>{UIText[rule.limitKey] || UIText.geoRuleNoLimit}</span>;
  };

  // One control per group, because one key decides the severity of every rule
  // in it. Rendering it on the group header rather than on each rule is what
  // keeps the table from implying the rules could differ.
  const renderGroupSeverity = (group) => {
    return (
      <Select
        id={`${namePreffix}-geo_${group.configKey}`}
        aria-label={UIText[group.labelKey]}
        className={styles['select-dropdown']}
        options={severityOptions(group)}
        getPopupContainer={(triggerNode) => triggerNode.parentElement}
        value={toGroupValue(geoConfig, group)}
        onChange={(v) =>
          fromGroupValue(v, group).forEach(([key, value]) =>
            updateGeoConfig(key, value)
          )
        }
      />
    );
  };

  return (
    <div>
      <p className={styles['more-question-setting-text']}>
        {UIText.questionGeoRulesSettingText}
      </p>
      <div className={styles['geo-rule-table']}>
        <Row className={styles['geo-rule-header']}>
          <Col span={7}>{UIText.geoRuleColumnRule}</Col>
          <Col span={11}>{UIText.geoRuleColumnLimit}</Col>
          <Col span={6}>{UIText.geoRuleColumnSeverity}</Col>
        </Row>
        {polygonRuleGroups.map((group) => (
          <div key={group.key}>
            <Row
              align="middle"
              className={styles['geo-rule-group']}
            >
              <Col span={7}>{UIText[group.labelKey]}</Col>
              <Col span={11} />
              <Col span={6}>{renderGroupSeverity(group)}</Col>
            </Row>
            {group.rules.map((rule) => (
              <Row
                key={rule.key}
                align="middle"
                className={styles['geo-rule-row']}
              >
                <Col
                  span={7}
                  className={styles['geo-rule-name']}
                >
                  {UIText[rule.labelKey]}
                </Col>
                <Col span={11}>{renderLimit(rule)}</Col>
                <Col span={6} />
              </Row>
            ))}
          </div>
        ))}
      </div>
      {/* The two keys have to be set together to get the protection that one
          key used to give automatically, so the pairing is stated where it is
          authored rather than left to be discovered in the field. */}
      {detectOverlaps && geoConfig?.allowTapping !== false && (
        <div className={styles['field-error-wrapper']}>
          <Text type="warning">{UIText.inputGeoTappingBypassHint}</Text>
        </div>
      )}
    </div>
  );
};

export default SettingGeoRules;
