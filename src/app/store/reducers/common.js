'use strict';

import {merge} from 'ramda';
import actionTypes from '../actionTypes';
import status from '../../common/statusTypes';

export const requests = (state = {}, {type, payload, meta}) => {
  switch (type) {
    case actionTypes.MarkRequestPending:
      return merge(state, {[meta.key]: {status: status.Pending, error: null}});
    case actionTypes.MarkRequestSucceeded:
      return merge(state, {[meta.key]: {status: status.Success, error: null}});
    case actionTypes.MarkRequestFailed:
      return merge(state, {[meta.key]: {status: status.Failure, error: payload}});
    default:
      return state;
  }
};

export const toast = (state = null, {type, payload}) => {
  switch (type) {
    case actionTypes.SetToast:
      return payload;
    case actionTypes.ClearToast:
      return null;
    default:
      return state;
  }
};
