'use strict';

import React from 'react';
import TestUtils from 'react/lib/ReactTestUtils';
import ExportFormatSettingsPanel from './';
import ExportVocordTefSettingsPanel from '../ExportVocordTefSettingsPanel';
import ExportCollageSettingsPanel from '../ExportCollageSettingsPanel';

describe('ExportFormatSettingsPanel component', () => {
  const renderComponent = format => TestUtils.renderIntoDocument(<ExportFormatSettingsPanel exportFormat={format}/>);
  const findChildComponent = (root, child) => () => TestUtils.findRenderedComponentWithType(root, child);

  it('should contain ExportVocordTefSettingsPanel component when "Vocord TEF" export format was specified', () => {
    const parent = renderComponent('Vocord TEF');
    expect(findChildComponent(parent, ExportVocordTefSettingsPanel)).not.toThrow();
  });

  it('should contain ExportCollageSettingsPanel component when "Коллаж" export format was specified', () => {
    const parent = renderComponent('Коллаж');
    expect(findChildComponent(parent, ExportCollageSettingsPanel)).not.toThrow();
  });
});
