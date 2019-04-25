'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getVocordTefVideoExportSettings = exports.getSelectedVocordTefVideoExportMode = exports.getSelectedVocordTefVideoExportModeId = exports.getVocordTefVideoExportModes = exports.getVocordTefSettings = exports.getSpreadOutViolationsEnabled = undefined;

var _ramda = require('ramda');

var getSpreadOutViolationsEnabled = exports.getSpreadOutViolationsEnabled = function getSpreadOutViolationsEnabled(state) {
  return state.exportVocordTef.settings.usePathTemplate;
};

var getVocordTefSettings = exports.getVocordTefSettings = function getVocordTefSettings(state) {
  var settings = state.exportVocordTef.settings;
  if (settings && !settings.exportRelativePathTemplate) {
    settings.exportRelativePathTemplate = '%date:dd.MM.yyyy%\\%type%';
  }
  return settings;
};

var getVocordTefVideoExportModes = exports.getVocordTefVideoExportModes = function getVocordTefVideoExportModes(state) {
  return state.exportVocordTef.videoExportModes.ids.map(function (id) {
    return state.exportVocordTef.videoExportModes.byId[id];
  });
};

var getSelectedVocordTefVideoExportModeId = exports.getSelectedVocordTefVideoExportModeId = function getSelectedVocordTefVideoExportModeId(state) {
  return state.ui.selectedVocordTefVideoExportModeId;
};

var getVocordTefVideoExportMode = (0, _ramda.curry)(function (state, id) {
  return state.exportVocordTef.videoExportModes.byId[id] || null;
});

var getSelectedVocordTefVideoExportMode = exports.getSelectedVocordTefVideoExportMode = function getSelectedVocordTefVideoExportMode(state) {
  return (0, _ramda.compose)(getVocordTefVideoExportMode(state), getSelectedVocordTefVideoExportModeId)(state);
};

var getVocordTefVideoExportSettings = exports.getVocordTefVideoExportSettings = function getVocordTefVideoExportSettings(state) {
  return state.exportVocordTef.videoExportSettings;
};

//# sourceMappingURL=exportVocordTef-compiled.js.map