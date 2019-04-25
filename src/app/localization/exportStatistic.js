'use strict';

import LocalizedStrings from 'react-localization';
import errorTypes from '../common/errorTypes';

const strings = {
  ru: {
    [errorTypes.AuthenticationError]: 'ошибка аутентификации при попытке доступа к сервису экспорта нарушений',
    [errorTypes.DataSendingError]: 'ошибка отправки результатов экспорта нарушений',
    [errorTypes.IllegalCharactersInPath]: 'в указанном пути используются недопустимые символы ( |?"" <> ). Невозможно создать директорию',
    [errorTypes.WrongSubdirsFormat]: 'некорректно используются специальные символы (% и :). См. инструкцию по заданию формата создаваемых директорий',
    [errorTypes.UnexpectedImplementationError]: 'в процессе экспорта нарушений возникла непредвиденная ошибка'
  },
  en: {
    [errorTypes.AuthenticationError]: 'error of authentication while trying to access violations export service',
    [errorTypes.DataSendingError]: 'error of sending violation export results',
    [errorTypes.IllegalCharactersInPath]: 'illegal characters in directory path, leading to impossibility of saving to disk',
    [errorTypes.WrongSubdirsFormat]: "Subdirectories paths' format is invalid and cannot be parsed",
    [errorTypes.UnexpectedImplementationError]: 'unexpected error that is the most probably occurred because of incorrect implementation of export service behaviour'
  }
};

export default new LocalizedStrings(strings);
