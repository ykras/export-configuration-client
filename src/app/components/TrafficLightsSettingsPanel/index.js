'use strict';

import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import selectors from '../../store/selectors';
import actionCreators from '../../store/actions';
import './TrafficLightsSettingsPanel.css';
import classNames from 'classnames';
import RecognitionChannelSelector from '../RecognitionChannelSelector';
import OverviewPictureEditor from '../OverviewPictureEditor';
import requestTypes from '../../common/requestTypes';
import statusTypes from '../../common/statusTypes';
import OverviewPictureSizeLabel from '../OverviewPictureSizeLabel';
import OverviewPictureSelectedRectangleLabel from '../OverviewPictureSelectedRectangleLabel';
import TrafficLightSettingsTable from '../TrafficLightSettingsTable';
import withDataRequest from '../../higher_order_components/withDataFetch/withDataRequest';
import withDataRefresh from '../../higher_order_components/withDataFetch/withDataRefresh';
import {compose, prop} from 'ramda';

const TrafficLightsSettingsPanel = props => {
  const {style, className,
    // recognitionChannels, selectRecognitionChannel,
    readOverviewPictureRequest} = props;
  return (
    <div style={style} className={classNames('TrafficLightsSettingsPanel', className)}>
      <div className="container-fluid">
        <div className="row">
          <div className="col-sm-4">
            <RecognitionChannelSelector inline {...props}/>
          </div>
        </div>
        <div className="row margin-top-10px">
          <div className="col-sm-4">
            {readOverviewPictureRequest.status === statusTypes.Success && <OverviewPictureSizeLabel/>}
          </div>
          <div className="col-sm-5 text-right">
            {readOverviewPictureRequest.status === statusTypes.Success && <OverviewPictureSelectedRectangleLabel/>}
          </div>
        </div>
        <div className="row">
          <div className="col-sm-9">
            <OverviewPictureEditor/>
          </div>
          <div className="col-sm-3">
            {readOverviewPictureRequest.status === statusTypes.Success && <TrafficLightSettingsTable/>}
          </div>
        </div>
      </div>
    </div>
  );
};

TrafficLightsSettingsPanel.propTypes = {
  style: PropTypes.object,
  className: PropTypes.string,
  recognitionChannels: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired
  })).isRequired,
  selectRecognitionChannel: PropTypes.func.isRequired,
  readOverviewPictureRequest: PropTypes.object.isRequired,
  requestReadTrafficLight: PropTypes.func.isRequired,
  recognitionChannelId: PropTypes.string.isRequired
};

TrafficLightsSettingsPanel.defaultProps = {
  style: null,
  className: null
};

const mapStateToProps = state => {
  const recognitionChannelId = selectors.getSelectedRecognitionChannelId(state);
  return {
    recognitionChannels: selectors.getRecognitionChannels(state),
    readOverviewPictureRequest: selectors.getRequest(state, requestTypes.readOverviewPicture(recognitionChannelId)),
    recognitionChannelId
  };
};

const selectRequest = props => ({
  send: props.requestReadTrafficLight,
  params: props.recognitionChannelId
});

const Panel = compose(
  withDataRefresh(prop('recognitionChannelId'), selectRequest),
  withDataRequest(selectRequest)
)(TrafficLightsSettingsPanel);

export default connect(mapStateToProps, actionCreators)(Panel);
