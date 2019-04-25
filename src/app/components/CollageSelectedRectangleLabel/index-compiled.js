'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

require('./CollageSelectedRectangleLabel.css');

var _reactRedux = require('react-redux');

var _selectors = require('../../store/selectors');

var _selectors2 = _interopRequireDefault(_selectors);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _localization = require('../../localization');

var _localization2 = _interopRequireDefault(_localization);

var _lodash = require('lodash');

var _SelectedRectangleLabel = require('../SelectedRectangleLabel');

var _SelectedRectangleLabel2 = _interopRequireDefault(_SelectedRectangleLabel);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var CollageSelectedRectangleLabel = function CollageSelectedRectangleLabel(_ref) {
  var className = _ref.className,
      style = _ref.style,
      r = _ref.selectedRectangle;
  return _react2.default.createElement(
    'div',
    { className: (0, _classnames2.default)('CollageSelectedRectangleLabel', className), style: style },
    _react2.default.createElement(_SelectedRectangleLabel2.default, { selectedRectangle: r, text: (0, _lodash.capitalize)(_localization2.default.SelectedRegionLabel) })
  );
};

CollageSelectedRectangleLabel.propTypes = {
  className: _react.PropTypes.string,
  style: _react.PropTypes.object,
  selectedRectangle: _react.PropTypes.object
};

CollageSelectedRectangleLabel.defaultProps = {
  className: null,
  style: null,
  selectedRectangle: null
};

var mapStateToProps = function mapStateToProps(state) {
  return {
    selectedRectangle: _selectors2.default.getCollageSelectedRectangle(state)
  };
};

exports.default = (0, _reactRedux.connect)(mapStateToProps)(CollageSelectedRectangleLabel);

//# sourceMappingURL=index-compiled.js.map