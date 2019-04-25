'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

require('./ImageEditor.css');

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ImageEditor = function (_Component) {
  _inherits(ImageEditor, _Component);

  function ImageEditor() {
    var _ref;

    _classCallCheck(this, ImageEditor);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    var _this = _possibleConstructorReturn(this, (_ref = ImageEditor.__proto__ || Object.getPrototypeOf(ImageEditor)).call.apply(_ref, [this].concat(args)));

    _this.canvas = null;
    _this.image = new Image();
    _this.selectedRectangle = { x: 0, y: 0, w: 0, h: 0 };
    _this.beingEdited = false;
    _this.setCanvas = _this.setCanvas.bind(_this);
    _this.drawImage = _this.drawImage.bind(_this);
    _this.handleMouseMove = _this.handleMouseMove.bind(_this);
    _this.handleMouseDown = _this.handleMouseDown.bind(_this);
    _this.handleMouseUp = _this.handleMouseUp.bind(_this);
    return _this;
  }

  _createClass(ImageEditor, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          className = _props.className,
          style = _props.style;
      var setCanvas = this.setCanvas;

      return _react2.default.createElement(
        'div',
        { style: style, className: (0, _classnames2.default)('ImageEditor', className) },
        _react2.default.createElement('canvas', {
          id: 'canvas',
          ref: setCanvas, style: { cursor: 'crosshair' },
          onMouseMove: this.handleMouseMove, onMouseDown: this.handleMouseDown,
          onMouseUp: this.handleMouseUp
        })
      );
    }
  }, {
    key: 'handleMouseDown',
    value: function handleMouseDown(e) {
      var mousePos = this.getMousePos(e);
      this.startRectangleSelection(mousePos);
      this.beingEdited = true;
    }
  }, {
    key: 'startRectangleSelection',
    value: function startRectangleSelection(mousePos) {
      var selRect = this.selectedRectangle;

      selRect.x = mousePos.x;
      selRect.y = mousePos.y;
      selRect.w = 0;
      selRect.h = 0;
    }
  }, {
    key: 'handleMouseMove',
    value: function handleMouseMove(e) {
      if (!this.beingEdited) {
        return;
      }
      var mousePos = this.getMousePos(e);
      this.updateSelectedRectangle(mousePos);
      this.redrawImage();
    }
  }, {
    key: 'updateSelectedRectangle',
    value: function updateSelectedRectangle(mousePos) {
      var selRect = this.selectedRectangle;

      selRect.w = mousePos.x - selRect.x;
      selRect.h = mousePos.y - selRect.y;
    }
  }, {
    key: 'getMousePos',
    value: function getMousePos(e) {
      var canvas = this.canvas;

      var canvasRect = canvas.getBoundingClientRect();
      var mousePos = {
        x: Math.round((e.clientX - canvasRect.left) / (canvasRect.right - canvasRect.left) * canvas.width),
        y: Math.round((e.clientY - canvasRect.top) / (canvasRect.bottom - canvasRect.top) * canvas.height)
      };
      return mousePos;
    }
  }, {
    key: 'handleMouseUp',
    value: function handleMouseUp() {
      this.beingEdited = false;
      this.finishRectangleSelection();
      this.props.onRectangleSelected(_extends({}, this.selectedRectangle));
      this.redrawImage();
    }
  }, {
    key: 'finishRectangleSelection',
    value: function finishRectangleSelection() {
      var selRect = this.selectedRectangle;

      if (selRect.w < 0) {
        selRect.x += selRect.w;
        selRect.w *= -1;
      }
      if (selRect.h < 0) {
        selRect.y += selRect.h;
        selRect.h *= -1;
      }
    }
  }, {
    key: 'redrawImage',
    value: function redrawImage() {
      var canvas = this.canvas,
          image = this.image,
          selRect = this.selectedRectangle;

      var ctx = canvas.getContext('2d');
      ctx.drawImage(image, 0, 0);
      ctx.strokeStyle = 'green';
      ctx.lineWidth = '2';
      ctx.strokeRect(selRect.x, selRect.y, selRect.w, selRect.h);
    }
  }, {
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.drawImage();
    }
  }, {
    key: 'componentDidUpdate',
    value: function componentDidUpdate() {
      this.drawImage();
    }
  }, {
    key: 'setCanvas',
    value: function setCanvas(canvas) {
      this.canvas = canvas;
    }
  }, {
    key: 'drawImage',
    value: function drawImage() {
      var canvas = this.canvas,
          image = this.image;

      var ctx = canvas.getContext('2d');
      image.onload = function () {
        canvas.width = image.width;
        canvas.height = image.height;
        ctx.drawImage(image, 0, 0);
      };
      image.src = this.props.imageDataUrl;
    }
  }, {
    key: 'drawRectangle',
    value: function drawRectangle() {
      var canvas = this.canvas;

      var ctx = canvas.getContext('2d');
      ctx.rect(0, 0, 200, 100);
      ctx.fillStyle = 'yellow';
      ctx.fill();
      ctx.lineWidth = 7;
      ctx.strokeStyle = 'black';
      ctx.stroke();
    }
  }]);

  return ImageEditor;
}(_react.Component);

ImageEditor.propTypes = {
  imageDataUrl: _react.PropTypes.string.isRequired,
  className: _react.PropTypes.string,
  style: _react.PropTypes.object,
  onRectangleSelected: _react.PropTypes.func
};

ImageEditor.defaultProps = {
  className: null,
  style: null,
  onRectangleSelected: function onRectangleSelected() {}
};

exports.default = ImageEditor;

//# sourceMappingURL=index-compiled.js.map