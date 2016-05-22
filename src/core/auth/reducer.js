/* eslint-disable no-case-declarations */
import { INIT_AUTH, SIGN_IN_SUCCESS, SIGN_OUT_SUCCESS } from './action-types';


export const initialState = {
  authenticated: false,
  id: null
};


export function authReducer(state = initialState, {payload, type}) {
  switch (type) {
    case INIT_AUTH:
      return {
        authenticated: !!payload,
        id: payload ? payload.uid : null
      };

    case SIGN_IN_SUCCESS:
      return {
        authenticated: true,
        id: payload.uid
      };

    case SIGN_OUT_SUCCESS:
      return {
        authenticated: false,
        id: null
      };

    default:
      return state;
  }
}
