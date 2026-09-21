import data from '../data';
import example from '../../../example/src/example-initial-value.json';

const ALL_KEYS = [
  'accuracyThreshold',
  'allowTapping',
  'validateShape',
  'validateArea',
  'maxAreaHa',
  'detectOverlaps',
  'validateOverlap',
  'overlapThreshold',
  'overlapThresholdFloor',
];

const geoshapes = (form) =>
  form.question_group.flatMap((qg) =>
    qg.question.filter((q) => q.type === 'geoshape')
  );

test('the example demonstrates every geoConfig key', () => {
  const authored = geoshapes(example)
    .flatMap((q) => Object.keys(q.extra?.geoConfig || {}))
    .filter((key, i, all) => all.indexOf(key) === i);
  expect(authored.sort()).toEqual(ALL_KEYS.slice().sort());
});

test('every value is a number or a real boolean, in range', () => {
  geoshapes(example).forEach((q) => {
    const c = q.extra.geoConfig;
    [
      'detectOverlaps',
      'allowTapping',
      'validateShape',
      'validateArea',
      'validateOverlap',
    ]
      .filter((k) => k in c)
      .forEach((k) => expect(typeof c[k]).toBe('boolean'));
    [
      'accuracyThreshold',
      'maxAreaHa',
      'overlapThreshold',
      'overlapThresholdFloor',
    ]
      .filter((k) => k in c)
      .forEach((k) => {
        expect(typeof c[k]).toBe('number');
        expect(c[k]).toBeGreaterThan(0);
      });
    ['overlapThreshold', 'overlapThresholdFloor']
      .filter((k) => k in c)
      .forEach((k) => expect(c[k]).toBeLessThanOrEqual(100));
    if ('overlapThresholdFloor' in c && 'overlapThreshold' in c) {
      // GEO-014 D-5: floor above ceiling inverts the clamp.
      expect(c.overlapThresholdFloor).toBeLessThanOrEqual(c.overlapThreshold);
    }
  });
});

test('geoConfig survives toEditor -> toWebform unchanged', () => {
  const edited = data.toEditor(example);
  const saved = data.toWebform(
    { ...edited, languages: edited.languages },
    edited.questionGroups
  );
  geoshapes(example).forEach((original) => {
    const out = geoshapes(saved).find((q) => q.id === original.id);
    expect(out.extra.geoConfig).toEqual(original.extra.geoConfig);
  });
});

test('no non-geoshape question carries a geoConfig', () => {
  example.question_group.forEach((qg) =>
    qg.question.forEach((q) => {
      if (q.type !== 'geoshape') {
        expect(q.extra?.geoConfig).toBeUndefined();
      }
    })
  );
});
