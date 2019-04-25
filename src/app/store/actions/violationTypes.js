'use strict';

import actions from '../actionTypes';
import {createRequestThunk, noop} from './common';
import api from '../../api';
import requests from '../../common/requestTypes';

export const replaceViolationTypes = ({violationTypes, violationTypeIds}) => ({
  type: actions.ReplaceViolationTypes,
  payload: {violationTypes, violationTypeIds}
});

export const selectViolationType = id => ({
  type: actions.SelectViolationType,
  payload: {id}
});

export const selectFirstViolationType = ({violationTypeIds}) =>
  violationTypeIds.length > 0 ? selectViolationType(violationTypeIds[0]) : noop('No violation type to select');

export const requestReadViolationTypes = createRequestThunk({
  request: api.readViolationTypes,
  key: requests.ReadViolationTypes,
  success: [
    replaceViolationTypes,
    selectFirstViolationType
  ]
});
