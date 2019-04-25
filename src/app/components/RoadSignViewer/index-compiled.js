'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

require('./RoadSignViewer.css');

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _lodash = require('lodash');

var _localization = require('../../localization');

var _localization2 = _interopRequireDefault(_localization);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var posistionAndSizeOf = function posistionAndSizeOf(roadSign) {
  return _react2.default.createElement(
    'div',
    null,
    _react2.default.createElement(
      'div',
      null,
      (0, _lodash.capitalize)(_localization2.default.CollageRoadSignPositionAndSize) + ':'
    ),
    _react2.default.createElement(
      'div',
      null,
      'X = ' + roadSign.x + '; Y = ' + roadSign.y + '; W = ' + roadSign.width + '; H = ' + roadSign.height
    )
  );
};

var RoadSignViewer = function RoadSignViewer(_ref) {
  var style = _ref.style,
      className = _ref.className,
      roadSign = _ref.roadSign;
  return _react2.default.createElement(
    'div',
    { style: style, className: (0, _classnames2.default)('RoadSignViewer', className) },
    posistionAndSizeOf(roadSign)
  );
};

RoadSignViewer.propTypes = {
  style: _react.PropTypes.object,
  className: _react.PropTypes.string,
  roadSign: _react.PropTypes.shape({
    x: _react.PropTypes.number,
    y: _react.PropTypes.number,
    width: _react.PropTypes.number,
    height: _react.PropTypes.number
  }).isRequired
};

RoadSignViewer.defaultProps = {
  style: null,
  className: null
};

exports.default = RoadSignViewer;

//# sourceMappingURL=index-compiled.js.map