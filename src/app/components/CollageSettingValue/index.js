'use strict';

import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import './CollageSettingValue.css';
import classNames from 'classnames';
import selectors from '../../store/selectors';
import actionCreators from '../../store/actions';
import {capitalize} from 'lodash';
import localizedStrings from '../../localization';
import Checkbox from '../Checkbox';
import ids from '../../store/identifiers';
import {curry} from 'ramda';
import CollageSettingValueViewer from '../CollageSettingValueViewer';
import CollageSettingValueEditor from '../CollageSettingValueEditor';
import {baseUrl} from '../../api';

const handleSettingValueInheritanceChanged = curry((props, isSettingValueInherited) => {
  const {settingId, updateCollageSettingValueInheritance,
    requestUpdateCollageDefaultFontPriority, requestReadCollage, violationTypeId} = props;
  updateCollageSettingValueInheritance(settingId, isSettingValueInherited);
  if (settingId === ids.CollageViolationFontSettingId) {
    const preferDefaultFont = Boolean(isSettingValueInherited);
    requestUpdateCollageDefaultFontPriority(baseUrl, preferDefaultFont)
      .then(() => requestReadCollage(baseUrl, violationTypeId));
  }
});

const handleClickOnValue = props => () => {
  const {isEditing, isSettingValueInherited, settingId, beginCollageEditing} = props;
  if (isSettingValueInherited || isEditing) {
    return;
  }
  beginCollageEditing(settingId);
};

const CollageSettingValue = props => {
  const {className, settingId, settingParentId, isEditing, isSettingValueInherited} = props;
  return (
    <div className={classNames('CollageSettingValue', className)}>
      {(settingParentId && !isEditing) ?
        <Checkbox
          label={capitalize(localizedStrings.ByDefault)}
          checked={isSettingValueInherited}
          onChanged={handleSettingValueInheritanceChanged(props)}
          /> : null}
      <div onClick={handleClickOnValue(props)} style={isSettingValueInherited ? {cursor: 'default', color: 'gray'} : null}>
        {isEditing ?
          <CollageSettingValueEditor settingId={settingId}/> :
          <CollageSettingValueViewer settingId={settingId}/>}
      </div>
    </div>
  );
};

CollageSettingValue.propTypes = {
  className: PropTypes.string,
  settingId: PropTypes.string.isRequired,
  isEditing: PropTypes.bool,
  settingParentId: PropTypes.string,
  isSettingValueInherited: PropTypes.bool,
  updateCollageSettingValueInheritance: PropTypes.func.isRequired,
  requestUpdateCollageDefaultFontPriority: PropTypes.func.isRequired,
  requestReadCollage: PropTypes.func.isRequired,
  violationTypeId: PropTypes.string.isRequired,
  beginCollageEditing: PropTypes.func.isRequired
};

CollageSettingValue.defaultProps = {
  className: null
};

const mapStateToProps = (state, ownProps) => {
  const setting = selectors.getCollageSetting(state, ownProps.settingId);
  return {
    isEditing: setting.isEditing,
    settingParentId: setting.parentId,
    isSettingValueInherited: setting.isValueInherited,
    violationTypeId: selectors.getSelectedViolationTypeId(state)
  };
};

export default connect(mapStateToProps, actionCreators)(CollageSettingValue);
