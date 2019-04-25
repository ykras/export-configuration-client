'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

require('./Selector.css');

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _ramda = require('ramda');

var _lodash = require('lodash');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var handle = (0, _ramda.curry)(function (handler, event) {
  handler(event.target.value);
  event.preventDefault();
});

var isNotDefined = function isNotDefined(value) {
  return (0, _lodash.isUndefined)(value) || (0, _lodash.isNull)(value);
};

var Selector = function Selector(_ref) {
  var label = _ref.label,
      placeholder = _ref.placeholder,
      items = _ref.items,
      selectedItemId = _ref.selectedItemId,
      selectItem = _ref.selectItem,
      inline = _ref.inline,
      className = _ref.className;
  return _react2.default.createElement(
    'div',
    { className: (0, _classnames2.default)('Selector', className) },
    _react2.default.createElement(
      'div',
      { className: (0, _classnames2.default)({ 'form-inline': inline }) },
      _react2.default.createElement(
        'div',
        { className: 'form-group' },
        label ? _react2.default.createElement(
          'label',
          { htmlFor: 'sel' },
          label
        ) : null,
        _react2.default.createElement(
          'select',
          _extends({ className: 'form-control', id: 'sel', onChange: handle(selectItem) }, isNotDefined(selectedItemId) ? { value: "" } : { value: selectedItemId }),
          placeholder && isNotDefined(selectedItemId) ? _react2.default.createElement(
            'option',
            { value: '', disabled: true /* style={{display: 'none'}}*/ },
            placeholder
          ) : null,
          items.map(function (item) {
            return _react2.default.createElement(
              'option',
              { key: item.id, value: item.id },
              item.name
            );
          })
        )
      )
    )
  );
};

Selector.propTypes = {
  label: _react.PropTypes.string,
  placeholder: _react.PropTypes.string,
  items: _react.PropTypes.arrayOf(_react.PropTypes.shape({
    id: _react.PropTypes.string.isRequired,
    name: _react.PropTypes.string.isRequired
  })).isRequired,
  selectedItemId: _react.PropTypes.string,
  selectItem: _react.PropTypes.func,
  inline: _react.PropTypes.bool,
  className: _react.PropTypes.string
};

Selector.defaultProps = {
  label: '',
  placeholder: null,
  selectedItemId: undefined,
  selectItem: function selectItem() {},
  inline: false,
  className: null
};

exports.default = Selector;

//# sourceMappingURL=index-compiled.js.map