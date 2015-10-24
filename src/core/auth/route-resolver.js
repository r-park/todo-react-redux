import { routePaths } from 'config';


export function authRouteResolver(dispatch, getState) {
  return (nextState, replaceState) => {
    const { auth } = getState();
    const { pathname } = nextState.location;

    if (!auth.authenticated && pathname !== routePaths.SIGN_IN) {
      replaceState(null, routePaths.SIGN_IN);
    }
    else if (auth.authenticated && pathname !== routePaths.POST_SIGN_IN) {
      replaceState(null, routePaths.POST_SIGN_IN);
    }
  };
}
