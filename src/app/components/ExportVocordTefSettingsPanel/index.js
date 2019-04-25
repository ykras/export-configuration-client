'use strict';

import React, {PropTypes} from 'react';
import './ExportVocordTefSettingsPanel.css';
import {connect} from 'react-redux';
import classNames from 'classnames';
import TextInput from '../TextInput/index';
import ExportPathFormatLabel from '../ExportPathFormatLabel';
import Selector from '../Selector/index';
import UserCredentialsInput from '../UserCredentialsInput/index';
import Checkbox from '../Checkbox';
import localizedStrings, {localizeItems} from '../../localization';
import {capitalize, isNaN, toNumber, toString} from 'lodash';
import {curry, compose} from 'ramda';
import selectors from '../../store/selectors';
import actionCreators from '../../store/actions';
import requestTypes from '../../common/requestTypes';
import withDataRequest from '../../higher_order_components/withDataFetch/withDataRequest';
import withLoadingIndicator from '../../higher_order_components/withLoadingIndicator';
import {combineRequests} from '../../common/utils';
import videoExportModeNames from '../../common/videoExportModes';
import {baseUrl} from '../../api';
import Button from '../Button';

const handleSwitching = curry((handler, enabled) => handler(enabled));
const handleSelection = curry((handler, selectedItemId) => handler(selectedItemId));
const handleNumericParamEdit = curry((paramName, handler, currentSettings, newParamValue) => {
  const newSettings = {...currentSettings,
    [paramName]: isNaN(toNumber(newParamValue)) ? 0 : toNumber(newParamValue)};
  handler(newSettings);
});
const handleTextParamEdit = curry((paramName, handler, currentSettings, newParamValue) => {
  const newSettings = {...currentSettings,
    [paramName]: toString(newParamValue)};
  handler(newSettings);
});

const saveConfiguration = (exportTypeId, settings, requestUpdateSettings,
  selectedVideoExportMode, requestUpdateVideoExportMode,
  videoExportSettings, requestUpdateVideoExportSettings) => () => {
    requestUpdateSettings(baseUrl, settings);
    requestUpdateVideoExportMode(baseUrl, exportTypeId, selectedVideoExportMode.id);
    requestUpdateVideoExportSettings(baseUrl, exportTypeId, videoExportSettings);
  };

const ExportVocordTefSettingsPanel = ({style, className, exportTypeId,
  settings, updateSettings, requestUpdateSettings,
  videoExportModes, selectVideoExportMode, selectedVideoExportMode, requestUpdateVideoExportMode,
  videoExportSettings, updateVideoExportSettings, requestUpdateVideoExportSettings,
  toggleSpreadOutViolations}) => (
  <div style={style} className={classNames('ExportVocordTefSettingsPanel', className)}>
    <div className="container-fluid">
      <div className="row">
        <div className="col-md-4 vertical-bottom">
          <TextInput
            id="export-path-input"
            label={capitalize(localizedStrings.ExportPathLabel)}
            value={settings.exportBasePath}
            onTextChanged={handleTextParamEdit('exportBasePath', updateSettings, settings)}
            />
        </div>
        <div className="col-md-4 vertical-bottom form-group">
          <ExportPathFormatLabel/>
        </div>
      </div>
      <div className="row">
        <div className="col-md-4">
          <Selector
            id="export-video-selector"
            label={capitalize(localizedStrings.ExportVocordTefVideoLabel)}
            items={localizeItems(videoExportModes, capitalize)}
            selectedItemId={selectedVideoExportMode.id}
            selectItem={handleSelection(selectVideoExportMode)}
            />
        </div>
      </div>
      {selectedVideoExportMode.name !== videoExportModeNames.DoNotExport &&
        <div className="row">
          <div className="col-md-4">
            <TextInput
              id="video-seconds-before-check-time"
              label={capitalize(localizedStrings.VocordTefVideoSecondsBeforeCheckTime)}
              value={toString(videoExportSettings.videoSecondsBeforeCheckTime)}
              onTextChanged={handleNumericParamEdit('videoSecondsBeforeCheckTime', updateVideoExportSettings, videoExportSettings)}
              />
          </div>
        </div>}
      {selectedVideoExportMode.name !== videoExportModeNames.DoNotExport &&
        <div className="row">
          <div className="col-md-4">
            <TextInput
              id="video-seconds-after-check-time"
              label={capitalize(localizedStrings.VocordTefVideoSecondsAfterCheckTime)}
              value={toString(videoExportSettings.videoSecondsAfterCheckTime)}
              onTextChanged={handleNumericParamEdit('videoSecondsAfterCheckTime', updateVideoExportSettings, videoExportSettings)}
              />
          </div>
        </div>}
      {selectedVideoExportMode.name === videoExportModeNames.ExportSeparatelyFromVehicleData &&
        <div className="row">
          <div className="col-md-4">
            <TextInput
              id="video-export-path"
              label={capitalize(localizedStrings.VideoExportPathLabel)}
              value={videoExportSettings.videoExportPath}
              onTextChanged={handleTextParamEdit('videoExportPath', updateVideoExportSettings, videoExportSettings)}
              />
          </div>
        </div>}
      <div className="row">
        <div className="col-md-2">
          <UserCredentialsInput
            login={settings.login}
            onLoginChanged={handleTextParamEdit('login', updateSettings, settings)}
            password={settings.password}
            onPasswordChanged={handleTextParamEdit('password', updateSettings, settings)}
            />
        </div>
      </div>
      <div className="row">
        <div className="col-md-2">
          <Checkbox
            id="spread-violations-switch"
            label={capitalize(localizedStrings.SpreadOutViolationsLabel)}
            onChanged={handleSwitching(toggleSpreadOutViolations)}
            checked={settings.usePathTemplate}
            />
        </div>
      </div>
      {settings.usePathTemplate &&
        <div className="row">
          <div className="col-md-4">
            <TextInput
              id="export-folders-template"
              label={capitalize(localizedStrings.ExportFoldersFormatLabel)}
              value={settings.exportRelativePathTemplate}
              onTextChanged={handleTextParamEdit('exportRelativePathTemplate', updateSettings, settings)}
              />
          </div>
        </div>}
      <div className="row">
        <div className="col-xs-4 col-xs-offset-6 col-sm-2 col-sm-offset-10 col-md-1 col-md-offset-11">
          <Button
            id="apply-button"
            text={localizedStrings.Apply}
            onClick={saveConfiguration(exportTypeId, settings, requestUpdateSettings,
              selectedVideoExportMode, requestUpdateVideoExportMode,
              videoExportSettings, requestUpdateVideoExportSettings)}
            />
        </div>
      </div>
    </div>
  </div>
);

