'use strict';

import {findIndex} from 'lodash';
import status from '../common/statusTypes';

export const combineRequests = (...requests) => {
  const failedRequestIndex = findIndex(requests, request => request.status === status.Failure);
  if (failedRequestIndex > -1) {
    return {status: status.Failure, error: requests[failedRequestIndex].error};
  }
  if (requests.every(request => request.status === status.Success)) {
    return {status: status.Success, error: null};
  }
  return {status: status.Pending, error: null};
};
