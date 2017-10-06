import React, { Component } from 'react';
import { ReactDom } from 'react-dom';
import { List } from 'immutable';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createSelector } from 'reselect';
import { getAuth } from 'src/auth';

import { getSelectedTask } from 'src/tasks';

import './task-view.css';
import Icon from '../icon';
import Textarea from 'react-textarea-autosize';

import Img from 'react-image'
import TagsInput from 'react-tagsinput';
import 'react-tagsinput/react-tagsinput.css';
import Select from 'react-select';
import Button from '../button';

export class TaskView extends Component {
  constructor() {
    super(...arguments);

    this.state = {
      title: '',
      description: '',
      circle: '',
      defaultCircle: [
        { value: 'אור', label: 'אור' },
        { value: 'אמיר', label: 'אמיר'},
        { value: 'מיכאל', label: 'מיכאל'}
      ],
      type: '',
      defaultType: [
        { value: 1, label: 'תכנון ארוע' },
        { value: 2, label: 'משמרות בארוע (בשביל אחראי משימות משמרות) - טרם נפתח', disabled: true},
        { value: 3, label: 'משימות של מחנות נושא - טרם נפתח', disabled: true},
        { value: 4, label: 'משימות של מיצבי אמנות - טרם נפתח', disabled: true},
        { value: 5, label: 'אחר'}
      ],
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
    // TODO: On mobile scroll to top - hackish
    if(window.innerWidth < 768) {
      window.scrollTo(0, 150);
    }

    let nextSelectedTask = nextProps.task || {};
    let { title, description, circle, type,
      label, creatorSpecialComments, communitySpecialComments,
      relevantContacts,
      assigneePhone, status, dueDate, createdDate } = nextSelectedTask;
    
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
      createdDate: createdDate || '',
      dueDate: dueDate || null,
      type: type || null
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

    const isTaskEmpty = !task.description &&
        !task.circle && !task.status;
    
    const isUserCreator = task.creator && task.creator.id == this.props.auth.id;

    return (
      <div className='task-view-container'>
        <div className='task-view-header' name='task-view-header'>

        <Button className='button-no-border close-button' onClick={ () => this.props.selectTask() }><Icon name='close' className='close-icon grow' /></Button>
        
        {!task.assignee ? <Button
          className='button button-small action-button assign_task'
          onClick={()=>this.props.assignTask(task)}
          type='button'>קח אחריות על משימה זו</Button> : 
          
          <div className='avatar-container'>
            <Img className='avatar' src={task.assignee.photoURL}/>
            <span>{task.assignee.name}</span>
          </div>}
            
          { isTaskEmpty && isUserCreator ?
          <Button
            className='action-button delete_task'
            onClick={()=> { this.props.removeTask(task); this.props.selectTask(); }}
            type='button'>מחק משימה</Button> : '' }
          
        </div>
        <div className='task-view'>
          <form onSubmit={this.handleSubmit} noValidate>
            {this.renderInput(task, 'title', 'שם המשימה')}
            {this.renderTextArea(task, 'description', 'תאור המשימה')}
            {this.props.isAdmin? 
              this.renderSelect(task, 'circle', 'מעגל', this.state.defaultCircle): ''}
            <div><Icon className='label' name='label_outline' /> {this.renderLabel()} </div>
            { this.renderSelect(task, 'type', 'סוג המשימה', this.state.defaultType)}
            {this.renderTextArea(task, 'creatorSpecialComments', 'הערות מיוחדות מהיוצר')}
            {this.renderTextArea(task, 'communitySpecialComments', 'הערות מהקהילה')}
            {this.renderTextArea(task, 'relevantContacts', 'אנשי קשר רלוונטיים')}
            {this.renderInput(task, 'assigneePhone', 'טלפון ממלא המשימה')}
            {this.renderTextArea(task, 'status', 'סטטוס המשימה')}
            <input className='button button-small button-save' type="submit" value="שמור" />
          </form>
        </div>
      </div>
    );
  }
  
  renderSelect(task, fieldName, placeholder, options) {
    return (
      <Select
      type='text'
      name={fieldName}
      value={this.state[fieldName]}
      placeholder={placeholder}
      ref={e => this[fieldName+'Input'] = e}
      onChange={(e) => { let val=null; if (e) { val = e.value };
                this.setState({ [fieldName]: val}) }}
      options={options}
      onBlur={this.handleSubmit}
      noResultsText={'לא נמצאו תוצאות'}
      searchable={ false } />
  );
  }

  renderInput(task, fieldName, placeholder) {
    return (
        <input
        className='changing-input'
        type = 'text'
        name = { fieldName }
        value = { this.state[fieldName] }
        placeholder = { placeholder }
        ref = { e => this[fieldName+'Input'] = e }
        onChange = { this.handleChange }
        onBlur = { this.handleSubmit } />
    );
  }

  renderTextArea(task, fieldName, placeholder) {
    return (
        <Textarea
        className='changing-input'
        name={fieldName}
        value={this.state[fieldName]}
        placeholder={placeholder}
        ref={e => this[fieldName+'Input'] = e}
        onChange={this.handleChange}
        onBlur={this.handleSubmit}/>
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
      inputProps={{ placeholder: showPlaceholder ? 'הכנס תגיות. לחץ על Enter בין תגית לתגית' : ''}}
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
    const fieldsToUpdate = {
      title: this.state.title,
      description: this.state.description,
      circle: this.state.circle,
      label: labelAsObject,
      creatorSpecialComments: this.state.creatorSpecialComments,
      communitySpecialComments: this.state.communitySpecialComments,
      relevantContacts: this.state.relevantContacts,
      assigneePhone: this.state.assigneePhone,
      status: this.state.status,
      type: this.state.type
    };
    fieldsToUpdate.dueDate = this.state.dueDate || null;
    
    this.props.updateTask(this.props.task, fieldsToUpdate);
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
  getAuth,
  (task, auth) => ({
    task,
    auth
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
