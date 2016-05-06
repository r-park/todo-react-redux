import React, { PropTypes } from 'react';
import { Provider } from 'react-redux';
import { Route, Router } from 'react-router';

// Config
import { SIGN_IN_PATH, TASKS_PATH } from 'config';

// Components
import App from './app/app';
import SignIn from './sign-in/sign-in';
import Tasks from './tasks/tasks';


export function Root({history, onEnter, store}) {
  return (
    <Provider store={store}>
      <Router history={history}>
        <Route component={App} onEnter={onEnter} path="/">
          <Route component={SignIn} path={SIGN_IN_PATH} />
          <Route component={Tasks} path={TASKS_PATH} />
        </Route>
      </Router>
    </Provider>
  );
}

Root.propTypes = {
  history: PropTypes.object.isRequired,
  onEnter: PropTypes.func.isRequired,
  store: PropTypes.object.isRequired
};
