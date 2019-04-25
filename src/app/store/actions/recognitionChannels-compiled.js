'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.requestReadRecognitionChannels = exports.selectRecognitionChannel = exports.replaceRecognitionChannels = undefined;

var _actionTypes = require('../actionTypes');

var _actionTypes2 = _interopRequireDefault(_actionTypes);

var _common = require('./common');

var _api = require('../../api');

var _api2 = _interopRequireDefault(_api);

var _requestTypes = require('../../common/requestTypes');

var _requestTypes2 = _interopRequireDefault(_requestTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var replaceRecognitionChannels = exports.replaceRecognitionChannels = function replaceRecognitionChannels(_ref) {
  var recognitionChannels = _ref.recognitionChannels,
      recognitionChannelIds = _ref.recognitionChannelIds;
  return {
    type: _actionTypes2.default.ReplaceRecognitionChannels,
    payload: { recognitionChannels: recognitionChannels, recognitionChannelIds: recognitionChannelIds }
  };
};

var selectRecognitionChannel = exports.selectRecognitionChannel = function selectRecognitionChannel(id) {
  return {
    type: _actionTypes2.default.SelectRecognitionChannel,
    payload: { id: id }
  };
};

var selectFirstRecognitionChannel = function selectFirstRecognitionChannel(_ref2) {
  var recognitionChannelIds = _ref2.recognitionChannelIds;
  return recognitionChannelIds.length > 0 ? selectRecognitionChannel(recognitionChannelIds[0]) : (0, _common.noop)('No recognition channel to select');
};

var requestReadRecognitionChannels = exports.requestReadRecognitionChannels = (0, _common.createRequestThunk)({
  request: _api2.default.readRecognitionChannels,
  key: _requestTypes2.default.ReadRecognitionChannels,
  success: [replaceRecognitionChannels, selectFirstRecognitionChannel]
});

//# sourceMappingURL=recognitionChannels-compiled.js.map