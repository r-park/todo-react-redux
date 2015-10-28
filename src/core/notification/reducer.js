import {
  DELETE_TASK_SUCCESS
} from 'core/tasks';

import {
  DISMISS_NOTIFICATION
} from './action-types';


export const initialState = {
  actionLabel: '',
  display: false,
  message: ''
};


export function notificationReducer(state = initialState, action) {
  switch (action.type) {
    case DELETE_TASK_SUCCESS:
      return {
        actionLabel: 'Undo',
        display: true,
        message: 'Task deleted'
      };

    case DISMISS_NOTIFICATION:
      return {
        actionLabel: '',
        display: false,
        message: ''
      };

    default:
      return {
        actionLabel: '',
        display: false,
        message: ''
      };
  }
}
