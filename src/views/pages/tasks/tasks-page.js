import React, { Component } from 'react';
import { List } from 'immutable';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createSelector } from 'reselect';

import { authActions, getAuth } from 'src/auth';
import { getNotification, notificationActions } from 'src/notification';
import { buildFilter, tasksActions, taskFilters } from 'src/tasks';
import { commentsActions } from 'src/comments';
import Notification from '../../components/notification';
import TaskFilters from '../../components/task-filters';
import TaskList from '../../components/task-list';
import TaskView from '../../components/task-view/task-view';
import Button from '../../components/button';
import classNames from 'classnames';
import LoaderUnicorn from '../../components/loader-unicorn/loader-unicorn';

import './tasks-page.css';

export class TasksPage extends Component {
  constructor() {
    super(...arguments);
    this.createNewTask = this.createNewTask.bind(this);
    this.isAdmin = this.isAdmin.bind(this);
    this.assignTaskToSignedUser = this.assignTaskToSignedUser.bind(this);
    this.goToTask = this.goToTask.bind(this);
    this.onLabelChanged = this.onLabelChanged.bind(this);
    this.onNewTaskAdded = this.onNewTaskAdded.bind(this);
    
    this.state = {
      tasks: this.props.tasks,
      selectedTask: null,
      labels: null,
      isLoadedComments: false
    };
  }

  static propTypes = {
    createTask: PropTypes.func.isRequired,
    dismissNotification: PropTypes.func.isRequired,
    filters: PropTypes.object.isRequired,
    buildFilter: PropTypes.func.isRequired, 
    loadTasks: PropTypes.func.isRequired,
    location: PropTypes.object.isRequired,
    notification: PropTypes.object.isRequired,
    removeTask: PropTypes.func.isRequired,
    assignTask: PropTypes.func.isRequired,
    tasks: PropTypes.instanceOf(List).isRequired,
    unloadTasks: PropTypes.func.isRequired,
    unloadComments: PropTypes.func.isRequired,
    updateTask: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired
  };

  componentWillMount() {
    this.props.loadTasks();
  }

  componentWillReceiveProps(nextProps) {
    // if url has a task id - select it
    if (nextProps.match != null && nextProps.match.params.id) {
      const tid = nextProps.match.params.id;

      this.setState({
        selectedTask: this.props.tasks.find((task)=>( task.get('id') == tid ))
      })

      if(!this.state.selectedTask) {
        this.setState({ isLoadedComments: false });
      }

      if(!this.state.isLoadedComments || 
        this.state.selectedTask && tid != this.state.selectedTask.id) {
          this.setState({ isLoadedComments: true });
          this.props.unloadComments();
          this.props.loadComments(tid);
      }
    } else {
      this.setState({ isLoadedComments: false });
    }

    // prepare filter if exists
    let curTasks = nextProps.tasks;
    const params = new URLSearchParams(nextProps.location.search);
    const filterType = params.get('filter');
    
    if (filterType) {      
      const filter = this.props.buildFilter(this.props.auth, filterType);
      curTasks = this.props.filters[filter.type](curTasks, filter);
    }
    
    this.setState({tasks: curTasks});      
  }

  componentDidUpdate(prevProps, prevState) {    
    if (prevState.labels != this.state.labels) {
      let curTasks = this.props.tasks;
      if ( this.state.labels != null && this.state.labels.length > 0) {
        const filter = this.props.buildFilter(this.props.auth, "label", this.state.labels);
        curTasks = this.props.filters["label"](curTasks, filter, this.state.lables);
      }
      this.setState({tasks: curTasks});  
    } 
  }

  componentWillUnmount() {
    this.props.unloadTasks();
  }

  filterTasks() {
    
  }

  renderNotification() {
    const { notification } = this.props;
    return (
      <Notification
        action={()=> { }}
        actionLabel={notification.actionLabel}
        dismiss={this.props.dismissNotification}
        display={notification.display}
        message={notification.message}
      />
    );
  }

  onNewTaskAdded(task) {
    const taskObj = this.props.tasks.find((t)=>( t.get('id') == task.id ))
    this.goToTask(taskObj);
  }

  createNewTask() {
    const filter = this.props.buildFilter(this.props.auth, "mine");
    const myTasks = this.props.filters[filter.type](this.props.tasks, filter);

    // TODO: Move to a better place
    if (myTasks.size >= 8) {
      console.warn("DOOCRATE: MAX TASKS FOR USERS REACHED")
      return;
    }

    let creator = {
      id: this.props.auth.id,
      name: this.props.auth.name,
      email: this.props.auth.email,
      photoURL: this.props.auth.photoURL,
    }
    
    this.props.createTask(
      {creator , title: `משימה חדשה של ${creator.name}`, created: new Date()}, 
      this.onNewTaskAdded);
  }

  isAdmin() {
    return false; //TODO
  }

  assignTaskToSignedUser(task) {
    const myAssignedTasks = this.props.tasks.filter((t)=>{return t.get("assignee") != null && t.get("assignee").id == this.props.auth.id});

    // TODO: Move to a better place
    if(myAssignedTasks.size >= 4) {
      return console.warn("DOOCRATE: TOO MANY TASKS ASSIGNED TO USER")
    }
    

    this.props.assignTask(task, this.props.auth);
  }

  goToTask(task) {
    const params = new URLSearchParams(this.props.location.search);
    const filterType = params.get('filter');
    let taskParameter = task? `/task/${task.get("id")}` : `/task/1`;

    if (filterType) {
      taskParameter = `${taskParameter}?filter=${filterType}`
    }
    this.props.history.push(taskParameter);
  }

  onLabelChanged(labels) {
    this.setState({labels});
  }

  renderTaskView() {
    if (this.state.selectedTask == null) return <div>&nbsp;</div>; 
    
    return (
      <TaskView 
        createTask={this.props.createTask}
        removeTask={this.props.removeTask}
        updateTask={this.props.updateTask}
        selectTask={this.goToTask}
        selectedTask={this.state.selectedTask.toJS()}
        isAdmin={false}
        assignTask={this.assignTaskToSignedUser}
        unloadComments={this.props.unloadComments}
        createComment={this.props.createComment}
      />)
  }

  render() {
    // TODO : use state.tasks instead. It is possible that a filter would 
    // return 0 results, but loading has finished
    const isLoading = (!this.state.tasks || this.props.tasks.size <= 0);
    return (
      <div>
          <div className="g-col">
            { <TaskFilters filter={this.props.filterType} onLabelChange= {this.onLabelChanged}/> }
            <Button
              className="button button-small add-task-button"
              onClick={ this.createNewTask }>
              הוסף משימה
            </Button>
          </div>
      
        <div className="g-row">
          <LoaderUnicorn isShow={ isLoading }/>
          <div className="g-col-60 g-col-xs-100">
            { this.renderTaskView() }
          </div>
          <div className="g-col-40 g-col-xs-100">
            <TaskList
              tasks={this.state.tasks}
              selectTask={this.goToTask}
              selectedTaskId={this.state.selectedTask? this.state.selectedTask.get("id") : ""}
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
const mapStateToProps = (state) => {
  return {
    tasks: state.tasks.list,
    notification: state.notification,
    auth: state.auth,
    filters: taskFilters,
    buildFilter: buildFilter
  }
}

const mapDispatchToProps = Object.assign(
  {},
  tasksActions,
  commentsActions,
  notificationActions
);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TasksPage);