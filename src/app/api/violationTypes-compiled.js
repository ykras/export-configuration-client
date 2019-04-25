'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _utils = require('./utils');

var _normalizr = require('normalizr');

var violationType = new _normalizr.Schema('violationTypes');

var normalizeFetchedData = function normalizeFetchedData(data) {
  return (0, _normalizr.normalize)(data, (0, _normalizr.arrayOf)(violationType));
};

var returnResult = function returnResult(_ref) {
  var violationTypes = _ref.entities.violationTypes,
      violationTypeIds = _ref.result;
  return {
    violationTypes: violationTypes,
    violationTypeIds: violationTypeIds
  };
};

exports.default = {
  readViolationTypes: function readViolationTypes() {
    var baseUrl = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
    return (0, _utils.fetchJson)(baseUrl + '/api/violationTypes').then(normalizeFetchedData).then(returnResult);
  }
};

//# sourceMappingURL=violationTypes-compiled.js.map