import { applyMiddleware } from 'redux';


export function createMockStore(state, expectedActions, middleware, done) {
  if (!Array.isArray(expectedActions)) {
    throw new Error('ERROR # createMockStore : `expectedActions` must be an array of expected actions.');
  }

  if (typeof done !== 'undefined' && typeof done !== 'function') {
    throw new Error('ERROR # createMockStore : `done` must be undefined or a function.');
  }

  function store() {
    return {
      dispatch(action) {
        const expectedAction = expectedActions.shift();

        try {
          if (typeof expectedAction === 'function') {
            expect(expectedAction(action)).toBe(true);
          }
          else {
            expect(action).toEqual(expectedAction);
          }

          if (done && !expectedActions.length) {
            done();
          }

          return action;
        }
        catch (error) {
          done(error);
        }
      },

      getState() {
        return typeof state === 'function' ? state() : state;
      }
    };
  }

  return applyMiddleware(...middleware)(store)();
}
