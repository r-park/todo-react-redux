import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';
import reducer from './reducer';


export default (initialState) => {
  const store = applyMiddleware(
    thunk
  )(createStore)(reducer, initialState);

  if (module.hot) {
    module.hot.accept('./reducer', () => {
      store.replaceReducer(require('./reducer'));
    });
  }

  return store;
};
