import { List } from 'immutable';
import { CommentsState } from './reducer';
import { getVisibleComments } from './selectors';
import { Comment } from './comment';


describe('Comments selectors', () => {
  let comments;

  beforeEach(() => {
    comments = new CommentsState({
      list: new List([
        new Comment({completed: false, title: 'comment-1'}),
        new Comment({completed: true, title: 'comment-2'})
      ])
    });
  });

  describe('getVisibleComments()', () => {
    it('should return list of all comments', () => {
      let commentList = getVisibleComments({comments});
      expect(commentList.size).toBe(2);
    });

  });
});
