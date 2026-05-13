import { questionType } from '../store';

describe('store.questionType', () => {
  describe('existing types still registered', () => {
    test('input type exists', () => {
      expect(questionType.input).toBe('input');
    });
    test('number type exists', () => {
      expect(questionType.number).toBe('number');
    });
    test('cascade type exists', () => {
      expect(questionType.cascade).toBe('cascade');
    });
    test('geo type exists', () => {
      expect(questionType.geo).toBe('geo');
    });
    test('text type exists', () => {
      expect(questionType.text).toBe('text');
    });
    test('date type exists', () => {
      expect(questionType.date).toBe('date');
    });
    test('option type exists', () => {
      expect(questionType.option).toBe('option');
    });
    test('multiple_option type exists', () => {
      expect(questionType.multiple_option).toBe('multiple_option');
    });
    test('tree type exists', () => {
      expect(questionType.tree).toBe('tree');
    });
    test('table type exists', () => {
      expect(questionType.table).toBe('table');
    });
    test('image type exists', () => {
      expect(questionType.image).toBe('image');
    });
    test('autofield type exists', () => {
      expect(questionType.autofield).toBe('autofield');
    });
  });

  describe('new types registered (Phase 2.1)', () => {
    test('geotrace type registered', () => {
      expect(questionType.geotrace).toBe('geotrace');
    });

    test('geoshape type registered', () => {
      expect(questionType.geoshape).toBe('geoshape');
    });

    test('signature type registered', () => {
      expect(questionType.signature).toBe('signature');
    });

    test('attachment type registered', () => {
      expect(questionType.attachment).toBe('attachment');
    });

    test('entity NOT registered as a separate type', () => {
      // entity is cascade + extra.type:"entity" — not its own question type
      expect(questionType.entity).toBeUndefined();
    });
  });
});
