'use strict';

import actionTypes from '../actionTypes';
// import {assoc} from 'ramda';

// export const exportEnabled = (state = {}, {type, payload}) => {
//   switch (type) {
//     case actionTypes.ReplaceExportEnabled:
//     case actionTypes.ToggleExportEnabled:
//       return assoc(payload.exportTypeId, payload.exportEnabled, state);
//     default:
//       return state;
//   }
// };

export const exportEnabled = (state = false, {type, payload}) => {
  switch (type) {
    case actionTypes.ReplaceExportEnabled:
    case actionTypes.ToggleExportEnabled:
      return payload.exportEnabled;
    default:
      return state;
  }
};

export const exportPotokPlusEnabled = (state = false, {type, payload}) => {
  switch (type) {
    case actionTypes.ReplaceExportPotokPlusEnabled:
    case actionTypes.ToggleExportPotokPlusEnabled:
      return payload.exportPotokPlusEnabled;
    default:
      return state;
  }
};

// export const repeatExportEnabled = (state = {}, {type, payload}) => {
//   switch (type) {
//     case actionTypes.ToggleRepeatExportEnabled:
//       return assoc(payload.exportTypeId, payload.repeatExportEnabled, state);
//     default:
//       return state;
//   }
// };

export const repeatExportEnabled = (state = false, {type, payload}) => {
  switch (type) {
    case actionTypes.ToggleRepeatExportEnabled:
      return payload.repeatExportEnabled;
    default:
      return state;
  }
};
