'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRedux = require('react-redux');

require('./CollageTrafficLightEditor.css');

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _selectors = require('../../store/selectors');

var _selectors2 = _interopRequireDefault(_selectors);

var _lodash = require('lodash');

var _ramda = require('ramda');

var _localization = require('../../localization');

var _localization2 = _interopRequireDefault(_localization);

var _TextInput = require('../TextInput');

var _TextInput2 = _interopRequireDefault(_TextInput);

var _Button = require('../Button');

var _Button2 = _interopRequireDefault(_Button);

var _Selector = require('../Selector');

var _Selector2 = _interopRequireDefault(_Selector);

var _collagePictureTypes = require('../../common/collagePictureTypes');

var _collagePictureTypes2 = _interopRequireDefault(_collagePictureTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var handleEditingOf = (0, _ramda.curry)(function (paramName, handler, currentTrafficLight, newParamValue) {
  var newTrafficLight = _extends({}, currentTrafficLight, _defineProperty({}, paramName, (0, _lodash.isNaN)((0, _lodash.toNumber)(newParamValue)) ? 0 : (0, _lodash.toNumber)(newParamValue)));
  handler(newTrafficLight);
});

var handlePictureTypeEditing = (0, _ramda.curry)(function (handler, currentTrafficLight, getCollagePictureTypeName, newPictureTypeId) {
  var newPictureType = getCollagePictureTypeName(newPictureTypeId);
  var newTrafficLight = _extends({}, currentTrafficLight, {
    pictureType: newPictureType
  });
  handler(newTrafficLight);
});

var handleRectSelect = function handleRectSelect(handler, curTrafficLight, rect) {
  return function () {
    var newTrafficLight = _extends({}, curTrafficLight, {
      x: rect.x,
      y: rect.y,
      width: rect.w,
      height: rect.h
    });
    handler(newTrafficLight);
  };
};

var handleApply = function handleApply(handler, trafficLight) {
  return function () {
    return handler(trafficLight);
  };
};

var CollageTrafficLightEditor = function CollageTrafficLightEditor(_ref) {
  var className = _ref.className,
      trafficLight = _ref.trafficLight,
      onEdit = _ref.onEdit,
      onApply = _ref.onApply,
      selectedRectangle = _ref.selectedRectangle,
      collagePictureTypes = _ref.collagePictureTypes,
      getCollagePictureTypeId = _ref.getCollagePictureTypeId,
      getCollagePictureTypeName = _ref.getCollagePictureTypeName;
  return _react2.default.createElement(
    'div',
    { className: (0, _classnames2.default)('CollageTrafficLightEditor', className) },
    _react2.default.createElement(
      'div',
      { className: 'row' },
      _react2.default.createElement(
        'div',
        { className: 'col-xs-11' },
        _react2.default.createElement(_Selector2.default, {
          label: (0, _lodash.capitalize)(_localization2.default.CollagePicture) + ':',
          selectedItemId: getCollagePictureTypeId(trafficLight.pictureType),
          items: (0, _localization.localizeItems)(collagePictureTypes.filter(function (p) {
            return p.name === _collagePictureTypes2.default.OverviewBegin || p.name === _collagePictureTypes2.default.OverviewEnd;
          }), _lodash.capitalize),
          selectItem: handlePictureTypeEditing(onEdit, trafficLight, getCollagePictureTypeName)
        })
      )
    ),
    _react2.default.createElement(
      'div',
      { className: 'row' },
      _react2.default.createElement(
        'div',
        { className: 'col-xs-12' },
        (0, _lodash.capitalize)(_localization2.default.CollageTrafficLightTargetPositionAndSize) + ':'
      )
    ),
    _react2.default.createElement(
      'div',
      { className: 'row' },
      _react2.default.createElement(
        'div',
        { className: 'col-xs-1' },
        'X:'
      ),
      _react2.default.createElement(
        'div',
        { className: 'col-xs-3' },
        _react2.default.createElement(_TextInput2.default, {
          id: 'tgtX', value: (0, _lodash.toString)(trafficLight.x),
          onTextChanged: handleEditingOf('x', onEdit, trafficLight)
        })
      ),
      _react2.default.createElement(
        'div',
        { className: 'col-xs-1 col-xs-offset-1' },
        'Y:'
      ),
      _react2.default.createElement(
        'div',
        { className: 'col-xs-3' },
        _react2.default.createElement(_TextInput2.default, {
          id: 'tgtY', value: (0, _lodash.toString)(trafficLight.y),
          onTextChanged: handleEditingOf('y', onEdit, trafficLight)
        })
      ),
      _react2.default.createElement(
        'div',
        { className: 'col-xs-1 col-xs-offset-1' },
        _react2.default.createElement(_Button2.default, {
          iconPath: require("../../images/select_rect.png"), style: { padding: 0 },
          disabled: selectedRectangle === null,
          onClick: handleRectSelect(onEdit, trafficLight, selectedRectangle, 'target')
        })
      )
    ),
    _react2.default.createElement(
      'div',
      { className: 'row' },
      _react2.default.createElement(
        'div',
        { className: 'col-xs-1' },
        'W:'
      ),
      _react2.default.createElement(
        'div',
        { className: 'col-xs-3' },
        _react2.default.createElement(_TextInput2.default, {
          id: 'tgtW', value: (0, _lodash.toString)(trafficLight.width),
          onTextChanged: handleEditingOf('width', onEdit, trafficLight)
        })
      ),
      _react2.default.createElement(
        'div',
        { className: 'col-xs-1 col-xs-offset-1' },
        'H:'
      ),
      _react2.default.createElement(
        'div',
        { className: 'col-xs-3' },
        _react2.default.createElement(_TextInput2.default, {
          id: 'tgtH', value: (0, _lodash.toString)(trafficLight.height),
          onTextChanged: handleEditingOf('height', onEdit, trafficLight)
        })
      )
    ),
    _react2.default.createElement(
      'div',
      { className: 'row' },
      _react2.default.createElement(
        'div',
        { className: 'col-xs-4 col-xs-offset-7' },
        _react2.default.createElement(_Button2.default, {
          text: (0, _lodash.capitalize)(_localization2.default.Apply),
          disabled: !trafficLight.stale,
          onClick: handleApply(onApply, trafficLight)
        })
      )
    )
  );
};

CollageTrafficLightEditor.propTypes = {
  className: _react.PropTypes.string,
  trafficLight: _react.PropTypes.shape({
    id: _react.PropTypes.string,
    pictureType: _react.PropTypes.string,
    x: _react.PropTypes.number,
    y: _react.PropTypes.number,
    width: _react.PropTypes.number,
    height: _react.PropTypes.number
  }).isRequired,
  onEdit: _react.PropTypes.func,
  onApply: _react.PropTypes.func,
  selectedRectangle: _react.PropTypes.shape({
    x: _react.PropTypes.number,
    y: _react.PropTypes.number,
    w: _react.PropTypes.number,
    h: _react.PropTypes.number
  }),
  collagePictureTypes: _react.PropTypes.array.isRequired,
  getCollagePictureTypeId: _react.PropTypes.func.isRequired,
  getCollagePictureTypeName: _react.PropTypes.func.isRequired
};

CollageTrafficLightEditor.defaultProps = {
  className: null,
  onEdit: function onEdit() {},
  onApply: function onApply() {},
  selectedRectangle: null
};

var mapStateToProps = function mapStateToProps(state) {
  return {
    selectedRectangle: _selectors2.default.getCollageSelectedRectangle(state),
    collagePictureTypes: _selectors2.default.getCollagePictureTypes(state),
    getCollagePictureTypeId: _selectors2.default.getCollagePictureTypeId(state),
    getCollagePictureTypeName: _selectors2.default.getCollagePictureTypeName(state)
  };
};

exports.default = (0, _reactRedux.connect)(mapStateToProps)(CollageTrafficLightEditor);

//# sourceMappingURL=index-compiled.js.map