'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _utils = require('./utils');

exports.default = {
  readVocordTefSettings: function readVocordTefSettings() {
    var baseUrl = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
    return (0, _utils.fetchJson)(baseUrl + '/api/exportVocordTef/settings');
  },
  updateVocordTefSettings: function updateVocordTefSettings() {
    var baseUrl = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
    var vocordTefSettings = arguments[1];
    return (0, _utils.fetchJson)(baseUrl + '/api/exportVocordTef/settings', {
      method: 'PUT',
      body: JSON.stringify(vocordTefSettings)
    });
  }
};

//# sourceMappingURL=exportVocordTef-compiled.js.map