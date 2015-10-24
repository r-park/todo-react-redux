import React, { Component } from 'react';
import {
  findRenderedComponentWithType,
  renderIntoDocument
} from 'react-addons-test-utils';


export function createTestComponent(TargetComponent, props) {
  class TestComponent extends Component {
    render() {
      return <TargetComponent {...props}/>;
    }
  }

  return findRenderedComponentWithType(
    renderIntoDocument(<TestComponent/>),
    TargetComponent
  );
}
