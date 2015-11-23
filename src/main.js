import 'styles/styles.scss';

import Firebase from 'firebase';
import createBrowserHistory from 'history/lib/createBrowserHistory';
import React from 'react';
import ReactDOM from 'react-dom';
import { applyMiddleware, compose, createStore } from 'redux';
import { syncReduxAndRouter } from 'redux-simple-router';
import thunk from 'redux-thunk';

// Config
import { FIREBASE_URL } from 'config';

// Modules
import { authActions, authRouteResolver } from 'modules/auth';
import { reducer } from 'modules/reducers';

// Components
import { Root } from 'components/root';


const history = createBrowserHistory();

const store = compose(
  applyMiddleware(thunk)
)(createStore)(reducer, {
  firebase: new Firebase(FIREBASE_URL)
});


if (module.hot) {
  module.hot.accept('./modules/reducers', () => {
    store.replaceReducer(reducer);
  });
}


store.dispatch(authActions.initAuth());

syncReduxAndRouter(history, store);


ReactDOM.render((
  <Root history={history} onEnter={authRouteResolver(store.getState)} store={store}/>
), document.querySelector('.app-root'));
