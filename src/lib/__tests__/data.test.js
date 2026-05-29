import data from '../data';

/**
 * Helper to produce a minimal webform JSON containing a single question group
 * with one question.
 */
const wfWithQuestion = (q) => ({
  id: 1,
  name: 'F',
  description: 'D',
  question_group: [
    {
      id: 10,
      label: 'G',
      name: 'g',
      order: 1,
      repeatable: false,
      question: [q],
    },
  ],
});

/**
 * Helper to produce the editor-internal form & questionGroups passed into
 * toWebform.
 */
const editorWithQuestion = (q) => {
  const formData = { id: 1, name: 'F', description: 'D' };
  const questionGroups = [
    {
      id: 10,
      label: 'G',
      name: 'g',
      order: 1,
      repeatable: false,
      questions: [q],
    },
  ];
  return { formData, questionGroups };
};

const findQ = (out) => out.question_group[0].question[0];

describe('data.toEditor (Phase 3)', () => {
  describe('center normalization', () => {
    test('center as {lat, lng} object converts to [lat, lng] array', () => {
      const webform = wfWithQuestion({
        id: 100,
        order: 1,
        type: 'geo',
        label: 'L',
        name: 'l',
        center: { lat: 1.23, lng: 4.56 },
      });
      const editor = data.toEditor(webform);
      const q = editor.questionGroups[0].questions[0];
      expect(Array.isArray(q.center)).toBe(true);
      expect(q.center).toEqual([1.23, 4.56]);
    });

    test('center already as array passes through', () => {
      const webform = wfWithQuestion({
        id: 100,
        order: 1,
        type: 'geo',
        label: 'L',
        name: 'l',
        center: [1.23, 4.56],
      });
      const editor = data.toEditor(webform);
      const q = editor.questionGroups[0].questions[0];
      expect(q.center).toEqual([1.23, 4.56]);
    });

    test('no center → no center key added', () => {
      const webform = wfWithQuestion({
        id: 100,
        order: 1,
        type: 'geo',
        label: 'L',
        name: 'l',
      });
      const editor = data.toEditor(webform);
      const q = editor.questionGroups[0].questions[0];
      expect(q.center).toBeUndefined();
    });
  });

  describe('entity extra mapping', () => {
    test('cascade with extra.type="entity" maps to entityExtra and removes extra', () => {
      const webform = wfWithQuestion({
        id: 100,
        order: 1,
        type: 'cascade',
        label: 'L',
        name: 'l',
        extra: { type: 'entity', name: 'household', parentId: 'village' },
      });
      const editor = data.toEditor(webform);
      const q = editor.questionGroups[0].questions[0];
      expect(q.entityExtra).toEqual({
        name: 'household',
        parentId: 'village',
      });
      expect(q.extra).toBeUndefined();
    });

    test('cascade with non-entity extra is left alone', () => {
      const webform = wfWithQuestion({
        id: 100,
        order: 1,
        type: 'cascade',
        label: 'L',
        name: 'l',
        extra: [{ placement: 'before', content: 'Hello' }],
      });
      const editor = data.toEditor(webform);
      const q = editor.questionGroups[0].questions[0];
      expect(q.entityExtra).toBeUndefined();
      expect(q.extra).toBeDefined();
    });

    test('non-cascade with extra.type="entity" is not mapped', () => {
      const webform = wfWithQuestion({
        id: 100,
        order: 1,
        type: 'input',
        label: 'L',
        name: 'l',
        extra: { type: 'entity', name: 'x', parentId: 'y' },
      });
      const editor = data.toEditor(webform);
      const q = editor.questionGroups[0].questions[0];
      expect(q.entityExtra).toBeUndefined();
    });
  });
});

