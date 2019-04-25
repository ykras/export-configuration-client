'use strict';

import exportTypes from './exportTypes';
import exportStatus from './exportStatus';
import violationTypes from './violationTypes';
import videoExport from './videoExport';
import exportCollage from './exportCollage';
import recognitionChannels from './recognitionChannels';
import trafficLights from './trafficLights';
import exportVocordTef from './exportVocordTef';
import exportPotokPlus from './exportPotokPlus';
import exportStatistic from './exportStatistic';

const port = window.config && window.config.port ? window.config.port : window.location.port;
export const baseUrl = `${window.location.protocol}//${window.location.hostname}:${port}`;

export default {
  ...exportTypes,
  ...exportStatus,
  ...violationTypes,
  ...videoExport,
  ...exportCollage,
  ...recognitionChannels,
  ...trafficLights,
  ...exportVocordTef,
  ...exportPotokPlus,
  ...exportStatistic
};
