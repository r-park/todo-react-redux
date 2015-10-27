import {
  INIT_AUTH,
  SIGN_IN_SUCCESS,
  SIGN_OUT_SUCCESS
} from './action-types';


function authenticate(provider) {
  return (dispatch, getState) => {
    const { firebase } = getState();

    firebase.authWithOAuthPopup(provider, (error, authData) => {
      if (error) {
        console.error('ERROR @ authWithOAuthPopup :', error); // eslint-disable-line no-console
      }
      else {
        dispatch({
          type: SIGN_IN_SUCCESS,
          authData
        });
      }
    });
  };
}


export function initAuth() {
  return (dispatch, getState) => {
    const { firebase } = getState();
    dispatch({
      type: INIT_AUTH,
      authData: firebase.getAuth()
    });
  };
}


export function signInWithGithub() {
  return authenticate('github');
}


export function signInWithGoogle() {
  return authenticate('google');
}


export function signInWithTwitter() {
  return authenticate('twitter');
}


export function signOut() {
  return (dispatch, getState) => {
    const { firebase } = getState();
    firebase.unauth();
    dispatch({
      type: SIGN_OUT_SUCCESS
    });
  };
}
