'use strict';

import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import './CollageSettingValueEditor.css';
import localizedStrings, {localizeItems} from '../../localization';
import {capitalize, toNumber, isNumber, isEqual, some} from 'lodash';
import ids from '../../store/identifiers';
import actionCreators from '../../store/actions';
import selectors from '../../store/selectors';
import Selector from '../Selector';
import {baseUrl} from '../../api';
import TextInput from '../TextInput';
import FontEditor from '../FontEditor';
import FooterTemplateEditor from '../FooterTemplateEditor';
import {settingIdsToCollagePictureTypesMap} from '../../common/collagePictureTypes';
import base64 from 'base64-js';
import CollageTrafficLightEditor from '../CollageTrafficLightEditor';
import RoadSignEditor from '../RoadSignEditor';

const selectorItems = props => {
  const {settingId, videoExportModes} = props;
  switch (settingId) {
    case ids.VideoExportModeSettingId:
      return localizeItems(videoExportModes, capitalize);
    default:
      return [];
  }
};

const selectItem = props => {
  const {settingId, selectCollageVideoExportMode} = props;
  switch (settingId) {
    case ids.VideoExportModeSettingId:
      return (...args) => {
        const [videoExportModeId] = args;
        selectCollageVideoExportMode(videoExportModeId);
      };
    default:
      return () => {};
  }
};

const selectedItemId = props => {
  const {settingId, selectedVideoExportModeId} = props;
  switch (settingId) {
    case ids.VideoExportModeSettingId:
      return selectedVideoExportModeId;
    default:
      return null;
  }
};

const defaultText = props => {
  const {settingId, videoSecondsBeforeCheckTime, videoSecondsAfterCheckTime, settingValue} = props;
  switch (settingId) {
    case ids.VideoSecondsBeforeCheckTimeSettingId:
      return `${videoSecondsBeforeCheckTime}`;
    case ids.VideoSecondsAfterCheckTimeSettingId:
      return `${videoSecondsAfterCheckTime}`;
    case ids.CollageExportPathSettingId:
      return settingValue;
    default:
      return '';
  }
};

const editText = props => {
  const {settingId, videoSecondsBeforeCheckTime, videoSecondsAfterCheckTime,
    updateCollageVideoSecondsBeforeCheckTime, updateCollageVideoSecondsAfterCheckTime,
    updateCollageExportPath, settingValue} = props;
  switch (settingId) {
    case ids.VideoSecondsBeforeCheckTimeSettingId:
      return seconds => {
        const secondsNum = toNumber(seconds);
        if (secondsNum !== videoSecondsBeforeCheckTime) {
          updateCollageVideoSecondsBeforeCheckTime(secondsNum);
        }
      };
    case ids.VideoSecondsAfterCheckTimeSettingId:
      return seconds => {
        const secondsNum = toNumber(seconds);
        if (secondsNum !== videoSecondsAfterCheckTime) {
          updateCollageVideoSecondsAfterCheckTime(secondsNum);
        }
      };
    case ids.CollageExportPathSettingId:
      return exportPath => {
        if (exportPath !== settingValue) {
          updateCollageExportPath(exportPath);
        }
      };
    default:
      return () => {};
  }
};

const defaultValueObject = props => {
  const {settingId, settingValue, violationTypeId} = props;
  switch (settingId.split('/')[0]) {
    case ids.CollageDefaultFontSettingId: {
      const value = settingValue || {name: '', sizeInPoints: ''};
      return {fontName: value.name, fontSize: `${value.sizeInPoints}`};
    }
    case ids.CollageViolationFontSettingId: {
      const value = settingValue[violationTypeId] || {name: '', sizeInPoints: ''};
      return {fontName: value.name, fontSize: `${value.sizeInPoints}`};
    }
    case ids.CollageTrafficLightSettingId:
    case ids.CollageRoadSignSettingId:
      return settingValue;
    default:
      return {};
  }
};

