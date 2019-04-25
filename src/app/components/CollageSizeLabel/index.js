'use strict';

import React, {PropTypes} from 'react';
import './CollageSizeLabel.css';
import {connect} from 'react-redux';
import selectors from '../../store/selectors';
import classNames from 'classnames';
import localizedStrings from '../../localization';
import {capitalize} from 'lodash';
import PictureSizeLabel from '../PictureSizeLabel';

const CollageSizeLabel = ({style, className, collageSize}) => (
  <div style={style} className={classNames('CollageSizeLabel', className)}>
    <PictureSizeLabel
      size={collageSize}
      sizeText={capitalize(localizedStrings.CollageSizeLabel)}
      sizeUnitText={localizedStrings.SizeInPixelsLabel}
      />
  </div>
);

CollageSizeLabel.propTypes = {
  style: PropTypes.object,
  className: PropTypes.string,
  collageSize: PropTypes.object.isRequired
};

CollageSizeLabel.defaultProps = {
  style: null,
  className: null
};

const mapStateToProps = state => ({
  collageSize: selectors.getCollageSize(state)
});

export default connect(mapStateToProps, null)(CollageSizeLabel);
