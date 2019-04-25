'use strict';

import React, {PropTypes} from 'react';
import './SettingsTable.css';
import classNames from 'classnames';
// import {curry} from 'ramda';

const tableHead = p => {
  const {nameHeaderText, valueHeaderText} = p;
  return (
    <thead>
      <tr className="active">
        <th>
          <h4 className="text-center">{nameHeaderText}</h4>
        </th>
        <th>
          <h4 className="text-center">{valueHeaderText}</h4>
        </th>
      </tr>
    </thead>);
};

// const tableRow = curry(({createTableRowComponent}, s) => createTableRowComponent(s));

const tableBody = p => {
  const {settings, createTableRowComponent} = p;
  return (
    <tbody>
      {settings.map(s => createTableRowComponent(s, p))}
    </tbody>
  );
};

const SettingsTable = p => {
  const {style, className} = p;
  return (
    <div style={style} className={classNames('SettingsTable', className)}>
      <table className="table table-striped table-bordered table-hover">
        {tableHead(p)}
        {tableBody(p)}
      </table>
    </div>
  );
};

SettingsTable.propTypes = {
  style: PropTypes.object,
  className: PropTypes.string,
  nameHeaderText: PropTypes.string,
  valueHeaderText: PropTypes.string,
  settings: PropTypes.arrayOf(PropTypes.object).isRequired,
  createTableRowComponent: PropTypes.func.isRequired
};

SettingsTable.defaultProps = {
  style: null,
  className: null,
  nameHeaderText: '',
  valueHeaderText: ''
};

export default SettingsTable;
