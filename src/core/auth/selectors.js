export function getAuth(state) {
  return state.auth;
}

export function isAuthenticated(state) {
  return getAuth(state).authenticated;
}
