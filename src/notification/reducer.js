import { Record } from 'immutable';
import { REMOVE_TASK_SUCCESS } from 'src/tasks';
import { DISMISS_NOTIFICATION, SHOW_ERROR } from './action-types';


export const NotificationState = new Record({
  actionLabel: '',
  display: false,
  message: ''
});


export function notificationReducer(state = new NotificationState(), action) {
  switch (action.type) {
    case REMOVE_TASK_SUCCESS:
      return state.merge({
        display: true,
        message: 'המשימה נמחקה'
      });

    case SHOW_ERROR:
      return state.merge({
        display: true,
        message: action.payload
      });
    
    case DISMISS_NOTIFICATION:
      return new NotificationState();

    default:
      return new NotificationState();
  }
}
