'use strict';

import React, {PropTypes} from 'react';
import './ViolationTypeSelector.css';
import classNames from 'classnames';
import Selector from '../Selector';
import localizedStrings, {localizeItems} from '../../localization';
import {capitalize} from 'lodash';

const ViolationTypeSelector = ({style, className, id, inline,
  violationTypes, selectedViolationTypeId, selectViolationType}) => (
  <div style={style} className={classNames('ViolationTypeSelector', className)}>
    <Selector
      id={id}
      label={`${capitalize(localizedStrings.ViolationTypeLabel)}:`}
      items={localizeItems(violationTypes, capitalize)}
      selectItem={selectViolationType}
      selectedItemId={selectedViolationTypeId}
      inline={inline}
      />
  </div>
);

ViolationTypeSelector.propTypes = {
  style: PropTypes.object,
  className: PropTypes.string,
  id: PropTypes.string,
  inline: PropTypes.bool,
  violationTypes: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired
  })).isRequired,
  selectedViolationTypeId: PropTypes.string,
  selectViolationType: PropTypes.func
};

ViolationTypeSelector.defaultProps = {
  style: null,
  className: null,
  id: 'violation-type-selector',
  inline: false,
  selectedViolationTypeId: undefined,
  selectViolationType: () => {}
};

export default ViolationTypeSelector;
