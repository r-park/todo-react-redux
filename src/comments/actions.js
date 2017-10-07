import { commentList } from './comment-list';

import {
  CREATE_COMMENT_ERROR,
  CREATE_COMMENT_SUCCESS,
  REMOVE_COMMENT_ERROR,
  REMOVE_COMMENT_SUCCESS,
  LOAD_COMMENTS_SUCCESS,
  UNLOAD_COMMENTS_SUCCESS,
  UPDATE_COMMENT_ERROR,
  UPDATE_COMMENT_SUCCESS,
} from './action-types';


export function createComment(comment) {
  return dispatch => {
    commentList.push(comment)
      .catch(error => dispatch(createCommentError(error)));
  };
}

export function createCommentError(error) {
  return {
    type: CREATE_COMMENT_ERROR,
    payload: error
  };
}

export function createCommentSuccess(comment) {
  return {
    type: CREATE_COMMENT_SUCCESS,
    payload: comment
  };
}

export function removeComment(comment) {
  return dispatch => {
    commentList.remove(comment.id)
      .catch(error => dispatch(removeCommentError(error)));
  };
}

export function removeCommentError(error) {
  return {
    type: REMOVE_COMMENT_ERROR,
    payload: error
  };
}

export function removeCommentSuccess(comment) {
  return {
    type: REMOVE_COMMENT_SUCCESS,
    payload: comment
  };
}

export function updateCommentError(error) {
  return {
    type: UPDATE_COMMENT_ERROR,
    payload: error
  };
}

export function updateComment(comment, changes) {
  return dispatch => {
    commentList.update(comment.id, changes)
      .catch(error => dispatch(updateCommentError(error)));
  };
}

export function updateCommentSuccess(comment) {
  return {
    type: UPDATE_COMMENT_SUCCESS,
    payload: comment
  };
}

export function loadCommentsSuccess(comments) {
  return {
    type: LOAD_COMMENTS_SUCCESS,
    payload: comments
  };
}

export function loadComments() {
  return (dispatch, getState) => {
    const { selectedTask } = getState().comments;
    commentList.path = `comments`;
    if(selectedTask) {
      commentList.query = ['taskId','==', selectedTask.id];
    }else {
      commentList.query = null;
    }

    commentList.subscribe(dispatch);
  };
}

export function unloadComments() {
  commentList.unsubscribe();
  return {
    type: UNLOAD_COMMENTS_SUCCESS
  };
}
