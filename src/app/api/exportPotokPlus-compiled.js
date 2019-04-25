'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _utils = require('./utils');

exports.default = {
  readPotokPlusSettings: function readPotokPlusSettings() {
    var baseUrl = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
    return (0, _utils.fetchJson)(baseUrl + '/api/exportPotokPlus/settings');
  },
  updatePotokPlusSettings: function updatePotokPlusSettings() {
    var baseUrl = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
    var potokPlusSettings = arguments[1];
    return (0, _utils.fetchJson)(baseUrl + '/api/exportPotokPlus/settings', {
      method: 'PUT',
      body: JSON.stringify(potokPlusSettings)
    });
  }
};

//# sourceMappingURL=exportPotokPlus-compiled.js.map