'use strict';

import {fetchJson} from './utils';
import {normalize, Schema, arrayOf} from 'normalizr';

const violationType = new Schema('violationTypes');

const normalizeFetchedData = data => normalize(data, arrayOf(violationType));

const returnResult = ({entities: {violationTypes}, result: violationTypeIds}) => ({
  violationTypes,
  violationTypeIds
});

export default {
  readViolationTypes: (baseUrl = '') =>
    fetchJson(`${baseUrl}/api/violationTypes`)
      .then(normalizeFetchedData)
      .then(returnResult)
};
