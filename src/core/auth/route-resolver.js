import {
  POST_SIGN_IN_PATH,
  SIGN_IN_PATH
} from 'config';


export function authRouteResolver(getState) {
  return (nextState, replace) => {
    const { auth } = getState();
    const { pathname } = nextState.location;

    var g_s = getState();

    Object.keys(g_s).map(function(objectKey, index) {
        var value = g_s[objectKey];
        console.log(value);
    });

    console.dir('store.getState():' + getState());
    
    console.log('store.getState():' + JSON.parse(JSON.stringify(getState())));

    if (!auth.authenticated && `/${pathname}` !== SIGN_IN_PATH) {
      replace({pathname: SIGN_IN_PATH});
    }
    else if (auth.authenticated && `/${pathname}` !== POST_SIGN_IN_PATH) {
      replace({pathname: POST_SIGN_IN_PATH});
    }
  };
}