const editValueObject = props => {
  const {settingId, settingValue, updateCollageDefaultFont, requestUpdateCollageDefaultFont,
    updateCollageFont, requestUpdateCollageFont, violationTypeId, requestReadCollage,
    updateCollageTrafficLight, updateCollageRoadSign} = props;
  switch (settingId.split('/')[0]) {
    case ids.CollageDefaultFontSettingId:
      return value => {
        const currentDefaultFont = settingValue;
        const newDefaultFont = {name: value.fontName, sizeInPoints: toNumber(value.fontSize)};
        if (!isEqual(newDefaultFont, currentDefaultFont)) {
          requestUpdateCollageDefaultFont(baseUrl, newDefaultFont)
            .then(() => updateCollageDefaultFont(newDefaultFont))
            .then(() => requestReadCollage(baseUrl, violationTypeId));
        }
      };
    case ids.CollageViolationFontSettingId:
      return value => {
        const currentFont = settingValue[violationTypeId];
        const newFont = {name: value.fontName, sizeInPoints: toNumber(value.fontSize)};
        if (!isEqual(newFont, currentFont)) {
          requestUpdateCollageFont(baseUrl, violationTypeId, newFont)
            .then(() => updateCollageFont(newFont))
            .then(() => requestReadCollage(baseUrl, violationTypeId));
        }
      };
    case ids.CollageTrafficLightSettingId:
      return value => {
        const curTrafficLight = settingValue;
        const newTrafficLight = value;
        if (!isEqual(newTrafficLight, curTrafficLight)) {
          updateCollageTrafficLight(settingId, {...newTrafficLight, stale: true});
        }
      };
    case ids.CollageRoadSignSettingId:
      return value => {
        const curRoadSign = settingValue;
        const newRoadSign = value;
        if (!isEqual(newRoadSign, curRoadSign)) {
          updateCollageRoadSign(settingId, {...newRoadSign, stale: true});
        }
      };
    default:
      return () => {};
  }
};

const applyValueObject = props => {
  const {settingId, requestReadCollage, violationTypeId,
    requestUpdateCollageTrafficLight, updateCollageTrafficLight,
    requestUpdateCollageRoadSign, updateCollageRoadSign} = props;
  switch (settingId.split('/')[0]) {
    case ids.CollageTrafficLightSettingId:
      return value => {
        const newTrafficLight = value;
        const [, , trafficLightId] = settingId.split('/');
        requestUpdateCollageTrafficLight(baseUrl, trafficLightId, newTrafficLight)
          .then(() => updateCollageTrafficLight(settingId, {...newTrafficLight, stale: false}))
          .then(() => {
            if (some(newTrafficLight, param => isNumber(param) && param > 0)) {
              requestReadCollage(baseUrl, violationTypeId);
            }
          });
      };
    case ids.CollageRoadSignSettingId:
      return value => {
        const newRoadSign = value;
        const [, , roadSignId] = settingId.split('/');
        requestUpdateCollageRoadSign(baseUrl, roadSignId, newRoadSign)
          .then(() => updateCollageRoadSign(settingId, {...newRoadSign, stale: false}))
          .then(() => {
            if (some(newRoadSign, param => isNumber(param) && param > 0)) {
              requestReadCollage(baseUrl, violationTypeId);
            }
          });
      };
    default:
      return () => {};
  }
};

const defaultValueArray = props => {
  const {settingId, settingValue} = props;
  switch (settingId.split('/')[0]) {
    case ids.VehicleDetectionFrameFooterTemplateSettingId:
    case ids.OverviewBeginFooterTemplateSettingId:
    case ids.VehicleDetectionBeginFooterTemplateSettingId:
    case ids.OverviewEndFooterTemplateSettingId:
    case ids.VehicleDetectionEndFooterTemplateSettingId:
      return settingValue;
    default:
      return [];
  }
};

const getCollagePictureType = settingId => {
  const type = settingIdsToCollagePictureTypesMap[settingId];
  if (!type) {
    throw new Error(`There is not collage picture type that corresponds specified setting id '${settingId}'`);
  }
  return type;
};

const editValueArray = props => {
  const {settingId, settingValue, violationTypeId, requestReadCollage,
    requestUpdateCollageFooterTemplate, updateCollageFooterTemplate} = props;
  const idOfSetting = settingId.split('/')[0];
  switch (idOfSetting) {
    case ids.VehicleDetectionFrameFooterTemplateSettingId:
    case ids.OverviewBeginFooterTemplateSettingId:
    case ids.VehicleDetectionBeginFooterTemplateSettingId:
    case ids.OverviewEndFooterTemplateSettingId:
    case ids.VehicleDetectionEndFooterTemplateSettingId: {
      const collagePictureType = getCollagePictureType(idOfSetting);
      return value => {
        const currentFooterLines = settingValue;
        const newFooterLines = value;
        if (!isEqual(currentFooterLines, newFooterLines)) {
          const newFooterTemplate = {collagePictureType, footerLines: newFooterLines};
          requestUpdateCollageFooterTemplate(baseUrl, violationTypeId, newFooterTemplate)
            .then(() => updateCollageFooterTemplate(newFooterTemplate))
            .then(() => requestReadCollage(baseUrl, violationTypeId));
        }
      };
    }
    default:
      return () => {};
  }
};

const uploadRoadSignFile = props => {
  const {requestUploadCollageRoadSignFile, violationTypeId, updateCollageRoadSign,
    settingId: roadSignSettingId, settingValue: roadSignSettingValue} = props;
  return ({fileName, fileData}) => {
    const fileDataBase64 = base64.fromByteArray(new Uint8Array(fileData));
    requestUploadCollageRoadSignFile(baseUrl, violationTypeId, {fileName, fileDataBase64})
      .then(filePath => updateCollageRoadSign(roadSignSettingId, {...roadSignSettingValue, filePath, stale: true}));
  };
};

