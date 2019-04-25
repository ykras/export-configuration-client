'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _ramda = require('ramda');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var withOutsideClickHandling = (0, _ramda.curry)(function (onOutsideClick, Component) {
  return function (_React$Component) {
    _inherits(_class, _React$Component);

    function _class() {
      var _ref;

      _classCallCheck(this, _class);

      for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      var _this = _possibleConstructorReturn(this, (_ref = _class.__proto__ || Object.getPrototypeOf(_class)).call.apply(_ref, [this].concat(args)));

      _this.componentArea = undefined;
      _this.setComponentArea = _this.setComponentArea.bind(_this);
      _this.handleClickOutsideComponent = _this.handleClickOutsideComponent.bind(_this);
      return _this;
    }

    _createClass(_class, [{
      key: 'render',
      value: function render() {
        return _react2.default.createElement(Component, _extends({}, this.props, { ref: this.setComponentArea }));
      }
    }, {
      key: 'componentDidMount',
      value: function componentDidMount() {
        document.addEventListener('click', this.handleClickOutsideComponent, true);
      }
    }, {
      key: 'componentWillUnmount',
      value: function componentWillUnmount() {
        document.removeEventListener('click', this.handleClickOutsideComponent, true);
      }
    }, {
      key: 'setComponentArea',
      value: function setComponentArea(area) {
        this.componentArea = area;
      }
    }, {
      key: 'getComponentArea',
      value: function getComponentArea() {
        var area = void 0;
        if (this.componentArea) {
          area = this.componentArea.isReactComponent ? _reactDom2.default.findDOMNode(this.componentArea) : this.componentArea;
        }
        return area;
      }
    }, {
      key: 'handleClickOutsideComponent',
      value: function handleClickOutsideComponent(e) {
        var componentArea = this.getComponentArea();
        if (!componentArea || componentArea.contains(e.target)) {
          return;
        }
        onOutsideClick(e, this.props);
      }
    }]);

    return _class;
  }(_react2.default.Component);
});

exports.default = withOutsideClickHandling;

//# sourceMappingURL=index-compiled.js.map