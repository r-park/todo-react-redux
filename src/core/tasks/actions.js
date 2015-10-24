import {
  CREATE_TASK_ERROR,
  CREATE_TASK_SUCCESS,
  DELETE_TASK_ERROR,
  DELETE_TASK_SUCCESS,
  UPDATE_TASK_ERROR,
  UPDATE_TASK_SUCCESS
} from './action-types';


export function createTask(title) {
  return (dispatch, getState) => {
    const { auth, firebase } = getState();
    firebase.child(`tasks/${auth.id}`)
      .push({completed: false, title}, error => {
        if (error) {
          console.error('ERROR @ createTask :', error); // eslint-disable-line no-console
          dispatch({
            type: CREATE_TASK_ERROR,
            error
          });
        }
      });
  };
}


export function deleteTask(task) {
  return (dispatch, getState) => {
    const { auth, firebase } = getState();

    firebase.child(`tasks/${auth.id}/${task.key}`)
      .remove(error => {
        if (error) {
          console.error('ERROR @ deleteTask :', error); // eslint-disable-line no-console
          dispatch({
            type: DELETE_TASK_ERROR,
            error
          });
        }
      });
  };
}


export function updateTask(task, changes) {
  return (dispatch, getState) => {
    const { auth, firebase } = getState();

    firebase.child(`tasks/${auth.id}/${task.key}`)
      .update(changes, error => {
        if (error) {
          console.error('ERROR @ updateTask :', error); // eslint-disable-line no-console
          dispatch({
            type: UPDATE_TASK_ERROR,
            error
          });
        }
      });
  };
}


export function registerListeners() {
  return (dispatch, getState) => {
    const { auth, firebase } = getState();
    const ref = firebase.child(`tasks/${auth.id}`);

    ref.on('child_added', snapshot => {
      const task = snapshot.val();
      task.key = snapshot.key();
      dispatch({
        type: CREATE_TASK_SUCCESS,
        task
      });
    });

    ref.on('child_changed', snapshot => {
      const task = snapshot.val();
      task.key = snapshot.key();
      dispatch({
        type: UPDATE_TASK_SUCCESS,
        task
      });
    });

    ref.on('child_removed', snapshot => {
      const task = snapshot.val();
      task.key = snapshot.key();
      dispatch({
        type: DELETE_TASK_SUCCESS,
        task
      });
    });
  };
}
