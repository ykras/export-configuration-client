'use strict';

import LocalizedStrings from 'react-localization';
import videoExportModes from '../common/videoExportModes';

const strings = {
  ru: {
    [videoExportModes.DoNotExport]: 'Не экспортировать',
    [videoExportModes.ExportTogetherWithVehicleData]: 'Сохранять вместе с нарушением',
    [videoExportModes.ExportSeparatelyFromVehicleData]: 'Сохранять в отдельный каталог'
  },
  en: {
    [videoExportModes.DoNotExport]: 'Do not export',
    [videoExportModes.ExportTogetherWithVehicleData]: 'Save with violation',
    [videoExportModes.ExportSeparatelyFromVehicleData]: 'Save to the separate folder'
  }
};

export default new LocalizedStrings(strings);
