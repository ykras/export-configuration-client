'use strict';

import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import './RoadSignEditor.css';
import classNames from 'classnames';
import selectors from '../../store/selectors';
import localizedStrings from '../../localization';
import {capitalize, toString, toNumber, isNaN} from 'lodash';
import {curry} from 'ramda';
import FileUploader from '../FileUploader';
import requestTypes from '../../common/requestTypes';
import TextInput from '../TextInput';
import Button from '../Button';

const handleEditingOf = curry((paramName, handler, currentRoadSign, newParamValue) => {
  const newRoadSign = {...currentRoadSign,
    [paramName]: isNaN(toNumber(newParamValue)) ? 0 : toNumber(newParamValue)};
  handler(newRoadSign);
});

const handleRectSelect = (handler, curRoadSign, rect) => () => {
  const newRoadSign = {
    ...curRoadSign,
    x: rect.x,
    y: rect.y,
    width: rect.w,
    height: rect.h
  };
  handler(newRoadSign);
};

const handleApply = (handler, roadSign) => () => handler(roadSign);

const RoadSignEditor = ({style, className, roadSign, uploadRoadSignFile,
  roadSignFileUploadStatus, onEdit, onApply, selectedRectangle}) => (
  <div style={style} className={classNames('RoadSignEditor', className)}>
    <div className="row">
      <div className="col-xs-12">
        {`${capitalize(localizedStrings.CollageRoadSignFile)}:`}
      </div>
    </div>
    <div className="row">
      <div className="col-xs-12">
        <FileUploader
          selectButtonText={capitalize(localizedStrings.SelectFileButtonText)}
          fileNamePlaceholder={capitalize(localizedStrings.SelectedFileNamePlaceholder)}
          uploadButtonText={capitalize(localizedStrings.UploadFileButtonText)}
          fileNameLabel={capitalize(localizedStrings.FileNameLabel)}
          fileSizeLabel={capitalize(localizedStrings.FileSizeLabel)}
          uploadFile={uploadRoadSignFile}
          fileUploadStatus={roadSignFileUploadStatus}
          style={{marginBottom: '10px'}}
          />
      </div>
    </div>
    <div className="row">
      <div className="col-xs-12">
        {`${capitalize(localizedStrings.CollageRoadSignPositionAndSize)}:`}
      </div>
    </div>
    <div className="row">
      <div className="col-xs-1">
        X:
      </div>
      <div className="col-xs-3">
        <TextInput
          id="x" value={toString(roadSign.x)}
          onTextChanged={handleEditingOf('x', onEdit, roadSign)}
          />
      </div>
      <div className="col-xs-1 col-xs-offset-1">
        Y:
      </div>
      <div className="col-xs-3">
        <TextInput
          id="srcY" value={toString(roadSign.y)}
          onTextChanged={handleEditingOf('y', onEdit, roadSign)}
          />
      </div>
      <div className="col-xs-1 col-xs-offset-1">
        <Button
          iconPath={require("../../images/select_rect.png")} style={{padding: 0}}
          disabled={selectedRectangle === null}
          onClick={handleRectSelect(onEdit, roadSign, selectedRectangle)}
          />
      </div>
    </div>
    <div className="row">
      <div className="col-xs-1">
        W:
      </div>
      <div className="col-xs-3">
        <TextInput
          id="srcW" value={toString(roadSign.width)}
          onTextChanged={handleEditingOf('width', onEdit, roadSign)}
          />
      </div>
      <div className="col-xs-1 col-xs-offset-1">
        H:
      </div>
      <div className="col-xs-3">
        <TextInput
          id="srcH" value={toString(roadSign.height)}
          onTextChanged={handleEditingOf('height', onEdit, roadSign)}
          />
      </div>
    </div>
    <div className="row">
      <div className="col-xs-4 col-xs-offset-7">
        <Button
          text={capitalize(localizedStrings.Apply)}
          disabled={!roadSign.stale}
          onClick={handleApply(onApply, roadSign)}
          />
      </div>
    </div>
  </div>
);

RoadSignEditor.propTypes = {
  style: PropTypes.object,
  className: PropTypes.string,
  roadSign: PropTypes.shape({
    x: PropTypes.number,
    y: PropTypes.number,
    width: PropTypes.number,
    height: PropTypes.number,
    filePath: PropTypes.string
  }).isRequired,
  selectedRectangle: PropTypes.shape({
    x: PropTypes.number,
    y: PropTypes.number,
    w: PropTypes.number,
    h: PropTypes.number
  }),
  uploadRoadSignFile: PropTypes.func,
  roadSignFileUploadStatus: PropTypes.string,
  onEdit: PropTypes.func,
  onApply: PropTypes.func
};

RoadSignEditor.defaultProps = {
  style: null,
  className: null,
  selectedRectangle: null,
  uploadRoadSignFile: () => {},
  roadSignFileUploadStatus: null,
  onEdit: () => {},
  onApply: () => {}
};

const mapStateToProps = state => {
  const roadSignFileUploadRequest = selectors.getRequest(state,
    requestTypes.uploadCollageRoadSignFile(selectors.getSelectedViolationTypeId(state)));
  return {
    selectedRectangle: selectors.getCollageSelectedRectangle(state),
    roadSignFileUploadStatus: roadSignFileUploadRequest ? roadSignFileUploadRequest.status : null
  };
};

export default connect(mapStateToProps)(RoadSignEditor);
