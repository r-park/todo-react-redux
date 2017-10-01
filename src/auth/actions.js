import firebase from 'firebase';

import { firebaseAuth } from 'src/firebase';
import {
  INIT_AUTH,
  SIGN_IN_ERROR,
  SIGN_IN_SUCCESS,
  SIGN_OUT_SUCCESS
} from './action-types';


function authenticate(provider) {
  return dispatch => {
    firebaseAuth.signInWithPopup(provider)
      .then(result => { updateUserData(result, dispatch) })
      .catch(error => dispatch(signInError(error)));
  };
}

function updateUserData(result, dispatch) {
  let { user } = result;
  debugger;
  firebase.database().ref('users/' + user.uid).set({
    name: user.displayName,
    email: user.email,
    photoURL : user.photoURL,
  });
  return dispatch(signInSuccess(result));
}



export function initAuth(user) {
  return {
    type: INIT_AUTH,
    payload: user
  };
}


export function signInError(error) {
  return {
    type: SIGN_IN_ERROR,
    payload: error
  };
}


export function signInSuccess(result) {
  return {
    type: SIGN_IN_SUCCESS,
    payload: result.user
  };
}


export function signInWithFacebook() {
  return authenticate(new firebase.auth.FacebookAuthProvider());
}


export function signInWithGoogle() {
  return authenticate(new firebase.auth.GoogleAuthProvider());
}


export function signOut() {
  return dispatch => {
    firebaseAuth.signOut()
      .then(() => dispatch(signOutSuccess()));
  };
}


export function signOutSuccess() {
  return {
    type: SIGN_OUT_SUCCESS
  };
}