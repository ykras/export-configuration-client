'use strict';

import actionTypes from '../actionTypes';
import {createRequestThunk} from './common';
import api from '../../api';
import requestTypes from '../../common/requestTypes';

const replaceVocordTefSettings = vocordTefSettings => ({
  type: actionTypes.ReplaceVocordTefSettings,
  payload: {vocordTefSettings}
});

export const toggleSpreadOutViolations = enabled => ({
  type: actionTypes.ToggleSpreadOutViolations,
  payload: {enabled}
});

export const requestReadVocordTefSettings = createRequestThunk({
  request: api.readVocordTefSettings,
  key: requestTypes.ReadVocordTefSettings,
  success: [
    replaceVocordTefSettings
  ]
});

export const updateVocordTefSettings = vocordTefSettings => ({
  type: actionTypes.UpdateVocordTefSettings,
  payload: {vocordTefSettings}
});

export const requestUpdateVocordTefSettings = createRequestThunk({
  request: api.updateVocordTefSettings,
  key: requestTypes.UpdateVocordTefSettings
});

export const replaceVocordTefVideoExportModes = ({videoExportModes, videoExportModeIds}) => ({
  type: actionTypes.ReplaceVocordTefVideoExportModes,
  payload: {videoExportModes, videoExportModeIds}
});

export const selectVocordTefVideoExportMode = id => (dispatch, getState) => {
  dispatch({
    type: actionTypes.SelectVocordTefVideoExportMode,
    payload: {id, name: getState().exportVocordTef.videoExportModes.byId[id].name}
  });
};

export const requestReadVocordTefVideoExportModes = createRequestThunk({
  request: api.readVideoExportModes,
  key: requestTypes.ReadVocordTefVideoExportModes,
  success: [
    replaceVocordTefVideoExportModes
  ]
});

export const requestReadVocordTefCurrentVideoExportMode = createRequestThunk({
  request: api.readCurrentVideoExportMode,
  key: requestTypes.ReadVocordTefCurrentVideoExportMode,
  success: [
    ({id}) => selectVocordTefVideoExportMode(id)
  ]
});

export const requestUpdateVocordTefCurrentVideoExportMode = createRequestThunk({
  request: api.updateCurrentVideoExportMode,
  key: requestTypes.UpdateVocordTefCurrentVideoExportMode
});

export const replaceVocordTefVideoExportSettings = videoExportSettings => ({
  type: actionTypes.ReplaceVocordTefVideoExportSettings,
  payload: {videoExportSettings}
});

export const requestReadVocordTefVideoExportSettings = createRequestThunk({
  request: api.readVideoExportSettings,
  key: requestTypes.ReadVocordTefVideoExportSettings,
  success: [replaceVocordTefVideoExportSettings]
});

export const updateVocordTefVideoExportSettings = videoExportSettings => ({
  type: actionTypes.UpdateVocordTefVideoExportSettings,
  payload: {videoExportSettings}
});

export const requestUpdateVocordTefVideoExportSettings = createRequestThunk({
  request: api.updateVideoExportSettings,
  key: requestTypes.UpdateVocordTefVideoExportSettings
});
