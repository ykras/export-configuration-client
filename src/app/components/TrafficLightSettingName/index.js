'use strict';

import React, {PropTypes} from 'react';
import './TrafficLightSettingName.css';
import classNames from 'classnames';
import {localizeText} from '../../localization';
import {capitalize} from 'lodash';

const TrafficLightSettingName = ({style, className, name: settingName}) => (
  <div style={style} className={classNames('TrafficLightSettingName', className)}>
    <p>{localizeText(settingName, capitalize)}</p>
  </div>
);

TrafficLightSettingName.propTypes = {
  style: PropTypes.object,
  className: PropTypes.string,
  name: PropTypes.string.isRequired
};

TrafficLightSettingName.defaultProps = {
  style: null,
  className: null
};

export default TrafficLightSettingName;
