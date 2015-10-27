import {
  SIGN_OUT_SUCCESS
} from 'core/auth';

import {
  CREATE_TASK_SUCCESS,
  DELETE_TASK_SUCCESS,
  UPDATE_TASK_SUCCESS
} from './action-types';


export function tasksReducer(state = [], action) {
  switch (action.type) {
    case CREATE_TASK_SUCCESS:
      return [ action.task, ...state ];

    case DELETE_TASK_SUCCESS:
      return state.filter(task => {
        return task.key !== action.task.key;
      });

    case UPDATE_TASK_SUCCESS:
      return state.map(task => {
        return task.key === action.task.key ? action.task : task;
      });

    case SIGN_OUT_SUCCESS:
      return [];

    default:
      return state;
  }
}
