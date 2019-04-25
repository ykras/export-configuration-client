'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _utils = require('./utils');

var _normalizr = require('normalizr');

var recognitionChannel = new _normalizr.Schema('recognitionChannels');
var normalizeRecognitionChannels = function normalizeRecognitionChannels(data) {
  return (0, _normalizr.normalize)(data, (0, _normalizr.arrayOf)(recognitionChannel));
};
var returnRecognitionChannels = function returnRecognitionChannels(_ref) {
  var recognitionChannels = _ref.entities.recognitionChannels,
      recognitionChannelIds = _ref.result;
  return {
    recognitionChannels: recognitionChannels,
    recognitionChannelIds: recognitionChannelIds
  };
};

exports.default = {
  readRecognitionChannels: function readRecognitionChannels() {
    var baseUrl = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
    return (0, _utils.fetchJson)(baseUrl + '/api/recognitionChannels').then(normalizeRecognitionChannels).then(returnRecognitionChannels);
  }
};

//# sourceMappingURL=recognitionChannels-compiled.js.map