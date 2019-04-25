'use strict';

import React from 'react';
import TestUtils from 'react/lib/ReactTestUtils';
import Selector from './';

describe('ExportFormatSelector component', () => {
  let component;

  beforeEach(() => {
    component = TestUtils.renderIntoDocument(<Selector/>);
  });

  it('should correctly update state after new item was selected', () => {
    const expected = 'new item';
    const selectorDomElem = TestUtils.findRenderedDOMComponentWithTag(component, 'select');
    TestUtils.Simulate.change(selectorDomElem, {target: {value: expected}});
    const actual = component.state.selectedItem;
    expect(actual).toBe(expected);
  });
});
