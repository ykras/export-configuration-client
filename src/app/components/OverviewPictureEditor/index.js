'use strict';

import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import './OverviewPictureEditor.css';
import classNames from 'classnames';
import ImageEditor from '../ImageEditor';
import withLoadingIndicator from '../../higher_order_components/withLoadingIndicator';
import withDataRequest from '../../higher_order_components/withDataFetch/withDataRequest';
import withDataRefresh from '../../higher_order_components/withDataFetch/withDataRefresh';
import actionCreators from '../../store/actions';
import selectors from '../../store/selectors';
import requestTypes from '../../common/requestTypes';
import {prop, compose} from 'ramda';

const selectRequest = props => ({
  send: props.requestReadOverviewPicture,
  params: props.recognitionChannelId
});

const andWithDataRefresh = withDataRefresh(prop('recognitionChannelId'), selectRequest);

const andWithLoadingIndicator = withLoadingIndicator(prop('readOverviewPictureRequest'),
  () => (
    <div className="picture-height">
      <img className="centered" src={require("../../images/image_missing.png")}/>
    </div>
  ));

const Editor = compose(
  withDataRequest(selectRequest),
  andWithDataRefresh,
  andWithLoadingIndicator,
)(ImageEditor);

const OverviewPictureEditor = props => {
  const {className, style} = props;
  return (
    <div style={style} className={classNames('OverviewPictureEditor', className)}>
      <Editor {...props} className="picture-height"/>
    </div>
  );
};

OverviewPictureEditor.propTypes = {
  className: PropTypes.string,
  style: PropTypes.object,
  requestReadOverviewPicture: PropTypes.func.isRequired,
  readOverviewPictureRequest: PropTypes.object.isRequired,
  recognitionChannelId: PropTypes.string.isRequired,
  imageDataUrl: PropTypes.string,
  onRectangleSelected: PropTypes.func.isRequired
};

OverviewPictureEditor.defaultProps = {
  className: null,
  style: null,
  imageDataUrl: null
};

const mapStateToProps = state => {
  const recognitionChannelId = selectors.getSelectedRecognitionChannelId(state);
  return {
    recognitionChannelId,
    readOverviewPictureRequest: selectors.getRequest(state, requestTypes.readOverviewPicture(recognitionChannelId)),
    imageDataUrl: selectors.getOverviewPictureDataUrl(state)
  };
};

const mapActionCreatorsToProps = {
  requestReadOverviewPicture: actionCreators.requestReadOverviewPicture,
  onRectangleSelected: actionCreators.updateOverviewPictureSelectedRectangle
};

export default connect(mapStateToProps, mapActionCreatorsToProps)(OverviewPictureEditor);
