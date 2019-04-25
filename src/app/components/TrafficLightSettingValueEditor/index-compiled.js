'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

require('./TrafficLightSettingValueEditor.css');

var _identifiers = require('../../store/identifiers');

var _identifiers2 = _interopRequireDefault(_identifiers);

var _TrafficLightEditor = require('../TrafficLightEditor');

var _TrafficLightEditor2 = _interopRequireDefault(_TrafficLightEditor);

var _lodash = require('lodash');

var _api = require('../../api');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var settingValue = function settingValue(props) {
  var id = props.id,
      value = props.value;

  switch (id.split('/')[0]) {
    case _identifiers2.default.TrafficLightSettingId:
      return value || { x: 0, y: 0, width: 0, height: 0 };
    default:
      return {};
  }
};

var settingValueEditHandler = function settingValueEditHandler(props) {
  var id = props.id,
      value = props.value,
      updateTrafficLight = props.updateTrafficLight;

  switch (id.split('/')[0]) {
    case _identifiers2.default.TrafficLightSettingId:
      return function (newValue) {
        var curTrafficLight = value;
        var newTrafficLight = newValue;
        if (!(0, _lodash.isEqual)(newTrafficLight, curTrafficLight)) {
          updateTrafficLight(id, _extends({}, newTrafficLight, { stale: true }));
        }
      };
    default:
      return function () {};
  }
};

var settingValueApplyHandler = function settingValueApplyHandler(props) {
  var id = props.id,
      recognitionChannelId = props.recognitionChannelId,
      requestUpdateTrafficLight = props.requestUpdateTrafficLight,
      updateTrafficLight = props.updateTrafficLight;

  switch (id.split('/')[0]) {
    case _identifiers2.default.TrafficLightSettingId:
      return function (newTrafficLight) {
        requestUpdateTrafficLight(_api.baseUrl, recognitionChannelId, newTrafficLight).then(function () {
          return updateTrafficLight(id, _extends({}, newTrafficLight, { stale: false }));
        });
      };
    default:
      return function () {};
  }
};

var TrafficLightSettingValueEditor = function TrafficLightSettingValueEditor(props) {
  var editorTypeId = props.editorTypeId;

  switch (editorTypeId) {
    case _identifiers2.default.TrafficLightEditorTypeId:
      return _react2.default.createElement(_TrafficLightEditor2.default, _extends({}, props, {
        trafficLight: settingValue(props),
        onEdit: settingValueEditHandler(props),
        onApply: settingValueApplyHandler(props)
      }));
    default:
      return null;
  }
};

TrafficLightSettingValueEditor.propTypes = {
  style: _react.PropTypes.object,
  className: _react.PropTypes.string,
  editorTypeId: _react.PropTypes.string.isRequired,
  value: _react.PropTypes.any,
  updateTrafficLight: _react.PropTypes.func.isRequired,
  requestUpdateTrafficLight: _react.PropTypes.func.isRequired,
  recognitionChannelId: _react.PropTypes.string.isRequired
};

TrafficLightSettingValueEditor.defaultProps = {
  style: null,
  className: null
};

exports.default = TrafficLightSettingValueEditor;

//# sourceMappingURL=index-compiled.js.map