'use strict';

import keyMirror from 'keymirror';
import ids from '../store/identifiers';

const collageSettingTypes = keyMirror({
  AllViolations: null,
  CurrentViolation: null,
  TrafficLights: null,
  RoadSigns: null
});

export const settingTypeIdsToSettingTypesMap = {
  [ids.CollageRoadSignsSettingTypeId]: collageSettingTypes.RoadSigns,
  [ids.CollageTrafficLightsSettingTypeId]: collageSettingTypes.TrafficLights
};

export default collageSettingTypes;
