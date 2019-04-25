'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRedux = require('react-redux');

require('./TrafficLightSettingsTable.css');

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _localization = require('../../localization');

var _localization2 = _interopRequireDefault(_localization);

var _lodash = require('lodash');

var _actions = require('../../store/actions');

var _actions2 = _interopRequireDefault(_actions);

var _selectors = require('../../store/selectors');

var _selectors2 = _interopRequireDefault(_selectors);

var _SettingsTable = require('../SettingsTable');

var _SettingsTable2 = _interopRequireDefault(_SettingsTable);

var _TrafficLightSettingsTableRow = require('../TrafficLightSettingsTableRow');

var _TrafficLightSettingsTableRow2 = _interopRequireDefault(_TrafficLightSettingsTableRow);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var createTableRow = function createTableRow(s, p) {
  return _react2.default.createElement(_TrafficLightSettingsTableRow2.default, _extends({ key: s.id }, s, p));
};

var TrafficLightSettingsTable = function TrafficLightSettingsTable(props) {
  var style = props.style,
      className = props.className,
      settings = props.settings,
      recognitionChannelId = props.recognitionChannelId;

  return _react2.default.createElement(
    'div',
    { style: style, className: (0, _classnames2.default)('TrafficLightSettingsTable', className, 'picture-height') },
    _react2.default.createElement(_SettingsTable2.default, _extends({}, props, {
      settings: settings.filter(function (s) {
        return (0, _lodash.endsWith)(s.id, recognitionChannelId);
      }),
      nameHeaderText: (0, _lodash.capitalize)(_localization2.default.SettingNameHeaderText),
      valueHeaderText: (0, _lodash.capitalize)(_localization2.default.SettingValueHeaderText),
      createTableRowComponent: createTableRow
    }))
  );
};

TrafficLightSettingsTable.propTypes = {
  style: _react.PropTypes.object,
  className: _react.PropTypes.string,
  settings: _react.PropTypes.any.isRequired,
  recognitionChannelId: _react.PropTypes.string.isRequired
};

TrafficLightSettingsTable.defaultProps = {
  style: null,
  className: null
};

var mapStateToProps = function mapStateToProps(state) {
  return {
    settings: _selectors2.default.getTrafficLightsSettings(state),
    recognitionChannelId: _selectors2.default.getSelectedRecognitionChannelId(state)
  };
};

var mapActionCreatorsToProps = {
  handleBeginEditing: _actions2.default.beginTrafficLightEditing,
  handleFinishEditing: _actions2.default.finishTrafficLightEditing,
  updateTrafficLight: _actions2.default.updateTrafficLight,
  requestUpdateTrafficLight: _actions2.default.requestUpdateTrafficLight
};

exports.default = (0, _reactRedux.connect)(mapStateToProps, mapActionCreatorsToProps)(TrafficLightSettingsTable);

//# sourceMappingURL=index-compiled.js.map