'use strict';

import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import './CollageEditor.css';
import classNames from 'classnames';
import actionCreators from '../../store/actions';
import selectors from '../../store/selectors';
import ImageEditor from '../ImageEditor';
import withLoadingIndicator from '../../higher_order_components/withLoadingIndicator';
import withDataRequest from '../../higher_order_components/withDataFetch/withDataRequest';
import withDataRefresh from '../../higher_order_components/withDataFetch/withDataRefresh';
import requestTypes from '../../common/requestTypes';
import {prop, compose} from 'ramda';

const selectRequest = props => ({
  send: props.requestReadCollage,
  params: props.violationTypeId
});

const andWithDataRefresh = withDataRefresh(prop('violationTypeId'), selectRequest);
const andWithLoadingIndicator = withLoadingIndicator(prop('readCollageRequest'), null);

const Editor = compose(
  withDataRequest(selectRequest),
  andWithDataRefresh,
  andWithLoadingIndicator,
)(ImageEditor);

const CollageEditor = props => {
  const {className, style} = props;
  return (
    <div style={style} className={classNames('CollageEditor', className)}>
      <Editor {...props} className="picture-height"/>
    </div>
  );
};

CollageEditor.propTypes = {
  requestReadCollage: PropTypes.func.isRequired,
  violationTypeId: PropTypes.string.isRequired,
  readCollageRequest: PropTypes.object.isRequired,
  imageDataUrl: PropTypes.string,
  className: PropTypes.string,
  style: PropTypes.object,
  onRectangleSelected: PropTypes.func.isRequired
};

CollageEditor.defaultProps = {
  className: null,
  style: null,
  collageDataUrl: null
};

const mapStateToProps = state => {
  const violationTypeId = selectors.getSelectedViolationTypeId(state);
  return {
    violationTypeId,
    readCollageRequest: selectors.getRequest(state, requestTypes.readCollage(violationTypeId)),
    imageDataUrl: selectors.getCollageImage(state)
  };
};

const mapActionCreatorsToProps = {
  onRectangleSelected: actionCreators.updateCollageSelectedRectangle,
  requestReadCollage: actionCreators.requestReadCollage
};

export default connect(mapStateToProps, mapActionCreatorsToProps)(CollageEditor);
