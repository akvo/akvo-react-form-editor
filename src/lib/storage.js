export const STATUS_SAVED = 0;
export const STATUS_DIRTY = 1;
export const STATUS_SAVING = 2;
export const STATUS_ERROR = 3;

const DEFAULT_PREFIX = 'arfe_';

// In-memory fallback if localStorage is disabled, full, or restricted (e.g. Safari private mode)
const memoryStore = new Map();

export const isStorageAvailable = () => {
  try {
    const testKey = '__arfe_test__';
    window.localStorage.setItem(testKey, testKey);
    window.localStorage.removeItem(testKey);
    return true;
  } catch (e) {
    return false;
  }
};

const getPrefix = (options = {}) => options.prefix || DEFAULT_PREFIX;

const getDraftKey = (formId, options = {}) =>
  `${getPrefix(options)}draft_${formId || 'default'}`;

const getStatusKey = (formId, options = {}) =>
  `${getPrefix(options)}status_${formId || 'default'}`;

export const saveDraft = (formId, formState, questionGroups, options = {}) => {
  const payload = {
    form: formState,
    questionGroups,
    updatedAt: Date.now(),
  };
  const key = getDraftKey(formId, options);
  const serialized = JSON.stringify(payload);

  try {
    window.localStorage.setItem(key, serialized);
    memoryStore.set(key, payload);
    return true;
  } catch (e) {
    // Fallback to memory store
    memoryStore.set(key, payload);
    return true;
  }
};

export const getDraft = (formId, options = {}) => {
  const key = getDraftKey(formId, options);

  try {
    const item = window.localStorage.getItem(key);
    if (item) {
      return JSON.parse(item);
    }
  } catch (e) {
    // fall through to memoryStore
  }

  return memoryStore.get(key) || null;
};

export const clearDraft = (formId, options = {}) => {
  const key = getDraftKey(formId, options);
  const statusKey = getStatusKey(formId, options);

  try {
    window.localStorage.removeItem(key);
    window.localStorage.removeItem(statusKey);
  } catch (e) {
    // ignore
  }

  memoryStore.delete(key);
  memoryStore.delete(statusKey);
  return true;
};

export const setDirtyStatus = (formId, status, meta = {}, options = {}) => {
  const key = getStatusKey(formId, options);
  const payload = {
    formId,
    status,
    ...meta,
    updatedAt: Date.now(),
  };

  try {
    window.localStorage.setItem(key, JSON.stringify(payload));
    memoryStore.set(key, payload);
  } catch (e) {
    memoryStore.set(key, payload);
  }

  return payload;
};

export const getDirtyStatus = (formId, options = {}) => {
  const key = getStatusKey(formId, options);

  try {
    const item = window.localStorage.getItem(key);
    if (item) {
      return JSON.parse(item);
    }
  } catch (e) {
    // fall through to memoryStore
  }

  return memoryStore.get(key) || { status: STATUS_SAVED };
};

export const storage = {
  resetMemoryStore: () => {
    memoryStore.clear();
  },
};
