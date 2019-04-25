'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _keymirror = require('keymirror');

var _keymirror2 = _interopRequireDefault(_keymirror);

var _ramda = require('ramda');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var requestTypeConstants = (0, _keymirror2.default)({
  ReadExportTypes: null,
  ReadSelectedExportTypeId: null,
  UpdateSelectedExportType: null,
  ReadExportPotokPlusEnabled: null,
  UpdateExportPotokPlusEnabled: null,
  ReadViolationTypes: null,
  ReadForegroundCollageObjectTypes: null,
  ReadCollageSettingTypes: null,
  ReadCollageVideoExportModes: null,
  ReadCollageCurrentVideoExportMode: null,
  UpdateCollageCurrentVideoExportMode: null,
  ReadCollageVideoExportSettings: null,
  UpdateCollageVideoExportSettings: null,
  ReadCollageDefaultFont: null,
  UpdateCollageDefaultFont: null,
  ReadCollageDefaultFontPriority: null,
  UpdateCollageDefaultFontPriority: null,
  ReadCollagePictureTypes: null,
  SaveCurrentCollageConfiguration: null,
  ReadCollageExportPath: null,
  UpdateCollageExportPath: null,
  ReadRecognitionChannels: null,
  ReadVocordTefSettings: null,
  UpdateVocordTefSettings: null,
  ReadVocordTefVideoExportModes: null,
  ReadVocordTefCurrentVideoExportMode: null,
  UpdateVocordTefCurrentVideoExportMode: null,
  ReadVocordTefVideoExportSettings: null,
  UpdateVocordTefVideoExportSettings: null,
  ReadPotokPlusSettings: null,
  UpdatePotokPlusSettings: null,
  ReadExportStatistic: null
});

var requestTypeCreators = {
  readExportEnabled: function readExportEnabled(exportTypeId) {
    return 'ReadExportEnabled/' + exportTypeId;
  },
  updateExportEnabled: function updateExportEnabled(exportTypeId) {
    return 'UpdateExportEnabled/' + exportTypeId;
  },
  repeatExport: function repeatExport(exportTypeId) {
    return 'RepeatExport/' + exportTypeId;
  },
  readCollage: function readCollage(violationTypeId) {
    return 'ReadCollage/' + violationTypeId;
  },
  readCollageFont: function readCollageFont(violationTypeId) {
    return 'ReadCollageFont/' + violationTypeId;
  },
  updateCollageFont: function updateCollageFont(violationTypeId) {
    return 'UpdateCollageFont/' + violationTypeId;
  },
  readCollageFooterTemplates: function readCollageFooterTemplates(violationTypeId) {
    return 'ReadCollageFooterTemplates/' + violationTypeId;
  },
  updateCollageFooterTemplate: function updateCollageFooterTemplate(violationTypeId, collagePictureType) {
    return 'UpdateCollageFooterTemplate/' + violationTypeId + '/' + collagePictureType;
  },
  readCollageTrafficLights: function readCollageTrafficLights(violationTypeId) {
    return 'ReadCollageTrafficLights/' + violationTypeId;
  },
  createCollageTrafficLight: function createCollageTrafficLight(violationTypeId) {
    return 'CreateCollageTrafficLight/' + violationTypeId;
  },
  deleteCollageTrafficLight: function deleteCollageTrafficLight(trafficLightId) {
    return 'DeleteCollageTrafficLight/' + trafficLightId;
  },
  updateCollageTrafficLight: function updateCollageTrafficLight(trafficLightId) {
    return 'UpdateCollageTrafficLight/' + trafficLightId;
  },
  createCollageRoadSign: function createCollageRoadSign(violationTypeId) {
    return 'CreateCollageRoadSign/' + violationTypeId;
  },
  deleteCollageRoadSign: function deleteCollageRoadSign(roadSignId) {
    return 'DeleteCollageRoadSign/' + roadSignId;
  },
  readCollageRoadSigns: function readCollageRoadSigns(violationTypeId) {
    return 'ReadCollageRoadSigns/' + violationTypeId;
  },
  uploadCollageRoadSignFile: function uploadCollageRoadSignFile(violationTypeId) {
    return 'UploadCollageRoadSignFile/' + violationTypeId;
  },
  updateCollageRoadSign: function updateCollageRoadSign(roadSignId) {
    return 'UpdateCollageRoadSign/' + roadSignId;
  },
  readOverviewPicture: function readOverviewPicture(recognitionChannelId) {
    return 'ReadOverviewPicture/' + recognitionChannelId;
  },
  readTrafficLight: function readTrafficLight(recognitionChannelId) {
    return 'ReadTrafficLight/' + recognitionChannelId;
  },
  updateTrafficLight: function updateTrafficLight(recognitionChannelId) {
    return 'UpdateTrafficLight/' + recognitionChannelId;
  }
};

exports.default = (0, _ramda.merge)(requestTypeConstants, requestTypeCreators);

//# sourceMappingURL=requestTypes-compiled.js.map