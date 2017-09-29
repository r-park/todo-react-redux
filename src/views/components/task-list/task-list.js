import React, { Component }  from 'react';
import { List } from 'immutable';
import PropTypes from 'prop-types';
import TaskItem from '../task-item/task-item';

import './task-list.css';

class TaskList extends Component {
  static propTypes = {
    removeTask: PropTypes.func.isRequired,
    tasks: PropTypes.instanceOf(List).isRequired,
    updateTask: PropTypes.func.isRequired,
    selectTask: PropTypes.func.isRequired
  };
  
  render() {
    let taskItems = this.props.tasks.map((task, index) => {
      return (
        <TaskItem
          key={index}
          taskNumber={index}
          task={task}
          removeTask={this.props.removeTask}
          updateTask={this.props.updateTask}
          selectTask={this.props.selectTask}
        />
      );
    });
    

    return (
      <div className="task-list">
        {taskItems}
      </div>
    );
  }

}

export default TaskList;
