'use strict';

import {fetchJson} from './utils';

export default {
  readPotokPlusSettings: (baseUrl = '') =>
    fetchJson(`${baseUrl}/api/exportPotokPlus/settings`),
  updatePotokPlusSettings: (baseUrl = '', potokPlusSettings) =>
    fetchJson(`${baseUrl}/api/exportPotokPlus/settings`,
      {
        method: 'PUT',
        body: JSON.stringify(potokPlusSettings)
      })
};
