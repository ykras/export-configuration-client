'use strict';

import React from 'react';
import {curry} from 'ramda';
import {send} from './common';

const withDataRequest = curry((selectRequests, Component) => class extends React.Component {
  componentWillMount() {
    const requests = selectRequests(this.props);
    send(requests);
  }
  render() {
    return <Component {...this.props}/>;
  }
});

export default withDataRequest;

