'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.requestSaveCurrentCollageConfiguration = exports.requestUpdateCollageRoadSign = exports.updateCollageRoadSign = exports.requestUploadCollageRoadSignFile = exports.requestReadCollageRoadSigns = exports.requestDeleteCollageRoadSign = exports.requestCreateCollageRoadSign = exports.requestUpdateCollageTrafficLight = exports.updateCollageTrafficLight = exports.requestReadCollagePictureTypes = exports.requestDeleteCollageTrafficLight = exports.requestReadCollageTrafficLights = exports.deleteCollageSetting = exports.updateCollageSettingSelection = exports.requestCreateCollageTrafficLight = exports.updateCollageFooterTemplate = exports.requestUpdateCollageFooterTemplate = exports.requestReadCollageFooterTemplates = exports.requestUpdateCollageFont = exports.requestReadCollageFont = exports.updateCollageFont = exports.requestUpdateCollageExportPath = exports.requestReadCollageExportPath = exports.updateCollageExportPath = exports.requestUpdateCollageDefaultFontPriority = exports.requestReadCollageDefaultFontPriority = exports.updateCollageSettingValueInheritance = exports.requestUpdateCollageDefaultFont = exports.requestReadCollageDefaultFont = exports.updateCollageDefaultFont = exports.requestUpdateCollageVideoExportSettings = exports.requestReadCollageVideoExportSettings = exports.updateCollageVideoSecondsAfterCheckTime = exports.updateCollageVideoSecondsBeforeCheckTime = exports.finishCollageEditing = exports.beginCollageEditing = exports.requestUpdateCollageCurrentVideoExportMode = exports.requestReadCollageCurrentVideoExportMode = exports.requestReadCollageVideoExportModes = exports.selectCollageVideoExportMode = exports.replaceCollageVideoExportModes = exports.requestReadCollageSettingTypes = exports.selectCollageSettingType = exports.requestReadCollage = exports.deleteCollageSelectedRectangle = exports.updateCollageSelectedRectangle = exports.requestReadForegroundCollageObjectTypes = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _actionTypes = require('../actionTypes');

var _actionTypes2 = _interopRequireDefault(_actionTypes);

var _common = require('./common');

var _api = require('../../api');

var _api2 = _interopRequireDefault(_api);

var _requestTypes = require('../../common/requestTypes');

var _requestTypes2 = _interopRequireDefault(_requestTypes);

var _ramda = require('ramda');

var _lodash = require('lodash');

var _identifiers = require('../../store/identifiers');

var _identifiers2 = _interopRequireDefault(_identifiers);

var _collagePictureTypes = require('../../common/collagePictureTypes');

var _selectors = require('../selectors');

var _selectors2 = _interopRequireDefault(_selectors);

var _collageSettingTypes = require('../../common/collageSettingTypes');

var _collageSettingTypes2 = _interopRequireDefault(_collageSettingTypes);

var _foregroundCollageObjectTypes = require('../../common/foregroundCollageObjectTypes');

