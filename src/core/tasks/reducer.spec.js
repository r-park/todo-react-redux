import { SIGN_OUT_SUCCESS } from 'core/auth';

import {
  CREATE_TASK_SUCCESS,
  DELETE_TASK_SUCCESS,
  UPDATE_TASK_SUCCESS
} from './action-types';

import { tasksReducer } from './reducer';


describe('Tasks reducer', () => {
  let task1;
  let task2;

  beforeEach(() => {
    task1 = {completed: false, key: '0', title: 'task 1'};
    task2 = {completed: false, key: '1', title: 'task 2'};
  });


  it('should return the initial state when action.type is not found', () => {
    expect(tasksReducer(undefined, {})).toEqual([]);
  });


  describe('CREATE_TASK_SUCCESS', () => {
    it('should prepend new task', () => {
      let state = tasksReducer([], {
        type: CREATE_TASK_SUCCESS,
        task: task1
      });

      expect(state).toEqual([ task1 ]);

      state = tasksReducer([ task1 ], {
        type: CREATE_TASK_SUCCESS,
        task: task2
      });

      expect(state).toEqual([ task2, task1 ]);
    });
  });


  describe('DELETE_TASK_SUCCESS', () => {
    it('should remove task', () => {
      let state = tasksReducer([task1, task2], {
        type: DELETE_TASK_SUCCESS,
        task: task2
      });

      expect(state).toEqual([task1]);
    });
  });


  describe('UPDATE_TASK_SUCCESS', () => {
    it('should update task', () => {
      let changedTask2 = Object.assign({}, task2, {title: 'changed'});

      let state = tasksReducer([task1, task2], {
        type: UPDATE_TASK_SUCCESS,
        task: changedTask2
      });

      expect(state[1].title).toEqual(changedTask2.title);
    });
  });


  describe('SIGN_OUT_SUCCESS', () => {
    it('should reset state', () => {
      expect(tasksReducer([{}], {
        type: SIGN_OUT_SUCCESS
      })).toEqual([]);
    });
  });
});
