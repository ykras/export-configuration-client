'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _utils = require('./utils');

exports.default = {
  readExportStatistic: function readExportStatistic() {
    var baseUrl = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
    return (0, _utils.fetchJson)(baseUrl + '/api/exportStatistic');
  }
};

//# sourceMappingURL=exportStatistic-compiled.js.map