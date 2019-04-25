'use strict';

import actionTypes from '../actionTypes';
import {createRequestThunk, noop} from './common';
import api from '../../api';
import requestTypes from '../../common/requestTypes';
import {curry} from 'ramda';
import {find} from 'lodash';
import ids, {collageTrafficLightSettingId, collageRoadSignSettingId} from '../../store/identifiers';
import {collagePictureTypesToSettingIdsMap, collagePictureTypesToSettingNamesMap} from '../../common/collagePictureTypes';
import selectors from '../selectors';
import collageSettingTypes, {settingTypeIdsToSettingTypesMap} from '../../common/collageSettingTypes';
import foregroundCollageObjectTypes, {foregroundCollageObjectTypesToSettingTypeIdsMap}
  from '../../common/foregroundCollageObjectTypes';

const replaceForegroundCollageObjectTypes = ({foregroundObjectTypes, foregroundObjectTypeIds}) => ({
  type: actionTypes.ReplaceForegroundCollageObjectTypes,
  payload: {foregroundObjectTypes, foregroundObjectTypeIds}
});

const appendCollageSettingTypes = ({foregroundObjectTypes, foregroundObjectTypeIds}) => {
  const settingTypeIds = foregroundObjectTypeIds
    .map(id => foregroundCollageObjectTypesToSettingTypeIdsMap[foregroundObjectTypes[id].name])
    .filter(id => id);
  const settingTypes = {};
  settingTypeIds.forEach(id => {
    settingTypes[id] = {id, name: settingTypeIdsToSettingTypesMap[id]};
  });
  return {
    type: actionTypes.AppendCollageSettingTypes,
    payload: {settingTypes, settingTypeIds}
  };
};

export const requestReadForegroundCollageObjectTypes = createRequestThunk({
  request: api.readForegroundCollageObjectTypes,
  key: requestTypes.ReadForegroundCollageObjectTypes,
  success: [
    replaceForegroundCollageObjectTypes,
    appendCollageSettingTypes
  ]
});

export const updateCollageSelectedRectangle = selectedRectangle => ({
  type: actionTypes.UpdateCollageSelectedRectangle,
  payload: {selectedRectangle}
});

export const deleteCollageSelectedRectangle = () => ({
  type: actionTypes.DeleteCollageSelectedRectangle
});

const replaceCollage = collage => dispatch => {
  dispatch({
    type: actionTypes.ReplaceCollage,
    payload: {collage}
  });
  dispatch(deleteCollageSelectedRectangle());
};

export const requestReadCollage = createRequestThunk({
  request: api.readCollage,
  key: (_, violationTypeId) => requestTypes.readCollage(violationTypeId),
  success: [
    replaceCollage
  ]
});

const prependCollageSettingTypes = ({settingTypes, settingTypeIds}) => ({
  type: actionTypes.PrependCollageSettingTypes,
  payload: {settingTypes, settingTypeIds}
});

export const selectCollageSettingType = id => ({
  type: actionTypes.SelectCollageSettingType,
  payload: {id}
});

const selectFirstCollageSettingType = ({settingTypeIds}) =>
  settingTypeIds.length > 0 ? selectCollageSettingType(settingTypeIds[0]) : noop('No collage setting type to select');

export const requestReadCollageSettingTypes = createRequestThunk({
  request: api.readCollageSettingTypes,
  key: requestTypes.ReadCollageSettingTypes,
  success: [
    prependCollageSettingTypes,
    selectFirstCollageSettingType
  ]
});

export const replaceCollageVideoExportModes = ({videoExportModes, videoExportModeIds}) => ({
  type: actionTypes.ReplaceCollageVideoExportModes,
  payload: {videoExportModes, videoExportModeIds}
});

export const selectCollageVideoExportMode = id => (dispatch, getState) => {
  dispatch({
    type: actionTypes.SelectCollageVideoExportMode,
    payload: {id, name: getState().exportCollage.videoExportModes.byId[id].name}
  });
};

export const requestReadCollageVideoExportModes = createRequestThunk({
  request: api.readVideoExportModes,
  key: requestTypes.ReadCollageVideoExportModes,
  success: [
    replaceCollageVideoExportModes
  ]
});

export const requestReadCollageCurrentVideoExportMode = createRequestThunk({
  request: api.readCurrentVideoExportMode,
  key: requestTypes.ReadCollageCurrentVideoExportMode,
  success: [
    ({id}) => selectCollageVideoExportMode(id)
  ]
});

