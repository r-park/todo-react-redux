import React, { Component } from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

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
      <div className="task-item-title">
        {task.title}
      </div>
    );
  }

  renderAssignee(task) {
    if (!task.assignee) return;

    return (
      <div className='task-item-assignee'>
        {task.assignee ? task.assignee.name : ''}
      </div>
    );
  }

  renderLabel(task) {
    if(!task.label || Object.keys(task.label).length === 0 && task.label.constructor === Object) {
      return null;
    }
    
    return (
      <div>
        { 
          Object.keys(task.label).map((label) => {
            return (<span key={label} className="label-default">{label}</span>)
          }) }
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
