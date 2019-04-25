'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

require('./TrafficLightSettingName.css');

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _localization = require('../../localization');

var _lodash = require('lodash');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var TrafficLightSettingName = function TrafficLightSettingName(_ref) {
  var style = _ref.style,
      className = _ref.className,
      settingName = _ref.name;
  return _react2.default.createElement(
    'div',
    { style: style, className: (0, _classnames2.default)('TrafficLightSettingName', className) },
    _react2.default.createElement(
      'p',
      null,
      (0, _localization.localizeText)(settingName, _lodash.capitalize)
    )
  );
};

TrafficLightSettingName.propTypes = {
  style: _react.PropTypes.object,
  className: _react.PropTypes.string,
  name: _react.PropTypes.string.isRequired
};

TrafficLightSettingName.defaultProps = {
  style: null,
  className: null
};

exports.default = TrafficLightSettingName;

//# sourceMappingURL=index-compiled.js.map