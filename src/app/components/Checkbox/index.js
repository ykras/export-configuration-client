'use strict';

import React, {PropTypes} from 'react';
import './Checkbox.css';
import {curry} from 'ramda';
import classNames from 'classnames';

const handle = curry((handler, event) => handler(event.target.checked));

const Checkbox = ({checked, disabled, label, onChanged, className, style}) => (
  <div className={classNames('Checkbox', className)} style={style}>
    <div className="checkbox">
      <label>
        <input type="checkbox" checked={checked} onChange={handle(onChanged)} disabled={disabled}/>
        {label}
      </label>
    </div>
  </div>
);

Checkbox.propTypes = {
  checked: PropTypes.bool,
  disabled: PropTypes.bool,
  label: PropTypes.string,
  onChanged: PropTypes.func,
  className: PropTypes.string,
  style: PropTypes.object
};

Checkbox.defaultProps = {
  checked: false,
  disabled: false,
  label: '',
  onChanged: () => {},
  className: null,
  style: null
};

export default Checkbox;
