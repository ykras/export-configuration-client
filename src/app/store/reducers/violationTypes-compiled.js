'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.selectedViolationTypeId = exports.ids = exports.byId = undefined;

var _actionTypes = require('../actionTypes');

var _actionTypes2 = _interopRequireDefault(_actionTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var byId = exports.byId = function byId() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var _ref = arguments[1];
  var type = _ref.type,
      payload = _ref.payload;

  switch (type) {
    case _actionTypes2.default.ReplaceViolationTypes:
      return payload.violationTypes || state;
    default:
      return state;
  }
};

var ids = exports.ids = function ids() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
  var _ref2 = arguments[1];
  var type = _ref2.type,
      payload = _ref2.payload;

  switch (type) {
    case _actionTypes2.default.ReplaceViolationTypes:
      return payload.violationTypeIds || state;
    default:
      return state;
  }
};

var selectedViolationTypeId = exports.selectedViolationTypeId = function selectedViolationTypeId() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
  var _ref3 = arguments[1];
  var type = _ref3.type,
      payload = _ref3.payload;

  switch (type) {
    case _actionTypes2.default.SelectViolationType:
      return payload.id || state;
    default:
      return state;
  }
};

//# sourceMappingURL=violationTypes-compiled.js.map