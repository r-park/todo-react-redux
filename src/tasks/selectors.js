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

export const taskFilters = {
  complete: (tasks, filter, auth) => {
    return tasks.filter(task => task.completed)
  },

  unassigned: (tasks, filter, auth) => {
    return tasks.filter(task => !task.assignee);
  },
  
  label: (tasks, filter, auth) => {
    return tasks.filter(task => {
      return task.label && task.label[filter.text];
    });
  },

  mine: (tasks, filter, auth) => {
    return tasks.filter(task => 
      {
        return ((task.assignee && (task.assignee.id === auth.id)) ||
          (task.creator && task.creator.id === auth.id));
      });
  }
}

export const getVisibleTasks = createSelector(
  getTaskList,
  getTaskFilter,
  getAuth,
  (tasks, filter, auth) => {
      if (taskFilters[filter.name] != null)
        return taskFilters[filter.name](tasks, filter, auth)

      return tasks;
    }
);
