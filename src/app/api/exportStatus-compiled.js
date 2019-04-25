'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _utils = require('./utils');

/* export default {
  readExportEnabled: (baseUrl = '', exportTypeId) =>
    fetchJson(`${baseUrl}/api/exportStatus?exportTypeId=${exportTypeId}`)
      .then(exportEnabled => ({exportTypeId, exportEnabled})),
  updateExportEnabled: (baseUrl = '', exportTypeId, exportEnabled) =>
    fetchJson(`${baseUrl}/api/exportStatus?exportTypeId=${exportTypeId}`,
      {
        method: 'PUT',
        body: JSON.stringify(exportEnabled)
      }),
  readExportPotokPlusEnabled: (baseUrl = '') =>
    fetchJson(`${baseUrl}/api/exportStatus/potokPlus`),
  updateExportPotokPlusEnabled: (baseUrl = '', exportPotokPlusEnabled) =>
    fetchJson(`${baseUrl}/api/exportStatus/potokPlus`,
      {
        method: 'PUT',
        body: JSON.stringify(exportPotokPlusEnabled)
      }),
  repeatExport: (baseUrl = '', exportTypeId) =>
    fetchJson(`${baseUrl}/api/exportStatus/repeatExport?exportTypeId=${exportTypeId}`,
      {
        method: 'POST'
      })
};*/

exports.default = {
  readExportEnabled: function readExportEnabled() {
    var baseUrl = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
    var exportTypeId = arguments[1];
    return (0, _utils.fetchJson)(baseUrl + '/api/exportStatus/' + exportTypeId).then(function (exportEnabled) {
      return { exportTypeId: exportTypeId, exportEnabled: exportEnabled };
    });
  },
  updateExportEnabled: function updateExportEnabled() {
    var baseUrl = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
    var exportTypeId = arguments[1];
    var exportEnabled = arguments[2];
    return (0, _utils.fetchJson)(baseUrl + '/api/exportStatus/' + exportTypeId, {
      method: 'PUT',
      body: JSON.stringify(exportEnabled)
    });
  },
  readExportPotokPlusEnabled: function readExportPotokPlusEnabled() {
    var baseUrl = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
    return (0, _utils.fetchJson)(baseUrl + '/api/exportStatus/potokPlus');
  },
  updateExportPotokPlusEnabled: function updateExportPotokPlusEnabled() {
    var baseUrl = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
    var exportPotokPlusEnabled = arguments[1];
    return (0, _utils.fetchJson)(baseUrl + '/api/exportStatus/potokPlus', {
      method: 'PUT',
      body: JSON.stringify(exportPotokPlusEnabled)
    });
  },
  repeatExport: function repeatExport() {
    var baseUrl = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
    var exportTypeId = arguments[1];
    return (0, _utils.fetchJson)(baseUrl + '/api/exportStatus/repeatExport/' + exportTypeId, {
      method: 'POST'
    });
  }
};

//# sourceMappingURL=exportStatus-compiled.js.map