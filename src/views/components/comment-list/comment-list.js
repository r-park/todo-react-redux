import React, { Component }  from 'react';
import { List } from 'immutable';
import PropTypes from 'prop-types';
import CommentItem from '../comment-item/comment-item';

import './comment-list.css';

class CommentList extends Component {
  static propTypes = {
    comments: PropTypes.instanceOf(List).isRequired,
    task: PropTypes.object,
  };
  
  componentWillUnmount() {
    this.props.unloadComments();
  }

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
        </div>
      );
    }
    return (
      <div className="comment-list">
        { commentItems }
      </div>
    );
  }

}

export default CommentList;
