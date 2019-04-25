'use strict';

import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import './TrafficLightEditor.css';
import classNames from 'classnames';
import selectors from '../../store/selectors';
import {capitalize, toNumber, toString, isNaN} from 'lodash';
import {curry} from 'ramda';
import localizedStrings from '../../localization';
import TextInput from '../TextInput';
import Button from '../Button';

const handleEditingOf = curry((paramName, handler, currentTrafficLight, newParamValue) => {
  const newTrafficLight = {...currentTrafficLight,
    [paramName]: isNaN(toNumber(newParamValue)) ? 0 : toNumber(newParamValue)};
  handler(newTrafficLight);
});

const handleRectSelect = (handler, rect) => () => {
  const newTrafficLight = {
    x: rect.x,
    y: rect.y,
    width: rect.w,
    height: rect.h
  };
  handler(newTrafficLight);
};

const handleApply = (handler, trafficLight) => () => handler(trafficLight);

const TrafficLightEditor = ({style, className, trafficLight, onEdit, onApply, selectedRectangle}) => (
  <div style={style} className={classNames('TrafficLightEditor', className)}>
    <div className="row">
      <div className="col-xs-1">
        X:
      </div>
      <div className="col-xs-3">
        <TextInput
          id="srcX" value={toString(trafficLight.x)}
          onTextChanged={handleEditingOf('x', onEdit, trafficLight)}
          />
      </div>
      <div className="col-xs-1 col-xs-offset-1">
        Y:
      </div>
      <div className="col-xs-3">
        <TextInput
          id="srcY" value={toString(trafficLight.y)}
          onTextChanged={handleEditingOf('y', onEdit, trafficLight)}
          />
      </div>
      <div className="col-xs-1 col-xs-offset-1">
        <Button
          iconPath={require("../../images/select_rect.png")} style={{padding: 0}}
          disabled={selectedRectangle === null}
          onClick={handleRectSelect(onEdit, selectedRectangle)}
          />
      </div>
    </div>
    <div className="row">
      <div className="col-xs-1">
        W:
      </div>
      <div className="col-xs-3">
        <TextInput
          id="srcW" value={toString(trafficLight.width)}
          onTextChanged={handleEditingOf('width', onEdit, trafficLight)}
          />
      </div>
      <div className="col-xs-1 col-xs-offset-1">
        H:
      </div>
      <div className="col-xs-3">
        <TextInput
          id="srcH" value={toString(trafficLight.height)}
          onTextChanged={handleEditingOf('height', onEdit, trafficLight)}
          />
      </div>
    </div>
    <div className="row">
      <div className="col-xs-4 col-xs-offset-7">
        <Button
          text={capitalize(localizedStrings.Apply)}
          disabled={!trafficLight.stale}
          onClick={handleApply(onApply, trafficLight)}
          />
      </div>
    </div>
  </div>
);

TrafficLightEditor.propTypes = {
  style: PropTypes.object,
  className: PropTypes.string,
  trafficLight: PropTypes.shape({
    x: PropTypes.number,
    y: PropTypes.number,
    width: PropTypes.number,
    height: PropTypes.number,
    stale: PropTypes.bool
  }).isRequired,
  onEdit: PropTypes.func,
  onApply: PropTypes.func,
  selectedRectangle: PropTypes.shape({
    x: PropTypes.number,
    y: PropTypes.number,
    w: PropTypes.number,
    h: PropTypes.number
  })
};

TrafficLightEditor.defaultProps = {
  style: null,
  className: null,
  onEdit: () => {},
  onApply: () => {},
  selectedRectangle: null
};

const mapStateToProps = state => ({
  selectedRectangle: selectors.getOverviewPictureSelectedRectangle(state)
});

export default connect(mapStateToProps)(TrafficLightEditor);
