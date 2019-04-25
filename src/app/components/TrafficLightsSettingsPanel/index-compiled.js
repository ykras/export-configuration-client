'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRedux = require('react-redux');

var _selectors = require('../../store/selectors');

var _selectors2 = _interopRequireDefault(_selectors);

var _actions = require('../../store/actions');

var _actions2 = _interopRequireDefault(_actions);

require('./TrafficLightsSettingsPanel.css');

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _RecognitionChannelSelector = require('../RecognitionChannelSelector');

var _RecognitionChannelSelector2 = _interopRequireDefault(_RecognitionChannelSelector);

var _OverviewPictureEditor = require('../OverviewPictureEditor');

var _OverviewPictureEditor2 = _interopRequireDefault(_OverviewPictureEditor);

var _requestTypes = require('../../common/requestTypes');

var _requestTypes2 = _interopRequireDefault(_requestTypes);

var _statusTypes = require('../../common/statusTypes');

var _statusTypes2 = _interopRequireDefault(_statusTypes);

var _OverviewPictureSizeLabel = require('../OverviewPictureSizeLabel');

var _OverviewPictureSizeLabel2 = _interopRequireDefault(_OverviewPictureSizeLabel);

var _OverviewPictureSelectedRectangleLabel = require('../OverviewPictureSelectedRectangleLabel');

var _OverviewPictureSelectedRectangleLabel2 = _interopRequireDefault(_OverviewPictureSelectedRectangleLabel);

var _TrafficLightSettingsTable = require('../TrafficLightSettingsTable');

var _TrafficLightSettingsTable2 = _interopRequireDefault(_TrafficLightSettingsTable);

var _withDataRequest = require('../../higher_order_components/withDataFetch/withDataRequest');

var _withDataRequest2 = _interopRequireDefault(_withDataRequest);

var _withDataRefresh = require('../../higher_order_components/withDataFetch/withDataRefresh');

var _withDataRefresh2 = _interopRequireDefault(_withDataRefresh);

var _ramda = require('ramda');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var TrafficLightsSettingsPanel = function TrafficLightsSettingsPanel(props) {
  var style = props.style,
      className = props.className,
      readOverviewPictureRequest = props.readOverviewPictureRequest;

  return _react2.default.createElement(
    'div',
    { style: style, className: (0, _classnames2.default)('TrafficLightsSettingsPanel', className) },
    _react2.default.createElement(
      'div',
      { className: 'container-fluid' },
      _react2.default.createElement(
        'div',
        { className: 'row' },
        _react2.default.createElement(
          'div',
          { className: 'col-sm-4' },
          _react2.default.createElement(_RecognitionChannelSelector2.default, _extends({ inline: true }, props))
        )
      ),
      _react2.default.createElement(
        'div',
        { className: 'row margin-top-10px' },
        _react2.default.createElement(
          'div',
          { className: 'col-sm-4' },
          readOverviewPictureRequest.status === _statusTypes2.default.Success && _react2.default.createElement(_OverviewPictureSizeLabel2.default, null)
        ),
        _react2.default.createElement(
          'div',
          { className: 'col-sm-5 text-right' },
          readOverviewPictureRequest.status === _statusTypes2.default.Success && _react2.default.createElement(_OverviewPictureSelectedRectangleLabel2.default, null)
        )
      ),
      _react2.default.createElement(
        'div',
        { className: 'row' },
        _react2.default.createElement(
          'div',
          { className: 'col-sm-9' },
          _react2.default.createElement(_OverviewPictureEditor2.default, null)
        ),
        _react2.default.createElement(
          'div',
          { className: 'col-sm-3' },
          readOverviewPictureRequest.status === _statusTypes2.default.Success && _react2.default.createElement(_TrafficLightSettingsTable2.default, null)
        )
      )
    )
  );
};

TrafficLightsSettingsPanel.propTypes = {
  style: _react.PropTypes.object,
  className: _react.PropTypes.string,
  recognitionChannels: _react.PropTypes.arrayOf(_react.PropTypes.shape({
    id: _react.PropTypes.string.isRequired,
    name: _react.PropTypes.string.isRequired
  })).isRequired,
  selectRecognitionChannel: _react.PropTypes.func.isRequired,
  readOverviewPictureRequest: _react.PropTypes.object.isRequired,
  requestReadTrafficLight: _react.PropTypes.func.isRequired,
  recognitionChannelId: _react.PropTypes.string.isRequired
};

TrafficLightsSettingsPanel.defaultProps = {
  style: null,
  className: null
};

var mapStateToProps = function mapStateToProps(state) {
  var recognitionChannelId = _selectors2.default.getSelectedRecognitionChannelId(state);
  return {
    recognitionChannels: _selectors2.default.getRecognitionChannels(state),
    readOverviewPictureRequest: _selectors2.default.getRequest(state, _requestTypes2.default.readOverviewPicture(recognitionChannelId)),
    recognitionChannelId: recognitionChannelId
  };
};

var selectRequest = function selectRequest(props) {
  return {
    send: props.requestReadTrafficLight,
    params: props.recognitionChannelId
  };
};

var Panel = (0, _ramda.compose)((0, _withDataRefresh2.default)((0, _ramda.prop)('recognitionChannelId'), selectRequest), (0, _withDataRequest2.default)(selectRequest))(TrafficLightsSettingsPanel);

exports.default = (0, _reactRedux.connect)(mapStateToProps, _actions2.default)(Panel);

//# sourceMappingURL=index-compiled.js.map