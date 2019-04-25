'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.requestReadViolationTypes = exports.selectFirstViolationType = exports.selectViolationType = exports.replaceViolationTypes = undefined;

var _actionTypes = require('../actionTypes');

var _actionTypes2 = _interopRequireDefault(_actionTypes);

var _common = require('./common');

var _api = require('../../api');

var _api2 = _interopRequireDefault(_api);

var _requestTypes = require('../../common/requestTypes');

var _requestTypes2 = _interopRequireDefault(_requestTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var replaceViolationTypes = exports.replaceViolationTypes = function replaceViolationTypes(_ref) {
  var violationTypes = _ref.violationTypes,
      violationTypeIds = _ref.violationTypeIds;
  return {
    type: _actionTypes2.default.ReplaceViolationTypes,
    payload: { violationTypes: violationTypes, violationTypeIds: violationTypeIds }
  };
};

var selectViolationType = exports.selectViolationType = function selectViolationType(id) {
  return {
    type: _actionTypes2.default.SelectViolationType,
    payload: { id: id }
  };
};

var selectFirstViolationType = exports.selectFirstViolationType = function selectFirstViolationType(_ref2) {
  var violationTypeIds = _ref2.violationTypeIds;
  return violationTypeIds.length > 0 ? selectViolationType(violationTypeIds[0]) : (0, _common.noop)('No violation type to select');
};

var requestReadViolationTypes = exports.requestReadViolationTypes = (0, _common.createRequestThunk)({
  request: _api2.default.readViolationTypes,
  key: _requestTypes2.default.ReadViolationTypes,
  success: [replaceViolationTypes, selectFirstViolationType]
});

//# sourceMappingURL=violationTypes-compiled.js.map