import { useEffect, useRef, useCallback } from 'react';
import { UIStore, formFn, questionGroupFn, ErrorStore } from '../lib/store';
import {
  saveDraft,
  setDirtyStatus,
  STATUS_SAVED,
  STATUS_DIRTY,
  STATUS_SAVING,
  STATUS_ERROR,
} from '../lib/storage';
import data from '../lib/data';

const DEFAULT_INTERVAL = 30000;
const DEBOUNCE_DELAY = 150;

const useAutoSave = ({
  formId,
  onSave,
  onAutoSave,
  enableAutoSave = true,
  autoSaveInterval = DEFAULT_INTERVAL,
  storageKeyPrefix = 'arfe_',
} = {}) => {
  const formStore = formFn.store.useState((s) => s);
  const questionGroups = questionGroupFn.store.useState(
    (s) => s.questionGroups
  );
  const saveStatus = UIStore.useState((s) => s.saveStatus);

  const isMountedRef = useRef(false);
  const lastFormIdRef = useRef(formId);
  const debounceTimerRef = useRef(null);
  const intervalTimerRef = useRef(null);
  const lastMutationTimeRef = useRef(0);
  const latestStateRef = useRef({ formStore, questionGroups, formId });

  latestStateRef.current = { formStore, questionGroups, formId };

  // Synchronous flush of pending draft write
  const flushDraft = useCallback(() => {
    if (debounceTimerRef.current) {
      clearTimeout(debounceTimerRef.current);
      debounceTimerRef.current = null;
    }
    const {
      formStore: currentForm,
      questionGroups: currentGroups,
      formId: currentId,
    } = latestStateRef.current;
    if (currentId) {
      saveDraft(currentId, currentForm, currentGroups, {
        prefix: storageKeyPrefix,
      });
    }
  }, [storageKeyPrefix]);

  // Execute Save / Auto-Save Sync
  const triggerSync = useCallback(
    async (source = 'auto') => {
      if (!enableAutoSave && source !== 'manual') {
        return { success: false, reason: 'disabled' };
      }

      const currentStatus = UIStore.getRawState().saveStatus;
      if (currentStatus === STATUS_SAVED && source !== 'manual') {
        return { success: true, reason: 'clean' };
      }

      // Check validation
      const errors = ErrorStore.getRawState();
      const hasErrors =
        (errors.questionGroupErrors && errors.questionGroupErrors.length > 0) ||
        (errors.questionErrors && errors.questionErrors.length > 0);

      if (hasErrors) {
        // Validation errors present: preserve draft in local storage but don't hit remote API
        flushDraft();
        return { success: false, reason: 'validation_error' };
      }

      flushDraft();

      const requestTimestamp = Date.now();
      UIStore.update((s) => {
        s.saveStatus = STATUS_SAVING;
      });
      setDirtyStatus(
        formId,
        STATUS_SAVING,
        { lastSaveRequestTimestamp: requestTimestamp },
        { prefix: storageKeyPrefix }
      );

      const payload = data.toWebform(
        latestStateRef.current.formStore,
        latestStateRef.current.questionGroups
      );

      try {
        let result;
        if (source !== 'manual' && onAutoSave) {
          result = onAutoSave(payload, { isAutoSave: true, source });
        } else if (onSave) {
          result = onSave(payload, { isAutoSave: source !== 'manual', source });
        } else if (onAutoSave) {
          result = onAutoSave(payload, {
            isAutoSave: source !== 'manual',
            source,
          });
        }

        if (result && typeof result.then === 'function') {
          await result;
        }

        const resolvedTime = Date.now();
        // Check if user made subsequent mutations while request was in-flight
        if (lastMutationTimeRef.current <= requestTimestamp) {
          UIStore.update((s) => {
            s.saveStatus = STATUS_SAVED;
            s.lastSaved = resolvedTime;
          });
          setDirtyStatus(
            formId,
            STATUS_SAVED,
            { lastSaved: resolvedTime },
            { prefix: storageKeyPrefix }
          );
        } else {
          // Keep dirty if new edits arrived during in-flight save
          UIStore.update((s) => {
            s.saveStatus = STATUS_DIRTY;
            s.lastSaved = resolvedTime;
          });
          setDirtyStatus(
            formId,
            STATUS_DIRTY,
            { lastSaved: resolvedTime },
            { prefix: storageKeyPrefix }
          );
        }

        return { success: true };
      } catch (err) {
        UIStore.update((s) => {
          s.saveStatus = STATUS_ERROR;
        });
        setDirtyStatus(
          formId,
          STATUS_ERROR,
          { error: err.message },
          { prefix: storageKeyPrefix }
        );
        return { success: false, error: err };
      }
    },
    [enableAutoSave, formId, onAutoSave, onSave, storageKeyPrefix, flushDraft]
  );

  // Store mutation observer (keystroke caching & dirty tracking)
  useEffect(() => {
    if (!isMountedRef.current) {
      isMountedRef.current = true;
      lastFormIdRef.current = formId;
      return;
    }

    if (lastFormIdRef.current !== formId) {
      lastFormIdRef.current = formId;
      return;
    }

    lastMutationTimeRef.current = Date.now();

    UIStore.update((s) => {
      s.saveStatus = STATUS_DIRTY;
    });

    setDirtyStatus(
      formId,
      STATUS_DIRTY,
      { lastUpdated: lastMutationTimeRef.current },
      { prefix: storageKeyPrefix }
    );

    if (debounceTimerRef.current) {
      clearTimeout(debounceTimerRef.current);
    }

    debounceTimerRef.current = setTimeout(() => {
      saveDraft(formId, formStore, questionGroups, {
        prefix: storageKeyPrefix,
      });
      debounceTimerRef.current = null;
    }, DEBOUNCE_DELAY);
  }, [formStore, questionGroups, formId, storageKeyPrefix]);

  // Interval timer for periodic auto-save
  useEffect(() => {
    if (!enableAutoSave || autoSaveInterval <= 0) {
      return;
    }

    intervalTimerRef.current = setInterval(() => {
      const currentStatus = UIStore.getRawState().saveStatus;
      if (currentStatus === STATUS_DIRTY) {
        triggerSync('interval');
      }
    }, autoSaveInterval);

    return () => {
      if (intervalTimerRef.current) {
        clearInterval(intervalTimerRef.current);
      }
    };
  }, [enableAutoSave, autoSaveInterval, triggerSync]);

  // Beforeunload listener
  useEffect(() => {
    const handleBeforeUnload = (e) => {
      if (UIStore.getRawState().saveStatus === STATUS_DIRTY) {
        flushDraft();
        e.preventDefault();
        e.returnValue = '';
      }
    };

    window.addEventListener('beforeunload', handleBeforeUnload);
    return () => {
      window.removeEventListener('beforeunload', handleBeforeUnload);
      flushDraft();
    };
  }, [flushDraft]);

  return {
    saveStatus,
    triggerSync,
    flushDraft,
  };
};

export default useAutoSave;