var _foregroundCollageObjectTypes2 = _interopRequireDefault(_foregroundCollageObjectTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var replaceForegroundCollageObjectTypes = function replaceForegroundCollageObjectTypes(_ref) {
  var foregroundObjectTypes = _ref.foregroundObjectTypes,
      foregroundObjectTypeIds = _ref.foregroundObjectTypeIds;
  return {
    type: _actionTypes2.default.ReplaceForegroundCollageObjectTypes,
    payload: { foregroundObjectTypes: foregroundObjectTypes, foregroundObjectTypeIds: foregroundObjectTypeIds }
  };
};

var appendCollageSettingTypes = function appendCollageSettingTypes(_ref2) {
  var foregroundObjectTypes = _ref2.foregroundObjectTypes,
      foregroundObjectTypeIds = _ref2.foregroundObjectTypeIds;

  var settingTypeIds = foregroundObjectTypeIds.map(function (id) {
    return _foregroundCollageObjectTypes.foregroundCollageObjectTypesToSettingTypeIdsMap[foregroundObjectTypes[id].name];
  }).filter(function (id) {
    return id;
  });
  var settingTypes = {};
  settingTypeIds.forEach(function (id) {
    settingTypes[id] = { id: id, name: _collageSettingTypes.settingTypeIdsToSettingTypesMap[id] };
  });
  return {
    type: _actionTypes2.default.AppendCollageSettingTypes,
    payload: { settingTypes: settingTypes, settingTypeIds: settingTypeIds }
  };
};

var requestReadForegroundCollageObjectTypes = exports.requestReadForegroundCollageObjectTypes = (0, _common.createRequestThunk)({
  request: _api2.default.readForegroundCollageObjectTypes,
  key: _requestTypes2.default.ReadForegroundCollageObjectTypes,
  success: [replaceForegroundCollageObjectTypes, appendCollageSettingTypes]
});

var updateCollageSelectedRectangle = exports.updateCollageSelectedRectangle = function updateCollageSelectedRectangle(selectedRectangle) {
  return {
    type: _actionTypes2.default.UpdateCollageSelectedRectangle,
    payload: { selectedRectangle: selectedRectangle }
  };
};

var deleteCollageSelectedRectangle = exports.deleteCollageSelectedRectangle = function deleteCollageSelectedRectangle() {
  return {
    type: _actionTypes2.default.DeleteCollageSelectedRectangle
  };
};

var replaceCollage = function replaceCollage(collage) {
  return function (dispatch) {
    dispatch({
      type: _actionTypes2.default.ReplaceCollage,
      payload: { collage: collage }
    });
    dispatch(deleteCollageSelectedRectangle());
  };
};

var requestReadCollage = exports.requestReadCollage = (0, _common.createRequestThunk)({
  request: _api2.default.readCollage,
  key: function key(_, violationTypeId) {
    return _requestTypes2.default.readCollage(violationTypeId);
  },
  success: [replaceCollage]
});

var prependCollageSettingTypes = function prependCollageSettingTypes(_ref3) {
  var settingTypes = _ref3.settingTypes,
      settingTypeIds = _ref3.settingTypeIds;
  return {
    type: _actionTypes2.default.PrependCollageSettingTypes,
    payload: { settingTypes: settingTypes, settingTypeIds: settingTypeIds }
  };
};

var selectCollageSettingType = exports.selectCollageSettingType = function selectCollageSettingType(id) {
  return {
    type: _actionTypes2.default.SelectCollageSettingType,
    payload: { id: id }
  };
};

var selectFirstCollageSettingType = function selectFirstCollageSettingType(_ref4) {
  var settingTypeIds = _ref4.settingTypeIds;
  return settingTypeIds.length > 0 ? selectCollageSettingType(settingTypeIds[0]) : (0, _common.noop)('No collage setting type to select');
};

var requestReadCollageSettingTypes = exports.requestReadCollageSettingTypes = (0, _common.createRequestThunk)({
  request: _api2.default.readCollageSettingTypes,
  key: _requestTypes2.default.ReadCollageSettingTypes,
  success: [prependCollageSettingTypes, selectFirstCollageSettingType]
});

var replaceCollageVideoExportModes = exports.replaceCollageVideoExportModes = function replaceCollageVideoExportModes(_ref5) {
  var videoExportModes = _ref5.videoExportModes,
      videoExportModeIds = _ref5.videoExportModeIds;
  return {
    type: _actionTypes2.default.ReplaceCollageVideoExportModes,
    payload: { videoExportModes: videoExportModes, videoExportModeIds: videoExportModeIds }
  };
};

var selectCollageVideoExportMode = exports.selectCollageVideoExportMode = function selectCollageVideoExportMode(id) {
  return function (dispatch, getState) {
    dispatch({
      type: _actionTypes2.default.SelectCollageVideoExportMode,
      payload: { id: id, name: getState().exportCollage.videoExportModes.byId[id].name }
    });
  };
};

var requestReadCollageVideoExportModes = exports.requestReadCollageVideoExportModes = (0, _common.createRequestThunk)({
  request: _api2.default.readVideoExportModes,
  key: _requestTypes2.default.ReadCollageVideoExportModes,
  success: [replaceCollageVideoExportModes]
});

var requestReadCollageCurrentVideoExportMode = exports.requestReadCollageCurrentVideoExportMode = (0, _common.createRequestThunk)({
  request: _api2.default.readCurrentVideoExportMode,
  key: _requestTypes2.default.ReadCollageCurrentVideoExportMode,
  success: [function (_ref6) {
    var id = _ref6.id;
    return selectCollageVideoExportMode(id);
  }]
});

var requestUpdateCollageCurrentVideoExportMode = exports.requestUpdateCollageCurrentVideoExportMode = (0, _common.createRequestThunk)({
  request: _api2.default.updateCurrentVideoExportMode,
  key: _requestTypes2.default.UpdateCollageCurrentVideoExportMode
});

var beginCollageEditing = exports.beginCollageEditing = function beginCollageEditing(settingId) {
  return {
    type: _actionTypes2.default.BeginCollageEditing,
    payload: { settingId: settingId }
  };
};

var finishCollageEditing = exports.finishCollageEditing = function finishCollageEditing(settingId) {
  return {
    type: _actionTypes2.default.FinishCollageEditing,
    payload: { settingId: settingId }
  };
};

var replaceCollageVideoExportSettings = function replaceCollageVideoExportSettings(_ref7) {
  var videoSecondsBeforeCheckTime = _ref7.videoSecondsBeforeCheckTime,
      videoSecondsAfterCheckTime = _ref7.videoSecondsAfterCheckTime;
  return {
    type: _actionTypes2.default.ReplaceCollageVideoExportSettings,
    payload: {
      videoSecondsBeforeCheckTime: videoSecondsBeforeCheckTime,
      videoSecondsAfterCheckTime: videoSecondsAfterCheckTime
    }
  };
};

var updateCollageVideoSecondsBeforeCheckTime = exports.updateCollageVideoSecondsBeforeCheckTime = function updateCollageVideoSecondsBeforeCheckTime(seconds) {
  return {
    type: _actionTypes2.default.UpdateCollageVideoSecondsBeforeCheckTime,
    payload: { seconds: seconds }
  };
};

var updateCollageVideoSecondsAfterCheckTime = exports.updateCollageVideoSecondsAfterCheckTime = function updateCollageVideoSecondsAfterCheckTime(seconds) {
  return {
    type: _actionTypes2.default.UpdateCollageVideoSecondsAfterCheckTime,
    payload: { seconds: seconds }
  };
};

var requestReadCollageVideoExportSettings = exports.requestReadCollageVideoExportSettings = (0, _common.createRequestThunk)({
  request: _api2.default.readVideoExportSettings,
  key: _requestTypes2.default.ReadCollageVideoExportSettings,
  success: [replaceCollageVideoExportSettings]
});

var requestUpdateCollageVideoExportSettings = exports.requestUpdateCollageVideoExportSettings = (0, _common.createRequestThunk)({
  request: _api2.default.updateVideoExportSettings,
  key: _requestTypes2.default.UpdateCollageVideoExportSettings
});

var updateCollageDefaultFont = exports.updateCollageDefaultFont = function updateCollageDefaultFont(_ref8) {
  var name = _ref8.name,
      sizeInPoints = _ref8.sizeInPoints;
  return {
    type: _actionTypes2.default.UpdateCollageDefaultFont,
    payload: { name: name, sizeInPoints: sizeInPoints }
  };
};

var requestReadCollageDefaultFont = exports.requestReadCollageDefaultFont = (0, _common.createRequestThunk)({
  request: _api2.default.readCollageDefaultFont,
  key: _requestTypes2.default.ReadCollageDefaultFont,
  success: [updateCollageDefaultFont]
});

var requestUpdateCollageDefaultFont = exports.requestUpdateCollageDefaultFont = (0, _common.createRequestThunk)({
  request: _api2.default.updateCollageDefaultFont,
  key: _requestTypes2.default.UpdateCollageDefaultFont
});

var updateCollageSettingValueInheritance = exports.updateCollageSettingValueInheritance = (0, _ramda.curry)(function (settingId, isSettingValueInherited) {
  return {
    type: _actionTypes2.default.UpdateCollageSettingValueInheritance,
    payload: { settingId: settingId, isSettingValueInherited: isSettingValueInherited }
  };
});

var requestReadCollageDefaultFontPriority = exports.requestReadCollageDefaultFontPriority = (0, _common.createRequestThunk)({
  request: _api2.default.readCollageDefaultFontPriority,
  key: _requestTypes2.default.ReadCollageDefaultFontPriority,
  success: [updateCollageSettingValueInheritance(_identifiers2.default.CollageViolationFontSettingId)]
});

var requestUpdateCollageDefaultFontPriority = exports.requestUpdateCollageDefaultFontPriority = (0, _common.createRequestThunk)({
  request: _api2.default.updateCollageDefaultFontPriority,
  key: _requestTypes2.default.UpdateCollageDefaultFontPriority
});

var updateCollageExportPath = exports.updateCollageExportPath = function updateCollageExportPath(exportPath) {
  return {
    type: _actionTypes2.default.UpdateCollageExportPath,
    payload: { exportPath: exportPath }
  };
};

var requestReadCollageExportPath = exports.requestReadCollageExportPath = (0, _common.createRequestThunk)({
  request: _api2.default.readCollageExportPath,
  key: _requestTypes2.default.ReadCollageExportPath,
  success: [updateCollageExportPath]
});

var requestUpdateCollageExportPath = exports.requestUpdateCollageExportPath = (0, _common.createRequestThunk)({
  request: _api2.default.updateCollageExportPath,
  key: _requestTypes2.default.UpdateCollageExportPath
});

var updateCollageFont = exports.updateCollageFont = function updateCollageFont(font) {
  return function (dispatch, getState) {
    var violationTypeId = getState().ui.selectedViolationTypeId;
    dispatch({
      type: _actionTypes2.default.UpdateCollageFont,
      payload: { violationTypeId: violationTypeId, font: font }
    });
  };
};

var requestReadCollageFont = exports.requestReadCollageFont = (0, _common.createRequestThunk)({
  request: _api2.default.readCollageFont,
  key: function key(_, violationTypeId) {
    return _requestTypes2.default.readCollageFont(violationTypeId);
  },
  success: [updateCollageFont]
});

var requestUpdateCollageFont = exports.requestUpdateCollageFont = (0, _common.createRequestThunk)({
  request: _api2.default.updateCollageFont,
  key: function key(_, violationTypeId) {
    return _requestTypes2.default.updateCollageFont(violationTypeId);
  }
});

var collageFooterTemplateSettingId = function collageFooterTemplateSettingId(collagePictureType, violationTypeId) {
  var settingId = _collagePictureTypes.collagePictureTypesToSettingIdsMap[collagePictureType];
  if (!settingId) {
    throw new Error('Unknown collage picture type \'' + collagePictureType + '\'');
  }
  return settingId + '/' + violationTypeId;
};

var replaceCollageFooterTemplates = function replaceCollageFooterTemplates(_ref9) {
  var footerTemplates = _ref9.footerTemplates,
      collagePictureTypes = _ref9.collagePictureTypes;
  return function (dispatch, getState) {
    var violationTypeId = _selectors2.default.getSelectedViolationTypeId(getState());
    var settingTypes = _selectors2.default.getCollageSettingTypes(getState());
    var currentViolationSettingTypeId = (0, _lodash.find)(settingTypes, function (t) {
      return t.name === _collageSettingTypes2.default.CurrentViolation;
    }).id;
    var collageFooterTemplates = collagePictureTypes.map(function (collagePictureType) {
      var id = collageFooterTemplateSettingId(collagePictureType, violationTypeId);
      return {
        id: id,
        typeId: currentViolationSettingTypeId,
        name: _collagePictureTypes.collagePictureTypesToSettingNamesMap[collagePictureType],
        value: footerTemplates[collagePictureType].footerLines,
        editorTypeId: _identifiers2.default.FooterTemplateEditorTypeId,
        isEditing: false
      };
    });
    var collageFooterTemplateIds = collagePictureTypes.map(function (collagePictureType) {
      return collageFooterTemplateSettingId(collagePictureType, violationTypeId);
    });
    dispatch({
      type: _actionTypes2.default.ReplaceCollageFooterTemplates,
      payload: { collageFooterTemplates: collageFooterTemplates, collageFooterTemplateIds: collageFooterTemplateIds }
    });
  };
};

var requestReadCollageFooterTemplates = exports.requestReadCollageFooterTemplates = (0, _common.createRequestThunk)({
  request: _api2.default.readCollageFooterTemplates,
  key: function key(_, violationTypeId) {
    return _requestTypes2.default.readCollageFooterTemplates(violationTypeId);
  },
  success: [replaceCollageFooterTemplates]
});

var requestUpdateCollageFooterTemplate = exports.requestUpdateCollageFooterTemplate = (0, _common.createRequestThunk)({
  request: _api2.default.updateCollageFooterTemplate,
  key: function key(_, violationTypeId, _ref10) {
    var collagePictureType = _ref10.collagePictureType;
    return _requestTypes2.default.updateCollageFooterTemplate(violationTypeId, collagePictureType);
  }
});

var updateCollageFooterTemplate = exports.updateCollageFooterTemplate = function updateCollageFooterTemplate(_ref11) {
  var footerLines = _ref11.footerLines,
      collagePictureType = _ref11.collagePictureType;
  return function (dispatch, getState) {
    var violationTypeId = _selectors2.default.getSelectedViolationTypeId(getState());
    var footerTemplateSettingId = collageFooterTemplateSettingId(collagePictureType, violationTypeId);
    dispatch({
      type: _actionTypes2.default.UpdateCollageFooterTemplate,
      payload: { footerLines: footerLines, footerTemplateSettingId: footerTemplateSettingId }
    });
  };
};

var addCollageTrafficLight = function addCollageTrafficLight(trafficLight) {
  return function (dispatch, getState) {
    var state = getState();
    var violationTypeId = _selectors2.default.getSelectedViolationTypeId(state);
    var trafficLightSettingId = (0, _identifiers.collageTrafficLightSettingId)(violationTypeId, trafficLight.id);
    var trafficLightSetting = {
      id: trafficLightSettingId,
      typeId: _identifiers2.default.CollageTrafficLightsSettingTypeId,
      name: _foregroundCollageObjectTypes2.default.TrafficLight,
      value: _extends({}, trafficLight),
      editorTypeId: _identifiers2.default.CollageTrafficLightEditorTypeId
    };
    dispatch({
      type: _actionTypes2.default.AddCollageTrafficLight,
      payload: { trafficLightSettingId: trafficLightSettingId, trafficLightSetting: trafficLightSetting }
    });
  };
};

var requestCreateCollageTrafficLight = exports.requestCreateCollageTrafficLight = (0, _common.createRequestThunk)({
  request: _api2.default.createCollageTrafficLight,
  key: function key(_, violationTypeId) {
    return _requestTypes2.default.createCollageTrafficLight(violationTypeId);
  },
  success: [addCollageTrafficLight]
});

var updateCollageSettingSelection = exports.updateCollageSettingSelection = function updateCollageSettingSelection(settingId, settingSelected) {
  return {
    type: _actionTypes2.default.UpdateCollageSettingSelection,
    payload: { settingId: settingId, settingSelected: settingSelected }
  };
};

var deleteCollageSetting = exports.deleteCollageSetting = function deleteCollageSetting(settingId) {
  return {
    type: _actionTypes2.default.DeleteCollageSetting,
    payload: { settingId: settingId }
  };
};

var replaceCollageTrafficLights = function replaceCollageTrafficLights(_ref12) {
  var trafficLights = _ref12.trafficLights,
      trafficLightIds = _ref12.trafficLightIds;
  return function (dispatch, getState) {
    var state = getState();
    var violationTypeId = _selectors2.default.getSelectedViolationTypeId(state);
    var collageTrafficLights = trafficLightIds.map(function (tlId) {
      var id = (0, _identifiers.collageTrafficLightSettingId)(violationTypeId, tlId);
      return {
        id: id,
        typeId: _identifiers2.default.CollageTrafficLightsSettingTypeId,
        name: _foregroundCollageObjectTypes2.default.TrafficLight,
        value: _extends({}, trafficLights[tlId]),
        editorTypeId: _identifiers2.default.CollageTrafficLightEditorTypeId
      };
    });
    var collageTrafficLightIds = trafficLightIds.map(function (tlId) {
      return (0, _identifiers.collageTrafficLightSettingId)(violationTypeId, tlId);
    });
    dispatch({
      type: _actionTypes2.default.ReplaceCollageTrafficLights,
      payload: { collageTrafficLights: collageTrafficLights, collageTrafficLightIds: collageTrafficLightIds }
    });
  };
};

var requestReadCollageTrafficLights = exports.requestReadCollageTrafficLights = (0, _common.createRequestThunk)({
  request: _api2.default.readCollageTrafficLights,
  key: function key(_, violationTypeId) {
    return _requestTypes2.default.readCollageTrafficLights(violationTypeId);
  },
  success: [replaceCollageTrafficLights]
});

var requestDeleteCollageTrafficLight = exports.requestDeleteCollageTrafficLight = (0, _common.createRequestThunk)({
  request: _api2.default.deleteCollageTrafficLight,
  key: function key(_, trafficLightId) {
    return _requestTypes2.default.deleteCollageTrafficLight(trafficLightId);
  }
});

var replaceCollagePictureTypes = function replaceCollagePictureTypes(_ref13) {
  var pictureTypes = _ref13.pictureTypes,
      pictureTypeIds = _ref13.pictureTypeIds;
  return {
    type: _actionTypes2.default.ReplaceCollagePictureTypes,
    payload: { pictureTypes: pictureTypes, pictureTypeIds: pictureTypeIds }
  };
};

var requestReadCollagePictureTypes = exports.requestReadCollagePictureTypes = (0, _common.createRequestThunk)({
  request: _api2.default.readCollagePictureTypes,
  key: _requestTypes2.default.ReadCollagePictureTypes,
  success: [replaceCollagePictureTypes]
});

var updateCollageTrafficLight = exports.updateCollageTrafficLight = function updateCollageTrafficLight(trafficLightSettingId, trafficLightSettingValue) {
  return {
    type: _actionTypes2.default.UpdateCollageTrafficLight,
    payload: { trafficLightSettingId: trafficLightSettingId, trafficLightSettingValue: trafficLightSettingValue }
  };
};

var requestUpdateCollageTrafficLight = exports.requestUpdateCollageTrafficLight = (0, _common.createRequestThunk)({
  request: _api2.default.updateCollageTrafficLight,
  key: function key(_, trafficLightId) {
    return _requestTypes2.default.updateCollageTrafficLight(trafficLightId);
  }
});

var addCollageRoadSign = function addCollageRoadSign(roadSign) {
  return function (dispatch, getState) {
    var state = getState();
    var violationTypeId = _selectors2.default.getSelectedViolationTypeId(state);
    var roadSignSettingId = (0, _identifiers.collageRoadSignSettingId)(violationTypeId, roadSign.id);
    var roadSignSetting = {
      id: roadSignSettingId,
      typeId: _identifiers2.default.CollageRoadSignsSettingTypeId,
      name: _foregroundCollageObjectTypes2.default.Sign,
      value: _extends({}, roadSign),
      editorTypeId: _identifiers2.default.CollageRoadSignEditorTypeId
    };
    dispatch({
      type: _actionTypes2.default.AddCollageRoadSign,
      payload: { roadSignSettingId: roadSignSettingId, roadSignSetting: roadSignSetting }
    });
  };
};

var requestCreateCollageRoadSign = exports.requestCreateCollageRoadSign = (0, _common.createRequestThunk)({
  request: _api2.default.createCollageRoadSign,
  key: function key(_, violationTypeId) {
    return _requestTypes2.default.createCollageRoadSign(violationTypeId);
  },
  success: [addCollageRoadSign]
});

var requestDeleteCollageRoadSign = exports.requestDeleteCollageRoadSign = (0, _common.createRequestThunk)({
  request: _api2.default.deleteCollageRoadSign,
  key: function key(_, roadSignId) {
    return _requestTypes2.default.deleteCollageRoadSign(roadSignId);
  }
});

var replaceCollageRoadSigns = function replaceCollageRoadSigns(_ref14) {
  var roadSigns = _ref14.roadSigns,
      roadSignIds = _ref14.roadSignIds;
  return function (dispatch, getState) {
    var state = getState();
    var violationTypeId = _selectors2.default.getSelectedViolationTypeId(state);
    var collageRoadSigns = roadSignIds.map(function (rsId) {
      var id = (0, _identifiers.collageRoadSignSettingId)(violationTypeId, rsId);
      return {
        id: id,
        typeId: _identifiers2.default.CollageRoadSignsSettingTypeId,
        name: _foregroundCollageObjectTypes2.default.Sign,
        value: _extends({}, roadSigns[rsId]),
        editorTypeId: _identifiers2.default.CollageRoadSignEditorTypeId,
        isSelected: _selectors2.default.isCollageSettingSelected(state, id)
      };
    });
    var collageRoadSignIds = roadSignIds.map(function (rsId) {
      return (0, _identifiers.collageRoadSignSettingId)(violationTypeId, rsId);
    });
    dispatch({
      type: _actionTypes2.default.ReplaceCollageRoadSigns,
      payload: { collageRoadSigns: collageRoadSigns, collageRoadSignIds: collageRoadSignIds }
    });
  };
};

var requestReadCollageRoadSigns = exports.requestReadCollageRoadSigns = (0, _common.createRequestThunk)({
  request: _api2.default.readCollageRoadSigns,
  key: function key(_, violationTypeId) {
    return _requestTypes2.default.readCollageRoadSigns(violationTypeId);
  },
  success: [replaceCollageRoadSigns]
});

var requestUploadCollageRoadSignFile = exports.requestUploadCollageRoadSignFile = (0, _common.createRequestThunk)({
  request: _api2.default.uploadCollageRoadSignFile,
  key: function key(_, violationTypeId) {
    return _requestTypes2.default.uploadCollageRoadSignFile(violationTypeId);
  }
});

var updateCollageRoadSign = exports.updateCollageRoadSign = function updateCollageRoadSign(roadSignSettingId, roadSignSettingValue) {
  return {
    type: _actionTypes2.default.UpdateCollageRoadSign,
    payload: { roadSignSettingId: roadSignSettingId, roadSignSettingValue: roadSignSettingValue }
  };
};

var requestUpdateCollageRoadSign = exports.requestUpdateCollageRoadSign = (0, _common.createRequestThunk)({
  request: _api2.default.updateCollageRoadSign,
  key: function key(_, roadSignId) {
    return _requestTypes2.default.updateCollageRoadSign(roadSignId);
  }
});

var requestSaveCurrentCollageConfiguration = exports.requestSaveCurrentCollageConfiguration = (0, _common.createRequestThunk)({
  request: _api2.default.saveCurrentCollageConfiguration,
  key: _requestTypes2.default.SaveCurrentCollageConfiguration
});

//# sourceMappingURL=exportCollage-compiled.js.map