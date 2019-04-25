'use strict';

import React from 'react';
import ReactDOM from 'react-dom';
import {curry} from 'ramda';

const withOutsideClickHandling = curry((onOutsideClick, Component) => class extends React.Component {
  constructor(...args) {
    super(...args);
    this.componentArea = undefined;
    this.setComponentArea = this.setComponentArea.bind(this);
    this.handleClickOutsideComponent = this.handleClickOutsideComponent.bind(this);
  }

  render() {
    return (
      <Component {...this.props} ref={this.setComponentArea}/>
    );
  }

  componentDidMount() {
    document.addEventListener('click', this.handleClickOutsideComponent, true);
  }

  componentWillUnmount() {
    document.removeEventListener('click', this.handleClickOutsideComponent, true);
  }

  setComponentArea(area) {
    this.componentArea = area;
  }

  getComponentArea() {
    let area;
    if (this.componentArea) {
      area = this.componentArea.isReactComponent ?
        ReactDOM.findDOMNode(this.componentArea) : this.componentArea;
    }
    return area;
  }

  handleClickOutsideComponent(e) {
    const componentArea = this.getComponentArea();
    if (!componentArea || componentArea.contains(e.target)) {
      return;
    }
    onOutsideClick(e, this.props);
  }
});

export default withOutsideClickHandling;
