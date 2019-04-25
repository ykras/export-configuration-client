'use strict';

import React, {PropTypes} from 'react';
import './TrafficLightSettingValueViewer.css';
import classNames from 'classnames';
import {capitalize} from 'lodash';
import localizedStrings, {localizeText} from '../../localization';
import ids from '../../store/identifiers';
import TrafficLightViewer from '../TrafficLightViewer';

const viewOfSettingValue = p => {
  const {id, value} = p;
  if (!value) {
    return capitalize(localizedStrings.SettingValueIsNotSpecified);
  }
  switch (id.split('/')[0]) {
    case ids.TrafficLightSettingId:
      return <TrafficLightViewer trafficLight={value}/>;
    default:
      return localizeText(value, capitalize);
  }
};

const TrafficLightSettingValueViewer = props => {
  const {style, className} = props;
  return (
    <div style={style} className={classNames('TrafficLightSettingValueViewer', className)}>
      {viewOfSettingValue(props)}
    </div>
  );
};

TrafficLightSettingValueViewer.propTypes = {
  style: PropTypes.object,
  className: PropTypes.string,
  id: PropTypes.string.isRequired,
  value: PropTypes.any
};

TrafficLightSettingValueViewer.defaultProps = {
  style: null,
  className: null
};

export default TrafficLightSettingValueViewer;
