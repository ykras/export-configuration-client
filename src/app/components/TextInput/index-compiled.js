'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

require('./TextInput.css');

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _ramda = require('ramda');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var handleKeyDown = (0, _ramda.curry)(function (handler, event) {
  if (event.key !== 'Enter') {
    return;
  }
  handler(event.target.value);
  event.preventDefault();
});

var handleOnBlur = (0, _ramda.curry)(function (handler, event) {
  handler(event.target.value);
  event.preventDefault();
});

var handleOnChange = (0, _ramda.curry)(function (handler, event) {
  handler(event.target.value);
});

var TextInput = function TextInput(_ref) {
  var label = _ref.label,
      id = _ref.id,
      type = _ref.type,
      placeholder = _ref.placeholder,
      defaultValue = _ref.defaultValue,
      value = _ref.value,
      editText = _ref.editText,
      onTextChanged = _ref.onTextChanged,
      inline = _ref.inline,
      className = _ref.className;
  return _react2.default.createElement(
    'div',
    { className: (0, _classnames2.default)('TextInput', className) },
    _react2.default.createElement(
      'div',
      { className: (0, _classnames2.default)({ 'form-inline': inline }) },
      _react2.default.createElement(
        'div',
        { className: 'form-group' },
        label ? _react2.default.createElement(
          'label',
          { htmlFor: id },
          label
        ) : null,
        _react2.default.createElement('input', {
          type: type,
          className: 'form-control',
          id: id,
          placeholder: placeholder,
          defaultValue: defaultValue,
          value: value,
          onKeyDown: handleKeyDown(editText),
          onBlur: handleOnBlur(editText),
          onChange: handleOnChange(onTextChanged)
        })
      )
    )
  );
};

TextInput.propTypes = {
  id: _react.PropTypes.string.isRequired,
  label: _react.PropTypes.string,
  type: _react.PropTypes.oneOf(['text', 'password', 'email']),
  placeholder: _react.PropTypes.string,
  defaultValue: _react.PropTypes.string,
  value: _react.PropTypes.string,
  editText: _react.PropTypes.func,
  onTextChanged: _react.PropTypes.func,
  inline: _react.PropTypes.bool,
  className: _react.PropTypes.string
};

TextInput.defaultProps = {
  label: null,
  type: 'text',
  placeholder: '',
  defaultValue: '',
  value: undefined,
  editText: function editText() {},
  onTextChanged: function onTextChanged() {},
  inline: false,
  className: null
};

exports.default = TextInput;

//# sourceMappingURL=index-compiled.js.map