'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _ru, _en;

var _reactLocalization = require('react-localization');

var _reactLocalization2 = _interopRequireDefault(_reactLocalization);

var _foregroundCollageObjectTypes = require('../common/foregroundCollageObjectTypes');

var _foregroundCollageObjectTypes2 = _interopRequireDefault(_foregroundCollageObjectTypes);

var _collageSettingTypes = require('../common/collageSettingTypes');

var _collageSettingTypes2 = _interopRequireDefault(_collageSettingTypes);

var _collageSettingNames = require('../common/collageSettingNames');

var _collageSettingNames2 = _interopRequireDefault(_collageSettingNames);

var _collagePictureTypes = require('../common/collagePictureTypes');

var _collagePictureTypes2 = _interopRequireDefault(_collagePictureTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var strings = {
  ru: (_ru = {
    AddForegroundCollageObject: 'добавить',
    RemoveForegroundCollageObject: 'удалить'
  }, _defineProperty(_ru, _foregroundCollageObjectTypes2.default.Sign, 'дорожный знак'), _defineProperty(_ru, _foregroundCollageObjectTypes2.default.TrafficLight, 'светофор'), _defineProperty(_ru, _collageSettingTypes2.default.AllViolations, 'глобальные (все типы нарушений)'), _defineProperty(_ru, _collageSettingTypes2.default.CurrentViolation, 'текущее нарушение'), _defineProperty(_ru, _collageSettingTypes2.default.TrafficLights, 'светофоры'), _defineProperty(_ru, _collageSettingTypes2.default.RoadSigns, 'дорожные знаки'), _defineProperty(_ru, _collageSettingNames2.default.ExportVideo, 'экспортировать видео'), _defineProperty(_ru, _collageSettingNames2.default.CollageVideoSecondsBeforeCheckTime, 'время до нарушения, с'), _defineProperty(_ru, _collageSettingNames2.default.CollageVideoSecondsAfterCheckTime, 'время после нарушения, с'), _defineProperty(_ru, _collageSettingNames2.default.Font, 'шрифт'), _defineProperty(_ru, _collageSettingNames2.default.CollageExportPath, 'путь экспорта'), _defineProperty(_ru, 'FontName', 'имя'), _defineProperty(_ru, 'FontSize', 'размер'), _defineProperty(_ru, 'ByDefault', 'по умолчанию'), _defineProperty(_ru, 'SettingValueIsNotSpecified', 'не задано'), _defineProperty(_ru, _collageSettingNames2.default.VehicleDetectionFrameFooterTemplate, 'шаблон подписи'), _defineProperty(_ru, _collageSettingNames2.default.OverviewBeginFooterTemplate, 'шаблон подписи под начальным обзорным снимком'), _defineProperty(_ru, _collageSettingNames2.default.VehicleDetectionBeginFooterTemplate, 'шаблон подписи под начальным снимком обнаружения'), _defineProperty(_ru, _collageSettingNames2.default.OverviewEndFooterTemplate, 'шаблон подписи под конечным обзорным снимком'), _defineProperty(_ru, _collageSettingNames2.default.VehicleDetectionEndFooterTemplate, 'шаблон подписи под конечным снимком обнаружения'), _defineProperty(_ru, 'FooterTemplateLineLabel', 'строка'), _defineProperty(_ru, 'CollageSizeLabel', 'размер коллажа'), _defineProperty(_ru, 'CollagePicture', 'снимок коллажа'), _defineProperty(_ru, 'CollageTrafficLightSource', 'источник светофора'), _defineProperty(_ru, 'CollageTrafficLightTargetPositionAndSize', 'целевое положение и размер'), _defineProperty(_ru, _collagePictureTypes2.default.VehicleDetectionFrame, 'снимок обнаружения'), _defineProperty(_ru, _collagePictureTypes2.default.OverviewBegin, 'начальный обзорный снимок'), _defineProperty(_ru, _collagePictureTypes2.default.VehicleDetectionBegin, 'начальный снимок обнаружения'), _defineProperty(_ru, _collagePictureTypes2.default.OverviewEnd, 'конечный обзорный снимок'), _defineProperty(_ru, _collagePictureTypes2.default.VehicleDetectionEnd, 'конечный снимок обнаружения'), _defineProperty(_ru, 'CollageRoadSignPositionAndSize', 'положение и размер'), _defineProperty(_ru, 'CollageRoadSignFile', 'файл изображения знака'), _ru),
  en: (_en = {
    AddForegroundCollageObject: 'add',
    RemoveForegroundCollageObject: 'remove'
  }, _defineProperty(_en, _foregroundCollageObjectTypes2.default.Sign, 'road sign'), _defineProperty(_en, _foregroundCollageObjectTypes2.default.TrafficLight, 'traffic light'), _defineProperty(_en, _collageSettingTypes2.default.AllViolations, 'global (all violation types)'), _defineProperty(_en, _collageSettingTypes2.default.CurrentViolation, 'current violation'), _defineProperty(_en, _collageSettingTypes2.default.TrafficLights, 'traffic lights'), _defineProperty(_en, _collageSettingTypes2.default.RoadSigns, 'road signs'), _defineProperty(_en, _collageSettingNames2.default.ExportVideo, 'export video'), _defineProperty(_en, _collageSettingNames2.default.CollageVideoSecondsBeforeCheckTime, 'seconds before violation'), _defineProperty(_en, _collageSettingNames2.default.CollageVideoSecondsAfterCheckTime, 'seconds after violation'), _defineProperty(_en, _collageSettingNames2.default.Font, 'font'), _defineProperty(_en, _collageSettingNames2.default.CollageExportPath, 'export path'), _defineProperty(_en, 'FontName', 'name'), _defineProperty(_en, 'FontSize', 'size'), _defineProperty(_en, 'ByDefault', 'by default'), _defineProperty(_en, 'SettingValueIsNotSpecified', 'not specified'), _defineProperty(_en, _collageSettingNames2.default.VehicleDetectionFrameFooterTemplate, 'footer template'), _defineProperty(_en, _collageSettingNames2.default.OverviewBeginFooterTemplate, 'initial overview picture footer template'), _defineProperty(_en, _collageSettingNames2.default.VehicleDetectionBeginFooterTemplate, 'initial vehicle detection picture footer template'), _defineProperty(_en, _collageSettingNames2.default.OverviewEndFooterTemplate, 'ending overview picture footer template'), _defineProperty(_en, _collageSettingNames2.default.VehicleDetectionEndFooterTemplate, 'ending vehicle detection picture footer template'), _defineProperty(_en, 'FooterTemplateLineLabel', 'line'), _defineProperty(_en, 'CollageSizeLabel', 'collage size'), _defineProperty(_en, 'CollagePicture', 'collage picture'), _defineProperty(_en, 'CollageTrafficLightSource', 'traffic light source'), _defineProperty(_en, 'CollageTrafficLightTargetPositionAndSize', 'target position and size'), _defineProperty(_en, _collagePictureTypes2.default.VehicleDetectionFrame, 'vehicle detection picture'), _defineProperty(_en, _collagePictureTypes2.default.OverviewBegin, 'initial overview picture'), _defineProperty(_en, _collagePictureTypes2.default.VehicleDetectionBegin, 'initial vehicle detection picture'), _defineProperty(_en, _collagePictureTypes2.default.OverviewEnd, 'ending overview picture'), _defineProperty(_en, _collagePictureTypes2.default.VehicleDetectionEnd, 'ending vehicle detection picture'), _defineProperty(_en, 'CollageRoadSignPositionAndSize', 'position and size'), _defineProperty(_en, 'CollageRoadSignFile', 'sign image file'), _en)
};

exports.default = new _reactLocalization2.default(strings);

//# sourceMappingURL=exportCollage-compiled.js.map