const CollageSettingValueEditor = props => {
  const {settingEditorTypeId, settingId, className} = props;
  switch (settingEditorTypeId) {
    case ids.SelectorEditorTypeId:
      return (
        <Selector
          items={selectorItems(props)}
          selectItem={selectItem(props)}
          selectedItemId={selectedItemId(props)}
          className={className}
          />
      );
    case ids.TextInputEditorTypeId:
      return <TextInput id={settingId} defaultValue={defaultText(props)} editText={editText(props)}/>;
    case ids.FontEditorTypeId:
      return (
        <FontEditor
          id={settingId}
          label={{fontName: capitalize(localizedStrings.FontName), fontSize: capitalize(localizedStrings.FontSize)}}
          defaultValue={defaultValueObject(props)}
          editValue={editValueObject(props)}
          />
      );
    case ids.FooterTemplateEditorTypeId:
      return (
        <FooterTemplateEditor
          id={settingId}
          label={capitalize(localizedStrings.FooterTemplateLineLabel)}
          footerLines={defaultValueArray(props)}
          editFooterLines={editValueArray(props)}
          />
      );
    case ids.CollageTrafficLightEditorTypeId:
      return (
        <CollageTrafficLightEditor
          trafficLight={defaultValueObject(props)}
          onEdit={editValueObject(props)}
          onApply={applyValueObject(props)}
          />
      );
    case ids.CollageRoadSignEditorTypeId:
      return (
        <RoadSignEditor
          roadSign={defaultValueObject(props)}
          uploadRoadSignFile={uploadRoadSignFile(props)}
          onEdit={editValueObject(props)}
          onApply={applyValueObject(props)}
          />
      );
    default:
      return null;
  }
};

CollageSettingValueEditor.propTypes = {
  exportTypeId: PropTypes.string.isRequired,
  settingId: PropTypes.string.isRequired,
  settingValue: PropTypes.any,
  settingEditorTypeId: PropTypes.string.isRequired,
  finishCollageEditing: PropTypes.func.isRequired,
  videoExportModes: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string,
    name: PropTypes.string
  })).isRequired,
  selectCollageVideoExportMode: PropTypes.func.isRequired,
  requestUpdateCollageCurrentVideoExportMode: PropTypes.func.isRequired,
  requestReadCollageVideoExportSettings: PropTypes.func.isRequired,
  videoSecondsBeforeCheckTime: PropTypes.number,
  videoSecondsAfterCheckTime: PropTypes.number,
  updateCollageVideoSecondsBeforeCheckTime: PropTypes.func.isRequired,
  updateCollageVideoSecondsAfterCheckTime: PropTypes.func.isRequired,
  updateCollageDefaultFont: PropTypes.func.isRequired,
  requestUpdateCollageDefaultFont: PropTypes.func.isRequired,
  violationTypeId: PropTypes.string.isRequired,
  requestReadCollage: PropTypes.func.isRequired,
  updateCollageFont: PropTypes.func.isRequired,
  requestUpdateCollageFont: PropTypes.func.isRequired,
  requestUpdateCollageFooterTemplate: PropTypes.func.isRequired,
  updateCollageFooterTemplate: PropTypes.func.isRequired,
  requestUpdateCollageTrafficLight: PropTypes.func.isRequired,
  updateCollageTrafficLight: PropTypes.func.isRequired,
  requestUploadCollageRoadSignFile: PropTypes.func.isRequired,
  className: PropTypes.string,
  updateCollageRoadSign: PropTypes.func.isRequired,
  requestUpdateCollageRoadSign: PropTypes.func.isRequired,
  updateCollageExportPath: PropTypes.func.isRequired
};

CollageSettingValueEditor.defaultProps = {
  className: null
};

const mapStateToProps = (state, ownProps) => {
  const setting = selectors.getCollageSetting(state, ownProps.settingId);
  return {
    exportTypeId: selectors.getSelectedExportTypeId(state),
    settingEditorTypeId: setting.editorTypeId,
    videoExportModes: selectors.getCollageVideoExportModes(state),
    selectedVideoExportModeId: selectors.getSelectedCollageVideoExportModeId(state),
    videoSecondsBeforeCheckTime: selectors.getCollageVideoExportSecondsBeforeCheckTime(state),
    videoSecondsAfterCheckTime: selectors.getCollageVideoExportSecondsAfterCheckTime(state),
    violationTypeId: selectors.getSelectedViolationTypeId(state),
    settingValue: setting.value
  };
};

export default connect(mapStateToProps, actionCreators)(CollageSettingValueEditor);
