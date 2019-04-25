'use strict';

import actionTypes from '../actionTypes';
import api from '../../api';
import {createRequestThunk} from './common';
import requestTypes from '../../common/requestTypes';

const replaceExportEnabled = ({exportTypeId, exportEnabled}) => ({
  type: actionTypes.ReplaceExportEnabled,
  payload: {exportTypeId, exportEnabled}
});

export const requestReadExportEnabled = createRequestThunk({
  request: api.readExportEnabled,
  key: (_, exportTypeId) => requestTypes.readExportEnabled(exportTypeId),
  success: [replaceExportEnabled]
});

export const requestUpdateExportEnabled = createRequestThunk({
  request: api.updateExportEnabled,
  key: (_, exportTypeId) => requestTypes.updateExportEnabled(exportTypeId)
});

export const toggleExportEnabled = (exportTypeId, exportEnabled) => ({
  type: actionTypes.ToggleExportEnabled,
  payload: {exportTypeId, exportEnabled}
});

const replaceExportPotokPlusEnabled = exportPotokPlusEnabled => ({
  type: actionTypes.ReplaceExportPotokPlusEnabled,
  payload: {exportPotokPlusEnabled}
});

export const requestReadExportPotokPlusEnabled = createRequestThunk({
  request: api.readExportPotokPlusEnabled,
  key: requestTypes.ReadExportPotokPlusEnabled,
  success: [replaceExportPotokPlusEnabled]
});

export const requestUpdateExportPotokPlusEnabled = createRequestThunk({
  request: api.updateExportPotokPlusEnabled,
  key: requestTypes.UpdateExportPotokPlusEnabled
});

export const toggleExportPotokPlusEnabled = exportPotokPlusEnabled => ({
  type: actionTypes.ToggleExportPotokPlusEnabled,
  payload: {exportPotokPlusEnabled}
});

export const toggleRepeatExportEnabled = (exportTypeId, repeatExportEnabled) => ({
  type: actionTypes.ToggleRepeatExportEnabled,
  payload: {exportTypeId, repeatExportEnabled}
});

export const requestRepeatExport = createRequestThunk({
  request: api.repeatExport,
  key: (_, exportTypeId) => requestTypes.repeatExport(exportTypeId)
});
