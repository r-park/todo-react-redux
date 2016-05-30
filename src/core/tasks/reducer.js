import {
  SIGN_OUT_SUCCESS
} from 'src/core/auth';

import {
  CREATE_TASK_SUCCESS,
  DELETE_TASK_SUCCESS,
  UPDATE_TASK_SUCCESS,
  TASKS_LISTENERS_REGISTERED
} from './action-types';


export const initialState = {
  deleted: null,
  list: [],
  listening: false,
  previous: []
};


export function tasksReducer(state = initialState, action) {
  switch (action.type) {
    case CREATE_TASK_SUCCESS:
      return Object.assign({}, state, {
        deleted: null,
        list: (state.deleted && state.deleted.key === action.payload.key) ?
          [ ...state.previous ] :
          [ action.payload, ...state.list ],
        previous: []
      });

    case DELETE_TASK_SUCCESS:
      return Object.assign({}, state, {
        deleted: action.payload,
        list: state.list.filter(task => {
          return task.key !== action.payload.key;
        }),
        previous: [ ...state.list ]
      });

    case UPDATE_TASK_SUCCESS:
      return Object.assign({}, state, {
        deleted: null,
        list: state.list.map(task => {
          return task.key === action.payload.key ? action.payload : task;
        }),
        previous: []
      });

    case SIGN_OUT_SUCCESS:
      return Object.assign({}, state, {
        deleted: null,
        list: [],
        listening: false,
        previous: []
      });

    case TASKS_LISTENERS_REGISTERED:
      return Object.assign({}, state, {listening: true});

    default:
      return state;
  }
}
