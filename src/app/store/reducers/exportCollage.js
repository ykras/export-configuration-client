'use strict';

import actionTypes from '../actionTypes';
import factory from '../factory';
import ids from '../identifiers';
import collageSettingTypes from '../../common/collageSettingTypes';
import {find, concat} from 'lodash';
import {assocPath, union, merge, append, without, dissoc} from 'ramda';

export const pictureTypes = {
  byId: (state = {}, {type, payload}) => {
    switch (type) {
      case actionTypes.ReplaceCollagePictureTypes:
        return payload.pictureTypes || state;
      default:
        return state;
    }
  },
  ids: (state = [], {type, payload}) => {
    switch (type) {
      case actionTypes.ReplaceCollagePictureTypes:
        return payload.pictureTypeIds || state;
      default:
        return state;
    }
  }
};

export const foregroundObjectTypes = {
  byId: (state = {}, {type, payload}) => {
    switch (type) {
      case actionTypes.ReplaceForegroundCollageObjectTypes:
        return payload.foregroundObjectTypes || state;
      default:
        return state;
    }
  },
  ids: (state = [], {type, payload}) => {
    switch (type) {
      case actionTypes.ReplaceForegroundCollageObjectTypes:
        return payload.foregroundObjectTypeIds || state;
      default:
        return state;
    }
  },
  selectedId: (state = null, {type, payload}) => {
    switch (type) {
      case actionTypes.SelectForegroundCollageObjectType:
        return payload.id || state;
      default:
        return state;
    }
  }
};

export const settingTypes = {
  byId: (state = {}, {type, payload}) => {
    switch (type) {
      case actionTypes.PrependCollageSettingTypes:
      case actionTypes.AppendCollageSettingTypes:
        return merge(state, payload.settingTypes);
      default:
        return state;
    }
  },
  ids: (state = [], {type, payload}) => {
    switch (type) {
      case actionTypes.PrependCollageSettingTypes:
        return concat(payload.settingTypeIds, state);
      case actionTypes.AppendCollageSettingTypes:
        return concat(state, payload.settingTypeIds);
      default:
        return state;
    }
  },
  selectedId: (state = null, {type, payload}) => {
    switch (type) {
      case actionTypes.SelectCollageSettingType:
        return payload.id || state;
      default:
        return state;
    }
  }
};

const initialSettings = factory.createCollageSettings();

