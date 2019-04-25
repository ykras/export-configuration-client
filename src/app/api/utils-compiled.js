'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.fetchJson = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

require('isomorphic-fetch');

require('es6-promise/auto');

var rejectErrors = function rejectErrors(res) {
  if (res.ok) {
    return res;
  }
  throw new Error(res.statusText || res.status);
};

var getText = function getText(res) {
  return res.text();
};

var toJson = function toJson(text) {
  return text && text.length ? JSON.parse(text) : {};
};

var fetchJson = exports.fetchJson = function fetchJson(url) {
  var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

  return fetch(url, _extends({}, options, {
    headers: _extends({}, options.headers, {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    })
  })).then(rejectErrors).then(getText).then(toJson);
};

//# sourceMappingURL=utils-compiled.js.map