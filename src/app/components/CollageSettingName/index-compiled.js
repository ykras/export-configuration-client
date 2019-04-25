'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRedux = require('react-redux');

require('./CollageSettingName.css');

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _selectors = require('../../store/selectors');

var _selectors2 = _interopRequireDefault(_selectors);

var _actions = require('../../store/actions');

var _actions2 = _interopRequireDefault(_actions);

var _localization = require('../../localization');

var _lodash = require('lodash');

var _identifiers = require('../../store/identifiers');

var _identifiers2 = _interopRequireDefault(_identifiers);

var _Checkbox = require('../Checkbox');

var _Checkbox2 = _interopRequireDefault(_Checkbox);

var _ramda = require('ramda');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var onSettingSelectionChanged = (0, _ramda.curry)(function (handler, settingId, settingSelected) {
  handler(settingId, settingSelected);
});

var settingNameView = function settingNameView(settingId, settingName, isSettingSelected, updateCollageSettingSelection) {
  if ((0, _lodash.startsWith)(settingId, _identifiers2.default.CollageTrafficLightSettingId) || (0, _lodash.startsWith)(settingId, _identifiers2.default.CollageRoadSignSettingId)) {
    return _react2.default.createElement(_Checkbox2.default, {
      label: '' + (0, _localization.localizeText)(settingName, _lodash.capitalize),
      onChanged: onSettingSelectionChanged(updateCollageSettingSelection, settingId),
      checked: isSettingSelected
    });
  }
  return _react2.default.createElement(
    'p',
    null,
    (0, _localization.localizeText)(settingName, _lodash.capitalize)
  );
};

var CollageSettingName = function CollageSettingName(_ref) {
  var className = _ref.className,
      settingId = _ref.settingId,
      settingName = _ref.settingName,
      isSettingSelected = _ref.isSettingSelected,
      updateCollageSettingSelection = _ref.updateCollageSettingSelection;
  return _react2.default.createElement(
    'div',
    { className: (0, _classnames2.default)('CollageSettingName', className) },
    settingNameView(settingId, settingName, isSettingSelected, updateCollageSettingSelection)
  );
};

CollageSettingName.propTypes = {
  settingId: _react.PropTypes.string.isRequired,
  settingName: _react.PropTypes.oneOfType([_react.PropTypes.string, _react.PropTypes.object]).isRequired,
  isSettingSelected: _react.PropTypes.bool,
  className: _react.PropTypes.string,
  updateCollageSettingSelection: _react.PropTypes.func.isRequired
};

CollageSettingName.defaultProps = {
  className: null,
  isSettingSelected: false
};

var mapStateToProps = function mapStateToProps(state, ownProps) {
  var setting = _selectors2.default.getCollageSetting(state, ownProps.settingId);
  return {
    settingName: setting.name,
    isSettingSelected: setting.isSelected
  };
};

exports.default = (0, _reactRedux.connect)(mapStateToProps, _actions2.default)(CollageSettingName);

//# sourceMappingURL=index-compiled.js.map