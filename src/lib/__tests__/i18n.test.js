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
