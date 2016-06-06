import 'babel-polyfill';
import './styles/styles.scss';

import React from 'react';
import ReactDOM from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import { browserHistory } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';

import { authRouteResolver, initAuth } from './core/auth';
import configureStore from './core/store';
import Root from './components/root';


const store = configureStore();
const syncedHistory = syncHistoryWithStore(browserHistory, store);
const onEnter = authRouteResolver(store.getState);
const rootElement = document.getElementById('root');


function render(Root) {
  ReactDOM.render(
    <AppContainer>
      <Root
        history={syncedHistory}
        onEnter={onEnter}
        store={store}
      />
    </AppContainer>,
    rootElement
  );
}

if (module.hot) {
  module.hot.accept('./components/root', () => {
    render(require('./components/root').default);
  });
}

initAuth(store.dispatch)
  .then(() => render(Root))
  .catch(error => console.error(error)); // eslint-disable-line no-console
