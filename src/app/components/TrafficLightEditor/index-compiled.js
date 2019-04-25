'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRedux = require('react-redux');

require('./TrafficLightEditor.css');

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _selectors = require('../../store/selectors');

var _selectors2 = _interopRequireDefault(_selectors);

var _lodash = require('lodash');

var _ramda = require('ramda');

var _localization = require('../../localization');

var _localization2 = _interopRequireDefault(_localization);

var _TextInput = require('../TextInput');

var _TextInput2 = _interopRequireDefault(_TextInput);

var _Button = require('../Button');

var _Button2 = _interopRequireDefault(_Button);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var handleEditingOf = (0, _ramda.curry)(function (paramName, handler, currentTrafficLight, newParamValue) {
  var newTrafficLight = _extends({}, currentTrafficLight, _defineProperty({}, paramName, (0, _lodash.isNaN)((0, _lodash.toNumber)(newParamValue)) ? 0 : (0, _lodash.toNumber)(newParamValue)));
  handler(newTrafficLight);
});

var handleRectSelect = function handleRectSelect(handler, rect) {
  return function () {
    var newTrafficLight = {
      x: rect.x,
      y: rect.y,
      width: rect.w,
      height: rect.h
    };
    handler(newTrafficLight);
  };
};

var handleApply = function handleApply(handler, trafficLight) {
  return function () {
    return handler(trafficLight);
  };
};

var TrafficLightEditor = function TrafficLightEditor(_ref) {
  var style = _ref.style,
      className = _ref.className,
      trafficLight = _ref.trafficLight,
      onEdit = _ref.onEdit,
      onApply = _ref.onApply,
      selectedRectangle = _ref.selectedRectangle;
  return _react2.default.createElement(
    'div',
    { style: style, className: (0, _classnames2.default)('TrafficLightEditor', className) },
    _react2.default.createElement(
      'div',
      { className: 'row' },
      _react2.default.createElement(
        'div',
        { className: 'col-xs-1' },
        'X:'
      ),
      _react2.default.createElement(
        'div',
        { className: 'col-xs-3' },
        _react2.default.createElement(_TextInput2.default, {
          id: 'srcX', value: (0, _lodash.toString)(trafficLight.x),
          onTextChanged: handleEditingOf('x', onEdit, trafficLight)
        })
      ),
      _react2.default.createElement(
        'div',
        { className: 'col-xs-1 col-xs-offset-1' },
        'Y:'
      ),
      _react2.default.createElement(
        'div',
        { className: 'col-xs-3' },
        _react2.default.createElement(_TextInput2.default, {
          id: 'srcY', value: (0, _lodash.toString)(trafficLight.y),
          onTextChanged: handleEditingOf('y', onEdit, trafficLight)
        })
      ),
      _react2.default.createElement(
        'div',
        { className: 'col-xs-1 col-xs-offset-1' },
        _react2.default.createElement(_Button2.default, {
          iconPath: require("../../images/select_rect.png"), style: { padding: 0 },
          disabled: selectedRectangle === null,
          onClick: handleRectSelect(onEdit, selectedRectangle)
        })
      )
    ),
    _react2.default.createElement(
      'div',
      { className: 'row' },
      _react2.default.createElement(
        'div',
        { className: 'col-xs-1' },
        'W:'
      ),
      _react2.default.createElement(
        'div',
        { className: 'col-xs-3' },
        _react2.default.createElement(_TextInput2.default, {
          id: 'srcW', value: (0, _lodash.toString)(trafficLight.width),
          onTextChanged: handleEditingOf('width', onEdit, trafficLight)
        })
      ),
      _react2.default.createElement(
        'div',
        { className: 'col-xs-1 col-xs-offset-1' },
        'H:'
      ),
      _react2.default.createElement(
        'div',
        { className: 'col-xs-3' },
        _react2.default.createElement(_TextInput2.default, {
          id: 'srcH', value: (0, _lodash.toString)(trafficLight.height),
          onTextChanged: handleEditingOf('height', onEdit, trafficLight)
        })
      )
    ),
    _react2.default.createElement(
      'div',
      { className: 'row' },
      _react2.default.createElement(
        'div',
        { className: 'col-xs-4 col-xs-offset-7' },
        _react2.default.createElement(_Button2.default, {
          text: (0, _lodash.capitalize)(_localization2.default.Apply),
          disabled: !trafficLight.stale,
          onClick: handleApply(onApply, trafficLight)
        })
      )
    )
  );
};

TrafficLightEditor.propTypes = {
  style: _react.PropTypes.object,
  className: _react.PropTypes.string,
  trafficLight: _react.PropTypes.shape({
    x: _react.PropTypes.number,
    y: _react.PropTypes.number,
    width: _react.PropTypes.number,
    height: _react.PropTypes.number,
    stale: _react.PropTypes.bool
  }).isRequired,
  onEdit: _react.PropTypes.func,
  onApply: _react.PropTypes.func,
  selectedRectangle: _react.PropTypes.shape({
    x: _react.PropTypes.number,
    y: _react.PropTypes.number,
    w: _react.PropTypes.number,
    h: _react.PropTypes.number
  })
};

TrafficLightEditor.defaultProps = {
  style: null,
  className: null,
  onEdit: function onEdit() {},
  onApply: function onApply() {},
  selectedRectangle: null
};

var mapStateToProps = function mapStateToProps(state) {
  return {
    selectedRectangle: _selectors2.default.getOverviewPictureSelectedRectangle(state)
  };
};

exports.default = (0, _reactRedux.connect)(mapStateToProps)(TrafficLightEditor);

//# sourceMappingURL=index-compiled.js.map