import React, { Component } from 'react';
import { ReactDom } from 'react-dom';
import { List } from 'immutable';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createSelector } from 'reselect';
import { getAuth } from 'src/auth';

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

  componentWillMount() {
    this.updateStateByProps(this.props);
  }

  updateStateByProps(props) {
    let nextSelectedTask = props.selectedTask || {};
    let { id, title, description, circle, type, projectName,
      label, relevantContacts,
      assigneePhone, status, dueDate, createdDate } = nextSelectedTask;
    
      // this checks if we got another task, or we're updating the same one
      if (id != this.state.id) {
        const labelAsArray = label ?
          (Object.keys(label).map( l => { return l })) : [];

        this.setState({
          id: id || '',
          title: title || '',
          description:description || '',
          circle:circle || '',
          label: labelAsArray || [],
          relevantContacts:relevantContacts || '',
          assigneePhone:assigneePhone || '',
          status: status || '',
          createdDate: createdDate || '',
          dueDate: dueDate || null,
          type: type || '',
          projectName: projectName || '',
        });
      }
  }

  componentWillReceiveProps(nextProps) {
    // TODO - check this maybe called several times now that we use comments
    this.updateStateByProps(nextProps);
  }

  render() {
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
    const isUserAssignee = task.assignee && task.assignee.id == this.props.auth.id;
    const isCreatorOrAssignee = isUserCreator || isUserAssignee;

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
            {this.renderInput(task, 'title', 'שם המשימה', isCreatorOrAssignee)}
            {this.renderInput(task, 'projectName', 'שם הפרוייקט (במידה ומדובר במחנה נושא או מיצב אמנות)', isCreatorOrAssignee)}
            {this.renderTextArea(task, 'description', 'תאור המשימה', isCreatorOrAssignee)}
            {this.renderSelect(task, 'circle', 'מעגל', this.state.defaultCircle, isCreatorOrAssignee)}
            <div><Icon className='label' name='label_outline' /> {this.renderLabel(isCreatorOrAssignee)} </div>
            { this.renderSelect(task, 'type', 'סוג המשימה', this.state.defaultType, isCreatorOrAssignee)}
            {this.renderTextArea(task, 'relevantContacts', 'אנשי קשר רלוונטיים', isCreatorOrAssignee)}
            {this.renderInput(task, 'assigneePhone', 'טלפון ממלא המשימה', isCreatorOrAssignee)}
            {this.renderTextArea(task, 'status', 'סטטוס המשימה', isCreatorOrAssignee)}
            {isCreatorOrAssignee ? <input className='button button-small button-save' type="submit" value="שמור" /> : ''}
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
  
  renderSelect(task, fieldName, placeholder, options, isEditable) {
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
      searchable={ false }
      disabled = { !isEditable }/>
  );
  }

  renderInput(task, fieldName, placeholder, isEditable) {
    const classNames = isEditable ? ' editable' : ''
    return (
        <input
        className={`changing-input${classNames}`}
        type = 'text'
        name = { fieldName }
        value = { this.state[fieldName] }
        placeholder = { placeholder }
        ref = { e => this[fieldName+'Input'] = e }
        onChange = { this.handleChange }
        onBlur = { this.handleSubmit } 
        disabled = { !isEditable } />
    );
  }

  renderTextArea(task, fieldName, placeholder, isEditable) {
    const classNames = isEditable ? ' editable' : ''
    return (
        <Textarea
        className={`changing-input${classNames}`}
        name={fieldName}
        value={this.state[fieldName]}
        placeholder={placeholder}
        ref={e => this[fieldName+'Input'] = e}
        onChange={this.handleChange}
        onBlur={this.handleSubmit}
        disabled = { !isEditable } />
    );
  }

  renderLabel(isEditable) {
    const showPlaceholder = !this.state.label || this.state.label.length == 0 ;
    const classNames = isEditable ? ' editable' : ''
    return (
      <TagsInput className={`react-tagsinput-changing${classNames}`}
      value={this.state.label}
      onChange={this.handleLabelChange}
      onlyUnique={true}
      addOnBlur={true}
      inputProps={{ placeholder: showPlaceholder ? 'הכנס תגיות. לחץ על Enter בין תגית לתגית' : ''}}
      disabled = { !isEditable }
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
