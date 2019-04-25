'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

require('./ExportStatusMessagePanel.css');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ExportStatusPanel = function (_Component) {
  _inherits(ExportStatusPanel, _Component);

  function ExportStatusPanel(props) {
    _classCallCheck(this, ExportStatusPanel);

    var _this = _possibleConstructorReturn(this, (ExportStatusPanel.__proto__ || Object.getPrototypeOf(ExportStatusPanel)).call(this, props));

    _this.state = {
      status: _this.props.initialStatus
    };
    return _this;
  }

  _createClass(ExportStatusPanel, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        { className: 'ExportStatusMessagePanel' },
        _react2.default.createElement(
          'div',
          { className: 'jumbotron' },
          _react2.default.createElement(
            'label',
            null,
            this.state.status
          )
        )
      );
    }
  }]);

  return ExportStatusPanel;
}(_react.Component);

ExportStatusPanel.propTypes = {
  initialStatus: _react.PropTypes.string
};

ExportStatusPanel.defaultProps = {
  initialStatus: 'Ошибка'
};

exports.default = ExportStatusPanel;

//# sourceMappingURL=index-compiled.js.map