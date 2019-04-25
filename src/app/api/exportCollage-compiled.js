'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _utils = require('./utils');

var _normalizr = require('normalizr');

var _ramda = require('ramda');

var foregroundObjectType = new _normalizr.Schema('foregroundObjectTypes');
var normalizeForegroundObjectTypes = function normalizeForegroundObjectTypes(data) {
  return (0, _normalizr.normalize)(data, (0, _normalizr.arrayOf)(foregroundObjectType));
};
var returnForegroundObjectTypes = function returnForegroundObjectTypes(_ref) {
  var foregroundObjectTypes = _ref.entities.foregroundObjectTypes,
      foregroundObjectTypeIds = _ref.result;
  return {
    foregroundObjectTypes: foregroundObjectTypes,
    foregroundObjectTypeIds: foregroundObjectTypeIds
  };
};

var settingType = new _normalizr.Schema('settingTypes');
var normalizeSettingTypes = function normalizeSettingTypes(data) {
  return (0, _normalizr.normalize)(data, (0, _normalizr.arrayOf)(settingType));
};
var returnSettingTypes = function returnSettingTypes(_ref2) {
  var settingTypes = _ref2.entities.settingTypes,
      settingTypeIds = _ref2.result;
  return {
    settingTypes: settingTypes,
    settingTypeIds: settingTypeIds
  };
};

var returnCollage = function returnCollage(collage) {
  return _extends({}, (0, _ramda.compose)((0, _ramda.dissoc)('imageFormat'), (0, _ramda.dissoc)('imageBase64'))(collage), {
    imageBase64: 'data:image/' + collage.imageFormat + ';base64,' + collage.imageBase64
  });
};

var footerTemplate = new _normalizr.Schema('footerTemplates', { idAttribute: 'collagePictureType' });
var normalizeFooterTemplates = function normalizeFooterTemplates(data) {
  return (0, _normalizr.normalize)(data, (0, _normalizr.arrayOf)(footerTemplate));
};
var returnFooterTemplates = function returnFooterTemplates(_ref3) {
  var footerTemplates = _ref3.entities.footerTemplates,
      collagePictureTypes = _ref3.result;
  return {
    footerTemplates: footerTemplates,
    collagePictureTypes: collagePictureTypes
  };
};

var trafficLight = new _normalizr.Schema('trafficLights');
var normalizeTrafficLights = function normalizeTrafficLights(data) {
  return (0, _normalizr.normalize)(data, (0, _normalizr.arrayOf)(trafficLight));
};
var returnTrafficLights = function returnTrafficLights(_ref4) {
  var trafficLights = _ref4.entities.trafficLights,
      trafficLightIds = _ref4.result;
  return {
    trafficLights: trafficLights,
    trafficLightIds: trafficLightIds
  };
};

var pictureType = new _normalizr.Schema('pictureTypes');
var normalizePictureTypes = function normalizePictureTypes(data) {
  return (0, _normalizr.normalize)(data, (0, _normalizr.arrayOf)(pictureType));
};
var returnPictureTypes = function returnPictureTypes(_ref5) {
  var pictureTypes = _ref5.entities.pictureTypes,
      pictureTypeIds = _ref5.result;
  return {
    pictureTypes: pictureTypes,
    pictureTypeIds: pictureTypeIds
  };
};

var roadSign = new _normalizr.Schema('roadSigns');
var normalizeRoadSigns = function normalizeRoadSigns(data) {
  return (0, _normalizr.normalize)(data, (0, _normalizr.arrayOf)(roadSign));
};
var returnRoadSigns = function returnRoadSigns(_ref6) {
  var roadSigns = _ref6.entities.roadSigns,
      roadSignIds = _ref6.result;
  return {
    roadSigns: roadSigns,
    roadSignIds: roadSignIds
  };
};

