import React, { PropTypes } from 'react';
import { Provider } from 'react-redux';
import { Router } from 'react-router';
import { getRoutes } from './routes';


export default function Root({history, store}) {
  return (
    <Provider store={store}>
      <Router history={history} routes={getRoutes(store.getState)} />
    </Provider>
  );
}

Root.propTypes = {
  history: PropTypes.object.isRequired,
  store: PropTypes.object.isRequired
};
