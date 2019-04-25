'use strict';

import React, {Component, PropTypes} from 'react';
import './ExportCollageSettingsPanel.css';
import ViolationTypeSelector from '../ViolationTypeSelector';
import Selector from '../Selector';
import DropdownMenuButton from '../DropdownMenuButton';
import Button from '../Button';
import CollageEditor from '../CollageEditor';
import CollageSettingsTable from '../CollageSettingsTable';
import selectors from '../../store/selectors';
import actionCreators from '../../store/actions';
import {baseUrl} from '../../api';
import {connect} from 'react-redux';
import classNames from 'classnames';
import localizedStrings, {localizeItems} from '../../localization';
import {capitalize, includes, startsWith, isEmpty} from 'lodash';
import {combineRequests} from '../../common/utils';
import statusTypes from '../../common/statusTypes';
import requestTypes from '../../common/requestTypes';
import violationTypes from '../../common/violationTypes';
import foregroundObjects from '../../common/foregroundCollageObjectTypes';
import {curry, find, propEq, compose} from 'ramda';
import CollageSizeLabel from '../CollageSizeLabel';
import ids, {collageTrafficLightSettingIdPrefix, collageRoadSignSettingIdPrefix}
  from '../../store/identifiers';
import CollageSelectedRectangleLabel from '../CollageSelectedRectangleLabel';
import withDataRequest from '../../higher_order_components/withDataFetch/withDataRequest';
import withLoadingIndicator from '../../higher_order_components/withLoadingIndicator';

class ExportCollageSettingsPanel extends Component {
  constructor(...args) {
    super(...args);
    this.onForegroundObjectAdded = this.onForegroundObjectAdded.bind(this);
    this.addTrafficLight = this.addTrafficLight.bind(this);
    this.handleForegroundObjectsRemoving = this.handleForegroundObjectsRemoving.bind(this);
    this.handleSaveConfiguration = this.handleSaveConfiguration.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    const {
      selectedViolationType: curViolType,
      selectedCollageSettingTypeId: selectedSettingTypeId,
      selectCollageSettingType: selectSettingType
    } = this.props;
    const {selectedViolationType: nextViolType} = nextProps;
    if (curViolType && nextViolType && curViolType.id !== nextViolType.id) {
      const settingTypes = this.filterCollageSettingTypes(nextViolType.id);
      if (!find(propEq('id', selectedSettingTypeId))(settingTypes)) {
        selectSettingType(settingTypes[0].id);
      }
    }
  }

  render() {
    const {className, readCollageRequest, violationTypes, selectViolationType, selectedViolationType} = this.props;
    return (
      <div className={classNames('ExportCollageSettingsPanel', className)}>
        <div className="container-fluid">
          <div className="row">
            <div className="col-sm-4">
              <ViolationTypeSelector violationTypes={violationTypes} selectViolationType={selectViolationType} selectedViolationTypeId={selectedViolationType.id} inline/>
            </div>
            <div className="col-xs-6 col-sm-2 col-sm-offset-1 col-md-offset-3 col-md-1">
              {this.foregroundObjectAdditionComponent()}
            </div>
            <div className="col-xs-6 col-sm-2 col-md-1">
              {this.foregroundObjectRemovalComponent()}
            </div>
            <div className="col-sm-3">
              {this.settingTypeSelector()}
            </div>
          </div>
          <div className="row">
            <div className="col-sm-4">
              {readCollageRequest.status === statusTypes.Success && <CollageSizeLabel/>}
            </div>
            <div className="col-sm-5 text-right">
              {readCollageRequest.status === statusTypes.Success && <CollageSelectedRectangleLabel/>}
            </div>
          </div>
          <div className="row">
            <div className="col-sm-9">
              <CollageEditor/>
            </div>
            <div className="col-sm-3">
              <CollageSettingsTable/>
            </div>
          </div>
          <div className="row">
            <div className="col-sm-offset-11 col-sm-1">
              {this.saveConfigurationButton()}
            </div>
          </div>
        </div>
      </div>
    );
  }

  saveConfigurationButton() {
    const requests = [this.props.saveCurrentCollageConfigurationRequest,
      this.props.updateCollageCurrentVideoExportModeRequest,
      this.props.updateCollageVideoExportSettingsRequest,
      this.props.updateCollageExportPathRequest];
    const saveRequest = combineRequests(...requests);
    const savingStatus = requests.every(r => !isEmpty(r)) ? saveRequest.status : null;
    const savingInProgress = savingStatus === statusTypes.Pending;
    return (
      <div className="row">
        <div style={{paddingRight: 0}} className="col-xs-9, vertical-center">
          <Button
            disabled={savingInProgress}
            id="apply-button"
            text={localizedStrings.Apply}
            className="margin-top-10px pull-right"
            onClick={this.handleSaveConfiguration}
            />
        </div>
        {savingInProgress && <div className="col-xs-2 vertical-center">
          <img style={{width: '20px', marginTop: '7px'}} src={require("../../images/loading.gif")}/>
        </div>}
      </div>
    );
  }

