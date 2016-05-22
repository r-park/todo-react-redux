import { firebaseAuth } from 'src/core/firebase';
import * as authActions from './actions';


export { authActions };
export * from './action-types';
export * from './reducer';
export * from './route-resolver';


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
