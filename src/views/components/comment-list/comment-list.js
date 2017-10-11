import React, { Component }  from 'react';
import { List } from 'immutable';
import PropTypes from 'prop-types';
import CommentItem from '../comment-item/comment-item';
import AddComment from '../add-comment/add-comment';
import './comment-list.css';

class CommentList extends Component {
  static propTypes = {
    comments: PropTypes.instanceOf(List).isRequired,
    task: PropTypes.object.isRequired,
    auth: PropTypes.object.isRequired,
    createComment: PropTypes.func.isRequired,
  };

  render() {
    let commentItems = this.props.comments.map((comment, index) => {
      return (
        <CommentItem
          key={index}
          commentNumber={index}
          comment={comment}
        />
      );
    });
    const isAnyComments = this.props.comments && this.props.comments.size > 0;
    if (!isAnyComments) {
      return (
        <div>
          { this.renderAddComment() }
        </div>
      );
    }
    return (
      <div className="comment-list">
        { commentItems }
        { this.renderAddComment() }
      </div>
    );
  }

  renderAddComment() {
    return (
      <AddComment
      task={ this.props.task }
      createComment={this.props.createComment }
      auth={this.props.auth}
      key='addComment' />)
  }

}

export default CommentList;
