'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.combineRequests = undefined;

var _lodash = require('lodash');

var _statusTypes = require('../common/statusTypes');

var _statusTypes2 = _interopRequireDefault(_statusTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var combineRequests = exports.combineRequests = function combineRequests() {
  for (var _len = arguments.length, requests = Array(_len), _key = 0; _key < _len; _key++) {
    requests[_key] = arguments[_key];
  }

  var failedRequestIndex = (0, _lodash.findIndex)(requests, function (request) {
    return request.status === _statusTypes2.default.Failure;
  });
  if (failedRequestIndex > -1) {
    return { status: _statusTypes2.default.Failure, error: requests[failedRequestIndex].error };
  }
  if (requests.every(function (request) {
    return request.status === _statusTypes2.default.Success;
  })) {
    return { status: _statusTypes2.default.Success, error: null };
  }
  return { status: _statusTypes2.default.Pending, error: null };
};

//# sourceMappingURL=utils-compiled.js.map