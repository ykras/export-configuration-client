'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

require('./FooterTemplateEditor.css');

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _TextInput = require('../TextInput');

var _TextInput2 = _interopRequireDefault(_TextInput);

var _ramda = require('ramda');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var handleFooterLineEditing = (0, _ramda.curry)(function (handler, currentFooterLines, editedFooterLineIndex, newFooterLine) {
  var newFooterLines = currentFooterLines.map(function (fl) {
    return fl.trim();
  });
  newFooterLines[editedFooterLineIndex] = newFooterLine.trim();
  handler(newFooterLines);
});

var FooterTemplateEditor = function FooterTemplateEditor(_ref) {
  var className = _ref.className,
      id = _ref.id,
      label = _ref.label,
      footerLines = _ref.footerLines,
      editFooterLines = _ref.editFooterLines;
  return _react2.default.createElement(
    'div',
    { className: (0, _classnames2.default)('FooterTemplateEditor', className) },
    footerLines.map(function (line, j) {
      return _react2.default.createElement(_TextInput2.default, {
        id: id + '-footerLine-' + (j + 1),
        key: j,
        label: label + ' ' + (j + 1),
        defaultValue: line,
        editText: handleFooterLineEditing(editFooterLines, footerLines, j)
      });
    })
  );
};

FooterTemplateEditor.propTypes = {
  className: _react.PropTypes.string,
  id: _react.PropTypes.string,
  label: _react.PropTypes.string.isRequired,
  footerLines: _react.PropTypes.arrayOf(_react.PropTypes.string),
  editFooterLines: _react.PropTypes.func
};

FooterTemplateEditor.defaultProps = {
  className: null,
  id: '',
  footerLines: [],
  editFooterLines: function editFooterLines() {}
};

exports.default = FooterTemplateEditor;

//# sourceMappingURL=index-compiled.js.map