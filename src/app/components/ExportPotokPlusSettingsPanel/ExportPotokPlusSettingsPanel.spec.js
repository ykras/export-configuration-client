'use strict';

import React from 'react';
import TestUtils from 'react/lib/ReactTestUtils';
import ExportPotokPlusSettingsPanel from './';
import TextInput from '../TextInput';
import UserCredentialsInput from '../UserCredentialsInput';

describe('ExportPotokPlusSettingsPanel component', () => {
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
    component = TestUtils.renderIntoDocument(<ExportPotokPlusSettingsPanel/>);
  });

  it('should contain export path input in the mode "Поток+" that is TextInput component', () => {
    expect(findChildComponentById(TextInput, 'export-potok-plus-path-input')).not.toThrow();
  });

  it('should contain export path format text that is ExportPathFormatLabel component', () => {
    const exportPathFormatLabelDomElem = TestUtils.findRenderedDOMComponentWithClass(component, 'ExportPathFormatLabel');
    expect(exportPathFormatLabelDomElem.tagName.toLowerCase()).toBe('div');
  });

  it('should contain user credentials input that is UserCredentialsInput component', () => {
    expect(findChildComponent(UserCredentialsInput)).not.toThrow();
  });
});
