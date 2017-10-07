import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

import './comments.css';


const Comments = ({ comments, task }) => {
  return (
    <div>
      { comments.length }
      <h1>{ comments && comments.length > 0 ? comments[0].body: '' }</h1>
    </div>
  );
};

Comments.propTypes = {
  comments: PropTypes.object,
  task: PropTypes.object,
};


export default Comments;
