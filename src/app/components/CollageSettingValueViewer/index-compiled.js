'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRedux = require('react-redux');

require('./CollageSettingValueViewer.css');

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _selectors = require('../../store/selectors');

var _selectors2 = _interopRequireDefault(_selectors);

var _identifiers = require('../../store/identifiers');

var _identifiers2 = _interopRequireDefault(_identifiers);

var _lodash = require('lodash');

var _localization = require('../../localization');

var _localization2 = _interopRequireDefault(_localization);

var _CollageTrafficLightViewer = require('../CollageTrafficLightViewer');

var _CollageTrafficLightViewer2 = _interopRequireDefault(_CollageTrafficLightViewer);

var _RoadSignViewer = require('../RoadSignViewer');

var _RoadSignViewer2 = _interopRequireDefault(_RoadSignViewer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var viewOfSettingValue = function viewOfSettingValue(settingId, isSettingValueInherited, settingValue, parentSettingValue, violationTypeId) {
  var value = isSettingValueInherited ? parentSettingValue : settingValue;
  if (!value) {
    return (0, _lodash.capitalize)(_localization2.default.SettingValueIsNotSpecified);
  }
  var id = settingId.split('/')[0];
  switch (id) {
    case _identifiers2.default.CollageDefaultFontSettingId:
      return value.name + ', ' + value.sizeInPoints;
    case _identifiers2.default.CollageViolationFontSettingId:
      {
        var val = isSettingValueInherited ? value : value[violationTypeId];
        if (!val) {
          return (0, _lodash.capitalize)(_localization2.default.SettingValueIsNotSpecified);
        }
        return val.name + ', ' + val.sizeInPoints;
      }
    case _identifiers2.default.VehicleDetectionFrameFooterTemplateSettingId:
    case _identifiers2.default.OverviewBeginFooterTemplateSettingId:
    case _identifiers2.default.VehicleDetectionBeginFooterTemplateSettingId:
    case _identifiers2.default.OverviewEndFooterTemplateSettingId:
    case _identifiers2.default.VehicleDetectionEndFooterTemplateSettingId:
      return value.map(function (v, j) {
        return _react2.default.createElement(
          'p',
          { key: j },
          v
        );
      });
    case _identifiers2.default.CollageTrafficLightSettingId:
      return _react2.default.createElement(_CollageTrafficLightViewer2.default, { trafficLight: value });
    case _identifiers2.default.CollageRoadSignSettingId:
      return _react2.default.createElement(_RoadSignViewer2.default, { roadSign: value });
    case _identifiers2.default.CollageExportPathSettingId:
      return value;
    default:
      return (0, _localization.localizeText)(value, _lodash.capitalize);
  }
};

var CollageSettingValueViewer = function CollageSettingValueViewer(_ref) {
  var className = _ref.className,
      settingId = _ref.settingId,
      isSettingValueInherited = _ref.isSettingValueInherited,
      settingValue = _ref.settingValue,
      parentSettingValue = _ref.parentSettingValue,
      violationTypeId = _ref.violationTypeId;
  return _react2.default.createElement(
    'div',
    { className: (0, _classnames2.default)('CollageSettingValueViewer', className) },
    viewOfSettingValue(settingId, isSettingValueInherited, settingValue, parentSettingValue, violationTypeId)
  );
};

CollageSettingValueViewer.propTypes = {
  className: _react.PropTypes.string,
  settingId: _react.PropTypes.string.isRequired,
  settingValue: _react.PropTypes.any,
  parentSettingValue: _react.PropTypes.any,
  isSettingValueInherited: _react.PropTypes.bool,
  violationTypeId: _react.PropTypes.string.isRequired
};

CollageSettingValueViewer.defaultProps = {
  className: null
};

var mapStateToProps = function mapStateToProps(state, ownProps) {
  var setting = _selectors2.default.getCollageSetting(state, ownProps.settingId);
  var parentSetting = _selectors2.default.getCollageSetting(state, setting.parentId);
  var parentSettingValue = parentSetting ? parentSetting.value : null;
  return {
    settingValue: setting.value,
    isSettingValueInherited: setting.isValueInherited,
    violationTypeId: _selectors2.default.getSelectedViolationTypeId(state),
    parentSettingValue: parentSettingValue
  };
};

exports.default = (0, _reactRedux.connect)(mapStateToProps)(CollageSettingValueViewer);

//# sourceMappingURL=index-compiled.js.map