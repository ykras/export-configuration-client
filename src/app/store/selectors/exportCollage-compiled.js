'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getCollageRoadSigns = exports.getCollageSelectedRectangle = exports.getCollagePictureTypeName = exports.getCollagePictureTypeId = exports.getCollagePictureTypes = exports.getCollageDefaultFont = exports.getCollageVideoExportSecondsAfterCheckTime = exports.getCollageVideoExportSecondsBeforeCheckTime = exports.getSelectedCollageVideoExportMode = exports.getSelectedCollageVideoExportModeId = exports.getCollageVideoExportModes = exports.isCollageSettingSelected = exports.getCollageSetting = exports.getCollageExportPath = exports.getCollageSettings = exports.getSelectedCollageSettingType = exports.getSelectedCollageSettingTypeId = exports.getCollageSettingTypes = exports.getCollageRecognitionChannelIds = exports.getCollageSize = exports.getCollageImage = exports.getCollage = exports.getSelectedForegroundCollageObjectType = exports.getForegroundCollageObjectTypes = undefined;

var _ramda = require('ramda');

var _lodash = require('lodash');

var _identifiers = require('../identifiers');

var _identifiers2 = _interopRequireDefault(_identifiers);

var _violationTypes = require('./violationTypes');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var getForegroundCollageObjectTypes = exports.getForegroundCollageObjectTypes = function getForegroundCollageObjectTypes(state) {
  return state.exportCollage.foregroundObjectTypes.ids.map(function (id) {
    return state.exportCollage.foregroundObjectTypes.byId[id];
  });
};

var getSelectedForegroundCollageObjectTypeId = function getSelectedForegroundCollageObjectTypeId(state) {
  return state.ui.selectedForegroundCollageObjectTypeId;
};

var getForegroundCollageObjectType = (0, _ramda.curry)(function (state, id) {
  return state.exportCollage.foregroundObjectTypes.byId[id] || null;
});

var getSelectedForegroundCollageObjectType = exports.getSelectedForegroundCollageObjectType = function getSelectedForegroundCollageObjectType(state) {
  return (0, _ramda.compose)(getForegroundCollageObjectType(state), getSelectedForegroundCollageObjectTypeId)(state);
};

var getCollage = exports.getCollage = function getCollage(state) {
  return state.exportCollage.collage;
};

var getCollageImage = exports.getCollageImage = function getCollageImage(state) {
  var collage = getCollage(state);
  return collage ? collage.imageBase64 : null;
};

var getCollageSize = exports.getCollageSize = function getCollageSize(state) {
  var collage = getCollage(state);
  return collage ? { width: collage.widthInPixels, height: collage.heightInPixels } : { width: 0, height: 0 };
};

var getCollageRecognitionChannelIds = exports.getCollageRecognitionChannelIds = function getCollageRecognitionChannelIds(state) {
  var collage = getCollage(state);
  return collage ? collage.recognitionChannelIds : [];
};

var getCollageSettingTypes = exports.getCollageSettingTypes = function getCollageSettingTypes(state) {
  return state.exportCollage.settingTypes.ids.map(function (id) {
    return state.exportCollage.settingTypes.byId[id];
  });
};

var getSelectedCollageSettingTypeId = exports.getSelectedCollageSettingTypeId = function getSelectedCollageSettingTypeId(state) {
  return state.ui.selectedCollageSettingTypeId;
};

var getCollageSettingType = (0, _ramda.curry)(function (state, id) {
  return state.exportCollage.settingTypes.byId[id] || null;
});

var getSelectedCollageSettingType = exports.getSelectedCollageSettingType = function getSelectedCollageSettingType(state) {
  return (0, _ramda.compose)(getCollageSettingType(state), getSelectedCollageSettingTypeId)(state);
};

var getCollageSettings = exports.getCollageSettings = function getCollageSettings(state) {
  return state.exportCollage.settings.ids.map(function (id) {
    return state.exportCollage.settings.byId[id];
  });
};

var getCollageExportPath = exports.getCollageExportPath = function getCollageExportPath(state) {
  return state.exportCollage.settings.byId[_identifiers2.default.CollageExportPathSettingId].value;
};