  handleSaveConfiguration() {
    this.props.requestSaveCurrentCollageConfiguration(baseUrl);
    this.props.requestUpdateCollageCurrentVideoExportMode(baseUrl, this.props.exportTypeId, this.props.selectedVideoExportModeId);
    const videoExportSettings = {videoSecondsBeforeCheckTime: this.props.videoSecondsBeforeCheckTime,
      videoSecondsAfterCheckTime: this.props.videoSecondsAfterCheckTime};
    this.props.requestUpdateCollageVideoExportSettings(baseUrl, this.props.exportTypeId, videoExportSettings);
    this.props.requestUpdateCollageExportPath(baseUrl, this.props.collageExportPath);
  }

  onForegroundObjectAdded(objectTypeId) {
    const {foregroundObjectTypes} = this.props;
    const foregroundObjectType = find(propEq('id', objectTypeId))(foregroundObjectTypes);
    if (!foregroundObjectType) {
      throw new Error(`Cannot find foreground collage objects type by identifier '${objectTypeId}'`);
    }
    switch (foregroundObjectType.name) {
      case foregroundObjects.TrafficLight:
        this.addTrafficLight();
        break;
      case foregroundObjects.Sign:
        this.addRoadSign();
        break;
      default:
        throw new Error(`Unknown foreground collage objects type '${foregroundObjectType.name}'`);
    }
  }

  addTrafficLight() {
    const {requestCreateCollageTrafficLight, selectedViolationType,
      selectedCollageSettingTypeId, selectCollageSettingType} = this.props;
    requestCreateCollageTrafficLight(baseUrl, selectedViolationType.id)
      .then(() => {
        if (selectedCollageSettingTypeId !== ids.CollageTrafficLightsSettingTypeId) {
          selectCollageSettingType(ids.CollageTrafficLightsSettingTypeId);
        }
      });
  }

  addRoadSign() {
    const {requestCreateCollageRoadSign, selectedViolationType,
    selectedCollageSettingTypeId, selectCollageSettingType} = this.props;
    requestCreateCollageRoadSign(baseUrl, selectedViolationType.id)
      .then(() => {
        if (selectedCollageSettingTypeId !== ids.CollageRoadSignsSettingTypeId) {
          selectCollageSettingType(ids.CollageRoadSignsSettingTypeId);
        }
      });
  }

  foregroundObjectAdditionComponent() {
    const {foregroundObjectTypes, selectedViolationType} = this.props;
    const enabledBy = curry((violationTypeName, foregroundObjectType) => {
      switch (violationTypeName) {
        case violationTypes.StopLine:
        case violationTypes.RedLight:
          return foregroundObjectType.name === foregroundObjects.TrafficLight;
        case violationTypes.WrongLineTurn:
          return foregroundObjectType.name === foregroundObjects.Sign;
        default:
          return false;
      }
    });
    const enabledForegroundObjectTypes =
      foregroundObjectTypes.filter(enabledBy(selectedViolationType.name));
    return (
      <DropdownMenuButton
        id="add-object-menu"
        items={localizeItems(enabledForegroundObjectTypes, capitalize)}
        selectItem={this.onForegroundObjectAdded}
        text={capitalize(localizedStrings.AddForegroundCollageObject)}
        iconPath={require("../../images/add.png")}
        disabled={enabledForegroundObjectTypes.length < 1}
        />
    );
  }

  requestDeleteForegroundCollageObject(settingId) {
    const [foregroundObjectSettingId, , foregroundObjectId] = settingId.split('/');
    if (foregroundObjectSettingId === ids.CollageTrafficLightSettingId) {
      return this.deleteCollageTrafficLight(foregroundObjectId);
    }
    if (foregroundObjectSettingId === ids.CollageRoadSignSettingId) {
      return this.deleteCollageRoadSign(foregroundObjectId);
    }
    Promise.reject(new Error(`Unknown foreground collage object (settingId: ${settingId})`));
  }

  deleteCollageTrafficLight(trafficLightId) {
    const {requestDeleteCollageTrafficLight} = this.props;
    return requestDeleteCollageTrafficLight(baseUrl, trafficLightId);
  }

