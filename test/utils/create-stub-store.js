import { applyMiddleware } from 'redux';


export function createStubStore(state, middleware) {
  function store() {
    return {
      dispatch() {},
      getState() {
        return typeof state === 'function' ? state() : state;
      }
    };
  }

  return applyMiddleware(...middleware)(store)();
}
