'use strict';

import React, {PropTypes, Component} from 'react';
import {connect} from 'react-redux';
import './ExportStatistic.css';
import classNames from 'classnames';
import localizedStrings, {localizeText} from '../../localization';
import {capitalize, isEmpty} from 'lodash';
import actionCreators from '../../store/actions';
import selectors from '../../store/selectors';
import {baseUrl} from '../../api';

const errorCode = error => `${capitalize(localizedStrings.ErrorCode)}: ${error}`;

const errorInfo = (code, category) => (
  <li className="list-group-item error-info">
    <h4 className="list-group-item-heading">{capitalize(localizedStrings.Error)}</h4>
    <p className="list-group-item-text">{localizeText(category, capitalize)}</p>
    <p className="list-group-item-text">{errorCode(code)}</p>
  </li>
);

const completedExportTiming = (endTime, violTime) => (
  <li className="list-group-item">
    <span>{`${capitalize(localizedStrings.LastSuccessfulExportTry)} `}</span>
    <span className="date-time">{`${endTime}`}</span>
    <span>{`, ${localizedStrings.ViolationTime} `}</span>
    <span className="date-time">{`${violTime}`}</span>
  </li>
);

const incompleteExportTiming = startTime => (
  <li className="list-group-item">
    <span>{`${capitalize(localizedStrings.LastExportTry)} `}</span>
    <span className="date-time">{`${startTime}`}</span>
  </li>
);

class ExportStatistic extends Component {
  constructor(...args) {
    super(...args);
    this.requestExportStatistic = this.requestExportStatistic.bind(this);
    this.timer = undefined;
  }

  componentWillMount() {
    this.timer = setInterval(this.requestExportStatistic, 3000);
  }

  componentWillUnmount() {
    clearInterval(this.timer);
  }

  render() {
    const {className, statistic, succeeded, errorCode, errorCategory, lastSuccessfulExportTryEndTime,
      lastExportedViolationTime, lastExportTryStartTime} = this.props;
    if (isEmpty(statistic)) {
      return null;
    }
    return (
      <div className={classNames('ExportStatistic', className)}>
        <div className={classNames('panel', `panel-${succeeded ? 'success' : 'danger'}`)}>
          <div className="panel-body">
            <ul className="list-group borderless">
              {!succeeded && errorInfo(errorCode, errorCategory)}
              {lastSuccessfulExportTryEndTime && lastExportedViolationTime &&
              completedExportTiming(lastSuccessfulExportTryEndTime, lastExportedViolationTime)}
              {lastExportTryStartTime && incompleteExportTiming(lastExportTryStartTime)}
            </ul>
          </div>
        </div>
      </div>
    );
  }

  requestExportStatistic() {
    this.props.requestReadExportStatistic(baseUrl);
  }
}

ExportStatistic.propTypes = {
  style: PropTypes.object,
  className: PropTypes.string,
  statistic: PropTypes.object,
  succeeded: PropTypes.bool,
  errorCode: PropTypes.number,
  errorCategory: PropTypes.string,
  lastExportTryStartTime: PropTypes.string,
  lastSuccessfulExportTryEndTime: PropTypes.string,
  lastExportedViolationTime: PropTypes.string,
  requestReadExportStatistic: PropTypes.func.isRequired
};

ExportStatistic.defaultProps = {
  style: null,
  className: null,
  succeeded: true
};

const mapStateToProps = state => ({
  statistic: selectors.getExportStatistic(state),
  succeeded: selectors.getExportSucceeded(state),
  errorCode: selectors.getExportErrorCode(state),
  errorCategory: selectors.getExportErrorCategory(state),
  lastExportTryStartTime: selectors.getLastExportTryStartTime(state),
  lastSuccessfulExportTryEndTime: selectors.getLastSuccessfulExportTryEndTime(state),
  lastExportedViolationTime: selectors.getLastExportedViolationTime(state)
});

export default connect(mapStateToProps, actionCreators)(ExportStatistic);
