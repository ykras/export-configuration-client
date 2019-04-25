'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRedux = require('react-redux');

require('./ExportStatusPanel.css');

var _index = require('../Checkbox/index');

var _index2 = _interopRequireDefault(_index);

var _index3 = require('../Selector/index');

var _index4 = _interopRequireDefault(_index3);

var _ToggleButton = require('../ToggleButton');

var _ToggleButton2 = _interopRequireDefault(_ToggleButton);

var _ExportStatistic = require('../ExportStatistic');

var _ExportStatistic2 = _interopRequireDefault(_ExportStatistic);

var _localization = require('../../localization');

var _localization2 = _interopRequireDefault(_localization);

var _actions = require('../../store/actions');

var _actions2 = _interopRequireDefault(_actions);

var _selectors = require('../../store/selectors');

var _selectors2 = _interopRequireDefault(_selectors);

var _ramda = require('ramda');

var _lodash = require('lodash');

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _Button = require('../Button');

var _Button2 = _interopRequireDefault(_Button);

var _withDataRequest = require('../../higher_order_components/withDataFetch/withDataRequest');

var _withDataRequest2 = _interopRequireDefault(_withDataRequest);

var _withDataRefresh = require('../../higher_order_components/withDataFetch/withDataRefresh');

var _withDataRefresh2 = _interopRequireDefault(_withDataRefresh);

var _requestTypes = require('../../common/requestTypes');

var _requestTypes2 = _interopRequireDefault(_requestTypes);

var _api = require('../../api');

var _exportTypes = require('../../common/exportTypes');

