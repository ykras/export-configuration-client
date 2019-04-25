'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRedux = require('react-redux');

require('./RoadSignEditor.css');

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _selectors = require('../../store/selectors');

var _selectors2 = _interopRequireDefault(_selectors);

var _localization = require('../../localization');

var _localization2 = _interopRequireDefault(_localization);

var _lodash = require('lodash');

var _ramda = require('ramda');

var _FileUploader = require('../FileUploader');

var _FileUploader2 = _interopRequireDefault(_FileUploader);

var _requestTypes = require('../../common/requestTypes');

var _requestTypes2 = _interopRequireDefault(_requestTypes);

var _TextInput = require('../TextInput');

var _TextInput2 = _interopRequireDefault(_TextInput);

var _Button = require('../Button');

var _Button2 = _interopRequireDefault(_Button);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var handleEditingOf = (0, _ramda.curry)(function (paramName, handler, currentRoadSign, newParamValue) {
  var newRoadSign = _extends({}, currentRoadSign, _defineProperty({}, paramName, (0, _lodash.isNaN)((0, _lodash.toNumber)(newParamValue)) ? 0 : (0, _lodash.toNumber)(newParamValue)));
  handler(newRoadSign);
});

var handleRectSelect = function handleRectSelect(handler, curRoadSign, rect) {
  return function () {
    var newRoadSign = _extends({}, curRoadSign, {
      x: rect.x,
      y: rect.y,
      width: rect.w,
      height: rect.h
    });
    handler(newRoadSign);
  };
};

var handleApply = function handleApply(handler, roadSign) {
  return function () {
    return handler(roadSign);
  };
};

var RoadSignEditor = function RoadSignEditor(_ref) {
  var style = _ref.style,
      className = _ref.className,
      roadSign = _ref.roadSign,
      uploadRoadSignFile = _ref.uploadRoadSignFile,
      roadSignFileUploadStatus = _ref.roadSignFileUploadStatus,
      onEdit = _ref.onEdit,
      onApply = _ref.onApply,
      selectedRectangle = _ref.selectedRectangle;
  return _react2.default.createElement(
    'div',
    { style: style, className: (0, _classnames2.default)('RoadSignEditor', className) },
    _react2.default.createElement(
      'div',
      { className: 'row' },
      _react2.default.createElement(
        'div',
        { className: 'col-xs-12' },
        (0, _lodash.capitalize)(_localization2.default.CollageRoadSignFile) + ':'
      )
    ),
    _react2.default.createElement(
      'div',
      { className: 'row' },
      _react2.default.createElement(
        'div',
        { className: 'col-xs-12' },
        _react2.default.createElement(_FileUploader2.default, {
          selectButtonText: (0, _lodash.capitalize)(_localization2.default.SelectFileButtonText),
          fileNamePlaceholder: (0, _lodash.capitalize)(_localization2.default.SelectedFileNamePlaceholder),
          uploadButtonText: (0, _lodash.capitalize)(_localization2.default.UploadFileButtonText),
          fileNameLabel: (0, _lodash.capitalize)(_localization2.default.FileNameLabel),
          fileSizeLabel: (0, _lodash.capitalize)(_localization2.default.FileSizeLabel),
          uploadFile: uploadRoadSignFile,
          fileUploadStatus: roadSignFileUploadStatus,
          style: { marginBottom: '10px' }
        })
      )
    ),
    _react2.default.createElement(
      'div',
      { className: 'row' },
      _react2.default.createElement(
        'div',
        { className: 'col-xs-12' },
        (0, _lodash.capitalize)(_localization2.default.CollageRoadSignPositionAndSize) + ':'
      )
    ),
    _react2.default.createElement(
      'div',
      { className: 'row' },
      _react2.default.createElement(
        'div',
        { className: 'col-xs-1' },
        'X:'
      ),
      _react2.default.createElement(
        'div',
        { className: 'col-xs-3' },
        _react2.default.createElement(_TextInput2.default, {
          id: 'x', value: (0, _lodash.toString)(roadSign.x),
          onTextChanged: handleEditingOf('x', onEdit, roadSign)
        })
      ),
      _react2.default.createElement(
        'div',
        { className: 'col-xs-1 col-xs-offset-1' },
        'Y:'
      ),
      _react2.default.createElement(
        'div',
        { className: 'col-xs-3' },
        _react2.default.createElement(_TextInput2.default, {
          id: 'srcY', value: (0, _lodash.toString)(roadSign.y),
          onTextChanged: handleEditingOf('y', onEdit, roadSign)
        })
      ),
      _react2.default.createElement(
        'div',
        { className: 'col-xs-1 col-xs-offset-1' },
        _react2.default.createElement(_Button2.default, {
          iconPath: require("../../images/select_rect.png"), style: { padding: 0 },
          disabled: selectedRectangle === null,
          onClick: handleRectSelect(onEdit, roadSign, selectedRectangle)
        })
      )
    ),
    _react2.default.createElement(
      'div',
      { className: 'row' },
      _react2.default.createElement(
        'div',
        { className: 'col-xs-1' },
        'W:'
      ),
      _react2.default.createElement(
        'div',
        { className: 'col-xs-3' },
        _react2.default.createElement(_TextInput2.default, {
          id: 'srcW', value: (0, _lodash.toString)(roadSign.width),
          onTextChanged: handleEditingOf('width', onEdit, roadSign)
        })
      ),
      _react2.default.createElement(
        'div',
        { className: 'col-xs-1 col-xs-offset-1' },
        'H:'
      ),
      _react2.default.createElement(
        'div',
        { className: 'col-xs-3' },
        _react2.default.createElement(_TextInput2.default, {
          id: 'srcH', value: (0, _lodash.toString)(roadSign.height),
          onTextChanged: handleEditingOf('height', onEdit, roadSign)
        })
      )
    ),
    _react2.default.createElement(
      'div',
      { className: 'row' },
      _react2.default.createElement(
        'div',
        { className: 'col-xs-4 col-xs-offset-7' },
        _react2.default.createElement(_Button2.default, {
          text: (0, _lodash.capitalize)(_localization2.default.Apply),
          disabled: !roadSign.stale,
          onClick: handleApply(onApply, roadSign)
        })
      )
    )
  );
};

