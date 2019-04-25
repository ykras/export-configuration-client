'use strict';

import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import './CollageSettingsTable.css';
import classNames from 'classnames';
import localizedStrings from '../../localization';
import {capitalize, includes} from 'lodash';
import actionCreators from '../../store/actions';
import selectors from '../../store/selectors';
import CollageSettingsTableRow from '../CollageSettingsTableRow';
import videoExportModes from '../../common/videoExportModes';
import ids from '../../store/identifiers';
import withDataRequest from '../../higher_order_components/withDataFetch/withDataRequest';
import withDataRefresh from '../../higher_order_components/withDataFetch/withDataRefresh';
import {curry, compose, prop} from 'ramda';
import SettingsTable from '../SettingsTable';

const selectInitialRequests = props => ([
  {
    send: props.requestReadCollageVideoExportSettings,
    params: props.exportTypeId
  },
  {send: props.requestReadCollageDefaultFont},
  {send: props.requestReadCollageDefaultFontPriority},
  {send: props.requestReadCollageExportPath},
  {
    send: props.requestReadCollageFont,
    params: props.violationTypeId
  },
  {
    send: props.requestReadCollageFooterTemplates,
    params: props.violationTypeId
  },
  {
    send: props.requestReadCollageTrafficLights,
    params: props.violationTypeId
  },
  {
    send: props.requestReadCollageRoadSigns,
    params: props.violationTypeId
  }
]);

const selectRefreshRequests = props => ([
  {
    send: props.requestReadCollageFont,
    params: props.violationTypeId
  },
  {
    send: props.requestReadCollageFooterTemplates,
    params: props.violationTypeId
  },
  {
    send: props.requestReadCollageTrafficLights,
    params: props.violationTypeId
  },
  {
    send: props.requestReadCollageRoadSigns,
    params: props.violationTypeId
  }
]);

const Table = compose(
  withDataRefresh(prop('violationTypeId'), selectRefreshRequests),
  withDataRequest(selectInitialRequests)
)(SettingsTable);

const settingsOfSelectedType = curry(({selectedSettingType}, s) => s.typeId === selectedSettingType.id);

const settingsForSelectedViolationType = curry(({violationTypeId}, s) =>
  s.id.indexOf('/') < 0 || includes(s.id, violationTypeId));

const videoExportSettings = curry(({videoExportMode}, s) =>
  videoExportMode !== videoExportModes.DoNotExport ||
  (s.id !== ids.VideoSecondsBeforeCheckTimeSettingId &&
  s.id !== ids.VideoSecondsAfterCheckTimeSettingId));

const filteredSettings = p => p.settings
        .filter(settingsOfSelectedType(p))
        .filter(settingsForSelectedViolationType(p))
        .filter(videoExportSettings(p));

const createTableRow = s => <CollageSettingsTableRow key={s.id} settingId={s.id}/>;

const CollageSettingsTable = props => {
  const {style, className} = props;
  return (
    <div style={style} className={classNames('CollageSettingsTable', className, 'picture-height')}>
      <Table
        {...props}
        settings={filteredSettings(props)}
        nameHeaderText={capitalize(localizedStrings.SettingNameHeaderText)}
        valueHeaderText={capitalize(localizedStrings.SettingValueHeaderText)}
        createTableRowComponent={createTableRow}
        />
    </div>
  );
};

CollageSettingsTable.propTypes = {
  settings: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string,
    name: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
    value: PropTypes.any,
    typeId: PropTypes.string,
    editorTypeId: PropTypes.string,
    isEditing: PropTypes.bool
  })).isRequired,
  selectedSettingType: PropTypes.shape({
    id: PropTypes.string,
    name: PropTypes.string
  }).isRequired,
  videoExportMode: PropTypes.string.isRequired,
  violationTypeId: PropTypes.string.isRequired,
  requestReadCollageVideoExportSettings: PropTypes.func.isRequired,
  exportTypeId: PropTypes.string.isRequired,
  style: PropTypes.object,
  className: PropTypes.string,
  requestReadCollageExportPath: PropTypes.func.isRequired,
  requestReadCollageDefaultFont: PropTypes.func.isRequired,
  requestReadCollageDefaultFontPriority: PropTypes.func.isRequired,
  requestReadCollageFont: PropTypes.func.isRequired,
  requestReadCollageFooterTemplates: PropTypes.func.isRequired,
  requestReadCollageTrafficLights: PropTypes.func.isRequired,
  requestReadCollageRoadSigns: PropTypes.func.isRequired
};

CollageSettingsTable.defaultProps = {
  style: null,
  className: null
};

const mapStateToProps = state => ({
  settings: selectors.getCollageSettings(state),
  selectedSettingType: selectors.getSelectedCollageSettingType(state),
  videoExportMode: selectors.getSelectedCollageVideoExportMode(state).name,
  violationTypeId: selectors.getSelectedViolationTypeId(state),
  exportTypeId: selectors.getSelectedExportTypeId(state)
});

export default connect(mapStateToProps, actionCreators)(CollageSettingsTable);
