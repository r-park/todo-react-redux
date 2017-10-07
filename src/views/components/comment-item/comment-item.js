import React, { Component } from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

import './comment-item.css';
import Img from 'react-image';

export class CommentItem extends Component {
  constructor() {
    super(...arguments);
    this.state = {};
  }

  render() {
    const { comment } = this.props;
    
    return (
      <div>
        <div className="cell">
          {this.renderHeader(comment)}
        </div>

        <div className="cell">
          {this.renderBody(comment)}
        </div>
      </div>
    );
  }

  renderHeader(comment) {
    if (!comment.creator) return;
    const { creator } = comment;
    const avatar = creator.photoURL ? <Img className='avatar' src={creator.photoURL} alt={comment.creator.name}/> : '';
    return (
      <div className='comment-item-creator' data-tip={creator.name}>
        <span>{ creator.name }</span>
      </div>
    );
  }

  renderBody(comment) {
    return (
      <div>
        {comment.body}
      </div>
    );
  }

}

CommentItem.propTypes = {
  comment: PropTypes.object.isRequired,
};


export default CommentItem;
