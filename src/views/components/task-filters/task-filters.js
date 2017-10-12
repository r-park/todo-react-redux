import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import TagsInput from 'react-tagsinput';

import { Redirect } from 'react-router';

import './task-filters.css';

class TaskFilters extends Component {
  constructor() {
    super(...arguments);
    this.state = {
      label: []
    };
    
    this.handleLabelChange = this.handleLabelChange.bind(this);
  }
  static propTypes = {
    onLabelChange: PropTypes.func.isRequired,
  }

  // Since react router doesn't support query we read it manually from the url
  getFilterQuery(location) {
    const params = new URLSearchParams(location.search);
    return params.get('filter');
  }

  render() {
    const showPlaceholder = !this.state.label || this.state.label.length == 0 ;
    const { filter } = this.props;
    return(
      <div className="task-filters">
      <ul>
        <li><NavLink isActive={(match, location) => this.getFilterQuery(location) === null} to='/task/1'>כל המשימות בעולם</NavLink></li>
        <li><NavLink isActive={(match, location) => this.getFilterQuery(location) === 'mine'} to={{ pathname: '/task/1', search: 'filter=mine'}}>המשימות שלי</NavLink></li>
        <li><NavLink isActive={(match, location) => this.getFilterQuery(location) === 'unassigned'} to={{ pathname: '/task/1', search: 'filter=unassigned'}}>משימות פנויות</NavLink></li>
        <li><NavLink isActive={(match, location) => this.getFilterQuery(location) === 'label'} to={{ pathname: '/task/1', search: 'filter=label'}}>משימות לפי תגית</NavLink></li>
      </ul>
      <TagsInput
        value={this.state.label}
        onChange={this.handleLabelChange}
        onlyUnique={true}
        className={'react-tagsinput-custom'}
        addOnBlur={true}
        renderInput={ this.autosizingRenderInput }
        inputProps={{ placeholder: showPlaceholder ? 'חפשי לפי תגית' : ''}}
      />
      </div>
    );
  }

  handleLabelChange(label) {
    this.setState({label, redirect: true});
    this.props.onLabelChange(label);
  }
}

TaskFilters.propTypes = {
  filter: PropTypes.object
};

export default TaskFilters;
