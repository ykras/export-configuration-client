'use strict';

import LocalizedStrings from 'react-localization';
import settingNames from '../common/trafficLightSettingNames';

const strings = {
  ru: {
    OverviewPictureSizeLabel: 'размер обзорного снимка',
    [settingNames.TrafficLightSourcePositionAndSize]: 'положение и размер светофора на обзорном снимке'
  },
  en: {
    OverviewPictureSizeLabel: 'overview picture size',
    [settingNames.TrafficLightSourcePositionAndSize]: 'traffic light position and size on the overview picture'
  }
};

export default new LocalizedStrings(strings);
