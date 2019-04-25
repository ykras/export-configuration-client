'use strict';

import actionTypes from '../actionTypes';
import {createRequestThunk} from './common';
import api from '../../api';
import requestTypes from '../../common/requestTypes';

export const replaceExportTypes = ({exportTypes, exportTypeIds}) => ({
  type: actionTypes.ReplaceExportTypes,
  payload: {exportTypes, exportTypeIds}
});

export const requestReadExportTypes = createRequestThunk({
  request: api.readExportTypes,
  key: requestTypes.ReadExportTypes,
  success: [replaceExportTypes]
});

export const selectExportType = id => ({
  type: actionTypes.SelectExportType,
  payload: {id}
});

export const requestReadSelectedExportTypeId = createRequestThunk({
  request: api.readSelectedExportTypeId,
  key: requestTypes.ReadSelectedExportTypeId,
  success: [selectExportType]
});

export const requestUpdateSelectedExportType = createRequestThunk({
  request: api.updateSelectedExportType,
  key: requestTypes.UpdateSelectedExportType
});
