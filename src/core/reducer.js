import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

// Reducers
import { authReducer } from './auth';
import { firebaseReducer } from './firebase';
import { notificationReducer } from './notification';
import { tasksReducer } from './tasks';


export default combineReducers({
  auth: authReducer,
  firebase: firebaseReducer,
  notification: notificationReducer,
  routing: routerReducer,
  tasks: tasksReducer
});
