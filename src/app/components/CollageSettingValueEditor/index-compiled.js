'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRedux = require('react-redux');

require('./CollageSettingValueEditor.css');

var _localization = require('../../localization');

var _localization2 = _interopRequireDefault(_localization);

var _lodash = require('lodash');

var _identifiers = require('../../store/identifiers');

var _identifiers2 = _interopRequireDefault(_identifiers);

var _actions = require('../../store/actions');

var _actions2 = _interopRequireDefault(_actions);

var _selectors = require('../../store/selectors');

var _selectors2 = _interopRequireDefault(_selectors);

var _Selector = require('../Selector');

var _Selector2 = _interopRequireDefault(_Selector);

var _api = require('../../api');

var _TextInput = require('../TextInput');

var _TextInput2 = _interopRequireDefault(_TextInput);

var _FontEditor = require('../FontEditor');

var _FontEditor2 = _interopRequireDefault(_FontEditor);

var _FooterTemplateEditor = require('../FooterTemplateEditor');

var _FooterTemplateEditor2 = _interopRequireDefault(_FooterTemplateEditor);

var _collagePictureTypes = require('../../common/collagePictureTypes');

var _base64Js = require('base64-js');

var _base64Js2 = _interopRequireDefault(_base64Js);

var _CollageTrafficLightEditor = require('../CollageTrafficLightEditor');

var _CollageTrafficLightEditor2 = _interopRequireDefault(_CollageTrafficLightEditor);

var _RoadSignEditor = require('../RoadSignEditor');

var _RoadSignEditor2 = _interopRequireDefault(_RoadSignEditor);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var selectorItems = function selectorItems(props) {
  var settingId = props.settingId,
      videoExportModes = props.videoExportModes;

  switch (settingId) {
    case _identifiers2.default.VideoExportModeSettingId:
      return (0, _localization.localizeItems)(videoExportModes, _lodash.capitalize);
    default:
      return [];
  }
};

var selectItem = function selectItem(props) {
  var settingId = props.settingId,
      selectCollageVideoExportMode = props.selectCollageVideoExportMode;

  switch (settingId) {
    case _identifiers2.default.VideoExportModeSettingId:
      return function () {
        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
          args[_key] = arguments[_key];
        }

        var videoExportModeId = args[0];

        selectCollageVideoExportMode(videoExportModeId);
      };
    default:
      return function () {};
  }
};

var selectedItemId = function selectedItemId(props) {
  var settingId = props.settingId,
      selectedVideoExportModeId = props.selectedVideoExportModeId;

  switch (settingId) {
    case _identifiers2.default.VideoExportModeSettingId:
      return selectedVideoExportModeId;
    default:
      return null;
  }
};

var defaultText = function defaultText(props) {
  var settingId = props.settingId,
      videoSecondsBeforeCheckTime = props.videoSecondsBeforeCheckTime,
      videoSecondsAfterCheckTime = props.videoSecondsAfterCheckTime,
      settingValue = props.settingValue;

  switch (settingId) {
    case _identifiers2.default.VideoSecondsBeforeCheckTimeSettingId:
      return '' + videoSecondsBeforeCheckTime;
    case _identifiers2.default.VideoSecondsAfterCheckTimeSettingId:
      return '' + videoSecondsAfterCheckTime;
    case _identifiers2.default.CollageExportPathSettingId:
      return settingValue;
    default:
      return '';
  }
};

