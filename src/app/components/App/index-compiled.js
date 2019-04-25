'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRedux = require('react-redux');

require('./App.css');

var _ExportConfigTabs = require('../ExportConfigTabs');

var _ExportConfigTabs2 = _interopRequireDefault(_ExportConfigTabs);

var _actions = require('../../store/actions');

var _actions2 = _interopRequireDefault(_actions);

var _selectors = require('../../store/selectors');

var _selectors2 = _interopRequireDefault(_selectors);

var _requestTypes = require('../../common/requestTypes');

var _requestTypes2 = _interopRequireDefault(_requestTypes);

var _utils = require('../../common/utils');

var _withDataRequest = require('../../higher_order_components/withDataFetch/withDataRequest');

var _withDataRequest2 = _interopRequireDefault(_withDataRequest);

var _withLoadingIndicator = require('../../higher_order_components/withLoadingIndicator');

var _withLoadingIndicator2 = _interopRequireDefault(_withLoadingIndicator);

var _ramda = require('ramda');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var App = function App() {
  return _react2.default.createElement(
    'div',
    { className: 'App' },
    _react2.default.createElement(
      'div',
      { className: 'container-fluid' },
      _react2.default.createElement(
        'div',
        { className: 'row' },
        _react2.default.createElement(
          'div',
          { className: 'col-md-12' },
          _react2.default.createElement(_ExportConfigTabs2.default, null)
        )
      )
    )
  );
};

App.propTypes = {
  requestReadExportTypes: _react.PropTypes.func.isRequired,
  readExportTypesRequest: _react.PropTypes.object.isRequired,
  requestReadViolationTypes: _react.PropTypes.func.isRequired,
  readViolationTypesRequest: _react.PropTypes.object.isRequired,
  requestReadRecognitionChannels: _react.PropTypes.func.isRequired,
  readRecognitionChannelsRequest: _react.PropTypes.object.isRequired
};

var mapStateToProps = function mapStateToProps(state) {
  return {
    readExportTypesRequest: _selectors2.default.getRequest(state, _requestTypes2.default.ReadExportTypes),
    readViolationTypesRequest: _selectors2.default.getRequest(state, _requestTypes2.default.ReadViolationTypes),
    readRecognitionChannelsRequest: _selectors2.default.getRequest(state, _requestTypes2.default.ReadRecognitionChannels)
  };
};

var selectDataRequest = function selectDataRequest(p) {
  return [{ send: p.requestReadExportTypes }, { send: p.requestReadViolationTypes }, { send: p.requestReadRecognitionChannels }];
};

var selectLoadingRequest = function selectLoadingRequest(p) {
  return (0, _utils.combineRequests)(p.readExportTypesRequest, p.readViolationTypesRequest, p.readRecognitionChannelsRequest);
};

var app = (0, _ramda.compose)((0, _withDataRequest2.default)(selectDataRequest), (0, _withLoadingIndicator2.default)(selectLoadingRequest, null))(App);

exports.default = (0, _reactRedux.connect)(mapStateToProps, _actions2.default)(app);

//# sourceMappingURL=index-compiled.js.map