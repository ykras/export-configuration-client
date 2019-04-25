'use strict';

import LocalizedStrings from 'react-localization';

const strings = {
  ru: {
    Enable: 'Включить',
    ExportTypeLabel: 'Тип экспорта:',
    RepeatExport: 'Повторно выгрузить с первого нарушения',
    ExportPotokPlus: 'Экспортировать Поток+',
    Error: 'Ошибка',
    ErrorCode: 'Код ошибки',
    LastSuccessfulExportTry: 'последняя успешная попытка экспорта была выполнена',
    ViolationTime: 'время нарушения',
    LastExportTry: 'последняя попытка экспорта была'
  },
  en: {
    Enable: 'Enable',
    ExportTypeLabel: 'Export type:',
    RepeatExport: 'Repeat export from the first violation',
    ExportPotokPlus: 'Export Potok+',
    Error: 'Error',
    ErrorCode: 'Error code',
    LastSuccessfulExportTry: 'the last successful attempt to export was completed',
    ViolationTime: 'violation time',
    LastExportTry: 'the last attempt to export was'
  }
};

export default new LocalizedStrings(strings);
