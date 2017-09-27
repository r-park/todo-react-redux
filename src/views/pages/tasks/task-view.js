import React, { Component } from 'react';
import { List } from 'immutable';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createSelector } from 'reselect';

import { getSelectedTask } from 'src/tasks';

export class TaskView extends Component {
  static propTypes = {
    selectTask: PropTypes.func.isRequired,
    createTask: PropTypes.func.isRequired,
    removeTask: PropTypes.func.isRequired,
    selectedTask: PropTypes.object.isRequired,
  };

  render() {
    const { selectedTask } = this.props;
    return (
      <div className="g-row">
        <div className="g-col">
          <p>Task view</p>
          {selectedTask}
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
