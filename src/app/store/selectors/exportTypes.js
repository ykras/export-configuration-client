'use strict';

import {curry, compose} from 'ramda';

export const getExportTypes = state => state.exportTypes.ids.map(id => state.exportTypes.byId[id]);

export const getExportTypeIds = state => state.exportTypes.ids;

export const getSelectedExportTypeId = state => state.ui.selectedExportTypeId;

const getExportType = curry((state, id) => state.exportTypes.byId[id] || null);

export const getSelectedExportType = state => compose(
  getExportType(state),
  getSelectedExportTypeId
)(state);
