'use strict';

import LocalizedStrings from 'react-localization';
import foregroundObjectTypes from '../common/foregroundCollageObjectTypes';
import settingTypes from '../common/collageSettingTypes';
import settingNames from '../common/collageSettingNames';
import collagePictureTypes from '../common/collagePictureTypes';

const strings = {
  ru: {
    AddForegroundCollageObject: 'добавить',
    RemoveForegroundCollageObject: 'удалить',
    [foregroundObjectTypes.Sign]: 'дорожный знак',
    [foregroundObjectTypes.TrafficLight]: 'светофор',
    [settingTypes.AllViolations]: 'глобальные (все типы нарушений)',
    [settingTypes.CurrentViolation]: 'текущее нарушение',
    [settingTypes.TrafficLights]: 'светофоры',
    [settingTypes.RoadSigns]: 'дорожные знаки',
    [settingNames.ExportVideo]: 'экспортировать видео',
    [settingNames.CollageVideoSecondsBeforeCheckTime]: 'время до нарушения, с',
    [settingNames.CollageVideoSecondsAfterCheckTime]: 'время после нарушения, с',
    [settingNames.Font]: 'шрифт',
    [settingNames.CollageExportPath]: 'путь экспорта',
    FontName: 'имя',
    FontSize: 'размер',
    ByDefault: 'по умолчанию',
    SettingValueIsNotSpecified: 'не задано',
    [settingNames.VehicleDetectionFrameFooterTemplate]: 'шаблон подписи',
    [settingNames.OverviewBeginFooterTemplate]: 'шаблон подписи под начальным обзорным снимком',
    [settingNames.VehicleDetectionBeginFooterTemplate]: 'шаблон подписи под начальным снимком обнаружения',
    [settingNames.OverviewEndFooterTemplate]: 'шаблон подписи под конечным обзорным снимком',
    [settingNames.VehicleDetectionEndFooterTemplate]: 'шаблон подписи под конечным снимком обнаружения',
    FooterTemplateLineLabel: 'строка',
    CollageSizeLabel: 'размер коллажа',
    CollagePicture: 'снимок коллажа',
    CollageTrafficLightSource: 'источник светофора',
    CollageTrafficLightTargetPositionAndSize: 'целевое положение и размер',
    [collagePictureTypes.VehicleDetectionFrame]: 'снимок обнаружения',
    [collagePictureTypes.OverviewBegin]: 'начальный обзорный снимок',
    [collagePictureTypes.VehicleDetectionBegin]: 'начальный снимок обнаружения',
    [collagePictureTypes.OverviewEnd]: 'конечный обзорный снимок',
    [collagePictureTypes.VehicleDetectionEnd]: 'конечный снимок обнаружения',
    CollageRoadSignPositionAndSize: 'положение и размер',
    CollageRoadSignFile: 'файл изображения знака'
  },
  en: {
    AddForegroundCollageObject: 'add',
    RemoveForegroundCollageObject: 'remove',
    [foregroundObjectTypes.Sign]: 'road sign',
    [foregroundObjectTypes.TrafficLight]: 'traffic light',
    [settingTypes.AllViolations]: 'global (all violation types)',
    [settingTypes.CurrentViolation]: 'current violation',
    [settingTypes.TrafficLights]: 'traffic lights',
    [settingTypes.RoadSigns]: 'road signs',
    [settingNames.ExportVideo]: 'export video',
    [settingNames.CollageVideoSecondsBeforeCheckTime]: 'seconds before violation',
    [settingNames.CollageVideoSecondsAfterCheckTime]: 'seconds after violation',
    [settingNames.Font]: 'font',
    [settingNames.CollageExportPath]: 'export path',
    FontName: 'name',
    FontSize: 'size',
    ByDefault: 'by default',
    SettingValueIsNotSpecified: 'not specified',
    [settingNames.VehicleDetectionFrameFooterTemplate]: 'footer template',
    [settingNames.OverviewBeginFooterTemplate]: 'initial overview picture footer template',
    [settingNames.VehicleDetectionBeginFooterTemplate]: 'initial vehicle detection picture footer template',
    [settingNames.OverviewEndFooterTemplate]: 'ending overview picture footer template',
    [settingNames.VehicleDetectionEndFooterTemplate]: 'ending vehicle detection picture footer template',
    FooterTemplateLineLabel: 'line',
    CollageSizeLabel: 'collage size',
    CollagePicture: 'collage picture',
    CollageTrafficLightSource: 'traffic light source',
    CollageTrafficLightTargetPositionAndSize: 'target position and size',
    [collagePictureTypes.VehicleDetectionFrame]: 'vehicle detection picture',
    [collagePictureTypes.OverviewBegin]: 'initial overview picture',
    [collagePictureTypes.VehicleDetectionBegin]: 'initial vehicle detection picture',
    [collagePictureTypes.OverviewEnd]: 'ending overview picture',
    [collagePictureTypes.VehicleDetectionEnd]: 'ending vehicle detection picture',
    CollageRoadSignPositionAndSize: 'position and size',
    CollageRoadSignFile: 'sign image file'
  }
};

export default new LocalizedStrings(strings);
