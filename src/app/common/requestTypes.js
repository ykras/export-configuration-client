'use strict';

import keyMirror from 'keymirror';
import {merge} from 'ramda';

const requestTypeConstants = keyMirror({
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

const requestTypeCreators = {
  readExportEnabled: exportTypeId => `ReadExportEnabled/${exportTypeId}`,
  updateExportEnabled: exportTypeId => `UpdateExportEnabled/${exportTypeId}`,
  repeatExport: exportTypeId => `RepeatExport/${exportTypeId}`,
  readCollage: violationTypeId => `ReadCollage/${violationTypeId}`,
  readCollageFont: violationTypeId => `ReadCollageFont/${violationTypeId}`,
  updateCollageFont: violationTypeId => `UpdateCollageFont/${violationTypeId}`,
  readCollageFooterTemplates: violationTypeId => `ReadCollageFooterTemplates/${violationTypeId}`,
  updateCollageFooterTemplate: (violationTypeId, collagePictureType) =>
    `UpdateCollageFooterTemplate/${violationTypeId}/${collagePictureType}`,
  readCollageTrafficLights: violationTypeId => `ReadCollageTrafficLights/${violationTypeId}`,
  createCollageTrafficLight: violationTypeId => `CreateCollageTrafficLight/${violationTypeId}`,
  deleteCollageTrafficLight: trafficLightId => `DeleteCollageTrafficLight/${trafficLightId}`,
  updateCollageTrafficLight: trafficLightId => `UpdateCollageTrafficLight/${trafficLightId}`,
  createCollageRoadSign: violationTypeId => `CreateCollageRoadSign/${violationTypeId}`,
  deleteCollageRoadSign: roadSignId => `DeleteCollageRoadSign/${roadSignId}`,
  readCollageRoadSigns: violationTypeId => `ReadCollageRoadSigns/${violationTypeId}`,
  uploadCollageRoadSignFile: violationTypeId => `UploadCollageRoadSignFile/${violationTypeId}`,
  updateCollageRoadSign: roadSignId => `UpdateCollageRoadSign/${roadSignId}`,
  readOverviewPicture: recognitionChannelId => `ReadOverviewPicture/${recognitionChannelId}`,
  readTrafficLight: recognitionChannelId => `ReadTrafficLight/${recognitionChannelId}`,
  updateTrafficLight: recognitionChannelId => `UpdateTrafficLight/${recognitionChannelId}`
};

export default merge(requestTypeConstants, requestTypeCreators);
