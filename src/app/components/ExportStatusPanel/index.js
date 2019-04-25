'use strict';
import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import './ExportStatusPanel.css';
import Checkbox from '../Checkbox/index';
import Selector from '../Selector/index';
import ToggleButton from '../ToggleButton';
import ExportStatistic from '../ExportStatistic';
import localizedStrings, {localizeItems} from '../../localization';
import actionCreators from '../../store/actions';
import selectors from '../../store/selectors';
import {curry, compose, prop} from 'ramda';
import {capitalize} from 'lodash';
import classNames from 'classnames';
import Button from '../Button';
import withDataRequest from '../../higher_order_components/withDataFetch/withDataRequest';
import withDataRefresh from '../../higher_order_components/withDataFetch/withDataRefresh';
// import withLoadingIndicator from '../../higher_order_components/withLoadingIndicator';
import requestTypes from '../../common/requestTypes';
import {baseUrl} from '../../api';
// import {combineRequests} from '../../common/utils';
import exportTypeNames from '../../common/exportTypes';

const handleExportToggle = curry((handler, selectedExportType, toggleExportPotokPlusEnabled, enabled) => {
  handler(selectedExportType.id, enabled);
  if (selectedExportType.name === exportTypeNames.Collage && !enabled) {
    toggleExportPotokPlusEnabled(false);
  }
});
const handleExportPotokPlusToggle = curry((handler, selectedExportType, toggleExportEnabled, enabled) => {
  handler(enabled);
  if (selectedExportType.name === exportTypeNames.Collage) {
    toggleExportEnabled(selectedExportType.id, enabled);
  }
});
const handleExportTypeSelection = curry((handler, selectedExportTypeId) => handler(selectedExportTypeId));
const handleRepeatExportToggle = curry((handler, selectedExportTypeId, enabled) => handler(selectedExportTypeId, enabled));

const exportEnabledToggle = p => {
  const {selectedExportType, exportEnabled, exportPotokPlusEnabled, toggleExportEnabled, toggleExportPotokPlusEnabled} = p;
  return (
    <Checkbox
      id="export-switch"
      label={localizedStrings.Enable}
      checked={(selectedExportType && (selectedExportType.name === exportTypeNames.Collage) && exportPotokPlusEnabled) || exportEnabled}
      disabled={(!selectedExportType || (selectedExportType.name === exportTypeNames.Collage)) && exportPotokPlusEnabled}
      onChanged={handleExportToggle(toggleExportEnabled, selectedExportType, toggleExportPotokPlusEnabled)}
      />
  );
};

const exportEnabledToggleRow = p => (
  <div className="row">
    <div className="col-md-1">
      {exportEnabledToggle(p)}
    </div>
  </div>
);

const exportTypeSelector = p => {
  const {exportTypes, selectedExportTypeId, selectExportType} = p;
  return (
    <Selector
      id="export-format-selector"
      label={localizedStrings.ExportTypeLabel}
      items={localizeItems(exportTypes)}
      selectedItemId={selectedExportTypeId}
      placeholder={capitalize(localizedStrings.Undefined)}
      selectItem={handleExportTypeSelection(selectExportType)}
      />
  );
};

const repeatExportEnabledToggle = p => {
  const {selectedExportTypeId, toggleRepeatExportEnabled} = p;
  return (
    <ToggleButton
      id="repeat-export-switch"
      text={localizedStrings.RepeatExport}
      glyphicon="ok"
      onClick={handleRepeatExportToggle(toggleRepeatExportEnabled, selectedExportTypeId)}
      />
  );
};

const exportTypeSelectorRow = p => (
  <div className="row">
    <div className="col-md-3 vertical-bottom">
      {exportTypeSelector(p)}
    </div>
    <div className="col-md-3 vertical-bottom form-group">
      {repeatExportEnabledToggle(p)}
    </div>
  </div>
);

const exportPotokPlusToggle = p => {
  const {exportPotokPlusEnabled, toggleExportPotokPlusEnabled,
    selectedExportType, toggleExportEnabled} = p;
  return (
    <Checkbox
      id="export-potok-plus"
      label={localizedStrings.ExportPotokPlus}
      onChanged={handleExportPotokPlusToggle(toggleExportPotokPlusEnabled,
        selectedExportType, toggleExportEnabled)}
      checked={exportPotokPlusEnabled}
      />
  );
};

const exportPotokPlusToggleRow = p => (
  <div className="row">
    <div className="col-md-3">
      {exportPotokPlusToggle(p)}
    </div>
  </div>
);

const exportStatisticRow = () => (
  <div className="row">
    <div className="col-md-12">
      {<ExportStatistic/>}
    </div>
  </div>
);

