'use strict';

import React, {PropTypes} from 'react';
import './TextInput.css';
import classNames from 'classnames';
import {curry} from 'ramda';

const handleKeyDown = curry((handler, event) => {
  if (event.key !== 'Enter') {
    return;
  }
  handler(event.target.value);
  event.preventDefault();
});

const handleOnBlur = curry((handler, event) => {
  handler(event.target.value);
  event.preventDefault();
});

const handleOnChange = curry((handler, event) => {
  handler(event.target.value);
});

const TextInput = ({label, id, type, placeholder, defaultValue, value, editText, onTextChanged, inline, className}) => (
  <div className={classNames('TextInput', className)}>
    <div className={classNames({'form-inline': inline})}>
      <div className="form-group">
        {label ? <label htmlFor={id}>{label}</label> : null}
        <input
          type={type}
          className="form-control"
          id={id}
          placeholder={placeholder}
          defaultValue={defaultValue}
          value={value}
          onKeyDown={handleKeyDown(editText)}
          onBlur={handleOnBlur(editText)}
          onChange={handleOnChange(onTextChanged)}
          />
      </div>
    </div>
  </div>
);

TextInput.propTypes = {
  id: PropTypes.string.isRequired,
  label: PropTypes.string,
  type: PropTypes.oneOf(['text', 'password', 'email']),
  placeholder: PropTypes.string,
  defaultValue: PropTypes.string,
  value: PropTypes.string,
  editText: PropTypes.func,
  onTextChanged: PropTypes.func,
  inline: PropTypes.bool,
  className: PropTypes.string
};

TextInput.defaultProps = {
  label: null,
  type: 'text',
  placeholder: '',
  defaultValue: '',
  value: undefined,
  editText: () => {},
  onTextChanged: () => {},
  inline: false,
  className: null
};

export default TextInput;
