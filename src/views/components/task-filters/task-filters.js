import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

import './task-filters.css';


const TaskFilters = ({filter}) => (
  <ul className="task-filters">
    <li><NavLink isActive={() => !filter} to="/">כל המשימות בעולם</NavLink></li>
    <li><NavLink isActive={() => filter === 'mine'} to={{pathname: '/', search: '?filter=mine'}}>המשימות שלי</NavLink></li>
    <li><NavLink isActive={() => filter === 'unassigned'} to={{pathname: '/', search: '?filter=unassigned'}}>משימות פנויות</NavLink></li>
  </ul>
);

TaskFilters.propTypes = {
  filter: PropTypes.string
};


export default TaskFilters;
