'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

require('./TrafficLightSettingsTableRow.css');

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _TrafficLightSettingName = require('../TrafficLightSettingName');

var _TrafficLightSettingName2 = _interopRequireDefault(_TrafficLightSettingName);

var _TrafficLightSettingValue = require('../TrafficLightSettingValue');

var _TrafficLightSettingValue2 = _interopRequireDefault(_TrafficLightSettingValue);

var _withOutsideClickHandling = require('../../higher_order_components/withOutsideClickHandling');

var _withOutsideClickHandling2 = _interopRequireDefault(_withOutsideClickHandling);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var onOutsideClick = function onOutsideClick(e, p) {
  var handleFinishEditing = p.handleFinishEditing,
      settingId = p.id,
      isEditing = p.isEditing;

  if (e.target.id === 'canvas') {
    return;
  }
  if (isEditing) {
    handleFinishEditing(settingId);
  }
};

var TrafficLightSettingsTableRow = function (_Component) {
  _inherits(TrafficLightSettingsTableRow, _Component);

  function TrafficLightSettingsTableRow() {
    _classCallCheck(this, TrafficLightSettingsTableRow);

    return _possibleConstructorReturn(this, (TrafficLightSettingsTableRow.__proto__ || Object.getPrototypeOf(TrafficLightSettingsTableRow)).apply(this, arguments));
  }

  _createClass(TrafficLightSettingsTableRow, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          style = _props.style,
          className = _props.className;

      return _react2.default.createElement(
        'tr',
        { style: style, className: (0, _classnames2.default)('TrafficLightSettingsTableRow', className) },
        _react2.default.createElement(
          'td',
          { id: 'name' },
          _react2.default.createElement(_TrafficLightSettingName2.default, this.props)
        ),
        _react2.default.createElement(
          'td',
          { id: 'value' },
          _react2.default.createElement(_TrafficLightSettingValue2.default, this.props)
        )
      );
    }
  }]);

  return TrafficLightSettingsTableRow;
}(_react.Component);

TrafficLightSettingsTableRow.propTypes = {
  style: _react.PropTypes.object,
  className: _react.PropTypes.string,
  id: _react.PropTypes.string.isRequired,
  isEditing: _react.PropTypes.bool.isRequired,
  handleFinishEditing: _react.PropTypes.func
};

TrafficLightSettingsTableRow.defaultProps = {
  style: null,
  className: null,
  handleFinishEditing: function handleFinishEditing() {}
};

exports.default = (0, _withOutsideClickHandling2.default)(onOutsideClick)(TrafficLightSettingsTableRow);

//# sourceMappingURL=index-compiled.js.map