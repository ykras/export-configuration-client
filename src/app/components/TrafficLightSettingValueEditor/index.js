'use strict';

import React, {PropTypes} from 'react';
import './TrafficLightSettingValueEditor.css';
import ids from '../../store/identifiers';
import TrafficLightEditor from '../TrafficLightEditor';
import {isEqual} from 'lodash';
import {baseUrl} from '../../api';

const settingValue = props => {
  const {id, value} = props;
  switch (id.split('/')[0]) {
    case ids.TrafficLightSettingId:
      return value || {x: 0, y: 0, width: 0, height: 0};
    default:
      return {};
  }
};

const settingValueEditHandler = props => {
  const {id, value, updateTrafficLight} = props;
  switch (id.split('/')[0]) {
    case ids.TrafficLightSettingId:
      return newValue => {
        const curTrafficLight = value;
        const newTrafficLight = newValue;
        if (!isEqual(newTrafficLight, curTrafficLight)) {
          updateTrafficLight(id, {...newTrafficLight, stale: true});
        }
      };
    default:
      return () => {};
  }
};

const settingValueApplyHandler = props => {
  const {id, recognitionChannelId, requestUpdateTrafficLight, updateTrafficLight} = props;
  switch (id.split('/')[0]) {
    case ids.TrafficLightSettingId:
      return newTrafficLight => {
        requestUpdateTrafficLight(baseUrl, recognitionChannelId, newTrafficLight)
          .then(() => updateTrafficLight(id, {...newTrafficLight, stale: false}));
      };
    default:
      return () => {};
  }
};

const TrafficLightSettingValueEditor = props => {
  const {editorTypeId} = props;
  switch (editorTypeId) {
    case ids.TrafficLightEditorTypeId:
      return (
        <TrafficLightEditor
          {...props}
          trafficLight={settingValue(props)}
          onEdit={settingValueEditHandler(props)}
          onApply={settingValueApplyHandler(props)}
          />
      );
    default:
      return null;
  }
};

TrafficLightSettingValueEditor.propTypes = {
  style: PropTypes.object,
  className: PropTypes.string,
  editorTypeId: PropTypes.string.isRequired,
  value: PropTypes.any,
  updateTrafficLight: PropTypes.func.isRequired,
  requestUpdateTrafficLight: PropTypes.func.isRequired,
  recognitionChannelId: PropTypes.string.isRequired
};

TrafficLightSettingValueEditor.defaultProps = {
  style: null,
  className: null
};

export default TrafficLightSettingValueEditor;
