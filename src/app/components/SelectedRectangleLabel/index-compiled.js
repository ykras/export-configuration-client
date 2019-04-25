'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

require('./SelectedRectangleLabel.css');

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var prefixFrom = function prefixFrom(text) {
  return text ? text + ': ' : '';
};

var SelectedRectangleLabel = function SelectedRectangleLabel(_ref) {
  var className = _ref.className,
      style = _ref.style,
      r = _ref.selectedRectangle,
      text = _ref.text;
  return _react2.default.createElement(
    'div',
    { className: (0, _classnames2.default)('SelectedRectangleLabel', className), style: style },
    r ? _react2.default.createElement(
      'p',
      null,
      r.w === 0 && r.h === 0 ? 'X=' + r.x + ', Y=' + r.y : prefixFrom(text) + 'X=' + r.x + ', Y=' + r.y + ', W=' + r.w + ', H=' + r.h
    ) : null
  );
};

SelectedRectangleLabel.propTypes = {
  className: _react.PropTypes.string,
  style: _react.PropTypes.object,
  selectedRectangle: _react.PropTypes.shape({
    x: _react.PropTypes.number,
    y: _react.PropTypes.number,
    w: _react.PropTypes.number,
    h: _react.PropTypes.number
  }),
  text: _react.PropTypes.string
};

SelectedRectangleLabel.defaultProps = {
  className: null,
  style: null,
  selectedRectangle: null,
  text: ''
};

exports.default = SelectedRectangleLabel;

//# sourceMappingURL=index-compiled.js.map