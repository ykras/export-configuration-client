'use strict';

import React, {PropTypes, Component} from 'react';
import './TrafficLightSettingsTableRow.css';
import classNames from 'classnames';
import TrafficLightSettingName from '../TrafficLightSettingName';
import TrafficLightSettingValue from '../TrafficLightSettingValue';
import withOutsideClickHandling from '../../higher_order_components/withOutsideClickHandling';

const onOutsideClick = (e, p) => {
  const {handleFinishEditing, id: settingId, isEditing} = p;
  if (e.target.id === 'canvas') {
    return;
  }
  if (isEditing) {
    handleFinishEditing(settingId);
  }
};

class TrafficLightSettingsTableRow extends Component {
  render() {
    const {style, className} = this.props;
    return (
      <tr style={style} className={classNames('TrafficLightSettingsTableRow', className)}>
        <td id="name">
          <TrafficLightSettingName {...this.props}/>
        </td>
        <td id="value">
          <TrafficLightSettingValue {...this.props}/>
        </td>
      </tr>
    );
  }
}

TrafficLightSettingsTableRow.propTypes = {
  style: PropTypes.object,
  className: PropTypes.string,
  id: PropTypes.string.isRequired,
  isEditing: PropTypes.bool.isRequired,
  handleFinishEditing: PropTypes.func
};

TrafficLightSettingsTableRow.defaultProps = {
  style: null,
  className: null,
  handleFinishEditing: () => {}
};

export default withOutsideClickHandling(onOutsideClick)(TrafficLightSettingsTableRow);
