'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.requestReadExportStatistic = exports.replaceExportStatistic = undefined;

var _actionTypes = require('../actionTypes');

var _actionTypes2 = _interopRequireDefault(_actionTypes);

var _common = require('./common');

var _api = require('../../api');

var _api2 = _interopRequireDefault(_api);

var _requestTypes = require('../../common/requestTypes');

var _requestTypes2 = _interopRequireDefault(_requestTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var replaceExportStatistic = exports.replaceExportStatistic = function replaceExportStatistic(exportStatistic) {
  return {
    type: _actionTypes2.default.ReplaceExportStatistic,
    payload: { exportStatistic: exportStatistic }
  };
};

var requestReadExportStatistic = exports.requestReadExportStatistic = (0, _common.createRequestThunk)({
  request: _api2.default.readExportStatistic,
  key: _requestTypes2.default.ReadExportStatistic,
  success: [replaceExportStatistic]
});

//# sourceMappingURL=exportStatistic-compiled.js.map