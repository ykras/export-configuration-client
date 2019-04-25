'use strict';

import React from 'react';
import TestUtils from 'react/lib/ReactTestUtils';
import ToggleButton from './';

describe('ToggleButton component', () => {
  let root;

  beforeEach(() => {
    root = TestUtils.renderIntoDocument(<ToggleButton/>);
  });

  it('toggle checked state after button was clicked', () => {
    const exportRepeatButtonDomElem = TestUtils.findRenderedDOMComponentWithTag(root, 'button');
    const expected = !root.state.checked;
    TestUtils.Simulate.click(exportRepeatButtonDomElem);
    const actual = root.state.checked;
    expect(actual).toBe(expected);
  });
});
