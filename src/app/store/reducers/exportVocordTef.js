'use strict';

import actionTypes from '../actionTypes';
import {assoc} from 'ramda';

export const settings = (state = {}, {type, payload}) => {
  switch (type) {
    case actionTypes.ReplaceVocordTefSettings:
    case actionTypes.UpdateVocordTefSettings:
      return payload.vocordTefSettings || state;
    case actionTypes.ToggleSpreadOutViolations:
      return assoc('usePathTemplate', payload.enabled, state);
    default:
      return state;
  }
};

export const videoExportSettings = (state = {}, {type, payload}) => {
  switch (type) {
    case actionTypes.ReplaceVocordTefVideoExportSettings:
    case actionTypes.UpdateVocordTefVideoExportSettings:
      return payload.videoExportSettings || state;
    default:
      return state;
  }
};

export const videoExportModes = {
  byId: (state = {}, {type, payload}) => {
    switch (type) {
      case actionTypes.ReplaceVocordTefVideoExportModes:
        return payload.videoExportModes || state;
      default:
        return state;
    }
  },
  ids: (state = [], {type, payload}) => {
    switch (type) {
      case actionTypes.ReplaceVocordTefVideoExportModes:
        return payload.videoExportModeIds || state;
      default:
        return state;
    }
  },
  selectedId: (state = null, {type, payload}) => {
    switch (type) {
      case actionTypes.SelectVocordTefVideoExportMode:
        return payload.id || state;
      default:
        return state;
    }
  }
};
