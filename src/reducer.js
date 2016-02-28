import { combineReducers } from 'redux';
import { routeReducer } from 'react-router-redux';

// Reducers
import { authReducer } from 'core/auth';
import { firebaseReducer } from 'core/firebase';
import { notificationReducer } from 'core/notification';
import { tasksReducer } from 'core/tasks';


export default combineReducers({
  auth: authReducer,
  firebase: firebaseReducer,
  notification: notificationReducer,
  routing: routeReducer,
  tasks: tasksReducer
});