const saveConfiguration = p => () => {
  p.requestUpdateExportPotokPlusEnabled(baseUrl, p.exportPotokPlusEnabled)
    .then(() => p.requestUpdateExportEnabled(baseUrl, p.selectedExportTypeId, p.exportEnabled));
  if (p.repeatExportEnabled) {
    p.requestRepeatExport(baseUrl, p.selectedExportTypeId);
  }
};

const saveConfigurationButtonRow = p => (
  <div className="row">
    <div className="col-xs-4 col-xs-offset-6 col-sm-2 col-sm-offset-10 col-md-1 col-md-offset-11">
      <Button
        id="apply-button"
        text={localizedStrings.Apply}
        onClick={saveConfiguration(p)}
        />
    </div>
  </div>
);

const ExportStatusPanel = props => {
  const {style, className} = props;
  return (
    <div style={style} className={classNames('ExportStatusPanel', className)}>
      <div className="container-fluid">
        {exportEnabledToggleRow(props)}
        {exportTypeSelectorRow(props)}
        {exportPotokPlusToggleRow(props)}
        {exportStatisticRow()}
        {saveConfigurationButtonRow(props)}
      </div>
    </div>
  );
};

ExportStatusPanel.propTypes = {
  style: PropTypes.object,
  className: PropTypes.string,
  exportTypes: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired
  })).isRequired,
  selectedExportTypeId: PropTypes.string,
  selectedExportType: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired
  }),
  exportEnabled: PropTypes.bool.isRequired,
  repeatExportEnabled: PropTypes.bool.isRequired,
  exportPotokPlusEnabled: PropTypes.bool.isRequired,
  requestReadSelectedExportTypeId: PropTypes.func.isRequired,
  readSelectedExportTypeIdRequest: PropTypes.object.isRequired,
  selectExportType: PropTypes.func.isRequired,
  requestUpdateSelectedExportType: PropTypes.func.isRequired,
  requestReadExportEnabled: PropTypes.func.isRequired,
  readExportEnabledRequests: PropTypes.arrayOf(PropTypes.object).isRequired,
  requestReadExportPotokPlusEnabled: PropTypes.func.isRequired,
  readExportPotokPlusEnabledRequest: PropTypes.object.isRequired,
  toggleExportEnabled: PropTypes.func.isRequired,
  toggleExportPotokPlusEnabled: PropTypes.func.isRequired,
  toggleRepeatExportEnabled: PropTypes.func.isRequired,
  requestUpdateExportEnabled: PropTypes.func.isRequired,
  requestUpdateExportPotokPlusEnabled: PropTypes.func.isRequired,
  requestRepeatExport: PropTypes.func.isRequired
};

ExportStatusPanel.defaultProps = {
  style: null,
  className: null
};

const mapStateToProps = state => {
  const exportTypes = selectors.getExportTypes(state);
  const selectedExportTypeId = selectors.getSelectedExportTypeId(state);
  return {
    exportTypes,
    selectedExportTypeId,
    selectedExportType: selectors.getSelectedExportType(state),
    exportEnabled: selectors.getExportEnabled(selectedExportTypeId, state),
    repeatExportEnabled: selectors.getRepeatExportEnabled(selectedExportTypeId, state),
    exportPotokPlusEnabled: selectors.getExportPotokPlusEnabled(state),
    readExportEnabledRequests: exportTypes.map(e =>
        selectors.getRequest(state, requestTypes.readExportEnabled(e.id))),
    readSelectedExportTypeIdRequest: selectors.getRequest(state, requestTypes.ReadSelectedExportTypeId),
    readExportPotokPlusEnabledRequest: selectors.getRequest(state, requestTypes.ReadExportPotokPlusEnabled)
  };
};

const selectDataRequest = p => ({
  send: baseUrl => {
    p.requestReadSelectedExportTypeId(baseUrl)
      .then(id => {
        if (id) {
          p.requestReadExportEnabled(baseUrl, id);
        }
      });
    // p.exportTypes.forEach(e => p.requestReadExportEnabled(baseUrl, e.id));
    p.requestReadExportPotokPlusEnabled(baseUrl);
  }
});
const selectDataRefresh = p => ({send: p.requestReadExportEnabled, params: p.selectedExportTypeId});
// const selectLoadingRequest = p =>
//   combineRequests(p.readSelectedExportTypeIdRequest, ...(p.readExportEnabledRequests),
//     p.readExportPotokPlusEnabledRequest);
const panel = compose(
  withDataRequest(selectDataRequest),
  withDataRefresh(prop('selectedExportTypeId'), selectDataRefresh)
  // withLoadingIndicator(selectLoadingRequest, null)
)(ExportStatusPanel);

export default connect(mapStateToProps, actionCreators)(panel);
