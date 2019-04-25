'use strict';

import {combineReducers} from 'redux';
import * as common from './common';
import * as exportTypes from './exportTypes';
import * as exportStatus from './exportStatus';
import * as exportStatistic from './exportStatistic';
import * as violationTypes from './violationTypes';
import * as exportCollage from './exportCollage';
import * as recognitionChannels from './recognitionChannels';
import * as trafficLights from './trafficLights';
import * as exportVocordTef from './exportVocordTef';
import * as exportPotokPlus from './exportPotokPlus';

export default combineReducers({
  exportTypes: combineReducers({
    byId: exportTypes.byId,
    ids: exportTypes.ids
  }),
  violationTypes: combineReducers({
    byId: violationTypes.byId,
    ids: violationTypes.ids
  }),
  recognitionChannels: combineReducers({
    byId: recognitionChannels.byId,
    ids: recognitionChannels.ids
  }),
  exportStatus: combineReducers({
    exportEnabled: exportStatus.exportEnabled,
    exportPotokPlusEnabled: exportStatus.exportPotokPlusEnabled,
    repeatExportEnabled: exportStatus.repeatExportEnabled
  }),
  exportStatistic: exportStatistic.statistic,
  exportCollage: combineReducers({
    pictureTypes: combineReducers({
      byId: exportCollage.pictureTypes.byId,
      ids: exportCollage.pictureTypes.ids
    }),
    foregroundObjectTypes: combineReducers({
      byId: exportCollage.foregroundObjectTypes.byId,
      ids: exportCollage.foregroundObjectTypes.ids
    }),
    settingTypes: combineReducers({
      byId: exportCollage.settingTypes.byId,
      ids: exportCollage.settingTypes.ids
    }),
    settings: combineReducers({
      byId: exportCollage.settings.byId,
      ids: exportCollage.settings.ids
    }),
    videoExportModes: combineReducers({
      byId: exportCollage.videoExportModes.byId,
      ids: exportCollage.videoExportModes.ids
    }),
    collage: exportCollage.collage,
    collageSelectedRectangle: exportCollage.selectedRectangle
  }),
  trafficLights: combineReducers({
    overviewPicture: trafficLights.overviewPicture,
    overviewPictureSelectedRectangle: trafficLights.overviewPictureSelectedRectangle,
    settings: combineReducers({
      byId: trafficLights.settings.byId,
      ids: trafficLights.settings.ids
    })
  }),
  exportVocordTef: combineReducers({
    settings: exportVocordTef.settings,
    videoExportSettings: exportVocordTef.videoExportSettings,
    videoExportModes: combineReducers({
      byId: exportVocordTef.videoExportModes.byId,
      ids: exportVocordTef.videoExportModes.ids
    })
  }),
  exportPotokPlus: combineReducers({
    settings: exportPotokPlus.settings
  }),
  ui: combineReducers({
    selectedExportTypeId: exportTypes.selectedExportTypeId,
    selectedViolationTypeId: violationTypes.selectedViolationTypeId,
    selectedRecognitionChannelId: recognitionChannels.selectedRecognitionChannelId,
    selectedCollageVideoExportModeId: exportCollage.videoExportModes.selectedId,
    selectedVocordTefVideoExportModeId: exportVocordTef.videoExportModes.selectedId,
    selectedForegroundCollageObjectTypeId: exportCollage.foregroundObjectTypes.selectedId,
    selectedCollageSettingTypeId: exportCollage.settingTypes.selectedId,
    toast: common.toast
  }),
  requests: common.requests
});