var editText = function editText(props) {
  var settingId = props.settingId,
      videoSecondsBeforeCheckTime = props.videoSecondsBeforeCheckTime,
      videoSecondsAfterCheckTime = props.videoSecondsAfterCheckTime,
      updateCollageVideoSecondsBeforeCheckTime = props.updateCollageVideoSecondsBeforeCheckTime,
      updateCollageVideoSecondsAfterCheckTime = props.updateCollageVideoSecondsAfterCheckTime,
      updateCollageExportPath = props.updateCollageExportPath,
      settingValue = props.settingValue;

  switch (settingId) {
    case _identifiers2.default.VideoSecondsBeforeCheckTimeSettingId:
      return function (seconds) {
        var secondsNum = (0, _lodash.toNumber)(seconds);
        if (secondsNum !== videoSecondsBeforeCheckTime) {
          updateCollageVideoSecondsBeforeCheckTime(secondsNum);
        }
      };
    case _identifiers2.default.VideoSecondsAfterCheckTimeSettingId:
      return function (seconds) {
        var secondsNum = (0, _lodash.toNumber)(seconds);
        if (secondsNum !== videoSecondsAfterCheckTime) {
          updateCollageVideoSecondsAfterCheckTime(secondsNum);
        }
      };
    case _identifiers2.default.CollageExportPathSettingId:
      return function (exportPath) {
        if (exportPath !== settingValue) {
          updateCollageExportPath(exportPath);
        }
      };
    default:
      return function () {};
  }
};

var defaultValueObject = function defaultValueObject(props) {
  var settingId = props.settingId,
      settingValue = props.settingValue,
      violationTypeId = props.violationTypeId;

  switch (settingId.split('/')[0]) {
    case _identifiers2.default.CollageDefaultFontSettingId:
      {
        var value = settingValue || { name: '', sizeInPoints: '' };
        return { fontName: value.name, fontSize: '' + value.sizeInPoints };
      }
    case _identifiers2.default.CollageViolationFontSettingId:
      {
        var _value = settingValue[violationTypeId] || { name: '', sizeInPoints: '' };
        return { fontName: _value.name, fontSize: '' + _value.sizeInPoints };
      }
    case _identifiers2.default.CollageTrafficLightSettingId:
    case _identifiers2.default.CollageRoadSignSettingId:
      return settingValue;
    default:
      return {};
  }
};

var editValueObject = function editValueObject(props) {
  var settingId = props.settingId,
      settingValue = props.settingValue,
      updateCollageDefaultFont = props.updateCollageDefaultFont,
      requestUpdateCollageDefaultFont = props.requestUpdateCollageDefaultFont,
      updateCollageFont = props.updateCollageFont,
      requestUpdateCollageFont = props.requestUpdateCollageFont,
      violationTypeId = props.violationTypeId,
      requestReadCollage = props.requestReadCollage,
      updateCollageTrafficLight = props.updateCollageTrafficLight,
      updateCollageRoadSign = props.updateCollageRoadSign;

  switch (settingId.split('/')[0]) {
    case _identifiers2.default.CollageDefaultFontSettingId:
      return function (value) {
        var currentDefaultFont = settingValue;
        var newDefaultFont = { name: value.fontName, sizeInPoints: (0, _lodash.toNumber)(value.fontSize) };
        if (!(0, _lodash.isEqual)(newDefaultFont, currentDefaultFont)) {
          requestUpdateCollageDefaultFont(_api.baseUrl, newDefaultFont).then(function () {
            return updateCollageDefaultFont(newDefaultFont);
          }).then(function () {
            return requestReadCollage(_api.baseUrl, violationTypeId);
          });
        }
      };
    case _identifiers2.default.CollageViolationFontSettingId:
      return function (value) {
        var currentFont = settingValue[violationTypeId];
        var newFont = { name: value.fontName, sizeInPoints: (0, _lodash.toNumber)(value.fontSize) };
        if (!(0, _lodash.isEqual)(newFont, currentFont)) {
          requestUpdateCollageFont(_api.baseUrl, violationTypeId, newFont).then(function () {
            return updateCollageFont(newFont);
          }).then(function () {
            return requestReadCollage(_api.baseUrl, violationTypeId);
          });
        }
      };
    case _identifiers2.default.CollageTrafficLightSettingId:
      return function (value) {
        var curTrafficLight = settingValue;
        var newTrafficLight = value;
        if (!(0, _lodash.isEqual)(newTrafficLight, curTrafficLight)) {
          updateCollageTrafficLight(settingId, _extends({}, newTrafficLight, { stale: true }));
        }
      };
    case _identifiers2.default.CollageRoadSignSettingId:
      return function (value) {
        var curRoadSign = settingValue;
        var newRoadSign = value;
        if (!(0, _lodash.isEqual)(newRoadSign, curRoadSign)) {
          updateCollageRoadSign(settingId, _extends({}, newRoadSign, { stale: true }));
        }
      };
    default:
      return function () {};
  }
};

