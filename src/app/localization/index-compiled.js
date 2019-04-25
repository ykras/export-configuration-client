'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.localizeItems = exports.localizeText = undefined;

var _lodash = require('lodash');

var _common = require('./common');

var _common2 = _interopRequireDefault(_common);

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

var _trafficLights = require('./trafficLights');

var _trafficLights2 = _interopRequireDefault(_trafficLights);

var _exportVocordTef = require('./exportVocordTef');

var _exportVocordTef2 = _interopRequireDefault(_exportVocordTef);

var _exportStatistic = require('./exportStatistic');

var _exportStatistic2 = _interopRequireDefault(_exportStatistic);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var localizedStrings = (0, _lodash.merge)(_common2.default, _exportTypes2.default, _exportStatus2.default, _violationTypes2.default, _videoExport2.default, _exportCollage2.default, _trafficLights2.default, _exportVocordTef2.default, _exportStatistic2.default);

exports.default = localizedStrings;
var localizeText = exports.localizeText = function localizeText(text) {
  var capitalize = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;

  if (!text) {
    return '';
  }
  if (localizedStrings[text]) {
    return capitalize ? capitalize(localizedStrings[text]) : localizedStrings[text];
  }
  return capitalize ? capitalize(text) : text;
};

var localizeItems = exports.localizeItems = function localizeItems(items) {
  var capitalize = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
  return items.map(function (item) {
    return { id: item.id, name: localizeText(item.name, capitalize) };
  });
};

//# sourceMappingURL=index-compiled.js.map