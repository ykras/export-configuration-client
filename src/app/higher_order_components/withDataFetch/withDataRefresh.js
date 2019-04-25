'use strict';

import React from 'react';
import {curry} from 'ramda';
import {isEqual} from 'lodash';
import {send} from './common';

const withDataRefresh = curry((selectRefreshCatalyst, selectRequests, Component) => class extends React.Component {
  componentWillReceiveProps(nextProps) {
    if (!isEqual(selectRefreshCatalyst(this.props), selectRefreshCatalyst(nextProps))) {
      const requests = selectRequests(nextProps);
      send(requests);
    }
  }
  render() {
    return <Component {...this.props}/>;
  }
});

export default withDataRefresh;
