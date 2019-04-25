'use strict';

import React, {PropTypes, Component} from 'react';
import {connect} from 'react-redux';
import './CollageSettingsTableRow.css';
import classNames from 'classnames';
import actionCreators from '../../store/actions';
import selectors from '../../store/selectors';
import CollageSettingName from '../CollageSettingName';
import CollageSettingValue from '../CollageSettingValue';
import withOutsideClickHandling from '../../higher_order_components/withOutsideClickHandling';
import ids from '../../store/identifiers';

const onOutsideClick = (e, p) => {
  const {isEditing, finishCollageEditing, settingId} = p;
  const [foregroundObjectSettingId] = settingId.split('/');
  if ((foregroundObjectSettingId === ids.CollageTrafficLightSettingId || foregroundObjectSettingId === ids.CollageRoadSignSettingId) &&
    e.target.id === 'canvas') {
    return;
  }
  if (isEditing) {
    finishCollageEditing(settingId);
  }
};

class CollageSettingsTableRow extends Component {
  render() {
    const {className, settingId} = this.props;
    return (
      <tr className={classNames('CollageSettingsTableRow', className)}>
        <td id="name">
          <CollageSettingName settingId={settingId}/>
        </td>
        <td id="value">
          <CollageSettingValue settingId={settingId}/>
        </td>
      </tr>
    );
  }
}

CollageSettingsTableRow.propTypes = {
  settingId: PropTypes.string.isRequired,
  isEditing: PropTypes.bool,
  finishCollageEditing: PropTypes.func.isRequired,
  className: PropTypes.string
};

CollageSettingsTableRow.defaultProps = {
  isEditing: false,
  className: null
};

const mapStateToProps = (state, ownProps) => {
  const setting = selectors.getCollageSetting(state, ownProps.settingId);
  return {
    isEditing: setting.isEditing
  };
};

const handleClicksOutsideOf = withOutsideClickHandling(onOutsideClick);
export default connect(mapStateToProps, actionCreators)(handleClicksOutsideOf(CollageSettingsTableRow));
