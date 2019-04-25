'use strict';

import React, {PropTypes} from 'react';
import './PictureSizeLabel.css';
import classNames from 'classnames';
import localizedStrings from '../../localization';

const PictureSizeLabel = ({style, className, size, sizeText, sizeUnitText}) => (
  <div style={style} className={classNames('PictureSizeLabel', className)}>
    <p>
      {
        size.width > 0 && size.height > 0 &&
        `${sizeText} ${localizedStrings.PictureSizeLabel}: ${size.width} x ${size.height} ${sizeUnitText}`
      }
    </p>
  </div>
);

PictureSizeLabel.propTypes = {
  style: PropTypes.object,
  className: PropTypes.string,
  size: PropTypes.shape({
    width: PropTypes.number.isRequired,
    height: PropTypes.number.isRequired
  }).isRequired,
  sizeText: PropTypes.string.isRequired,
  sizeUnitText: PropTypes.string.isRequired
};

PictureSizeLabel.defaultProps = {
  style: null,
  className: null,
  sizeText: ''
};

export default PictureSizeLabel;
