'use strict';

import {curry, compose, find, propEq} from 'ramda';
import {startsWith} from 'lodash';
import ids, {collageRoadSignSettingIdPrefix} from '../identifiers';
import {getSelectedViolationTypeId} from './violationTypes';

export const getForegroundCollageObjectTypes = state =>
  state.exportCollage.foregroundObjectTypes.ids.map(id => state.exportCollage.foregroundObjectTypes.byId[id]);

const getSelectedForegroundCollageObjectTypeId = state => state.ui.selectedForegroundCollageObjectTypeId;

const getForegroundCollageObjectType = curry((state, id) =>
  state.exportCollage.foregroundObjectTypes.byId[id] || null);

export const getSelectedForegroundCollageObjectType = state => compose(
  getForegroundCollageObjectType(state),
  getSelectedForegroundCollageObjectTypeId
)(state);

export const getCollage = state => state.exportCollage.collage;

export const getCollageImage = state => {
  const collage = getCollage(state);
  return collage ? collage.imageBase64 : null;
};

export const getCollageSize = state => {
  const collage = getCollage(state);
  return collage ? {width: collage.widthInPixels, height: collage.heightInPixels} : {width: 0, height: 0};
};

export const getCollageRecognitionChannelIds = state => {
  const collage = getCollage(state);
  return collage ? collage.recognitionChannelIds : [];
};

export const getCollageSettingTypes = state =>
  state.exportCollage.settingTypes.ids.map(id => state.exportCollage.settingTypes.byId[id]);

export const getSelectedCollageSettingTypeId = state => state.ui.selectedCollageSettingTypeId;

const getCollageSettingType = curry((state, id) =>
  state.exportCollage.settingTypes.byId[id] || null);

export const getSelectedCollageSettingType = state => compose(
  getCollageSettingType(state),
  getSelectedCollageSettingTypeId
)(state);

export const getCollageSettings = state =>
  state.exportCollage.settings.ids.map(id => state.exportCollage.settings.byId[id]);

export const getCollageExportPath = state =>
  state.exportCollage.settings.byId[ids.CollageExportPathSettingId].value;

export const getCollageSetting = (state, id) =>
  id ? state.exportCollage.settings.byId[id] || null : null;

export const isCollageSettingSelected = (state, id) => {
  const collageSetting = getCollageSetting(state, id);
  return collageSetting ? collageSetting.isSelected : false;
};

export const getCollageVideoExportModes = state =>
  state.exportCollage.videoExportModes.ids.map(id => state.exportCollage.videoExportModes.byId[id]);

export const getSelectedCollageVideoExportModeId = state => state.ui.selectedCollageVideoExportModeId;

const getCollageVideoExportMode = curry((state, id) => state.exportCollage.videoExportModes.byId[id] || null);

export const getSelectedCollageVideoExportMode = state => compose(
  getCollageVideoExportMode(state),
  getSelectedCollageVideoExportModeId
)(state);

export const getCollageVideoExportSecondsBeforeCheckTime = state => {
  const setting = state.exportCollage.settings.byId[ids.VideoSecondsBeforeCheckTimeSettingId];
  return setting ? setting.value : null;
};

export const getCollageVideoExportSecondsAfterCheckTime = state => {
  const setting = state.exportCollage.settings.byId[ids.VideoSecondsAfterCheckTimeSettingId];
  return setting ? setting.value : null;
};

export const getCollageDefaultFont = state => {
  const setting = state.exportCollage.settings.byId[ids.CollageDefaultFontSettingId];
  return setting ? setting.value : null;
};

// const getCollageTrafficLights = state => {
//   const violationTypeId = getSelectedViolationTypeId(state);
//   const tlIdPrefix = collageTrafficLightSettingIdPrefix(violationTypeId);
//   return getCollageSettings(state).filter(s => startsWith(s.id, tlIdPrefix));
// };
//
// const getNumberOfCollageTrafficLights = state => getCollageTrafficLights(state).length;
//
// export const getNextCollageTrafficLightNumber = state => getNumberOfCollageTrafficLights(state) + 1;

export const getCollagePictureTypes = state =>
  state.exportCollage.pictureTypes.ids.map(id => state.exportCollage.pictureTypes.byId[id]);

export const getCollagePictureTypeId = curry((state, pictureTypeName) =>
  find(propEq('name', pictureTypeName))(getCollagePictureTypes(state)).id);

export const getCollagePictureTypeName = curry((state, pictureTypeId) =>
  find(propEq('id', pictureTypeId))(getCollagePictureTypes(state)).name);

export const getCollageSelectedRectangle = state => state.exportCollage.collageSelectedRectangle;

export const getCollageRoadSigns = state => {
  const violationTypeId = getSelectedViolationTypeId(state);
  const rsIdPrefix = collageRoadSignSettingIdPrefix(violationTypeId);
  return getCollageSettings(state).filter(s => startsWith(s.id, rsIdPrefix));
};
