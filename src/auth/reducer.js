import { Record } from 'immutable';
import { INIT_AUTH, SIGN_IN_SUCCESS, SIGN_OUT_SUCCESS } from './action-types';


export const AuthState = new Record({
  authenticated: false,
  id: null,
  name: null,
  email: null,
  photoURL: null,
  phoneNumber: null,
  role: 'user'
});


export function authReducer(state = new AuthState(), {payload, type}) {
  switch (type) {
    case INIT_AUTH:
    case SIGN_IN_SUCCESS:
      return state.merge({
        authenticated: !!payload,
        id: payload ? payload.uid : null,
        name: payload? payload.displayName : null,
        email: payload? payload.email : null,
        photoURL: payload? payload.photoURL : null,
        phoneNumber: payload? payload.phoneNumber : null,
        role: payload? payload.role : null
      });

    case SIGN_OUT_SUCCESS:
      return new AuthState();

    default:
      return state;
  }
}
