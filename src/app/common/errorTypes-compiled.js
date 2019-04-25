'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _keymirror = require('keymirror');

var _keymirror2 = _interopRequireDefault(_keymirror);

var _lodash = require('lodash');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var networkErrors = {
  FailedToFetch: 'Failed to fetch'
};

var exportErrors = (0, _keymirror2.default)({
  AuthenticationError: null,
  DataSendingError: null,
  IllegalCharactersInPath: null,
  WrongSubdirsFormat: null,
  UnexpectedImplementationError: null
});

exports.default = (0, _lodash.merge)(networkErrors, exportErrors);

//# sourceMappingURL=errorTypes-compiled.js.map