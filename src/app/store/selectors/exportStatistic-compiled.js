'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
var getExportStatistic = exports.getExportStatistic = function getExportStatistic(state) {
  return state.exportStatistic;
};

var getExportSucceeded = exports.getExportSucceeded = function getExportSucceeded(state) {
  return state.exportStatistic.succeeded;
};

var getExportErrorCode = exports.getExportErrorCode = function getExportErrorCode(state) {
  return state.exportStatistic.errorCode;
};

var getExportErrorCategory = exports.getExportErrorCategory = function getExportErrorCategory(state) {
  return state.exportStatistic.errorCategory;
};

var getLastExportTryStartTime = exports.getLastExportTryStartTime = function getLastExportTryStartTime(state) {
  return state.exportStatistic.lastExportTryStartTime;
};

var getLastSuccessfulExportTryEndTime = exports.getLastSuccessfulExportTryEndTime = function getLastSuccessfulExportTryEndTime(state) {
  return state.exportStatistic.lastSuccessfulExportTryEndTime;
};

var getLastExportedViolationTime = exports.getLastExportedViolationTime = function getLastExportedViolationTime(state) {
  return state.exportStatistic.lastExportedViolationTime;
};

//# sourceMappingURL=exportStatistic-compiled.js.map