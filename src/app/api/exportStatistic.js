'use strict';

import {fetchJson} from './utils';

export default {
  readExportStatistic: (baseUrl = '') =>
    fetchJson(`${baseUrl}/api/exportStatistic`)
};
