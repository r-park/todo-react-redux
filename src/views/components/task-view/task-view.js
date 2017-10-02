import React, { Component } from 'react';
import { List } from 'immutable';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createSelector } from 'reselect';

import { getSelectedTask } from 'src/tasks';

import './task-view.css';
import Icon from '../icon';

import TagsInput from 'react-tagsinput';
import 'react-tagsinput/react-tagsinput.css';

export class TaskView extends Component {
  constructor() {
    super(...arguments);

    this.state = {
      title: '',
      description: '',
      circle: '',
      label: [],
      creatorSpecialComments: '',
      communitySpecialComments: '',
      relevantContacts: '',
      assigneePhone: '',
      status: ''
    }

    this.handleChange = this.handleChange.bind(this);
    this.handleLabelChange = this.handleLabelChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  static propTypes = {
    selectTask: PropTypes.func.isRequired,
    updateTask: PropTypes.func.isRequired,
    removeTask: PropTypes.func.isRequired,
    assignTask: PropTypes.func.isRequired,
    selectedTask: PropTypes.object.isRequired,
    isAdmin: PropTypes.bool.isRequired,
  };

  componentWillReceiveProps(nextProps) {
    let { title, description, circle,
      label, creatorSpecialComments, communitySpecialComments,
      relevantContacts,
      assigneePhone, status, dueDate } = nextProps.task;
    
    const labelAsArray = label ?
      (Object.keys(label).map( l => { return l })) : [];

    this.setState({
      title: title || '',
      description:description || '',
      circle:circle || '',
      label: labelAsArray || [],
      creatorSpecialComments:creatorSpecialComments || '',
      communitySpecialComments: communitySpecialComments || '',
      relevantContacts:relevantContacts || '',
      assigneePhone:assigneePhone || '',
      status: status || '',
      dueDate: dueDate || '',
    });
  }

  render() {
    const { task } = this.props;

    if(!task) {
      return(
        <div className="task-view g-row">
          <div className="g-col">
            <h1>&nbsp;</h1>
          </div>
        </div>
      );
    }

    const isTaskEmpty = this.props.isAdmin && !task.description &&
        !task.circle && !task.status;
    
    return (
      <div className="task-view g-row">
        <div className="g-col">
        <form className="task-form" onSubmit={this.handleSubmit} noValidate>
        { isTaskEmpty ?
        <button
          className="button delete_task"
          onClick={()=>this.props.removeTask(task)}
          type="button">מחק משימה</button> : "" }

        {!task.assignee ? <button
          className="button assign_task"
          onClick={()=>this.props.assignTask(task)}
          type="button">קח אחריות על משימה זו</button> : ""}
          
          {this.renderInput(task, 'title', 'שם המשימה')}
          {this.renderInput(task, 'description', 'תאור המשימה')}
          {this.renderInput(task, 'circle', 'מעגל')}
          <div><Icon name="label_outline" /> {this.renderLabel()} </div>
          {this.renderInput(task, 'creatorSpecialComments', 'הערות מיוחדות מהיוצר')}
          {this.renderInput(task, 'communitySpecialComments', 'הערות מהקהילה')}
          {this.renderInput(task, 'relevantContacts', 'אנשי קשר רלוונטיים')}
          {this.renderInput(task, 'assigneePhone', 'טלפון ממלא המשימה')}
          {this.renderInput(task, 'status', 'סטטוס המשימה')}
          {this.renderInput(task, 'dueDate', 'תאריך לביצוע')}
          <input className='button button-small' type="submit" value="שמור" />
        </form>
        </div>
      </div>
    );
  }

  renderInput(task, fieldName, placeholder) {
    return (
        <input
        className='changing-input'
        type='text'
        name={fieldName}
        value={this.state[fieldName]}
        placeholder={placeholder}
        ref={e => this[fieldName+'Input'] = e}
        onChange={this.handleChange} />
    );
  }

  renderLabel() {
    const showPlaceholder = !this.state.label || this.state.label.length == 0 ;
    return (
      <TagsInput className='react-tagsinput-changing'
      value={this.state.label}
      onChange={this.handleLabelChange}
      onlyUnique={true}
      addOnBlur={true}
      inputProps={{ placeholder: showPlaceholder ? 'הכנס תגיות' : ''}}
      />
    )
  }

  handleChange(e) {
    let fieldName = e.target.name;
    this.setState({
      [fieldName]: e.target.value
    });
  }

  handleLabelChange(label) {
    this.setState({label})
  }

  handleKeyUp(event) {
    if (event.keyCode === 13) {
      this.handleSubmit(event);
    }
  }

  handleSubmit(event) {
    event.preventDefault();
    let labelAsObject = this.arrayToObject(this.state.label);
    this.props.updateTask(this.props.task,
      {
        title: this.state.title,
        description: this.state.description,
        circle: this.state.circle,
        label: labelAsObject,
        creatorSpecialComments: this.state.creatorSpecialComments,
        communitySpecialComments: this.state.communitySpecialComments,
        relevantContacts: this.state.relevantContacts,
        assigneePhone: this.state.assigneePhone,
        status: this.state.status,
        dueDate: this.state.dueDate
      });
  }

  arrayToObject(array) {
    var result = {};
    for (var i = 0; i < array.length; ++i)
      result[array[i]] = true;
    return result;
  }
}


//=====================================
//  CONNECT
//-------------------------------------

const mapStateToProps = createSelector(
  getSelectedTask,
  (task) => ({
    task
  })
);

const mapDispatchToProps = Object.assign(
  {},
  // TODO: not sure what should be here
);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TaskView);
