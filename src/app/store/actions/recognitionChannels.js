'use strict';

import actions from '../actionTypes';
import {createRequestThunk, noop} from './common';
import api from '../../api';
import requests from '../../common/requestTypes';

export const replaceRecognitionChannels = ({recognitionChannels, recognitionChannelIds}) => ({
  type: actions.ReplaceRecognitionChannels,
  payload: {recognitionChannels, recognitionChannelIds}
});

export const selectRecognitionChannel = id => ({
  type: actions.SelectRecognitionChannel,
  payload: {id}
});

const selectFirstRecognitionChannel = ({recognitionChannelIds}) =>
  recognitionChannelIds.length > 0 ? selectRecognitionChannel(recognitionChannelIds[0]) : noop('No recognition channel to select');

export const requestReadRecognitionChannels = createRequestThunk({
  request: api.readRecognitionChannels,
  key: requests.ReadRecognitionChannels,
  success: [
    replaceRecognitionChannels,
    selectFirstRecognitionChannel
  ]
});
