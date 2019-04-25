'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.requestUpdateTrafficLight = exports.updateTrafficLight = exports.finishTrafficLightEditing = exports.beginTrafficLightEditing = exports.requestReadTrafficLight = exports.requestReadOverviewPicture = exports.deleteOverviewPictureSelectedRectangle = exports.updateOverviewPictureSelectedRectangle = undefined;

var _actionTypes = require('../actionTypes');

var _actionTypes2 = _interopRequireDefault(_actionTypes);

var _common = require('./common');

var _api = require('../../api');

var _api2 = _interopRequireDefault(_api);

var _requestTypes = require('../../common/requestTypes');

var _requestTypes2 = _interopRequireDefault(_requestTypes);

var _trafficLightSettingNames = require('../../common/trafficLightSettingNames');

var _trafficLightSettingNames2 = _interopRequireDefault(_trafficLightSettingNames);

var _identifiers = require('../../store/identifiers');

var _identifiers2 = _interopRequireDefault(_identifiers);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var updateOverviewPictureSelectedRectangle = exports.updateOverviewPictureSelectedRectangle = function updateOverviewPictureSelectedRectangle(selectedRectangle) {
  return {
    type: _actionTypes2.default.UpdateOverviewPictureSelectedRectangle,
    payload: { selectedRectangle: selectedRectangle }
  };
};

var deleteOverviewPictureSelectedRectangle = exports.deleteOverviewPictureSelectedRectangle = function deleteOverviewPictureSelectedRectangle() {
  return {
    type: _actionTypes2.default.DeleteOverviewPictureSelectedRectangle
  };
};

var replaceOverviewPicture = function replaceOverviewPicture(picture) {
  return function (dispatch) {
    dispatch({
      type: _actionTypes2.default.ReplaceOverviewPicture,
      payload: { picture: picture }
    });
    dispatch(deleteOverviewPictureSelectedRectangle());
  };
};

var requestReadOverviewPicture = exports.requestReadOverviewPicture = (0, _common.createRequestThunk)({
  request: _api2.default.readOverviewPicture,
  key: function key(_, recognitionChannelId) {
    return _requestTypes2.default.readOverviewPicture(recognitionChannelId);
  },
  success: [replaceOverviewPicture],
  failure: [deleteOverviewPictureSelectedRectangle]
});

var replaceTrafficLight = function replaceTrafficLight(_ref) {
  var id = _ref.id,
      value = _ref.value;

  var settingId = (0, _identifiers.trafficLightSettingId)(id);
  var settingValue = { id: settingId, name: _trafficLightSettingNames2.default.TrafficLightSourcePositionAndSize,
    value: value, editorTypeId: _identifiers2.default.TrafficLightEditorTypeId, isEditing: false };
  return {
    type: _actionTypes2.default.ReplaceTrafficLight,
    payload: { settingId: settingId, settingValue: settingValue }
  };
};

var requestReadTrafficLight = exports.requestReadTrafficLight = (0, _common.createRequestThunk)({
  request: _api2.default.readTrafficLight,
  key: function key(_, recognitionChannelId) {
    return _requestTypes2.default.readTrafficLight(recognitionChannelId);
  },
  success: [replaceTrafficLight]
});

var beginTrafficLightEditing = exports.beginTrafficLightEditing = function beginTrafficLightEditing(settingId) {
  return {
    type: _actionTypes2.default.BeginTrafficLightEditing,
    payload: { settingId: settingId }
  };
};

var finishTrafficLightEditing = exports.finishTrafficLightEditing = function finishTrafficLightEditing(settingId) {
  return {
    type: _actionTypes2.default.FinishTrafficLightEditing,
    payload: { settingId: settingId }
  };
};

var updateTrafficLight = exports.updateTrafficLight = function updateTrafficLight(settingId, settingValue) {
  return {
    type: _actionTypes2.default.UpdateTrafficLight,
    payload: { settingId: settingId, settingValue: settingValue }
  };
};

var requestUpdateTrafficLight = exports.requestUpdateTrafficLight = (0, _common.createRequestThunk)({
  request: _api2.default.updateTrafficLight,
  key: function key(_, recognitionChannelId) {
    return _requestTypes2.default.updateTrafficLight(recognitionChannelId);
  }
});

//# sourceMappingURL=trafficLights-compiled.js.map