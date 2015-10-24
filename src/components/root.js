import React, { Component, PropTypes } from 'react';
import { Provider } from 'react-redux';
import { Route } from 'react-router';
import { ReduxRouter } from 'redux-router';

// Components
import { App } from './app/app';
import { SignIn } from './sign-in/sign-in';
import { Tasks } from './tasks/tasks';


export class Root extends Component {
  static propTypes = {
    onEnter: PropTypes.func.isRequired,
    store: PropTypes.object.isRequired
  };

  render() {
    const { onEnter, store } = this.props;

    return (
      <Provider store={store}>
        <ReduxRouter>
          <Route path="/" component={App} onEnter={onEnter}>
            <Route path="sign-in" component={SignIn}/>
            <Route path="tasks" component={Tasks}/>
          </Route>
        </ReduxRouter>
      </Provider>
    );
  }
}
