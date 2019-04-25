'use strict';

import React from 'react';
import TestUtils from 'react/lib/ReactTestUtils';
import ExportCollageSettingsPanel from './';
import Selector from '../Selector';
import DropdownMenuButton from '../DropdownMenuButton';
import Button from '../Button';
import CollageEditor from '../CollageEditor';

describe('ExportCollageSettingsPanel component', () => {
  let component;
  const findChildComponents = child => TestUtils.scryRenderedComponentsWithType(component, child);
  const findChildComponentById = (child, id) => () => {
    const childComponent = findChildComponents(child).filter(c => c.props.id === id)[0];
    if (!childComponent) {
      throw new Error("Child component was not found");
    }
    return childComponent;
  };
  const findChildComponent = child => () => TestUtils.findRenderedComponentWithType(component, child);

  beforeEach(() => {
    component = TestUtils.renderIntoDocument(<ExportCollageSettingsPanel/>);
  });

  it('should contain violation type selector that is Selector component', () => {
    expect(findChildComponentById(Selector, 'violation-type-selector')).not.toThrow();
  });

  it('should contain dropdown menu to add overlaid objects on the collage, that is DropdownMenuButton component with id="add-object-menu"', () => {
    expect(findChildComponentById(DropdownMenuButton, 'add-object-menu')).not.toThrow();
  });

  it('should contain button to remove overlaid objects from the collate, that is Button component with id="remove-object-button"', () => {
    expect(findChildComponentById(Button, 'remove-object-button')).not.toThrow();
  });

  it('should contain violations and overlaid objects parameters selector, that is Selector component with id="settings-selector"', () => {
    expect(findChildComponentById(Selector, 'settings-selector')).not.toThrow();
  });

  it('should contain collage editor that is CollageEditor component', () => {
    expect(findChildComponent(CollageEditor)).not.toThrow();
  });
});
