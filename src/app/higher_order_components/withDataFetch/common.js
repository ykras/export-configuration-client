'use strict';

import {isArray} from 'lodash';
import {baseUrl} from '../../api';

const sendChainOf = requests => requests.reduce((promise, request) =>
  promise.then(() => sendOne(request)), Promise.resolve());

const paramsOf = request => {
  if (!request.params) {
    return [];
  }
  return isArray(request.params) ? request.params : [request.params];
};

const sendSingle = request => request.send(baseUrl, ...paramsOf(request));

function sendOne(request) {
  return isArray(request) ? sendChainOf(request) : sendSingle(request);
}

export const send = request => isArray(request) ? request.forEach(sendOne) : sendOne(request);
