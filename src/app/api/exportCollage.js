'use strict';

import {fetchJson} from './utils';
import {normalize, Schema, arrayOf} from 'normalizr';
import {dissoc, compose} from 'ramda';

const foregroundObjectType = new Schema('foregroundObjectTypes');
const normalizeForegroundObjectTypes = data => normalize(data, arrayOf(foregroundObjectType));
const returnForegroundObjectTypes = ({entities: {foregroundObjectTypes},
  result: foregroundObjectTypeIds}) => ({
    foregroundObjectTypes,
    foregroundObjectTypeIds
  });

const settingType = new Schema('settingTypes');
const normalizeSettingTypes = data => normalize(data, arrayOf(settingType));
const returnSettingTypes = ({entities: {settingTypes}, result: settingTypeIds}) => ({
  settingTypes,
  settingTypeIds
});

const returnCollage = collage => ({
  ...compose(dissoc('imageFormat'), dissoc('imageBase64'))(collage),
  imageBase64: `data:image/${collage.imageFormat};base64,${collage.imageBase64}`
});

const footerTemplate = new Schema('footerTemplates', {idAttribute: 'collagePictureType'});
const normalizeFooterTemplates = data => normalize(data, arrayOf(footerTemplate));
const returnFooterTemplates = ({entities: {footerTemplates}, result: collagePictureTypes}) => ({
  footerTemplates,
  collagePictureTypes
});

const trafficLight = new Schema('trafficLights');
const normalizeTrafficLights = data => normalize(data, arrayOf(trafficLight));
const returnTrafficLights = ({entities: {trafficLights}, result: trafficLightIds}) => ({
  trafficLights,
  trafficLightIds
});

const pictureType = new Schema('pictureTypes');
const normalizePictureTypes = data => normalize(data, arrayOf(pictureType));
const returnPictureTypes = ({entities: {pictureTypes}, result: pictureTypeIds}) => ({
  pictureTypes,
  pictureTypeIds
});

const roadSign = new Schema('roadSigns');
const normalizeRoadSigns = data => normalize(data, arrayOf(roadSign));
const returnRoadSigns = ({entities: {roadSigns}, result: roadSignIds}) => ({
  roadSigns,
  roadSignIds
});

