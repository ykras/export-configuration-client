'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

require('./ViolationTypeSelector.css');

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _Selector = require('../Selector');

var _Selector2 = _interopRequireDefault(_Selector);

var _localization = require('../../localization');

var _localization2 = _interopRequireDefault(_localization);

var _lodash = require('lodash');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ViolationTypeSelector = function ViolationTypeSelector(_ref) {
  var style = _ref.style,
      className = _ref.className,
      id = _ref.id,
      inline = _ref.inline,
      violationTypes = _ref.violationTypes,
      selectedViolationTypeId = _ref.selectedViolationTypeId,
      selectViolationType = _ref.selectViolationType;
  return _react2.default.createElement(
    'div',
    { style: style, className: (0, _classnames2.default)('ViolationTypeSelector', className) },
    _react2.default.createElement(_Selector2.default, {
      id: id,
      label: (0, _lodash.capitalize)(_localization2.default.ViolationTypeLabel) + ':',
      items: (0, _localization.localizeItems)(violationTypes, _lodash.capitalize),
      selectItem: selectViolationType,
      selectedItemId: selectedViolationTypeId,
      inline: inline
    })
  );
};

ViolationTypeSelector.propTypes = {
  style: _react.PropTypes.object,
  className: _react.PropTypes.string,
  id: _react.PropTypes.string,
  inline: _react.PropTypes.bool,
  violationTypes: _react.PropTypes.arrayOf(_react.PropTypes.shape({
    id: _react.PropTypes.string.isRequired,
    name: _react.PropTypes.string.isRequired
  })).isRequired,
  selectedViolationTypeId: _react.PropTypes.string,
  selectViolationType: _react.PropTypes.func
};

ViolationTypeSelector.defaultProps = {
  style: null,
  className: null,
  id: 'violation-type-selector',
  inline: false,
  selectedViolationTypeId: undefined,
  selectViolationType: function selectViolationType() {}
};

exports.default = ViolationTypeSelector;

//# sourceMappingURL=index-compiled.js.map