import React, { Component } from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import Button from '../button';
import Icon from '../icon';

import './task-item.css';


export class TaskItem extends Component {
  constructor() {
    super(...arguments);

    this.state = {};

    this.select = this.select.bind(this);
  }

  select() {
    this.props.selectTask(this.props.task);
  }
  
  renderTitle(task) {
    return (
      <div className="task-item__title">
        {task.title}
      </div>
    );
  }

  renderAssignee(task) {
    return (
      <div>
        {task.assignee ? task.assignee.substr(0,10) : ''}
      </div>
    );
  }

  renderLabel(task) {
    return (
      <div>
        {task.label}
      </div>
    );
  }

  render() {
    const { task } = this.props;
    
    let containerClasses = classNames('task-item', {
      'task-item--completed': task.completed,
    });

    return (
      <div className={containerClasses} tabIndex={this.props.taskNumber+1}
        onClick={this.select}
        onKeyUp={this.select}>
        <div className="cell">
          {this.renderTitle(task)}
        </div>

        <div className="cell">
          {this.renderAssignee(task)}
        </div>

        <div className="cell">
          {this.renderLabel(task)}
        </div>
      </div>
    );
  }
}

TaskItem.propTypes = {
  task: PropTypes.object.isRequired,
  selectTask: PropTypes.func.isRequired
};


export default TaskItem;