  deleteCollageRoadSign(roadSignId) {
    const {requestDeleteCollageRoadSign} = this.props;
    return requestDeleteCollageRoadSign(baseUrl, roadSignId);
  }

  handleForegroundObjectsRemoving() {
    const {
      collageSettings, deleteCollageSetting,
      selectedCollageSettingTypeId, collageSettingTypes,
      selectCollageSettingType, selectedViolationType: {id: violationTypeId},
      requestReadCollage
    } = this.props;
    const foregroundObjectsSettings = collageSettings
      .filter(s => startsWith(s.id, collageTrafficLightSettingIdPrefix(violationTypeId)) ||
                   startsWith(s.id, collageRoadSignSettingIdPrefix(violationTypeId)));
    Promise.all(foregroundObjectsSettings
      .filter(s => s.typeId === selectedCollageSettingTypeId)
      .filter(s => s.isSelected)
      .map(s => this.requestDeleteForegroundCollageObject(s.id)
        .then(() => deleteCollageSetting(s.id))
      ))
      .then(() => {
        if (!foregroundObjectsSettings
            .filter(s => s.typeId === selectedCollageSettingTypeId)
            .filter(s => !s.isSelected)
            .some(s => s.typeId === selectedCollageSettingTypeId)) {
          selectCollageSettingType(collageSettingTypes[0].id);
        }
      })
      .then(() => requestReadCollage(baseUrl, violationTypeId));
  }

  foregroundObjectRemovalComponent() {
    const {
      collageSettings: settings,
      selectedCollageSettingTypeId: settingTypeId,
      selectedViolationType: {id: violationTypeId}
    } = this.props;
    const noForegroundObjectsToRemove = !((settingTypeId === ids.CollageTrafficLightsSettingTypeId ||
      settingTypeId === ids.CollageRoadSignsSettingTypeId) && settings
        .filter(s => startsWith(s.id, collageTrafficLightSettingIdPrefix(violationTypeId)) ||
                  startsWith(s.id, collageRoadSignSettingIdPrefix(violationTypeId)))
        .some(s => s.isSelected));
    return (
      <Button
        id="remove-object-button"
        text={capitalize(localizedStrings.RemoveForegroundCollageObject)}
        iconPath={require("../../images/remove.png")}
        disabled={noForegroundObjectsToRemove}
        onClick={this.handleForegroundObjectsRemoving}
        />
    );
  }

  filterCollageSettingTypes(violationTypeId) {
    const {collageSettingTypes, collageSettings} = this.props;
    const settingTypes = collageSettingTypes.filter(type =>
      collageSettings.some(setting => setting.typeId === type.id &&
      (!includes(setting.id, '/') || includes(setting.id, violationTypeId))));
    return settingTypes;
  }

  settingTypeSelector() {
    const {selectCollageSettingType, selectedViolationType,
      selectedCollageSettingTypeId} = this.props;
    const settingTypes = this.filterCollageSettingTypes(selectedViolationType.id);
    return (
      <Selector
        id="settings-selector"
        items={localizeItems(settingTypes, capitalize)}
        selectedItemId={selectedCollageSettingTypeId}
        selectItem={selectCollageSettingType}
        />
    );
  }
}

