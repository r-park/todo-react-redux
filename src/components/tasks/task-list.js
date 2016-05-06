import React, { Component, PropTypes } from 'react';
import { TaskItem } from './task-item';


export class TaskList extends Component {
  static propTypes = {
    deleteTask: PropTypes.func.isRequired,
    filter: PropTypes.string,
    tasks: PropTypes.array.isRequired,
    updateTask: PropTypes.func.isRequired
  };

  renderTaskItems() {
    const {
      deleteTask,
      filter,
      tasks,
      updateTask
    } = this.props;

    return tasks
      .filter(task => {
        if (filter === 'active') return !task.completed;
        if (filter === 'completed') return task.completed;
        return task;
      })
      .map((task, index) => {
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
