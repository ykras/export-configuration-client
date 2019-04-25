'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getSelectedExportType = exports.getSelectedExportTypeId = exports.getExportTypeIds = exports.getExportTypes = undefined;

var _ramda = require('ramda');

var getExportTypes = exports.getExportTypes = function getExportTypes(state) {
  return state.exportTypes.ids.map(function (id) {
    return state.exportTypes.byId[id];
  });
};

var getExportTypeIds = exports.getExportTypeIds = function getExportTypeIds(state) {
  return state.exportTypes.ids;
};

var getSelectedExportTypeId = exports.getSelectedExportTypeId = function getSelectedExportTypeId(state) {
  return state.ui.selectedExportTypeId;
};

var getExportType = (0, _ramda.curry)(function (state, id) {
  return state.exportTypes.byId[id] || null;
});

var getSelectedExportType = exports.getSelectedExportType = function getSelectedExportType(state) {
  return (0, _ramda.compose)(getExportType(state), getSelectedExportTypeId)(state);
};

//# sourceMappingURL=exportTypes-compiled.js.map