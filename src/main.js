import Firebase from 'firebase';
import createBrowserHistory from 'history/lib/createBrowserHistory';
import React from 'react';
import ReactDOM from 'react-dom';
import { applyMiddleware, combineReducers, compose, createStore } from 'redux';
import { routeReducer, syncReduxAndRouter } from 'redux-simple-router';
import thunk from 'redux-thunk';

// Config
import { FIREBASE_URL } from 'config';

// Modules
import { authActions, authReducer, authRouteResolver } from 'modules/auth';
import { firebaseReducer } from 'modules/firebase';
import { notificationReducer } from 'modules/notification';
import { tasksReducer } from 'modules/tasks';

// Components
import { Root } from 'components/root';


const history = createBrowserHistory();


const reducer = combineReducers({
  auth: authReducer,
  firebase: firebaseReducer,
  notification: notificationReducer,
  routing: routeReducer,
  tasks: tasksReducer
});


const store = compose(
  applyMiddleware(thunk)
)(createStore)(reducer, {
  firebase: new Firebase(FIREBASE_URL)
});


store.dispatch(authActions.initAuth());

syncReduxAndRouter(history, store);


ReactDOM.render((
  <Root history={history} onEnter={authRouteResolver(store.getState)} store={store}/>
), document.querySelector('.app-root'));
