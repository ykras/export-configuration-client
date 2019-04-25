'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.selectedRectangle = exports.collage = exports.videoExportModes = exports.settings = exports.settingTypes = exports.foregroundObjectTypes = exports.pictureTypes = undefined;

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _actionTypes = require('../actionTypes');

var _actionTypes2 = _interopRequireDefault(_actionTypes);

var _factory = require('../factory');

var _factory2 = _interopRequireDefault(_factory);

var _identifiers = require('../identifiers');

var _identifiers2 = _interopRequireDefault(_identifiers);

var _collageSettingTypes = require('../../common/collageSettingTypes');

var _collageSettingTypes2 = _interopRequireDefault(_collageSettingTypes);

var _lodash = require('lodash');

var _ramda = require('ramda');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var pictureTypes = exports.pictureTypes = {
  byId: function byId() {
    var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    var _ref = arguments[1];
    var type = _ref.type,
        payload = _ref.payload;

    switch (type) {
      case _actionTypes2.default.ReplaceCollagePictureTypes:
        return payload.pictureTypes || state;
      default:
        return state;
    }
  },
  ids: function ids() {
    var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
    var _ref2 = arguments[1];
    var type = _ref2.type,
        payload = _ref2.payload;

    switch (type) {
      case _actionTypes2.default.ReplaceCollagePictureTypes:
        return payload.pictureTypeIds || state;
      default:
        return state;
    }
  }
};

var foregroundObjectTypes = exports.foregroundObjectTypes = {
  byId: function byId() {
    var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    var _ref3 = arguments[1];
    var type = _ref3.type,
        payload = _ref3.payload;

    switch (type) {
      case _actionTypes2.default.ReplaceForegroundCollageObjectTypes:
        return payload.foregroundObjectTypes || state;
      default:
        return state;
    }
  },
  ids: function ids() {
    var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
    var _ref4 = arguments[1];
    var type = _ref4.type,
        payload = _ref4.payload;

    switch (type) {
      case _actionTypes2.default.ReplaceForegroundCollageObjectTypes:
        return payload.foregroundObjectTypeIds || state;
      default:
        return state;
    }
  },
  selectedId: function selectedId() {
    var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
    var _ref5 = arguments[1];
    var type = _ref5.type,
        payload = _ref5.payload;

    switch (type) {
      case _actionTypes2.default.SelectForegroundCollageObjectType:
        return payload.id || state;
      default:
        return state;
    }
  }
};

var settingTypes = exports.settingTypes = {
  byId: function byId() {
    var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    var _ref6 = arguments[1];
    var type = _ref6.type,
        payload = _ref6.payload;

    switch (type) {
      case _actionTypes2.default.PrependCollageSettingTypes:
      case _actionTypes2.default.AppendCollageSettingTypes:
        return (0, _ramda.merge)(state, payload.settingTypes);
      default:
        return state;
    }
  },
  ids: function ids() {
    var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
    var _ref7 = arguments[1];
    var type = _ref7.type,
        payload = _ref7.payload;

    switch (type) {
      case _actionTypes2.default.PrependCollageSettingTypes:
        return (0, _lodash.concat)(payload.settingTypeIds, state);
      case _actionTypes2.default.AppendCollageSettingTypes:
        return (0, _lodash.concat)(state, payload.settingTypeIds);
      default:
        return state;
    }
  },
  selectedId: function selectedId() {
    var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
    var _ref8 = arguments[1];
    var type = _ref8.type,
        payload = _ref8.payload;

    switch (type) {
      case _actionTypes2.default.SelectCollageSettingType:
        return payload.id || state;
      default:
        return state;
    }
  }
};

var initialSettings = _factory2.default.createCollageSettings();

