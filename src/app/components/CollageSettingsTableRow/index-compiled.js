'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRedux = require('react-redux');

require('./CollageSettingsTableRow.css');

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _actions = require('../../store/actions');

var _actions2 = _interopRequireDefault(_actions);

var _selectors = require('../../store/selectors');

var _selectors2 = _interopRequireDefault(_selectors);

var _CollageSettingName = require('../CollageSettingName');

var _CollageSettingName2 = _interopRequireDefault(_CollageSettingName);

var _CollageSettingValue = require('../CollageSettingValue');

var _CollageSettingValue2 = _interopRequireDefault(_CollageSettingValue);

var _withOutsideClickHandling = require('../../higher_order_components/withOutsideClickHandling');

var _withOutsideClickHandling2 = _interopRequireDefault(_withOutsideClickHandling);

var _identifiers = require('../../store/identifiers');

var _identifiers2 = _interopRequireDefault(_identifiers);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var onOutsideClick = function onOutsideClick(e, p) {
  var isEditing = p.isEditing,
      finishCollageEditing = p.finishCollageEditing,
      settingId = p.settingId;

  var _settingId$split = settingId.split('/'),
      _settingId$split2 = _slicedToArray(_settingId$split, 1),
      foregroundObjectSettingId = _settingId$split2[0];

  if ((foregroundObjectSettingId === _identifiers2.default.CollageTrafficLightSettingId || foregroundObjectSettingId === _identifiers2.default.CollageRoadSignSettingId) && e.target.id === 'canvas') {
    return;
  }
  if (isEditing) {
    finishCollageEditing(settingId);
  }
};

var CollageSettingsTableRow = function (_Component) {
  _inherits(CollageSettingsTableRow, _Component);

  function CollageSettingsTableRow() {
    _classCallCheck(this, CollageSettingsTableRow);

    return _possibleConstructorReturn(this, (CollageSettingsTableRow.__proto__ || Object.getPrototypeOf(CollageSettingsTableRow)).apply(this, arguments));
  }

  _createClass(CollageSettingsTableRow, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          className = _props.className,
          settingId = _props.settingId;

      return _react2.default.createElement(
        'tr',
        { className: (0, _classnames2.default)('CollageSettingsTableRow', className) },
        _react2.default.createElement(
          'td',
          { id: 'name' },
          _react2.default.createElement(_CollageSettingName2.default, { settingId: settingId })
        ),
        _react2.default.createElement(
          'td',
          { id: 'value' },
          _react2.default.createElement(_CollageSettingValue2.default, { settingId: settingId })
        )
      );
    }
  }]);

  return CollageSettingsTableRow;
}(_react.Component);

CollageSettingsTableRow.propTypes = {
  settingId: _react.PropTypes.string.isRequired,
  isEditing: _react.PropTypes.bool,
  finishCollageEditing: _react.PropTypes.func.isRequired,
  className: _react.PropTypes.string
};

CollageSettingsTableRow.defaultProps = {
  isEditing: false,
  className: null
};

var mapStateToProps = function mapStateToProps(state, ownProps) {
  var setting = _selectors2.default.getCollageSetting(state, ownProps.settingId);
  return {
    isEditing: setting.isEditing
  };
};

var handleClicksOutsideOf = (0, _withOutsideClickHandling2.default)(onOutsideClick);
exports.default = (0, _reactRedux.connect)(mapStateToProps, _actions2.default)(handleClicksOutsideOf(CollageSettingsTableRow));

//# sourceMappingURL=index-compiled.js.map