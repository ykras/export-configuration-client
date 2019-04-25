'use strict';

import * as common from './common';
import * as exportStatus from './exportStatus';
import * as exportTypes from './exportTypes';
import * as exportStatistic from './exportStatistic';
import * as violationTypes from './violationTypes';
import * as exportCollage from './exportCollage';
import * as recognitionChannels from './recognitionChannels';
import * as trafficLights from './trafficLights';
import * as exportVocordTef from './exportVocordTef';
import * as exportPotokPlus from './exportPotokPlus';

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