RoadSignEditor.propTypes = {
  style: _react.PropTypes.object,
  className: _react.PropTypes.string,
  roadSign: _react.PropTypes.shape({
    x: _react.PropTypes.number,
    y: _react.PropTypes.number,
    width: _react.PropTypes.number,
    height: _react.PropTypes.number,
    filePath: _react.PropTypes.string
  }).isRequired,
  selectedRectangle: _react.PropTypes.shape({
    x: _react.PropTypes.number,
    y: _react.PropTypes.number,
    w: _react.PropTypes.number,
    h: _react.PropTypes.number
  }),
  uploadRoadSignFile: _react.PropTypes.func,
  roadSignFileUploadStatus: _react.PropTypes.string,
  onEdit: _react.PropTypes.func,
  onApply: _react.PropTypes.func
};

RoadSignEditor.defaultProps = {
  style: null,
  className: null,
  selectedRectangle: null,
  uploadRoadSignFile: function uploadRoadSignFile() {},
  roadSignFileUploadStatus: null,
  onEdit: function onEdit() {},
  onApply: function onApply() {}
};

var mapStateToProps = function mapStateToProps(state) {
  var roadSignFileUploadRequest = _selectors2.default.getRequest(state, _requestTypes2.default.uploadCollageRoadSignFile(_selectors2.default.getSelectedViolationTypeId(state)));
  return {
    selectedRectangle: _selectors2.default.getCollageSelectedRectangle(state),
    roadSignFileUploadStatus: roadSignFileUploadRequest ? roadSignFileUploadRequest.status : null
  };
};

exports.default = (0, _reactRedux.connect)(mapStateToProps)(RoadSignEditor);

//# sourceMappingURL=index-compiled.js.map