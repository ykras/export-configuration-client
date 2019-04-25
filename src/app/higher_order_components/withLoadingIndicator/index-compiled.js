'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _ramda = require('ramda');

var _statusTypes = require('../../common/statusTypes');

var _statusTypes2 = _interopRequireDefault(_statusTypes);

var _Alert = require('../../components/Alert');

var _errorMessages = require('../../common/errorMessages');

var _reactSpinjs = require('react-spinjs');

var _reactSpinjs2 = _interopRequireDefault(_reactSpinjs);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var showLoadingIndicator = function showLoadingIndicator() {
  return _react2.default.createElement(
    'div',
    { className: (0, _classnames2.default)('loading-indicator', 'picture-height') },
    _react2.default.createElement(_reactSpinjs2.default, null)
  );
};

var withLoadingIndicator = (0, _ramda.curry)(function (selectRequest, showLoadingError, LoadingSuccessComponent) {
  return function (props) {
    var request = selectRequest(props);
    switch (request.status) {
      case _statusTypes2.default.Success:
        return _react2.default.createElement(LoadingSuccessComponent, props);
      case _statusTypes2.default.Failure:
        return showLoadingError ? showLoadingError(request.error) : (0, _Alert.showError)((0, _errorMessages.requestErrorMessage)(request.error));
      default:
        return showLoadingIndicator();
    }
  };
});

exports.default = withLoadingIndicator;

//# sourceMappingURL=index-compiled.js.map