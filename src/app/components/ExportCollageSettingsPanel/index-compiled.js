'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

require('./ExportCollageSettingsPanel.css');

var _ViolationTypeSelector = require('../ViolationTypeSelector');

var _ViolationTypeSelector2 = _interopRequireDefault(_ViolationTypeSelector);

var _Selector = require('../Selector');

var _Selector2 = _interopRequireDefault(_Selector);

var _DropdownMenuButton = require('../DropdownMenuButton');

var _DropdownMenuButton2 = _interopRequireDefault(_DropdownMenuButton);

var _Button = require('../Button');

var _Button2 = _interopRequireDefault(_Button);

var _CollageEditor = require('../CollageEditor');

var _CollageEditor2 = _interopRequireDefault(_CollageEditor);

var _CollageSettingsTable = require('../CollageSettingsTable');

var _CollageSettingsTable2 = _interopRequireDefault(_CollageSettingsTable);

var _selectors = require('../../store/selectors');

var _selectors2 = _interopRequireDefault(_selectors);

var _actions = require('../../store/actions');

var _actions2 = _interopRequireDefault(_actions);

var _api = require('../../api');

var _reactRedux = require('react-redux');

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _localization = require('../../localization');

var _localization2 = _interopRequireDefault(_localization);

var _lodash = require('lodash');

var _utils = require('../../common/utils');

var _statusTypes = require('../../common/statusTypes');

var _statusTypes2 = _interopRequireDefault(_statusTypes);

var _requestTypes = require('../../common/requestTypes');

var _requestTypes2 = _interopRequireDefault(_requestTypes);

var _violationTypes = require('../../common/violationTypes');

var _violationTypes2 = _interopRequireDefault(_violationTypes);

var _foregroundCollageObjectTypes = require('../../common/foregroundCollageObjectTypes');

var _foregroundCollageObjectTypes2 = _interopRequireDefault(_foregroundCollageObjectTypes);

var _ramda = require('ramda');

var _CollageSizeLabel = require('../CollageSizeLabel');

var _CollageSizeLabel2 = _interopRequireDefault(_CollageSizeLabel);

var _identifiers = require('../../store/identifiers');

var _identifiers2 = _interopRequireDefault(_identifiers);

var _CollageSelectedRectangleLabel = require('../CollageSelectedRectangleLabel');

var _CollageSelectedRectangleLabel2 = _interopRequireDefault(_CollageSelectedRectangleLabel);

var _withDataRequest = require('../../higher_order_components/withDataFetch/withDataRequest');

var _withDataRequest2 = _interopRequireDefault(_withDataRequest);

var _withLoadingIndicator = require('../../higher_order_components/withLoadingIndicator');