ExportVocordTefSettingsPanel.propTypes = {
  style: PropTypes.object,
  className: PropTypes.string,
  settings: PropTypes.shape({
    exportBasePath: PropTypes.string.isRequired,
    exportRelativePathTemplate: PropTypes.string,
    usePathTemplate: PropTypes.bool,
    login: PropTypes.string,
    password: PropTypes.string
  }).isRequired,
  updateSettings: PropTypes.func.isRequired,
  exportTypeId: PropTypes.string.isRequired,
  requestReadSettings: PropTypes.func.isRequired,
  readSettingsRequest: PropTypes.object.isRequired,
  requestUpdateSettings: PropTypes.func.isRequired,
  requestReadVideoExportModes: PropTypes.func.isRequired,
  readVideoExportModesRequest: PropTypes.object.isRequired,
  requestReadCurrentVideoExportMode: PropTypes.func.isRequired,
  readCurrentVideoExportModeRequest: PropTypes.object.isRequired,
  requestReadVideoExportSettings: PropTypes.func.isRequired,
  readVideoExportSettingsRequest: PropTypes.object.isRequired,
  requestUpdateVideoExportSettings: PropTypes.func.isRequired,
  videoExportModes: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string,
    name: PropTypes.string
  })).isRequired,
  selectedVideoExportMode: PropTypes.shape({
    id: PropTypes.string,
    name: PropTypes.string
  }).isRequired,
  selectVideoExportMode: PropTypes.func.isRequired,
  requestUpdateVideoExportMode: PropTypes.func.isRequired,
  videoExportSettings: PropTypes.shape({
    videoSecondsBeforeCheckTime: PropTypes.number,
    videoSecondsAfterCheckTime: PropTypes.number
  }).isRequired,
  updateVideoExportSettings: PropTypes.func.isRequired,
  toggleSpreadOutViolations: PropTypes.func.isRequired
};

ExportVocordTefSettingsPanel.defaultProps = {
  style: null,
  className: null
};

const mapStateToProps = state => ({
  settings: selectors.getVocordTefSettings(state),
  exportTypeId: selectors.getSelectedExportTypeId(state),
  readSettingsRequest: selectors.getRequest(state, requestTypes.ReadVocordTefSettings),
  readVideoExportModesRequest:
    selectors.getRequest(state, requestTypes.ReadVocordTefVideoExportModes),
  readCurrentVideoExportModeRequest:
    selectors.getRequest(state, requestTypes.ReadVocordTefCurrentVideoExportMode),
  readVideoExportSettingsRequest:
    selectors.getRequest(state, requestTypes.ReadVocordTefVideoExportSettings),
  videoExportModes: selectors.getVocordTefVideoExportModes(state),
  selectedVideoExportMode: selectors.getSelectedVocordTefVideoExportMode(state),
  videoExportSettings: selectors.getVocordTefVideoExportSettings(state)
});

const mapActionCreatorsToProps = {
  requestReadSettings: actionCreators.requestReadVocordTefSettings,
  updateSettings: actionCreators.updateVocordTefSettings,
  requestUpdateSettings: actionCreators.requestUpdateVocordTefSettings,
  requestReadVideoExportModes: actionCreators.requestReadVocordTefVideoExportModes,
  requestReadCurrentVideoExportMode: actionCreators.requestReadVocordTefCurrentVideoExportMode,
  selectVideoExportMode: actionCreators.selectVocordTefVideoExportMode,
  requestUpdateVideoExportMode: actionCreators.requestUpdateVocordTefCurrentVideoExportMode,
  updateVideoExportSettings: actionCreators.updateVocordTefVideoExportSettings,
  requestReadVideoExportSettings: actionCreators.requestReadVocordTefVideoExportSettings,
  requestUpdateVideoExportSettings: actionCreators.requestUpdateVocordTefVideoExportSettings,
  toggleSpreadOutViolations: actionCreators.toggleSpreadOutViolations
};

const selectDataRequest = p => ([
  {send: p.requestReadSettings},
  [{send: p.requestReadVideoExportModes, params: p.exportTypeId},
  {send: p.requestReadCurrentVideoExportMode, params: p.exportTypeId}],
  {send: p.requestReadVideoExportSettings, params: p.exportTypeId}
]);

const selectLoadingRequest = p => combineRequests(
  p.readSettingsRequest,
  p.readVideoExportModesRequest,
  p.readCurrentVideoExportModeRequest,
  p.readVideoExportSettingsRequest
);

const Panel = compose(
  withDataRequest(selectDataRequest),
  withLoadingIndicator(selectLoadingRequest, null)
)(ExportVocordTefSettingsPanel);

export default connect(mapStateToProps, mapActionCreatorsToProps)(Panel);
