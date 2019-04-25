'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _utils = require('./utils');

var _normalizr = require('normalizr');

var exportType = new _normalizr.Schema('exportTypes');

var normalizeFetchedData = function normalizeFetchedData(types) {
  return (0, _normalizr.normalize)(types, (0, _normalizr.arrayOf)(exportType));
};

var returnResult = function returnResult(_ref) {
  var exportTypes = _ref.entities.exportTypes,
      exportTypeIds = _ref.result;
  return {
    exportTypes: exportTypes,
    exportTypeIds: exportTypeIds
  };
};

exports.default = {
  readExportTypes: function readExportTypes() {
    var baseUrl = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
    return (0, _utils.fetchJson)(baseUrl + '/api/exportTypes').then(normalizeFetchedData).then(returnResult);
  },
  readSelectedExportTypeId: function readSelectedExportTypeId() {
    var baseUrl = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
    return (0, _utils.fetchJson)(baseUrl + '/api/exportTypes/selected');
  },
  updateSelectedExportType: function updateSelectedExportType() {
    var baseUrl = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
    var exportTypeId = arguments[1];
    return (0, _utils.fetchJson)(baseUrl + '/api/exportTypes/selected', {
      method: 'PUT',
      body: JSON.stringify(exportTypeId)
    });
  }
};

//# sourceMappingURL=exportTypes-compiled.js.map