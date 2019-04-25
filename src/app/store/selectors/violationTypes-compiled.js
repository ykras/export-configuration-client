'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getSelectedViolationType = exports.getSelectedViolationTypeId = exports.getViolationTypes = undefined;

var _ramda = require('ramda');

var getViolationTypes = exports.getViolationTypes = function getViolationTypes(state) {
  return state.violationTypes.ids.map(function (id) {
    return state.violationTypes.byId[id];
  });
};

var getSelectedViolationTypeId = exports.getSelectedViolationTypeId = function getSelectedViolationTypeId(state) {
  return state.ui.selectedViolationTypeId;
};

var getViolationType = (0, _ramda.curry)(function (state, id) {
  return state.violationTypes.byId[id] || null;
});

var getSelectedViolationType = exports.getSelectedViolationType = function getSelectedViolationType(state) {
  return (0, _ramda.compose)(getViolationType(state), getSelectedViolationTypeId)(state);
};

//# sourceMappingURL=violationTypes-compiled.js.map