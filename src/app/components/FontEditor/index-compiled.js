'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

require('./FontEditor.css');

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _TextInput = require('../TextInput');

var _TextInput2 = _interopRequireDefault(_TextInput);

var _ramda = require('ramda');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var handleFontName = (0, _ramda.curry)(function (handler, defaultValue, value) {
  handler({ fontName: value, fontSize: defaultValue.fontSize });
});

var handleFontSize = (0, _ramda.curry)(function (handler, defaultValue, value) {
  handler({ fontName: defaultValue.fontName, fontSize: value });
});

var FontEditor = function FontEditor(_ref) {
  var id = _ref.id,
      label = _ref.label,
      defaultValue = _ref.defaultValue,
      editValue = _ref.editValue,
      inline = _ref.inline,
      className = _ref.className;
  return _react2.default.createElement(
    'div',
    { className: (0, _classnames2.default)('FontEditor', className) },
    _react2.default.createElement(_TextInput2.default, {
      id: id + '-fontName',
      label: label.fontName,
      defaultValue: defaultValue.fontName,
      editText: handleFontName(editValue, defaultValue),
      inline: inline
    }),
    _react2.default.createElement(_TextInput2.default, {
      id: id + '-fontSize',
      label: label.fontSize,
      defaultValue: defaultValue.fontSize,
      editText: handleFontSize(editValue, defaultValue),
      inline: inline
    })
  );
};

FontEditor.propTypes = {
  id: _react.PropTypes.string,
  label: _react.PropTypes.shape({
    fontName: _react.PropTypes.string,
    fontSize: _react.PropTypes.string
  }).isRequired,
  defaultValue: _react.PropTypes.shape({
    fontName: _react.PropTypes.string,
    fontSize: _react.PropTypes.string
  }),
  editValue: _react.PropTypes.func,
  inline: _react.PropTypes.bool,
  className: _react.PropTypes.string
};

FontEditor.defaultProps = {
  id: '',
  defaultValue: { fontName: '', fontSize: '' },
  editValue: function editValue() {},
  inline: false,
  className: null
};

exports.default = FontEditor;

//# sourceMappingURL=index-compiled.js.map