import { firebaseAuth } from 'src/core/firebase';
import * as authActions from './actions';


export { authActions };
export * from './action-types';
export { authReducer } from './reducer';
export { getAuth, isAuthenticated } from './selectors';


export function initAuth(dispatch) {
  return new Promise((resolve, reject) => {
    const unsub = firebaseAuth.onAuthStateChanged(
      user => {
        dispatch(authActions.initAuth(user));
        unsub();
        resolve();
      },
      error => reject(error)
    );
  });
}
