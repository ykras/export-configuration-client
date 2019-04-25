'use strict';

import keyMirror from 'keymirror';
import ids from '../store/identifiers';
import settingNames from './collageSettingNames';

const collagePictureTypes = keyMirror({
  VehicleDetectionFrame: null,
  OverviewBegin: null,
  VehicleDetectionBegin: null,
  OverviewEnd: null,
  VehicleDetectionEnd: null
});

export const collagePictureTypesToSettingIdsMap = {
  [collagePictureTypes.VehicleDetectionFrame]: ids.VehicleDetectionFrameFooterTemplateSettingId,
  [collagePictureTypes.OverviewBegin]: ids.OverviewBeginFooterTemplateSettingId,
  [collagePictureTypes.VehicleDetectionBegin]: ids.VehicleDetectionBeginFooterTemplateSettingId,
  [collagePictureTypes.OverviewEnd]: ids.OverviewEndFooterTemplateSettingId,
  [collagePictureTypes.VehicleDetectionEnd]: ids.VehicleDetectionEndFooterTemplateSettingId
};

export const settingIdsToCollagePictureTypesMap = {
  [ids.VehicleDetectionFrameFooterTemplateSettingId]: collagePictureTypes.VehicleDetectionFrame,
  [ids.OverviewBeginFooterTemplateSettingId]: collagePictureTypes.OverviewBegin,
  [ids.VehicleDetectionBeginFooterTemplateSettingId]: collagePictureTypes.VehicleDetectionBegin,
  [ids.OverviewEndFooterTemplateSettingId]: collagePictureTypes.OverviewEnd,
  [ids.VehicleDetectionEndFooterTemplateSettingId]: collagePictureTypes.VehicleDetectionEnd
};

export const collagePictureTypesToSettingNamesMap = {
  [collagePictureTypes.VehicleDetectionFrame]: settingNames.VehicleDetectionFrameFooterTemplate,
  [collagePictureTypes.OverviewBegin]: settingNames.OverviewBeginFooterTemplate,
  [collagePictureTypes.VehicleDetectionBegin]: settingNames.VehicleDetectionBeginFooterTemplate,
  [collagePictureTypes.OverviewEnd]: settingNames.OverviewEndFooterTemplate,
  [collagePictureTypes.VehicleDetectionEnd]: settingNames.VehicleDetectionEndFooterTemplate
};

export default collagePictureTypes;
