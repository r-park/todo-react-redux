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
    this.assignTaskToSignedUser = this.assignTaskToSignedUser.bind(this);
  }

  static propTypes = {
    createTask: PropTypes.func.isRequired,
    dismissNotification: PropTypes.func.isRequired,
    filterTasks: PropTypes.func.isRequired,
    filterType: PropTypes.object.isRequired,
    loadTasks: PropTypes.func.isRequired,
    location: PropTypes.object.isRequired,
    notification: PropTypes.object.isRequired,
    removeTask: PropTypes.func.isRequired,
    assignTask: PropTypes.func.isRequired,
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
      this.props.selectTask();
    }
  }

  componentWillUnmount() {
    this.props.unloadTasks();
  }

  getFilterParam(search) {
    const params = new URLSearchParams(search);
    let filterParams = {};
    filterParams.name = params.get('filter');
    filterParams.text = params.get('text');
    return filterParams;
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
    let creator = {
      id: this.props.auth.id,
      name: this.props.auth.name,
      email: this.props.auth.email,
      photoURL: this.props.auth.photoURL,
    }
    
    let nowInTimestamp = new Date().getTime();
    this.props.createTask({creator , title: `משימה חדשה של ${creator.name}`, createdDate: nowInTimestamp});
    // TODO Select the new created task
  }

  isAdmin() {
    return false; //TODO
  }

  assignTaskToSignedUser(task) {
    this.props.assignTask(task, this.props.auth);
  }

  render() {
    return (
      <div>
          <div className="g-col">
            <Button
              className="button button-small add-task-button"
              onClick={ this.createNewTask }>
              הוסף משימה
            </Button>

            <TaskFilters filter={this.props.filterType} />
          </div>
      
        <div className="g-row">
          <div className="g-col-60 g-col-xs-100">
            <TaskView 
              createTask={this.props.createTask}
              removeTask={this.props.removeTask}
              updateTask={this.props.updateTask}
              selectTask={this.props.selectTask}
              isAdmin={false}
              assignTask={this.assignTaskToSignedUser}
            />
          </div>
          <div className="g-col-40 g-col-xs-100">
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