'use strict';

import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import './CollageTrafficLightEditor.css';
import classNames from 'classnames';
import selectors from '../../store/selectors';
import {capitalize, toNumber, toString, isNaN} from 'lodash';
import {curry} from 'ramda';
import localizedStrings, {localizeItems} from '../../localization';
import TextInput from '../TextInput';
import Button from '../Button';
import Selector from '../Selector';
import pictureTypes from '../../common/collagePictureTypes';

const handleEditingOf = curry((paramName, handler, currentTrafficLight, newParamValue) => {
  const newTrafficLight = {...currentTrafficLight,
    [paramName]: isNaN(toNumber(newParamValue)) ? 0 : toNumber(newParamValue)};
  handler(newTrafficLight);
});

const handlePictureTypeEditing = curry((handler, currentTrafficLight,
                                        getCollagePictureTypeName, newPictureTypeId) => {
  const newPictureType = getCollagePictureTypeName(newPictureTypeId);
  const newTrafficLight = {
    ...currentTrafficLight,
    pictureType: newPictureType
  };
  handler(newTrafficLight);
});

const handleRectSelect = (handler, curTrafficLight, rect) => () => {
  const newTrafficLight = {
    ...curTrafficLight,
    x: rect.x,
    y: rect.y,
    width: rect.w,
    height: rect.h
  };
  handler(newTrafficLight);
};

const handleApply = (handler, trafficLight) => () => handler(trafficLight);

const CollageTrafficLightEditor = ({className, trafficLight, onEdit, onApply,
  selectedRectangle, collagePictureTypes, getCollagePictureTypeId, getCollagePictureTypeName}) => (
  <div className={classNames('CollageTrafficLightEditor', className)}>
    <div className="row">
      <div className="col-xs-11">
        <Selector
          label={`${capitalize(localizedStrings.CollagePicture)}:`}
          selectedItemId={getCollagePictureTypeId(trafficLight.pictureType)}
          items={localizeItems(collagePictureTypes
            .filter(p => p.name === pictureTypes.OverviewBegin || p.name === pictureTypes.OverviewEnd),
            capitalize)}
          selectItem={handlePictureTypeEditing(onEdit, trafficLight, getCollagePictureTypeName)}
          />
      </div>
    </div>
    <div className="row">
      <div className="col-xs-12">
        {`${capitalize(localizedStrings.CollageTrafficLightTargetPositionAndSize)}:`}
      </div>
    </div>
    <div className="row">
      <div className="col-xs-1">
        X:
      </div>
      <div className="col-xs-3">
        <TextInput
          id="tgtX" value={toString(trafficLight.x)}
          onTextChanged={handleEditingOf('x', onEdit, trafficLight)}
          />
      </div>
      <div className="col-xs-1 col-xs-offset-1">
        Y:
      </div>
      <div className="col-xs-3">
        <TextInput
          id="tgtY" value={toString(trafficLight.y)}
          onTextChanged={handleEditingOf('y', onEdit, trafficLight)}
          />
      </div>
      <div className="col-xs-1 col-xs-offset-1">
        <Button
          iconPath={require("../../images/select_rect.png")} style={{padding: 0}}
          disabled={selectedRectangle === null}
          onClick={handleRectSelect(onEdit, trafficLight, selectedRectangle, 'target')}
          />
      </div>
    </div>
    <div className="row">
      <div className="col-xs-1">
        W:
      </div>
      <div className="col-xs-3">
        <TextInput
          id="tgtW" value={toString(trafficLight.width)}
          onTextChanged={handleEditingOf('width', onEdit, trafficLight)}
          />
      </div>
      <div className="col-xs-1 col-xs-offset-1">
        H:
      </div>
      <div className="col-xs-3">
        <TextInput
          id="tgtH" value={toString(trafficLight.height)}
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

CollageTrafficLightEditor.propTypes = {
  className: PropTypes.string,
  trafficLight: PropTypes.shape({
    id: PropTypes.string,
    pictureType: PropTypes.string,
    x: PropTypes.number,
    y: PropTypes.number,
    width: PropTypes.number,
    height: PropTypes.number
  }).isRequired,
  onEdit: PropTypes.func,
  onApply: PropTypes.func,
  selectedRectangle: PropTypes.shape({
    x: PropTypes.number,
    y: PropTypes.number,
    w: PropTypes.number,
    h: PropTypes.number
  }),
  collagePictureTypes: PropTypes.array.isRequired,
  getCollagePictureTypeId: PropTypes.func.isRequired,
  getCollagePictureTypeName: PropTypes.func.isRequired
};

CollageTrafficLightEditor.defaultProps = {
  className: null,
  onEdit: () => {},
  onApply: () => {},
  selectedRectangle: null
};

const mapStateToProps = state => ({
  selectedRectangle: selectors.getCollageSelectedRectangle(state),
  collagePictureTypes: selectors.getCollagePictureTypes(state),
  getCollagePictureTypeId: selectors.getCollagePictureTypeId(state),
  getCollagePictureTypeName: selectors.getCollagePictureTypeName(state)
});

export default connect(mapStateToProps)(CollageTrafficLightEditor);
