'use strict';

import React, {PropTypes} from 'react';
import './ExportPotokPlusSettingsPanel.css';
import {connect} from 'react-redux';
import TextInput from '../TextInput/index';
import ExportPathFormatLabel from '../ExportPathFormatLabel';
import UserCredentialsInput from '../UserCredentialsInput/index';
import classNames from 'classnames';
import localizedStrings from '../../localization';
import {capitalize, toString} from 'lodash';
import {curry, compose} from 'ramda';
import selectors from '../../store/selectors';
import actionCreators from '../../store/actions';
import requestTypes from '../../common/requestTypes';
import withDataRequest from '../../higher_order_components/withDataFetch/withDataRequest';
import withLoadingIndicator from '../../higher_order_components/withLoadingIndicator';
import Button from '../Button';
import {baseUrl} from '../../api';

const handleParamEdit = curry((paramName, handler, currentSettings, newParamValue) => {
  const newSettings = {...currentSettings,
    [paramName]: toString(newParamValue)};
  handler(newSettings);
});

const saveConfiguration = (settings, requestUpdateSettings) => () => {
  requestUpdateSettings(baseUrl, settings);
};

const exportPathInputRow = p => {
  const {settings: {exportPath}, settings, updateSettings} = p;
  return (
    <div className="row">
      <div className="col-md-4 vertical-bottom">
        <TextInput
          id="export-potok-plus-path-input"
          label={capitalize(localizedStrings.ExportPathLabel)}
          value={exportPath}
          onTextChanged={handleParamEdit('exportPath', updateSettings, settings)}
          />
      </div>
      <div className="col-md-4 vertical-bottom form-group">
        <ExportPathFormatLabel/>
      </div>
    </div>
  );
};

const userCredentialsInputRow = p => {
  const {settings: {login, password}, settings, updateSettings} = p;
  return (
    <div className="row">
      <div className="col-md-2">
        <UserCredentialsInput
          login={login}
          onLoginChanged={handleParamEdit('login', updateSettings, settings)}
          password={password}
          onPasswordChanged={handleParamEdit('password', updateSettings, settings)}
          />
      </div>
    </div>
  );
};

const saveConfigurationButtonRow = p => {
  const {settings, requestUpdateSettings} = p;
  return (
    <div className="row">
      <div className="col-xs-4 col-xs-offset-6 col-sm-2 col-sm-offset-10 col-md-1 col-md-offset-11">
        <Button
          id="apply-button"
          text={localizedStrings.Apply}
          onClick={saveConfiguration(settings, requestUpdateSettings)}
          />
      </div>
    </div>
  );
};

const ExportPotokPlusSettingsPanel = props => {
  const {style, className} = props;
  return (
    <div style={style} className={classNames('ExportPotokPlusSettingsPanel', className)}>
      <div className="container-fluid">
        {exportPathInputRow(props)}
        {userCredentialsInputRow(props)}
        {saveConfigurationButtonRow(props)}
      </div>
    </div>
  );
};

ExportPotokPlusSettingsPanel.propTypes = {
  style: PropTypes.object,
  className: PropTypes.string,
  settings: PropTypes.shape({
    exportPath: PropTypes.string,
    login: PropTypes.string,
    password: PropTypes.string
  }).isRequired,
  updateSettings: PropTypes.func.isRequired,
  requestReadSettings: PropTypes.func.isRequired,
  readSettingsRequest: PropTypes.object.isRequired,
  requestUpdateSettings: PropTypes.func.isRequired
};

ExportPotokPlusSettingsPanel.defaultProps = {
  style: null,
  className: null
};

const mapStateToProps = state => ({
  settings: selectors.getPotokPlusSettings(state),
  readSettingsRequest: selectors.getRequest(state, requestTypes.ReadPotokPlusSettings)
});

const mapActionCreatorsToProps = {
  updateSettings: actionCreators.updatePotokPlusSettings,
  requestReadSettings: actionCreators.requestReadPotokPlusSettings,
  requestUpdateSettings: actionCreators.requestUpdatePotokPlusSettings
};

const selectDataRequest = p => ({send: p.requestReadSettings});
const selectLoadingRequest = p => p.readSettingsRequest;

const Panel = compose(
  withDataRequest(selectDataRequest),
  withLoadingIndicator(selectLoadingRequest, null)
)(ExportPotokPlusSettingsPanel);

export default connect(mapStateToProps, mapActionCreatorsToProps)(Panel);
