'use strict';

import React, {PropTypes} from 'react';
import './RoadSignViewer.css';
import classNames from 'classnames';
import {capitalize} from 'lodash';
import localizedStrings from '../../localization';

const posistionAndSizeOf = roadSign => (
  <div>
    <div>
      {`${capitalize(localizedStrings.CollageRoadSignPositionAndSize)}:`}
    </div>
    <div>
      {`X = ${roadSign.x}; Y = ${roadSign.y}; W = ${roadSign.width}; H = ${roadSign.height}`}
    </div>
  </div>
);

const RoadSignViewer = ({style, className, roadSign}) => (
  <div style={style} className={classNames('RoadSignViewer', className)}>
    {posistionAndSizeOf(roadSign)}
  </div>
);

RoadSignViewer.propTypes = {
  style: PropTypes.object,
  className: PropTypes.string,
  roadSign: PropTypes.shape({
    x: PropTypes.number,
    y: PropTypes.number,
    width: PropTypes.number,
    height: PropTypes.number
  }).isRequired
};

RoadSignViewer.defaultProps = {
  style: null,
  className: null
};

export default RoadSignViewer;
