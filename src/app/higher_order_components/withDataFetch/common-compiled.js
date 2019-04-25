'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.send = undefined;

var _lodash = require('lodash');

var _api = require('../../api');

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

var sendChainOf = function sendChainOf(requests) {
  return requests.reduce(function (promise, request) {
    return promise.then(function () {
      return sendOne(request);
    });
  }, Promise.resolve());
};

var paramsOf = function paramsOf(request) {
  if (!request.params) {
    return [];
  }
  return (0, _lodash.isArray)(request.params) ? request.params : [request.params];
};

var sendSingle = function sendSingle(request) {
  return request.send.apply(request, [_api.baseUrl].concat(_toConsumableArray(paramsOf(request))));
};

function sendOne(request) {
  return (0, _lodash.isArray)(request) ? sendChainOf(request) : sendSingle(request);
}

var send = exports.send = function send(request) {
  return (0, _lodash.isArray)(request) ? request.forEach(sendOne) : sendOne(request);
};

//# sourceMappingURL=common-compiled.js.map