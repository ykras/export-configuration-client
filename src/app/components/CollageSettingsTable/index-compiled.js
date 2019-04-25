'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRedux = require('react-redux');

require('./CollageSettingsTable.css');

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _localization = require('../../localization');

var _localization2 = _interopRequireDefault(_localization);

var _lodash = require('lodash');

var _actions = require('../../store/actions');

var _actions2 = _interopRequireDefault(_actions);

var _selectors = require('../../store/selectors');

var _selectors2 = _interopRequireDefault(_selectors);

var _CollageSettingsTableRow = require('../CollageSettingsTableRow');

var _CollageSettingsTableRow2 = _interopRequireDefault(_CollageSettingsTableRow);

var _videoExportModes = require('../../common/videoExportModes');

var _videoExportModes2 = _interopRequireDefault(_videoExportModes);

var _identifiers = require('../../store/identifiers');

var _identifiers2 = _interopRequireDefault(_identifiers);

var _withDataRequest = require('../../higher_order_components/withDataFetch/withDataRequest');

var _withDataRequest2 = _interopRequireDefault(_withDataRequest);

var _withDataRefresh = require('../../higher_order_components/withDataFetch/withDataRefresh');

var _withDataRefresh2 = _interopRequireDefault(_withDataRefresh);

var _ramda = require('ramda');

var _SettingsTable = require('../SettingsTable');

var _SettingsTable2 = _interopRequireDefault(_SettingsTable);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var selectInitialRequests = function selectInitialRequests(props) {
  return [{
    send: props.requestReadCollageVideoExportSettings,
    params: props.exportTypeId
  }, { send: props.requestReadCollageDefaultFont }, { send: props.requestReadCollageDefaultFontPriority }, { send: props.requestReadCollageExportPath }, {
    send: props.requestReadCollageFont,
    params: props.violationTypeId
  }, {
    send: props.requestReadCollageFooterTemplates,
    params: props.violationTypeId
  }, {
    send: props.requestReadCollageTrafficLights,
    params: props.violationTypeId
  }, {
    send: props.requestReadCollageRoadSigns,
    params: props.violationTypeId
  }];
};

var selectRefreshRequests = function selectRefreshRequests(props) {
  return [{
    send: props.requestReadCollageFont,
    params: props.violationTypeId
  }, {
    send: props.requestReadCollageFooterTemplates,
    params: props.violationTypeId
  }, {
    send: props.requestReadCollageTrafficLights,
    params: props.violationTypeId
  }, {
    send: props.requestReadCollageRoadSigns,
    params: props.violationTypeId
  }];
};

var Table = (0, _ramda.compose)((0, _withDataRefresh2.default)((0, _ramda.prop)('violationTypeId'), selectRefreshRequests), (0, _withDataRequest2.default)(selectInitialRequests))(_SettingsTable2.default);

var settingsOfSelectedType = (0, _ramda.curry)(function (_ref, s) {
  var selectedSettingType = _ref.selectedSettingType;
  return s.typeId === selectedSettingType.id;
});

var settingsForSelectedViolationType = (0, _ramda.curry)(function (_ref2, s) {
  var violationTypeId = _ref2.violationTypeId;
  return s.id.indexOf('/') < 0 || (0, _lodash.includes)(s.id, violationTypeId);
});

var videoExportSettings = (0, _ramda.curry)(function (_ref3, s) {
  var videoExportMode = _ref3.videoExportMode;
  return videoExportMode !== _videoExportModes2.default.DoNotExport || s.id !== _identifiers2.default.VideoSecondsBeforeCheckTimeSettingId && s.id !== _identifiers2.default.VideoSecondsAfterCheckTimeSettingId;
});

var filteredSettings = function filteredSettings(p) {
  return p.settings.filter(settingsOfSelectedType(p)).filter(settingsForSelectedViolationType(p)).filter(videoExportSettings(p));
};

var createTableRow = function createTableRow(s) {
  return _react2.default.createElement(_CollageSettingsTableRow2.default, { key: s.id, settingId: s.id });
};

var CollageSettingsTable = function CollageSettingsTable(props) {
  var style = props.style,
      className = props.className;

  return _react2.default.createElement(
    'div',
    { style: style, className: (0, _classnames2.default)('CollageSettingsTable', className, 'picture-height') },
    _react2.default.createElement(Table, _extends({}, props, {
      settings: filteredSettings(props),
      nameHeaderText: (0, _lodash.capitalize)(_localization2.default.SettingNameHeaderText),
      valueHeaderText: (0, _lodash.capitalize)(_localization2.default.SettingValueHeaderText),
      createTableRowComponent: createTableRow
    }))
  );
};

CollageSettingsTable.propTypes = {
  settings: _react.PropTypes.arrayOf(_react.PropTypes.shape({
    id: _react.PropTypes.string,
    name: _react.PropTypes.oneOfType([_react.PropTypes.string, _react.PropTypes.object]),
    value: _react.PropTypes.any,
    typeId: _react.PropTypes.string,
    editorTypeId: _react.PropTypes.string,
    isEditing: _react.PropTypes.bool
  })).isRequired,
  selectedSettingType: _react.PropTypes.shape({
    id: _react.PropTypes.string,
    name: _react.PropTypes.string
  }).isRequired,
  videoExportMode: _react.PropTypes.string.isRequired,
  violationTypeId: _react.PropTypes.string.isRequired,
  requestReadCollageVideoExportSettings: _react.PropTypes.func.isRequired,
  exportTypeId: _react.PropTypes.string.isRequired,
  style: _react.PropTypes.object,
  className: _react.PropTypes.string,
  requestReadCollageExportPath: _react.PropTypes.func.isRequired,
  requestReadCollageDefaultFont: _react.PropTypes.func.isRequired,
  requestReadCollageDefaultFontPriority: _react.PropTypes.func.isRequired,
  requestReadCollageFont: _react.PropTypes.func.isRequired,
  requestReadCollageFooterTemplates: _react.PropTypes.func.isRequired,
  requestReadCollageTrafficLights: _react.PropTypes.func.isRequired,
  requestReadCollageRoadSigns: _react.PropTypes.func.isRequired
};

CollageSettingsTable.defaultProps = {
  style: null,
  className: null
};

var mapStateToProps = function mapStateToProps(state) {
  return {
    settings: _selectors2.default.getCollageSettings(state),
    selectedSettingType: _selectors2.default.getSelectedCollageSettingType(state),
    videoExportMode: _selectors2.default.getSelectedCollageVideoExportMode(state).name,
    violationTypeId: _selectors2.default.getSelectedViolationTypeId(state),
    exportTypeId: _selectors2.default.getSelectedExportTypeId(state)
  };
};

exports.default = (0, _reactRedux.connect)(mapStateToProps, _actions2.default)(CollageSettingsTable);

//# sourceMappingURL=index-compiled.js.map