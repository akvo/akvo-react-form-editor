import { renderHook, act } from '@testing-library/react';
import useAutoSave from '../useAutoSave';
import { UIStore, formFn, ErrorStore } from '../../lib/store';
import {
  getDraft,
  getDirtyStatus,
  STATUS_SAVED,
  STATUS_DIRTY,
  STATUS_SAVING,
} from '../../lib/storage';

describe('useAutoSave hook', () => {
  beforeEach(() => {
    localStorage.clear();
    jest.useFakeTimers();
    UIStore.update((s) => {
      s.saveStatus = STATUS_SAVED;
      s.lastSaved = null;
    });
    ErrorStore.update((s) => {
      s.questionGroupErrors = [];
      s.questionErrors = [];
    });
  });

  afterEach(() => {
    jest.useRealTimers();
  });

  test('does not mark dirty on initial mount', () => {
    const onSave = jest.fn();
    renderHook(() =>
      useAutoSave({
        formId: 100,
        onSave,
        enableAutoSave: true,
        autoSaveInterval: 30000,
      })
    );

    expect(UIStore.getRawState().saveStatus).toBe(STATUS_SAVED);
    expect(onSave).not.toHaveBeenCalled();
  });

  test('marks dirty and writes to draft cache on store change after debounce', () => {
    const onSave = jest.fn();
    const { rerender } = renderHook(() =>
      useAutoSave({
        formId: 100,
        onSave,
        enableAutoSave: true,
        autoSaveInterval: 30000,
      })
    );

    // Simulate store mutation
    act(() => {
      formFn.store.update((s) => {
        s.name = 'Updated Form Title';
      });
    });

    rerender();

    expect(UIStore.getRawState().saveStatus).toBe(STATUS_DIRTY);
    expect(getDirtyStatus(100).status).toBe(STATUS_DIRTY);

    // Advance debounce timer (150ms)
    act(() => {
      jest.advanceTimersByTime(150);
    });

    const draft = getDraft(100);
    expect(draft).not.toBeNull();
    expect(draft.form.name).toBe('Updated Form Title');
    expect(onSave).not.toHaveBeenCalled(); // 0 network calls on keystroke!
  });

  test('triggers auto-save on interval when dirty and reverts status to saved on success', async () => {
    const onAutoSave = jest.fn().mockResolvedValue(true);
    renderHook(() =>
      useAutoSave({
        formId: 100,
        onAutoSave,
        enableAutoSave: true,
        autoSaveInterval: 30000,
      })
    );

    // Mark dirty
    act(() => {
      formFn.store.update((s) => {
        s.name = 'Interval Test';
      });
    });

    act(() => {
      jest.advanceTimersByTime(150);
    });

    expect(UIStore.getRawState().saveStatus).toBe(STATUS_DIRTY);

    // Advance timer by 30 seconds
    await act(async () => {
      jest.advanceTimersByTime(30000);
    });

    expect(onAutoSave).toHaveBeenCalledTimes(1);
    expect(UIStore.getRawState().saveStatus).toBe(STATUS_SAVED);
    expect(UIStore.getRawState().lastSaved).not.toBeNull();
  });

  test('retains dirty status if user mutates store during in-flight async save', async () => {
    let resolveSave;
    const slowSave = jest.fn().mockImplementation(() => {
      return new Promise((resolve) => {
        resolveSave = resolve;
      });
    });

    const { result } = renderHook(() =>
      useAutoSave({
        formId: 100,
        onAutoSave: slowSave,
        enableAutoSave: true,
        autoSaveInterval: 30000,
      })
    );

    // 1. Initial edit
    act(() => {
      formFn.store.update((s) => {
        s.name = 'Edit 1';
      });
    });
    act(() => {
      jest.advanceTimersByTime(150);
    });

    // 2. Trigger sync
    let syncPromise;
    act(() => {
      syncPromise = result.current.triggerSync('manual');
    });

    expect(UIStore.getRawState().saveStatus).toBe(STATUS_SAVING);

    // 3. User types again while save is in-flight!
    act(() => {
      jest.advanceTimersByTime(50);
      formFn.store.update((s) => {
        s.name = 'Edit 2 (In-Flight)';
      });
    });

    // 4. In-flight save finishes
    await act(async () => {
      resolveSave(true);
      await syncPromise;
    });

    // Status MUST remain DIRTY because Edit 2 happened after save request started!
    expect(UIStore.getRawState().saveStatus).toBe(STATUS_DIRTY);
  });

  test('skips remote sync when ErrorStore has validation errors but preserves local draft', async () => {
    const onAutoSave = jest.fn();
    const { result } = renderHook(() =>
      useAutoSave({
        formId: 100,
        onAutoSave,
        enableAutoSave: true,
      })
    );

    // Make dirty and set error in ErrorStore
    act(() => {
      formFn.store.update((s) => {
        s.name = 'Invalid Form';
      });
      ErrorStore.update((s) => {
        s.questionErrors = [{ id: 1, field: 'label', message: 'Required' }];
      });
    });

    let syncRes;
    await act(async () => {
      syncRes = await result.current.triggerSync('auto');
    });

    expect(syncRes.success).toBe(false);
    expect(syncRes.reason).toBe('validation_error');
    expect(onAutoSave).not.toHaveBeenCalled();
  });

  test('sets STATUS_ERROR when save handler rejects', async () => {
    const failingSave = jest
      .fn()
      .mockRejectedValue(new Error('Network error 500'));
    const { result } = renderHook(() =>
      useAutoSave({
        formId: 100,
        onAutoSave: failingSave,
        enableAutoSave: true,
      })
    );

    // Edit form to make it dirty
    act(() => {
      formFn.store.update((s) => {
        s.name = 'Failing Form';
      });
    });

    let syncRes;
    await act(async () => {
      syncRes = await result.current.triggerSync('auto');
    });

    expect(syncRes.success).toBe(false);
    expect(UIStore.getRawState().saveStatus).toBe(3); // STATUS_ERROR
  });
});
