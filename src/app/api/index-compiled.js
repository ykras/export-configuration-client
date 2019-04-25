'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.baseUrl = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _exportTypes = require('./exportTypes');

var _exportTypes2 = _interopRequireDefault(_exportTypes);

var _exportStatus = require('./exportStatus');

var _exportStatus2 = _interopRequireDefault(_exportStatus);

var _violationTypes = require('./violationTypes');

var _violationTypes2 = _interopRequireDefault(_violationTypes);

var _videoExport = require('./videoExport');

var _videoExport2 = _interopRequireDefault(_videoExport);

var _exportCollage = require('./exportCollage');

var _exportCollage2 = _interopRequireDefault(_exportCollage);

var _recognitionChannels = require('./recognitionChannels');

var _recognitionChannels2 = _interopRequireDefault(_recognitionChannels);

var _trafficLights = require('./trafficLights');

var _trafficLights2 = _interopRequireDefault(_trafficLights);

var _exportVocordTef = require('./exportVocordTef');

var _exportVocordTef2 = _interopRequireDefault(_exportVocordTef);

var _exportPotokPlus = require('./exportPotokPlus');

var _exportPotokPlus2 = _interopRequireDefault(_exportPotokPlus);

var _exportStatistic = require('./exportStatistic');

var _exportStatistic2 = _interopRequireDefault(_exportStatistic);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var port = window.config && window.config.port ? window.config.port : window.location.port;
var baseUrl = exports.baseUrl = window.location.protocol + '//' + window.location.hostname + ':' + port;

exports.default = _extends({}, _exportTypes2.default, _exportStatus2.default, _violationTypes2.default, _videoExport2.default, _exportCollage2.default, _recognitionChannels2.default, _trafficLights2.default, _exportVocordTef2.default, _exportPotokPlus2.default, _exportStatistic2.default);

//# sourceMappingURL=index-compiled.js.map