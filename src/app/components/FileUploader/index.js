'use strict';

import React, {Component, PropTypes} from 'react';
import './FileUploader.css';
import classNames from 'classnames';
import Button from '../Button';
import statusTypes from '../../common/statusTypes';

class FileUploader extends Component {
  constructor(...args) {
    super(...args);
    this.fileElem = undefined;
    this.setFileElem = this.setFileElem.bind(this);
    this.handleFileSelection = this.handleFileSelection.bind(this);
    this.handleFileSelectionCancel = this.handleFileSelectionCancel.bind(this);
    this.handleFileUploading = this.handleFileUploading.bind(this);
    this.fileLoaded = this.fileLoaded.bind(this);
    this.state = {file: null};
  }
  render() {
    const {style, className} = this.props;
    const {file} = this.state;
    return (
      <div style={style} className={classNames('FileUploader', className)}>
        {this.selectFileView()}
        {file && this.uploadFileView()}
      </div>
    );
  }

  selectFileView() {
    const {selectButtonText, fileNamePlaceholder, fileUploadStatus} = this.props;
    const {file} = this.state;
    const uploading = fileUploadStatus === statusTypes.Pending;
    return (
      <div>
        <label className="btn btn-default btn-file" htmlFor="fileElem" disabled={uploading}>{selectButtonText}</label>
        <input type="file" id="fileElem" accept="image/*" style={{display: 'none'}} onChange={this.handleFileSelection} disabled={uploading} ref={this.setFileElem}/>
        {file ? <span style={{marginLeft: '5px', color: uploading ? 'gray' : 'black'}}>{file.name}</span> :
          <span style={{color: 'gray', marginLeft: '5px'}}>{fileNamePlaceholder}</span>}
        {file && !uploading &&
          <img style={{marginLeft: '5px'}} src={require("../../images/remove.png")} onClick={this.handleFileSelectionCancel}/>}
      </div>
    );
  }

  setFileElem(elem) {
    this.fileElem = elem;
  }

  sizeOf(file) {
    return file.size > 1024 * 1024 ? `${Math.round(file.size * 100 / (1024 * 1024)) / 100} MB` :
      `${Math.round(file.size * 100 / 1024) / 100} KB`;
  }

  uploadFileView() {
    const {uploadButtonText, fileNameLabel, fileSizeLabel, fileUploadStatus} = this.props;
    const {file} = this.state;
    const uploading = fileUploadStatus === statusTypes.Pending;
    return (
      <div style={{marginTop: '5px'}}>
        <Button style={{marginBottom: '5px', display: 'inline'}} disabled={uploading} text={uploadButtonText} onClick={this.handleFileUploading}/>
        {uploading && <img style={{marginLeft: '5px', width: '20px', height: '20px'}} src={require("../../images/loading.gif")}/>}
        <div style={{color: 'gray'}}>{fileNameLabel ? `${fileNameLabel}: ${file.name}` : `${file.name}`}</div>
        <div style={{color: 'gray'}}>{fileSizeLabel ? `${fileSizeLabel}: ${this.sizeOf(file)}` : `${this.sizeOf(file)}`}</div>
      </div>
    );
  }

  handleFileSelection(e) {
    const file = e.target.files[0];
    if (!file || file.type.split('/')[0] !== 'image') {
      return;
    }
    this.setState({file});
  }

  handleFileSelectionCancel() {
    this.setState({file: null});
    this.fileElem.value = '';
  }

  handleFileUploading() {
    const {file} = this.state;
    this.uploadFile(file);
  }

  uploadFile(file) {
    const reader = new FileReader();
    reader.onload = this.fileLoaded(file);
    reader.onerror = e => {
      console.error(`Failed to read file '${file.name}'. Error code ${e.target.error.code}`);
    };
    reader.readAsArrayBuffer(file);
  }

  fileLoaded(file) {
    const {uploadFile} = this.props;
    return e => {
      const fileData = e.target.result;
      uploadFile({fileName: file.name, fileType: file.type, fileData});
    };
  }
}

FileUploader.propTypes = {
  style: PropTypes.object,
  className: PropTypes.string,
  selectButtonText: PropTypes.string,
  fileNamePlaceholder: PropTypes.string,
  uploadButtonText: PropTypes.string,
  fileNameLabel: PropTypes.string,
  fileSizeLabel: PropTypes.string,
  uploadFile: PropTypes.func,
  fileUploadStatus: PropTypes.string
};

FileUploader.defaultProps = {
  style: null,
  className: null,
  selectButtonText: '',
  fileNamePlaceholder: '',
  uploadButtonText: '',
  fileNameLabel: '',
  fileSizeLabel: '',
  uploadFile: () => {},
  fileUploadStatus: ''
};

export default FileUploader;
