'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.requestUpdateVocordTefVideoExportSettings = exports.updateVocordTefVideoExportSettings = exports.requestReadVocordTefVideoExportSettings = exports.replaceVocordTefVideoExportSettings = exports.requestUpdateVocordTefCurrentVideoExportMode = exports.requestReadVocordTefCurrentVideoExportMode = exports.requestReadVocordTefVideoExportModes = exports.selectVocordTefVideoExportMode = exports.replaceVocordTefVideoExportModes = exports.requestUpdateVocordTefSettings = exports.updateVocordTefSettings = exports.requestReadVocordTefSettings = exports.toggleSpreadOutViolations = undefined;

var _actionTypes = require('../actionTypes');

var _actionTypes2 = _interopRequireDefault(_actionTypes);

var _common = require('./common');

var _api = require('../../api');

var _api2 = _interopRequireDefault(_api);

var _requestTypes = require('../../common/requestTypes');

var _requestTypes2 = _interopRequireDefault(_requestTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var replaceVocordTefSettings = function replaceVocordTefSettings(vocordTefSettings) {
  return {
    type: _actionTypes2.default.ReplaceVocordTefSettings,
    payload: { vocordTefSettings: vocordTefSettings }
  };
};

var toggleSpreadOutViolations = exports.toggleSpreadOutViolations = function toggleSpreadOutViolations(enabled) {
  return {
    type: _actionTypes2.default.ToggleSpreadOutViolations,
    payload: { enabled: enabled }
  };
};

var requestReadVocordTefSettings = exports.requestReadVocordTefSettings = (0, _common.createRequestThunk)({
  request: _api2.default.readVocordTefSettings,
  key: _requestTypes2.default.ReadVocordTefSettings,
  success: [replaceVocordTefSettings]
});

var updateVocordTefSettings = exports.updateVocordTefSettings = function updateVocordTefSettings(vocordTefSettings) {
  return {
    type: _actionTypes2.default.UpdateVocordTefSettings,
    payload: { vocordTefSettings: vocordTefSettings }
  };
};

var requestUpdateVocordTefSettings = exports.requestUpdateVocordTefSettings = (0, _common.createRequestThunk)({
  request: _api2.default.updateVocordTefSettings,
  key: _requestTypes2.default.UpdateVocordTefSettings
});

var replaceVocordTefVideoExportModes = exports.replaceVocordTefVideoExportModes = function replaceVocordTefVideoExportModes(_ref) {
  var videoExportModes = _ref.videoExportModes,
      videoExportModeIds = _ref.videoExportModeIds;
  return {
    type: _actionTypes2.default.ReplaceVocordTefVideoExportModes,
    payload: { videoExportModes: videoExportModes, videoExportModeIds: videoExportModeIds }
  };
};

var selectVocordTefVideoExportMode = exports.selectVocordTefVideoExportMode = function selectVocordTefVideoExportMode(id) {
  return function (dispatch, getState) {
    dispatch({
      type: _actionTypes2.default.SelectVocordTefVideoExportMode,
      payload: { id: id, name: getState().exportVocordTef.videoExportModes.byId[id].name }
    });
  };
};

var requestReadVocordTefVideoExportModes = exports.requestReadVocordTefVideoExportModes = (0, _common.createRequestThunk)({
  request: _api2.default.readVideoExportModes,
  key: _requestTypes2.default.ReadVocordTefVideoExportModes,
  success: [replaceVocordTefVideoExportModes]
});

var requestReadVocordTefCurrentVideoExportMode = exports.requestReadVocordTefCurrentVideoExportMode = (0, _common.createRequestThunk)({
  request: _api2.default.readCurrentVideoExportMode,
  key: _requestTypes2.default.ReadVocordTefCurrentVideoExportMode,
  success: [function (_ref2) {
    var id = _ref2.id;
    return selectVocordTefVideoExportMode(id);
  }]
});

var requestUpdateVocordTefCurrentVideoExportMode = exports.requestUpdateVocordTefCurrentVideoExportMode = (0, _common.createRequestThunk)({
  request: _api2.default.updateCurrentVideoExportMode,
  key: _requestTypes2.default.UpdateVocordTefCurrentVideoExportMode
});

var replaceVocordTefVideoExportSettings = exports.replaceVocordTefVideoExportSettings = function replaceVocordTefVideoExportSettings(videoExportSettings) {
  return {
    type: _actionTypes2.default.ReplaceVocordTefVideoExportSettings,
    payload: { videoExportSettings: videoExportSettings }
  };
};

var requestReadVocordTefVideoExportSettings = exports.requestReadVocordTefVideoExportSettings = (0, _common.createRequestThunk)({
  request: _api2.default.readVideoExportSettings,
  key: _requestTypes2.default.ReadVocordTefVideoExportSettings,
  success: [replaceVocordTefVideoExportSettings]
});

var updateVocordTefVideoExportSettings = exports.updateVocordTefVideoExportSettings = function updateVocordTefVideoExportSettings(videoExportSettings) {
  return {
    type: _actionTypes2.default.UpdateVocordTefVideoExportSettings,
    payload: { videoExportSettings: videoExportSettings }
  };
};

var requestUpdateVocordTefVideoExportSettings = exports.requestUpdateVocordTefVideoExportSettings = (0, _common.createRequestThunk)({
  request: _api2.default.updateVideoExportSettings,
  key: _requestTypes2.default.UpdateVocordTefVideoExportSettings
});

//# sourceMappingURL=exportVocordTef-compiled.js.map