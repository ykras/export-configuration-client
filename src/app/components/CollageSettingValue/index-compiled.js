'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRedux = require('react-redux');

require('./CollageSettingValue.css');

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _selectors = require('../../store/selectors');

var _selectors2 = _interopRequireDefault(_selectors);

var _actions = require('../../store/actions');

var _actions2 = _interopRequireDefault(_actions);

var _lodash = require('lodash');

var _localization = require('../../localization');

var _localization2 = _interopRequireDefault(_localization);

var _Checkbox = require('../Checkbox');

var _Checkbox2 = _interopRequireDefault(_Checkbox);

var _identifiers = require('../../store/identifiers');

var _identifiers2 = _interopRequireDefault(_identifiers);

var _ramda = require('ramda');

var _CollageSettingValueViewer = require('../CollageSettingValueViewer');

var _CollageSettingValueViewer2 = _interopRequireDefault(_CollageSettingValueViewer);

var _CollageSettingValueEditor = require('../CollageSettingValueEditor');

var _CollageSettingValueEditor2 = _interopRequireDefault(_CollageSettingValueEditor);

var _api = require('../../api');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var handleSettingValueInheritanceChanged = (0, _ramda.curry)(function (props, isSettingValueInherited) {
  var settingId = props.settingId,
      updateCollageSettingValueInheritance = props.updateCollageSettingValueInheritance,
      requestUpdateCollageDefaultFontPriority = props.requestUpdateCollageDefaultFontPriority,
      requestReadCollage = props.requestReadCollage,
      violationTypeId = props.violationTypeId;

  updateCollageSettingValueInheritance(settingId, isSettingValueInherited);
  if (settingId === _identifiers2.default.CollageViolationFontSettingId) {
    var preferDefaultFont = Boolean(isSettingValueInherited);
    requestUpdateCollageDefaultFontPriority(_api.baseUrl, preferDefaultFont).then(function () {
      return requestReadCollage(_api.baseUrl, violationTypeId);
    });
  }
});

var handleClickOnValue = function handleClickOnValue(props) {
  return function () {
    var isEditing = props.isEditing,
        isSettingValueInherited = props.isSettingValueInherited,
        settingId = props.settingId,
        beginCollageEditing = props.beginCollageEditing;

    if (isSettingValueInherited || isEditing) {
      return;
    }
    beginCollageEditing(settingId);
  };
};

var CollageSettingValue = function CollageSettingValue(props) {
  var className = props.className,
      settingId = props.settingId,
      settingParentId = props.settingParentId,
      isEditing = props.isEditing,
      isSettingValueInherited = props.isSettingValueInherited;

  return _react2.default.createElement(
    'div',
    { className: (0, _classnames2.default)('CollageSettingValue', className) },
    settingParentId && !isEditing ? _react2.default.createElement(_Checkbox2.default, {
      label: (0, _lodash.capitalize)(_localization2.default.ByDefault),
      checked: isSettingValueInherited,
      onChanged: handleSettingValueInheritanceChanged(props)
    }) : null,
    _react2.default.createElement(
      'div',
      { onClick: handleClickOnValue(props), style: isSettingValueInherited ? { cursor: 'default', color: 'gray' } : null },
      isEditing ? _react2.default.createElement(_CollageSettingValueEditor2.default, { settingId: settingId }) : _react2.default.createElement(_CollageSettingValueViewer2.default, { settingId: settingId })
    )
  );
};

CollageSettingValue.propTypes = {
  className: _react.PropTypes.string,
  settingId: _react.PropTypes.string.isRequired,
  isEditing: _react.PropTypes.bool,
  settingParentId: _react.PropTypes.string,
  isSettingValueInherited: _react.PropTypes.bool,
  updateCollageSettingValueInheritance: _react.PropTypes.func.isRequired,
  requestUpdateCollageDefaultFontPriority: _react.PropTypes.func.isRequired,
  requestReadCollage: _react.PropTypes.func.isRequired,
  violationTypeId: _react.PropTypes.string.isRequired,
  beginCollageEditing: _react.PropTypes.func.isRequired
};

CollageSettingValue.defaultProps = {
  className: null
};

var mapStateToProps = function mapStateToProps(state, ownProps) {
  var setting = _selectors2.default.getCollageSetting(state, ownProps.settingId);
  return {
    isEditing: setting.isEditing,
    settingParentId: setting.parentId,
    isSettingValueInherited: setting.isValueInherited,
    violationTypeId: _selectors2.default.getSelectedViolationTypeId(state)
  };
};

exports.default = (0, _reactRedux.connect)(mapStateToProps, _actions2.default)(CollageSettingValue);

//# sourceMappingURL=index-compiled.js.map