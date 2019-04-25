'use strict';

import keyMirror from 'keymirror';
import ids from '../store/identifiers';

const foregroundCollageObjectTypes = keyMirror({
  Sign: null,
  TrafficLight: null
});

export const foregroundCollageObjectTypesToSettingTypeIdsMap = {
  [foregroundCollageObjectTypes.Sign]: ids.CollageRoadSignsSettingTypeId,
  [foregroundCollageObjectTypes.TrafficLight]: ids.CollageTrafficLightsSettingTypeId
};

export default foregroundCollageObjectTypes;
