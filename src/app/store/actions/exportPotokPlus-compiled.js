'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.requestUpdatePotokPlusSettings = exports.updatePotokPlusSettings = exports.requestReadPotokPlusSettings = undefined;

var _actionTypes = require('../actionTypes');

var _actionTypes2 = _interopRequireDefault(_actionTypes);

var _common = require('./common');

var _api = require('../../api');

var _api2 = _interopRequireDefault(_api);

var _requestTypes = require('../../common/requestTypes');

var _requestTypes2 = _interopRequireDefault(_requestTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var replacePotokPlusSettings = function replacePotokPlusSettings(potokPlusSettings) {
  return {
    type: _actionTypes2.default.ReplacePotokPlusSettings,
    payload: { potokPlusSettings: potokPlusSettings }
  };
};

var requestReadPotokPlusSettings = exports.requestReadPotokPlusSettings = (0, _common.createRequestThunk)({
  request: _api2.default.readPotokPlusSettings,
  key: _requestTypes2.default.ReadPotokPlusSettings,
  success: [replacePotokPlusSettings]
});

var updatePotokPlusSettings = exports.updatePotokPlusSettings = function updatePotokPlusSettings(potokPlusSettings) {
  return {
    type: _actionTypes2.default.UpdatePotokPlusSettings,
    payload: { potokPlusSettings: potokPlusSettings }
  };
};

var requestUpdatePotokPlusSettings = exports.requestUpdatePotokPlusSettings = (0, _common.createRequestThunk)({
  request: _api2.default.updatePotokPlusSettings,
  key: _requestTypes2.default.UpdatePotokPlusSettings
});

//# sourceMappingURL=exportPotokPlus-compiled.js.map