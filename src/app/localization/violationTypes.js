'use strict';

import LocalizedStrings from 'react-localization';
import violationTypes from '../common/violationTypes';

const strings = {
  ru: {
    [violationTypes.StopLine]: 'заезд за стоп-линию',
    [violationTypes.Overspeed]: 'превышение скорости',
    [violationTypes.RedLight]: 'проезд перекрестка',
    [violationTypes.ProhibitorySignMove]: 'проезд на запрещающий знак',
    [violationTypes.WrongLineTurn]: 'поворот не из своего ряда'
  },
  en: {
    [violationTypes.StopLine]: 'drive behind stop line',
    [violationTypes.Overspeed]: 'overspeed',
    [violationTypes.RedLight]: 'drive through crossroad',
    [violationTypes.ProhibitorySignMove]: 'drive on prohibiting road sign',
    [violationTypes.WrongLineTurn]: 'turn from wrong lane'
  }
};

export default new LocalizedStrings(strings);