var settings = exports.settings = {
  ids: function ids() {
    var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialSettings.ids;
    var _ref9 = arguments[1];
    var type = _ref9.type,
        payload = _ref9.payload;

    switch (type) {
      case _actionTypes2.default.ReplaceCollageFooterTemplates:
        return (0, _ramda.union)(state, payload.collageFooterTemplateIds);
      case _actionTypes2.default.ReplaceCollageTrafficLights:
        return (0, _ramda.union)(state, payload.collageTrafficLightIds);
      case _actionTypes2.default.ReplaceCollageRoadSigns:
        return (0, _ramda.union)(state, payload.collageRoadSignIds);
      case _actionTypes2.default.AddCollageTrafficLight:
        return (0, _ramda.append)(payload.trafficLightSettingId, state);
      case _actionTypes2.default.AddCollageRoadSign:
        return (0, _ramda.append)(payload.roadSignSettingId, state);
      case _actionTypes2.default.DeleteCollageSetting:
        return (0, _ramda.without)(payload.settingId, state);
      default:
        return state;
    }
  },
  byId: function byId() {
    var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialSettings.byId;
    var _ref10 = arguments[1];
    var type = _ref10.type,
        payload = _ref10.payload;

    switch (type) {
      case _actionTypes2.default.PrependCollageSettingTypes:
        {
          var allViolationsSettingTypeId = (0, _lodash.find)(payload.settingTypes, function (t) {
            return t.name === _collageSettingTypes2.default.AllViolations;
          }).id;
          var currentViolationSettingTypeId = (0, _lodash.find)(payload.settingTypes, function (t) {
            return t.name === _collageSettingTypes2.default.CurrentViolation;
          }).id;
          var nextState = (0, _ramda.assocPath)([_identifiers2.default.VideoExportModeSettingId, 'typeId'], allViolationsSettingTypeId, state);
          nextState = (0, _ramda.assocPath)([_identifiers2.default.VideoSecondsBeforeCheckTimeSettingId, 'typeId'], allViolationsSettingTypeId, nextState);
          nextState = (0, _ramda.assocPath)([_identifiers2.default.VideoSecondsAfterCheckTimeSettingId, 'typeId'], allViolationsSettingTypeId, nextState);
          nextState = (0, _ramda.assocPath)([_identifiers2.default.CollageDefaultFontSettingId, 'typeId'], allViolationsSettingTypeId, nextState);
          nextState = (0, _ramda.assocPath)([_identifiers2.default.CollageExportPathSettingId, 'typeId'], allViolationsSettingTypeId, nextState);
          nextState = (0, _ramda.assocPath)([_identifiers2.default.CollageViolationFontSettingId, 'typeId'], currentViolationSettingTypeId, nextState);
          return nextState || state;
        }
      case _actionTypes2.default.SelectCollageVideoExportMode:
        return (0, _ramda.assocPath)([_identifiers2.default.VideoExportModeSettingId, 'value'], payload.name, state);
      case _actionTypes2.default.BeginCollageEditing:
        return (0, _ramda.assocPath)([payload.settingId, 'isEditing'], true, state);
      case _actionTypes2.default.FinishCollageEditing:
        return (0, _ramda.assocPath)([payload.settingId, 'isEditing'], false, state);
      case _actionTypes2.default.ReplaceCollageVideoExportSettings:
        {
          var _nextState = (0, _ramda.assocPath)([_identifiers2.default.VideoSecondsBeforeCheckTimeSettingId, 'value'], payload.videoSecondsBeforeCheckTime, state);
          _nextState = (0, _ramda.assocPath)([_identifiers2.default.VideoSecondsAfterCheckTimeSettingId, 'value'], payload.videoSecondsAfterCheckTime, _nextState);
          return _nextState || state;
        }
      case _actionTypes2.default.UpdateCollageVideoSecondsBeforeCheckTime:
        {
          var _nextState2 = (0, _ramda.assocPath)([_identifiers2.default.VideoSecondsBeforeCheckTimeSettingId, 'value'], payload.seconds, state);
          return _nextState2 || state;
        }
      case _actionTypes2.default.UpdateCollageVideoSecondsAfterCheckTime:
        {
          var _nextState3 = (0, _ramda.assocPath)([_identifiers2.default.VideoSecondsAfterCheckTimeSettingId, 'value'], payload.seconds, state);
          return _nextState3 || state;
        }
      case _actionTypes2.default.UpdateCollageDefaultFont:
        {
          var _nextState4 = (0, _ramda.assocPath)([_identifiers2.default.CollageDefaultFontSettingId, 'value'], payload, state);
          return _nextState4 || state;
        }
      case _actionTypes2.default.UpdateCollageSettingValueInheritance:
        {
          var _nextState5 = (0, _ramda.assocPath)([payload.settingId, 'isValueInherited'], payload.isSettingValueInherited, state);
          return _nextState5 || state;
        }
      case _actionTypes2.default.UpdateCollageExportPath:
        {
          var _nextState6 = (0, _ramda.assocPath)([_identifiers2.default.CollageExportPathSettingId, 'value'], payload.exportPath, state);
          return _nextState6 || state;
        }
      case _actionTypes2.default.UpdateCollageFont:
        {
          var _nextState7 = (0, _ramda.assocPath)([_identifiers2.default.CollageViolationFontSettingId, 'value', payload.violationTypeId], payload.font, state);
          return _nextState7 || state;
        }
      case _actionTypes2.default.ReplaceCollageFooterTemplates:
        {
          var _ret = function () {
            var nextState = _extends({}, state);
            payload.collageFooterTemplates.forEach(function (t) {
              nextState = (0, _ramda.assocPath)([t.id], t, nextState);
            });
            return {
              v: nextState || state
            };
          }();

          if ((typeof _ret === 'undefined' ? 'undefined' : _typeof(_ret)) === "object") return _ret.v;
        }
      case _actionTypes2.default.ReplaceCollageTrafficLights:
        {
          var _ret2 = function () {
            var nextState = _extends({}, state);
            payload.collageTrafficLights.forEach(function (tl) {
              var isSelected = nextState[tl.id] ? nextState[tl.id].isSelected : false;
              nextState = (0, _ramda.assocPath)([tl.id], tl, nextState);
              nextState[tl.id].isSelected = isSelected;
            });
            return {
              v: nextState || state
            };
          }();

          if ((typeof _ret2 === 'undefined' ? 'undefined' : _typeof(_ret2)) === "object") return _ret2.v;
        }
      case _actionTypes2.default.ReplaceCollageRoadSigns:
        {
          var _ret3 = function () {
            var nextState = _extends({}, state);
            payload.collageRoadSigns.forEach(function (rs) {
              nextState = (0, _ramda.assocPath)([rs.id], rs, nextState);
            });
            return {
              v: nextState || state
            };
          }();

          if ((typeof _ret3 === 'undefined' ? 'undefined' : _typeof(_ret3)) === "object") return _ret3.v;
        }
      case _actionTypes2.default.UpdateCollageFooterTemplate:
        {
          var _nextState8 = (0, _ramda.assocPath)([payload.footerTemplateSettingId, 'value'], payload.footerLines, state);
          return _nextState8 || state;
        }
      case _actionTypes2.default.AddCollageTrafficLight:
        return (0, _ramda.assocPath)([payload.trafficLightSettingId], payload.trafficLightSetting, state);
      case _actionTypes2.default.AddCollageRoadSign:
        return (0, _ramda.assocPath)([payload.roadSignSettingId], payload.roadSignSetting, state);
      case _actionTypes2.default.UpdateCollageSettingSelection:
        {
          var _nextState9 = (0, _ramda.assocPath)([payload.settingId, 'isSelected'], payload.settingSelected, state);
          return _nextState9 || state;
        }
      case _actionTypes2.default.DeleteCollageSetting:
        return (0, _ramda.dissoc)(payload.settingId, state);
      case _actionTypes2.default.UpdateCollageTrafficLight:
        return (0, _ramda.assocPath)([payload.trafficLightSettingId, 'value'], payload.trafficLightSettingValue, state);
      case _actionTypes2.default.UpdateCollageRoadSign:
        return (0, _ramda.assocPath)([payload.roadSignSettingId, 'value'], payload.roadSignSettingValue, state);
      default:
        return state;
    }
  }
};

