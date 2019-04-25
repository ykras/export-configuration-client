'use strict';

import actions from '../actionTypes';

export const byId = (state = {}, {type, payload}) => {
  switch (type) {
    case actions.ReplaceViolationTypes:
      return payload.violationTypes || state;
    default:
      return state;
  }
};

export const ids = (state = [], {type, payload}) => {
  switch (type) {
    case actions.ReplaceViolationTypes:
      return payload.violationTypeIds || state;
    default:
      return state;
  }
};

export const selectedViolationTypeId = (state = null, {type, payload}) => {
  switch (type) {
    case actions.SelectViolationType:
      return payload.id || state;
    default:
      return state;
  }
};
