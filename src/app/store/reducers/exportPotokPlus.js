'use strict';

import actionTypes from '../actionTypes';

export const settings = (state = {}, {type, payload}) => {
  switch (type) {
    case actionTypes.ReplacePotokPlusSettings:
    case actionTypes.UpdatePotokPlusSettings:
      return payload.potokPlusSettings || state;
    default:
      return state;
  }
};
