import { taskList } from './task-list';

import {
  CREATE_TASK_ERROR,
  CREATE_TASK_SUCCESS,
  REMOVE_TASK_ERROR,
  REMOVE_TASK_SUCCESS,
  FILTER_TASKS,
  LOAD_TASKS_SUCCESS,
  UNDELETE_TASK_ERROR,
  UNLOAD_TASKS_SUCCESS,
  UPDATE_TASK_ERROR,
  UPDATE_TASK_SUCCESS,
  SELECT_TASK,
} from './action-types';


export function createTask(task, cb = (t)=>{console.log(t)}) {
  return dispatch => {
    taskList.push(task).then(cb)
      .catch(error => dispatch(createTaskError(error)));
  };
}

export function createTaskError(error) {
  return {
    type: CREATE_TASK_ERROR,
    payload: error
  };
}

export function createTaskSuccess(task, isLocallyCreated) {
  return {
    type: CREATE_TASK_SUCCESS,
    payload: task
  };
}

export function assignTask(task, assignee) {
  return dispatch => {
    taskList.update(task.id, {
      assignee: {
        email: assignee.email,
        id: assignee.id,
        name: assignee.name,
        photoURL: assignee.photoURL
      }
    })
      .catch(error => dispatch(updateTaskError(error)));
  };
}

export function removeTask(task) {
  return dispatch => {
    taskList.remove(task.id)
      .catch(error => dispatch(removeTaskError(error)));
  };
}

export function removeTaskError(error) {
  return {
    type: REMOVE_TASK_ERROR,
    payload: error
  };
}

export function removeTaskSuccess(task) {
  return {
    type: REMOVE_TASK_SUCCESS,
    payload: task
  };
}

export function undeleteTaskError(error) {
  return {
    type: UNDELETE_TASK_ERROR,
    payload: error
  };
}

export function updateTaskError(error) {
  return {
    type: UPDATE_TASK_ERROR,
    payload: error
  };
}

export function updateTask(task, changes) {
  return dispatch => {
    taskList.update(task.id, changes)
      .catch(error => dispatch(updateTaskError(error)));
  };
}

export function updateTaskSuccess(task) {
  return {
    type: UPDATE_TASK_SUCCESS,
    payload: task
  };
}

export function loadTasksSuccess(tasks) {
  return {
    type: LOAD_TASKS_SUCCESS,
    payload: tasks
  };
}

export function filterTasks(filterType) {
  return {
    type: FILTER_TASKS,
    payload: {filterType}
  };
}

export function loadTasks() {
  return (dispatch, getState) => {
    const { auth } = getState();
    taskList.path = `tasks`;
    taskList.orderBy = {
      name: 'created',
      direction: 'asc'
    }
    taskList.subscribe(dispatch);
  };
}

export function unloadTasks() {
  taskList.unsubscribe();
  return {
    type: UNLOAD_TASKS_SUCCESS
  };
}

export function selectTask(task) {
  return {
    type: SELECT_TASK,
    payload: task
  };
}