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


//=====================================
//  MEMOIZED SELECTORS
//-------------------------------------

export const getVisibleTasks = createSelector(
  getTaskList,
  getTaskFilter,
  (tasks, filter) => {
    switch (filter) {
      case 'active':
        return tasks.filter(task => !task.completed);

      case 'completed':
        return tasks.filter(task => task.completed);
      
      case 'unassigned':
        return tasks.filter(task => !task.assignee);

      default:
        return tasks;
    }
  }
);
