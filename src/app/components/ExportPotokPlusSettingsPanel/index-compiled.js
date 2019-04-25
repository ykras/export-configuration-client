'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

require('./ExportPotokPlusSettingsPanel.css');

var _reactRedux = require('react-redux');

var _index = require('../TextInput/index');

var _index2 = _interopRequireDefault(_index);

var _ExportPathFormatLabel = require('../ExportPathFormatLabel');

var _ExportPathFormatLabel2 = _interopRequireDefault(_ExportPathFormatLabel);

var _index3 = require('../UserCredentialsInput/index');

var _index4 = _interopRequireDefault(_index3);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _localization = require('../../localization');

var _localization2 = _interopRequireDefault(_localization);

var _lodash = require('lodash');

var _ramda = require('ramda');

var _selectors = require('../../store/selectors');

var _selectors2 = _interopRequireDefault(_selectors);

var _actions = require('../../store/actions');

var _actions2 = _interopRequireDefault(_actions);

var _requestTypes = require('../../common/requestTypes');

var _requestTypes2 = _interopRequireDefault(_requestTypes);

var _withDataRequest = require('../../higher_order_components/withDataFetch/withDataRequest');

var _withDataRequest2 = _interopRequireDefault(_withDataRequest);

var _withLoadingIndicator = require('../../higher_order_components/withLoadingIndicator');

var _withLoadingIndicator2 = _interopRequireDefault(_withLoadingIndicator);

var _Button = require('../Button');

var _Button2 = _interopRequireDefault(_Button);

var _api = require('../../api');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var handleParamEdit = (0, _ramda.curry)(function (paramName, handler, currentSettings, newParamValue) {
  var newSettings = _extends({}, currentSettings, _defineProperty({}, paramName, (0, _lodash.toString)(newParamValue)));
  handler(newSettings);
});

var saveConfiguration = function saveConfiguration(settings, requestUpdateSettings) {
  return function () {
    requestUpdateSettings(_api.baseUrl, settings);
  };
};

var exportPathInputRow = function exportPathInputRow(p) {
  var exportPath = p.settings.exportPath,
      settings = p.settings,
      updateSettings = p.updateSettings;

  return _react2.default.createElement(
    'div',
    { className: 'row' },
    _react2.default.createElement(
      'div',
      { className: 'col-md-4 vertical-bottom' },
      _react2.default.createElement(_index2.default, {
        id: 'export-potok-plus-path-input',
        label: (0, _lodash.capitalize)(_localization2.default.ExportPathLabel),
        value: exportPath,
        onTextChanged: handleParamEdit('exportPath', updateSettings, settings)
      })
    ),
    _react2.default.createElement(
      'div',
      { className: 'col-md-4 vertical-bottom form-group' },
      _react2.default.createElement(_ExportPathFormatLabel2.default, null)
    )
  );
};

var userCredentialsInputRow = function userCredentialsInputRow(p) {
  var _p$settings = p.settings,
      login = _p$settings.login,
      password = _p$settings.password,
      settings = p.settings,
      updateSettings = p.updateSettings;

  return _react2.default.createElement(
    'div',
    { className: 'row' },
    _react2.default.createElement(
      'div',
      { className: 'col-md-2' },
      _react2.default.createElement(_index4.default, {
        login: login,
        onLoginChanged: handleParamEdit('login', updateSettings, settings),
        password: password,
        onPasswordChanged: handleParamEdit('password', updateSettings, settings)
      })
    )
  );
};

var saveConfigurationButtonRow = function saveConfigurationButtonRow(p) {
  var settings = p.settings,
      requestUpdateSettings = p.requestUpdateSettings;

  return _react2.default.createElement(
    'div',
    { className: 'row' },
    _react2.default.createElement(
      'div',
      { className: 'col-xs-4 col-xs-offset-6 col-sm-2 col-sm-offset-10 col-md-1 col-md-offset-11' },
      _react2.default.createElement(_Button2.default, {
        id: 'apply-button',
        text: _localization2.default.Apply,
        onClick: saveConfiguration(settings, requestUpdateSettings)
      })
    )
  );
};

var ExportPotokPlusSettingsPanel = function ExportPotokPlusSettingsPanel(props) {
  var style = props.style,
      className = props.className;

  return _react2.default.createElement(
    'div',
    { style: style, className: (0, _classnames2.default)('ExportPotokPlusSettingsPanel', className) },
    _react2.default.createElement(
      'div',
      { className: 'container-fluid' },
      exportPathInputRow(props),
      userCredentialsInputRow(props),
      saveConfigurationButtonRow(props)
    )
  );
};

ExportPotokPlusSettingsPanel.propTypes = {
  style: _react.PropTypes.object,
  className: _react.PropTypes.string,
  settings: _react.PropTypes.shape({
    exportPath: _react.PropTypes.string,
    login: _react.PropTypes.string,
    password: _react.PropTypes.string
  }).isRequired,
  updateSettings: _react.PropTypes.func.isRequired,
  requestReadSettings: _react.PropTypes.func.isRequired,
  readSettingsRequest: _react.PropTypes.object.isRequired,
  requestUpdateSettings: _react.PropTypes.func.isRequired
};

ExportPotokPlusSettingsPanel.defaultProps = {
  style: null,
  className: null
};

var mapStateToProps = function mapStateToProps(state) {
  return {
    settings: _selectors2.default.getPotokPlusSettings(state),
    readSettingsRequest: _selectors2.default.getRequest(state, _requestTypes2.default.ReadPotokPlusSettings)
  };
};

var mapActionCreatorsToProps = {
  updateSettings: _actions2.default.updatePotokPlusSettings,
  requestReadSettings: _actions2.default.requestReadPotokPlusSettings,
  requestUpdateSettings: _actions2.default.requestUpdatePotokPlusSettings
};

var selectDataRequest = function selectDataRequest(p) {
  return { send: p.requestReadSettings };
};
var selectLoadingRequest = function selectLoadingRequest(p) {
  return p.readSettingsRequest;
};

var Panel = (0, _ramda.compose)((0, _withDataRequest2.default)(selectDataRequest), (0, _withLoadingIndicator2.default)(selectLoadingRequest, null))(ExportPotokPlusSettingsPanel);

exports.default = (0, _reactRedux.connect)(mapStateToProps, mapActionCreatorsToProps)(Panel);

//# sourceMappingURL=index-compiled.js.map