'use strict';

import {curry, compose} from 'ramda';

export const getSpreadOutViolationsEnabled = state =>
  state.exportVocordTef.settings.usePathTemplate;

export const getVocordTefSettings = state => {
  const settings = state.exportVocordTef.settings;
  if (settings && !settings.exportRelativePathTemplate) {
    settings.exportRelativePathTemplate = '%date:dd.MM.yyyy%\\%type%';
  }
  return settings;
};

export const getVocordTefVideoExportModes = state =>
  state.exportVocordTef.videoExportModes.ids.map(id => state.exportVocordTef.videoExportModes.byId[id]);

export const getSelectedVocordTefVideoExportModeId = state => state.ui.selectedVocordTefVideoExportModeId;

const getVocordTefVideoExportMode = curry((state, id) => state.exportVocordTef.videoExportModes.byId[id] || null);

export const getSelectedVocordTefVideoExportMode = state => compose(
  getVocordTefVideoExportMode(state),
  getSelectedVocordTefVideoExportModeId
)(state);

export const getVocordTefVideoExportSettings = state => state.exportVocordTef.videoExportSettings;
