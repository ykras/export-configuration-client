'use strict';

import {v4} from 'uuid';
import actionTypes from '../actionTypes';

const markRequestPending = key => ({
  type: actionTypes.MarkRequestPending,
  meta: {key}
});

const markRequestSucceeded = key => ({
  type: actionTypes.MarkRequestSucceeded,
  meta: {key}
});

const markRequestFailed = (reason, key) => ({
  type: actionTypes.MarkRequestFailed,
  payload: reason,
  meta: {key}
});

export const createRequestThunk = ({request, key, start = [], success = [], failure = []}) =>
  (...args) => dispatch => {
    const requestKey = (typeof key === 'function') ? key(...args) : key;
    start.forEach(actionCreator => dispatch(actionCreator()));
    dispatch(markRequestPending(requestKey));
    return request(...args)
      .then(data => {
        success.forEach(actionCreator => dispatch(actionCreator(data)));
        dispatch(markRequestSucceeded(requestKey));
        return data;
      })
      .catch(reason => {
        failure.forEach(actionCreator => dispatch(actionCreator(reason)));
        dispatch(markRequestFailed(reason, requestKey));
      });
  };

export const setToast = (message, level = 'info', id = v4()) => ({
  type: actionTypes.SetToast,
  payload: {
    id,
    message,
    level
  }
});

export const clearToast = () => ({
  type: actionTypes.ClearToast
});

export const noop = explanation => ({
  type: actionTypes.Noop,
  payload: explanation
});
