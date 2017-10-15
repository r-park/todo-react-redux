import React, { Component } from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

import './task-item.css';
import Img from 'react-image';
import ReactTooltip from 'react-tooltip'
import Icon from '../icon';

export class TaskItem extends Component {
  constructor() {
    super(...arguments);

    this.state = {};

    this.select = this.select.bind(this);
  }

  select() {
    this.props.selectTask(this.props.task);
  }

  render() {
    const { task } = this.props;
    
    let containerClasses = classNames('task-item', {
      'task-item--completed': task.completed,
    }, {'is-active': this.props.isActive});
   

    return (
      <div className={containerClasses} tabIndex={this.props.taskNumber+1}
        onClick={this.select}
        onKeyUp={this.select}>
        { task && task.isCritical ? 
          <div className='cell'>
            <Icon name='warning' className='warning grow' />
          </div>
        : ''
        }
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


  renderTitle(task) {
    return (
      <div className="task-item-title">
        {task.title}
      </div>
    );
  }

  renderAssignee(task) {
    if (!task.assignee) return;
    const avatar = task.assignee.photoURL ? <Img className='avatar' src={task.assignee.photoURL} alt={task.assignee.name}/> : '';
    return (
      <div className='task-item-assignee' data-tip={task.assignee.name}>
        <ReactTooltip type='light' effect='solid'/>
        { avatar }
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
}

TaskItem.propTypes = {
  task: PropTypes.object.isRequired,
  selectTask: PropTypes.func.isRequired,
  isActive: PropTypes.bool.isRequired
};


export default TaskItem;
