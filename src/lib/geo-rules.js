// The polygon validation rules a geoshape question carries, mirroring the
// registry the app evaluates (`app/src/form/lib/polygon-rules.js` in the host
// project). Keys match that file exactly so a rule can be traced across the
// two repositories by name.
//
// Rules are grouped by the severity key that governs them, because one switch
// decides the severity of every rule in its group — `validateShape` covers all
// three shape rules, not just self-crossing. A flat list would suggest the
// three could differ, which is the kind of quiet lie GEO-002 D-4 exists to
// prevent.
//
// Order within a group is evaluation order: structural failures before
// measurements, since "this is not a polygon" makes "it is too small"
// redundant rather than additional. The first three are `gating`, so a
// failure skips every later rule rather than silently passing it.
//
//   configKey   extra.geoConfig.<configKey>, a severity shared by the whole
//               group: true = block, false = warn. Absent falls back to the
//               device setting, then to block. `false` never means "skip" —
//               every rule always runs and always reports
//   enableKey   extra.geoConfig.<enableKey>, a real on/off switch
//   severity    fixed severity for a group with no configKey
//   limitKey    UIText key for a static limit the author cannot change
const polygonRuleGroups = [
  {
    key: 'shape',
    labelKey: 'geoRuleGroupShape',
    configKey: 'validateShape',
    rules: [
      // Is the answer a list of [lat, lng] pairs at all? Guards the rest.
      { key: 'parseable', labelKey: 'geoRuleParseable' },
      {
        key: 'minVertices',
        labelKey: 'geoRuleMinVertices',
        limitKey: 'geoRuleMinVerticesLimit',
      },
      { key: 'selfIntersection', labelKey: 'geoRuleSelfIntersection' },
    ],
  },
  {
    key: 'area',
    labelKey: 'geoRuleGroupArea',
    configKey: 'validateArea',
    rules: [
      // The floor is a hardcoded constant; the ceiling is opt-in and inert
      // until `maxAreaHa` is authored. One switch, both bounds.
      {
        key: 'minArea',
        labelKey: 'geoRuleMinArea',
        limitKey: 'geoRuleMinAreaLimit',
      },
      { key: 'maxArea', labelKey: 'geoRuleMaxArea' },
    ],
  },
  {
    // Overlap is the one rule with a real off state — it costs something to
    // run, since enabling it syncs every other response's geometry onto the
    // device.
    //
    // `validateOverlap` is the one key here the app does not read yet. A
    // failed overlap currently blocks submission unconditionally (FR-4.4,
    // FR-4.7.6), clamped to warn only by GEO-007 D-7's `required` rule like
    // every other check. Authoring it lets a programme take the posture
    // GEO-012 §2.4 found in land-tenure deployments, where an overlap starts
    // an adjudication between neighbours rather than refusing the record.
    // Until the app reads it, an explicit choice here is inert — the default
    // matches today's behaviour, so nothing silently changes meaning.
    key: 'overlap',
    labelKey: 'geoRuleGroupOverlap',
    configKey: 'validateOverlap',
    enableKey: 'detectOverlaps',
    rules: [{ key: 'overlap', labelKey: 'geoRuleOverlap' }],
  },
];

// A severity key is tri-state and a checkbox cannot express the third state:
// unticking would write `false` (warn) rather than returning to "unset", which
// is where the device setting applies.
const severityValues = {
  off: 'off',
  default: 'default',
  block: 'block',
  warn: 'warn',
};

const toSeverity = (value) => {
  if (typeof value !== 'boolean') {
    return severityValues.default;
  }
  return value ? severityValues.block : severityValues.warn;
};

// null is how the panel spells "remove this key"; see updateGeoConfig.
const fromSeverity = (value) =>
  value === severityValues.default ? null : value === severityValues.block;

// A switchable group folds its enable flag and its severity into one control,
// so an author picks a single posture instead of reconciling two widgets that
// only make sense together. The keys stay separate underneath: `detectOverlaps`
// must remain a real boolean because the backend gates the whole feature on a
// JSON lookup for literal `true`, and a severity string there would silently
// disable detection for every form.
const toGroupValue = (geoConfig, group) => {
  if (group.enableKey && !geoConfig?.[group.enableKey]) {
    return severityValues.off;
  }
  return toSeverity(geoConfig?.[group.configKey]);
};

// Returns the writes this choice implies, in order, as [key, value] pairs.
// Switching a group off clears its severity rather than leaving a stored
// opinion about a check that no longer runs.
const fromGroupValue = (value, group) => {
  if (!group.enableKey) {
    return [[group.configKey, fromSeverity(value)]];
  }
  if (value === severityValues.off) {
    return [
      [group.enableKey, false],
      [group.configKey, null],
    ];
  }
  return [
    [group.enableKey, true],
    [group.configKey, fromSeverity(value)],
  ];
};

export {
  polygonRuleGroups,
  severityValues,
  toSeverity,
  fromSeverity,
  toGroupValue,
  fromGroupValue,
};
