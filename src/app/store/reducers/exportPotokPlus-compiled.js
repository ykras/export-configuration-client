'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.settings = undefined;

var _actionTypes = require('../actionTypes');

var _actionTypes2 = _interopRequireDefault(_actionTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var settings = exports.settings = function settings() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var _ref = arguments[1];
  var type = _ref.type,
      payload = _ref.payload;

  switch (type) {
    case _actionTypes2.default.ReplacePotokPlusSettings:
    case _actionTypes2.default.UpdatePotokPlusSettings:
      return payload.potokPlusSettings || state;
    default:
      return state;
  }
};

//# sourceMappingURL=exportPotokPlus-compiled.js.map