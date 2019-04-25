'use strict';

export const getExportStatistic = state => state.exportStatistic;

export const getExportSucceeded = state => state.exportStatistic.succeeded;

export const getExportErrorCode = state => state.exportStatistic.errorCode;

export const getExportErrorCategory = state => state.exportStatistic.errorCategory;

export const getLastExportTryStartTime = state => state.exportStatistic.lastExportTryStartTime;

export const getLastSuccessfulExportTryEndTime = state => state.exportStatistic.lastSuccessfulExportTryEndTime;

export const getLastExportedViolationTime = state => state.exportStatistic.lastExportedViolationTime;
