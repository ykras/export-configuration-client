'use strict';
import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import './App.css';
import ExportConfigTabs from '../ExportConfigTabs';
import actionCreators from '../../store/actions';
import selectors from '../../store/selectors';
import requestTypes from '../../common/requestTypes';
import {combineRequests} from '../../common/utils';
import withDataRequest from '../../higher_order_components/withDataFetch/withDataRequest';
import withLoadingIndicator from '../../higher_order_components/withLoadingIndicator';
import {compose} from 'ramda';

const App = () => (
  <div className="App">
    <div className="container-fluid">
      <div className="row">
        <div className="col-md-12">
          <ExportConfigTabs/>
        </div>
      </div>
      {/* <div className="row">
        <div className="col-md-offset-11 col-md-1">
          <Button id="apply-button" text={localizedStrings.Apply} className="pull-right margin-top-10px"/>
        </div>
      </div>*/}
    </div>
  </div>
);

App.propTypes = {
  requestReadExportTypes: PropTypes.func.isRequired,
  readExportTypesRequest: PropTypes.object.isRequired,
  requestReadViolationTypes: PropTypes.func.isRequired,
  readViolationTypesRequest: PropTypes.object.isRequired,
  requestReadRecognitionChannels: PropTypes.func.isRequired,
  readRecognitionChannelsRequest: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  readExportTypesRequest: selectors.getRequest(state, requestTypes.ReadExportTypes),
  readViolationTypesRequest: selectors.getRequest(state, requestTypes.ReadViolationTypes),
  readRecognitionChannelsRequest: selectors.getRequest(state, requestTypes.ReadRecognitionChannels)
});

const selectDataRequest = p => ([
  {send: p.requestReadExportTypes},
  {send: p.requestReadViolationTypes},
  {send: p.requestReadRecognitionChannels}
]);

const selectLoadingRequest = p =>
  combineRequests(p.readExportTypesRequest, p.readViolationTypesRequest, p.readRecognitionChannelsRequest);

const app = compose(
  withDataRequest(selectDataRequest),
  withLoadingIndicator(selectLoadingRequest, null)
)(App);

export default connect(mapStateToProps, actionCreators)(app);
