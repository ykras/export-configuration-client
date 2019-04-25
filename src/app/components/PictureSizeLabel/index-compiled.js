'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

require('./PictureSizeLabel.css');

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _localization = require('../../localization');

var _localization2 = _interopRequireDefault(_localization);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var PictureSizeLabel = function PictureSizeLabel(_ref) {
  var style = _ref.style,
      className = _ref.className,
      size = _ref.size,
      sizeText = _ref.sizeText,
      sizeUnitText = _ref.sizeUnitText;
  return _react2.default.createElement(
    'div',
    { style: style, className: (0, _classnames2.default)('PictureSizeLabel', className) },
    _react2.default.createElement(
      'p',
      null,
      size.width > 0 && size.height > 0 && sizeText + ' ' + _localization2.default.PictureSizeLabel + ': ' + size.width + ' x ' + size.height + ' ' + sizeUnitText
    )
  );
};

PictureSizeLabel.propTypes = {
  style: _react.PropTypes.object,
  className: _react.PropTypes.string,
  size: _react.PropTypes.shape({
    width: _react.PropTypes.number.isRequired,
    height: _react.PropTypes.number.isRequired
  }).isRequired,
  sizeText: _react.PropTypes.string.isRequired,
  sizeUnitText: _react.PropTypes.string.isRequired
};

PictureSizeLabel.defaultProps = {
  style: null,
  className: null,
  sizeText: ''
};

exports.default = PictureSizeLabel;

//# sourceMappingURL=index-compiled.js.map