'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

require('./TrafficLightSettingValueViewer.css');

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _lodash = require('lodash');

var _localization = require('../../localization');

var _localization2 = _interopRequireDefault(_localization);

var _identifiers = require('../../store/identifiers');

var _identifiers2 = _interopRequireDefault(_identifiers);

var _TrafficLightViewer = require('../TrafficLightViewer');

var _TrafficLightViewer2 = _interopRequireDefault(_TrafficLightViewer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var viewOfSettingValue = function viewOfSettingValue(p) {
  var id = p.id,
      value = p.value;

  if (!value) {
    return (0, _lodash.capitalize)(_localization2.default.SettingValueIsNotSpecified);
  }
  switch (id.split('/')[0]) {
    case _identifiers2.default.TrafficLightSettingId:
      return _react2.default.createElement(_TrafficLightViewer2.default, { trafficLight: value });
    default:
      return (0, _localization.localizeText)(value, _lodash.capitalize);
  }
};

var TrafficLightSettingValueViewer = function TrafficLightSettingValueViewer(props) {
  var style = props.style,
      className = props.className;

  return _react2.default.createElement(
    'div',
    { style: style, className: (0, _classnames2.default)('TrafficLightSettingValueViewer', className) },
    viewOfSettingValue(props)
  );
};

TrafficLightSettingValueViewer.propTypes = {
  style: _react.PropTypes.object,
  className: _react.PropTypes.string,
  id: _react.PropTypes.string.isRequired,
  value: _react.PropTypes.any
};

TrafficLightSettingValueViewer.defaultProps = {
  style: null,
  className: null
};

exports.default = TrafficLightSettingValueViewer;

//# sourceMappingURL=index-compiled.js.map