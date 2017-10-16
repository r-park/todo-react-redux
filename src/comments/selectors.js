import { createSelector } from 'reselect';


export function getComments(state) {
  return state.comments;
}

export function getCommentList(state) {
  return getComments(state).list;
}

export function getAuth(state) {
  return state.auth;
}


//=====================================
//  MEMOIZED SELECTORS
//-------------------------------------

export const getVisibleComments = createSelector(
  getCommentList,
  (comments) => {
    return comments;
  }
);
