'use strict';

import React, {PropTypes} from 'react';
import './TrafficLightViewer.css';
import classNames from 'classnames';

const positionAndSizeOf = trafficLight => (
  <div>
    <p>
      {`X = ${trafficLight.x}; Y = ${trafficLight.y}; W = ${trafficLight.width}; H = ${trafficLight.height}`}
    </p>
  </div>
);

const TrafficLightViewer = ({className, trafficLight}) => (
  <div className={classNames('TrafficLightViewer', className)}>
    {positionAndSizeOf(trafficLight)}
  </div>
);

TrafficLightViewer.propTypes = {
  className: PropTypes.string,
  trafficLight: PropTypes.shape({
    x: PropTypes.number,
    y: PropTypes.number,
    width: PropTypes.number,
    height: PropTypes.number
  }).isRequired
};

TrafficLightViewer.defaultProps = {
  className: null
};

export default TrafficLightViewer;
