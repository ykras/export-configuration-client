'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

require('./RecognitionChannelSelector.css');

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _Selector = require('../Selector');

var _Selector2 = _interopRequireDefault(_Selector);

var _localization = require('../../localization');

var _localization2 = _interopRequireDefault(_localization);

var _lodash = require('lodash');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

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

var RecognitionChannelSelector = function RecognitionChannelSelector(_ref) {
  var style = _ref.style,
      className = _ref.className,
      id = _ref.id,
      inline = _ref.inline,
      recognitionChannels = _ref.recognitionChannels,
      selectRecognitionChannel = _ref.selectRecognitionChannel,
      recognitionChannelId = _ref.recognitionChannelId;
  return _react2.default.createElement(
    'div',
    { style: style, className: (0, _classnames2.default)('RecognitionChannelSelector', className) },
    _react2.default.createElement(_Selector2.default, {
      id: id,
      selectedItemId: recognitionChannelId,
      label: (0, _lodash.capitalize)(_localization2.default.RecognitionChannelLabel) + ':',
      items: recognitionChannels,
      selectItem: selectRecognitionChannel,
      inline: inline
    })
  );
};

RecognitionChannelSelector.propTypes = {
  style: _react.PropTypes.object,
  className: _react.PropTypes.object,
  id: _react.PropTypes.string,
  inline: _react.PropTypes.bool,
  recognitionChannels: _react.PropTypes.arrayOf(_react.PropTypes.shape({
    id: _react.PropTypes.string.isRequired,
    name: _react.PropTypes.string.isRequired
  })).isRequired,
  selectRecognitionChannel: _react.PropTypes.func,
  recognitionChannelId: _react.PropTypes.string
};

RecognitionChannelSelector.defaultProps = {
  style: null,
  className: null,
  id: 'recognition-channel-selector',
  inline: false,
  selectRecognitionChannel: function selectRecognitionChannel() {}
};

exports.default = RecognitionChannelSelector;

//# sourceMappingURL=index-compiled.js.map