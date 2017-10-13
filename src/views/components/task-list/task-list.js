import React, { Component }  from 'react';
import { List } from 'immutable';
import PropTypes from 'prop-types';
import TaskItem from '../task-item/task-item';

import './task-list.css';

class TaskList extends Component {
  static propTypes = {
    tasks: PropTypes.instanceOf(List).isRequired,
    selectTask: PropTypes.func.isRequired,
  };
  
  render() {
    let taskItems = this.props.tasks.map((task, index) => {
      return (
        <TaskItem
          key={index}
          taskNumber={index}
          task={task}
          selectTask={this.props.selectTask}
        />
      );
    });
    const isAnyTasks = this.props.tasks && this.props.tasks.size > 0;
    if (!isAnyTasks) {
      return (
        <div>
          אין משימות להציג
        </div>
      );
    }
    return (
      <div className="task-list">
        { taskItems }
      </div>
    );
  }

}

export default TaskList;
