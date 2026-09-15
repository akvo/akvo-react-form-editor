import UIStaticText from '../i18n';

describe('i18n English keys (Phase 2.2)', () => {
  const en = UIStaticText.en;

  const newKeys = [
    'inputLeadingQuestionLabel',
    'inputShowRepeatInQuestionLevelCheckbox',
    'inputQuestionDisabledCheckbox',
    'inputQuestionIsRepeatIdentifierCheckbox',
    'inputDependencyRuleLabel',
    'questionMoreGeoSettingText',
    'inputGeoLatitudeLabel',
    'inputGeoLongitudeLabel',
    'questionMoreAttachmentSettingText',
    'inputAllowedFileTypesLabel',
    'inputAttachmentEndpointLabel',
    'inputAttachmentResponseKeyLabel',
    'inputEntityConfigToggleCheckbox',
    'inputEntityNameLabel',
    'inputEntityParentIdLabel',
    'inputPartialRequiredCheckbox',
    'inputCheckStrategyLabel',
    'inputExpandAllCheckbox',
  ];

  test.each(newKeys)('has non-empty string for key "%s"', (key) => {
    expect(en).toHaveProperty(key);
    expect(typeof en[key]).toBe('string');
    expect(en[key].length).toBeGreaterThan(0);
  });

  test('existing keys are preserved (sanity check)', () => {
    expect(en.inputFormNameLabel).toBe('Form Name');
    expect(en.inputQuestionTypeLabel).toBe('Question Type');
  });
});

describe('i18n geoConfig keys (GEO-009)', () => {
  const en = UIStaticText.en;

  // Only the keys no test renders. SettingGeo.test.jsx asserts the section
  // heading, both numeric labels and the checkbox by their rendered text, so
  // a typo in those four already fails there.
  const unrenderedKeys = [
    'inputGeoAccuracyThresholdTooltip',
    'inputGeoDetectOverlapsHint',
  ];

  test.each(unrenderedKeys)('has non-empty string for key "%s"', (key) => {
    expect(en).toHaveProperty(key);
    expect(typeof en[key]).toBe('string');
    expect(en[key].length).toBeGreaterThan(0);
  });

  test('the overlap hint states the sync consequence', () => {
    expect(en.inputGeoDetectOverlapsHint).toMatch(/sync/i);
    expect(en.inputGeoDetectOverlapsHint).toMatch(/device/i);
  });
});
