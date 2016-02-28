import 'styles/styles.scss';

import Firebase from 'firebase';
import React from 'react';
import ReactDOM from 'react-dom';
import { browserHistory } from 'react-router';

import { FIREBASE_URL } from 'config';
import { authActions, authRouteResolver } from 'core/auth';
import { Root } from 'components/root';
import createStore from './store';


const store = createStore({
  firebase: new Firebase(FIREBASE_URL)
});

store.dispatch(authActions.initAuth());


ReactDOM.render((
  <Root history={browserHistory} onEnter={authRouteResolver(store.getState)} store={store}/>
), document.querySelector('.app-root'));
