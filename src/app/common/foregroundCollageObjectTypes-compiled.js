'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.foregroundCollageObjectTypesToSettingTypeIdsMap = undefined;

var _foregroundCollageObj;

var _keymirror = require('keymirror');

var _keymirror2 = _interopRequireDefault(_keymirror);

var _identifiers = require('../store/identifiers');

var _identifiers2 = _interopRequireDefault(_identifiers);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var foregroundCollageObjectTypes = (0, _keymirror2.default)({
  Sign: null,
  TrafficLight: null
});

var foregroundCollageObjectTypesToSettingTypeIdsMap = exports.foregroundCollageObjectTypesToSettingTypeIdsMap = (_foregroundCollageObj = {}, _defineProperty(_foregroundCollageObj, foregroundCollageObjectTypes.Sign, _identifiers2.default.CollageRoadSignsSettingTypeId), _defineProperty(_foregroundCollageObj, foregroundCollageObjectTypes.TrafficLight, _identifiers2.default.CollageTrafficLightsSettingTypeId), _foregroundCollageObj);

exports.default = foregroundCollageObjectTypes;

//# sourceMappingURL=foregroundCollageObjectTypes-compiled.js.map