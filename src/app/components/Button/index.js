'use strict';

import React, {PropTypes} from 'react';
import './Button.css';
import classNames from 'classnames';
import {curry} from 'ramda';

const handleClick = curry((handler, disabled, e) => {
  if (disabled) {
    return;
  }
  handler(e);
});

const Button = ({className, style, iconPath, text, disabled, onClick}) => (
  <div style={style} className={classNames('Button', className)}>
    <button type="button" style={style} className={classNames('btn', 'btn-default', {disabled})} onClick={handleClick(onClick, disabled)}>
      {iconPath ? <img src={iconPath}/> : null} {text}
    </button>
  </div>
);

Button.propTypes = {
  text: PropTypes.string,
  iconPath: PropTypes.string,
  disabled: PropTypes.bool,
  className: PropTypes.string,
  onClick: PropTypes.func,
  style: PropTypes.object
};

Button.defaultProps = {
  text: '',
  iconPath: null,
  disabled: false,
  className: null,
  onClick: () => {},
  style: null
};

export default Button;
