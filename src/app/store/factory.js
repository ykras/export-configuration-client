'use strict';

import ids from './identifiers';
import settingNames from '../common/collageSettingNames';

const createCollageSettings = () => {
  return {
    ids: [
      ids.CollageDefaultFontSettingId,
      ids.CollageViolationFontSettingId,
      ids.CollageExportPathSettingId,
      ids.VideoExportModeSettingId,
      ids.VideoSecondsBeforeCheckTimeSettingId,
      ids.VideoSecondsAfterCheckTimeSettingId
    ],
    byId: {
      [ids.CollageDefaultFontSettingId]: {
        id: ids.CollageDefaultFontSettingId,
        typeId: undefined,
        name: settingNames.Font,
        value: undefined,
        editorTypeId: ids.FontEditorTypeId,
        isEditing: false
      },
      [ids.CollageViolationFontSettingId]: {
        id: ids.CollageViolationFontSettingId,
        typeId: undefined,
        name: settingNames.Font,
        value: undefined,
        editorTypeId: ids.FontEditorTypeId,
        isEditing: false,
        parentId: ids.CollageDefaultFontSettingId,
        isValueInherited: true
      },
      [ids.CollageExportPathSettingId]: {
        id: ids.CollageExportPathSettingId,
        typeId: undefined,
        name: settingNames.CollageExportPath,
        value: undefined,
        editorTypeId: ids.TextInputEditorTypeId,
        isEditing: false
      },
      [ids.VideoExportModeSettingId]: {
        id: ids.VideoExportModeSettingId,
        typeId: undefined,
        name: settingNames.ExportVideo,
        value: undefined,
        editorTypeId: ids.SelectorEditorTypeId,
        isEditing: false
      },
      [ids.VideoSecondsBeforeCheckTimeSettingId]: {
        id: ids.VideoSecondsBeforeCheckTimeSettingId,
        typeId: undefined,
        name: settingNames.CollageVideoSecondsBeforeCheckTime,
        value: undefined,
        editorTypeId: ids.TextInputEditorTypeId,
        isEditing: false
      },
      [ids.VideoSecondsAfterCheckTimeSettingId]: {
        id: ids.VideoSecondsAfterCheckTimeSettingId,
        typeId: undefined,
        name: settingNames.CollageVideoSecondsAfterCheckTime,
        value: undefined,
        editorTypeId: ids.TextInputEditorTypeId,
        isEditing: false
      }
    }
  };
};

export default {
  createCollageSettings
};
