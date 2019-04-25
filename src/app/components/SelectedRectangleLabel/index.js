'use strict';

import React, {PropTypes} from 'react';
import './SelectedRectangleLabel.css';
import classNames from 'classnames';

const prefixFrom = text => text ? `${text}: ` : '';

const SelectedRectangleLabel = ({className, style, selectedRectangle: r, text}) => (
  <div className={classNames('SelectedRectangleLabel', className)} style={style}>
    {r ?
      <p>
        {r.w === 0 && r.h === 0 ?
          `X=${r.x}, Y=${r.y}` :
          `${prefixFrom(text)}X=${r.x}, Y=${r.y}, W=${r.w}, H=${r.h}`}
      </p> : null}
  </div>
);

SelectedRectangleLabel.propTypes = {
  className: PropTypes.string,
  style: PropTypes.object,
  selectedRectangle: PropTypes.shape({
    x: PropTypes.number,
    y: PropTypes.number,
    w: PropTypes.number,
    h: PropTypes.number
  }),
  text: PropTypes.string
};

SelectedRectangleLabel.defaultProps = {
  className: null,
  style: null,
  selectedRectangle: null,
  text: ''
};

export default SelectedRectangleLabel;
