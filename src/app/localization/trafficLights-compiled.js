'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _reactLocalization = require('react-localization');

var _reactLocalization2 = _interopRequireDefault(_reactLocalization);

var _trafficLightSettingNames = require('../common/trafficLightSettingNames');

var _trafficLightSettingNames2 = _interopRequireDefault(_trafficLightSettingNames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var strings = {
  ru: _defineProperty({
    OverviewPictureSizeLabel: 'размер обзорного снимка'
  }, _trafficLightSettingNames2.default.TrafficLightSourcePositionAndSize, 'положение и размер светофора на обзорном снимке'),
  en: _defineProperty({
    OverviewPictureSizeLabel: 'overview picture size'
  }, _trafficLightSettingNames2.default.TrafficLightSourcePositionAndSize, 'traffic light position and size on the overview picture')
};

exports.default = new _reactLocalization2.default(strings);

//# sourceMappingURL=trafficLights-compiled.js.map