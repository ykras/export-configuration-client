'use strict';

import {merge} from 'lodash';
import common from './common';
import exportTypes from './exportTypes';
import exportStatus from './exportStatus';
import violationTypes from './violationTypes';
import videoExport from './videoExport';
import exportCollage from './exportCollage';
import trafficLights from './trafficLights';
import exportVocordTef from './exportVocordTef';
import exportStatistic from './exportStatistic';

const localizedStrings = merge(
  common,
  exportTypes,
  exportStatus,
  violationTypes,
  videoExport,
  exportCollage,
  trafficLights,
  exportVocordTef,
  exportStatistic
);

export default localizedStrings;

export const localizeText = (text, capitalize = null) => {
  if (!text) {
    return '';
  }
  if (localizedStrings[text]) {
    return capitalize ? capitalize(localizedStrings[text]) : localizedStrings[text];
  }
  return capitalize ? capitalize(text) : text;
};

export const localizeItems = (items, capitalize = null) =>
  items.map(item => ({id: item.id, name: localizeText(item.name, capitalize)}));
