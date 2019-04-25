'use strict';

import actionTypes from '../actionTypes';
import {createRequestThunk} from './common';
import api from '../../api';
import requestTypes from '../../common/requestTypes';
import settingNames from '../../common/trafficLightSettingNames';
import ids, {trafficLightSettingId} from '../../store/identifiers';

export const updateOverviewPictureSelectedRectangle = selectedRectangle => ({
  type: actionTypes.UpdateOverviewPictureSelectedRectangle,
  payload: {selectedRectangle}
});

export const deleteOverviewPictureSelectedRectangle = () => ({
  type: actionTypes.DeleteOverviewPictureSelectedRectangle
});

const replaceOverviewPicture = picture => dispatch => {
  dispatch({
    type: actionTypes.ReplaceOverviewPicture,
    payload: {picture}
  });
  dispatch(deleteOverviewPictureSelectedRectangle());
};

export const requestReadOverviewPicture = createRequestThunk({
  request: api.readOverviewPicture,
  key: (_, recognitionChannelId) => requestTypes.readOverviewPicture(recognitionChannelId),
  success: [replaceOverviewPicture],
  failure: [deleteOverviewPictureSelectedRectangle]
});

const replaceTrafficLight = ({id, value}) => {
  const settingId = trafficLightSettingId(id);
  const settingValue = {id: settingId, name: settingNames.TrafficLightSourcePositionAndSize,
    value, editorTypeId: ids.TrafficLightEditorTypeId, isEditing: false};
  return {
    type: actionTypes.ReplaceTrafficLight,
    payload: {settingId, settingValue}
  };
};

export const requestReadTrafficLight = createRequestThunk({
  request: api.readTrafficLight,
  key: (_, recognitionChannelId) => requestTypes.readTrafficLight(recognitionChannelId),
  success: [replaceTrafficLight]
});

export const beginTrafficLightEditing = settingId => ({
  type: actionTypes.BeginTrafficLightEditing,
  payload: {settingId}
});

export const finishTrafficLightEditing = settingId => ({
  type: actionTypes.FinishTrafficLightEditing,
  payload: {settingId}
});

export const updateTrafficLight = (settingId, settingValue) => ({
  type: actionTypes.UpdateTrafficLight,
  payload: {settingId, settingValue}
});

export const requestUpdateTrafficLight = createRequestThunk({
  request: api.updateTrafficLight,
  key: (_, recognitionChannelId) => requestTypes.updateTrafficLight(recognitionChannelId)
});
