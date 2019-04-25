'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRedux = require('react-redux');

require('./ExportStatistic.css');

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _localization = require('../../localization');

var _localization2 = _interopRequireDefault(_localization);

var _lodash = require('lodash');

var _actions = require('../../store/actions');

var _actions2 = _interopRequireDefault(_actions);

var _selectors = require('../../store/selectors');

var _selectors2 = _interopRequireDefault(_selectors);

var _api = require('../../api');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var errorCode = function errorCode(error) {
  return (0, _lodash.capitalize)(_localization2.default.ErrorCode) + ': ' + error;
};

var errorInfo = function errorInfo(code, category) {
  return _react2.default.createElement(
    'li',
    { className: 'list-group-item error-info' },
    _react2.default.createElement(
      'h4',
      { className: 'list-group-item-heading' },
      (0, _lodash.capitalize)(_localization2.default.Error)
    ),
    _react2.default.createElement(
      'p',
      { className: 'list-group-item-text' },
      (0, _localization.localizeText)(category, _lodash.capitalize)
    ),
    _react2.default.createElement(
      'p',
      { className: 'list-group-item-text' },
      errorCode(code)
    )
  );
};

var completedExportTiming = function completedExportTiming(endTime, violTime) {
  return _react2.default.createElement(
    'li',
    { className: 'list-group-item' },
    _react2.default.createElement(
      'span',
      null,
      (0, _lodash.capitalize)(_localization2.default.LastSuccessfulExportTry) + ' '
    ),
    _react2.default.createElement(
      'span',
      { className: 'date-time' },
      '' + endTime
    ),
    _react2.default.createElement(
      'span',
      null,
      ', ' + _localization2.default.ViolationTime + ' '
    ),
    _react2.default.createElement(
      'span',
      { className: 'date-time' },
      '' + violTime
    )
  );
};

var incompleteExportTiming = function incompleteExportTiming(startTime) {
  return _react2.default.createElement(
    'li',
    { className: 'list-group-item' },
    _react2.default.createElement(
      'span',
      null,
      (0, _lodash.capitalize)(_localization2.default.LastExportTry) + ' '
    ),
    _react2.default.createElement(
      'span',
      { className: 'date-time' },
      '' + startTime
    )
  );
};

var ExportStatistic = function (_Component) {
  _inherits(ExportStatistic, _Component);

  function ExportStatistic() {
    var _ref;

    _classCallCheck(this, ExportStatistic);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    var _this = _possibleConstructorReturn(this, (_ref = ExportStatistic.__proto__ || Object.getPrototypeOf(ExportStatistic)).call.apply(_ref, [this].concat(args)));

    _this.requestExportStatistic = _this.requestExportStatistic.bind(_this);
    _this.timer = undefined;
    return _this;
  }

  _createClass(ExportStatistic, [{
    key: 'componentWillMount',
    value: function componentWillMount() {
      this.timer = setInterval(this.requestExportStatistic, 3000);
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      clearInterval(this.timer);
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props,
          className = _props.className,
          statistic = _props.statistic,
          succeeded = _props.succeeded,
          errorCode = _props.errorCode,
          errorCategory = _props.errorCategory,
          lastSuccessfulExportTryEndTime = _props.lastSuccessfulExportTryEndTime,
          lastExportedViolationTime = _props.lastExportedViolationTime,
          lastExportTryStartTime = _props.lastExportTryStartTime;

      if ((0, _lodash.isEmpty)(statistic)) {
        return null;
      }
      return _react2.default.createElement(
        'div',
        { className: (0, _classnames2.default)('ExportStatistic', className) },
        _react2.default.createElement(
          'div',
          { className: (0, _classnames2.default)('panel', 'panel-' + (succeeded ? 'success' : 'danger')) },
          _react2.default.createElement(
            'div',
            { className: 'panel-body' },
            _react2.default.createElement(
              'ul',
              { className: 'list-group borderless' },
              !succeeded && errorInfo(errorCode, errorCategory),
              lastSuccessfulExportTryEndTime && lastExportedViolationTime && completedExportTiming(lastSuccessfulExportTryEndTime, lastExportedViolationTime),
              lastExportTryStartTime && incompleteExportTiming(lastExportTryStartTime)
            )
          )
        )
      );
    }
  }, {
    key: 'requestExportStatistic',
    value: function requestExportStatistic() {
      this.props.requestReadExportStatistic(_api.baseUrl);
    }
  }]);

  return ExportStatistic;
}(_react.Component);

ExportStatistic.propTypes = {
  style: _react.PropTypes.object,
  className: _react.PropTypes.string,
  statistic: _react.PropTypes.object,
  succeeded: _react.PropTypes.bool,
  errorCode: _react.PropTypes.number,
  errorCategory: _react.PropTypes.string,
  lastExportTryStartTime: _react.PropTypes.string,
  lastSuccessfulExportTryEndTime: _react.PropTypes.string,
  lastExportedViolationTime: _react.PropTypes.string,
  requestReadExportStatistic: _react.PropTypes.func.isRequired
};

ExportStatistic.defaultProps = {
  style: null,
  className: null,
  succeeded: true
};

var mapStateToProps = function mapStateToProps(state) {
  return {
    statistic: _selectors2.default.getExportStatistic(state),
    succeeded: _selectors2.default.getExportSucceeded(state),
    errorCode: _selectors2.default.getExportErrorCode(state),
    errorCategory: _selectors2.default.getExportErrorCategory(state),
    lastExportTryStartTime: _selectors2.default.getLastExportTryStartTime(state),
    lastSuccessfulExportTryEndTime: _selectors2.default.getLastSuccessfulExportTryEndTime(state),
    lastExportedViolationTime: _selectors2.default.getLastExportedViolationTime(state)
  };
};

exports.default = (0, _reactRedux.connect)(mapStateToProps, _actions2.default)(ExportStatistic);

//# sourceMappingURL=index-compiled.js.map