'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.collagePictureTypesToSettingNamesMap = exports.settingIdsToCollagePictureTypesMap = exports.collagePictureTypesToSettingIdsMap = undefined;

var _collagePictureTypesT, _settingIdsToCollageP, _collagePictureTypesT2;

var _keymirror = require('keymirror');

var _keymirror2 = _interopRequireDefault(_keymirror);

var _identifiers = require('../store/identifiers');

var _identifiers2 = _interopRequireDefault(_identifiers);

var _collageSettingNames = require('./collageSettingNames');

var _collageSettingNames2 = _interopRequireDefault(_collageSettingNames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var collagePictureTypes = (0, _keymirror2.default)({
  VehicleDetectionFrame: null,
  OverviewBegin: null,
  VehicleDetectionBegin: null,
  OverviewEnd: null,
  VehicleDetectionEnd: null
});

var collagePictureTypesToSettingIdsMap = exports.collagePictureTypesToSettingIdsMap = (_collagePictureTypesT = {}, _defineProperty(_collagePictureTypesT, collagePictureTypes.VehicleDetectionFrame, _identifiers2.default.VehicleDetectionFrameFooterTemplateSettingId), _defineProperty(_collagePictureTypesT, collagePictureTypes.OverviewBegin, _identifiers2.default.OverviewBeginFooterTemplateSettingId), _defineProperty(_collagePictureTypesT, collagePictureTypes.VehicleDetectionBegin, _identifiers2.default.VehicleDetectionBeginFooterTemplateSettingId), _defineProperty(_collagePictureTypesT, collagePictureTypes.OverviewEnd, _identifiers2.default.OverviewEndFooterTemplateSettingId), _defineProperty(_collagePictureTypesT, collagePictureTypes.VehicleDetectionEnd, _identifiers2.default.VehicleDetectionEndFooterTemplateSettingId), _collagePictureTypesT);

var settingIdsToCollagePictureTypesMap = exports.settingIdsToCollagePictureTypesMap = (_settingIdsToCollageP = {}, _defineProperty(_settingIdsToCollageP, _identifiers2.default.VehicleDetectionFrameFooterTemplateSettingId, collagePictureTypes.VehicleDetectionFrame), _defineProperty(_settingIdsToCollageP, _identifiers2.default.OverviewBeginFooterTemplateSettingId, collagePictureTypes.OverviewBegin), _defineProperty(_settingIdsToCollageP, _identifiers2.default.VehicleDetectionBeginFooterTemplateSettingId, collagePictureTypes.VehicleDetectionBegin), _defineProperty(_settingIdsToCollageP, _identifiers2.default.OverviewEndFooterTemplateSettingId, collagePictureTypes.OverviewEnd), _defineProperty(_settingIdsToCollageP, _identifiers2.default.VehicleDetectionEndFooterTemplateSettingId, collagePictureTypes.VehicleDetectionEnd), _settingIdsToCollageP);

var collagePictureTypesToSettingNamesMap = exports.collagePictureTypesToSettingNamesMap = (_collagePictureTypesT2 = {}, _defineProperty(_collagePictureTypesT2, collagePictureTypes.VehicleDetectionFrame, _collageSettingNames2.default.VehicleDetectionFrameFooterTemplate), _defineProperty(_collagePictureTypesT2, collagePictureTypes.OverviewBegin, _collageSettingNames2.default.OverviewBeginFooterTemplate), _defineProperty(_collagePictureTypesT2, collagePictureTypes.VehicleDetectionBegin, _collageSettingNames2.default.VehicleDetectionBeginFooterTemplate), _defineProperty(_collagePictureTypesT2, collagePictureTypes.OverviewEnd, _collageSettingNames2.default.OverviewEndFooterTemplate), _defineProperty(_collagePictureTypesT2, collagePictureTypes.VehicleDetectionEnd, _collageSettingNames2.default.VehicleDetectionEndFooterTemplate), _collagePictureTypesT2);

exports.default = collagePictureTypes;

//# sourceMappingURL=collagePictureTypes-compiled.js.map