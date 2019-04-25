'use strict';

export const getOverviewPicture = state => state.trafficLights.overviewPicture;

export const getOverviewPictureDataUrl = state => {
  const picture = getOverviewPicture(state);
  return picture ? picture.imageDataUrl : null;
};

export const getOverviewPictureSize = state => {
  const picture = getOverviewPicture(state);
  return picture ? {width: picture.widthInPixels, height: picture.heightInPixels} : {width: 0, height: 0};
};

export const getOverviewPictureSelectedRectangle = state => state.trafficLights.overviewPictureSelectedRectangle;

export const getTrafficLightsSettings = state =>
  state.trafficLights.settings.ids.map(id => state.trafficLights.settings.byId[id]);
