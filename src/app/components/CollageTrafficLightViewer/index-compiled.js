'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

require('./CollageTrafficLightViewer.css');

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _lodash = require('lodash');

var _localization = require('../../localization');

var _localization2 = _interopRequireDefault(_localization);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var sourceOf = function sourceOf(trafficLight) {
  return _react2.default.createElement(
    'div',
    null,
    _react2.default.createElement(
      'p',
      { style: { marginBottom: 0 } },
      (0, _lodash.capitalize)(_localization2.default.CollagePicture) + ': ' + (0, _localization.localizeText)(trafficLight.pictureType, _lodash.capitalize)
    )
  );
};

var targetPositionAndSizeOf = function targetPositionAndSizeOf(trafficLight) {
  return _react2.default.createElement(
    'div',
    null,
    _react2.default.createElement(
      'p',
      { style: { marginBottom: 0 } },
      (0, _lodash.capitalize)(_localization2.default.CollageTrafficLightTargetPositionAndSize) + ':'
    ),
    _react2.default.createElement(
      'p',
      null,
      'X = ' + trafficLight.x + '; Y = ' + trafficLight.y + '; W = ' + trafficLight.width + '; H = ' + trafficLight.height
    )
  );
};

var CollageTrafficLightViewer = function CollageTrafficLightViewer(_ref) {
  var className = _ref.className,
      trafficLight = _ref.trafficLight;
  return _react2.default.createElement(
    'div',
    { className: (0, _classnames2.default)('CollageTrafficLightViewer', className) },
    sourceOf(trafficLight),
    targetPositionAndSizeOf(trafficLight)
  );
};

CollageTrafficLightViewer.propTypes = {
  className: _react.PropTypes.string,
  trafficLight: _react.PropTypes.shape({
    id: _react.PropTypes.string,
    pictureType: _react.PropTypes.string,
    x: _react.PropTypes.number,
    y: _react.PropTypes.number,
    width: _react.PropTypes.number,
    height: _react.PropTypes.number
  }).isRequired
};

CollageTrafficLightViewer.defaultProps = {
  className: null
};

exports.default = CollageTrafficLightViewer;

//# sourceMappingURL=index-compiled.js.map