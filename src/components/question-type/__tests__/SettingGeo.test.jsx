import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Form } from 'antd';
import '@testing-library/jest-dom';
import SettingGeo from '../SettingGeo';
import { questionGroupFn } from '../../../lib/store';

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
        screen.queryByLabelText('Overlap threshold (%)')
      ).not.toBeInTheDocument();
    });

    test('shows the overlap threshold when detectOverlaps is set', () => {
      renderSetting({
        type: 'geoshape',
        extra: { geoConfig: { detectOverlaps: true } },
      });
      expect(
        screen.getByLabelText('Overlap threshold (%)')
      ).toBeInTheDocument();
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
      expect(screen.getByLabelText('Overlap threshold (%)')).toHaveValue('30');
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
      await userEvent.type(
        screen.getByLabelText('Overlap threshold (%)'),
        '30'
      );
      expect(storedQuestion().extra.geoConfig.overlapThreshold).toBe(30);
    });

    test('detectOverlaps is stored as a boolean', async () => {
      renderSetting({ type: 'geoshape' });
      await userEvent.click(
        screen.getByRole('checkbox', {
          name: /Detect overlaps with other answers/,
        })
      );
      expect(storedQuestion().extra.geoConfig.detectOverlaps).toBe(true);
    });

    test('unticking stores false and keeps the typed threshold', async () => {
      renderSetting({
        type: 'geoshape',
        extra: { geoConfig: { detectOverlaps: true, overlapThreshold: 30 } },
      });
      await userEvent.click(
        screen.getByRole('checkbox', {
          name: /Detect overlaps with other answers/,
        })
      );
      expect(storedQuestion().extra.geoConfig.detectOverlaps).toBe(false);
      expect(storedQuestion().extra.geoConfig.overlapThreshold).toBe(30);
    });

    test('an unrelated extra key survives a geoConfig write', async () => {
      renderSetting({
        type: 'geoshape',
        extra: { type: 'entity', name: 'village' },
      });
      await userEvent.click(
        screen.getByRole('checkbox', {
          name: /Detect overlaps with other answers/,
        })
      );
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
});
