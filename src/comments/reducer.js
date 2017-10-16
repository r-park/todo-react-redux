import { List, Record } from 'immutable';
import { SIGN_OUT_SUCCESS } from 'src/auth/action-types';
import { SELECT_TASK } from 'src/tasks/action-types';

import {
  CREATE_COMMENT_SUCCESS,
  LOAD_COMMENT_COMMENTS,
  REMOVE_COMMENT_SUCCESS,
  LOAD_COMMENTS_SUCCESS,
  UPDATE_COMMENT_SUCCESS,
} from './action-types';


export const CommentsState = new Record({
  deleted: null,
  selectedTask: null,
  list: new List(),
  previous: null,
  auth: null
});


export function commentsReducer(state = new CommentsState(), {payload, type}) {
  switch (type) {
    case CREATE_COMMENT_SUCCESS:
      return state.merge({
        deleted: null,
        previous: null,
        list: state.deleted && state.deleted.id === payload.id ?
              state.previous :
              state.list.unshift(payload)
      });

    case REMOVE_COMMENT_SUCCESS:
      return state.merge({
        deleted: payload,
        previous: state.list,
        list: state.list.filter(comment => comment.id !== payload.id)
      });
    
    case LOAD_COMMENTS_SUCCESS:
      return state.set('list', new List(payload.reverse()));

    case UPDATE_COMMENT_SUCCESS:
      return state.merge({
        deleted: null,
        previous: null,
        list: state.list.map(comment => {
          return comment.id === payload.id ? payload : comment;
        })
      });

    case SIGN_OUT_SUCCESS:
      return new CommentsState();
    
    case SELECT_TASK:
      return state.set('selectedTask', payload || null);

    default:
      return state;
  }
}
