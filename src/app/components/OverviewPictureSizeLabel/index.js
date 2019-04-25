'use strict';

import React, {PropTypes} from 'react';
import './OverviewPictureSizeLabel.css';
import {connect} from 'react-redux';
import selectors from '../../store/selectors';
import classNames from 'classnames';
import localizedStrings from '../../localization';
import {capitalize} from 'lodash';
import PictureSizeLabel from '../PictureSizeLabel';

const OverviewPictureSizeLabel = ({style, className, pictureSize}) => (
  <div style={style} className={classNames('OverviewPictureSizeLabel', className)}>
    <PictureSizeLabel
      size={pictureSize}
      sizeText={capitalize(localizedStrings.OverviewPictureSizeLabel)}
      sizeUnitText={localizedStrings.SizeInPixelsLabel}
      />
  </div>
);

OverviewPictureSizeLabel.propTypes = {
  style: PropTypes.object,
  className: PropTypes.string,
  pictureSize: PropTypes.object.isRequired
};

OverviewPictureSizeLabel.defaultProps = {
  style: null,
  className: null
};

const mapStateToProps = state => ({
  pictureSize: selectors.getOverviewPictureSize(state)
});

export default connect(mapStateToProps, null)(OverviewPictureSizeLabel);
