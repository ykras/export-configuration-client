'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _reactLocalization = require('react-localization');

var _reactLocalization2 = _interopRequireDefault(_reactLocalization);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var strings = {
  ru: {
    ExportVocordTefVideoLabel: 'экспорт видео',
    SpreadOutViolationsLabel: 'раскладывать нарушения по папкам',
    ExportFoldersFormatLabel: 'формат',
    ExportFoldersFormatPlaceholder: '%Устройство%\\%День%\\%Час%',
    VocordTefVideoSecondsBeforeCheckTime: 'время до нарушения, с',
    VocordTefVideoSecondsAfterCheckTime: 'время после нарушения, с',
    VideoExportPathLabel: 'путь для экспорта видео'
  },
  en: {
    ExportVocordTefVideoLabel: 'video export',
    SpreadOutViolationsLabel: 'spread out violations on the folders',
    ExportFoldersFormatLabel: 'format',
    ExportFoldersFormatPlaceholder: '%Unit%\\%Day%\\%Hour%',
    VocordTefVideoSecondsBeforeCheckTime: 'seconds before violation',
    VocordTefVideoSecondsAfterCheckTime: 'seconds after violation',
    VideoExportPathLabel: 'video export path'
  }
};

exports.default = new _reactLocalization2.default(strings);

//# sourceMappingURL=exportVocordTef-compiled.js.map