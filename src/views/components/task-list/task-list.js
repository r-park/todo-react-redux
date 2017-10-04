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
          <span>נואופ. אין פה שום משימות. מוזמת לקחת על עצמך משימות או לשנות את החיפוש</span>
          <br /><br />
          <img src='https://c2.staticflickr.com/4/3795/14304043253_3e194d97e7_b.jpg'/>
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
