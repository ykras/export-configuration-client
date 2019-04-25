'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

require('./UserCredentialsInput.css');

var _TextInput = require('../TextInput');

var _TextInput2 = _interopRequireDefault(_TextInput);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _localization = require('../../localization');

var _localization2 = _interopRequireDefault(_localization);

var _lodash = require('lodash');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var UserCredentialsInput = function UserCredentialsInput(_ref) {
  var style = _ref.style,
      className = _ref.className,
      login = _ref.login,
      password = _ref.password,
      onLoginChanged = _ref.onLoginChanged,
      onPasswordChanged = _ref.onPasswordChanged;
  return _react2.default.createElement(
    'div',
    { style: style, className: (0, _classnames2.default)('UserCredentialsInput', className) },
    _react2.default.createElement(_TextInput2.default, {
      id: 'user-name',
      label: (0, _lodash.capitalize)(_localization2.default.LoginLabel) + ':',
      value: login || '',
      onTextChanged: onLoginChanged
    }),
    _react2.default.createElement(_TextInput2.default, {
      id: 'password',
      label: (0, _lodash.capitalize)(_localization2.default.PasswordLabel) + ':',
      type: 'password',
      value: password || '',
      onTextChanged: onPasswordChanged
    })
  );
};

UserCredentialsInput.propTypes = {
  style: _react.PropTypes.object,
  className: _react.PropTypes.string,
  login: _react.PropTypes.string,
  password: _react.PropTypes.string,
  onLoginChanged: _react.PropTypes.func,
  onPasswordChanged: _react.PropTypes.func
};

UserCredentialsInput.defaultProps = {
  style: null,
  className: null,
  login: '',
  password: '',
  onLoginChanged: function onLoginChanged() {},
  onPasswordChanged: function onPasswordChanged() {}
};

exports.default = UserCredentialsInput;

//# sourceMappingURL=index-compiled.js.map