import './styles/styles.scss';

import React from 'react';
import ReactDOM from 'react-dom';
import { useRouterHistory } from 'react-router';
import Firebase from 'firebase';
import { createHistory } from 'history';

import { Root } from './components/root';
import { authActions, authRouteResolver } from './core/auth';
import configureStore from './core/store';
import { FIREBASE_URL } from './config';


const history = useRouterHistory(createHistory)({basename: '/'});

const store = configureStore({
  firebase: new Firebase(FIREBASE_URL)
});

store.dispatch(authActions.initAuth());


ReactDOM.render((
  <Root history={history} onEnter={authRouteResolver(store.getState)} store={store} />
), document.querySelector('.app-root'));
