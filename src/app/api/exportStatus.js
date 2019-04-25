'use strict';

import {fetchJson} from './utils';

/* export default {
  readExportEnabled: (baseUrl = '', exportTypeId) =>
    fetchJson(`${baseUrl}/api/exportStatus?exportTypeId=${exportTypeId}`)
      .then(exportEnabled => ({exportTypeId, exportEnabled})),
  updateExportEnabled: (baseUrl = '', exportTypeId, exportEnabled) =>
    fetchJson(`${baseUrl}/api/exportStatus?exportTypeId=${exportTypeId}`,
      {
        method: 'PUT',
        body: JSON.stringify(exportEnabled)
      }),
  readExportPotokPlusEnabled: (baseUrl = '') =>
    fetchJson(`${baseUrl}/api/exportStatus/potokPlus`),
  updateExportPotokPlusEnabled: (baseUrl = '', exportPotokPlusEnabled) =>
    fetchJson(`${baseUrl}/api/exportStatus/potokPlus`,
      {
        method: 'PUT',
        body: JSON.stringify(exportPotokPlusEnabled)
      }),
  repeatExport: (baseUrl = '', exportTypeId) =>
    fetchJson(`${baseUrl}/api/exportStatus/repeatExport?exportTypeId=${exportTypeId}`,
      {
        method: 'POST'
      })
};*/

export default {
  readExportEnabled: (baseUrl = '', exportTypeId) =>
    fetchJson(`${baseUrl}/api/exportStatus/${exportTypeId}`)
      .then(exportEnabled => ({exportTypeId, exportEnabled})),
  updateExportEnabled: (baseUrl = '', exportTypeId, exportEnabled) =>
    fetchJson(`${baseUrl}/api/exportStatus/${exportTypeId}`,
      {
        method: 'PUT',
        body: JSON.stringify(exportEnabled)
      }),
  readExportPotokPlusEnabled: (baseUrl = '') =>
    fetchJson(`${baseUrl}/api/exportStatus/potokPlus`),
  updateExportPotokPlusEnabled: (baseUrl = '', exportPotokPlusEnabled) =>
    fetchJson(`${baseUrl}/api/exportStatus/potokPlus`,
      {
        method: 'PUT',
        body: JSON.stringify(exportPotokPlusEnabled)
      }),
  repeatExport: (baseUrl = '', exportTypeId) =>
    fetchJson(`${baseUrl}/api/exportStatus/repeatExport/${exportTypeId}`,
      {
        method: 'POST'
      })
};
