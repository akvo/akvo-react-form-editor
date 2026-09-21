import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Form } from 'antd';
import '@testing-library/jest-dom';
import SettingGeo from '../SettingGeo';
import { questionGroupFn } from '../../../lib/store';
import { polygonRuleGroups } from '../../../lib/geo-rules';
import UIStaticText from '../../../lib/i18n';

const UIText = UIStaticText.en;

const QUESTION_ID = 100;
const GROUP_ID = 10;

const seedStore = (question) => {
  questionGroupFn.store.update((s) => {
    s.questionGroups = [
      {
        id: GROUP_ID,
        label: 'G',
        name: 'g',
        order: 1,
        repeatable: false,
        questions: [question],
      },
    ];
  });
};

const storedQuestion = () =>
  questionGroupFn.store.getRawState().questionGroups[0].questions[0];

// rc-select renders a hidden accessibility list alongside the real dropdown,
// and the closed selects display their own value as text, so neither
// getByRole('option') nor getByText alone identifies a clickable option.
const pickSeverity = async (ruleName, optionLabel) => {
  await userEvent.click(screen.getByRole('combobox', { name: ruleName }));
  const option = screen
    .getAllByText(optionLabel)
    .find((el) => el.closest('.ant-select-item-option'));
  await userEvent.click(option);
};

const renderSetting = (overrides = {}) => {
  const question = {
    id: QUESTION_ID,
    questionGroupId: GROUP_ID,
    order: 1,
    name: 'plot',
    label: 'Plot',
    type: 'geoshape',
    ...overrides,
  };
  seedStore(question);
  return render(
    <Form>
      <SettingGeo {...question} />
    </Form>
  );
};

