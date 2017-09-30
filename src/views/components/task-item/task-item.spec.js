import React from 'react';
import { mount } from 'enzyme';
import sinon from 'sinon';
import { Task } from 'src/tasks';
import { createTestComponent } from 'src/utils/create-test-component';
import TaskItem from './task-item';


describe('TaskItem', () => {
  let props;
  let task;


  beforeEach(() => {
    task = new Task({completed: true, title: 'test'});

    props = {
      task,
      removeTask: sinon.spy(),
      updateTask: sinon.spy()
    };
  });


  describe('component', () => {
    let taskItem;

    beforeEach(() => {
      taskItem = createTestComponent(TaskItem, props);
    });


    describe('instantiation', () => {
      it('should initialize #props.task with a Task instance', () => {
        expect(taskItem.props.task instanceof Task).toBe(true);
      });
    });
  });

});