export const requestUpdateCollageCurrentVideoExportMode = createRequestThunk({
  request: api.updateCurrentVideoExportMode,
  key: requestTypes.UpdateCollageCurrentVideoExportMode
});

export const beginCollageEditing = settingId => ({
  type: actionTypes.BeginCollageEditing,
  payload: {settingId}
});

export const finishCollageEditing = settingId => ({
  type: actionTypes.FinishCollageEditing,
  payload: {settingId}
});

const replaceCollageVideoExportSettings = ({videoSecondsBeforeCheckTime, videoSecondsAfterCheckTime}) => ({
  type: actionTypes.ReplaceCollageVideoExportSettings,
  payload: {
    videoSecondsBeforeCheckTime,
    videoSecondsAfterCheckTime
  }
});

export const updateCollageVideoSecondsBeforeCheckTime = seconds => ({
  type: actionTypes.UpdateCollageVideoSecondsBeforeCheckTime,
  payload: {seconds}
});

export const updateCollageVideoSecondsAfterCheckTime = seconds => ({
  type: actionTypes.UpdateCollageVideoSecondsAfterCheckTime,
  payload: {seconds}
});

export const requestReadCollageVideoExportSettings = createRequestThunk({
  request: api.readVideoExportSettings,
  key: requestTypes.ReadCollageVideoExportSettings,
  success: [
    replaceCollageVideoExportSettings
  ]
});

export const requestUpdateCollageVideoExportSettings = createRequestThunk({
  request: api.updateVideoExportSettings,
  key: requestTypes.UpdateCollageVideoExportSettings
});

export const updateCollageDefaultFont = ({name, sizeInPoints}) => ({
  type: actionTypes.UpdateCollageDefaultFont,
  payload: {name, sizeInPoints}
});

export const requestReadCollageDefaultFont = createRequestThunk({
  request: api.readCollageDefaultFont,
  key: requestTypes.ReadCollageDefaultFont,
  success: [
    updateCollageDefaultFont
  ]
});

export const requestUpdateCollageDefaultFont = createRequestThunk({
  request: api.updateCollageDefaultFont,
  key: requestTypes.UpdateCollageDefaultFont
});

export const updateCollageSettingValueInheritance = curry((settingId, isSettingValueInherited) => ({
  type: actionTypes.UpdateCollageSettingValueInheritance,
  payload: {settingId, isSettingValueInherited}
}));

export const requestReadCollageDefaultFontPriority = createRequestThunk({
  request: api.readCollageDefaultFontPriority,
  key: requestTypes.ReadCollageDefaultFontPriority,
  success: [updateCollageSettingValueInheritance(ids.CollageViolationFontSettingId)]
});

export const requestUpdateCollageDefaultFontPriority = createRequestThunk({
  request: api.updateCollageDefaultFontPriority,
  key: requestTypes.UpdateCollageDefaultFontPriority
});

export const updateCollageExportPath = exportPath => ({
  type: actionTypes.UpdateCollageExportPath,
  payload: {exportPath}
});

export const requestReadCollageExportPath = createRequestThunk({
  request: api.readCollageExportPath,
  key: requestTypes.ReadCollageExportPath,
  success: [updateCollageExportPath]
});

export const requestUpdateCollageExportPath = createRequestThunk({
  request: api.updateCollageExportPath,
  key: requestTypes.UpdateCollageExportPath
});

export const updateCollageFont = font => (dispatch, getState) => {
  const violationTypeId = getState().ui.selectedViolationTypeId;
  dispatch({
    type: actionTypes.UpdateCollageFont,
    payload: {violationTypeId, font}
  });
};

export const requestReadCollageFont = createRequestThunk({
  request: api.readCollageFont,
  key: (_, violationTypeId) => requestTypes.readCollageFont(violationTypeId),
  success: [updateCollageFont]
});

export const requestUpdateCollageFont = createRequestThunk({
  request: api.updateCollageFont,
  key: (_, violationTypeId) => requestTypes.updateCollageFont(violationTypeId)
});

const collageFooterTemplateSettingId = (collagePictureType, violationTypeId) => {
  const settingId = collagePictureTypesToSettingIdsMap[collagePictureType];
  if (!settingId) {
    throw new Error(`Unknown collage picture type '${collagePictureType}'`);
  }
  return `${settingId}/${violationTypeId}`;
};

