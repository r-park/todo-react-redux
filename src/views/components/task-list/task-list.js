import React  from 'react';
import { List } from 'immutable';
import PropTypes from 'prop-types';
import TaskItem from '../task-item/task-item';


function TaskList({removeTask, tasks, updateTask, selectTask}) {
  let taskItems = tasks.map((task, index) => {
    return (
      <TaskItem
        key={index}
        task={task}
        removeTask={removeTask}
        updateTask={updateTask}
        selectTask={selectTask}
      />
    );
  });

  return (
    <div className="task-list">
      {taskItems}
    </div>
  );
}

TaskList.propTypes = {
  removeTask: PropTypes.func.isRequired,
  tasks: PropTypes.instanceOf(List).isRequired,
  updateTask: PropTypes.func.isRequired,
  selectTask: PropTypes.func.isRequired
};

export default TaskList;
