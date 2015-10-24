import React, { Component } from 'react';
import {
  findRenderedComponentWithType,
  renderIntoDocument
} from 'react-addons-test-utils';


export function createTestComponent(TestComponent, props) {
  return findRenderedComponentWithType(
    renderIntoDocument(<TestComponent {...props}/>),
    TestComponent
  );
}
