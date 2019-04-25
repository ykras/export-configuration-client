'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.videoExportModes = exports.videoExportSettings = exports.settings = undefined;

var _actionTypes = require('../actionTypes');

var _actionTypes2 = _interopRequireDefault(_actionTypes);

var _ramda = require('ramda');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var settings = exports.settings = function settings() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var _ref = arguments[1];
  var type = _ref.type,
      payload = _ref.payload;

  switch (type) {
    case _actionTypes2.default.ReplaceVocordTefSettings:
    case _actionTypes2.default.UpdateVocordTefSettings:
      return payload.vocordTefSettings || state;
    case _actionTypes2.default.ToggleSpreadOutViolations:
      return (0, _ramda.assoc)('usePathTemplate', payload.enabled, state);
    default:
      return state;
  }
};

var videoExportSettings = exports.videoExportSettings = function videoExportSettings() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var _ref2 = arguments[1];
  var type = _ref2.type,
      payload = _ref2.payload;

  switch (type) {
    case _actionTypes2.default.ReplaceVocordTefVideoExportSettings:
    case _actionTypes2.default.UpdateVocordTefVideoExportSettings:
      return payload.videoExportSettings || state;
    default:
      return state;
  }
};

var videoExportModes = exports.videoExportModes = {
  byId: function byId() {
    var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    var _ref3 = arguments[1];
    var type = _ref3.type,
        payload = _ref3.payload;

    switch (type) {
      case _actionTypes2.default.ReplaceVocordTefVideoExportModes:
        return payload.videoExportModes || state;
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
      case _actionTypes2.default.ReplaceVocordTefVideoExportModes:
        return payload.videoExportModeIds || state;
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
      case _actionTypes2.default.SelectVocordTefVideoExportMode:
        return payload.id || state;
      default:
        return state;
    }
  }
};

//# sourceMappingURL=exportVocordTef-compiled.js.map