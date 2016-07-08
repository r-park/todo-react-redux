import { isAuthenticated } from 'src/core/auth';
import App from './app';
import SignIn from './pages/sign-in';
import Tasks from './pages/tasks';


export const paths = {
  ROOT: '/',
  SIGN_IN: '/sign-in',
  TASKS: '/'
};


const requireAuth = getState => {
  return (nextState, replace) => {
    if (!isAuthenticated(getState())) {
      replace(paths.SIGN_IN);
    }
  };
};

const requireUnauth = getState => {
  return (nextState, replace) => {
    if (isAuthenticated(getState())) {
      replace(paths.TASKS);
    }
  };
};


export const getRoutes = getState => {
  return {
    path: paths.ROOT,
    component: App,
    childRoutes: [
      {
        indexRoute: {
          component: Tasks,
          onEnter: requireAuth(getState)
        }
      },
      {
        path: paths.SIGN_IN,
        component: SignIn,
        onEnter: requireUnauth(getState)
      }
    ]
  };
};
