import { List } from 'immutable';
import { SIGN_OUT_SUCCESS } from 'src/core/auth';

import {
  CREATE_TASK_SUCCESS,
  DELETE_TASK_SUCCESS,
  UPDATE_TASK_SUCCESS
} from './action-types';

import { tasksReducer, TasksState } from './reducer';
import { Task } from './task';


describe('Tasks reducer', () => {
  let task1;
  let task2;

  beforeEach(() => {
    task1 = new Task({completed: false, key: '0', title: 'task 1'});
    task2 = new Task({completed: false, key: '1', title: 'task 2'});
  });


  describe('CREATE_TASK_SUCCESS', () => {
    it('should prepend new task to list', () => {
      let state = new TasksState({list: new List([task1])});

      let nextState = tasksReducer(state, {
        type: CREATE_TASK_SUCCESS,
        payload: task2
      });

      expect(nextState.list.get(0)).toBe(task2);
      expect(nextState.list.get(1)).toBe(task1);
    });
  });


  describe('DELETE_TASK_SUCCESS', () => {
    it('should remove task from list', () => {
      let state = new TasksState({list: new List([task1, task2])});

      let nextState = tasksReducer(state, {
        type: DELETE_TASK_SUCCESS,
        payload: task2
      });

      expect(nextState.deleted).toBe(task2);
      expect(nextState.list.size).toBe(1);
      expect(nextState.list.get(0)).toBe(task1);
      expect(nextState.previous).toBe(state.list);
    });
  });


  describe('UPDATE_TASK_SUCCESS', () => {
    it('should update task', () => {
      let state = new TasksState({list: new List([task1, task2])});
      let changedTask = task2.set('title', 'changed');

      let nextState = tasksReducer(state, {
        type: UPDATE_TASK_SUCCESS,
        payload: changedTask
      });

      expect(nextState.list.get(0)).toBe(task1);
      expect(nextState.list.get(1)).toBe(changedTask);
    });
  });


  describe('SIGN_OUT_SUCCESS', () => {
    it('should reset state', () => {
      let state = new TasksState({
        delete: task1,
        list: new List([task1, task2]),
        previous: new List()
      });

      let nextState = tasksReducer(state, {
        type: SIGN_OUT_SUCCESS
      });

      expect(nextState.deleted).toBe(null);
      expect(nextState.list.size).toBe(0);
      expect(nextState.previous).toBe(null);
    });
  });
});
