'use strict';

import {fetchJson} from './utils';
import {normalize, Schema, arrayOf} from 'normalizr';

const recognitionChannel = new Schema('recognitionChannels');
const normalizeRecognitionChannels = data => normalize(data, arrayOf(recognitionChannel));
const returnRecognitionChannels = ({entities: {recognitionChannels}, result: recognitionChannelIds}) => ({
  recognitionChannels,
  recognitionChannelIds
});

export default {
  readRecognitionChannels: (baseUrl = '') =>
    fetchJson(`${baseUrl}/api/recognitionChannels`)
      .then(normalizeRecognitionChannels)
      .then(returnRecognitionChannels)
};
