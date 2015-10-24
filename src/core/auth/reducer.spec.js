import {
  INIT_AUTH,
  SIGN_IN_SUCCESS,
  SIGN_OUT_SUCCESS
} from './action-types';

import {
  authReducer,
  initialState
} from './reducer';


describe('Auth reducer', () => {
  it('should return the initial state when action.type is not found', () => {
    expect(authReducer(undefined, {})).toEqual(initialState);
  });


  describe('INIT_AUTH', () => {
    it('should return state as `authenticated`', () => {
      let state = authReducer(initialState, {
        type: INIT_AUTH,
        authData: {uid: '123'}
      });

      expect(state).toEqual({
        authenticated: true,
        id: '123'
      });
    });

    it('should return state as `unauthenticated` when `authData` is `null`', () => {
      let state = authReducer(initialState, {
        type: INIT_AUTH,
        authData: null
      });

      expect(state).toEqual(initialState);
    });
  });


  describe('SIGN_IN_SUCCESS', () => {
    it('should return state as `authenticated`', () => {
      let state = authReducer(initialState, {
        type: SIGN_IN_SUCCESS,
        authData: {uid: '123'}
      });

      expect(state).toEqual({
        authenticated: true,
        id: '123'
      });
    });
  });


  describe('SIGN_OUT_SUCCESS', () => {
    it('should return state as `unauthenticated`', () => {
      let state = authReducer(initialState, {
        type: SIGN_OUT_SUCCESS,
        authData: null
      });

      expect(state).toEqual(initialState);
    });
  });
});
