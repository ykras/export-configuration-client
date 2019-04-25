'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

require('./SettingsTable.css');

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// import {curry} from 'ramda';

var tableHead = function tableHead(p) {
  var nameHeaderText = p.nameHeaderText,
      valueHeaderText = p.valueHeaderText;

  return _react2.default.createElement(
    'thead',
    null,
    _react2.default.createElement(
      'tr',
      { className: 'active' },
      _react2.default.createElement(
        'th',
        null,
        _react2.default.createElement(
          'h4',
          { className: 'text-center' },
          nameHeaderText
        )
      ),
      _react2.default.createElement(
        'th',
        null,
        _react2.default.createElement(
          'h4',
          { className: 'text-center' },
          valueHeaderText
        )
      )
    )
  );
};

// const tableRow = curry(({createTableRowComponent}, s) => createTableRowComponent(s));

var tableBody = function tableBody(p) {
  var settings = p.settings,
      createTableRowComponent = p.createTableRowComponent;

  return _react2.default.createElement(
    'tbody',
    null,
    settings.map(function (s) {
      return createTableRowComponent(s, p);
    })
  );
};

var SettingsTable = function SettingsTable(p) {
  var style = p.style,
      className = p.className;

  return _react2.default.createElement(
    'div',
    { style: style, className: (0, _classnames2.default)('SettingsTable', className) },
    _react2.default.createElement(
      'table',
      { className: 'table table-striped table-bordered table-hover' },
      tableHead(p),
      tableBody(p)
    )
  );
};

SettingsTable.propTypes = {
  style: _react.PropTypes.object,
  className: _react.PropTypes.string,
  nameHeaderText: _react.PropTypes.string,
  valueHeaderText: _react.PropTypes.string,
  settings: _react.PropTypes.arrayOf(_react.PropTypes.object).isRequired,
  createTableRowComponent: _react.PropTypes.func.isRequired
};

SettingsTable.defaultProps = {
  style: null,
  className: null,
  nameHeaderText: '',
  valueHeaderText: ''
};

exports.default = SettingsTable;

//# sourceMappingURL=index-compiled.js.map