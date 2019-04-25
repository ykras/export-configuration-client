'use strict';

import {fetchJson} from './utils';
import {normalize, Schema, arrayOf} from 'normalizr';

const exportType = new Schema('exportTypes');

const normalizeFetchedData = types => normalize(types, arrayOf(exportType));

const returnResult = ({entities: {exportTypes}, result: exportTypeIds}) => ({
  exportTypes,
  exportTypeIds
});

export default {
  readExportTypes: (baseUrl = '') =>
    fetchJson(`${baseUrl}/api/exportTypes`)
      .then(normalizeFetchedData)
      .then(returnResult),
  readSelectedExportTypeId: (baseUrl = '') =>
    fetchJson(`${baseUrl}/api/exportTypes/selected`),
  updateSelectedExportType: (baseUrl = '', exportTypeId) =>
    fetchJson(`${baseUrl}/api/exportTypes/selected`,
      {
        method: 'PUT',
        body: JSON.stringify(exportTypeId)
      })
};
