'use strict';

import {fetchJson} from './utils';

export default {
  readVocordTefSettings: (baseUrl = '') =>
    fetchJson(`${baseUrl}/api/exportVocordTef/settings`),
  updateVocordTefSettings: (baseUrl = '', vocordTefSettings) =>
    fetchJson(`${baseUrl}/api/exportVocordTef/settings`,
      {
        method: 'PUT',
        body: JSON.stringify(vocordTefSettings)
      })
};
