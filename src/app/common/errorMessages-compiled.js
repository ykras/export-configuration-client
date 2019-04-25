'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.requestErrorMessage = undefined;

var _errorTypes = require('./errorTypes');

var _errorTypes2 = _interopRequireDefault(_errorTypes);

var _localization = require('../localization');

var _localization2 = _interopRequireDefault(_localization);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var requestErrorMessage = exports.requestErrorMessage = function requestErrorMessage(requestError) {
  return requestError.message === _errorTypes2.default.FailedToFetch ? _localization2.default.LoadingError : _localization2.default.UnknownNetworkError;
};

//# sourceMappingURL=errorMessages-compiled.js.map