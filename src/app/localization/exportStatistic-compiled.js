'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _ru, _en;

var _reactLocalization = require('react-localization');

var _reactLocalization2 = _interopRequireDefault(_reactLocalization);

var _errorTypes = require('../common/errorTypes');

var _errorTypes2 = _interopRequireDefault(_errorTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var strings = {
  ru: (_ru = {}, _defineProperty(_ru, _errorTypes2.default.AuthenticationError, 'ошибка аутентификации при попытке доступа к сервису экспорта нарушений'), _defineProperty(_ru, _errorTypes2.default.DataSendingError, 'ошибка отправки результатов экспорта нарушений'), _defineProperty(_ru, _errorTypes2.default.IllegalCharactersInPath, 'в указанном пути используются недопустимые символы ( |?"" <> ). Невозможно создать директорию'), _defineProperty(_ru, _errorTypes2.default.WrongSubdirsFormat, 'некорректно используются специальные символы (% и :). См. инструкцию по заданию формата создаваемых директорий'), _defineProperty(_ru, _errorTypes2.default.UnexpectedImplementationError, 'в процессе экспорта нарушений возникла непредвиденная ошибка'), _ru),
  en: (_en = {}, _defineProperty(_en, _errorTypes2.default.AuthenticationError, 'error of authentication while trying to access violations export service'), _defineProperty(_en, _errorTypes2.default.DataSendingError, 'error of sending violation export results'), _defineProperty(_en, _errorTypes2.default.IllegalCharactersInPath, 'illegal characters in directory path, leading to impossibility of saving to disk'), _defineProperty(_en, _errorTypes2.default.WrongSubdirsFormat, "Subdirectories paths' format is invalid and cannot be parsed"), _defineProperty(_en, _errorTypes2.default.UnexpectedImplementationError, 'unexpected error that is the most probably occurred because of incorrect implementation of export service behaviour'), _en)
};

exports.default = new _reactLocalization2.default(strings);

//# sourceMappingURL=exportStatistic-compiled.js.map