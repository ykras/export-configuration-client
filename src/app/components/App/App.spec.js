/* eslint-env jasmine */
import React from 'react';
import TestUtils from 'react/lib/ReactTestUtils';
import {App} from './';
import ExportConfigTabs from '../ExportConfigTabs/index';
import Button from '../Button';

describe('ExportConfig application UI', () => {
  let app;
  const findChildComponent = child => () => TestUtils.findRenderedComponentWithType(app, child);
  const findChildComponents = child => TestUtils.scryRenderedComponentsWithType(app, child);
  const findChildComponentById = (child, id) => () => {
    const childComponent = findChildComponents(child).filter(c => c.props.id === id)[0];
    if (!childComponent) {
      throw new Error("Child component was not found");
    }
    return childComponent;
  };
  const requestStub = () => {};

  beforeEach(() => {
    app = TestUtils.renderIntoDocument(<App requestReadExportTypes={requestStub}/>);
  });

  it('should contain ExportConfigTabs component', () => {
    expect(findChildComponent(ExportConfigTabs)).not.toThrow();
  });

  it('should contain apply button that is ExportConfigApplyButton component', () => {
    expect(findChildComponentById(Button, 'apply-button')).not.toThrow();
  });
});
