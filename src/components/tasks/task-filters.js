import classNames from 'classnames';
import React, { PropTypes } from 'react';
import { Link } from 'react-router';


export function TaskFilters({filter}) {
  return (
    <ul className="task-filters">
      <li><Link className={classNames({active: !filter})} to="/tasks">View All</Link></li>
      <li><Link activeClassName="active" to={{pathname: '/tasks', query: {filter: 'active'}}}>Active</Link></li>
      <li><Link activeClassName="active" to={{pathname: '/tasks', query: {filter: 'completed'}}}>Completed</Link></li>
    </ul>
  );
}

TaskFilters.propTypes = {
  filter: PropTypes.string
};
