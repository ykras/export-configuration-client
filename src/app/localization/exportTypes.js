'use strict';

import LocalizedStrings from 'react-localization';
import exportTypes from '../common/exportTypes';

const strings = {
  ru: {
    [exportTypes.VocordTef]: 'Vocord TEF',
    [exportTypes.Collage]: 'Коллаж'
  },
  en: {
    [exportTypes.VocordTef]: 'Vocord TEF',
    [exportTypes.Collage]: 'Collage'
  }
};

export default new LocalizedStrings(strings);
