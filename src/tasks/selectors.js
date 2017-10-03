import { createSelector } from 'reselect';


export function getTasks(state) {
  return state.tasks;
}

export function getTaskList(state) {
  return getTasks(state).list;
}

export function getTaskFilter(state) {
  return getTasks(state).filter;
}

export function getDeletedTask(state) {
  return getTasks(state).deleted;
}

export function getSelectedTask(state) {
  return getTasks(state).selected;
}

export function getAuth(state) {
  return state.auth;
}


//=====================================
//  MEMOIZED SELECTORS
//-------------------------------------

export const getVisibleTasks = createSelector(
  getTaskList,
  getTaskFilter,
  getAuth,
  (tasks, filter, auth) => {
    switch (filter.name) {

      case 'completed':
        return tasks.filter(task => task.completed);
      
      case 'unassigned':
        return tasks.filter(task => !task.assignee);
      
      case 'label':
        return tasks.filter(task => {
          return task.label && task.label[filter.text];
        });
      
      case 'mine':
        return tasks.filter(task => 
        {
          return (task.assignee && (task.assignee.id === auth.id))
        });

      default:
        return tasks;
    }
  }
);
