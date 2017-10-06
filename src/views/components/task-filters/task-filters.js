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

  render() {
    if (this.state.redirect) {
      this.setState({redirect: false});
      return <Redirect push to={ "?filter=label&text=" + this.state.label }/>;
    }
    
    const showPlaceholder = !this.state.label || this.state.label.length == 0 ;
    const { filter } = this.props;
    return(
      <div  className="task-filters">
      <ul>
        <li><NavLink isActive={() => !filter || !filter.name} to="/">כל המשימות בעולם</NavLink></li>
        <li><NavLink isActive={() => filter.name === 'mine'} to={{pathname: '/', search: '?filter=mine'}}>המשימות שלי</NavLink></li>
        <li><NavLink isActive={() => filter.name === 'unassigned'} to={{pathname: '/', search: '?filter=unassigned'}}>משימות פנויות</NavLink></li>
        <li><NavLink isActive={() => filter.name === 'label'} to={{pathname: '/', search: '?filter=label&text=' + this.state.label }}>משימות לפי תגית</NavLink></li>
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
  }
}

TaskFilters.propTypes = {
  filter: PropTypes.object
};

export default TaskFilters;