var applyValueObject = function applyValueObject(props) {
  var settingId = props.settingId,
      requestReadCollage = props.requestReadCollage,
      violationTypeId = props.violationTypeId,
      requestUpdateCollageTrafficLight = props.requestUpdateCollageTrafficLight,
      updateCollageTrafficLight = props.updateCollageTrafficLight,
      requestUpdateCollageRoadSign = props.requestUpdateCollageRoadSign,
      updateCollageRoadSign = props.updateCollageRoadSign;

  switch (settingId.split('/')[0]) {
    case _identifiers2.default.CollageTrafficLightSettingId:
      return function (value) {
        var newTrafficLight = value;

        var _settingId$split = settingId.split('/'),
            _settingId$split2 = _slicedToArray(_settingId$split, 3),
            trafficLightId = _settingId$split2[2];

        requestUpdateCollageTrafficLight(_api.baseUrl, trafficLightId, newTrafficLight).then(function () {
          return updateCollageTrafficLight(settingId, _extends({}, newTrafficLight, { stale: false }));
        }).then(function () {
          if ((0, _lodash.some)(newTrafficLight, function (param) {
            return (0, _lodash.isNumber)(param) && param > 0;
          })) {
            requestReadCollage(_api.baseUrl, violationTypeId);
          }
        });
      };
    case _identifiers2.default.CollageRoadSignSettingId:
      return function (value) {
        var newRoadSign = value;

        var _settingId$split3 = settingId.split('/'),
            _settingId$split4 = _slicedToArray(_settingId$split3, 3),
            roadSignId = _settingId$split4[2];

        requestUpdateCollageRoadSign(_api.baseUrl, roadSignId, newRoadSign).then(function () {
          return updateCollageRoadSign(settingId, _extends({}, newRoadSign, { stale: false }));
        }).then(function () {
          if ((0, _lodash.some)(newRoadSign, function (param) {
            return (0, _lodash.isNumber)(param) && param > 0;
          })) {
            requestReadCollage(_api.baseUrl, violationTypeId);
          }
        });
      };
    default:
      return function () {};
  }
};

var defaultValueArray = function defaultValueArray(props) {
  var settingId = props.settingId,
      settingValue = props.settingValue;

  switch (settingId.split('/')[0]) {
    case _identifiers2.default.VehicleDetectionFrameFooterTemplateSettingId:
    case _identifiers2.default.OverviewBeginFooterTemplateSettingId:
    case _identifiers2.default.VehicleDetectionBeginFooterTemplateSettingId:
    case _identifiers2.default.OverviewEndFooterTemplateSettingId:
    case _identifiers2.default.VehicleDetectionEndFooterTemplateSettingId:
      return settingValue;
    default:
      return [];
  }
};

var getCollagePictureType = function getCollagePictureType(settingId) {
  var type = _collagePictureTypes.settingIdsToCollagePictureTypesMap[settingId];
  if (!type) {
    throw new Error('There is not collage picture type that corresponds specified setting id \'' + settingId + '\'');
  }
  return type;
};

