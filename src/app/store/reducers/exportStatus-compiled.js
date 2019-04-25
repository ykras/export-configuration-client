'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.repeatExportEnabled = exports.exportPotokPlusEnabled = exports.exportEnabled = undefined;

var _actionTypes = require('../actionTypes');

var _actionTypes2 = _interopRequireDefault(_actionTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// import {assoc} from 'ramda';

// export const exportEnabled = (state = {}, {type, payload}) => {
//   switch (type) {
//     case actionTypes.ReplaceExportEnabled:
//     case actionTypes.ToggleExportEnabled:
//       return assoc(payload.exportTypeId, payload.exportEnabled, state);
//     default:
//       return state;
//   }
// };

var exportEnabled = exports.exportEnabled = function exportEnabled() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
  var _ref = arguments[1];
  var type = _ref.type,
      payload = _ref.payload;

  switch (type) {
    case _actionTypes2.default.ReplaceExportEnabled:
    case _actionTypes2.default.ToggleExportEnabled:
      return payload.exportEnabled;
    default:
      return state;
  }
};

var exportPotokPlusEnabled = exports.exportPotokPlusEnabled = function exportPotokPlusEnabled() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
  var _ref2 = arguments[1];
  var type = _ref2.type,
      payload = _ref2.payload;

  switch (type) {
    case _actionTypes2.default.ReplaceExportPotokPlusEnabled:
    case _actionTypes2.default.ToggleExportPotokPlusEnabled:
      return payload.exportPotokPlusEnabled;
    default:
      return state;
  }
};

// export const repeatExportEnabled = (state = {}, {type, payload}) => {
//   switch (type) {
//     case actionTypes.ToggleRepeatExportEnabled:
//       return assoc(payload.exportTypeId, payload.repeatExportEnabled, state);
//     default:
//       return state;
//   }
// };

var repeatExportEnabled = exports.repeatExportEnabled = function repeatExportEnabled() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
  var _ref3 = arguments[1];
  var type = _ref3.type,
      payload = _ref3.payload;

  switch (type) {
    case _actionTypes2.default.ToggleRepeatExportEnabled:
      return payload.repeatExportEnabled;
    default:
      return state;
  }
};

//# sourceMappingURL=exportStatus-compiled.js.map