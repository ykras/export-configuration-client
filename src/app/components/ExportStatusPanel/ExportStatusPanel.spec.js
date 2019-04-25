'use strict';

import React from 'react';
import TestUtils from 'react/lib/ReactTestUtils';
import ExportControlPanel from './';
import Checkbox from '../Checkbox';
import Selector from '../Selector';
import ToggleButton from '../ToggleButton';
import ExportStatusPanel from '../ExportStatusPanel';

describe('ExportStatusPanel component', () => {
  let component;
  const findChildComponent = child => () => TestUtils.findRenderedComponentWithType(component, child);
  const findChildComponents = child => TestUtils.scryRenderedComponentsWithType(component, child);
  const findChildComponentById = (child, id) => () => findChildComponents(child).filter(c => c.props.id === id)[0];

  beforeEach(() => {
    component = TestUtils.renderIntoDocument(<ExportControlPanel/>);
  });

  it('should contain violations export service switch that is Checkbox component', () => {
    expect(findChildComponentById(Checkbox, 'export-switch')).not.toThrow();
  });

  it('should contain export format selector that is Selector component', () => {
    expect(findChildComponent(Selector)).not.toThrow();
  });

  it('should contain export repeater that is RepeatExportSwitch component', () => {
    expect(findChildComponentById(ToggleButton, 'repeat-export-switch')).not.toThrow();
  });

  it('should contain switch of the export in the "Поток+" mode that is Checkbox component', () => {
    expect(findChildComponentById(Checkbox, 'export-potok-plus')).not.toThrow();
  });

  it('should contain panel of the export status that is ExportStatistic component', () => {
    expect(findChildComponent(ExportStatusPanel)).not.toThrow();
  });
});
