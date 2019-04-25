'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.trafficLightSettingId = exports.collageRoadSignSettingId = exports.collageRoadSignSettingIdPrefix = exports.collageTrafficLightSettingId = exports.collageTrafficLightSettingIdPrefix = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _uuid = require('uuid');

var settingIds = {
  VideoExportModeSettingId: (0, _uuid.v4)(),
  VideoSecondsBeforeCheckTimeSettingId: (0, _uuid.v4)(),
  VideoSecondsAfterCheckTimeSettingId: (0, _uuid.v4)(),
  CollageDefaultFontSettingId: (0, _uuid.v4)(),
  CollageViolationFontSettingId: (0, _uuid.v4)(),
  VehicleDetectionFrameFooterTemplateSettingId: (0, _uuid.v4)(),
  OverviewBeginFooterTemplateSettingId: (0, _uuid.v4)(),
  VehicleDetectionBeginFooterTemplateSettingId: (0, _uuid.v4)(),
  OverviewEndFooterTemplateSettingId: (0, _uuid.v4)(),
  VehicleDetectionEndFooterTemplateSettingId: (0, _uuid.v4)(),
  CollageTrafficLightSettingId: (0, _uuid.v4)(),
  TrafficLightSettingId: (0, _uuid.v4)(),
  CollageRoadSignSettingId: (0, _uuid.v4)(),
  CollageExportPathSettingId: (0, _uuid.v4)()
};

var settingTypeIds = {
  CollageTrafficLightsSettingTypeId: (0, _uuid.v4)(),
  CollageRoadSignsSettingTypeId: (0, _uuid.v4)()
};

var editorTypeIds = {
  SelectorEditorTypeId: (0, _uuid.v4)(),
  TextInputEditorTypeId: (0, _uuid.v4)(),
  FontEditorTypeId: (0, _uuid.v4)(),
  FooterTemplateEditorTypeId: (0, _uuid.v4)(),
  CollageTrafficLightEditorTypeId: (0, _uuid.v4)(),
  CollageRoadSignEditorTypeId: (0, _uuid.v4)(),
  TrafficLightEditorTypeId: (0, _uuid.v4)()
};

var collageTrafficLightSettingIdPrefix = exports.collageTrafficLightSettingIdPrefix = function collageTrafficLightSettingIdPrefix(violationTypeId) {
  return settingIds.CollageTrafficLightSettingId + '/' + violationTypeId;
};

var collageTrafficLightSettingId = exports.collageTrafficLightSettingId = function collageTrafficLightSettingId(violationTypeId, trafficLightId) {
  return collageTrafficLightSettingIdPrefix(violationTypeId) + '/' + trafficLightId;
};

var collageRoadSignSettingIdPrefix = exports.collageRoadSignSettingIdPrefix = function collageRoadSignSettingIdPrefix(violationTypeId) {
  return settingIds.CollageRoadSignSettingId + '/' + violationTypeId;
};

var collageRoadSignSettingId = exports.collageRoadSignSettingId = function collageRoadSignSettingId(violationTypeId, roadSignId) {
  return collageRoadSignSettingIdPrefix(violationTypeId) + '/' + roadSignId;
};

var trafficLightSettingId = exports.trafficLightSettingId = function trafficLightSettingId(recognitionChannelId) {
  return settingIds.TrafficLightSettingId + '/' + recognitionChannelId;
};

exports.default = _extends({}, settingIds, settingTypeIds, editorTypeIds);

//# sourceMappingURL=identifiers-compiled.js.map