var _exportTypes2 = _interopRequireDefault(_exportTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var handleExportToggle = (0, _ramda.curry)(function (handler, selectedExportType, toggleExportPotokPlusEnabled, enabled) {
  handler(selectedExportType.id, enabled);
  if (selectedExportType.name === _exportTypes2.default.Collage && !enabled) {
    toggleExportPotokPlusEnabled(false);
  }
});
// import {combineRequests} from '../../common/utils';

// import withLoadingIndicator from '../../higher_order_components/withLoadingIndicator';

var handleExportPotokPlusToggle = (0, _ramda.curry)(function (handler, selectedExportType, toggleExportEnabled, enabled) {
  handler(enabled);
  if (selectedExportType.name === _exportTypes2.default.Collage) {
    toggleExportEnabled(selectedExportType.id, enabled);
  }
});
var handleExportTypeSelection = (0, _ramda.curry)(function (handler, selectedExportTypeId) {
  return handler(selectedExportTypeId);
});
var handleRepeatExportToggle = (0, _ramda.curry)(function (handler, selectedExportTypeId, enabled) {
  return handler(selectedExportTypeId, enabled);
});

var exportEnabledToggle = function exportEnabledToggle(p) {
  var selectedExportType = p.selectedExportType,
      exportEnabled = p.exportEnabled,
      exportPotokPlusEnabled = p.exportPotokPlusEnabled,
      toggleExportEnabled = p.toggleExportEnabled,
      toggleExportPotokPlusEnabled = p.toggleExportPotokPlusEnabled;

  return _react2.default.createElement(_index2.default, {
    id: 'export-switch',
    label: _localization2.default.Enable,
    checked: selectedExportType && selectedExportType.name === _exportTypes2.default.Collage && exportPotokPlusEnabled || exportEnabled,
    disabled: (!selectedExportType || selectedExportType.name === _exportTypes2.default.Collage) && exportPotokPlusEnabled,
    onChanged: handleExportToggle(toggleExportEnabled, selectedExportType, toggleExportPotokPlusEnabled)
  });
};

var exportEnabledToggleRow = function exportEnabledToggleRow(p) {
  return _react2.default.createElement(
    'div',
    { className: 'row' },
    _react2.default.createElement(
      'div',
      { className: 'col-md-1' },
      exportEnabledToggle(p)
    )
  );
};

var exportTypeSelector = function exportTypeSelector(p) {
  var exportTypes = p.exportTypes,
      selectedExportTypeId = p.selectedExportTypeId,
      selectExportType = p.selectExportType;

  return _react2.default.createElement(_index4.default, {
    id: 'export-format-selector',
    label: _localization2.default.ExportTypeLabel,
    items: (0, _localization.localizeItems)(exportTypes),
    selectedItemId: selectedExportTypeId,
    placeholder: (0, _lodash.capitalize)(_localization2.default.Undefined),
    selectItem: handleExportTypeSelection(selectExportType)
  });
};

var repeatExportEnabledToggle = function repeatExportEnabledToggle(p) {
  var selectedExportTypeId = p.selectedExportTypeId,
      toggleRepeatExportEnabled = p.toggleRepeatExportEnabled;

  return _react2.default.createElement(_ToggleButton2.default, {
    id: 'repeat-export-switch',
    text: _localization2.default.RepeatExport,
    glyphicon: 'ok',
    onClick: handleRepeatExportToggle(toggleRepeatExportEnabled, selectedExportTypeId)
  });
};

var exportTypeSelectorRow = function exportTypeSelectorRow(p) {
  return _react2.default.createElement(
    'div',
    { className: 'row' },
    _react2.default.createElement(
      'div',
      { className: 'col-md-3 vertical-bottom' },
      exportTypeSelector(p)
    ),
    _react2.default.createElement(
      'div',
      { className: 'col-md-3 vertical-bottom form-group' },
      repeatExportEnabledToggle(p)
    )
  );
};

var exportPotokPlusToggle = function exportPotokPlusToggle(p) {
  var exportPotokPlusEnabled = p.exportPotokPlusEnabled,
      toggleExportPotokPlusEnabled = p.toggleExportPotokPlusEnabled,
      selectedExportType = p.selectedExportType,
      toggleExportEnabled = p.toggleExportEnabled;

  return _react2.default.createElement(_index2.default, {
    id: 'export-potok-plus',
    label: _localization2.default.ExportPotokPlus,
    onChanged: handleExportPotokPlusToggle(toggleExportPotokPlusEnabled, selectedExportType, toggleExportEnabled),
    checked: exportPotokPlusEnabled
  });
};

var exportPotokPlusToggleRow = function exportPotokPlusToggleRow(p) {
  return _react2.default.createElement(
    'div',
    { className: 'row' },
    _react2.default.createElement(
      'div',
      { className: 'col-md-3' },
      exportPotokPlusToggle(p)
    )
  );
};

var exportStatisticRow = function exportStatisticRow() {
  return _react2.default.createElement(
    'div',
    { className: 'row' },
    _react2.default.createElement(
      'div',
      { className: 'col-md-12' },
      _react2.default.createElement(_ExportStatistic2.default, null)
    )
  );
};

var saveConfiguration = function saveConfiguration(p) {
  return function () {
    p.requestUpdateExportPotokPlusEnabled(_api.baseUrl, p.exportPotokPlusEnabled).then(function () {
      return p.requestUpdateExportEnabled(_api.baseUrl, p.selectedExportTypeId, p.exportEnabled);
    });
    if (p.repeatExportEnabled) {
      p.requestRepeatExport(_api.baseUrl, p.selectedExportTypeId);
    }
  };
};

var saveConfigurationButtonRow = function saveConfigurationButtonRow(p) {
  return _react2.default.createElement(
    'div',
    { className: 'row' },
    _react2.default.createElement(
      'div',
      { className: 'col-xs-4 col-xs-offset-6 col-sm-2 col-sm-offset-10 col-md-1 col-md-offset-11' },
      _react2.default.createElement(_Button2.default, {
        id: 'apply-button',
        text: _localization2.default.Apply,
        onClick: saveConfiguration(p)
      })
    )
  );
};

var ExportStatusPanel = function ExportStatusPanel(props) {
  var style = props.style,
      className = props.className;

  return _react2.default.createElement(
    'div',
    { style: style, className: (0, _classnames2.default)('ExportStatusPanel', className) },
    _react2.default.createElement(
      'div',
      { className: 'container-fluid' },
      exportEnabledToggleRow(props),
      exportTypeSelectorRow(props),
      exportPotokPlusToggleRow(props),
      exportStatisticRow(),
      saveConfigurationButtonRow(props)
    )
  );
};

ExportStatusPanel.propTypes = {
  style: _react.PropTypes.object,
  className: _react.PropTypes.string,
  exportTypes: _react.PropTypes.arrayOf(_react.PropTypes.shape({
    id: _react.PropTypes.string.isRequired,
    name: _react.PropTypes.string.isRequired
  })).isRequired,
  selectedExportTypeId: _react.PropTypes.string,
  selectedExportType: _react.PropTypes.shape({
    id: _react.PropTypes.string.isRequired,
    name: _react.PropTypes.string.isRequired
  }),
  exportEnabled: _react.PropTypes.bool.isRequired,
  repeatExportEnabled: _react.PropTypes.bool.isRequired,
  exportPotokPlusEnabled: _react.PropTypes.bool.isRequired,
  requestReadSelectedExportTypeId: _react.PropTypes.func.isRequired,
  readSelectedExportTypeIdRequest: _react.PropTypes.object.isRequired,
  selectExportType: _react.PropTypes.func.isRequired,
  requestUpdateSelectedExportType: _react.PropTypes.func.isRequired,
  requestReadExportEnabled: _react.PropTypes.func.isRequired,
  readExportEnabledRequests: _react.PropTypes.arrayOf(_react.PropTypes.object).isRequired,
  requestReadExportPotokPlusEnabled: _react.PropTypes.func.isRequired,
  readExportPotokPlusEnabledRequest: _react.PropTypes.object.isRequired,
  toggleExportEnabled: _react.PropTypes.func.isRequired,
  toggleExportPotokPlusEnabled: _react.PropTypes.func.isRequired,
  toggleRepeatExportEnabled: _react.PropTypes.func.isRequired,
  requestUpdateExportEnabled: _react.PropTypes.func.isRequired,
  requestUpdateExportPotokPlusEnabled: _react.PropTypes.func.isRequired,
  requestRepeatExport: _react.PropTypes.func.isRequired
};

ExportStatusPanel.defaultProps = {
  style: null,
  className: null
};

var mapStateToProps = function mapStateToProps(state) {
  var exportTypes = _selectors2.default.getExportTypes(state);
  var selectedExportTypeId = _selectors2.default.getSelectedExportTypeId(state);
  return {
    exportTypes: exportTypes,
    selectedExportTypeId: selectedExportTypeId,
    selectedExportType: _selectors2.default.getSelectedExportType(state),
    exportEnabled: _selectors2.default.getExportEnabled(selectedExportTypeId, state),
    repeatExportEnabled: _selectors2.default.getRepeatExportEnabled(selectedExportTypeId, state),
    exportPotokPlusEnabled: _selectors2.default.getExportPotokPlusEnabled(state),
    readExportEnabledRequests: exportTypes.map(function (e) {
      return _selectors2.default.getRequest(state, _requestTypes2.default.readExportEnabled(e.id));
    }),
    readSelectedExportTypeIdRequest: _selectors2.default.getRequest(state, _requestTypes2.default.ReadSelectedExportTypeId),
    readExportPotokPlusEnabledRequest: _selectors2.default.getRequest(state, _requestTypes2.default.ReadExportPotokPlusEnabled)
  };
};

var selectDataRequest = function selectDataRequest(p) {
  return {
    send: function send(baseUrl) {
      p.requestReadSelectedExportTypeId(baseUrl).then(function (id) {
        if (id) {
          p.requestReadExportEnabled(baseUrl, id);
        }
      });
      // p.exportTypes.forEach(e => p.requestReadExportEnabled(baseUrl, e.id));
      p.requestReadExportPotokPlusEnabled(baseUrl);
    }
  };
};
var selectDataRefresh = function selectDataRefresh(p) {
  return { send: p.requestReadExportEnabled, params: p.selectedExportTypeId };
};
// const selectLoadingRequest = p =>
//   combineRequests(p.readSelectedExportTypeIdRequest, ...(p.readExportEnabledRequests),
//     p.readExportPotokPlusEnabledRequest);
var panel = (0, _ramda.compose)((0, _withDataRequest2.default)(selectDataRequest), (0, _withDataRefresh2.default)((0, _ramda.prop)('selectedExportTypeId'), selectDataRefresh)
// withLoadingIndicator(selectLoadingRequest, null)
)(ExportStatusPanel);

exports.default = (0, _reactRedux.connect)(mapStateToProps, _actions2.default)(panel);

//# sourceMappingURL=index-compiled.js.map