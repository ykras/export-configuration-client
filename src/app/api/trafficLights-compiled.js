'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _utils = require('./utils');

var returnOverviewPicture = function returnOverviewPicture(_ref) {
  var imageFormat = _ref.imageFormat,
      imageBase64 = _ref.imageBase64,
      widthInPixels = _ref.widthInPixels,
      heightInPixels = _ref.heightInPixels;
  return {
    imageDataUrl: 'data:image/' + imageFormat + ';base64,' + imageBase64,
    widthInPixels: widthInPixels,
    heightInPixels: heightInPixels
  };
};

exports.default = {
  readOverviewPicture: function readOverviewPicture() {
    var baseUrl = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
    var recognitionChannelId = arguments[1];
    return (0, _utils.fetchJson)(baseUrl + '/api/trafficLights/overviewPicture/fromChannel/' + recognitionChannelId).then(returnOverviewPicture);
  },
  readTrafficLight: function readTrafficLight() {
    var baseUrl = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
    var recognitionChannelId = arguments[1];
    return (0, _utils.fetchJson)(baseUrl + '/api/trafficLights/trafficLight/fromChannel/' + recognitionChannelId).then(function (value) {
      return { id: recognitionChannelId, value: value };
    });
  },
  updateTrafficLight: function updateTrafficLight() {
    var baseUrl = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
    var recognitionChannelId = arguments[1];
    var trafficLight = arguments[2];
    return (0, _utils.fetchJson)(baseUrl + '/api/trafficLights/trafficLight/fromChannel/' + recognitionChannelId, {
      method: 'PUT',
      body: JSON.stringify(trafficLight)
    });
  }
};

//# sourceMappingURL=trafficLights-compiled.js.map