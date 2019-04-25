'use strict';

import {fetchJson} from './utils';

const returnOverviewPicture = ({imageFormat, imageBase64, widthInPixels, heightInPixels}) => ({
  imageDataUrl: `data:image/${imageFormat};base64,${imageBase64}`,
  widthInPixels,
  heightInPixels
});

export default {
  readOverviewPicture: (baseUrl = '', recognitionChannelId) =>
    fetchJson(`${baseUrl}/api/trafficLights/overviewPicture/fromChannel/${recognitionChannelId}`)
      .then(returnOverviewPicture),
  readTrafficLight: (baseUrl = '', recognitionChannelId) =>
    fetchJson(`${baseUrl}/api/trafficLights/trafficLight/fromChannel/${recognitionChannelId}`)
      .then(value => ({id: recognitionChannelId, value})),
  updateTrafficLight: (baseUrl = '', recognitionChannelId, trafficLight) =>
    fetchJson(`${baseUrl}/api/trafficLights/trafficLight/fromChannel/${recognitionChannelId}`,
      {
        method: 'PUT',
        body: JSON.stringify(trafficLight)
      })
};
