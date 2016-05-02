import React, { Component, PropTypes } from 'react';
import { ProspectDashboard } from './prospectDashboard';


export class ProspectList extends Component {
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
          <ProspectDashboard
            deleteTask={deleteTask}
            key={index}
            task={task}
            updateTask={updateTask} />
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
