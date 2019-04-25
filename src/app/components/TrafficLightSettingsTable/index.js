'use strict';

import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import './TrafficLightSettingsTable.css';
import classNames from 'classnames';
import localizedStrings from '../../localization';
import {capitalize, endsWith} from 'lodash';
import actionCreators from '../../store/actions';
import selectors from '../../store/selectors';
import SettingsTable from '../SettingsTable';
import TrafficLightSettingsTableRow from '../TrafficLightSettingsTableRow';

const createTableRow = (s, p) => <TrafficLightSettingsTableRow key={s.id} {...s} {...p}/>;

const TrafficLightSettingsTable = props => {
  const {style, className, settings, recognitionChannelId} = props;
  return (
    <div style={style} className={classNames('TrafficLightSettingsTable', className, 'picture-height')}>
      <SettingsTable
        {...props}
        settings={settings.filter(s => endsWith(s.id, recognitionChannelId))}
        nameHeaderText={capitalize(localizedStrings.SettingNameHeaderText)}
        valueHeaderText={capitalize(localizedStrings.SettingValueHeaderText)}
        createTableRowComponent={createTableRow}
        />
    </div>
  );
};

TrafficLightSettingsTable.propTypes = {
  style: PropTypes.object,
  className: PropTypes.string,
  settings: PropTypes.any.isRequired,
  recognitionChannelId: PropTypes.string.isRequired
};

TrafficLightSettingsTable.defaultProps = {
  style: null,
  className: null
};

const mapStateToProps = state => ({
  settings: selectors.getTrafficLightsSettings(state),
  recognitionChannelId: selectors.getSelectedRecognitionChannelId(state)
});

const mapActionCreatorsToProps = {
  handleBeginEditing: actionCreators.beginTrafficLightEditing,
  handleFinishEditing: actionCreators.finishTrafficLightEditing,
  updateTrafficLight: actionCreators.updateTrafficLight,
  requestUpdateTrafficLight: actionCreators.requestUpdateTrafficLight
};

export default connect(mapStateToProps, mapActionCreatorsToProps)(TrafficLightSettingsTable);

