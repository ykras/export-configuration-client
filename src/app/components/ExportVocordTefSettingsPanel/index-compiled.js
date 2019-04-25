'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

require('./ExportVocordTefSettingsPanel.css');

var _reactRedux = require('react-redux');

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _index = require('../TextInput/index');

var _index2 = _interopRequireDefault(_index);

var _ExportPathFormatLabel = require('../ExportPathFormatLabel');

var _ExportPathFormatLabel2 = _interopRequireDefault(_ExportPathFormatLabel);

var _index3 = require('../Selector/index');

var _index4 = _interopRequireDefault(_index3);

var _index5 = require('../UserCredentialsInput/index');

var _index6 = _interopRequireDefault(_index5);

var _Checkbox = require('../Checkbox');

var _Checkbox2 = _interopRequireDefault(_Checkbox);

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

var _utils = require('../../common/utils');

var _videoExportModes = require('../../common/videoExportModes');

var _videoExportModes2 = _interopRequireDefault(_videoExportModes);

var _api = require('../../api');

var _Button = require('../Button');

var _Button2 = _interopRequireDefault(_Button);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var handleSwitching = (0, _ramda.curry)(function (handler, enabled) {
  return handler(enabled);
});
var handleSelection = (0, _ramda.curry)(function (handler, selectedItemId) {
  return handler(selectedItemId);
});
var handleNumericParamEdit = (0, _ramda.curry)(function (paramName, handler, currentSettings, newParamValue) {
  var newSettings = _extends({}, currentSettings, _defineProperty({}, paramName, (0, _lodash.isNaN)((0, _lodash.toNumber)(newParamValue)) ? 0 : (0, _lodash.toNumber)(newParamValue)));
  handler(newSettings);
});
var handleTextParamEdit = (0, _ramda.curry)(function (paramName, handler, currentSettings, newParamValue) {
  var newSettings = _extends({}, currentSettings, _defineProperty({}, paramName, (0, _lodash.toString)(newParamValue)));
  handler(newSettings);
});

var saveConfiguration = function saveConfiguration(exportTypeId, settings, requestUpdateSettings, selectedVideoExportMode, requestUpdateVideoExportMode, videoExportSettings, requestUpdateVideoExportSettings) {
  return function () {
    requestUpdateSettings(_api.baseUrl, settings);
    requestUpdateVideoExportMode(_api.baseUrl, exportTypeId, selectedVideoExportMode.id);
    requestUpdateVideoExportSettings(_api.baseUrl, exportTypeId, videoExportSettings);
  };
};

