import {
  INIT_AUTH,
  SIGN_IN_SUCCESS,
  SIGN_OUT_SUCCESS
} from './action-types';


export const initialState = {
  authenticated: false,
  id: null
};


export function authReducer(state = initialState, action) {
  const { authData } = action;

  switch (action.type) {
    case INIT_AUTH:
      return {
        authenticated: authData !== null,
        id: authData ? authData.uid : null
      };

    case SIGN_IN_SUCCESS:
      return {
        authenticated: true,
        id: authData.uid
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
