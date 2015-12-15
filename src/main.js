import 'styles/styles.scss';

import Firebase from 'firebase';
import createBrowserHistory from 'history/lib/createBrowserHistory';
import React from 'react';
import ReactDOM from 'react-dom';
import { syncReduxAndRouter } from 'redux-simple-router';

import { FIREBASE_URL } from 'config';
import { authActions, authRouteResolver } from 'modules/auth';
import { Root } from 'components/root';
import createStore from './store';


const history = createBrowserHistory();

const store = createStore({
  firebase: new Firebase(FIREBASE_URL)
});

store.dispatch(authActions.initAuth());

syncReduxAndRouter(history, store);

ReactDOM.render((
  <Root history={history} onEnter={authRouteResolver(store.getState)} store={store}/>
), document.querySelector('.app-root'));
