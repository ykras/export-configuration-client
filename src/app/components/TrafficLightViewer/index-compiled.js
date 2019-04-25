'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

require('./TrafficLightViewer.css');

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var positionAndSizeOf = function positionAndSizeOf(trafficLight) {
  return _react2.default.createElement(
    'div',
    null,
    _react2.default.createElement(
      'p',
      null,
      'X = ' + trafficLight.x + '; Y = ' + trafficLight.y + '; W = ' + trafficLight.width + '; H = ' + trafficLight.height
    )
  );
};

var TrafficLightViewer = function TrafficLightViewer(_ref) {
  var className = _ref.className,
      trafficLight = _ref.trafficLight;
  return _react2.default.createElement(
    'div',
    { className: (0, _classnames2.default)('TrafficLightViewer', className) },
    positionAndSizeOf(trafficLight)
  );
};

TrafficLightViewer.propTypes = {
  className: _react.PropTypes.string,
  trafficLight: _react.PropTypes.shape({
    x: _react.PropTypes.number,
    y: _react.PropTypes.number,
    width: _react.PropTypes.number,
    height: _react.PropTypes.number
  }).isRequired
};

TrafficLightViewer.defaultProps = {
  className: null
};

exports.default = TrafficLightViewer;

//# sourceMappingURL=index-compiled.js.map