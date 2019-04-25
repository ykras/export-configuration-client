'use strict';

import React, {PropTypes} from 'react';
import './CollageTrafficLightViewer.css';
import classNames from 'classnames';
import {capitalize} from 'lodash';
import localizedStrings, {localizeText} from '../../localization';

const sourceOf = trafficLight => (
  <div>
    <p style={{marginBottom: 0}}>
      {`${capitalize(localizedStrings.CollagePicture)}: ${localizeText(trafficLight.pictureType, capitalize)}`}
    </p>
  </div>
);

const targetPositionAndSizeOf = trafficLight => (
  <div>
    <p style={{marginBottom: 0}}>
      {`${capitalize(localizedStrings.CollageTrafficLightTargetPositionAndSize)}:`}
    </p>
    <p>
      {`X = ${trafficLight.x}; Y = ${trafficLight.y}; W = ${trafficLight.width}; H = ${trafficLight.height}`}
    </p>
  </div>
);

const CollageTrafficLightViewer = ({className, trafficLight}) => (
  <div className={classNames('CollageTrafficLightViewer', className)}>
    {sourceOf(trafficLight)}
    {targetPositionAndSizeOf(trafficLight)}
  </div>
);

CollageTrafficLightViewer.propTypes = {
  className: PropTypes.string,
  trafficLight: PropTypes.shape({
    id: PropTypes.string,
    pictureType: PropTypes.string,
    x: PropTypes.number,
    y: PropTypes.number,
    width: PropTypes.number,
    height: PropTypes.number
  }).isRequired
};

CollageTrafficLightViewer.defaultProps = {
  className: null
};

export default CollageTrafficLightViewer;