var _withLoadingIndicator2 = _interopRequireDefault(_withLoadingIndicator);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ExportCollageSettingsPanel = function (_Component) {
  _inherits(ExportCollageSettingsPanel, _Component);

  function ExportCollageSettingsPanel() {
    var _ref;

    _classCallCheck(this, ExportCollageSettingsPanel);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    var _this = _possibleConstructorReturn(this, (_ref = ExportCollageSettingsPanel.__proto__ || Object.getPrototypeOf(ExportCollageSettingsPanel)).call.apply(_ref, [this].concat(args)));

    _this.onForegroundObjectAdded = _this.onForegroundObjectAdded.bind(_this);
    _this.addTrafficLight = _this.addTrafficLight.bind(_this);
    _this.handleForegroundObjectsRemoving = _this.handleForegroundObjectsRemoving.bind(_this);
    _this.handleSaveConfiguration = _this.handleSaveConfiguration.bind(_this);
    return _this;
  }

  _createClass(ExportCollageSettingsPanel, [{
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      var _props = this.props,
          curViolType = _props.selectedViolationType,
          selectedSettingTypeId = _props.selectedCollageSettingTypeId,
          selectSettingType = _props.selectCollageSettingType;
      var nextViolType = nextProps.selectedViolationType;

      if (curViolType && nextViolType && curViolType.id !== nextViolType.id) {
        var settingTypes = this.filterCollageSettingTypes(nextViolType.id);
        if (!(0, _ramda.find)((0, _ramda.propEq)('id', selectedSettingTypeId))(settingTypes)) {
          selectSettingType(settingTypes[0].id);
        }
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var _props2 = this.props,
          className = _props2.className,
          readCollageRequest = _props2.readCollageRequest,
          violationTypes = _props2.violationTypes,
          selectViolationType = _props2.selectViolationType,
          selectedViolationType = _props2.selectedViolationType;

      return _react2.default.createElement(
        'div',
        { className: (0, _classnames2.default)('ExportCollageSettingsPanel', className) },
        _react2.default.createElement(
          'div',
          { className: 'container-fluid' },
          _react2.default.createElement(
            'div',
            { className: 'row' },
            _react2.default.createElement(
              'div',
              { className: 'col-sm-4' },
              _react2.default.createElement(_ViolationTypeSelector2.default, { violationTypes: violationTypes, selectViolationType: selectViolationType, selectedViolationTypeId: selectedViolationType.id, inline: true })
            ),
            _react2.default.createElement(
              'div',
              { className: 'col-xs-6 col-sm-2 col-sm-offset-1 col-md-offset-3 col-md-1' },
              this.foregroundObjectAdditionComponent()
            ),
            _react2.default.createElement(
              'div',
              { className: 'col-xs-6 col-sm-2 col-md-1' },
              this.foregroundObjectRemovalComponent()
            ),
            _react2.default.createElement(
              'div',
              { className: 'col-sm-3' },
              this.settingTypeSelector()
            )
          ),
          _react2.default.createElement(
            'div',
            { className: 'row' },
            _react2.default.createElement(
              'div',
              { className: 'col-sm-4' },
              readCollageRequest.status === _statusTypes2.default.Success && _react2.default.createElement(_CollageSizeLabel2.default, null)
            ),
            _react2.default.createElement(
              'div',
              { className: 'col-sm-5 text-right' },
              readCollageRequest.status === _statusTypes2.default.Success && _react2.default.createElement(_CollageSelectedRectangleLabel2.default, null)
            )
          ),
          _react2.default.createElement(
            'div',
            { className: 'row' },
            _react2.default.createElement(
              'div',
              { className: 'col-sm-9' },
              _react2.default.createElement(_CollageEditor2.default, null)
            ),
            _react2.default.createElement(
              'div',
              { className: 'col-sm-3' },
              _react2.default.createElement(_CollageSettingsTable2.default, null)
            )
          ),
          _react2.default.createElement(
            'div',
            { className: 'row' },
            _react2.default.createElement(
              'div',
              { className: 'col-sm-offset-11 col-sm-1' },
              this.saveConfigurationButton()
            )
          )
        )
      );
    }
  }, {
    key: 'saveConfigurationButton',
    value: function saveConfigurationButton() {
      var requests = [this.props.saveCurrentCollageConfigurationRequest, this.props.updateCollageCurrentVideoExportModeRequest, this.props.updateCollageVideoExportSettingsRequest, this.props.updateCollageExportPathRequest];
      var saveRequest = _utils.combineRequests.apply(undefined, requests);
      var savingStatus = requests.every(function (r) {
        return !(0, _lodash.isEmpty)(r);
      }) ? saveRequest.status : null;
      var savingInProgress = savingStatus === _statusTypes2.default.Pending;
      return _react2.default.createElement(
        'div',
        { className: 'row' },
        _react2.default.createElement(
          'div',
          { style: { paddingRight: 0 }, className: 'col-xs-9, vertical-center' },
          _react2.default.createElement(_Button2.default, {
            disabled: savingInProgress,
            id: 'apply-button',
            text: _localization2.default.Apply,
            className: 'margin-top-10px pull-right',
            onClick: this.handleSaveConfiguration
          })
        ),
        savingInProgress && _react2.default.createElement(
          'div',
          { className: 'col-xs-2 vertical-center' },
          _react2.default.createElement('img', { style: { width: '20px', marginTop: '7px' }, src: require("../../images/loading.gif") })
        )
      );
    }
  }, {
    key: 'handleSaveConfiguration',
    value: function handleSaveConfiguration() {
      this.props.requestSaveCurrentCollageConfiguration(_api.baseUrl);
      this.props.requestUpdateCollageCurrentVideoExportMode(_api.baseUrl, this.props.exportTypeId, this.props.selectedVideoExportModeId);
      var videoExportSettings = { videoSecondsBeforeCheckTime: this.props.videoSecondsBeforeCheckTime,
        videoSecondsAfterCheckTime: this.props.videoSecondsAfterCheckTime };
      this.props.requestUpdateCollageVideoExportSettings(_api.baseUrl, this.props.exportTypeId, videoExportSettings);
      this.props.requestUpdateCollageExportPath(_api.baseUrl, this.props.collageExportPath);
    }
  }, {
    key: 'onForegroundObjectAdded',
    value: function onForegroundObjectAdded(objectTypeId) {
      var foregroundObjectTypes = this.props.foregroundObjectTypes;

      var foregroundObjectType = (0, _ramda.find)((0, _ramda.propEq)('id', objectTypeId))(foregroundObjectTypes);
      if (!foregroundObjectType) {
        throw new Error('Cannot find foreground collage objects type by identifier \'' + objectTypeId + '\'');
      }
      switch (foregroundObjectType.name) {
        case _foregroundCollageObjectTypes2.default.TrafficLight:
          this.addTrafficLight();
          break;
        case _foregroundCollageObjectTypes2.default.Sign:
          this.addRoadSign();
          break;
        default:
          throw new Error('Unknown foreground collage objects type \'' + foregroundObjectType.name + '\'');
      }
    }
  }, {
    key: 'addTrafficLight',
    value: function addTrafficLight() {
      var _props3 = this.props,
          requestCreateCollageTrafficLight = _props3.requestCreateCollageTrafficLight,
          selectedViolationType = _props3.selectedViolationType,
          selectedCollageSettingTypeId = _props3.selectedCollageSettingTypeId,
          selectCollageSettingType = _props3.selectCollageSettingType;

      requestCreateCollageTrafficLight(_api.baseUrl, selectedViolationType.id).then(function () {
        if (selectedCollageSettingTypeId !== _identifiers2.default.CollageTrafficLightsSettingTypeId) {
          selectCollageSettingType(_identifiers2.default.CollageTrafficLightsSettingTypeId);
        }
      });
    }
  }, {
    key: 'addRoadSign',
    value: function addRoadSign() {
      var _props4 = this.props,
          requestCreateCollageRoadSign = _props4.requestCreateCollageRoadSign,
          selectedViolationType = _props4.selectedViolationType,
          selectedCollageSettingTypeId = _props4.selectedCollageSettingTypeId,
          selectCollageSettingType = _props4.selectCollageSettingType;

      requestCreateCollageRoadSign(_api.baseUrl, selectedViolationType.id).then(function () {
        if (selectedCollageSettingTypeId !== _identifiers2.default.CollageRoadSignsSettingTypeId) {
          selectCollageSettingType(_identifiers2.default.CollageRoadSignsSettingTypeId);
        }
      });
    }
  }, {
    key: 'foregroundObjectAdditionComponent',
    value: function foregroundObjectAdditionComponent() {
      var _props5 = this.props,
          foregroundObjectTypes = _props5.foregroundObjectTypes,
          selectedViolationType = _props5.selectedViolationType;

      var enabledBy = (0, _ramda.curry)(function (violationTypeName, foregroundObjectType) {
        switch (violationTypeName) {
          case _violationTypes2.default.StopLine:
          case _violationTypes2.default.RedLight:
            return foregroundObjectType.name === _foregroundCollageObjectTypes2.default.TrafficLight;
          case _violationTypes2.default.WrongLineTurn:
            return foregroundObjectType.name === _foregroundCollageObjectTypes2.default.Sign;
          default:
            return false;
        }
      });
      var enabledForegroundObjectTypes = foregroundObjectTypes.filter(enabledBy(selectedViolationType.name));
      return _react2.default.createElement(_DropdownMenuButton2.default, {
        id: 'add-object-menu',
        items: (0, _localization.localizeItems)(enabledForegroundObjectTypes, _lodash.capitalize),
        selectItem: this.onForegroundObjectAdded,
        text: (0, _lodash.capitalize)(_localization2.default.AddForegroundCollageObject),
        iconPath: require("../../images/add.png"),
        disabled: enabledForegroundObjectTypes.length < 1
      });
    }
  }, {
    key: 'requestDeleteForegroundCollageObject',
    value: function requestDeleteForegroundCollageObject(settingId) {
      var _settingId$split = settingId.split('/'),
          _settingId$split2 = _slicedToArray(_settingId$split, 3),
          foregroundObjectSettingId = _settingId$split2[0],
          foregroundObjectId = _settingId$split2[2];

      if (foregroundObjectSettingId === _identifiers2.default.CollageTrafficLightSettingId) {
        return this.deleteCollageTrafficLight(foregroundObjectId);
      }
      if (foregroundObjectSettingId === _identifiers2.default.CollageRoadSignSettingId) {
        return this.deleteCollageRoadSign(foregroundObjectId);
      }
      Promise.reject(new Error('Unknown foreground collage object (settingId: ' + settingId + ')'));
    }
  }, {
    key: 'deleteCollageTrafficLight',
    value: function deleteCollageTrafficLight(trafficLightId) {
      var requestDeleteCollageTrafficLight = this.props.requestDeleteCollageTrafficLight;

      return requestDeleteCollageTrafficLight(_api.baseUrl, trafficLightId);
    }
  }, {
    key: 'deleteCollageRoadSign',
    value: function deleteCollageRoadSign(roadSignId) {
      var requestDeleteCollageRoadSign = this.props.requestDeleteCollageRoadSign;

      return requestDeleteCollageRoadSign(_api.baseUrl, roadSignId);
    }
  }, {
    key: 'handleForegroundObjectsRemoving',
    value: function handleForegroundObjectsRemoving() {
      var _this2 = this;

      var _props6 = this.props,
          collageSettings = _props6.collageSettings,
          deleteCollageSetting = _props6.deleteCollageSetting,
          selectedCollageSettingTypeId = _props6.selectedCollageSettingTypeId,
          collageSettingTypes = _props6.collageSettingTypes,
          selectCollageSettingType = _props6.selectCollageSettingType,
          violationTypeId = _props6.selectedViolationType.id,
          requestReadCollage = _props6.requestReadCollage;

      var foregroundObjectsSettings = collageSettings.filter(function (s) {
        return (0, _lodash.startsWith)(s.id, (0, _identifiers.collageTrafficLightSettingIdPrefix)(violationTypeId)) || (0, _lodash.startsWith)(s.id, (0, _identifiers.collageRoadSignSettingIdPrefix)(violationTypeId));
      });
      Promise.all(foregroundObjectsSettings.filter(function (s) {
        return s.typeId === selectedCollageSettingTypeId;
      }).filter(function (s) {
        return s.isSelected;
      }).map(function (s) {
        return _this2.requestDeleteForegroundCollageObject(s.id).then(function () {
          return deleteCollageSetting(s.id);
        });
      })).then(function () {
        if (!foregroundObjectsSettings.filter(function (s) {
          return s.typeId === selectedCollageSettingTypeId;
        }).filter(function (s) {
          return !s.isSelected;
        }).some(function (s) {
          return s.typeId === selectedCollageSettingTypeId;
        })) {
          selectCollageSettingType(collageSettingTypes[0].id);
        }
      }).then(function () {
        return requestReadCollage(_api.baseUrl, violationTypeId);
      });
    }
  }, {
    key: 'foregroundObjectRemovalComponent',
    value: function foregroundObjectRemovalComponent() {
      var _props7 = this.props,
          settings = _props7.collageSettings,
          settingTypeId = _props7.selectedCollageSettingTypeId,
          violationTypeId = _props7.selectedViolationType.id;

      var noForegroundObjectsToRemove = !((settingTypeId === _identifiers2.default.CollageTrafficLightsSettingTypeId || settingTypeId === _identifiers2.default.CollageRoadSignsSettingTypeId) && settings.filter(function (s) {
        return (0, _lodash.startsWith)(s.id, (0, _identifiers.collageTrafficLightSettingIdPrefix)(violationTypeId)) || (0, _lodash.startsWith)(s.id, (0, _identifiers.collageRoadSignSettingIdPrefix)(violationTypeId));
      }).some(function (s) {
        return s.isSelected;
      }));
      return _react2.default.createElement(_Button2.default, {
        id: 'remove-object-button',
        text: (0, _lodash.capitalize)(_localization2.default.RemoveForegroundCollageObject),
        iconPath: require("../../images/remove.png"),
        disabled: noForegroundObjectsToRemove,
        onClick: this.handleForegroundObjectsRemoving
      });
    }
  }, {
    key: 'filterCollageSettingTypes',
    value: function filterCollageSettingTypes(violationTypeId) {
      var _props8 = this.props,
          collageSettingTypes = _props8.collageSettingTypes,
          collageSettings = _props8.collageSettings;

      var settingTypes = collageSettingTypes.filter(function (type) {
        return collageSettings.some(function (setting) {
          return setting.typeId === type.id && (!(0, _lodash.includes)(setting.id, '/') || (0, _lodash.includes)(setting.id, violationTypeId));
        });
      });
      return settingTypes;
    }
  }, {
    key: 'settingTypeSelector',
    value: function settingTypeSelector() {
      var _props9 = this.props,
          selectCollageSettingType = _props9.selectCollageSettingType,
          selectedViolationType = _props9.selectedViolationType,
          selectedCollageSettingTypeId = _props9.selectedCollageSettingTypeId;

      var settingTypes = this.filterCollageSettingTypes(selectedViolationType.id);
      return _react2.default.createElement(_Selector2.default, {
        id: 'settings-selector',
        items: (0, _localization.localizeItems)(settingTypes, _lodash.capitalize),
        selectedItemId: selectedCollageSettingTypeId,
        selectItem: selectCollageSettingType
      });
    }
  }]);

  return ExportCollageSettingsPanel;
}(_react.Component);

