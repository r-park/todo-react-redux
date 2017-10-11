import { createSelector } from 'reselect';

const filters = { 
  user: (auth, value) =>  ({type: "user", uid: value}),
  complete: (auth, value) => ({type: "complete"}),
  unassigned: (auth, value) => ({type: "unassigned"}),
  label: (auth, value) => ({type: "label", text: value}),
  mine: (auth, value) => ({type: "user", uid: auth.id})
}

export function buildFilter(auth, type, value) {
  return filters[type](auth, value); 
}

//=====================================
//  MEMOIZED SELECTORS
//-------------------------------------
export const taskFilters = {
  complete: (tasks, filter) => {
    return tasks.filter(task => task.completed)
  },

  unassigned: (tasks, filter) => {
    return tasks.filter(task => !task.assignee);
  },
  
  label: (tasks, filter) => {
    return tasks.filter(task => {
      return task.label && task.label[filter.text];
    });
  },

  user: (tasks, filter) => {
    const auth = filter.uid;
    return tasks.filter(task => 
      {
        return ((task.assignee && (task.assignee.id === auth)) ||
          (task.creator && task.creator.id === auth));
      });
  }
}
/*
export const getVisibleTasks = createSelector(
  getTaskList,
  getTaskFilter,
  getAuth,
  (tasks, filter, auth) => {
      if (taskFilters[filter.name] != null)
        return taskFilters[filter.name](tasks, filter, auth)

      return tasks;
    }
); */