export default {
  readForegroundCollageObjectTypes: (baseUrl = '') =>
    fetchJson(`${baseUrl}/api/exportCollage/foregroundObjectTypes`)
      .then(normalizeForegroundObjectTypes)
      .then(returnForegroundObjectTypes),
  readCollage: (baseUrl = '', violationTypeId) =>
    fetchJson(`${baseUrl}/api/exportCollage/latestCollage/${violationTypeId}`)
      .then(returnCollage),
  readCollageSettingTypes: (baseUrl = '') =>
    fetchJson(`${baseUrl}/api/exportCollage/settingTypes`)
      .then(normalizeSettingTypes)
      .then(returnSettingTypes),
  readCollageDefaultFont: (baseUrl = '') =>
    fetchJson(`${baseUrl}/api/exportCollage/defaultFont`),
  updateCollageDefaultFont: (baseUrl = '', defaultFont) =>
    fetchJson(`${baseUrl}/api/exportCollage/defaultFont`,
      {
        method: 'PUT',
        body: JSON.stringify(defaultFont)
      }),
  readCollageDefaultFontPriority: (baseUrl = '') =>
    fetchJson(`${baseUrl}/api/exportCollage/defaultFont/priority`),
  updateCollageDefaultFontPriority: (baseUrl = '', preferDefaultFont) =>
    fetchJson(`${baseUrl}/api/exportCollage/defaultFont/priority`,
      {
        method: 'PUT',
        body: JSON.stringify(preferDefaultFont)
      }),
  readCollageExportPath: (baseUrl = '') =>
    fetchJson(`${baseUrl}/api/exportCollage/exportPath`),
  updateCollageExportPath: (baseUrl = '', exportPath) =>
    fetchJson(`${baseUrl}/api/exportCollage/exportPath`,
      {
        method: 'PUT',
        body: JSON.stringify(exportPath)
      }),
  readCollageFont: (baseUrl = '', violationTypeId) =>
    fetchJson(`${baseUrl}/api/exportCollage/font/${violationTypeId}`),
  updateCollageFont: (baseUrl = '', violationTypeId, font) =>
    fetchJson(`${baseUrl}/api/exportCollage/font/${violationTypeId}`,
      {
        method: 'PUT',
        body: JSON.stringify(font)
      }),
  readCollageFooterTemplates: (baseUrl = '', violationTypeId) =>
    fetchJson(`${baseUrl}/api/exportCollage/footerTemplates/${violationTypeId}`)
      .then(normalizeFooterTemplates)
      .then(returnFooterTemplates),
  updateCollageFooterTemplate: (baseUrl = '', violationTypeId, footerTemplate) =>
    fetchJson(`${baseUrl}/api/exportCollage/footerTemplates/${violationTypeId}`,
      {
        method: 'PUT',
        body: JSON.stringify(footerTemplate)
      }),
  readCollageTrafficLights: (baseUrl = '', violationTypeId) =>
    fetchJson(`${baseUrl}/api/exportCollage/trafficLights/${violationTypeId}`)
      .then(normalizeTrafficLights)
      .then(returnTrafficLights),
  createCollageTrafficLight: (baseUrl = '', violationTypeId) =>
    fetchJson(`${baseUrl}/api/exportCollage/trafficLights/${violationTypeId}`,
      {
        method: 'POST'
      }),
  deleteCollageTrafficLight: (baseUrl = '', trafficLightId) =>
    fetchJson(`${baseUrl}/api/exportCollage/trafficLights/${trafficLightId}`,
      {
        method: 'DELETE'
      }),
  readCollagePictureTypes: (baseUrl = '') =>
    fetchJson(`${baseUrl}/api/exportCollage/pictureTypes`)
      .then(normalizePictureTypes)
      .then(returnPictureTypes),
  updateCollageTrafficLight: (baseUrl = '', trafficLightId, trafficLight) =>
    fetchJson(`${baseUrl}/api/exportCollage/trafficLights/${trafficLightId}`,
      {
        method: 'PUT',
        body: JSON.stringify(trafficLight)
      }),
  createCollageRoadSign: (baseUrl = '', violationTypeId) =>
    fetchJson(`${baseUrl}/api/exportCollage/roadSigns/${violationTypeId}`,
      {
        method: 'POST'
      }),
  deleteCollageRoadSign: (baseUrl = '', roadSignId) =>
    fetchJson(`${baseUrl}/api/exportCollage/roadSigns/${roadSignId}`,
      {
        method: 'DELETE'
      }),
  readCollageRoadSigns: (baseUrl = '', violationTypeId) =>
    fetchJson(`${baseUrl}/api/exportCollage/roadSigns/${violationTypeId}`)
      .then(normalizeRoadSigns)
      .then(returnRoadSigns),
  uploadCollageRoadSignFile: (baseUrl = '', violationTypeId, roadSignFile) =>
    fetchJson(`${baseUrl}/api/exportCollage/roadSigns/${violationTypeId}/files`,
      {
        method: 'POST',
        body: JSON.stringify(roadSignFile)
      }),
  updateCollageRoadSign: (baseUrl = '', roadSignId, roadSign) =>
    fetchJson(`${baseUrl}/api/exportCollage/roadSigns/${roadSignId}`,
      {
        method: 'PUT',
        body: JSON.stringify(roadSign)
      }),
  saveCurrentCollageConfiguration: (baseUrl = '') =>
    fetchJson(`${baseUrl}/api/exportCollage/currentConfig`,
      {
        method: 'PUT'
      })
};