export const settings = {
  ids: (state = initialSettings.ids, {type, payload}) => {
    switch (type) {
      case actionTypes.ReplaceCollageFooterTemplates:
        return union(state, payload.collageFooterTemplateIds);
      case actionTypes.ReplaceCollageTrafficLights:
        return union(state, payload.collageTrafficLightIds);
      case actionTypes.ReplaceCollageRoadSigns:
        return union(state, payload.collageRoadSignIds);
      case actionTypes.AddCollageTrafficLight:
        return append(payload.trafficLightSettingId, state);
      case actionTypes.AddCollageRoadSign:
        return append(payload.roadSignSettingId, state);
      case actionTypes.DeleteCollageSetting:
        return without(payload.settingId, state);
      default:
        return state;
    }
  },
  byId: (state = initialSettings.byId, {type, payload}) => {
    switch (type) {
      case actionTypes.PrependCollageSettingTypes: {
        const allViolationsSettingTypeId = find(payload.settingTypes, t => t.name === collageSettingTypes.AllViolations).id;
        const currentViolationSettingTypeId = find(payload.settingTypes, t => t.name === collageSettingTypes.CurrentViolation).id;
        let nextState = assocPath([ids.VideoExportModeSettingId, 'typeId'], allViolationsSettingTypeId, state);
        nextState = assocPath([ids.VideoSecondsBeforeCheckTimeSettingId, 'typeId'], allViolationsSettingTypeId, nextState);
        nextState = assocPath([ids.VideoSecondsAfterCheckTimeSettingId, 'typeId'], allViolationsSettingTypeId, nextState);
        nextState = assocPath([ids.CollageDefaultFontSettingId, 'typeId'], allViolationsSettingTypeId, nextState);
        nextState = assocPath([ids.CollageExportPathSettingId, 'typeId'], allViolationsSettingTypeId, nextState);
        nextState = assocPath([ids.CollageViolationFontSettingId, 'typeId'], currentViolationSettingTypeId, nextState);
        return nextState || state;
      }
      case actionTypes.SelectCollageVideoExportMode:
        return assocPath([ids.VideoExportModeSettingId, 'value'], payload.name, state);
      case actionTypes.BeginCollageEditing:
        return assocPath([payload.settingId, 'isEditing'], true, state);
      case actionTypes.FinishCollageEditing:
        return assocPath([payload.settingId, 'isEditing'], false, state);
      case actionTypes.ReplaceCollageVideoExportSettings: {
        let nextState = assocPath([ids.VideoSecondsBeforeCheckTimeSettingId, 'value'], payload.videoSecondsBeforeCheckTime, state);
        nextState = assocPath([ids.VideoSecondsAfterCheckTimeSettingId, 'value'], payload.videoSecondsAfterCheckTime, nextState);
        return nextState || state;
      }
      case actionTypes.UpdateCollageVideoSecondsBeforeCheckTime: {
        const nextState = assocPath([ids.VideoSecondsBeforeCheckTimeSettingId, 'value'], payload.seconds, state);
        return nextState || state;
      }
      case actionTypes.UpdateCollageVideoSecondsAfterCheckTime: {
        const nextState = assocPath([ids.VideoSecondsAfterCheckTimeSettingId, 'value'], payload.seconds, state);
        return nextState || state;
      }
      case actionTypes.UpdateCollageDefaultFont: {
        const nextState = assocPath([ids.CollageDefaultFontSettingId, 'value'], payload, state);
        return nextState || state;
      }
      case actionTypes.UpdateCollageSettingValueInheritance: {
        const nextState = assocPath([payload.settingId, 'isValueInherited'], payload.isSettingValueInherited, state);
        return nextState || state;
      }
      case actionTypes.UpdateCollageExportPath: {
        const nextState = assocPath([ids.CollageExportPathSettingId, 'value'], payload.exportPath, state);
        return nextState || state;
      }
      case actionTypes.UpdateCollageFont: {
        const nextState = assocPath([ids.CollageViolationFontSettingId, 'value', payload.violationTypeId], payload.font, state);
        return nextState || state;
      }
      case actionTypes.ReplaceCollageFooterTemplates: {
        let nextState = {...state};
        payload.collageFooterTemplates.forEach(t => {
          nextState = assocPath([t.id], t, nextState);
        });
        return nextState || state;
      }
      case actionTypes.ReplaceCollageTrafficLights: {
        let nextState = {...state};
        payload.collageTrafficLights.forEach(tl => {
          const isSelected = nextState[tl.id] ? nextState[tl.id].isSelected : false;
          nextState = assocPath([tl.id], tl, nextState);
          nextState[tl.id].isSelected = isSelected;
        });
        return nextState || state;
      }
      case actionTypes.ReplaceCollageRoadSigns: {
        let nextState = {...state};
        payload.collageRoadSigns.forEach(rs => {
          nextState = assocPath([rs.id], rs, nextState);
        });
        return nextState || state;
      }
      case actionTypes.UpdateCollageFooterTemplate: {
        const nextState = assocPath([payload.footerTemplateSettingId, 'value'], payload.footerLines, state);
        return nextState || state;
      }
      case actionTypes.AddCollageTrafficLight:
        return assocPath([payload.trafficLightSettingId], payload.trafficLightSetting, state);
      case actionTypes.AddCollageRoadSign:
        return assocPath([payload.roadSignSettingId], payload.roadSignSetting, state);
      case actionTypes.UpdateCollageSettingSelection: {
        const nextState = assocPath([payload.settingId, 'isSelected'], payload.settingSelected, state);
        return nextState || state;
      }
      case actionTypes.DeleteCollageSetting:
        return dissoc(payload.settingId, state);
      case actionTypes.UpdateCollageTrafficLight:
        return assocPath([payload.trafficLightSettingId, 'value'], payload.trafficLightSettingValue, state);
      case actionTypes.UpdateCollageRoadSign:
        return assocPath([payload.roadSignSettingId, 'value'], payload.roadSignSettingValue, state);
      default:
        return state;
    }
  }
};

export const videoExportModes = {
  byId: (state = {}, {type, payload}) => {
    switch (type) {
      case actionTypes.ReplaceCollageVideoExportModes:
        return payload.videoExportModes || state;
      default:
        return state;
    }
  },
  ids: (state = [], {type, payload}) => {
    switch (type) {
      case actionTypes.ReplaceCollageVideoExportModes:
        return payload.videoExportModeIds || state;
      default:
        return state;
    }
  },
  selectedId: (state = null, {type, payload}) => {
    switch (type) {
      case actionTypes.SelectCollageVideoExportMode:
        return payload.id || state;
      default:
        return state;
    }
  }
};

export const collage = (state = null, {type, payload}) => {
  switch (type) {
    case actionTypes.ReplaceCollage:
      return payload.collage || state;
    default:
      return state;
  }
};

export const selectedRectangle = (state = null, {type, payload}) => {
  switch (type) {
    case actionTypes.UpdateCollageSelectedRectangle:
      return payload.selectedRectangle || state;
    case actionTypes.DeleteCollageSelectedRectangle:
      return null;
    default:
      return state;
  }
};