var editValueArray = function editValueArray(props) {
  var settingId = props.settingId,
      settingValue = props.settingValue,
      violationTypeId = props.violationTypeId,
      requestReadCollage = props.requestReadCollage,
      requestUpdateCollageFooterTemplate = props.requestUpdateCollageFooterTemplate,
      updateCollageFooterTemplate = props.updateCollageFooterTemplate;

  var idOfSetting = settingId.split('/')[0];
  switch (idOfSetting) {
    case _identifiers2.default.VehicleDetectionFrameFooterTemplateSettingId:
    case _identifiers2.default.OverviewBeginFooterTemplateSettingId:
    case _identifiers2.default.VehicleDetectionBeginFooterTemplateSettingId:
    case _identifiers2.default.OverviewEndFooterTemplateSettingId:
    case _identifiers2.default.VehicleDetectionEndFooterTemplateSettingId:
      {
        var _ret = function () {
          var collagePictureType = getCollagePictureType(idOfSetting);
          return {
            v: function v(value) {
              var currentFooterLines = settingValue;
              var newFooterLines = value;
              if (!(0, _lodash.isEqual)(currentFooterLines, newFooterLines)) {
                (function () {
                  var newFooterTemplate = { collagePictureType: collagePictureType, footerLines: newFooterLines };
                  requestUpdateCollageFooterTemplate(_api.baseUrl, violationTypeId, newFooterTemplate).then(function () {
                    return updateCollageFooterTemplate(newFooterTemplate);
                  }).then(function () {
                    return requestReadCollage(_api.baseUrl, violationTypeId);
                  });
                })();
              }
            }
          };
        }();

        if ((typeof _ret === 'undefined' ? 'undefined' : _typeof(_ret)) === "object") return _ret.v;
      }
    default:
      return function () {};
  }
};

var uploadRoadSignFile = function uploadRoadSignFile(props) {
  var requestUploadCollageRoadSignFile = props.requestUploadCollageRoadSignFile,
      violationTypeId = props.violationTypeId,
      updateCollageRoadSign = props.updateCollageRoadSign,
      roadSignSettingId = props.settingId,
      roadSignSettingValue = props.settingValue;

  return function (_ref) {
    var fileName = _ref.fileName,
        fileData = _ref.fileData;

    var fileDataBase64 = _base64Js2.default.fromByteArray(new Uint8Array(fileData));
    requestUploadCollageRoadSignFile(_api.baseUrl, violationTypeId, { fileName: fileName, fileDataBase64: fileDataBase64 }).then(function (filePath) {
      return updateCollageRoadSign(roadSignSettingId, _extends({}, roadSignSettingValue, { filePath: filePath, stale: true }));
    });
  };
};

var CollageSettingValueEditor = function CollageSettingValueEditor(props) {
  var settingEditorTypeId = props.settingEditorTypeId,
      settingId = props.settingId,
      className = props.className;

  switch (settingEditorTypeId) {
    case _identifiers2.default.SelectorEditorTypeId:
      return _react2.default.createElement(_Selector2.default, {
        items: selectorItems(props),
        selectItem: selectItem(props),
        selectedItemId: selectedItemId(props),
        className: className
      });
    case _identifiers2.default.TextInputEditorTypeId:
      return _react2.default.createElement(_TextInput2.default, { id: settingId, defaultValue: defaultText(props), editText: editText(props) });
    case _identifiers2.default.FontEditorTypeId:
      return _react2.default.createElement(_FontEditor2.default, {
        id: settingId,
        label: { fontName: (0, _lodash.capitalize)(_localization2.default.FontName), fontSize: (0, _lodash.capitalize)(_localization2.default.FontSize) },
        defaultValue: defaultValueObject(props),
        editValue: editValueObject(props)
      });
    case _identifiers2.default.FooterTemplateEditorTypeId:
      return _react2.default.createElement(_FooterTemplateEditor2.default, {
        id: settingId,
        label: (0, _lodash.capitalize)(_localization2.default.FooterTemplateLineLabel),
        footerLines: defaultValueArray(props),
        editFooterLines: editValueArray(props)
      });
    case _identifiers2.default.CollageTrafficLightEditorTypeId:
      return _react2.default.createElement(_CollageTrafficLightEditor2.default, {
        trafficLight: defaultValueObject(props),
        onEdit: editValueObject(props),
        onApply: applyValueObject(props)
      });
    case _identifiers2.default.CollageRoadSignEditorTypeId:
      return _react2.default.createElement(_RoadSignEditor2.default, {
        roadSign: defaultValueObject(props),
        uploadRoadSignFile: uploadRoadSignFile(props),
        onEdit: editValueObject(props),
        onApply: applyValueObject(props)
      });
    default:
      return null;
  }
};

