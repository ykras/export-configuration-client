'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRedux = require('react-redux');

require('./ExportConfigTabs.css');

var _ExportStatusPanel = require('../ExportStatusPanel');

var _ExportStatusPanel2 = _interopRequireDefault(_ExportStatusPanel);

var _ExportFormatSettingsPanel = require('../ExportFormatSettingsPanel');

var _ExportFormatSettingsPanel2 = _interopRequireDefault(_ExportFormatSettingsPanel);

var _TrafficLightsSettingsPanel = require('../TrafficLightsSettingsPanel');

var _TrafficLightsSettingsPanel2 = _interopRequireDefault(_TrafficLightsSettingsPanel);

var _ExportPotokPlusSettingsPanel = require('../ExportPotokPlusSettingsPanel');

var _ExportPotokPlusSettingsPanel2 = _interopRequireDefault(_ExportPotokPlusSettingsPanel);

var _actions = require('../../store/actions');

var _actions2 = _interopRequireDefault(_actions);

var _selectors = require('../../store/selectors');

var _selectors2 = _interopRequireDefault(_selectors);

var _localization = require('../../localization');

var _localization2 = _interopRequireDefault(_localization);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// const tabs = (selectedExportTypeName, exportPotokPlusEnabled) => {
//   const tabs = [
//     <li className="active" key="1">
//       <a href="#export-status" data-toggle="tab">{localizedStrings.StatusTabName}</a>
//     </li>,
//     <li key="2">
//       <a href="#export-format" data-toggle="tab">{localizedStrings[selectedExportTypeName]}</a>
//     </li>,
//     <li key="3">
//       <a href="#traffic-lights" data-toggle="tab">{localizedStrings.TrafficLightsTabName}</a>
//     </li>
//   ];
//   if (exportPotokPlusEnabled) {
//     tabs.push(
//       <li key="4">
//         <a href="#export-potok-plus" data-toggle="tab">{localizedStrings.PotokPlusTabName}</a>
//       </li>
//     );
//   }
//   return tabs;
// };

var tabs = function tabs(isExportTypeSelected, exportTypeName, isExportPotokPlusEnabled) {
  return _react2.default.createElement(
    'ul',
    { className: 'nav nav-tabs' },
    _react2.default.createElement(
      'li',
      { className: 'active' },
      _react2.default.createElement(
        'a',
        { href: '#export-status', 'data-toggle': 'tab' },
        _localization2.default.StatusTabName
      )
    ),
    isExportTypeSelected && _react2.default.createElement(
      'li',
      null,
      _react2.default.createElement(
        'a',
        { href: '#export-format', 'data-toggle': 'tab' },
        _localization2.default[exportTypeName]
      )
    ),
    _react2.default.createElement(
      'li',
      null,
      _react2.default.createElement(
        'a',
        { href: '#traffic-lights', 'data-toggle': 'tab' },
        _localization2.default.TrafficLightsTabName
      )
    ),
    isExportTypeSelected && isExportPotokPlusEnabled && _react2.default.createElement(
      'li',
      null,
      _react2.default.createElement(
        'a',
        { href: '#export-potok-plus', 'data-toggle': 'tab' },
        _localization2.default.PotokPlusTabName
      )
    )
  );
};

var tabsContent = function tabsContent(isExportPotokPlusEnabled) {
  var panels = [_react2.default.createElement(
    'div',
    { className: 'tab-pane active fade in', id: 'export-status', key: '1' },
    _react2.default.createElement(_ExportStatusPanel2.default, null)
  ), _react2.default.createElement(
    'div',
    { className: 'tab-pane fade in', id: 'export-format', key: '2' },
    _react2.default.createElement(_ExportFormatSettingsPanel2.default, null)
  ), _react2.default.createElement(
    'div',
    { className: 'tab-pane fade in', id: 'traffic-lights', key: '3' },
    _react2.default.createElement(_TrafficLightsSettingsPanel2.default, null)
  )];
  if (isExportPotokPlusEnabled) {
    panels.push(_react2.default.createElement(
      'div',
      { className: 'tab-pane fade', id: 'export-potok-plus', key: '4' },
      _react2.default.createElement(_ExportPotokPlusSettingsPanel2.default, null)
    ));
  }
  return panels;
};

var ExportConfigTabs = function ExportConfigTabs(_ref) {
  var isExportTypeSelected = _ref.isExportTypeSelected,
      exportTypeName = _ref.exportTypeName,
      isExportPotokPlusEnabled = _ref.isExportPotokPlusEnabled;
  return _react2.default.createElement(
    'div',
    { className: 'ExportConfigTabs' },
    tabs(isExportTypeSelected, exportTypeName, isExportPotokPlusEnabled),
    _react2.default.createElement(
      'div',
      { className: 'tab-content' },
      tabsContent(isExportPotokPlusEnabled)
    )
  );
};

ExportConfigTabs.propTypes = {
  isExportTypeSelected: _react.PropTypes.bool.isRequired,
  exportTypeName: _react.PropTypes.string,
  isExportPotokPlusEnabled: _react.PropTypes.bool.isRequired
};

var mapStateToProps = function mapStateToProps(state) {
  var selectedExportType = _selectors2.default.getSelectedExportType(state);
  return {
    isExportTypeSelected: Boolean(selectedExportType),
    exportTypeName: selectedExportType ? selectedExportType.name : null,
    isExportPotokPlusEnabled: _selectors2.default.getExportPotokPlusEnabled(state)
  };
};

exports.default = (0, _reactRedux.connect)(mapStateToProps, _actions2.default)(ExportConfigTabs);

//# sourceMappingURL=index-compiled.js.map