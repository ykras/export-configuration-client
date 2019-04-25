'use strict';

import actions from '../actionTypes';

export const byId = (state = {}, {type, payload}) => {
  switch (type) {
    case actions.ReplaceRecognitionChannels:
      return payload.recognitionChannels || state;
    default:
      return state;
  }
};

export const ids = (state = [], {type, payload}) => {
  switch (type) {
    case actions.ReplaceRecognitionChannels:
      return payload.recognitionChannelIds || state;
    default:
      return state;
  }
};

export const selectedRecognitionChannelId = (state = null, {type, payload}) => {
  switch (type) {
    case actions.SelectRecognitionChannel:
      return payload.id || state;
    default:
      return state;
  }
};
