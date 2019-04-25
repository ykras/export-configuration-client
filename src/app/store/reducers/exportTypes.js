'use strict';

import actionTypes from '../actionTypes';

export const byId = (state = {}, {type, payload}) => {
  switch (type) {
    case actionTypes.ReplaceExportTypes:
      return payload.exportTypes || state;
    default:
      return state;
  }
};

export const ids = (state = [], {type, payload}) => {
  switch (type) {
    case actionTypes.ReplaceExportTypes:
      return payload.exportTypeIds;
    default:
      return state;
  }
};

export const selectedExportTypeId = (state = null, {type, payload}) => {
  switch (type) {
    case actionTypes.SelectExportType:
      return payload.id;
    default:
      return state;
  }
};
