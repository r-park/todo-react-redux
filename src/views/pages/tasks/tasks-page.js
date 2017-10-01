import React, { Component } from 'react';
import { List } from 'immutable';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createSelector } from 'reselect';

import { authActions, getAuth } from 'src/auth';
import { getNotification, notificationActions } from 'src/notification';
import { getTaskFilter, getVisibleTasks, tasksActions } from 'src/tasks';
import Notification from '../../components/notification';
import TaskFilters from '../../components/task-filters';
import TaskList from '../../components/task-list';
import TaskView from '../../components/task-view/task-view';
import Button from '../../components/button';
import classNames from 'classnames';

import './tasks-page.css';

export class TasksPage extends Component {
  constructor() {
    super(...arguments);
    this.createNewTask = this.createNewTask.bind(this);
    this.isAdmin = this.isAdmin.bind(this);
  }

  static propTypes = {
    createTask: PropTypes.func.isRequired,
    dismissNotification: PropTypes.func.isRequired,
    filterTasks: PropTypes.func.isRequired,
    filterType: PropTypes.string.isRequired,
    loadTasks: PropTypes.func.isRequired,
    location: PropTypes.object.isRequired,
    notification: PropTypes.object.isRequired,
    removeTask: PropTypes.func.isRequired,
    tasks: PropTypes.instanceOf(List).isRequired,
    undeleteTask: PropTypes.func.isRequired,
    unloadTasks: PropTypes.func.isRequired,
    updateTask: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired
  };

  componentWillMount() {
    this.props.loadTasks();
    this.props.filterTasks(
      this.getFilterParam(this.props.location.search)
    );
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.location.search !== this.props.location.search) {
      this.props.filterTasks(
        this.getFilterParam(nextProps.location.search)
      );
    }
  }

  componentWillUnmount() {
    this.props.unloadTasks();
  }

  getFilterParam(search) {
    const params = new URLSearchParams(search);
    return params.get('filter');
  }

  renderNotification() {
    const { notification } = this.props;
    return (
      <Notification
        action={this.props.undeleteTask}
        actionLabel={notification.actionLabel}
        dismiss={this.props.dismissNotification}
        display={notification.display}
        message={notification.message}
      />
    );
  }

  createNewTask() {
    let authUserId = this.props.auth.id;
    this.props.createTask({creator: authUserId, title: 'משימה חדשה'});
    // TODO Select the new created task
  }

  isAdmin() {
    return true; //TODO
  }

  render() {
    return (
      <div className="g-row">
          <div className="g-col">
            <TaskFilters filter={this.props.filterType} />
          </div>

        <div className="g-row">
          <Button
            className="button button-small add-task-button"
            onClick={ this.createNewTask }>
            הוסף משימה
          </Button>
        </div>
      
        <div className="g-row">
          <div className="g-col-60">
            <TaskView 
              createTask={this.props.createTask}
              removeTask={this.props.removeTask}
              updateTask={this.props.updateTask}
              selectTask={this.props.selectTask}
              isAdmin={true}
            />
          </div>
          <div className="g-col-40">
            <TaskList
              tasks={this.props.tasks}
              selectTask={this.props.selectTask}
            />
          </div>

          {this.props.notification.display ? this.renderNotification() : null}
        </div>
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
  getAuth,
  (notification, filterType, tasks, auth) => ({
    notification,
    filterType,
    tasks,
    auth
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
)(TasksPage);