export function getAuth(state) {
  return state.auth;
}

export function getAuthenticated(state) {
  return getAuth(state).authenticated;
}
