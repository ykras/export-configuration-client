'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getRecognitionChannel = exports.getSelectedRecognitionChannelId = exports.getRecognitionChannels = undefined;

var _ramda = require('ramda');

var getRecognitionChannels = exports.getRecognitionChannels = function getRecognitionChannels(state) {
  return state.recognitionChannels.ids.map(function (id) {
    return state.recognitionChannels.byId[id];
  });
};

var getSelectedRecognitionChannelId = exports.getSelectedRecognitionChannelId = function getSelectedRecognitionChannelId(state) {
  return state.ui.selectedRecognitionChannelId;
};

var getRecognitionChannel = exports.getRecognitionChannel = (0, _ramda.curry)(function (state, id) {
  return state.recognitionChannels.byId[id] || null;
});

//# sourceMappingURL=recognitionChannels-compiled.js.map