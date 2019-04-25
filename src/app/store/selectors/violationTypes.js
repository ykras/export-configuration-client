'use strict';

import {curry, compose} from 'ramda';

export const getViolationTypes = state => state.violationTypes.ids.map(id => state.violationTypes.byId[id]);

export const getSelectedViolationTypeId = state => state.ui.selectedViolationTypeId;

const getViolationType = curry((state, id) => state.violationTypes.byId[id] || null);

export const getSelectedViolationType = state => compose(
  getViolationType(state),
  getSelectedViolationTypeId
)(state);
