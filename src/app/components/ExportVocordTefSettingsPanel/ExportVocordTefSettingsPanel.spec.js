'use strict';

import React from 'react';
import TestUtils from 'react/lib/ReactTestUtils';
import ExportVocortTefSettingsPanel from './';
import TextInput from '../TextInput';
import Selector from '../Selector';
import UserCredentialsInput from '../UserCredentialsInput';
import Checkbox from '../Checkbox';

describe('ExportVocordTefSettingsPanel component', () => {
  let component;
  const findChildComponent = child => () => TestUtils.findRenderedComponentWithType(component, child);
  const findChildComponents = child => TestUtils.scryRenderedComponentsWithType(component, child);
  const findChildComponentById = (child, id) => () => {
    const childComponent = findChildComponents(child).filter(c => c.props.id === id)[0];
    if (!childComponent) {
      throw new Error("Child component was not found");
    }
    return childComponent;
  };

  beforeEach(() => {
    component = TestUtils.renderIntoDocument(<ExportVocortTefSettingsPanel/>);
  });

  it('should contain export path input that is TextInput component', () => {
    expect(findChildComponentById(TextInput, 'export-path-input')).not.toThrow();
  });

  it('should contain export path format text that is ExportPathFormatLabel component', () => {
    const exportPathFormatLabelDomElem = TestUtils.findRenderedDOMComponentWithClass(component, 'ExportPathFormatLabel');
    expect(exportPathFormatLabelDomElem.tagName.toLowerCase()).toBe('div');
  });

  it('should contain selector of the video export that is Selector component', () => {
    expect(findChildComponentById(Selector, 'export-video-selector')).not.toThrow();
  });

  it('should contain user credentials input that is UserCredentialsInput component', () => {
    expect(findChildComponent(UserCredentialsInput)).not.toThrow();
  });

  it('should contain switch of exported violations spreading by folders that is Checkbox component', () => {
    expect(findChildComponentById(Checkbox, 'spread-violations-by-folders')).not.toThrow();
  });

  it('should contain export directories template input only when spreading violations by folders mode was switched on', () => {
    const violsSpreadSwitch = findChildComponentById(Checkbox, 'spread-violations-by-folders')();
    const switchDomElem = TestUtils.findRenderedDOMComponentWithTag(violsSpreadSwitch, 'input');
    expect(switchDomElem.type).toBe('checkbox');
    TestUtils.Simulate.change(switchDomElem, {target: {checked: true}});
    expect(findChildComponentById(TextInput, 'export-folders-template')).not.toThrow();
    TestUtils.Simulate.change(switchDomElem, {target: {checked: false}});
    expect(findChildComponentById(TextInput, 'export-folders-template')).toThrow();
  });
});
