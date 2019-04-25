'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
var getOverviewPicture = exports.getOverviewPicture = function getOverviewPicture(state) {
  return state.trafficLights.overviewPicture;
};

var getOverviewPictureDataUrl = exports.getOverviewPictureDataUrl = function getOverviewPictureDataUrl(state) {
  var picture = getOverviewPicture(state);
  return picture ? picture.imageDataUrl : null;
};

var getOverviewPictureSize = exports.getOverviewPictureSize = function getOverviewPictureSize(state) {
  var picture = getOverviewPicture(state);
  return picture ? { width: picture.widthInPixels, height: picture.heightInPixels } : { width: 0, height: 0 };
};

var getOverviewPictureSelectedRectangle = exports.getOverviewPictureSelectedRectangle = function getOverviewPictureSelectedRectangle(state) {
  return state.trafficLights.overviewPictureSelectedRectangle;
};

var getTrafficLightsSettings = exports.getTrafficLightsSettings = function getTrafficLightsSettings(state) {
  return state.trafficLights.settings.ids.map(function (id) {
    return state.trafficLights.settings.byId[id];
  });
};

//# sourceMappingURL=trafficLights-compiled.js.map