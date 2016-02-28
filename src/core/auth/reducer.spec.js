import moment from 'moment';

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
  function future() {
    return moment().add(1, 'd').unix();
  }

  function past() {
    return moment().subtract(1, 'd').unix();
  }

  function present() {
    return Date.now();
  }


  it('should return the initial state when action.type is not found', () => {
    expect(authReducer(undefined, {})).toEqual(initialState);
  });


  describe('INIT_AUTH', () => {
    it('should return state as `authenticated` if token has NOT expired', () => {
      let state = authReducer(initialState, {
        type: INIT_AUTH,
        payload: {expires: future(), uid: '123'},
        meta: {timestamp: present()}
      });

      expect(state).toEqual({
        authenticated: true,
        id: '123'
      });
    });

    it('should return state as `unauthenticated` if token has expired', () => {
      let state = authReducer(initialState, {
        type: INIT_AUTH,
        payload: {expires: past(), uid: '123'},
        meta: {timestamp: present()}
      });

      expect(state).toEqual(initialState);
    });

    it('should return state as `unauthenticated` when `authData` is `null`', () => {
      let state = authReducer(initialState, {
        type: INIT_AUTH,
        payload: null,
        meta: {timestamp: present()}
      });

      expect(state).toEqual(initialState);
    });
  });


  describe('SIGN_IN_SUCCESS', () => {
    it('should return state as `authenticated`', () => {
      let state = authReducer(initialState, {
        type: SIGN_IN_SUCCESS,
        payload: {uid: '123'},
        meta: {timestamp: present()}
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
        payload: null,
        meta: {timestamp: present()}
      });

      expect(state).toEqual(initialState);
    });
  });
});
