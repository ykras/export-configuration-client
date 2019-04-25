'use strict';

import React, {Component, PropTypes} from 'react';
import './ExportStatusMessagePanel.css';

class ExportStatusPanel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      status: this.props.initialStatus
    };
  }
  render() {
    return (
      <div className="ExportStatusMessagePanel">
        <div className="jumbotron">
          <label>
            {this.state.status}
          </label>
        </div>
      </div>
    );
  }
}

ExportStatusPanel.propTypes = {
  initialStatus: PropTypes.string
};

ExportStatusPanel.defaultProps = {
  initialStatus: 'Ошибка'
};

export default ExportStatusPanel;
