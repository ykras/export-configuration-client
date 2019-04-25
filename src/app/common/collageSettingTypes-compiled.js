'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.settingTypeIdsToSettingTypesMap = undefined;

var _settingTypeIdsToSett;

var _keymirror = require('keymirror');

var _keymirror2 = _interopRequireDefault(_keymirror);

var _identifiers = require('../store/identifiers');

var _identifiers2 = _interopRequireDefault(_identifiers);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var collageSettingTypes = (0, _keymirror2.default)({
  AllViolations: null,
  CurrentViolation: null,
  TrafficLights: null,
  RoadSigns: null
});

var settingTypeIdsToSettingTypesMap = exports.settingTypeIdsToSettingTypesMap = (_settingTypeIdsToSett = {}, _defineProperty(_settingTypeIdsToSett, _identifiers2.default.CollageRoadSignsSettingTypeId, collageSettingTypes.RoadSigns), _defineProperty(_settingTypeIdsToSett, _identifiers2.default.CollageTrafficLightsSettingTypeId, collageSettingTypes.TrafficLights), _settingTypeIdsToSett);

exports.default = collageSettingTypes;

//# sourceMappingURL=collageSettingTypes-compiled.js.map