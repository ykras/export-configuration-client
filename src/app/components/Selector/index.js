'use strict';

import React, {PropTypes} from 'react';
import './Selector.css';
import classNames from 'classnames';
import {curry} from 'ramda';
import {isNull, isUndefined} from 'lodash';

const handle = curry((handler, event) => {
  handler(event.target.value);
  event.preventDefault();
});

const isNotDefined = value => isUndefined(value) || isNull(value);

const Selector = ({label, placeholder, items, selectedItemId, selectItem, inline, className}) => (
  <div className={classNames('Selector', className)}>
    <div className={classNames({'form-inline': inline})}>
      <div className="form-group">
        {label ? <label htmlFor="sel">{label}</label> : null}
        <select className="form-control" id="sel" onChange={handle(selectItem)} {...(isNotDefined(selectedItemId) ? {value: ""} : {value: selectedItemId})}>
          {placeholder && isNotDefined(selectedItemId) ? <option value="" disabled/* style={{display: 'none'}}*/>{placeholder}</option> : null}
          {items.map(item => <option key={item.id} value={item.id}>{item.name}</option>)}
        </select>
      </div>
    </div>
  </div>
);

Selector.propTypes = {
  label: PropTypes.string,
  placeholder: PropTypes.string,
  items: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired
  })).isRequired,
  selectedItemId: PropTypes.string,
  selectItem: PropTypes.func,
  inline: PropTypes.bool,
  className: PropTypes.string
};

Selector.defaultProps = {
  label: '',
  placeholder: null,
  selectedItemId: undefined,
  selectItem: () => {},
  inline: false,
  className: null
};

export default Selector;
