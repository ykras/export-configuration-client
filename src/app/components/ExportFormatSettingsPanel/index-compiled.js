'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

require('./ExportFormatSettingsPanel.css');

var _index = require('../ExportVocordTefSettingsPanel/index');

var _index2 = _interopRequireDefault(_index);

var _ExportCollageSettingsPanel = require('../ExportCollageSettingsPanel');

var _ExportCollageSettingsPanel2 = _interopRequireDefault(_ExportCollageSettingsPanel);

var _exportTypes = require('../../common/exportTypes');

var _exportTypes2 = _interopRequireDefault(_exportTypes);

var _reactRedux = require('react-redux');

var _selectors = require('../../store/selectors');

var _selectors2 = _interopRequireDefault(_selectors);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var exportSettingsPanel = function exportSettingsPanel(exportFormat) {
  switch (exportFormat) {
    case _exportTypes2.default.VocordTef:
      return _react2.default.createElement(_index2.default, null);
    case _exportTypes2.default.Collage:
      return _react2.default.createElement(_ExportCollageSettingsPanel2.default, null);
    default:
      return null;
  }
};

var ExportFormatSettingsPanel = function ExportFormatSettingsPanel(_ref) {
  var exportFormat = _ref.exportFormat,
      className = _ref.className;
  return _react2.default.createElement(
    'div',
    { className: (0, _classnames2.default)('ExportFormatSettingsPanel', className) },
    exportSettingsPanel(exportFormat)
  );
};

ExportFormatSettingsPanel.propTypes = {
  exportFormat: _react.PropTypes.string,
  className: _react.PropTypes.string
};

ExportFormatSettingsPanel.defaultProps = {
  className: null
};

var selectedExportType = function selectedExportType(state) {
  return _selectors2.default.getSelectedExportType(state) || { name: null };
};

var mapStateToProps = function mapStateToProps(state) {
  return {
    exportFormat: selectedExportType(state).name
  };
};

exports.default = (0, _reactRedux.connect)(mapStateToProps, null)(ExportFormatSettingsPanel);

//# sourceMappingURL=index-compiled.js.map