import {
  POST_SIGN_IN_PATH,
  SIGN_IN_PATH
} from 'config';


export function authRouteResolver(getState) {
  return (nextState, replaceState) => {
    const { auth } = getState();
    const { pathname } = nextState.location;

    if (!auth.authenticated && pathname !== SIGN_IN_PATH) {
      replaceState(null, SIGN_IN_PATH);
    }
    else if (auth.authenticated && pathname !== POST_SIGN_IN_PATH) {
      replaceState(null, POST_SIGN_IN_PATH);
    }
  };
}
