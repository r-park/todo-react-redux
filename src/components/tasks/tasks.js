import { List } from 'immutable';
import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { createSelector } from 'reselect';

import { getNotification, notificationActions } from 'src/core/notification';
import { getTaskList, tasksActions } from 'src/core/tasks';
import { Notification } from './notification';
import { TaskFilters } from './task-filters';
import { TaskForm } from './task-form';
import { TaskList } from './task-list';


export class Tasks extends Component {
  static propTypes = {
    createTask: PropTypes.func.isRequired,
    deleteTask: PropTypes.func.isRequired,
    dismissNotification: PropTypes.func.isRequired,
    location: PropTypes.object.isRequired,
    notification: PropTypes.object.isRequired,
    registerListeners: PropTypes.func.isRequired,
    tasks: PropTypes.instanceOf(List).isRequired,
    undeleteTask: PropTypes.func.isRequired,
    updateTask: PropTypes.func.isRequired
  };

  componentWillMount() {
    this.props.registerListeners();
  }

  renderNotification() {
    const {
      dismissNotification,
      notification,
      undeleteTask
    } = this.props;

    return (
      <Notification
        action={undeleteTask}
        actionLabel={notification.actionLabel}
        dismiss={dismissNotification}
        display={notification.display}
        message={notification.message}
      />
    );
  }

  render() {
    const {
      createTask,
      deleteTask,
      location,
      notification,
      tasks,
      updateTask
    } = this.props;

    const { filter } = location.query;

    return (
      <div className="g-row">
        <div className="g-col">
          <TaskForm createTask={createTask} />
        </div>

        <div className="g-col">
          <TaskFilters filter={filter} />
          <TaskList
            deleteTask={deleteTask}
            filter={filter}
            tasks={tasks}
            updateTask={updateTask}
          />
        </div>

        {notification.display ? this.renderNotification() : null}
      </div>
    );
  }
}


//=====================================
//  CONNECT
//-------------------------------------

const mapStateToProps = createSelector(
  getNotification,
  getTaskList,
  (notification, tasks) => ({
    notification,
    tasks
  })
);

const mapDispatchToProps = Object.assign(
  {},
  tasksActions,
  notificationActions
);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Tasks);
