import { List } from 'immutable';
import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { createSelector } from 'reselect';

import { getNotification, notificationActions } from 'src/core/notification';
import { getTaskFilter, getVisibleTasks, tasksActions } from 'src/core/tasks';
import { Notification } from './notification';
import { TaskFilters } from './task-filters';
import { TaskForm } from './task-form';
import { TaskList } from './task-list';


export class Tasks extends Component {
  static propTypes = {
    createTask: PropTypes.func.isRequired,
    deleteTask: PropTypes.func.isRequired,
    dismissNotification: PropTypes.func.isRequired,
    filterTasks: PropTypes.func.isRequired,
    filterType: PropTypes.string.isRequired,
    location: PropTypes.object.isRequired,
    notification: PropTypes.object.isRequired,
    registerListeners: PropTypes.func.isRequired,
    tasks: PropTypes.instanceOf(List).isRequired,
    undeleteTask: PropTypes.func.isRequired,
    updateTask: PropTypes.func.isRequired
  };

  componentWillMount() {
    this.props.registerListeners();
    this.props.filterTasks(this.props.location.query.filter);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.location.query.filter !== this.props.location.query.filter) {
      this.props.filterTasks(nextProps.location.query.filter);
    }
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
      filterType,
      notification,
      tasks,
      updateTask
    } = this.props;

    return (
      <div className="g-row">
        <div className="g-col">
          <TaskForm createTask={createTask} />
        </div>

        <div className="g-col">
          <TaskFilters filter={filterType} />
          <TaskList
            deleteTask={deleteTask}
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
  getTaskFilter,
  getVisibleTasks,
  (notification, filterType, tasks) => ({
    notification,
    filterType,
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
