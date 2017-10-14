import React, { Component }  from 'react';
import { List } from 'immutable';
import PropTypes from 'prop-types';
import CommentItem from '../comment-item/comment-item';
import './comment-list.css';

class CommentList extends Component {
  static propTypes = {
    comments: PropTypes.instanceOf(List).isRequired,
    task: PropTypes.object.isRequired,
    auth: PropTypes.object.isRequired
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
    
    return (
      <div className='comment-list'>
        { commentItems }
      </div>
    );
  };
}

export default CommentList;
