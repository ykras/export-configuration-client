'use strict';

import React, {Component, PropTypes} from 'react';
import './ToggleButton.css';
import classNames from 'classnames';

class ToggleButton extends Component {
  constructor(...args) {
    super(...args);
    this.state = {
      checked: this.props.initiallyChecked
    };
    this.handleClick = this.handleClick.bind(this);
    this.createButtonContent = this.createButtonContent.bind(this);
  }

  handleClick() {
    const {state, props} = this;
    const checked = !state.checked;
    this.setState({checked});
    props.onClick(checked);
  }

  createButtonContent() {
    const {checked} = this.state;
    const {glyphicon, iconPath, text} = this.props;
    const buttonContent = [];
    if (checked && glyphicon) {
      const glyphiconClass = classNames('glyphicon', `glyphicon-${glyphicon}`);
      buttonContent.push(<span className={glyphiconClass} key="1"></span>);
      buttonContent.push(' ');
    }
    if (iconPath) {
      buttonContent.push(<img src={iconPath} key="2"/>);
      buttonContent.push(' ');
    }
    buttonContent.push(text);
    return buttonContent;
  }

  render() {
    const {checked} = this.state;
    const {style} = this.props;
    const buttonClass = classNames('btn', 'btn-default', {active: checked});
    return (
      <div className="ToggleButton">
        <button
          type="button"
          className={buttonClass}
          data-toggle="button"
          aria-pressed={checked}
          onClick={this.handleClick}
          style={style}
          >
          {this.createButtonContent()}
        </button>
      </div>
    );
  }
}

ToggleButton.propTypes = {
  initiallyChecked: PropTypes.bool,
  glyphicon: PropTypes.string,
  iconPath: PropTypes.string,
  text: PropTypes.string,
  onClick: PropTypes.func,
  style: PropTypes.object
};

ToggleButton.defaultProps = {
  initiallyChecked: false,
  glyphicon: null,
  iconPath: null,
  text: '',
  onClick: () => {},
  style: null
};

export default ToggleButton;
