'use strict';

import React, {PropTypes} from 'react';
import './Alert.css';
import classNames from 'classnames';

const text = (message, strong) =>
  strong ? <strong>{message}</strong> : message;

const icon = iconPath => <img src={iconPath}/>;

const closeLink = closeable =>
  closeable ? <a href="#" className="close" data-dismiss="alert" aria-label="close">&times;</a> : null;

const textWithIconContent = (iconPath, message, strong, closeable) => (
  <div className="row">
    <div className="col-xs-2 col-sm-1 vertical-center">
      {icon(iconPath)}
    </div>
    <div className="col-xs-9 col-sm-10 vertical-center">
      {text(message, strong)}
    </div>
    <div className="col-xs-1 vertical-center">
      {closeLink(closeable)}
    </div>
  </div>
);

const textContent = (message, strong, closeable) => (
  <div>
    {closeLink(closeable)}
    {text(message, strong)}
  </div>
);

const content = (iconPath, message, strong, closeable) =>
  iconPath ? textWithIconContent(iconPath, message, strong, closeable) : textContent(message, strong, closeable);

const Alert = ({type, iconPath, message, strong, closeable, className}) => (
  <div className={classNames('Alert', className)}>
    <div className="container">
      <div className={`alert alert-${type} fade in`}>
        {content(iconPath, message, strong, closeable)}
      </div>
    </div>
  </div>
);

Alert.propTypes = {
  type: PropTypes.oneOf(['Success', 'info', 'warning', 'danger']).isRequired,
  iconPath: PropTypes.string,
  message: PropTypes.string.isRequired,
  strong: PropTypes.bool,
  closeable: PropTypes.bool,
  className: PropTypes.string
};

Alert.defaultProps = {
  iconPath: null,
  strong: false,
  closeable: false,
  className: null
};

export default Alert;

export const showLoading = message =>
  <Alert type="info" message={message} iconPath={require("../../images/loading.gif")} className="margin-top-10px"/>;
export const showError = message =>
  <Alert message={message} closeable type="danger" strong className="margin-top-10px"/>;
