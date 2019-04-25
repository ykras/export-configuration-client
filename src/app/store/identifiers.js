'use strict';

import {v4} from 'uuid';

const settingIds = {
  VideoExportModeSettingId: v4(),
  VideoSecondsBeforeCheckTimeSettingId: v4(),
  VideoSecondsAfterCheckTimeSettingId: v4(),
  CollageDefaultFontSettingId: v4(),
  CollageViolationFontSettingId: v4(),
  VehicleDetectionFrameFooterTemplateSettingId: v4(),
  OverviewBeginFooterTemplateSettingId: v4(),
  VehicleDetectionBeginFooterTemplateSettingId: v4(),
  OverviewEndFooterTemplateSettingId: v4(),
  VehicleDetectionEndFooterTemplateSettingId: v4(),
  CollageTrafficLightSettingId: v4(),
  TrafficLightSettingId: v4(),
  CollageRoadSignSettingId: v4(),
  CollageExportPathSettingId: v4()
};

const settingTypeIds = {
  CollageTrafficLightsSettingTypeId: v4(),
  CollageRoadSignsSettingTypeId: v4()
};

const editorTypeIds = {
  SelectorEditorTypeId: v4(),
  TextInputEditorTypeId: v4(),
  FontEditorTypeId: v4(),
  FooterTemplateEditorTypeId: v4(),
  CollageTrafficLightEditorTypeId: v4(),
  CollageRoadSignEditorTypeId: v4(),
  TrafficLightEditorTypeId: v4()
};

export const collageTrafficLightSettingIdPrefix = violationTypeId =>
  `${settingIds.CollageTrafficLightSettingId}/${violationTypeId}`;

export const collageTrafficLightSettingId = (violationTypeId, trafficLightId) =>
    `${collageTrafficLightSettingIdPrefix(violationTypeId)}/${trafficLightId}`;

export const collageRoadSignSettingIdPrefix = violationTypeId =>
  `${settingIds.CollageRoadSignSettingId}/${violationTypeId}`;

export const collageRoadSignSettingId = (violationTypeId, roadSignId) =>
  `${collageRoadSignSettingIdPrefix(violationTypeId)}/${roadSignId}`;

export const trafficLightSettingId = recognitionChannelId =>
  `${settingIds.TrafficLightSettingId}/${recognitionChannelId}`;

export default {
  ...settingIds,
  ...settingTypeIds,
  ...editorTypeIds
};

