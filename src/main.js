import './styles/styles.scss';

import React from 'react';
import ReactDOM from 'react-dom';
import { useRouterHistory } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';
import { createHistory } from 'history';

import { Root } from './components/root';
import { authRouteResolver, initAuth } from './core/auth';
import configureStore from './core/store';


const history = useRouterHistory(createHistory)({basename: '/'});
const store = configureStore();
const syncedHistory = syncHistoryWithStore(history, store);


initAuth(store.dispatch)
  .then(() => {
    ReactDOM.render((
      <Root history={syncedHistory} onEnter={authRouteResolver(store.getState)} store={store} />
    ), document.querySelector('.app-root'));
  })
  .catch(error => console.error(error)); // eslint-disable-line no-console
