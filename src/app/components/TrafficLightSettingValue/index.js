'use strict';

import React, {PropTypes} from 'react';
import './TrafficLightSettingValue.css';
import classNames from 'classnames';
import TrafficLightSettingValueEditor from '../TrafficLightSettingValueEditor';
import TrafficLightSettingValueViewer from '../TrafficLightSettingValueViewer';

const handleClickOnValue = props => () => {
  const {isEditing, id: settingId, handleBeginEditing} = props;
  if (!isEditing) {
    handleBeginEditing(settingId);
  }
};

const TrafficLightSettingValue = props => {
  const {style, className, isEditing} = props;
  return (
    <div style={style} className={classNames('TrafficLightSettingValue', className)}>
      <div onClick={handleClickOnValue(props)}>
        {isEditing ? <TrafficLightSettingValueEditor {...props}/> : <TrafficLightSettingValueViewer {...props}/>}
      </div>
    </div>
  );
};

TrafficLightSettingValue.propTypes = {
  style: PropTypes.object,
  className: PropTypes.string,
  id: PropTypes.string.isRequired,
  isEditing: PropTypes.bool.isRequired,
  handleBeginEditing: PropTypes.func
};

TrafficLightSettingValue.defaultProps = {
  style: null,
  className: null,
  handleBeginEditing: () => {}
};

export default TrafficLightSettingValue;
