import Firebase from 'firebase';
import createBrowserHistory from 'history/lib/createBrowserHistory';
import React from 'react';
import ReactDOM from 'react-dom';
import { applyMiddleware, combineReducers, compose, createStore } from 'redux';
import { reduxReactRouter, routerStateReducer } from 'redux-router';
import thunk from 'redux-thunk';

// Config
import { FIREBASE_URL } from 'config';

// Core
import { authActions, authReducer, authRouteResolver } from 'core/auth';
import { firebaseReducer } from 'core/firebase';
import { notificationReducer } from 'core/notification';
import { tasksReducer } from 'core/tasks';

// Components
import { Root } from 'components/root';


const reducer = combineReducers({
  auth: authReducer,
  firebase: firebaseReducer,
  notification: notificationReducer,
  router: routerStateReducer,
  tasks: tasksReducer
});


const store = compose(
  applyMiddleware(thunk),
  reduxReactRouter({createHistory: createBrowserHistory})
)(createStore)(reducer, {
  firebase: new Firebase(FIREBASE_URL)
});


store.dispatch(authActions.initAuth());


ReactDOM.render((
  <Root onEnter={authRouteResolver(store.dispatch, store.getState)} store={store}/>
), document.querySelector('.app-root'));
