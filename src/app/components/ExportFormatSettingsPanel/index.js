'use strict';
import React, {PropTypes} from 'react';
import './ExportFormatSettingsPanel.css';
import ExportVocordTefSettingsPanel from '../ExportVocordTefSettingsPanel/index';
import ExportCollageSettingsPanel from '../ExportCollageSettingsPanel';
import exportTypes from '../../common/exportTypes';
import {connect} from 'react-redux';
import selectors from '../../store/selectors';
import classNames from 'classnames';

const exportSettingsPanel = exportFormat => {
  switch (exportFormat) {
    case exportTypes.VocordTef:
      return <ExportVocordTefSettingsPanel/>;
    case exportTypes.Collage:
      return <ExportCollageSettingsPanel/>;
    default:
      return null;
  }
};

const ExportFormatSettingsPanel = ({exportFormat, className}) => (
  <div className={classNames('ExportFormatSettingsPanel', className)}>
    {exportSettingsPanel(exportFormat)}
  </div>
);

ExportFormatSettingsPanel.propTypes = {
  exportFormat: PropTypes.string,
  className: PropTypes.string
};

ExportFormatSettingsPanel.defaultProps = {
  className: null
};

const selectedExportType = state => selectors.getSelectedExportType(state) || {name: null};

const mapStateToProps = state => ({
  exportFormat: selectedExportType(state).name
});

export default connect(mapStateToProps, null)(ExportFormatSettingsPanel);
