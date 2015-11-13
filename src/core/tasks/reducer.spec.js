import assign from 'object-assign';
import { SIGN_OUT_SUCCESS } from 'core/auth';

import {
  CREATE_TASK_SUCCESS,
  DELETE_TASK_SUCCESS,
  UPDATE_TASK_SUCCESS
} from './action-types';

import { initialState, tasksReducer } from './reducer';


describe('Tasks reducer', () => {
  let task1;
  let task2;

  beforeEach(() => {
    task1 = {completed: false, key: '0', title: 'task 1'};
    task2 = {completed: false, key: '1', title: 'task 2'};
  });


  function getInitialState() {
    return assign({}, initialState);
  }


  it('should return the initial state when action.type is not found', () => {
    expect(tasksReducer(undefined, {})).toEqual(getInitialState());
  });


  describe('CREATE_TASK_SUCCESS', () => {
    it('should prepend new task to list', () => {
      let state = getInitialState();
      state.list = [ task1 ];

      let nextState = tasksReducer(state, {
        type: CREATE_TASK_SUCCESS,
        payload: task2
      });

      expect(nextState).toEqual({
        deleted: null,
        list: [ task2, task1 ],
        previous: []
      });
    });
  });


  describe('DELETE_TASK_SUCCESS', () => {
    it('should remove task from list', () => {
      let state = getInitialState();
      state.list = [task1, task2];

      let nextState = tasksReducer(state, {
        type: DELETE_TASK_SUCCESS,
        payload: task2
      });

      expect(nextState).toEqual({
        deleted: task2,
        list: [task1],
        previous: [task1, task2]
      });
    });
  });


  describe('UPDATE_TASK_SUCCESS', () => {
    it('should update task', () => {
      let state = getInitialState();
      state.list = [task1, task2];

      let changedTask2 = assign({}, task2, {title: 'changed'});

      let nextState = tasksReducer(state, {
        type: UPDATE_TASK_SUCCESS,
        payload: changedTask2
      });

      expect(nextState).toEqual({
        deleted: null,
        list: [task1, changedTask2],
        previous: []
      });
    });
  });


  describe('SIGN_OUT_SUCCESS', () => {
    it('should reset state', () => {
      let state = {
        deleted: true,
        list: [{}],
        previous: [{}, {}]
      };

      expect(tasksReducer(state, {
        type: SIGN_OUT_SUCCESS
      })).toEqual(getInitialState());
    });
  });
});
