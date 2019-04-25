'use strict';

import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import './CollageSettingValueViewer.css';
import classNames from 'classnames';
import selectors from '../../store/selectors';
import ids from '../../store/identifiers';
import {capitalize} from 'lodash';
import localizedStrings, {localizeText} from '../../localization';
import CollageTrafficLightViewer from '../CollageTrafficLightViewer';
import RoadSignViewer from '../RoadSignViewer';

const viewOfSettingValue = (settingId, isSettingValueInherited, settingValue,
                            parentSettingValue, violationTypeId) => {
  const value = isSettingValueInherited ? parentSettingValue : settingValue;
  if (!value) {
    return capitalize(localizedStrings.SettingValueIsNotSpecified);
  }
  const id = settingId.split('/')[0];
  switch (id) {
    case ids.CollageDefaultFontSettingId:
      return `${value.name}, ${value.sizeInPoints}`;
    case ids.CollageViolationFontSettingId: {
      const val = isSettingValueInherited ? value : value[violationTypeId];
      if (!val) {
        return capitalize(localizedStrings.SettingValueIsNotSpecified);
      }
      return `${val.name}, ${val.sizeInPoints}`;
    }
    case ids.VehicleDetectionFrameFooterTemplateSettingId:
    case ids.OverviewBeginFooterTemplateSettingId:
    case ids.VehicleDetectionBeginFooterTemplateSettingId:
    case ids.OverviewEndFooterTemplateSettingId:
    case ids.VehicleDetectionEndFooterTemplateSettingId:
      return value.map((v, j) => <p key={j}>{v}</p>);
    case ids.CollageTrafficLightSettingId:
      return <CollageTrafficLightViewer trafficLight={value}/>;
    case ids.CollageRoadSignSettingId:
      return <RoadSignViewer roadSign={value}/>;
    case ids.CollageExportPathSettingId:
      return value;
    default:
      return localizeText(value, capitalize);
  }
};

const CollageSettingValueViewer = ({className, settingId, isSettingValueInherited,
  settingValue, parentSettingValue, violationTypeId}) => (
  <div className={classNames('CollageSettingValueViewer', className)}>
    {viewOfSettingValue(settingId, isSettingValueInherited, settingValue, parentSettingValue, violationTypeId)}
  </div>
);

CollageSettingValueViewer.propTypes = {
  className: PropTypes.string,
  settingId: PropTypes.string.isRequired,
  settingValue: PropTypes.any,
  parentSettingValue: PropTypes.any,
  isSettingValueInherited: PropTypes.bool,
  violationTypeId: PropTypes.string.isRequired
};

CollageSettingValueViewer.defaultProps = {
  className: null
};

const mapStateToProps = (state, ownProps) => {
  const setting = selectors.getCollageSetting(state, ownProps.settingId);
  const parentSetting = selectors.getCollageSetting(state, setting.parentId);
  const parentSettingValue = parentSetting ? parentSetting.value : null;
  return {
    settingValue: setting.value,
    isSettingValueInherited: setting.isValueInherited,
    violationTypeId: selectors.getSelectedViolationTypeId(state),
    parentSettingValue
  };
};

export default connect(mapStateToProps)(CollageSettingValueViewer);
