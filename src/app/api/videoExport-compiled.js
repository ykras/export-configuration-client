'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _utils = require('./utils');

var _normalizr = require('normalizr');

var videoExportMode = new _normalizr.Schema('videoExportModes');

var normalizeVideoExportModes = function normalizeVideoExportModes(data) {
  return (0, _normalizr.normalize)(data, (0, _normalizr.arrayOf)(videoExportMode));
};

var returnVideoExportModes = function returnVideoExportModes(_ref) {
  var videoExportModes = _ref.entities.videoExportModes,
      videoExportModeIds = _ref.result;
  return {
    videoExportModes: videoExportModes,
    videoExportModeIds: videoExportModeIds
  };
};

exports.default = {
  readVideoExportModes: function readVideoExportModes() {
    var baseUrl = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
    var exportTypeId = arguments[1];
    return (0, _utils.fetchJson)(baseUrl + '/api/videoExport/' + exportTypeId + '/modes').then(normalizeVideoExportModes).then(returnVideoExportModes);
  },
  readCurrentVideoExportMode: function readCurrentVideoExportMode() {
    var baseUrl = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
    var exportTypeId = arguments[1];
    return (0, _utils.fetchJson)(baseUrl + '/api/videoExport/' + exportTypeId + '/modes/current');
  },
  updateCurrentVideoExportMode: function updateCurrentVideoExportMode() {
    var baseUrl = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
    var exportTypeId = arguments[1];
    var videoExportModeId = arguments[2];
    return (0, _utils.fetchJson)(baseUrl + '/api/videoExport/' + exportTypeId + '/modes/current', {
      method: 'PUT',
      body: JSON.stringify(videoExportModeId)
    });
  },
  readVideoExportSettings: function readVideoExportSettings() {
    var baseUrl = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
    var exportTypeId = arguments[1];
    return (0, _utils.fetchJson)(baseUrl + '/api/videoExport/' + exportTypeId + '/settings');
  },
  updateVideoExportSettings: function updateVideoExportSettings() {
    var baseUrl = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
    var exportTypeId = arguments[1];
    var videoExportSettings = arguments[2];
    return (0, _utils.fetchJson)(baseUrl + '/api/videoExport/' + exportTypeId + '/settings', {
      method: 'PUT',
      body: JSON.stringify(videoExportSettings)
    });
  }
};

//# sourceMappingURL=videoExport-compiled.js.map