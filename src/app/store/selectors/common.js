'use strict';

import status from '../../common/statusTypes';

export const getRequest = (state, key) => state.requests[key] || {};

export const getRequests = state => state.requests;

export const areRequestsPending = requests => Object.keys(requests)
  .some(key => requests[key].status === status.Pending);

export const getToast = state => state.ui.toast;
