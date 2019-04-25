'use strict';

import {fetchJson} from './utils';
import {normalize, Schema, arrayOf} from 'normalizr';

const videoExportMode = new Schema('videoExportModes');

const normalizeVideoExportModes = data => normalize(data, arrayOf(videoExportMode));

const returnVideoExportModes = ({entities: {videoExportModes}, result: videoExportModeIds}) => ({
  videoExportModes,
  videoExportModeIds
});

export default {
  readVideoExportModes: (baseUrl = '', exportTypeId) =>
    fetchJson(`${baseUrl}/api/videoExport/${exportTypeId}/modes`)
      .then(normalizeVideoExportModes)
      .then(returnVideoExportModes),
  readCurrentVideoExportMode: (baseUrl = '', exportTypeId) =>
    fetchJson(`${baseUrl}/api/videoExport/${exportTypeId}/modes/current`),
  updateCurrentVideoExportMode: (baseUrl = '', exportTypeId, videoExportModeId) =>
    fetchJson(`${baseUrl}/api/videoExport/${exportTypeId}/modes/current`,
      {
        method: 'PUT',
        body: JSON.stringify(videoExportModeId)
      }),
  readVideoExportSettings: (baseUrl = '', exportTypeId) =>
    fetchJson(`${baseUrl}/api/videoExport/${exportTypeId}/settings`),
  updateVideoExportSettings: (baseUrl = '', exportTypeId, videoExportSettings) =>
    fetchJson(`${baseUrl}/api/videoExport/${exportTypeId}/settings`,
      {
        method: 'PUT',
        body: JSON.stringify(videoExportSettings)
      })
};
