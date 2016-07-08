import React, { Component, PropTypes } from 'react';
import { List } from 'immutable';
import { TaskItem } from './task-item';


export class TaskList extends Component {
  static propTypes = {
    deleteTask: PropTypes.func.isRequired,
    tasks: PropTypes.instanceOf(List).isRequired,
    updateTask: PropTypes.func.isRequired
  };

  renderTaskItems() {
    const {
      deleteTask,
      tasks,
      updateTask
    } = this.props;

    return tasks.map((task, index) => {
      return (
        <TaskItem
          deleteTask={deleteTask}
          key={index}
          task={task}
          updateTask={updateTask}
        />
      );
    });
  }

  render() {
    return (
      <div className="task-list">
        {this.renderTaskItems()}
      </div>
    );
  }
}
