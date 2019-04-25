'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

require('./OverviewPictureSizeLabel.css');

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

var OverviewPictureSizeLabel = function OverviewPictureSizeLabel(_ref) {
  var style = _ref.style,
      className = _ref.className,
      pictureSize = _ref.pictureSize;
  return _react2.default.createElement(
    'div',
    { style: style, className: (0, _classnames2.default)('OverviewPictureSizeLabel', className) },
    _react2.default.createElement(_PictureSizeLabel2.default, {
      size: pictureSize,
      sizeText: (0, _lodash.capitalize)(_localization2.default.OverviewPictureSizeLabel),
      sizeUnitText: _localization2.default.SizeInPixelsLabel
    })
  );
};

OverviewPictureSizeLabel.propTypes = {
  style: _react.PropTypes.object,
  className: _react.PropTypes.string,
  pictureSize: _react.PropTypes.object.isRequired
};

OverviewPictureSizeLabel.defaultProps = {
  style: null,
  className: null
};

var mapStateToProps = function mapStateToProps(state) {
  return {
    pictureSize: _selectors2.default.getOverviewPictureSize(state)
  };
};

exports.default = (0, _reactRedux.connect)(mapStateToProps, null)(OverviewPictureSizeLabel);

//# sourceMappingURL=index-compiled.js.map