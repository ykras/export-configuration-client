'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.settings = exports.overviewPictureSelectedRectangle = exports.overviewPicture = undefined;

var _actionTypes = require('../actionTypes');

var _actionTypes2 = _interopRequireDefault(_actionTypes);

var _ramda = require('ramda');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var overviewPicture = exports.overviewPicture = function overviewPicture() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
  var _ref = arguments[1];
  var type = _ref.type,
      payload = _ref.payload;

  switch (type) {
    case _actionTypes2.default.ReplaceOverviewPicture:
      return payload.picture || state;
    default:
      return state;
  }
};

var overviewPictureSelectedRectangle = exports.overviewPictureSelectedRectangle = function overviewPictureSelectedRectangle() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
  var _ref2 = arguments[1];
  var type = _ref2.type,
      payload = _ref2.payload;

  switch (type) {
    case _actionTypes2.default.UpdateOverviewPictureSelectedRectangle:
      return payload.selectedRectangle || state;
    case _actionTypes2.default.DeleteOverviewPictureSelectedRectangle:
      return null;
    default:
      return state;
  }
};

var settings = exports.settings = {
  ids: function ids() {
    var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
    var _ref3 = arguments[1];
    var type = _ref3.type,
        payload = _ref3.payload;

    switch (type) {
      case _actionTypes2.default.ReplaceTrafficLight:
        return (0, _ramda.union)(state, [payload.settingId]);
      default:
        return state;
    }
  },
  byId: function byId() {
    var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    var _ref4 = arguments[1];
    var type = _ref4.type,
        payload = _ref4.payload;

    switch (type) {
      case _actionTypes2.default.ReplaceTrafficLight:
        return (0, _ramda.assocPath)([payload.settingId], payload.settingValue, state);
      case _actionTypes2.default.BeginTrafficLightEditing:
        return (0, _ramda.assocPath)([payload.settingId, 'isEditing'], true, state);
      case _actionTypes2.default.FinishTrafficLightEditing:
        return (0, _ramda.assocPath)([payload.settingId, 'isEditing'], false, state);
      case _actionTypes2.default.UpdateTrafficLight:
        return (0, _ramda.assocPath)([payload.settingId, 'value'], payload.settingValue, state);
      default:
        return state;
    }
  }
};

//# sourceMappingURL=trafficLights-compiled.js.map