ExportCollageSettingsPanel.propTypes = {
  violationTypes: _react.PropTypes.arrayOf(_react.PropTypes.shape({
    id: _react.PropTypes.string.isRequired,
    name: _react.PropTypes.string.isRequired
  })).isRequired,
  selectViolationType: _react.PropTypes.func.isRequired,
  selectedViolationType: _react.PropTypes.shape({
    id: _react.PropTypes.string.isRequired,
    name: _react.PropTypes.string.isRequired
  }),
  requestReadForegroundCollageObjectTypes: _react.PropTypes.func.isRequired,
  readForegroundObjectTypesRequest: _react.PropTypes.object.isRequired,
  foregroundObjectTypes: _react.PropTypes.arrayOf(_react.PropTypes.shape({
    id: _react.PropTypes.string.isRequired,
    name: _react.PropTypes.string.isRequired
  })).isRequired,
  requestReadCollageSettingTypes: _react.PropTypes.func.isRequired,
  readCollageSettingTypesRequest: _react.PropTypes.object.isRequired,
  collageSettingTypes: _react.PropTypes.arrayOf(_react.PropTypes.shape({
    id: _react.PropTypes.string.isRequired,
    name: _react.PropTypes.string.isRequired
  })).isRequired,
  selectedCollageSettingTypeId: _react.PropTypes.string,
  collageSettings: _react.PropTypes.arrayOf(_react.PropTypes.object).isRequired,
  collageExportPath: _react.PropTypes.string.isRequired,
  selectCollageSettingType: _react.PropTypes.func.isRequired,
  requestReadCollageVideoExportModes: _react.PropTypes.func.isRequired,
  readCollageVideoExportModesRequest: _react.PropTypes.object.isRequired,
  requestReadCollageCurrentVideoExportMode: _react.PropTypes.func.isRequired,
  readCollageCurrentVideoExportModeRequest: _react.PropTypes.object.isRequired,
  exportTypeId: _react.PropTypes.string.isRequired,
  className: _react.PropTypes.string,
  requestCreateCollageTrafficLight: _react.PropTypes.func.isRequired,
  deleteCollageSetting: _react.PropTypes.func.isRequired,
  requestDeleteCollageTrafficLight: _react.PropTypes.func.isRequired,
  requestReadCollage: _react.PropTypes.func.isRequired,
  readCollageRequest: _react.PropTypes.object.isRequired,
  requestCreateCollageRoadSign: _react.PropTypes.func.isRequired,
  requestDeleteCollageRoadSign: _react.PropTypes.func.isRequired,
  requestSaveCurrentCollageConfiguration: _react.PropTypes.func.isRequired,
  saveCurrentCollageConfigurationRequest: _react.PropTypes.object,
  requestReadCollagePictureTypes: _react.PropTypes.func.isRequired,
  readCollagePictureTypesRequest: _react.PropTypes.object.isRequired,
  requestUpdateCollageVideoExportSettings: _react.PropTypes.func.isRequired,
  updateCollageVideoExportSettingsRequest: _react.PropTypes.object.isRequired,
  videoSecondsBeforeCheckTime: _react.PropTypes.number,
  videoSecondsAfterCheckTime: _react.PropTypes.number,
  requestUpdateCollageCurrentVideoExportMode: _react.PropTypes.func.isRequired,
  updateCollageCurrentVideoExportModeRequest: _react.PropTypes.object.isRequired,
  selectedVideoExportModeId: _react.PropTypes.string.isRequired,
  requestUpdateCollageExportPath: _react.PropTypes.func.isRequired,
  updateCollageExportPathRequest: _react.PropTypes.object.isRequired
};

