import React, { Component } from 'react';
import { List } from 'immutable';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createSelector } from 'reselect';

import { getSelectedTask } from 'src/tasks';

import './task-view.css';

export class TaskView extends Component {
  static propTypes = {
    selectTask: PropTypes.func.isRequired,
    createTask: PropTypes.func.isRequired,
    removeTask: PropTypes.func.isRequired,
    selectedTask: PropTypes.object.isRequired,
  };

  render() {
    const { selectedTask } = this.props;
    if(!selectedTask) {
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
          <h1>{selectedTask.title}</h1>
          <h2>{selectedTask.description}</h2>
          <h2>{selectedTask.circle}</h2>
          <h2>{selectedTask.label}</h2>
          <h2>{selectedTask.creatorSpecialComments}</h2>
          <h2>{selectedTask.communitySpecialComments}</h2>
          <h2>{selectedTask.relevantContacts}</h2>
          <h2>{selectedTask.assigneePhone}</h2>
          <h2>{selectedTask.status}</h2>
        </div>
      </div>
    );
  }
}


//=====================================
//  CONNECT
//-------------------------------------

const mapStateToProps = createSelector(
  getSelectedTask,
  (selectedTask) => ({
    selectedTask
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
