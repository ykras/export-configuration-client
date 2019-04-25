'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

require('./CollageSizeLabel.css');

var _reactRedux = require('react-redux');

var _selectors = require('../../store/selectors');

var _selectors2 = _interopRequireDefault(_selectors);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _localization = require('../../localization');

var _localization2 = _interopRequireDefault(_localization);

var _lodash = require('lodash');

var _PictureSizeLabel = require('../PictureSizeLabel');

var _PictureSizeLabel2 = _interopRequireDefault(_PictureSizeLabel);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var CollageSizeLabel = function CollageSizeLabel(_ref) {
  var style = _ref.style,
      className = _ref.className,
      collageSize = _ref.collageSize;
  return _react2.default.createElement(
    'div',
    { style: style, className: (0, _classnames2.default)('CollageSizeLabel', className) },
    _react2.default.createElement(_PictureSizeLabel2.default, {
      size: collageSize,
      sizeText: (0, _lodash.capitalize)(_localization2.default.CollageSizeLabel),
      sizeUnitText: _localization2.default.SizeInPixelsLabel
    })
  );
};

CollageSizeLabel.propTypes = {
  style: _react.PropTypes.object,
  className: _react.PropTypes.string,
  collageSize: _react.PropTypes.object.isRequired
};

CollageSizeLabel.defaultProps = {
  style: null,
  className: null
};

var mapStateToProps = function mapStateToProps(state) {
  return {
    collageSize: _selectors2.default.getCollageSize(state)
  };
};

exports.default = (0, _reactRedux.connect)(mapStateToProps, null)(CollageSizeLabel);

//# sourceMappingURL=index-compiled.js.map