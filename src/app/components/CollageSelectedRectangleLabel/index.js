'use strict';

import React, {PropTypes} from 'react';
import './CollageSelectedRectangleLabel.css';
import {connect} from 'react-redux';
import selectors from '../../store/selectors';
import classNames from 'classnames';
import localizedStrings from '../../localization';
import {capitalize} from 'lodash';
import SelectedRectangleLabel from '../SelectedRectangleLabel';

const CollageSelectedRectangleLabel = ({className, style, selectedRectangle: r}) => (
  <div className={classNames('CollageSelectedRectangleLabel', className)} style={style}>
    <SelectedRectangleLabel selectedRectangle={r} text={capitalize(localizedStrings.SelectedRegionLabel)}/>
  </div>
);

CollageSelectedRectangleLabel.propTypes = {
  className: PropTypes.string,
  style: PropTypes.object,
  selectedRectangle: PropTypes.object
};

CollageSelectedRectangleLabel.defaultProps = {
  className: null,
  style: null,
  selectedRectangle: null
};

const mapStateToProps = state => ({
  selectedRectangle: selectors.getCollageSelectedRectangle(state)
});

export default connect(mapStateToProps)(CollageSelectedRectangleLabel);
