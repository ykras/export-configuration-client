'use strict';

import {curry} from 'ramda';

export const getRecognitionChannels = state => state.recognitionChannels.ids.map(id => state.recognitionChannels.byId[id]);

export const getSelectedRecognitionChannelId = state => state.ui.selectedRecognitionChannelId;

export const getRecognitionChannel = curry((state, id) => state.recognitionChannels.byId[id] || null);