ExportCollageSettingsPanel.defaultProps = {
  className: null
};

var mapStateToProps = function mapStateToProps(state) {
  return {
    violationTypes: _selectors2.default.getViolationTypes(state),
    selectedViolationType: _selectors2.default.getSelectedViolationType(state),
    readForegroundObjectTypesRequest: _selectors2.default.getRequest(state, _requestTypes2.default.ReadForegroundCollageObjectTypes),
    foregroundObjectTypes: _selectors2.default.getForegroundCollageObjectTypes(state),
    readCollageSettingTypesRequest: _selectors2.default.getRequest(state, _requestTypes2.default.ReadCollageSettingTypes),
    collageSettingTypes: _selectors2.default.getCollageSettingTypes(state),
    selectedCollageSettingTypeId: _selectors2.default.getSelectedCollageSettingTypeId(state),
    collageSettings: _selectors2.default.getCollageSettings(state),
    collageExportPath: _selectors2.default.getCollageExportPath(state),
    readCollageVideoExportModesRequest: _selectors2.default.getRequest(state, _requestTypes2.default.ReadCollageVideoExportModes),
    readCollageCurrentVideoExportModeRequest: _selectors2.default.getRequest(state, _requestTypes2.default.ReadCollageCurrentVideoExportMode),
    exportTypeId: _selectors2.default.getSelectedExportTypeId(state),
    readCollageRequest: _selectors2.default.getRequest(state, _requestTypes2.default.readCollage(_selectors2.default.getSelectedViolationTypeId(state))),
    saveCurrentCollageConfigurationRequest: _selectors2.default.getRequest(state, _requestTypes2.default.SaveCurrentCollageConfiguration),
    readCollagePictureTypesRequest: _selectors2.default.getRequest(state, _requestTypes2.default.ReadCollagePictureTypes),
    updateCollageVideoExportSettingsRequest: _selectors2.default.getRequest(state, _requestTypes2.default.UpdateCollageVideoExportSettings),
    videoSecondsBeforeCheckTime: _selectors2.default.getCollageVideoExportSecondsBeforeCheckTime(state),
    videoSecondsAfterCheckTime: _selectors2.default.getCollageVideoExportSecondsAfterCheckTime(state),
    updateCollageCurrentVideoExportModeRequest: _selectors2.default.getRequest(state, _requestTypes2.default.UpdateCollageCurrentVideoExportMode),
    selectedVideoExportModeId: _selectors2.default.getSelectedCollageVideoExportModeId(state),
    updateCollageExportPathRequest: _selectors2.default.getRequest(state, _requestTypes2.default.UpdateCollageExportPath)
  };
};

var selectDataRequest = function selectDataRequest(p) {
  return [{ send: p.requestReadForegroundCollageObjectTypes }, { send: p.requestReadCollageSettingTypes }, [{ send: p.requestReadCollageVideoExportModes, params: p.exportTypeId }, { send: p.requestReadCollageCurrentVideoExportMode, params: p.exportTypeId }], { send: p.requestReadCollagePictureTypes }];
};

var selectLoadingRequest = function selectLoadingRequest(p) {
  return (0, _utils.combineRequests)(p.readForegroundObjectTypesRequest, p.readCollageSettingTypesRequest, p.readCollageVideoExportModesRequest, p.readCollageCurrentVideoExportModeRequest, p.readCollagePictureTypesRequest);
};

var Panel = (0, _ramda.compose)((0, _withDataRequest2.default)(selectDataRequest), (0, _withLoadingIndicator2.default)(selectLoadingRequest, null))(ExportCollageSettingsPanel);

exports.default = (0, _reactRedux.connect)(mapStateToProps, _actions2.default)(Panel);

//# sourceMappingURL=index-compiled.js.map