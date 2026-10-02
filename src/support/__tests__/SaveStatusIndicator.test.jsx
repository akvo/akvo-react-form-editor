import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import SaveStatusIndicator from '../SaveStatusIndicator';
import { UIStore } from '../../lib/store';
import {
  STATUS_SAVED,
  STATUS_DIRTY,
  STATUS_SAVING,
  STATUS_ERROR,
} from '../../lib/storage';

describe('SaveStatusIndicator', () => {
  beforeEach(() => {
    UIStore.update((s) => {
      s.saveStatus = STATUS_SAVED;
      s.lastSaved = null;
    });
  });

  test('renders saved state by default', () => {
    render(<SaveStatusIndicator />);
    expect(screen.getByText(/All changes saved/i)).toBeInTheDocument();
  });

  test('renders formatted lastSaved time when provided in saved state', () => {
    const fixedTime = new Date(2026, 9, 2, 14, 30).getTime();
    UIStore.update((s) => {
      s.saveStatus = STATUS_SAVED;
      s.lastSaved = fixedTime;
    });

    render(<SaveStatusIndicator />);
    expect(screen.getByText(/Saved at/i)).toBeInTheDocument();
  });

  test('renders unsaved changes when dirty', () => {
    UIStore.update((s) => {
      s.saveStatus = STATUS_DIRTY;
    });

    render(<SaveStatusIndicator />);
    expect(screen.getByText(/Unsaved changes/i)).toBeInTheDocument();
  });

  test('renders saving changes state', () => {
    UIStore.update((s) => {
      s.saveStatus = STATUS_SAVING;
    });

    render(<SaveStatusIndicator />);
    expect(screen.getByText(/Saving changes/i)).toBeInTheDocument();
  });

  test('renders error state and calls onRetry when clicked', () => {
    const onRetry = jest.fn();
    UIStore.update((s) => {
      s.saveStatus = STATUS_ERROR;
    });

    render(<SaveStatusIndicator onRetry={onRetry} />);
    const errorElement = screen.getByText(/Auto-save failed/i);
    expect(errorElement).toBeInTheDocument();

    fireEvent.click(errorElement);
    expect(onRetry).toHaveBeenCalledTimes(1);
  });
});