describe('SettingGeo geoConfig panel (GEO-009)', () => {
  describe('type scoping', () => {
    test('renders the panel for geoshape', () => {
      renderSetting({ type: 'geoshape' });
      expect(
        screen.getByText('Polygon capture and validation')
      ).toBeInTheDocument();
    });

    test('does not render the panel for geo', () => {
      renderSetting({ type: 'geo' });
      expect(
        screen.queryByText('Polygon capture and validation')
      ).not.toBeInTheDocument();
    });

    test('does not render the panel for geotrace', () => {
      renderSetting({ type: 'geotrace' });
      expect(
        screen.queryByText('Polygon capture and validation')
      ).not.toBeInTheDocument();
    });

    test('still renders the center inputs for geo', () => {
      renderSetting({ type: 'geo' });
      expect(screen.getByLabelText('Latitude')).toBeInTheDocument();
      expect(screen.getByLabelText('Longitude')).toBeInTheDocument();
    });
  });

  describe('conditional reveal', () => {
    test('hides the overlap threshold until the box is ticked', () => {
      renderSetting({ type: 'geoshape' });
      expect(
        screen.queryByLabelText('Maximum overlap (%)')
      ).not.toBeInTheDocument();
    });

    test('shows the overlap threshold when detectOverlaps is set', () => {
      renderSetting({
        type: 'geoshape',
        extra: { geoConfig: { detectOverlaps: true } },
      });
      expect(screen.getByLabelText('Maximum overlap (%)')).toBeInTheDocument();
    });
  });

  describe('restoring state on reopen', () => {
    test('restores the accuracy threshold from extra.geoConfig', () => {
      renderSetting({
        type: 'geoshape',
        extra: { geoConfig: { accuracyThreshold: 25 } },
      });
      expect(screen.getByLabelText('GPS accuracy threshold (m)')).toHaveValue(
        '25'
      );
    });

    test('restores the overlap threshold from extra.geoConfig', () => {
      renderSetting({
        type: 'geoshape',
        extra: { geoConfig: { detectOverlaps: true, overlapThreshold: 30 } },
      });
      expect(screen.getByLabelText('Maximum overlap (%)')).toHaveValue('30');
    });

    // The host's initialValue reaches the store after these inputs have
    // already rendered, so they have to follow the store, not a one-shot
    // Form.Item initialValue.
    test('picks up geoConfig that arrives after the first render', () => {
      const question = {
        id: QUESTION_ID,
        questionGroupId: GROUP_ID,
        order: 1,
        name: 'plot',
        label: 'Plot',
        type: 'geoshape',
      };
      seedStore(question);
      const { rerender } = render(
        <Form>
          <SettingGeo {...question} />
        </Form>
      );
      const loaded = {
        ...question,
        center: [-6.2088, 106.8456],
        extra: {
          geoConfig: {
            accuracyThreshold: 25,
            detectOverlaps: true,
            overlapThreshold: 30,
          },
        },
      };
      seedStore(loaded);
      rerender(
        <Form>
          <SettingGeo {...loaded} />
        </Form>
      );
      expect(screen.getByLabelText('Latitude')).toHaveValue('-6.2088');
      expect(screen.getByLabelText('GPS accuracy threshold (m)')).toHaveValue(
        '25'
      );
      expect(screen.getByLabelText('Maximum overlap (%)')).toHaveValue('30');
    });
  });

  describe('writes numbers under extra.geoConfig', () => {
    test('accuracy threshold is stored as a number', async () => {
      renderSetting({ type: 'geoshape' });
      await userEvent.type(
        screen.getByLabelText('GPS accuracy threshold (m)'),
        '25'
      );
      expect(storedQuestion().extra.geoConfig.accuracyThreshold).toBe(25);
    });

    test('overlap threshold is stored as a number', async () => {
      renderSetting({
        type: 'geoshape',
        extra: { geoConfig: { detectOverlaps: true } },
      });
      await userEvent.type(screen.getByLabelText('Maximum overlap (%)'), '30');
      expect(storedQuestion().extra.geoConfig.overlapThreshold).toBe(30);
    });

    test('detectOverlaps is stored as a real boolean', async () => {
      // The backend gates the feature on a JSON lookup for literal `true`,
      // so this must never become a string.
      renderSetting({ type: 'geoshape' });
      await pickSeverity('Overlap', 'Block submission');
      expect(storedQuestion().extra.geoConfig.detectOverlaps).toBe(true);
    });

    test('switching off stores false and keeps the typed threshold', async () => {
      renderSetting({
        type: 'geoshape',
        extra: { geoConfig: { detectOverlaps: true, overlapThreshold: 30 } },
      });
      await pickSeverity('Overlap', 'Do not check');
      expect(storedQuestion().extra.geoConfig.detectOverlaps).toBe(false);
      expect(storedQuestion().extra.geoConfig.overlapThreshold).toBe(30);
    });

    test('an unrelated extra key survives a geoConfig write', async () => {
      renderSetting({
        type: 'geoshape',
        extra: { type: 'entity', name: 'village' },
      });
      await pickSeverity('Overlap', 'Block submission');
      expect(storedQuestion().extra.type).toBe('entity');
      expect(storedQuestion().extra.name).toBe('village');
      expect(storedQuestion().extra.geoConfig.detectOverlaps).toBe(true);
    });

    test('an untouched question gets no geoConfig at all', () => {
      renderSetting({ type: 'geoshape' });
      expect(storedQuestion().extra).toBeUndefined();
    });

    test('center still writes to the question top level', async () => {
      renderSetting({ type: 'geoshape' });
      await userEvent.type(screen.getByLabelText('Latitude'), '1.5');
      expect(storedQuestion().center[0]).toBe(1.5);
    });
  });

  describe('the rule catalogue', () => {
    test('renders every group and every rule it governs', () => {
      renderSetting({ type: 'geoshape' });
      polygonRuleGroups.forEach((group) => {
        expect(screen.getByText(UIText[group.labelKey])).toBeInTheDocument();
        group.rules.forEach((rule) => {
          expect(screen.getByText(UIText[rule.labelKey])).toBeInTheDocument();
        });
      });
      // Structural failures before measurements, per the registry order.
      expect(screen.getByText('Is a polygon')).toBeInTheDocument();
      expect(screen.getByText('Maximum area')).toBeInTheDocument();
    });

    test('does not render the rule table for geo', () => {
      renderSetting({ type: 'geo' });
      expect(screen.queryByText('Validation rules')).not.toBeInTheDocument();
    });

    test('offers one severity control per group, not per rule', () => {
      renderSetting({ type: 'geoshape' });
      // Six rules, three severity keys — a control per rule would imply the
      // rules within a group could differ, which no key can express.
      const ruleCount = polygonRuleGroups.reduce(
        (n, g) => n + g.rules.length,
        0
      );
      expect(ruleCount).toBe(6);
      expect(screen.getAllByRole('combobox')).toHaveLength(3);
    });

    test('every group is severity-configurable', () => {
      // No group states a fixed severity: FR-4.4 and FR-4.7.6 make a failed
      // overlap block submission, and GEO-007 D-7's `required` clamp is the
      // only thing that downgrades it — the same clamp every rule gets.
      polygonRuleGroups.forEach((group) => {
        expect(group.configKey).toBeTruthy();
      });
    });

    test('one control writes both overlap keys', async () => {
      renderSetting({ type: 'geoshape' });
      await pickSeverity('Overlap', 'Warn only');
      const c = storedQuestion().extra.geoConfig;
      expect(c.detectOverlaps).toBe(true);
      expect(c.validateOverlap).toBe(false);
    });

    test('switching off clears the severity it no longer grades', async () => {
      renderSetting({
        type: 'geoshape',
        extra: { geoConfig: { detectOverlaps: true, validateOverlap: false } },
      });
      await pickSeverity('Overlap', 'Do not check');
      const c = storedQuestion().extra.geoConfig;
      expect(c.detectOverlaps).toBe(false);
      expect('validateOverlap' in c).toBe(false);
    });

    test('"do not check" is offered only where a group can be switched off', () => {
      renderSetting({ type: 'geoshape' });
      const switchable = polygonRuleGroups.filter((g) => g.enableKey);
      expect(switchable.map((g) => g.key)).toEqual(['overlap']);
    });

    test('one switch governs every shape rule, including parseable', async () => {
      renderSetting({ type: 'geoshape' });
      await pickSeverity('Shape', 'Warn only');
      const shape = polygonRuleGroups.find((g) => g.key === 'shape');
      expect(shape.rules.map((r) => r.key)).toEqual([
        'parseable',
        'minVertices',
        'selfIntersection',
      ]);
      // All three downgrade together — there is no per-rule override.
      expect(storedQuestion().extra.geoConfig.validateShape).toBe(false);
    });
  });

  describe('severity is tri-state', () => {
    test('defaults to "use device default" when the key is absent', () => {
      renderSetting({ type: 'geoshape' });
      expect(screen.getAllByTitle('Use device default')).not.toHaveLength(0);
    });

    test('restores block/warn from extra.geoConfig', () => {
      renderSetting({
        type: 'geoshape',
        extra: { geoConfig: { validateShape: false, validateArea: true } },
      });
      expect(screen.getByTitle('Warn only')).toBeInTheDocument();
      expect(screen.getByTitle('Block submission')).toBeInTheDocument();
    });

    test('choosing "warn only" stores false, not a removal', async () => {
      renderSetting({ type: 'geoshape' });
      await pickSeverity('Shape', 'Warn only');
      expect(storedQuestion().extra.geoConfig.validateShape).toBe(false);
    });

    test('returning to "use device default" removes the key', async () => {
      renderSetting({
        type: 'geoshape',
        extra: { geoConfig: { validateShape: false } },
      });
      await pickSeverity('Shape', 'Use device default');
      expect('validateShape' in storedQuestion().extra.geoConfig).toBe(false);
    });
  });

  describe('allowTapping only ever writes false', () => {
    test('ticking "require GPS capture" stores false', async () => {
      renderSetting({ type: 'geoshape' });
      await userEvent.click(
        screen.getByRole('checkbox', { name: /Require GPS capture/ })
      );
      expect(storedQuestion().extra.geoConfig.allowTapping).toBe(false);
    });

    test('unticking removes the key rather than storing true', async () => {
      renderSetting({
        type: 'geoshape',
        extra: { geoConfig: { allowTapping: false } },
      });
      await userEvent.click(
        screen.getByRole('checkbox', { name: /Require GPS capture/ })
      );
      expect('allowTapping' in storedQuestion().extra.geoConfig).toBe(false);
    });

    test('restores the ticked state on reopen', () => {
      renderSetting({
        type: 'geoshape',
        extra: { geoConfig: { allowTapping: false } },
      });
      expect(
        screen.getByRole('checkbox', { name: /Require GPS capture/ })
      ).toBeChecked();
    });
  });

  describe('the tap-to-draw bypass warning', () => {
    const bypass = /does not stop an enumerator deleting a shape/;

    test('is hidden while overlap detection is off', () => {
      renderSetting({ type: 'geoshape' });
      expect(screen.queryByText(bypass)).not.toBeInTheDocument();
    });

    test('appears when overlaps are detected but tapping is still allowed', () => {
      renderSetting({
        type: 'geoshape',
        extra: { geoConfig: { detectOverlaps: true } },
      });
      expect(screen.getByText(bypass)).toBeInTheDocument();
    });

    test('goes away once GPS capture is required', () => {
      renderSetting({
        type: 'geoshape',
        extra: { geoConfig: { detectOverlaps: true, allowTapping: false } },
      });
      expect(screen.queryByText(bypass)).not.toBeInTheDocument();
    });
  });

  describe('maxAreaHa', () => {
    test('is stored as a number and accepts a decimal', async () => {
      renderSetting({ type: 'geoshape' });
      await userEvent.type(screen.getByLabelText('Maximum area (ha)'), '0.5');
      expect(storedQuestion().extra.geoConfig.maxAreaHa).toBe(0.5);
    });

    test('clearing it removes the key so the rule goes inert', async () => {
      renderSetting({
        type: 'geoshape',
        extra: { geoConfig: { maxAreaHa: 20 } },
      });
      await userEvent.clear(screen.getByLabelText('Maximum area (ha)'));
      expect('maxAreaHa' in storedQuestion().extra.geoConfig).toBe(false);
    });

    test('restores from extra.geoConfig', () => {
      renderSetting({
        type: 'geoshape',
        extra: { geoConfig: { maxAreaHa: 20 } },
      });
      expect(screen.getByLabelText('Maximum area (ha)')).toHaveValue('20');
    });
  });

  describe('the overlap floor', () => {
    test('is hidden until detectOverlaps is ticked', () => {
      renderSetting({ type: 'geoshape' });
      expect(
        screen.queryByLabelText('Minimum overlap (%)')
      ).not.toBeInTheDocument();
    });

    test('is stored as a number', async () => {
      renderSetting({
        type: 'geoshape',
        extra: { geoConfig: { detectOverlaps: true } },
      });
      await userEvent.type(screen.getByLabelText('Minimum overlap (%)'), '8');
      expect(storedQuestion().extra.geoConfig.overlapThresholdFloor).toBe(8);
    });

    test('cannot be authored above the ceiling', () => {
      renderSetting({
        type: 'geoshape',
        extra: { geoConfig: { detectOverlaps: true, overlapThreshold: 30 } },
      });
      // antd clamps to max on blur, so the bound is what matters here.
      expect(screen.getByLabelText('Minimum overlap (%)')).toHaveAttribute(
        'aria-valuemax',
        '30'
      );
    });

    test('restores from extra.geoConfig', () => {
      renderSetting({
        type: 'geoshape',
        extra: {
          geoConfig: { detectOverlaps: true, overlapThresholdFloor: 8 },
        },
      });
      expect(screen.getByLabelText('Minimum overlap (%)')).toHaveValue('8');
    });
  });
});
