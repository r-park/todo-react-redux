import React from 'react';
import PropTypes from 'prop-types';
import Button from '../button';
import Icon from '../icon';
import Img from 'react-image';

import './task-view-header.css';

const TaskViewHeader = ({ task, isUserCreator, selectTask, assignTask, removeTask}) => {
  const isTaskEmpty = !task.description &&
  !task.circle && !task.status;
  return (
    <div className='task-view-header' name='task-view-header'>
    
      <Button className='button-no-border close-button' onClick={ () => selectTask() }>
        <Icon name='close' className='close-icon grow' />
      </Button>
          
      {!task.assignee ? <Button
        className='button button-small action-button assign_task'
        onClick={()=>assignTask(task)}
        type='button'>קח אחריות על משימה זו</Button> : 
        
        <div className='avatar-container'>
          <Img className='avatar' src={task.assignee.photoURL}/>
          <span>{task.assignee.name}</span>
        </div>}
          
        { isTaskEmpty && isUserCreator ?
        <Button
          className='action-button delete_task'
          onClick={()=> { removeTask(task); selectTask(); }}
          type='button'>מחק משימה</Button> : '' }
        
    </div>
  )
};

TaskViewHeader.propTypes = {
  selectTask: PropTypes.func.isRequired,
  assignTask: PropTypes.func.isRequired,
  removeTask: PropTypes.func.isRequired,
  task: PropTypes.object.isRequired,
  isUserCreator: PropTypes.bool.isRequired
};


export default TaskViewHeader;
