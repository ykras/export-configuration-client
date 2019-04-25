'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.requestRepeatExport = exports.toggleRepeatExportEnabled = exports.toggleExportPotokPlusEnabled = exports.requestUpdateExportPotokPlusEnabled = exports.requestReadExportPotokPlusEnabled = exports.toggleExportEnabled = exports.requestUpdateExportEnabled = exports.requestReadExportEnabled = undefined;

var _actionTypes = require('../actionTypes');

var _actionTypes2 = _interopRequireDefault(_actionTypes);

var _api = require('../../api');

var _api2 = _interopRequireDefault(_api);

var _common = require('./common');

var _requestTypes = require('../../common/requestTypes');

var _requestTypes2 = _interopRequireDefault(_requestTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var replaceExportEnabled = function replaceExportEnabled(_ref) {
  var exportTypeId = _ref.exportTypeId,
      exportEnabled = _ref.exportEnabled;
  return {
    type: _actionTypes2.default.ReplaceExportEnabled,
    payload: { exportTypeId: exportTypeId, exportEnabled: exportEnabled }
  };
};

var requestReadExportEnabled = exports.requestReadExportEnabled = (0, _common.createRequestThunk)({
  request: _api2.default.readExportEnabled,
  key: function key(_, exportTypeId) {
    return _requestTypes2.default.readExportEnabled(exportTypeId);
  },
  success: [replaceExportEnabled]
});

var requestUpdateExportEnabled = exports.requestUpdateExportEnabled = (0, _common.createRequestThunk)({
  request: _api2.default.updateExportEnabled,
  key: function key(_, exportTypeId) {
    return _requestTypes2.default.updateExportEnabled(exportTypeId);
  }
});

var toggleExportEnabled = exports.toggleExportEnabled = function toggleExportEnabled(exportTypeId, exportEnabled) {
  return {
    type: _actionTypes2.default.ToggleExportEnabled,
    payload: { exportTypeId: exportTypeId, exportEnabled: exportEnabled }
  };
};

var replaceExportPotokPlusEnabled = function replaceExportPotokPlusEnabled(exportPotokPlusEnabled) {
  return {
    type: _actionTypes2.default.ReplaceExportPotokPlusEnabled,
    payload: { exportPotokPlusEnabled: exportPotokPlusEnabled }
  };
};

var requestReadExportPotokPlusEnabled = exports.requestReadExportPotokPlusEnabled = (0, _common.createRequestThunk)({
  request: _api2.default.readExportPotokPlusEnabled,
  key: _requestTypes2.default.ReadExportPotokPlusEnabled,
  success: [replaceExportPotokPlusEnabled]
});

var requestUpdateExportPotokPlusEnabled = exports.requestUpdateExportPotokPlusEnabled = (0, _common.createRequestThunk)({
  request: _api2.default.updateExportPotokPlusEnabled,
  key: _requestTypes2.default.UpdateExportPotokPlusEnabled
});

var toggleExportPotokPlusEnabled = exports.toggleExportPotokPlusEnabled = function toggleExportPotokPlusEnabled(exportPotokPlusEnabled) {
  return {
    type: _actionTypes2.default.ToggleExportPotokPlusEnabled,
    payload: { exportPotokPlusEnabled: exportPotokPlusEnabled }
  };
};

var toggleRepeatExportEnabled = exports.toggleRepeatExportEnabled = function toggleRepeatExportEnabled(exportTypeId, repeatExportEnabled) {
  return {
    type: _actionTypes2.default.ToggleRepeatExportEnabled,
    payload: { exportTypeId: exportTypeId, repeatExportEnabled: repeatExportEnabled }
  };
};

var requestRepeatExport = exports.requestRepeatExport = (0, _common.createRequestThunk)({
  request: _api2.default.repeatExport,
  key: function key(_, exportTypeId) {
    return _requestTypes2.default.repeatExport(exportTypeId);
  }
});

//# sourceMappingURL=exportStatus-compiled.js.map