describe('data.toWebform (Phase 3)', () => {
  describe('geo center cleanup', () => {
    test('strips center from non-geo type', () => {
      const { formData, questionGroups } = editorWithQuestion({
        id: 100,
        order: 1,
        type: 'input',
        label: 'L',
        name: 'l',
        center: [1, 2],
      });
      const out = data.toWebform(formData, questionGroups);
      expect(findQ(out).center).toBeUndefined();
    });

    test('keeps center for geo type when populated', () => {
      const { formData, questionGroups } = editorWithQuestion({
        id: 100,
        order: 1,
        type: 'geo',
        label: 'L',
        name: 'l',
        center: [1.23, 4.56],
      });
      const out = data.toWebform(formData, questionGroups);
      expect(findQ(out).center).toEqual([1.23, 4.56]);
    });

    test('keeps center for geotrace type when populated', () => {
      const { formData, questionGroups } = editorWithQuestion({
        id: 100,
        order: 1,
        type: 'geotrace',
        label: 'L',
        name: 'l',
        center: [1.23, 4.56],
      });
      const out = data.toWebform(formData, questionGroups);
      expect(findQ(out).center).toEqual([1.23, 4.56]);
    });

    test('keeps center for geoshape type when populated', () => {
      const { formData, questionGroups } = editorWithQuestion({
        id: 100,
        order: 1,
        type: 'geoshape',
        label: 'L',
        name: 'l',
        center: [1.23, 4.56],
      });
      const out = data.toWebform(formData, questionGroups);
      expect(findQ(out).center).toEqual([1.23, 4.56]);
    });

    test('omits center when both lat & lng null on geo type', () => {
      const { formData, questionGroups } = editorWithQuestion({
        id: 100,
        order: 1,
        type: 'geo',
        label: 'L',
        name: 'l',
        center: [null, null],
      });
      const out = data.toWebform(formData, questionGroups);
      expect(findQ(out).center).toBeUndefined();
    });
  });

  describe('entity extra mapping', () => {
    test('cascade with entityExtra writes extra: {type:entity, ...} and strips entityExtra', () => {
      const { formData, questionGroups } = editorWithQuestion({
        id: 100,
        order: 1,
        type: 'cascade',
        label: 'L',
        name: 'l',
        entityExtra: { name: 'household', parentId: 'village' },
      });
      const out = data.toWebform(formData, questionGroups);
      const q = findQ(out);
      expect(q.extra).toEqual({
        type: 'entity',
        name: 'household',
        parentId: 'village',
      });
      expect(q.entityExtra).toBeUndefined();
    });

    test('non-cascade with entityExtra strips entityExtra and does NOT add extra', () => {
      const { formData, questionGroups } = editorWithQuestion({
        id: 100,
        order: 1,
        type: 'input',
        label: 'L',
        name: 'l',
        entityExtra: { name: 'x', parentId: 'y' },
      });
      const out = data.toWebform(formData, questionGroups);
      const q = findQ(out);
      expect(q.entityExtra).toBeUndefined();
      expect(q.extra).toBeUndefined();
    });

    test('cascade without entityExtra is left as-is', () => {
      const { formData, questionGroups } = editorWithQuestion({
        id: 100,
        order: 1,
        type: 'cascade',
        label: 'L',
        name: 'l',
      });
      const out = data.toWebform(formData, questionGroups);
      const q = findQ(out);
      expect(q.entityExtra).toBeUndefined();
      expect(q.extra).toBeUndefined();
    });
  });

  describe('partialRequired cleanup', () => {
    test('strips partialRequired from non-cascade type', () => {
      const { formData, questionGroups } = editorWithQuestion({
        id: 100,
        order: 1,
        type: 'input',
        label: 'L',
        name: 'l',
        partialRequired: true,
      });
      const out = data.toWebform(formData, questionGroups);
      expect(findQ(out).partialRequired).toBeUndefined();
    });

    test('keeps partialRequired on cascade type', () => {
      const { formData, questionGroups } = editorWithQuestion({
        id: 100,
        order: 1,
        type: 'cascade',
        label: 'L',
        name: 'l',
        partialRequired: true,
      });
      const out = data.toWebform(formData, questionGroups);
      expect(findQ(out).partialRequired).toBe(true);
    });
  });

  describe('tree-only fields cleanup', () => {
    test('strips checkStrategy from non-tree type', () => {
      const { formData, questionGroups } = editorWithQuestion({
        id: 100,
        order: 1,
        type: 'input',
        label: 'L',
        name: 'l',
        checkStrategy: 'children',
      });
      const out = data.toWebform(formData, questionGroups);
      expect(findQ(out).checkStrategy).toBeUndefined();
    });

    test('strips expandAll from non-tree type', () => {
      const { formData, questionGroups } = editorWithQuestion({
        id: 100,
        order: 1,
        type: 'input',
        label: 'L',
        name: 'l',
        expandAll: true,
      });
      const out = data.toWebform(formData, questionGroups);
      expect(findQ(out).expandAll).toBeUndefined();
    });

    test('keeps checkStrategy & expandAll on tree type', () => {
      const { formData, questionGroups } = editorWithQuestion({
        id: 100,
        order: 1,
        type: 'tree',
        label: 'L',
        name: 'l',
        checkStrategy: 'children',
        expandAll: true,
      });
      const out = data.toWebform(formData, questionGroups);
      const q = findQ(out);
      expect(q.checkStrategy).toBe('children');
      expect(q.expandAll).toBe(true);
    });
  });

  describe('attachment api.response_key cleanup', () => {
    test('strips response_key from non-attachment api', () => {
      const { formData, questionGroups } = editorWithQuestion({
        id: 100,
        order: 1,
        type: 'cascade',
        label: 'L',
        name: 'l',
        api: { endpoint: '/x', response_key: 'data' },
      });
      const out = data.toWebform(formData, questionGroups);
      const q = findQ(out);
      expect(q.api).toBeDefined();
      expect(q.api.response_key).toBeUndefined();
      expect(q.api.endpoint).toBe('/x');
    });

    test('keeps response_key on attachment api', () => {
      const { formData, questionGroups } = editorWithQuestion({
        id: 100,
        order: 1,
        type: 'attachment',
        label: 'L',
        name: 'l',
        api: { endpoint: '/upload', response_key: 'filename' },
      });
      const out = data.toWebform(formData, questionGroups);
      const q = findQ(out);
      expect(q.api.endpoint).toBe('/upload');
      expect(q.api.response_key).toBe('filename');
    });

    test('no api on non-attachment leaves question unaffected', () => {
      const { formData, questionGroups } = editorWithQuestion({
        id: 100,
        order: 1,
        type: 'input',
        label: 'L',
        name: 'l',
      });
      const out = data.toWebform(formData, questionGroups);
      expect(findQ(out).api).toBeUndefined();
    });
  });

  describe('attachment rule.allowedFileTypes', () => {
    test('keeps rule on attachment type', () => {
      const { formData, questionGroups } = editorWithQuestion({
        id: 100,
        order: 1,
        type: 'attachment',
        label: 'L',
        name: 'l',
        rule: { allowedFileTypes: ['pdf', 'jpg'] },
      });
      const out = data.toWebform(formData, questionGroups);
      expect(findQ(out).rule).toEqual({ allowedFileTypes: ['pdf', 'jpg'] });
    });

    test('strips rule from non-attachment, non-number, non-date type', () => {
      const { formData, questionGroups } = editorWithQuestion({
        id: 100,
        order: 1,
        type: 'input',
        label: 'L',
        name: 'l',
        rule: { allowedFileTypes: ['pdf'] },
      });
      const out = data.toWebform(formData, questionGroups);
      expect(findQ(out).rule).toBeUndefined();
    });
  });

  describe('group-level leading_question + show_repeat_in_question_level', () => {
    const editorWithGroup = (groupExtra) => {
      const formData = { id: 1, name: 'F', description: 'D' };
      const questionGroups = [
        {
          id: 10,
          label: 'G',
          name: 'g',
          order: 1,
          repeatable: true,
          ...groupExtra,
          questions: [
            { id: 100, order: 1, type: 'input', label: 'L', name: 'l' },
          ],
        },
      ];
      return { formData, questionGroups };
    };

    test('leading_question written to group output when set', () => {
      const { formData, questionGroups } = editorWithGroup({
        leading_question: 88,
      });
      const out = data.toWebform(formData, questionGroups);
      expect(out.question_group[0].leading_question).toBe(88);
    });

    test('show_repeat_in_question_level written to group output when true', () => {
      const { formData, questionGroups } = editorWithGroup({
        show_repeat_in_question_level: true,
      });
      const out = data.toWebform(formData, questionGroups);
      expect(out.question_group[0].show_repeat_in_question_level).toBe(true);
    });

    test('leading_question omitted when not set', () => {
      const { formData, questionGroups } = editorWithGroup({});
      const out = data.toWebform(formData, questionGroups);
      expect(out.question_group[0].leading_question).toBeUndefined();
    });
  });

  describe('pass-through fields', () => {
    test('disabled passes through as-is', () => {
      const { formData, questionGroups } = editorWithQuestion({
        id: 100,
        order: 1,
        type: 'input',
        label: 'L',
        name: 'l',
        disabled: true,
      });
      const out = data.toWebform(formData, questionGroups);
      expect(findQ(out).disabled).toBe(true);
    });

    test('dependency_rule passes through as-is', () => {
      const { formData, questionGroups } = editorWithQuestion({
        id: 100,
        order: 1,
        type: 'input',
        label: 'L',
        name: 'l',
        dependency_rule: 'AND',
      });
      const out = data.toWebform(formData, questionGroups);
      expect(findQ(out).dependency_rule).toBe('AND');
    });

    test('is_repeat_identifier passes through as-is', () => {
      const { formData, questionGroups } = editorWithQuestion({
        id: 100,
        order: 1,
        type: 'input',
        label: 'L',
        name: 'l',
        is_repeat_identifier: true,
      });
      const out = data.toWebform(formData, questionGroups);
      expect(findQ(out).is_repeat_identifier).toBe(true);
    });
  });
});
