import classNames from 'classnames';
import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';


export class TaskFilters extends Component {
  static propTypes = {
    filter: PropTypes.string
  };

  render() {
    const { filter } = this.props;

    return (
      <ul className="task-filters">
        <li><Link className={classNames({active: !filter})} to="/tasks">View All</Link></li>
        <li><Link activeClassName="active" to="/tasks" query={{filter: 'active'}}>Active</Link></li>
        <li><Link activeClassName="active" to="/tasks" query={{filter: 'completed'}}>Completed</Link></li>
      </ul>
    );
  }
}
