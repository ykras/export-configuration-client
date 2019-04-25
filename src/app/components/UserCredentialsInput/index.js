'use strict';

import React, {PropTypes} from 'react';
import './UserCredentialsInput.css';
import TextInput from '../TextInput';
import classNames from 'classnames';
import localizedStrings from '../../localization';
import {capitalize} from 'lodash';

const UserCredentialsInput = ({style, className, login, password,
  onLoginChanged, onPasswordChanged}) => (
  <div style={style} className={classNames('UserCredentialsInput', className)}>
    <TextInput
      id="user-name"
      label={`${capitalize(localizedStrings.LoginLabel)}:`}
      value={login || ''}
      onTextChanged={onLoginChanged}
      />
    <TextInput
      id="password"
      label={`${capitalize(localizedStrings.PasswordLabel)}:`}
      type="password"
      value={password || ''}
      onTextChanged={onPasswordChanged}
      />
  </div>
);

UserCredentialsInput.propTypes = {
  style: PropTypes.object,
  className: PropTypes.string,
  login: PropTypes.string,
  password: PropTypes.string,
  onLoginChanged: PropTypes.func,
  onPasswordChanged: PropTypes.func
};

UserCredentialsInput.defaultProps = {
  style: null,
  className: null,
  login: '',
  password: '',
  onLoginChanged: () => {},
  onPasswordChanged: () => {}
};

export default UserCredentialsInput;
