'use strict';

import actionTypes from '../actionTypes';

export const statistic = (state = {}, {type, payload}) => {
  switch (type) {
    case actionTypes.ReplaceExportStatistic:
      return payload.exportStatistic || state;
    default:
      return state;
  }
};