var ExportVocordTefSettingsPanel = function ExportVocordTefSettingsPanel(_ref) {
  var style = _ref.style,
      className = _ref.className,
      exportTypeId = _ref.exportTypeId,
      settings = _ref.settings,
      updateSettings = _ref.updateSettings,
      requestUpdateSettings = _ref.requestUpdateSettings,
      videoExportModes = _ref.videoExportModes,
      selectVideoExportMode = _ref.selectVideoExportMode,
      selectedVideoExportMode = _ref.selectedVideoExportMode,
      requestUpdateVideoExportMode = _ref.requestUpdateVideoExportMode,
      videoExportSettings = _ref.videoExportSettings,
      updateVideoExportSettings = _ref.updateVideoExportSettings,
      requestUpdateVideoExportSettings = _ref.requestUpdateVideoExportSettings,
      toggleSpreadOutViolations = _ref.toggleSpreadOutViolations;
  return _react2.default.createElement(
    'div',
    { style: style, className: (0, _classnames2.default)('ExportVocordTefSettingsPanel', className) },
    _react2.default.createElement(
      'div',
      { className: 'container-fluid' },
      _react2.default.createElement(
        'div',
        { className: 'row' },
        _react2.default.createElement(
          'div',
          { className: 'col-md-4 vertical-bottom' },
          _react2.default.createElement(_index2.default, {
            id: 'export-path-input',
            label: (0, _lodash.capitalize)(_localization2.default.ExportPathLabel),
            value: settings.exportBasePath,
            onTextChanged: handleTextParamEdit('exportBasePath', updateSettings, settings)
          })
        ),
        _react2.default.createElement(
          'div',
          { className: 'col-md-4 vertical-bottom form-group' },
          _react2.default.createElement(_ExportPathFormatLabel2.default, null)
        )
      ),
      _react2.default.createElement(
        'div',
        { className: 'row' },
        _react2.default.createElement(
          'div',
          { className: 'col-md-4' },
          _react2.default.createElement(_index4.default, {
            id: 'export-video-selector',
            label: (0, _lodash.capitalize)(_localization2.default.ExportVocordTefVideoLabel),
            items: (0, _localization.localizeItems)(videoExportModes, _lodash.capitalize),
            selectedItemId: selectedVideoExportMode.id,
            selectItem: handleSelection(selectVideoExportMode)
          })
        )
      ),
      selectedVideoExportMode.name !== _videoExportModes2.default.DoNotExport && _react2.default.createElement(
        'div',
        { className: 'row' },
        _react2.default.createElement(
          'div',
          { className: 'col-md-4' },
          _react2.default.createElement(_index2.default, {
            id: 'video-seconds-before-check-time',
            label: (0, _lodash.capitalize)(_localization2.default.VocordTefVideoSecondsBeforeCheckTime),
            value: (0, _lodash.toString)(videoExportSettings.videoSecondsBeforeCheckTime),
            onTextChanged: handleNumericParamEdit('videoSecondsBeforeCheckTime', updateVideoExportSettings, videoExportSettings)
          })
        )
      ),
      selectedVideoExportMode.name !== _videoExportModes2.default.DoNotExport && _react2.default.createElement(
        'div',
        { className: 'row' },
        _react2.default.createElement(
          'div',
          { className: 'col-md-4' },
          _react2.default.createElement(_index2.default, {
            id: 'video-seconds-after-check-time',
            label: (0, _lodash.capitalize)(_localization2.default.VocordTefVideoSecondsAfterCheckTime),
            value: (0, _lodash.toString)(videoExportSettings.videoSecondsAfterCheckTime),
            onTextChanged: handleNumericParamEdit('videoSecondsAfterCheckTime', updateVideoExportSettings, videoExportSettings)
          })
        )
      ),
      selectedVideoExportMode.name === _videoExportModes2.default.ExportSeparatelyFromVehicleData && _react2.default.createElement(
        'div',
        { className: 'row' },
        _react2.default.createElement(
          'div',
          { className: 'col-md-4' },
          _react2.default.createElement(_index2.default, {
            id: 'video-export-path',
            label: (0, _lodash.capitalize)(_localization2.default.VideoExportPathLabel),
            value: videoExportSettings.videoExportPath,
            onTextChanged: handleTextParamEdit('videoExportPath', updateVideoExportSettings, videoExportSettings)
          })
        )
      ),
      _react2.default.createElement(
        'div',
        { className: 'row' },
        _react2.default.createElement(
          'div',
          { className: 'col-md-2' },
          _react2.default.createElement(_index6.default, {
            login: settings.login,
            onLoginChanged: handleTextParamEdit('login', updateSettings, settings),
            password: settings.password,
            onPasswordChanged: handleTextParamEdit('password', updateSettings, settings)
          })
        )
      ),
      _react2.default.createElement(
        'div',
        { className: 'row' },
        _react2.default.createElement(
          'div',
          { className: 'col-md-2' },
          _react2.default.createElement(_Checkbox2.default, {
            id: 'spread-violations-switch',
            label: (0, _lodash.capitalize)(_localization2.default.SpreadOutViolationsLabel),
            onChanged: handleSwitching(toggleSpreadOutViolations),
            checked: settings.usePathTemplate
          })
        )
      ),
      settings.usePathTemplate && _react2.default.createElement(
        'div',
        { className: 'row' },
        _react2.default.createElement(
          'div',
          { className: 'col-md-4' },
          _react2.default.createElement(_index2.default, {
            id: 'export-folders-template',
            label: (0, _lodash.capitalize)(_localization2.default.ExportFoldersFormatLabel),
            value: settings.exportRelativePathTemplate,
            onTextChanged: handleTextParamEdit('exportRelativePathTemplate', updateSettings, settings)
          })
        )
      ),
      _react2.default.createElement(
        'div',
        { className: 'row' },
        _react2.default.createElement(
          'div',
          { className: 'col-xs-4 col-xs-offset-6 col-sm-2 col-sm-offset-10 col-md-1 col-md-offset-11' },
          _react2.default.createElement(_Button2.default, {
            id: 'apply-button',
            text: _localization2.default.Apply,
            onClick: saveConfiguration(exportTypeId, settings, requestUpdateSettings, selectedVideoExportMode, requestUpdateVideoExportMode, videoExportSettings, requestUpdateVideoExportSettings)
          })
        )
      )
    )
  );
};

