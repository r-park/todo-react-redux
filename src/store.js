import { applyMiddleware, compose, createStore } from 'redux';
import thunk from 'redux-thunk';
import reducer from './reducer';


export default (initialState = {}) => {
  const enhancer = compose(applyMiddleware(thunk));
  const store = createStore(reducer, initialState, enhancer);

  if (module.hot) {
    module.hot.accept('./reducer', () => {
      store.replaceReducer(require('./reducer').default);
    });
  }

  return store;
};
