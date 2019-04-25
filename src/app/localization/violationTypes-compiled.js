'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _ru, _en;

var _reactLocalization = require('react-localization');

var _reactLocalization2 = _interopRequireDefault(_reactLocalization);

var _violationTypes = require('../common/violationTypes');

var _violationTypes2 = _interopRequireDefault(_violationTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var strings = {
  ru: (_ru = {}, _defineProperty(_ru, _violationTypes2.default.StopLine, 'заезд за стоп-линию'), _defineProperty(_ru, _violationTypes2.default.Overspeed, 'превышение скорости'), _defineProperty(_ru, _violationTypes2.default.RedLight, 'проезд перекрестка'), _defineProperty(_ru, _violationTypes2.default.ProhibitorySignMove, 'проезд на запрещающий знак'), _defineProperty(_ru, _violationTypes2.default.WrongLineTurn, 'поворот не из своего ряда'), _ru),
  en: (_en = {}, _defineProperty(_en, _violationTypes2.default.StopLine, 'drive behind stop line'), _defineProperty(_en, _violationTypes2.default.Overspeed, 'overspeed'), _defineProperty(_en, _violationTypes2.default.RedLight, 'drive through crossroad'), _defineProperty(_en, _violationTypes2.default.ProhibitorySignMove, 'drive on prohibiting road sign'), _defineProperty(_en, _violationTypes2.default.WrongLineTurn, 'turn from wrong lane'), _en)
};

exports.default = new _reactLocalization2.default(strings);

//# sourceMappingURL=violationTypes-compiled.js.map