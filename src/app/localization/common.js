'use strict';

import LocalizedStrings from 'react-localization';

const strings = {
  ru: {
    StatusTabName: 'Статус',
    PotokPlusTabName: 'Поток+',
    TrafficLightsTabName: 'Светофоры',
    LoadingError: 'Не удалось загрузить данные. Повторите попытку позже.',
    UnknownNetworkError: 'Неизвестная ошибка сетевого соединения',
    Loading: 'Загрузка...',
    Apply: 'Применить',
    Undefined: 'не задано',
    SelectFileButtonText: 'выбрать...',
    SelectedFileNamePlaceholder: 'файл не выбран',
    UploadFileButtonText: 'загрузить на сервер',
    FileNameLabel: 'имя',
    FileSizeLabel: 'размер',
    ViolationTypeLabel: 'тип нарушения',
    RecognitionChannelLabel: 'канал распознавания',
    SizeInPixelsLabel: 'пикселей',
    PictureSizeLabel: '(ширина x высота)',
    SelectedRegionLabel: 'выделенная область',
    SettingNameHeaderText: 'название',
    SettingValueHeaderText: 'значение',
    LoginLabel: 'имя пользователя',
    PasswordLabel: 'пароль',
    ExportPathLabel: 'путь для экспорта'
  },
  en: {
    StatusTabName: 'Status',
    PotokPlusTabName: 'Potok+',
    TrafficLightsTabName: 'Traffic lights',
    LoadingError: "Can't load data. Try again later.",
    UnknownNetworkError: 'Unknown network error',
    Loading: 'Loading...',
    Apply: 'Apply',
    Undefined: 'not specified',
    SelectFileButtonText: 'select...',
    SelectedFileNamePlaceholder: 'file is not selected',
    UploadFileButtonText: 'upload',
    FileNameLabel: 'name',
    FileSizeLabel: 'size',
    ViolationTypeLabel: 'violation type',
    RecognitionChannelLabel: 'recognition channel',
    SizeInPixelsLabel: 'pixels',
    PictureSizeLabel: '(width x height)',
    SelectedRegionLabel: 'selected region',
    SettingNameHeaderText: 'name',
    SettingValueHeaderText: 'value',
    LoginLabel: 'user name',
    PasswordLabel: 'password',
    ExportPathLabel: 'export path'
  }
};

export default new LocalizedStrings(strings);