var videoExportModes = exports.videoExportModes = {
  byId: function byId() {
    var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    var _ref11 = arguments[1];
    var type = _ref11.type,
        payload = _ref11.payload;

    switch (type) {
      case _actionTypes2.default.ReplaceCollageVideoExportModes:
        return payload.videoExportModes || state;
      default:
        return state;
    }
  },
  ids: function ids() {
    var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
    var _ref12 = arguments[1];
    var type = _ref12.type,
        payload = _ref12.payload;

    switch (type) {
      case _actionTypes2.default.ReplaceCollageVideoExportModes:
        return payload.videoExportModeIds || state;
      default:
        return state;
    }
  },
  selectedId: function selectedId() {
    var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
    var _ref13 = arguments[1];
    var type = _ref13.type,
        payload = _ref13.payload;

    switch (type) {
      case _actionTypes2.default.SelectCollageVideoExportMode:
        return payload.id || state;
      default:
        return state;
    }
  }
};

var collage = exports.collage = function collage() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
  var _ref14 = arguments[1];
  var type = _ref14.type,
      payload = _ref14.payload;

  switch (type) {
    case _actionTypes2.default.ReplaceCollage:
      return payload.collage || state;
    default:
      return state;
  }
};

var selectedRectangle = exports.selectedRectangle = function selectedRectangle() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
  var _ref15 = arguments[1];
  var type = _ref15.type,
      payload = _ref15.payload;

  switch (type) {
    case _actionTypes2.default.UpdateCollageSelectedRectangle:
      return payload.selectedRectangle || state;
    case _actionTypes2.default.DeleteCollageSelectedRectangle:
      return null;
    default:
      return state;
  }
};

//# sourceMappingURL=exportCollage-compiled.js.map