import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';

// Modules
import { notificationActions } from 'core/notification';
import { tasksActions } from 'core/tasks';

// Components
import { Notification } from './notification';
import { TaskFilters } from './task-filters';
import { TaskForm } from './task-form';
import { TaskList } from './task-list';
import { ProspectList } from './prospect-list';


export class Tasks extends Component {
  static propTypes = {
    createTask: PropTypes.func.isRequired,
    deleteTask: PropTypes.func.isRequired,
    dismissNotification: PropTypes.func.isRequired,
    location: PropTypes.object.isRequired,
    notification: PropTypes.object.isRequired,
    registerListeners: PropTypes.func.isRequired,
    tasks: PropTypes.array.isRequired,
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
        dismiss={dismissNotification}
        {...notification} />
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
      //debugger;

    const { filter } = location.query;

          //<TaskFilters filter={filter} />
    return (
      <div className="g-row">
        <div className="g-col">
          <h1 style={{marginTop:'100px',marginLeft:'100px'}}> Prospect: General Information </h1>
          <TaskForm createTask={createTask} 
            {...this.props}
          />
        </div>

        <div className="g-col">
          <h1 style={{marginLeft:'100px'}}> Prospect: Prospect Dashboard</h1>
          <ProspectList
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

export default connect(state => ({
  notification: state.notification,
  tasks: state.tasks.list
}), Object.assign({}, tasksActions, notificationActions))(Tasks);
