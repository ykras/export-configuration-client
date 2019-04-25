'use strict';

import React, {PropTypes} from 'react';
import './RecognitionChannelSelector.css';
import classNames from 'classnames';
import Selector from '../Selector';
import localizedStrings from '../../localization';
import {capitalize/* , find*/} from 'lodash';
// import {curry} from 'ramda';
// import AutoComplete from 'material-ui/AutoComplete';
// import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
// import injectTapEventPlugin from 'react-tap-event-plugin';
// injectTapEventPlugin();
//
// const handleSelection = curry((channels, selectChannel, _, channelIndex) => {
//   if (channelIndex < 0) {
//     return;
//   }
//   selectChannel(channels[channelIndex].id);
// });
//
// const findRecognitionChannel = (channels, channelId) => {
//   return find(channels, ch => ch.id === channelId);
// };

const RecognitionChannelSelector = ({style, className, id, inline,
  recognitionChannels, selectRecognitionChannel, recognitionChannelId}) => (
  <div style={style} className={classNames('RecognitionChannelSelector', className)}>
    <Selector
      id={id}
      selectedItemId={recognitionChannelId}
      label={`${capitalize(localizedStrings.RecognitionChannelLabel)}:`}
      items={recognitionChannels}
      selectItem={selectRecognitionChannel}
      inline={inline}
      />
    {/* <MuiThemeProvider>
      <AutoComplete
        floatingLabelText={`${capitalize(localizedStrings.RecognitionChannelLabel)}`}
        hintText="Выберите канал распознавания"
        dataSource={recognitionChannels}
        dataSourceConfig={{text: 'name', value: 'name'}}
        filter={AutoComplete.caseInsensitiveFilter}
        openOnFocus
        menuStyle={{maxHeight: 300}}
        onNewRequest={handleSelection(recognitionChannels, selectRecognitionChannel)}
        searchText={findRecognitionChannel(recognitionChannels, recognitionChannelId).name}
        />
    </MuiThemeProvider>*/}
  </div>
);

RecognitionChannelSelector.propTypes = {
  style: PropTypes.object,
  className: PropTypes.object,
  id: PropTypes.string,
  inline: PropTypes.bool,
  recognitionChannels: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired
  })).isRequired,
  selectRecognitionChannel: PropTypes.func,
  recognitionChannelId: PropTypes.string
};

RecognitionChannelSelector.defaultProps = {
  style: null,
  className: null,
  id: 'recognition-channel-selector',
  inline: false,
  selectRecognitionChannel: () => {}
};

export default RecognitionChannelSelector;
