'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.requestUpdateSelectedExportType = exports.requestReadSelectedExportTypeId = exports.selectExportType = exports.requestReadExportTypes = exports.replaceExportTypes = undefined;

var _actionTypes = require('../actionTypes');

var _actionTypes2 = _interopRequireDefault(_actionTypes);

var _common = require('./common');

var _api = require('../../api');

var _api2 = _interopRequireDefault(_api);

var _requestTypes = require('../../common/requestTypes');

var _requestTypes2 = _interopRequireDefault(_requestTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var replaceExportTypes = exports.replaceExportTypes = function replaceExportTypes(_ref) {
  var exportTypes = _ref.exportTypes,
      exportTypeIds = _ref.exportTypeIds;
  return {
    type: _actionTypes2.default.ReplaceExportTypes,
    payload: { exportTypes: exportTypes, exportTypeIds: exportTypeIds }
  };
};

var requestReadExportTypes = exports.requestReadExportTypes = (0, _common.createRequestThunk)({
  request: _api2.default.readExportTypes,
  key: _requestTypes2.default.ReadExportTypes,
  success: [replaceExportTypes]
});

var selectExportType = exports.selectExportType = function selectExportType(id) {
  return {
    type: _actionTypes2.default.SelectExportType,
    payload: { id: id }
  };
};

var requestReadSelectedExportTypeId = exports.requestReadSelectedExportTypeId = (0, _common.createRequestThunk)({
  request: _api2.default.readSelectedExportTypeId,
  key: _requestTypes2.default.ReadSelectedExportTypeId,
  success: [selectExportType]
});

var requestUpdateSelectedExportType = exports.requestUpdateSelectedExportType = (0, _common.createRequestThunk)({
  request: _api2.default.updateSelectedExportType,
  key: _requestTypes2.default.UpdateSelectedExportType
});

//# sourceMappingURL=exportTypes-compiled.js.map