ExportVocordTefSettingsPanel.propTypes = {
  style: _react.PropTypes.object,
  className: _react.PropTypes.string,
  settings: _react.PropTypes.shape({
    exportBasePath: _react.PropTypes.string.isRequired,
    exportRelativePathTemplate: _react.PropTypes.string,
    usePathTemplate: _react.PropTypes.bool,
    login: _react.PropTypes.string,
    password: _react.PropTypes.string
  }).isRequired,
  updateSettings: _react.PropTypes.func.isRequired,
  exportTypeId: _react.PropTypes.string.isRequired,
  requestReadSettings: _react.PropTypes.func.isRequired,
  readSettingsRequest: _react.PropTypes.object.isRequired,
  requestUpdateSettings: _react.PropTypes.func.isRequired,
  requestReadVideoExportModes: _react.PropTypes.func.isRequired,
  readVideoExportModesRequest: _react.PropTypes.object.isRequired,
  requestReadCurrentVideoExportMode: _react.PropTypes.func.isRequired,
  readCurrentVideoExportModeRequest: _react.PropTypes.object.isRequired,
  requestReadVideoExportSettings: _react.PropTypes.func.isRequired,
  readVideoExportSettingsRequest: _react.PropTypes.object.isRequired,
  requestUpdateVideoExportSettings: _react.PropTypes.func.isRequired,
  videoExportModes: _react.PropTypes.arrayOf(_react.PropTypes.shape({
    id: _react.PropTypes.string,
    name: _react.PropTypes.string
  })).isRequired,
  selectedVideoExportMode: _react.PropTypes.shape({
    id: _react.PropTypes.string,
    name: _react.PropTypes.string
  }).isRequired,
  selectVideoExportMode: _react.PropTypes.func.isRequired,
  requestUpdateVideoExportMode: _react.PropTypes.func.isRequired,
  videoExportSettings: _react.PropTypes.shape({
    videoSecondsBeforeCheckTime: _react.PropTypes.number,
    videoSecondsAfterCheckTime: _react.PropTypes.number
  }).isRequired,
  updateVideoExportSettings: _react.PropTypes.func.isRequired,
  toggleSpreadOutViolations: _react.PropTypes.func.isRequired
};

ExportVocordTefSettingsPanel.defaultProps = {
  style: null,
  className: null
};

var mapStateToProps = function mapStateToProps(state) {
  return {
    settings: _selectors2.default.getVocordTefSettings(state),
    exportTypeId: _selectors2.default.getSelectedExportTypeId(state),
    readSettingsRequest: _selectors2.default.getRequest(state, _requestTypes2.default.ReadVocordTefSettings),
    readVideoExportModesRequest: _selectors2.default.getRequest(state, _requestTypes2.default.ReadVocordTefVideoExportModes),
    readCurrentVideoExportModeRequest: _selectors2.default.getRequest(state, _requestTypes2.default.ReadVocordTefCurrentVideoExportMode),
    readVideoExportSettingsRequest: _selectors2.default.getRequest(state, _requestTypes2.default.ReadVocordTefVideoExportSettings),
    videoExportModes: _selectors2.default.getVocordTefVideoExportModes(state),
    selectedVideoExportMode: _selectors2.default.getSelectedVocordTefVideoExportMode(state),
    videoExportSettings: _selectors2.default.getVocordTefVideoExportSettings(state)
  };
};

var mapActionCreatorsToProps = {
  requestReadSettings: _actions2.default.requestReadVocordTefSettings,
  updateSettings: _actions2.default.updateVocordTefSettings,
  requestUpdateSettings: _actions2.default.requestUpdateVocordTefSettings,
  requestReadVideoExportModes: _actions2.default.requestReadVocordTefVideoExportModes,
  requestReadCurrentVideoExportMode: _actions2.default.requestReadVocordTefCurrentVideoExportMode,
  selectVideoExportMode: _actions2.default.selectVocordTefVideoExportMode,
  requestUpdateVideoExportMode: _actions2.default.requestUpdateVocordTefCurrentVideoExportMode,
  updateVideoExportSettings: _actions2.default.updateVocordTefVideoExportSettings,
  requestReadVideoExportSettings: _actions2.default.requestReadVocordTefVideoExportSettings,
  requestUpdateVideoExportSettings: _actions2.default.requestUpdateVocordTefVideoExportSettings,
  toggleSpreadOutViolations: _actions2.default.toggleSpreadOutViolations
};

var selectDataRequest = function selectDataRequest(p) {
  return [{ send: p.requestReadSettings }, [{ send: p.requestReadVideoExportModes, params: p.exportTypeId }, { send: p.requestReadCurrentVideoExportMode, params: p.exportTypeId }], { send: p.requestReadVideoExportSettings, params: p.exportTypeId }];
};

var selectLoadingRequest = function selectLoadingRequest(p) {
  return (0, _utils.combineRequests)(p.readSettingsRequest, p.readVideoExportModesRequest, p.readCurrentVideoExportModeRequest, p.readVideoExportSettingsRequest);
};

var Panel = (0, _ramda.compose)((0, _withDataRequest2.default)(selectDataRequest), (0, _withLoadingIndicator2.default)(selectLoadingRequest, null))(ExportVocordTefSettingsPanel);

exports.default = (0, _reactRedux.connect)(mapStateToProps, mapActionCreatorsToProps)(Panel);

//# sourceMappingURL=index-compiled.js.map