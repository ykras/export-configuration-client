'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

require('./TrafficLightSettingValue.css');

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _TrafficLightSettingValueEditor = require('../TrafficLightSettingValueEditor');

var _TrafficLightSettingValueEditor2 = _interopRequireDefault(_TrafficLightSettingValueEditor);

var _TrafficLightSettingValueViewer = require('../TrafficLightSettingValueViewer');

var _TrafficLightSettingValueViewer2 = _interopRequireDefault(_TrafficLightSettingValueViewer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var handleClickOnValue = function handleClickOnValue(props) {
  return function () {
    var isEditing = props.isEditing,
        settingId = props.id,
        handleBeginEditing = props.handleBeginEditing;

    if (!isEditing) {
      handleBeginEditing(settingId);
    }
  };
};

var TrafficLightSettingValue = function TrafficLightSettingValue(props) {
  var style = props.style,
      className = props.className,
      isEditing = props.isEditing;

  return _react2.default.createElement(
    'div',
    { style: style, className: (0, _classnames2.default)('TrafficLightSettingValue', className) },
    _react2.default.createElement(
      'div',
      { onClick: handleClickOnValue(props) },
      isEditing ? _react2.default.createElement(_TrafficLightSettingValueEditor2.default, props) : _react2.default.createElement(_TrafficLightSettingValueViewer2.default, props)
    )
  );
};

TrafficLightSettingValue.propTypes = {
  style: _react.PropTypes.object,
  className: _react.PropTypes.string,
  id: _react.PropTypes.string.isRequired,
  isEditing: _react.PropTypes.bool.isRequired,
  handleBeginEditing: _react.PropTypes.func
};

TrafficLightSettingValue.defaultProps = {
  style: null,
  className: null,
  handleBeginEditing: function handleBeginEditing() {}
};

exports.default = TrafficLightSettingValue;

//# sourceMappingURL=index-compiled.js.map