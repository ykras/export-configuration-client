'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _ru, _en;

var _reactLocalization = require('react-localization');

var _reactLocalization2 = _interopRequireDefault(_reactLocalization);

var _videoExportModes = require('../common/videoExportModes');

var _videoExportModes2 = _interopRequireDefault(_videoExportModes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var strings = {
  ru: (_ru = {}, _defineProperty(_ru, _videoExportModes2.default.DoNotExport, 'Не экспортировать'), _defineProperty(_ru, _videoExportModes2.default.ExportTogetherWithVehicleData, 'Сохранять вместе с нарушением'), _defineProperty(_ru, _videoExportModes2.default.ExportSeparatelyFromVehicleData, 'Сохранять в отдельный каталог'), _ru),
  en: (_en = {}, _defineProperty(_en, _videoExportModes2.default.DoNotExport, 'Do not export'), _defineProperty(_en, _videoExportModes2.default.ExportTogetherWithVehicleData, 'Save with violation'), _defineProperty(_en, _videoExportModes2.default.ExportSeparatelyFromVehicleData, 'Save to the separate folder'), _en)
};

exports.default = new _reactLocalization2.default(strings);

//# sourceMappingURL=videoExport-compiled.js.map