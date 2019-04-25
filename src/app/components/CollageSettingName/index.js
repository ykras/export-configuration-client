'use strict';

import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import './CollageSettingName.css';
import classNames from 'classnames';
import selectors from '../../store/selectors';
import actionCreators from '../../store/actions';
import {localizeText} from '../../localization';
import {capitalize, startsWith} from 'lodash';
import ids from '../../store/identifiers';
import Checkbox from '../Checkbox';
import {curry} from 'ramda';

const onSettingSelectionChanged = curry((handler, settingId, settingSelected) => {
  handler(settingId, settingSelected);
});

const settingNameView = (settingId, settingName, isSettingSelected, updateCollageSettingSelection) => {
  if (startsWith(settingId, ids.CollageTrafficLightSettingId) || startsWith(settingId, ids.CollageRoadSignSettingId)) {
    return (
      <Checkbox
        label={`${localizeText(settingName, capitalize)}`}
        onChanged={onSettingSelectionChanged(updateCollageSettingSelection, settingId)}
        checked={isSettingSelected}
        />
    );
  }
  return <p>{localizeText(settingName, capitalize)}</p>;
};

const CollageSettingName = ({className, settingId, settingName, isSettingSelected, updateCollageSettingSelection}) => (
  <div className={classNames('CollageSettingName', className)}>
    {settingNameView(settingId, settingName, isSettingSelected, updateCollageSettingSelection)}
  </div>
);

CollageSettingName.propTypes = {
  settingId: PropTypes.string.isRequired,
  settingName: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.object
  ]).isRequired,
  isSettingSelected: PropTypes.bool,
  className: PropTypes.string,
  updateCollageSettingSelection: PropTypes.func.isRequired
};

CollageSettingName.defaultProps = {
  className: null,
  isSettingSelected: false
};

const mapStateToProps = (state, ownProps) => {
  const setting = selectors.getCollageSetting(state, ownProps.settingId);
  return {
    settingName: setting.name,
    isSettingSelected: setting.isSelected
  };
};

export default connect(mapStateToProps, actionCreators)(CollageSettingName);
