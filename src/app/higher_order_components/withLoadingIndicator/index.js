'use strict';

import React from 'react';
import {curry} from 'ramda';
import statusTypes from '../../common/statusTypes';
import {showError} from '../../components/Alert';
import {requestErrorMessage} from '../../common/errorMessages';
import ReactSpinner from 'react-spinjs';
import classNames from 'classnames';

const showLoadingIndicator = () => (
  <div className={classNames('loading-indicator', 'picture-height')}>
    <ReactSpinner/>
  </div>
);

const withLoadingIndicator = curry((selectRequest, showLoadingError, LoadingSuccessComponent) =>
  props => {
    const request = selectRequest(props);
    switch (request.status) {
      case statusTypes.Success:
        return <LoadingSuccessComponent {...props}/>;
      case statusTypes.Failure:
        return showLoadingError ? showLoadingError(request.error) :
          showError(requestErrorMessage(request.error));
      default:
        return showLoadingIndicator();
    }
  });

export default withLoadingIndicator;