ExportCollageSettingsPanel.propTypes = {
  violationTypes: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired
  })).isRequired,
  selectViolationType: PropTypes.func.isRequired,
  selectedViolationType: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired
  }),
  requestReadForegroundCollageObjectTypes: PropTypes.func.isRequired,
  readForegroundObjectTypesRequest: PropTypes.object.isRequired,
  foregroundObjectTypes: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired
  })).isRequired,
  requestReadCollageSettingTypes: PropTypes.func.isRequired,
  readCollageSettingTypesRequest: PropTypes.object.isRequired,
  collageSettingTypes: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired
  })).isRequired,
  selectedCollageSettingTypeId: PropTypes.string,
  collageSettings: PropTypes.arrayOf(PropTypes.object).isRequired,
  collageExportPath: PropTypes.string.isRequired,
  selectCollageSettingType: PropTypes.func.isRequired,
  requestReadCollageVideoExportModes: PropTypes.func.isRequired,
  readCollageVideoExportModesRequest: PropTypes.object.isRequired,
  requestReadCollageCurrentVideoExportMode: PropTypes.func.isRequired,
  readCollageCurrentVideoExportModeRequest: PropTypes.object.isRequired,
  exportTypeId: PropTypes.string.isRequired,
  className: PropTypes.string,
  requestCreateCollageTrafficLight: PropTypes.func.isRequired,
  deleteCollageSetting: PropTypes.func.isRequired,
  requestDeleteCollageTrafficLight: PropTypes.func.isRequired,
  requestReadCollage: PropTypes.func.isRequired,
  readCollageRequest: PropTypes.object.isRequired,
  requestCreateCollageRoadSign: PropTypes.func.isRequired,
  requestDeleteCollageRoadSign: PropTypes.func.isRequired,
  requestSaveCurrentCollageConfiguration: PropTypes.func.isRequired,
  saveCurrentCollageConfigurationRequest: PropTypes.object,
  requestReadCollagePictureTypes: PropTypes.func.isRequired,
  readCollagePictureTypesRequest: PropTypes.object.isRequired,
  requestUpdateCollageVideoExportSettings: PropTypes.func.isRequired,
  updateCollageVideoExportSettingsRequest: PropTypes.object.isRequired,
  videoSecondsBeforeCheckTime: PropTypes.number,
  videoSecondsAfterCheckTime: PropTypes.number,
  requestUpdateCollageCurrentVideoExportMode: PropTypes.func.isRequired,
  updateCollageCurrentVideoExportModeRequest: PropTypes.object.isRequired,
  selectedVideoExportModeId: PropTypes.string.isRequired,
  requestUpdateCollageExportPath: PropTypes.func.isRequired,
  updateCollageExportPathRequest: PropTypes.object.isRequired
};

ExportCollageSettingsPanel.defaultProps = {
  className: null
};

const mapStateToProps = state => ({
  violationTypes: selectors.getViolationTypes(state),
  selectedViolationType: selectors.getSelectedViolationType(state),
  readForegroundObjectTypesRequest: selectors.getRequest(state, requestTypes.ReadForegroundCollageObjectTypes),
  foregroundObjectTypes: selectors.getForegroundCollageObjectTypes(state),
  readCollageSettingTypesRequest: selectors.getRequest(state, requestTypes.ReadCollageSettingTypes),
  collageSettingTypes: selectors.getCollageSettingTypes(state),
  selectedCollageSettingTypeId: selectors.getSelectedCollageSettingTypeId(state),
  collageSettings: selectors.getCollageSettings(state),
  collageExportPath: selectors.getCollageExportPath(state),
  readCollageVideoExportModesRequest: selectors.getRequest(state, requestTypes.ReadCollageVideoExportModes),
  readCollageCurrentVideoExportModeRequest: selectors.getRequest(state, requestTypes.ReadCollageCurrentVideoExportMode),
  exportTypeId: selectors.getSelectedExportTypeId(state),
  readCollageRequest: selectors.getRequest(state, requestTypes.readCollage(selectors.getSelectedViolationTypeId(state))),
  saveCurrentCollageConfigurationRequest: selectors.getRequest(state, requestTypes.SaveCurrentCollageConfiguration),
  readCollagePictureTypesRequest: selectors.getRequest(state, requestTypes.ReadCollagePictureTypes),
  updateCollageVideoExportSettingsRequest: selectors.getRequest(state, requestTypes.UpdateCollageVideoExportSettings),
  videoSecondsBeforeCheckTime: selectors.getCollageVideoExportSecondsBeforeCheckTime(state),
  videoSecondsAfterCheckTime: selectors.getCollageVideoExportSecondsAfterCheckTime(state),
  updateCollageCurrentVideoExportModeRequest: selectors.getRequest(state, requestTypes.UpdateCollageCurrentVideoExportMode),
  selectedVideoExportModeId: selectors.getSelectedCollageVideoExportModeId(state),
  updateCollageExportPathRequest: selectors.getRequest(state, requestTypes.UpdateCollageExportPath)
});

const selectDataRequest = p => ([
  {send: p.requestReadForegroundCollageObjectTypes},
  {send: p.requestReadCollageSettingTypes},
  [{send: p.requestReadCollageVideoExportModes, params: p.exportTypeId},
    {send: p.requestReadCollageCurrentVideoExportMode, params: p.exportTypeId}],
  {send: p.requestReadCollagePictureTypes}
]);

const selectLoadingRequest = p => combineRequests(p.readForegroundObjectTypesRequest,
    p.readCollageSettingTypesRequest, p.readCollageVideoExportModesRequest,
    p.readCollageCurrentVideoExportModeRequest, p.readCollagePictureTypesRequest);

const Panel = compose(
  withDataRequest(selectDataRequest),
  withLoadingIndicator(selectLoadingRequest, null)
)(ExportCollageSettingsPanel);

export default connect(mapStateToProps, actionCreators)(Panel);
