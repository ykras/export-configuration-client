'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _identifiers = require('./identifiers');

var _identifiers2 = _interopRequireDefault(_identifiers);

var _collageSettingNames = require('../common/collageSettingNames');

var _collageSettingNames2 = _interopRequireDefault(_collageSettingNames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var createCollageSettings = function createCollageSettings() {
  var _byId;

  return {
    ids: [_identifiers2.default.CollageDefaultFontSettingId, _identifiers2.default.CollageViolationFontSettingId, _identifiers2.default.CollageExportPathSettingId, _identifiers2.default.VideoExportModeSettingId, _identifiers2.default.VideoSecondsBeforeCheckTimeSettingId, _identifiers2.default.VideoSecondsAfterCheckTimeSettingId],
    byId: (_byId = {}, _defineProperty(_byId, _identifiers2.default.CollageDefaultFontSettingId, {
      id: _identifiers2.default.CollageDefaultFontSettingId,
      typeId: undefined,
      name: _collageSettingNames2.default.Font,
      value: undefined,
      editorTypeId: _identifiers2.default.FontEditorTypeId,
      isEditing: false
    }), _defineProperty(_byId, _identifiers2.default.CollageViolationFontSettingId, {
      id: _identifiers2.default.CollageViolationFontSettingId,
      typeId: undefined,
      name: _collageSettingNames2.default.Font,
      value: undefined,
      editorTypeId: _identifiers2.default.FontEditorTypeId,
      isEditing: false,
      parentId: _identifiers2.default.CollageDefaultFontSettingId,
      isValueInherited: true
    }), _defineProperty(_byId, _identifiers2.default.CollageExportPathSettingId, {
      id: _identifiers2.default.CollageExportPathSettingId,
      typeId: undefined,
      name: _collageSettingNames2.default.CollageExportPath,
      value: undefined,
      editorTypeId: _identifiers2.default.TextInputEditorTypeId,
      isEditing: false
    }), _defineProperty(_byId, _identifiers2.default.VideoExportModeSettingId, {
      id: _identifiers2.default.VideoExportModeSettingId,
      typeId: undefined,
      name: _collageSettingNames2.default.ExportVideo,
      value: undefined,
      editorTypeId: _identifiers2.default.SelectorEditorTypeId,
      isEditing: false
    }), _defineProperty(_byId, _identifiers2.default.VideoSecondsBeforeCheckTimeSettingId, {
      id: _identifiers2.default.VideoSecondsBeforeCheckTimeSettingId,
      typeId: undefined,
      name: _collageSettingNames2.default.CollageVideoSecondsBeforeCheckTime,
      value: undefined,
      editorTypeId: _identifiers2.default.TextInputEditorTypeId,
      isEditing: false
    }), _defineProperty(_byId, _identifiers2.default.VideoSecondsAfterCheckTimeSettingId, {
      id: _identifiers2.default.VideoSecondsAfterCheckTimeSettingId,
      typeId: undefined,
      name: _collageSettingNames2.default.CollageVideoSecondsAfterCheckTime,
      value: undefined,
      editorTypeId: _identifiers2.default.TextInputEditorTypeId,
      isEditing: false
    }), _byId)
  };
};

exports.default = {
  createCollageSettings: createCollageSettings
};

//# sourceMappingURL=factory-compiled.js.map