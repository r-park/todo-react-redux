/* eslint-disable no-undefined */
import assign from 'object-assign';

import { DELETE_TASK_SUCCESS } from 'core/tasks';

import {
  DISMISS_NOTIFICATION
} from './action-types';

import { initialState, notificationReducer } from './reducer';


describe('Notification reducer', () => {
  function getInitialState() {
    return assign({}, initialState);
  }


  it('should return the initial state when action.type is not found', () => {
    expect(notificationReducer(undefined, {})).toEqual(getInitialState());
  });


  describe('DELETE_TASK_SUCCESS', () => {
    it('should return correct state', () => {
      let nextState = notificationReducer(getInitialState(), {
        type: DELETE_TASK_SUCCESS,
        task: {}
      });

      expect(nextState).toEqual({
        actionLabel: 'Undo',
        display: true,
        message: 'Task deleted'
      });
    });
  });


  describe('DISMISS_NOTIFICATION', () => {
    it('should return correct state', () => {
      let nextState = notificationReducer(getInitialState(), {
        type: DISMISS_NOTIFICATION
      });

      expect(nextState).toEqual(getInitialState());
    });
  });
});
