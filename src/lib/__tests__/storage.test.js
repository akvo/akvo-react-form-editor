import {
  saveDraft,
  getDraft,
  clearDraft,
  setDirtyStatus,
  getDirtyStatus,
  STATUS_SAVED,
  STATUS_DIRTY,
  storage,
} from '../storage';

describe('storage utility & draft cache', () => {
  beforeEach(() => {
    localStorage.clear();
    storage.resetMemoryStore();
  });

  test('saves and retrieves draft from localStorage', () => {
    const formId = 12345;
    const formState = { id: formId, name: 'My Survey', version: 1 };
    const questionGroups = [{ id: 1, questions: [{ id: 2, label: 'Q1' }] }];

    const success = saveDraft(formId, formState, questionGroups);
    expect(success).toBe(true);

    const draft = getDraft(formId);
    expect(draft).not.toBeNull();
    expect(draft.form).toEqual(formState);
    expect(draft.questionGroups).toEqual(questionGroups);
    expect(draft.updatedAt).toBeDefined();
  });

  test('clears draft from localStorage', () => {
    const formId = 12345;
    saveDraft(formId, { id: formId }, []);
    expect(getDraft(formId)).not.toBeNull();

    clearDraft(formId);
    expect(getDraft(formId)).toBeNull();
  });

  test('tracks dirty status in status table', () => {
    const formId = 999;
    setDirtyStatus(formId, STATUS_DIRTY, { lastUpdated: 1000 });
    let statusObj = getDirtyStatus(formId);
    expect(statusObj.status).toBe(STATUS_DIRTY);
    expect(statusObj.lastUpdated).toBe(1000);

    setDirtyStatus(formId, STATUS_SAVED, { lastSaved: 2000 });
    statusObj = getDirtyStatus(formId);
    expect(statusObj.status).toBe(STATUS_SAVED);
    expect(statusObj.lastSaved).toBe(2000);
  });

  test('handles custom storageKeyPrefix', () => {
    const formId = 777;
    saveDraft(formId, { id: formId }, [], { prefix: 'custom_' });

    const key = `custom_draft_${formId}`;
    expect(localStorage.getItem(key)).not.toBeNull();

    const draft = getDraft(formId, { prefix: 'custom_' });
    expect(draft.form.id).toBe(formId);
  });

  test('falls back gracefully to memory store when localStorage throws QuotaExceededError', () => {
    const setItemSpy = jest
      .spyOn(Storage.prototype, 'setItem')
      .mockImplementation(() => {
        throw new Error('QuotaExceededError');
      });

    const formId = 888;
    const success = saveDraft(formId, { id: formId, name: 'Quota Form' }, []);
    expect(success).toBe(true);

    const draft = getDraft(formId);
    expect(draft).not.toBeNull();
    expect(draft.form.name).toBe('Quota Form');

    setItemSpy.mockRestore();
  });

  test('returns null for nonexistent draft', () => {
    expect(getDraft(99999)).toBeNull();
    expect(getDirtyStatus(99999)).toEqual({ status: STATUS_SAVED });
  });
});
