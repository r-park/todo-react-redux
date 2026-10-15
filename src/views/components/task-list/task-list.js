import React, { PureComponent } from 'react';
import { List } from 'immutable';
import PropTypes from 'prop-types';
import TaskItem from '../task-item/task-item';


class TaskList extends PureComponent {
  render() {
    const {removeTask, tasks, updateTask} = this.props;
    const taskItems = tasks.map(task => (
      <TaskItem
        key={task.key}
        task={task}
        removeTask={removeTask}
        updateTask={updateTask}
      />
    ));

    return (
      <div className="task-list">
        {taskItems}
      </div>
    );
  }
}

TaskList.propTypes = {
  removeTask: PropTypes.func.isRequired,
  tasks: PropTypes.instanceOf(List).isRequired,
  updateTask: PropTypes.func.isRequired
};

export default TaskList;
