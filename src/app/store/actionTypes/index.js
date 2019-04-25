'use strict';

import common from './common';
import exportStatus from './exportStatus';
import exportTypes from './exportTypes';
import exportStatistic from './exportStatistic';
import violationTypes from './violationTypes';
import exportCollage from './exportCollage';
import recognitionChannels from './recognitionChannels';
import trafficLights from './trafficLights';
import exportVocordTef from './exportVocordTef';
import exportPotokPlus from './exportPotokPlus';

export default {
  ...common,
  ...exportStatus,
  ...exportTypes,
  ...exportStatistic,
  ...violationTypes,
  ...exportCollage,
  ...recognitionChannels,
  ...trafficLights,
  ...exportVocordTef,
  ...exportPotokPlus
};
