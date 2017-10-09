import React, { Component } from 'react';
import { ReactDom } from 'react-dom';
import { List } from 'immutable';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createSelector } from 'reselect';
import { getAuth } from 'src/auth';

import { getSelectedTask } from 'src/tasks';
import { getCommentList } from 'src/comments';

import './task-view.css';
import Icon from '../icon';
import Textarea from 'react-textarea-autosize';

import Img from 'react-image'
import TagsInput from 'react-tagsinput';
import 'react-tagsinput/react-tagsinput.css';
import Select from 'react-select';
import Button from '../button';
import CommentList from '../comment-list';

export class TaskView extends Component {
  constructor() {
    super(...arguments);

    this.state = {
      title: '',
      description: '',
      circle: '',
      projectName: null,
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
    selectedTask: PropTypes.object,
    isAdmin: PropTypes.bool.isRequired,
    unloadComments: PropTypes.func.isRequired,
  };

  componentWillReceiveProps(nextProps) {
    // TODO - check this maybe called several times now that we use comments

    // TODO: On mobile scroll to top - hackish
    if(window.innerWidth < 768) {
      window.scrollTo(0, 150);
    }

    let nextSelectedTask = nextProps.selectedTask || {};
    let { title, description, circle, type, projectName,
      label, relevantContacts,
      assigneePhone, status, dueDate, createdDate } = nextSelectedTask;
    
    const labelAsArray = label ?
      (Object.keys(label).map( l => { return l })) : [];

    this.setState({
      title: title || '',
      description:description || '',
      circle:circle || '',
      label: labelAsArray || [],
      relevantContacts:relevantContacts || '',
      assigneePhone:assigneePhone || '',
      status: status || '',
      createdDate: createdDate || '',
      dueDate: dueDate || null,
      type: type || null,
      projectName: projectName || '',
    });

    // if(nextProps.comments.length() != this.state.comments) {
    //   this.props.unloadComments(); //TODO - probably length is not such a good indicator
    //   // TODO - we should unload comments when we're start loading new comments
    // }
  }

  render() {
    //const { task } = this.props;
    
    const task = this.props.selectedTask;

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
            {this.renderInput(task, 'projectName', 'שם הפרוייקט')}
            {this.renderTextArea(task, 'description', 'תאור המשימה')}
            {this.props.isAdmin? 
              this.renderSelect(task, 'circle', 'מעגל', this.state.defaultCircle): ''}
            <div><Icon className='label' name='label_outline' /> {this.renderLabel()} </div>
            { this.renderSelect(task, 'type', 'סוג המשימה', this.state.defaultType)}
            {this.renderTextArea(task, 'relevantContacts', 'אנשי קשר רלוונטיים')}
            {this.renderInput(task, 'assigneePhone', 'טלפון ממלא המשימה')}
            {this.renderTextArea(task, 'status', 'סטטוס המשימה')}
            <input className='button button-small button-save' type="submit" value="שמור" />
          </form>
        </div>
        { this.props.comments ?
          <CommentList
          task={task}
          comments={this.props.comments}
          auth={this.props.auth}
          createComment={this.props.createComment}/> : ''}
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
      relevantContacts: this.state.relevantContacts,
      assigneePhone: this.state.assigneePhone,
      status: this.state.status,
      type: this.state.type,
      projectName: this.state.projectName
    };
    fieldsToUpdate.dueDate = this.state.dueDate || null;
    
    this.props.updateTask(this.props.selectedTask, fieldsToUpdate);
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
  getCommentList,
  getAuth,
  (comments, auth) => ({
    comments,
    auth
  })
);

const mapDispatchToProps = Object.assign(
  {},
);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TaskView); 

//export default TaskView;
