'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

require('./FileUploader.css');

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _Button = require('../Button');

var _Button2 = _interopRequireDefault(_Button);

var _statusTypes = require('../../common/statusTypes');

var _statusTypes2 = _interopRequireDefault(_statusTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var FileUploader = function (_Component) {
  _inherits(FileUploader, _Component);

  function FileUploader() {
    var _ref;

    _classCallCheck(this, FileUploader);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    var _this = _possibleConstructorReturn(this, (_ref = FileUploader.__proto__ || Object.getPrototypeOf(FileUploader)).call.apply(_ref, [this].concat(args)));

    _this.fileElem = undefined;
    _this.setFileElem = _this.setFileElem.bind(_this);
    _this.handleFileSelection = _this.handleFileSelection.bind(_this);
    _this.handleFileSelectionCancel = _this.handleFileSelectionCancel.bind(_this);
    _this.handleFileUploading = _this.handleFileUploading.bind(_this);
    _this.fileLoaded = _this.fileLoaded.bind(_this);
    _this.state = { file: null };
    return _this;
  }

  _createClass(FileUploader, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          style = _props.style,
          className = _props.className;
      var file = this.state.file;

      return _react2.default.createElement(
        'div',
        { style: style, className: (0, _classnames2.default)('FileUploader', className) },
        this.selectFileView(),
        file && this.uploadFileView()
      );
    }
  }, {
    key: 'selectFileView',
    value: function selectFileView() {
      var _props2 = this.props,
          selectButtonText = _props2.selectButtonText,
          fileNamePlaceholder = _props2.fileNamePlaceholder,
          fileUploadStatus = _props2.fileUploadStatus;
      var file = this.state.file;

      var uploading = fileUploadStatus === _statusTypes2.default.Pending;
      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
          'label',
          { className: 'btn btn-default btn-file', htmlFor: 'fileElem', disabled: uploading },
          selectButtonText
        ),
        _react2.default.createElement('input', { type: 'file', id: 'fileElem', accept: 'image/*', style: { display: 'none' }, onChange: this.handleFileSelection, disabled: uploading, ref: this.setFileElem }),
        file ? _react2.default.createElement(
          'span',
          { style: { marginLeft: '5px', color: uploading ? 'gray' : 'black' } },
          file.name
        ) : _react2.default.createElement(
          'span',
          { style: { color: 'gray', marginLeft: '5px' } },
          fileNamePlaceholder
        ),
        file && !uploading && _react2.default.createElement('img', { style: { marginLeft: '5px' }, src: require("../../images/remove.png"), onClick: this.handleFileSelectionCancel })
      );
    }
  }, {
    key: 'setFileElem',
    value: function setFileElem(elem) {
      this.fileElem = elem;
    }
  }, {
    key: 'sizeOf',
    value: function sizeOf(file) {
      return file.size > 1024 * 1024 ? Math.round(file.size * 100 / (1024 * 1024)) / 100 + ' MB' : Math.round(file.size * 100 / 1024) / 100 + ' KB';
    }
  }, {
    key: 'uploadFileView',
    value: function uploadFileView() {
      var _props3 = this.props,
          uploadButtonText = _props3.uploadButtonText,
          fileNameLabel = _props3.fileNameLabel,
          fileSizeLabel = _props3.fileSizeLabel,
          fileUploadStatus = _props3.fileUploadStatus;
      var file = this.state.file;

      var uploading = fileUploadStatus === _statusTypes2.default.Pending;
      return _react2.default.createElement(
        'div',
        { style: { marginTop: '5px' } },
        _react2.default.createElement(_Button2.default, { style: { marginBottom: '5px', display: 'inline' }, disabled: uploading, text: uploadButtonText, onClick: this.handleFileUploading }),
        uploading && _react2.default.createElement('img', { style: { marginLeft: '5px', width: '20px', height: '20px' }, src: require("../../images/loading.gif") }),
        _react2.default.createElement(
          'div',
          { style: { color: 'gray' } },
          fileNameLabel ? fileNameLabel + ': ' + file.name : '' + file.name
        ),
        _react2.default.createElement(
          'div',
          { style: { color: 'gray' } },
          fileSizeLabel ? fileSizeLabel + ': ' + this.sizeOf(file) : '' + this.sizeOf(file)
        )
      );
    }
  }, {
    key: 'handleFileSelection',
    value: function handleFileSelection(e) {
      var file = e.target.files[0];
      if (!file || file.type.split('/')[0] !== 'image') {
        return;
      }
      this.setState({ file: file });
    }
  }, {
    key: 'handleFileSelectionCancel',
    value: function handleFileSelectionCancel() {
      this.setState({ file: null });
      this.fileElem.value = '';
    }
  }, {
    key: 'handleFileUploading',
    value: function handleFileUploading() {
      var file = this.state.file;

      this.uploadFile(file);
    }
  }, {
    key: 'uploadFile',
    value: function uploadFile(file) {
      var reader = new FileReader();
      reader.onload = this.fileLoaded(file);
      reader.onerror = function (e) {
        console.error('Failed to read file \'' + file.name + '\'. Error code ' + e.target.error.code);
      };
      reader.readAsArrayBuffer(file);
    }
  }, {
    key: 'fileLoaded',
    value: function fileLoaded(file) {
      var uploadFile = this.props.uploadFile;

      return function (e) {
        var fileData = e.target.result;
        uploadFile({ fileName: file.name, fileType: file.type, fileData: fileData });
      };
    }
  }]);

  return FileUploader;
}(_react.Component);

FileUploader.propTypes = {
  style: _react.PropTypes.object,
  className: _react.PropTypes.string,
  selectButtonText: _react.PropTypes.string,
  fileNamePlaceholder: _react.PropTypes.string,
  uploadButtonText: _react.PropTypes.string,
  fileNameLabel: _react.PropTypes.string,
  fileSizeLabel: _react.PropTypes.string,
  uploadFile: _react.PropTypes.func,
  fileUploadStatus: _react.PropTypes.string
};

FileUploader.defaultProps = {
  style: null,
  className: null,
  selectButtonText: '',
  fileNamePlaceholder: '',
  uploadButtonText: '',
  fileNameLabel: '',
  fileSizeLabel: '',
  uploadFile: function uploadFile() {},
  fileUploadStatus: ''
};

exports.default = FileUploader;

//# sourceMappingURL=index-compiled.js.map