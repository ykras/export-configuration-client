'use strict';

import React, {PropTypes} from 'react';
import './DropdownMenuButton.css';
import classNames from 'classnames';

const handleSelectItem = (handler, itemId) => () => handler(itemId);

const DropdownMenuButton = ({iconPath, text, items, selectItem, disabled, className}) => (
  <div className={classNames('DropdownMenuButton', className)}>
    <div className="btn-group">
      <button
        type="button"
        className={classNames('btn', 'btn-default', 'dropdown-toggle', {disabled})}
        data-toggle="dropdown"
        >
        {iconPath ? <img src={iconPath}/> : null} {text} <span className="caret"></span>
      </button>
      <ul className="dropdown-menu" role="menu">
        {items.map(item => <li key={item.id} value={item.id} onClick={handleSelectItem(selectItem, item.id)}><a href="#">{item.name}</a></li>)}
      </ul>
    </div>
  </div>
);

DropdownMenuButton.propTypes = {
  text: PropTypes.string,
  items: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired
  })).isRequired,
  selectItem: PropTypes.func,
  iconPath: PropTypes.string,
  disabled: PropTypes.bool,
  className: PropTypes.string
};

DropdownMenuButton.defaultProps = {
  text: '',
  selectItem: () => {},
  iconPath: null,
  disabled: false,
  className: null
};

export default DropdownMenuButton;