const replaceCollageFooterTemplates = ({footerTemplates, collagePictureTypes}) => (dispatch, getState) => {
  const violationTypeId = selectors.getSelectedViolationTypeId(getState());
  const settingTypes = selectors.getCollageSettingTypes(getState());
  const currentViolationSettingTypeId = find(settingTypes, t => t.name === collageSettingTypes.CurrentViolation).id;
  const collageFooterTemplates = collagePictureTypes.map(collagePictureType => {
    const id = collageFooterTemplateSettingId(collagePictureType, violationTypeId);
    return {
      id,
      typeId: currentViolationSettingTypeId,
      name: collagePictureTypesToSettingNamesMap[collagePictureType],
      value: footerTemplates[collagePictureType].footerLines,
      editorTypeId: ids.FooterTemplateEditorTypeId,
      isEditing: false
    };
  });
  const collageFooterTemplateIds = collagePictureTypes.map(collagePictureType =>
    collageFooterTemplateSettingId(collagePictureType, violationTypeId));
  dispatch({
    type: actionTypes.ReplaceCollageFooterTemplates,
    payload: {collageFooterTemplates, collageFooterTemplateIds}
  });
};

export const requestReadCollageFooterTemplates = createRequestThunk({
  request: api.readCollageFooterTemplates,
  key: (_, violationTypeId) => requestTypes.readCollageFooterTemplates(violationTypeId),
  success: [replaceCollageFooterTemplates]
});

export const requestUpdateCollageFooterTemplate = createRequestThunk({
  request: api.updateCollageFooterTemplate,
  key: (_, violationTypeId, {collagePictureType}) =>
    requestTypes.updateCollageFooterTemplate(violationTypeId, collagePictureType)
});

export const updateCollageFooterTemplate = ({footerLines, collagePictureType}) => (dispatch, getState) => {
  const violationTypeId = selectors.getSelectedViolationTypeId(getState());
  const footerTemplateSettingId = collageFooterTemplateSettingId(collagePictureType, violationTypeId);
  dispatch({
    type: actionTypes.UpdateCollageFooterTemplate,
    payload: {footerLines, footerTemplateSettingId}
  });
};

const addCollageTrafficLight = trafficLight => (dispatch, getState) => {
  const state = getState();
  const violationTypeId = selectors.getSelectedViolationTypeId(state);
  const trafficLightSettingId = collageTrafficLightSettingId(violationTypeId, trafficLight.id);
  const trafficLightSetting = {
    id: trafficLightSettingId,
    typeId: ids.CollageTrafficLightsSettingTypeId,
    name: foregroundCollageObjectTypes.TrafficLight,
    value: {...trafficLight},
    editorTypeId: ids.CollageTrafficLightEditorTypeId
  };
  dispatch({
    type: actionTypes.AddCollageTrafficLight,
    payload: {trafficLightSettingId, trafficLightSetting}
  });
};

export const requestCreateCollageTrafficLight = createRequestThunk({
  request: api.createCollageTrafficLight,
  key: (_, violationTypeId) =>
    requestTypes.createCollageTrafficLight(violationTypeId),
  success: [addCollageTrafficLight]
});

export const updateCollageSettingSelection = (settingId, settingSelected) => ({
  type: actionTypes.UpdateCollageSettingSelection,
  payload: {settingId, settingSelected}
});

export const deleteCollageSetting = settingId => ({
  type: actionTypes.DeleteCollageSetting,
  payload: {settingId}
});

const replaceCollageTrafficLights = ({trafficLights, trafficLightIds}) => (dispatch, getState) => {
  const state = getState();
  const violationTypeId = selectors.getSelectedViolationTypeId(state);
  const collageTrafficLights = trafficLightIds.map(tlId => {
    const id = collageTrafficLightSettingId(violationTypeId, tlId);
    return {
      id,
      typeId: ids.CollageTrafficLightsSettingTypeId,
      name: foregroundCollageObjectTypes.TrafficLight,
      value: {...trafficLights[tlId]},
      editorTypeId: ids.CollageTrafficLightEditorTypeId
    };
  });
  const collageTrafficLightIds = trafficLightIds.map(tlId =>
    collageTrafficLightSettingId(violationTypeId, tlId));
  dispatch({
    type: actionTypes.ReplaceCollageTrafficLights,
    payload: {collageTrafficLights, collageTrafficLightIds}
  });
};

export const requestReadCollageTrafficLights = createRequestThunk({
  request: api.readCollageTrafficLights,
  key: (_, violationTypeId) => requestTypes.readCollageTrafficLights(violationTypeId),
  success: [replaceCollageTrafficLights]
});

