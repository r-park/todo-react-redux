export function getTasks(state) {
  return state.tasks;
}

export function getTaskList(state) {
  return getTasks(state).list;
}
