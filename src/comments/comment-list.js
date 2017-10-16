import { FirebaseList } from 'src/firebase';
import * as commentActions from './actions';
import { Comment } from './comment';


export const commentList = new FirebaseList({
  onAdd: commentActions.createCommentSuccess,
  onChange: commentActions.updateCommentSuccess,
  onLoad: commentActions.loadCommentsSuccess,
  onRemove: commentActions.removeCommentSuccess
}, Comment);