var getCollageSetting = exports.getCollageSetting = function getCollageSetting(state, id) {
  return id ? state.exportCollage.settings.byId[id] || null : null;
};

var isCollageSettingSelected = exports.isCollageSettingSelected = function isCollageSettingSelected(state, id) {
  var collageSetting = getCollageSetting(state, id);
  return collageSetting ? collageSetting.isSelected : false;
};

var getCollageVideoExportModes = exports.getCollageVideoExportModes = function getCollageVideoExportModes(state) {
  return state.exportCollage.videoExportModes.ids.map(function (id) {
    return state.exportCollage.videoExportModes.byId[id];
  });
};

var getSelectedCollageVideoExportModeId = exports.getSelectedCollageVideoExportModeId = function getSelectedCollageVideoExportModeId(state) {
  return state.ui.selectedCollageVideoExportModeId;
};

var getCollageVideoExportMode = (0, _ramda.curry)(function (state, id) {
  return state.exportCollage.videoExportModes.byId[id] || null;
});

var getSelectedCollageVideoExportMode = exports.getSelectedCollageVideoExportMode = function getSelectedCollageVideoExportMode(state) {
  return (0, _ramda.compose)(getCollageVideoExportMode(state), getSelectedCollageVideoExportModeId)(state);
};

var getCollageVideoExportSecondsBeforeCheckTime = exports.getCollageVideoExportSecondsBeforeCheckTime = function getCollageVideoExportSecondsBeforeCheckTime(state) {
  var setting = state.exportCollage.settings.byId[_identifiers2.default.VideoSecondsBeforeCheckTimeSettingId];
  return setting ? setting.value : null;
};

var getCollageVideoExportSecondsAfterCheckTime = exports.getCollageVideoExportSecondsAfterCheckTime = function getCollageVideoExportSecondsAfterCheckTime(state) {
  var setting = state.exportCollage.settings.byId[_identifiers2.default.VideoSecondsAfterCheckTimeSettingId];
  return setting ? setting.value : null;
};

var getCollageDefaultFont = exports.getCollageDefaultFont = function getCollageDefaultFont(state) {
  var setting = state.exportCollage.settings.byId[_identifiers2.default.CollageDefaultFontSettingId];
  return setting ? setting.value : null;
};

// const getCollageTrafficLights = state => {
//   const violationTypeId = getSelectedViolationTypeId(state);
//   const tlIdPrefix = collageTrafficLightSettingIdPrefix(violationTypeId);
//   return getCollageSettings(state).filter(s => startsWith(s.id, tlIdPrefix));
// };
//
// const getNumberOfCollageTrafficLights = state => getCollageTrafficLights(state).length;
//
// export const getNextCollageTrafficLightNumber = state => getNumberOfCollageTrafficLights(state) + 1;

var getCollagePictureTypes = exports.getCollagePictureTypes = function getCollagePictureTypes(state) {
  return state.exportCollage.pictureTypes.ids.map(function (id) {
    return state.exportCollage.pictureTypes.byId[id];
  });
};

var getCollagePictureTypeId = exports.getCollagePictureTypeId = (0, _ramda.curry)(function (state, pictureTypeName) {
  return (0, _ramda.find)((0, _ramda.propEq)('name', pictureTypeName))(getCollagePictureTypes(state)).id;
});

var getCollagePictureTypeName = exports.getCollagePictureTypeName = (0, _ramda.curry)(function (state, pictureTypeId) {
  return (0, _ramda.find)((0, _ramda.propEq)('id', pictureTypeId))(getCollagePictureTypes(state)).name;
});

var getCollageSelectedRectangle = exports.getCollageSelectedRectangle = function getCollageSelectedRectangle(state) {
  return state.exportCollage.collageSelectedRectangle;
};

var getCollageRoadSigns = exports.getCollageRoadSigns = function getCollageRoadSigns(state) {
  var violationTypeId = (0, _violationTypes.getSelectedViolationTypeId)(state);
  var rsIdPrefix = (0, _identifiers.collageRoadSignSettingIdPrefix)(violationTypeId);
  return getCollageSettings(state).filter(function (s) {
    return (0, _lodash.startsWith)(s.id, rsIdPrefix);
  });
};

//# sourceMappingURL=exportCollage-compiled.js.map