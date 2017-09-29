import React, { Component } from 'react';
import { List } from 'immutable';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createSelector } from 'reselect';

import { getSelectedTask } from 'src/tasks';

import './task-view.css';
import Icon from '../icon';

export class TaskView extends Component {
  constructor() {
    super(...arguments);

    this.state = {
      title: '',
      description: '',
      circle: '',
      label: '',
      creatorSpecialComments: '',
      communitySpecialComments: '',
      relevantContacts: '',
      assigneePhone: '',
      status: ''
    }

    this.stopEditing = this.handleKeyUp.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  static propTypes = {
    selectTask: PropTypes.func.isRequired,
    updateTask: PropTypes.func.isRequired,
    removeTask: PropTypes.func.isRequired,
    selectedTask: PropTypes.object.isRequired,
  };

  componentWillReceiveProps(nextProps) {
    if(nextProps.task) {
      let { title, description, circle,
        label, creatorSpecialComments, communitySpecialComments,
        relevantContacts,
        assigneePhone, status } = nextProps.task;
      this.setState({
        title: title || '',
        description:description || '',
        circle:circle || '',
        label:label || '',
        creatorSpecialComments:creatorSpecialComments || '',
        communitySpecialComments: communitySpecialComments || '',
        relevantContacts:relevantContacts || '',
        assigneePhone:assigneePhone || '',
        status:status || ''
      });
    }
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

    return (
      <div className="task-view g-row">
        <div className="g-col">
        <form className="task-form" onSubmit={this.handleSubmit} noValidate>
          {this.renderInput(task, 'title', 'שם המשימה')}
          {this.renderInput(task, 'description', 'תאור המשימה')}
          {this.renderInput(task, 'circle', 'מעגל')}
          <div><Icon name="label_outline" /> {this.renderInput(task, 'label', 'תגיות')} </div>
          {this.renderInput(task, 'creatorSpecialComments', 'הערות מיוחדות מהיוצר')}
          {this.renderInput(task, 'communitySpecialComments', 'הערות מהקהילה')}
          {this.renderInput(task, 'relevantContacts', 'אנשי קשר רלוונטיים')}
          {this.renderInput(task, 'assigneePhone', 'טלפון ממלא המשימה')}
          {this.renderInput(task, 'status', 'סטטוס המשימה')}
          <input className='btn button button-small' type="submit" value="שמור" />
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
        onChange={this.handleChange} />
    );
  }

  stopEditing() {
    this.setState({editing: false});
  }

  handleChange(e) {
    let fieldName = e.target.name;
    this.setState({
      [fieldName]: e.target.value
    });
  }

  handleKeyUp(event) {
    if (event.keyCode === 13) {
      this.save(event);
    }
    else if (event.keyCode === 27) {
      this.stopEditing();
    }
  }

  handleSubmit(event) {
    event.preventDefault();
    this.props.updateTask(this.props.task,
      {
        title: this.state.title,
        description: this.state.description,
        circle: this.state.circle,
        label: this.state.label,
        creatorSpecialComments: this.state.creatorSpecialComments,
        communitySpecialComments: this.state.communitySpecialComments,
        relevantContacts: this.state.relevantContacts,
        assigneePhone: this.state.assigneePhone,
        status: this.state.status,
      });
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