export const requestDeleteCollageTrafficLight = createRequestThunk({
  request: api.deleteCollageTrafficLight,
  key: (_, trafficLightId) =>
    requestTypes.deleteCollageTrafficLight(trafficLightId)
});

const replaceCollagePictureTypes = ({pictureTypes, pictureTypeIds}) => ({
  type: actionTypes.ReplaceCollagePictureTypes,
  payload: {pictureTypes, pictureTypeIds}
});

export const requestReadCollagePictureTypes = createRequestThunk({
  request: api.readCollagePictureTypes,
  key: requestTypes.ReadCollagePictureTypes,
  success: [replaceCollagePictureTypes]
});

export const updateCollageTrafficLight = (trafficLightSettingId, trafficLightSettingValue) => ({
  type: actionTypes.UpdateCollageTrafficLight,
  payload: {trafficLightSettingId, trafficLightSettingValue}
});

export const requestUpdateCollageTrafficLight = createRequestThunk({
  request: api.updateCollageTrafficLight,
  key: (_, trafficLightId) => requestTypes.updateCollageTrafficLight(trafficLightId)
});

const addCollageRoadSign = roadSign => (dispatch, getState) => {
  const state = getState();
  const violationTypeId = selectors.getSelectedViolationTypeId(state);
  const roadSignSettingId = collageRoadSignSettingId(violationTypeId, roadSign.id);
  const roadSignSetting = {
    id: roadSignSettingId,
    typeId: ids.CollageRoadSignsSettingTypeId,
    name: foregroundCollageObjectTypes.Sign,
    value: {...roadSign},
    editorTypeId: ids.CollageRoadSignEditorTypeId
  };
  dispatch({
    type: actionTypes.AddCollageRoadSign,
    payload: {roadSignSettingId, roadSignSetting}
  });
};

export const requestCreateCollageRoadSign = createRequestThunk({
  request: api.createCollageRoadSign,
  key: (_, violationTypeId) => requestTypes.createCollageRoadSign(violationTypeId),
  success: [addCollageRoadSign]
});

export const requestDeleteCollageRoadSign = createRequestThunk({
  request: api.deleteCollageRoadSign,
  key: (_, roadSignId) => requestTypes.deleteCollageRoadSign(roadSignId)
});

const replaceCollageRoadSigns = ({roadSigns, roadSignIds}) => (dispatch, getState) => {
  const state = getState();
  const violationTypeId = selectors.getSelectedViolationTypeId(state);
  const collageRoadSigns = roadSignIds.map(rsId => {
    const id = collageRoadSignSettingId(violationTypeId, rsId);
    return {
      id,
      typeId: ids.CollageRoadSignsSettingTypeId,
      name: foregroundCollageObjectTypes.Sign,
      value: {...roadSigns[rsId]},
      editorTypeId: ids.CollageRoadSignEditorTypeId,
      isSelected: selectors.isCollageSettingSelected(state, id)
    };
  });
  const collageRoadSignIds = roadSignIds.map(rsId =>
    collageRoadSignSettingId(violationTypeId, rsId));
  dispatch({
    type: actionTypes.ReplaceCollageRoadSigns,
    payload: {collageRoadSigns, collageRoadSignIds}
  });
};

export const requestReadCollageRoadSigns = createRequestThunk({
  request: api.readCollageRoadSigns,
  key: (_, violationTypeId) => requestTypes.readCollageRoadSigns(violationTypeId),
  success: [replaceCollageRoadSigns]
});

export const requestUploadCollageRoadSignFile = createRequestThunk({
  request: api.uploadCollageRoadSignFile,
  key: (_, violationTypeId) => requestTypes.uploadCollageRoadSignFile(violationTypeId)
});

export const updateCollageRoadSign = (roadSignSettingId, roadSignSettingValue) => ({
  type: actionTypes.UpdateCollageRoadSign,
  payload: {roadSignSettingId, roadSignSettingValue}
});

export const requestUpdateCollageRoadSign = createRequestThunk({
  request: api.updateCollageRoadSign,
  key: (_, roadSignId) => requestTypes.updateCollageRoadSign(roadSignId)
});

export const requestSaveCurrentCollageConfiguration = createRequestThunk({
  request: api.saveCurrentCollageConfiguration,
  key: requestTypes.SaveCurrentCollageConfiguration
});
