'use strict';

import 'isomorphic-fetch';
import 'es6-promise/auto';

const rejectErrors = res => {
  if (res.ok) {
    return res;
  }
  throw new Error(res.statusText || res.status);
};

const getText = res => res.text();

const toJson = text => text && text.length ? JSON.parse(text) : {};

export const fetchJson = (url, options = {}) => {
  return fetch(url, {
    ...options,
    headers: {
      ...options.headers,
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    }
  })
    .then(rejectErrors)
    .then(getText)
    .then(toJson);
};
