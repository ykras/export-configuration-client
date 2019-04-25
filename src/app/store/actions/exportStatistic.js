'use strict';

import actionTypes from '../actionTypes';
import {createRequestThunk} from './common';
import api from '../../api';
import requestTypes from '../../common/requestTypes';

export const replaceExportStatistic = exportStatistic => ({
  type: actionTypes.ReplaceExportStatistic,
  payload: {exportStatistic}
});

export const requestReadExportStatistic = createRequestThunk({
  request: api.readExportStatistic,
  key: requestTypes.ReadExportStatistic,
  success: [replaceExportStatistic]
});
