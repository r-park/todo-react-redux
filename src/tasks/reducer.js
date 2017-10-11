import { List, Record } from 'immutable';
import { SIGN_OUT_SUCCESS } from 'src/auth/action-types';

import {
  CREATE_TASK_SUCCESS,
  SELECT_TASK,
  REMOVE_TASK_SUCCESS,
  FILTER_TASKS,
  LOAD_TASKS_SUCCESS,
  UPDATE_TASK_SUCCESS,
} from './action-types';


export const TasksState = new Record({
  deleted: null,
  //filter: {name:''},
  list: new List(),
  // previous: null,
  // selected: null,
  auth: null,
  created: null
});


export function tasksReducer(state = new TasksState(), {payload, type}) {
  switch (type) {
    case CREATE_TASK_SUCCESS:
      return state.merge({
        deleted: null,
        created: payload,
        list: state.deleted && state.deleted.id === payload.id ?
              state.previous :
              state.list.unshift(payload)
      });

    case REMOVE_TASK_SUCCESS:
      return state.merge({
        deleted: payload,
        created: null,
        previous: state.list,
        list: state.list.filter(task => task.id !== payload.id)
      });

    // case FILTER_TASKS:
    //   return state.set('filter', payload.filterType || {name:''});

    // case SELECT_TASK:
    //   return state.set('selected', payload || null);

    case LOAD_TASKS_SUCCESS:
      return state.set('list', new List(payload.reverse()));

    case UPDATE_TASK_SUCCESS:
      return state.merge({
        deleted: null,
        created: null,
        list: state.list.map(task => {
          return task.id === payload.id ? payload : task;
        })
      });

    case SIGN_OUT_SUCCESS:
      return new TasksState();

    default:
      return state;
  }
}
