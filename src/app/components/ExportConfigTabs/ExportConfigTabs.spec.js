'use strict';

import React from 'react';
import ReactDOM from 'react-dom';
import TestUtils from 'react/lib/ReactTestUtils';
import ExportConfigTabs from './';
import ExportCommonSettingsAndStatusPanel from '../ExportCommonSettingsAndStatusPanel';
import ExportFormatSettingsPanel from '../ExportFormatSettingsPanel';
import Selector from '../Selector';
import Checkbox from '../Checkbox';
import ExportPotokPlusSettingsPanel from '../ExportPotokPlusSettingsPanel';

describe('ExportConfigTabs component', () => {
  const findChildComponents = (parent, child) => TestUtils.scryRenderedComponentsWithType(parent, child);
  const findChildComponentById = (parent, child, id) => findChildComponents(parent, child).filter(c => c.props.id === id)[0];
  let component;
  let tabsContainer;
  let tabs;
  let tabsContentContainer;
  let tabsContentPanels;
  let exportFormatSelectorDomElem;
  let exportCommonSettingsAndStatusPanel;
  let exportPotokPlusSwitch;

  beforeEach(() => {
    component = TestUtils.renderIntoDocument(<ExportConfigTabs/>);
    tabsContainer = TestUtils.findRenderedDOMComponentWithClass(component, 'nav nav-tabs');
    tabs = tabsContainer.children;
    tabsContentContainer = TestUtils.findRenderedDOMComponentWithClass(component, 'tab-content');
    tabsContentPanels = tabsContentContainer.children;
    const exportFormatSelector = findChildComponentById(component, Selector, 'export-format-selector');
    exportFormatSelectorDomElem = TestUtils.findRenderedDOMComponentWithTag(exportFormatSelector, 'select');
    exportCommonSettingsAndStatusPanel = TestUtils.findRenderedComponentWithType(component, ExportCommonSettingsAndStatusPanel);
    exportPotokPlusSwitch = findChildComponentById(exportCommonSettingsAndStatusPanel, Checkbox, 'export-potok-plus');
  });

  it('should contain tabs container', () => {
    expect(tabsContainer.tagName.toLowerCase()).toBe('ul');
  });

  it('should contain tabs content container', () => {
    expect(tabsContentContainer.tagName.toLowerCase()).toBe('div');
  });

  it('should contain two tabs', () => {
    expect(tabs.length).toBe(2);
    expect(tabs[0].tagName.toLowerCase()).toBe('li');
    expect(tabs[0].children.length).toBe(1);
    expect(tabs[0].children[0].tagName.toLowerCase()).toBe('a');
    expect(tabs[0].children[0].dataset.toggle).toBe('tab');
    expect(tabs[1].tagName.toLowerCase()).toBe('li');
    expect(tabs[1].children.length).toBe(1);
    expect(tabs[1].children[0].tagName.toLowerCase()).toBe('a');
    expect(tabs[1].children[0].dataset.toggle).toBe('tab');
  });

  it('should contain two tabs content panels', () => {
    expect(tabsContentPanels.length).toEqual(2);
    expect(tabsContentPanels[0].className.includes('tab-pane')).toBe(true);
    expect(tabsContentPanels[1].className.includes('tab-pane')).toBe(true);
  });

  it('tabs should correspond to their content panels', () => {
    expect(tabs[0].children[0].href.endsWith(tabsContentPanels[0].id)).toBe(true);
    expect(tabs[1].children[0].href.endsWith(tabsContentPanels[1].id)).toBe(true);
  });

  it('first tab should be active(selected) by default', () => {
    expect(tabs[0].className).toEqual('active');
    expect(tabs[1].className).toBe('');
    expect(tabsContentPanels[0].className.includes('active')).toBe(true);
    expect(tabsContentPanels[1].className.includes('active')).toBe(false);
  });

  it('content of the first tab is ExportStatusPanel component', () => {
    const panelParentNode = ReactDOM.findDOMNode(exportCommonSettingsAndStatusPanel).parentNode;
    expect(panelParentNode.id).toBe(tabsContentPanels[0].id);
  });

  it('content of the second tab is ExportFormatPanel component', () => {
    const panel = TestUtils.findRenderedComponentWithType(component, ExportFormatSettingsPanel);
    const panelParentNode = ReactDOM.findDOMNode(panel).parentNode;
    expect(panelParentNode.id).toBe(tabsContentPanels[1].id);
  });

  it('second tab always has name that is equal to the selected export format', () => {
    const expected = 'new export format';
    TestUtils.Simulate.change(exportFormatSelectorDomElem, {target: {value: expected}});
    const actual = tabs[1].children[0].textContent;
    expect(actual).toBe(expected);
  });

  it('should correctly update state after new export format was selected', () => {
    const expected = 'new export format';
    TestUtils.Simulate.change(exportFormatSelectorDomElem, {target: {value: expected}});
    const actual = component.state.exportFormat;
    expect(actual).toBe(expected);
  });

  it('third tab that has name "Поток+" is created when export in the mode "Поток+" was enabled', () => {
    const checkboxDomElem = TestUtils.findRenderedDOMComponentWithTag(exportPotokPlusSwitch, 'input');
    expect(checkboxDomElem.type).toBe('checkbox');
    TestUtils.Simulate.change(checkboxDomElem, {target: {checked: true}});
    expect(tabs.length).toBe(3);
    expect(tabsContentPanels.length).toEqual(3);
    expect(tabs[2].children[0].textContent).toBe('Поток+');
  });

  it('third tab "Поток+" is deleted when export in the mode "Поток+" was disabled', () => {
    const checkboxDomElem = TestUtils.findRenderedDOMComponentWithTag(exportPotokPlusSwitch, 'input');
    expect(checkboxDomElem.type).toBe('checkbox');
    TestUtils.Simulate.change(checkboxDomElem, {target: {checked: true}});
    expect(tabs.length).toBe(3);
    expect(tabsContentPanels.length).toEqual(3);
    TestUtils.Simulate.change(checkboxDomElem, {target: {checked: false}});
    expect(tabs.length).toBe(2);
    expect(tabsContentPanels.length).toEqual(2);
  });

  it('content of the third tab is ExportPotokPlusSettingsPanel component', () => {
    const checkboxDomElem = TestUtils.findRenderedDOMComponentWithTag(exportPotokPlusSwitch, 'input');
    expect(checkboxDomElem.type).toBe('checkbox');
    TestUtils.Simulate.change(checkboxDomElem, {target: {checked: true}});
    const panel = TestUtils.findRenderedComponentWithType(component, ExportPotokPlusSettingsPanel);
    const panelParentNode = ReactDOM.findDOMNode(panel).parentNode;
    expect(panelParentNode.id).toBe(tabsContentPanels[2].id);
  });
});
