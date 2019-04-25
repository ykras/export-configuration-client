'use strict';

import actionTypes from '../actionTypes';
import {createRequestThunk} from './common';
import api from '../../api';
import requestTypes from '../../common/requestTypes';

const replacePotokPlusSettings = potokPlusSettings => ({
  type: actionTypes.ReplacePotokPlusSettings,
  payload: {potokPlusSettings}
});

export const requestReadPotokPlusSettings = createRequestThunk({
  request: api.readPotokPlusSettings,
  key: requestTypes.ReadPotokPlusSettings,
  success: [replacePotokPlusSettings]
});

export const updatePotokPlusSettings = potokPlusSettings => ({
  type: actionTypes.UpdatePotokPlusSettings,
  payload: {potokPlusSettings}
});

export const requestUpdatePotokPlusSettings = createRequestThunk({
  request: api.updatePotokPlusSettings,
  key: requestTypes.UpdatePotokPlusSettings
});
