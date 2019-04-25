'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRedux = require('react-redux');

require('./OverviewPictureEditor.css');

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _ImageEditor = require('../ImageEditor');

var _ImageEditor2 = _interopRequireDefault(_ImageEditor);

var _withLoadingIndicator = require('../../higher_order_components/withLoadingIndicator');

var _withLoadingIndicator2 = _interopRequireDefault(_withLoadingIndicator);

var _withDataRequest = require('../../higher_order_components/withDataFetch/withDataRequest');

var _withDataRequest2 = _interopRequireDefault(_withDataRequest);

var _withDataRefresh = require('../../higher_order_components/withDataFetch/withDataRefresh');

var _withDataRefresh2 = _interopRequireDefault(_withDataRefresh);

var _actions = require('../../store/actions');

var _actions2 = _interopRequireDefault(_actions);

var _selectors = require('../../store/selectors');

var _selectors2 = _interopRequireDefault(_selectors);

var _requestTypes = require('../../common/requestTypes');

var _requestTypes2 = _interopRequireDefault(_requestTypes);

var _ramda = require('ramda');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var selectRequest = function selectRequest(props) {
  return {
    send: props.requestReadOverviewPicture,
    params: props.recognitionChannelId
  };
};

var andWithDataRefresh = (0, _withDataRefresh2.default)((0, _ramda.prop)('recognitionChannelId'), selectRequest);

var andWithLoadingIndicator = (0, _withLoadingIndicator2.default)((0, _ramda.prop)('readOverviewPictureRequest'), function () {
  return _react2.default.createElement(
    'div',
    { className: 'picture-height' },
    _react2.default.createElement('img', { className: 'centered', src: require("../../images/image_missing.png") })
  );
});

var Editor = (0, _ramda.compose)((0, _withDataRequest2.default)(selectRequest), andWithDataRefresh, andWithLoadingIndicator)(_ImageEditor2.default);

var OverviewPictureEditor = function OverviewPictureEditor(props) {
  var className = props.className,
      style = props.style;

  return _react2.default.createElement(
    'div',
    { style: style, className: (0, _classnames2.default)('OverviewPictureEditor', className) },
    _react2.default.createElement(Editor, _extends({}, props, { className: 'picture-height' }))
  );
};

OverviewPictureEditor.propTypes = {
  className: _react.PropTypes.string,
  style: _react.PropTypes.object,
  requestReadOverviewPicture: _react.PropTypes.func.isRequired,
  readOverviewPictureRequest: _react.PropTypes.object.isRequired,
  recognitionChannelId: _react.PropTypes.string.isRequired,
  imageDataUrl: _react.PropTypes.string,
  onRectangleSelected: _react.PropTypes.func.isRequired
};

OverviewPictureEditor.defaultProps = {
  className: null,
  style: null,
  imageDataUrl: null
};

var mapStateToProps = function mapStateToProps(state) {
  var recognitionChannelId = _selectors2.default.getSelectedRecognitionChannelId(state);
  return {
    recognitionChannelId: recognitionChannelId,
    readOverviewPictureRequest: _selectors2.default.getRequest(state, _requestTypes2.default.readOverviewPicture(recognitionChannelId)),
    imageDataUrl: _selectors2.default.getOverviewPictureDataUrl(state)
  };
};

var mapActionCreatorsToProps = {
  requestReadOverviewPicture: _actions2.default.requestReadOverviewPicture,
  onRectangleSelected: _actions2.default.updateOverviewPictureSelectedRectangle
};

exports.default = (0, _reactRedux.connect)(mapStateToProps, mapActionCreatorsToProps)(OverviewPictureEditor);

//# sourceMappingURL=index-compiled.js.map