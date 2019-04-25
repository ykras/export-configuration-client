'use strict';

import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import './ExportConfigTabs.css';
import ExportStatusPanel from '../ExportStatusPanel';
import ExportFormatSettingsPanel from '../ExportFormatSettingsPanel';
import TrafficLightsSettingsPanel from '../TrafficLightsSettingsPanel';
import ExportPotokPlusSettingsPanel from '../ExportPotokPlusSettingsPanel';
import actionCreators from '../../store/actions';
import selectors from '../../store/selectors';
import localizedStrings from '../../localization';

// const tabs = (selectedExportTypeName, exportPotokPlusEnabled) => {
//   const tabs = [
//     <li className="active" key="1">
//       <a href="#export-status" data-toggle="tab">{localizedStrings.StatusTabName}</a>
//     </li>,
//     <li key="2">
//       <a href="#export-format" data-toggle="tab">{localizedStrings[selectedExportTypeName]}</a>
//     </li>,
//     <li key="3">
//       <a href="#traffic-lights" data-toggle="tab">{localizedStrings.TrafficLightsTabName}</a>
//     </li>
//   ];
//   if (exportPotokPlusEnabled) {
//     tabs.push(
//       <li key="4">
//         <a href="#export-potok-plus" data-toggle="tab">{localizedStrings.PotokPlusTabName}</a>
//       </li>
//     );
//   }
//   return tabs;
// };

const tabs = (isExportTypeSelected, exportTypeName, isExportPotokPlusEnabled) => (
  <ul className="nav nav-tabs">
    <li className="active">
      <a href="#export-status" data-toggle="tab">{localizedStrings.StatusTabName}</a>
    </li>
    {isExportTypeSelected &&
      <li>
        <a href="#export-format" data-toggle="tab">{localizedStrings[exportTypeName]}</a>
      </li>}
    <li>
      <a href="#traffic-lights" data-toggle="tab">{localizedStrings.TrafficLightsTabName}</a>
    </li>
    {isExportTypeSelected && isExportPotokPlusEnabled &&
      <li>
        <a href="#export-potok-plus" data-toggle="tab">{localizedStrings.PotokPlusTabName}</a>
      </li>}
  </ul>
);

const tabsContent = isExportPotokPlusEnabled => {
  const panels = [
    <div className="tab-pane active fade in" id="export-status" key="1">
      <ExportStatusPanel/>
    </div>,
    <div className="tab-pane fade in" id="export-format" key="2">
      <ExportFormatSettingsPanel/>
    </div>,
    <div className="tab-pane fade in" id="traffic-lights" key="3">
      <TrafficLightsSettingsPanel/>
    </div>
  ];
  if (isExportPotokPlusEnabled) {
    panels.push(
      <div className="tab-pane fade" id="export-potok-plus" key="4">
        <ExportPotokPlusSettingsPanel/>
      </div>
    );
  }
  return panels;
};

const ExportConfigTabs = ({isExportTypeSelected, exportTypeName, isExportPotokPlusEnabled}) => (
  <div className="ExportConfigTabs">
    {tabs(isExportTypeSelected, exportTypeName, isExportPotokPlusEnabled)}
    <div className="tab-content">
      {tabsContent(isExportPotokPlusEnabled)}
    </div>
  </div>
);

ExportConfigTabs.propTypes = {
  isExportTypeSelected: PropTypes.bool.isRequired,
  exportTypeName: PropTypes.string,
  isExportPotokPlusEnabled: PropTypes.bool.isRequired
};

const mapStateToProps = state => {
  const selectedExportType = selectors.getSelectedExportType(state);
  return {
    isExportTypeSelected: Boolean(selectedExportType),
    exportTypeName: selectedExportType ? selectedExportType.name : null,
    isExportPotokPlusEnabled: selectors.getExportPotokPlusEnabled(state)
  };
};

export default connect(mapStateToProps, actionCreators)(ExportConfigTabs);