exports.default = {
  readForegroundCollageObjectTypes: function readForegroundCollageObjectTypes() {
    var baseUrl = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
    return (0, _utils.fetchJson)(baseUrl + '/api/exportCollage/foregroundObjectTypes').then(normalizeForegroundObjectTypes).then(returnForegroundObjectTypes);
  },
  readCollage: function readCollage() {
    var baseUrl = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
    var violationTypeId = arguments[1];
    return (0, _utils.fetchJson)(baseUrl + '/api/exportCollage/latestCollage/' + violationTypeId).then(returnCollage);
  },
  readCollageSettingTypes: function readCollageSettingTypes() {
    var baseUrl = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
    return (0, _utils.fetchJson)(baseUrl + '/api/exportCollage/settingTypes').then(normalizeSettingTypes).then(returnSettingTypes);
  },
  readCollageDefaultFont: function readCollageDefaultFont() {
    var baseUrl = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
    return (0, _utils.fetchJson)(baseUrl + '/api/exportCollage/defaultFont');
  },
  updateCollageDefaultFont: function updateCollageDefaultFont() {
    var baseUrl = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
    var defaultFont = arguments[1];
    return (0, _utils.fetchJson)(baseUrl + '/api/exportCollage/defaultFont', {
      method: 'PUT',
      body: JSON.stringify(defaultFont)
    });
  },
  readCollageDefaultFontPriority: function readCollageDefaultFontPriority() {
    var baseUrl = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
    return (0, _utils.fetchJson)(baseUrl + '/api/exportCollage/defaultFont/priority');
  },
  updateCollageDefaultFontPriority: function updateCollageDefaultFontPriority() {
    var baseUrl = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
    var preferDefaultFont = arguments[1];
    return (0, _utils.fetchJson)(baseUrl + '/api/exportCollage/defaultFont/priority', {
      method: 'PUT',
      body: JSON.stringify(preferDefaultFont)
    });
  },
  readCollageExportPath: function readCollageExportPath() {
    var baseUrl = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
    return (0, _utils.fetchJson)(baseUrl + '/api/exportCollage/exportPath');
  },
  updateCollageExportPath: function updateCollageExportPath() {
    var baseUrl = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
    var exportPath = arguments[1];
    return (0, _utils.fetchJson)(baseUrl + '/api/exportCollage/exportPath', {
      method: 'PUT',
      body: JSON.stringify(exportPath)
    });
  },
  readCollageFont: function readCollageFont() {
    var baseUrl = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
    var violationTypeId = arguments[1];
    return (0, _utils.fetchJson)(baseUrl + '/api/exportCollage/font/' + violationTypeId);
  },
  updateCollageFont: function updateCollageFont() {
    var baseUrl = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
    var violationTypeId = arguments[1];
    var font = arguments[2];
    return (0, _utils.fetchJson)(baseUrl + '/api/exportCollage/font/' + violationTypeId, {
      method: 'PUT',
      body: JSON.stringify(font)
    });
  },
  readCollageFooterTemplates: function readCollageFooterTemplates() {
    var baseUrl = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
    var violationTypeId = arguments[1];
    return (0, _utils.fetchJson)(baseUrl + '/api/exportCollage/footerTemplates/' + violationTypeId).then(normalizeFooterTemplates).then(returnFooterTemplates);
  },
  updateCollageFooterTemplate: function updateCollageFooterTemplate() {
    var baseUrl = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
    var violationTypeId = arguments[1];
    var footerTemplate = arguments[2];
    return (0, _utils.fetchJson)(baseUrl + '/api/exportCollage/footerTemplates/' + violationTypeId, {
      method: 'PUT',
      body: JSON.stringify(footerTemplate)
    });
  },
  readCollageTrafficLights: function readCollageTrafficLights() {
    var baseUrl = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
    var violationTypeId = arguments[1];
    return (0, _utils.fetchJson)(baseUrl + '/api/exportCollage/trafficLights/' + violationTypeId).then(normalizeTrafficLights).then(returnTrafficLights);
  },
  createCollageTrafficLight: function createCollageTrafficLight() {
    var baseUrl = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
    var violationTypeId = arguments[1];
    return (0, _utils.fetchJson)(baseUrl + '/api/exportCollage/trafficLights/' + violationTypeId, {
      method: 'POST'
    });
  },
  deleteCollageTrafficLight: function deleteCollageTrafficLight() {
    var baseUrl = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
    var trafficLightId = arguments[1];
    return (0, _utils.fetchJson)(baseUrl + '/api/exportCollage/trafficLights/' + trafficLightId, {
      method: 'DELETE'
    });
  },
  readCollagePictureTypes: function readCollagePictureTypes() {
    var baseUrl = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
    return (0, _utils.fetchJson)(baseUrl + '/api/exportCollage/pictureTypes').then(normalizePictureTypes).then(returnPictureTypes);
  },
  updateCollageTrafficLight: function updateCollageTrafficLight() {
    var baseUrl = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
    var trafficLightId = arguments[1];
    var trafficLight = arguments[2];
    return (0, _utils.fetchJson)(baseUrl + '/api/exportCollage/trafficLights/' + trafficLightId, {
      method: 'PUT',
      body: JSON.stringify(trafficLight)
    });
  },
  createCollageRoadSign: function createCollageRoadSign() {
    var baseUrl = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
    var violationTypeId = arguments[1];
    return (0, _utils.fetchJson)(baseUrl + '/api/exportCollage/roadSigns/' + violationTypeId, {
      method: 'POST'
    });
  },
  deleteCollageRoadSign: function deleteCollageRoadSign() {
    var baseUrl = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
    var roadSignId = arguments[1];
    return (0, _utils.fetchJson)(baseUrl + '/api/exportCollage/roadSigns/' + roadSignId, {
      method: 'DELETE'
    });
  },
  readCollageRoadSigns: function readCollageRoadSigns() {
    var baseUrl = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
    var violationTypeId = arguments[1];
    return (0, _utils.fetchJson)(baseUrl + '/api/exportCollage/roadSigns/' + violationTypeId).then(normalizeRoadSigns).then(returnRoadSigns);
  },
  uploadCollageRoadSignFile: function uploadCollageRoadSignFile() {
    var baseUrl = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
    var violationTypeId = arguments[1];
    var roadSignFile = arguments[2];
    return (0, _utils.fetchJson)(baseUrl + '/api/exportCollage/roadSigns/' + violationTypeId + '/files', {
      method: 'POST',
      body: JSON.stringify(roadSignFile)
    });
  },
  updateCollageRoadSign: function updateCollageRoadSign() {
    var baseUrl = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
    var roadSignId = arguments[1];
    var roadSign = arguments[2];
    return (0, _utils.fetchJson)(baseUrl + '/api/exportCollage/roadSigns/' + roadSignId, {
      method: 'PUT',
      body: JSON.stringify(roadSign)
    });
  },
  saveCurrentCollageConfiguration: function saveCurrentCollageConfiguration() {
    var baseUrl = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
    return (0, _utils.fetchJson)(baseUrl + '/api/exportCollage/currentConfig', {
      method: 'PUT'
    });
  }
};

//# sourceMappingURL=exportCollage-compiled.js.map