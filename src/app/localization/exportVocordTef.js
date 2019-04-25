'use strict';

import LocalizedStrings from 'react-localization';

const strings = {
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

export default new LocalizedStrings(strings);