CollageSettingValueEditor.propTypes = {
  exportTypeId: _react.PropTypes.string.isRequired,
  settingId: _react.PropTypes.string.isRequired,
  settingValue: _react.PropTypes.any,
  settingEditorTypeId: _react.PropTypes.string.isRequired,
  finishCollageEditing: _react.PropTypes.func.isRequired,
  videoExportModes: _react.PropTypes.arrayOf(_react.PropTypes.shape({
    id: _react.PropTypes.string,
    name: _react.PropTypes.string
  })).isRequired,
  selectCollageVideoExportMode: _react.PropTypes.func.isRequired,
  requestUpdateCollageCurrentVideoExportMode: _react.PropTypes.func.isRequired,
  requestReadCollageVideoExportSettings: _react.PropTypes.func.isRequired,
  videoSecondsBeforeCheckTime: _react.PropTypes.number,
  videoSecondsAfterCheckTime: _react.PropTypes.number,
  updateCollageVideoSecondsBeforeCheckTime: _react.PropTypes.func.isRequired,
  updateCollageVideoSecondsAfterCheckTime: _react.PropTypes.func.isRequired,
  updateCollageDefaultFont: _react.PropTypes.func.isRequired,
  requestUpdateCollageDefaultFont: _react.PropTypes.func.isRequired,
  violationTypeId: _react.PropTypes.string.isRequired,
  requestReadCollage: _react.PropTypes.func.isRequired,
  updateCollageFont: _react.PropTypes.func.isRequired,
  requestUpdateCollageFont: _react.PropTypes.func.isRequired,
  requestUpdateCollageFooterTemplate: _react.PropTypes.func.isRequired,
  updateCollageFooterTemplate: _react.PropTypes.func.isRequired,
  requestUpdateCollageTrafficLight: _react.PropTypes.func.isRequired,
  updateCollageTrafficLight: _react.PropTypes.func.isRequired,
  requestUploadCollageRoadSignFile: _react.PropTypes.func.isRequired,
  className: _react.PropTypes.string,
  updateCollageRoadSign: _react.PropTypes.func.isRequired,
  requestUpdateCollageRoadSign: _react.PropTypes.func.isRequired,
  updateCollageExportPath: _react.PropTypes.func.isRequired
};

CollageSettingValueEditor.defaultProps = {
  className: null
};

var mapStateToProps = function mapStateToProps(state, ownProps) {
  var setting = _selectors2.default.getCollageSetting(state, ownProps.settingId);
  return {
    exportTypeId: _selectors2.default.getSelectedExportTypeId(state),
    settingEditorTypeId: setting.editorTypeId,
    videoExportModes: _selectors2.default.getCollageVideoExportModes(state),
    selectedVideoExportModeId: _selectors2.default.getSelectedCollageVideoExportModeId(state),
    videoSecondsBeforeCheckTime: _selectors2.default.getCollageVideoExportSecondsBeforeCheckTime(state),
    videoSecondsAfterCheckTime: _selectors2.default.getCollageVideoExportSecondsAfterCheckTime(state),
    violationTypeId: _selectors2.default.getSelectedViolationTypeId(state),
    settingValue: setting.value
  };
};

exports.default = (0, _reactRedux.connect)(mapStateToProps, _actions2.default)(CollageSettingValueEditor);

//# sourceMappingURL=index-compiled.js.map