'use strict';

import actionTypes from '../actionTypes';
import {union, assocPath} from 'ramda';

export const overviewPicture = (state = null, {type, payload}) => {
  switch (type) {
    case actionTypes.ReplaceOverviewPicture:
      return payload.picture || state;
    default:
      return state;
  }
};

export const overviewPictureSelectedRectangle = (state = null, {type, payload}) => {
  switch (type) {
    case actionTypes.UpdateOverviewPictureSelectedRectangle:
      return payload.selectedRectangle || state;
    case actionTypes.DeleteOverviewPictureSelectedRectangle:
      return null;
    default:
      return state;
  }
};

export const settings = {
  ids: (state = [], {type, payload}) => {
    switch (type) {
      case actionTypes.ReplaceTrafficLight:
        return union(state, [payload.settingId]);
      default:
        return state;
    }
  },
  byId: (state = {}, {type, payload}) => {
    switch (type) {
      case actionTypes.ReplaceTrafficLight:
        return assocPath([payload.settingId], payload.settingValue, state);
      case actionTypes.BeginTrafficLightEditing:
        return assocPath([payload.settingId, 'isEditing'], true, state);
      case actionTypes.FinishTrafficLightEditing:
        return assocPath([payload.settingId, 'isEditing'], false, state);
      case actionTypes.UpdateTrafficLight:
        return assocPath([payload.settingId, 'value'], payload.settingValue, state);
      default:
        return state;
    }
  }
};
