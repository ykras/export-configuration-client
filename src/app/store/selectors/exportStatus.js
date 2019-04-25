'use strict';

export const getExportEnabled = (exportTypeId, state) => state.exportStatus.exportEnabled;

export const getRepeatExportEnabled = (exportTypeId, state) => state.exportStatus.repeatExportEnabled;

export const getExportPotokPlusEnabled = state => state.exportStatus.exportPotokPlusEnabled;

