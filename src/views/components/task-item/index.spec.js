import { Simulate } from 'react-addons-test-utils';
import { createTestComponent } from 'test/utils';
import { Task } from 'src/core/tasks';
import TaskItem from './index';


describe('TaskItem', () => {
  let task;
  let taskItem;


  beforeEach(() => {
    task = new Task({completed: true, title: 'test'});

    taskItem = createTestComponent(TaskItem, {
      task,
      deleteTask: sinon.spy(),
      updateTask: sinon.spy()
    });
  });


  describe('Instantiation:', () => {
    it('should initialize #state.editing to be false', () => {
      expect(taskItem.state.editing).toEqual(false);
    });

    it('should initialize #props.task with a Task instance', () => {
      expect(taskItem.props.task instanceof Task).toBe(true);
    });
  });


  describe('Component methods:', () => {
    describe('#delete', () => {
      it('should call #taskActions.deleteTask', () => {
        taskItem.delete();
        expect(taskItem.props.deleteTask.callCount).toEqual(1);
        expect(taskItem.props.deleteTask.calledWith(taskItem.props.task)).toEqual(true);
      });
    });

    describe('#editTitle', () => {
      it('should set #state.editing to `true`', () => {
        taskItem.editTitle();
        expect(taskItem.state.editing).toEqual(true);
      });
    });

    describe('#stopEditing', () => {
      it('should set #state.editing to `false`', () => {
        taskItem.state.editing = true;
        taskItem.stopEditing();
        expect(taskItem.state.editing).toEqual(false);
      });
    });

    describe('#saveTitle', () => {
      it('should do nothing if not editing', () => {
        taskItem.stopEditing = sinon.spy();
        taskItem.state.editing = false;
        taskItem.saveTitle();
        expect(taskItem.stopEditing.callCount).toEqual(0);
      });

      it('should set #state.editing to `false`', () => {
        taskItem.state.editing = true;
        taskItem.saveTitle({
          target: {value: ''}
        });
        expect(taskItem.state.editing).toEqual(false);
      });

      it('should call #taskActions.updateTask', () => {
        taskItem.state.editing = true;
        taskItem.saveTitle({
          target: {value: 'foo'}
        });
        expect(taskItem.props.updateTask.callCount).toEqual(1);
        expect(taskItem.props.updateTask.args[0][0]).toEqual(task);
        expect(taskItem.props.updateTask.args[0][1].title).toEqual('foo');
      });
    });

    describe('#toggleStatus', () => {
      it('should call #taskActions.updateTask', () => {
        taskItem.toggleStatus({
          target: {checked: true}
        });

        expect(taskItem.props.updateTask.callCount).toEqual(1);
      });

      it('should toggle task.complete', () => {
        taskItem.toggleStatus();
        expect(taskItem.props.updateTask.args[0][1].completed).toEqual(!task.completed);
      });
    });

    describe('#onKeyUp', () => {
      describe('with enter key', () => {
        it('should call #saveTitle with event object', () => {
          taskItem.saveTitle = sinon.spy();
          taskItem.onKeyUp({keyCode: 13});
          expect(taskItem.saveTitle.callCount).toEqual(1);
        });
      });

      describe('with escape key', () => {
        it('should set #state.editing to `false`', () => {
          taskItem.state.editing = true;
          taskItem.onKeyUp({keyCode: 27});
          expect(taskItem.state.editing).toEqual(false);
        });
      });
    });
  });


  describe('DOM', () => {
    describe('`click` event triggered on toggle-status button', () => {
      it('should call #toggleStatus()', () => {
        taskItem.toggleStatus = sinon.spy();
        taskItem.setState({editing: true});
        Simulate.click(taskItem.toggleStatusButton);
        expect(taskItem.toggleStatus.callCount).toEqual(1);
      });
    });


    describe('title', () => {
      it('should be rendered as a text input field when editing', () => {
        taskItem.setState({editing: true});
        let element = taskItem.titleInput;
        expect(element.tagName).toEqual('INPUT');
      });

      it('should be rendered as text when not editing', () => {
        taskItem.setState({editing: false});
        let element = taskItem.titleText;
        expect(element.innerText).toEqual(task.title);
      });
    });


    describe('`blur` event triggered on text field', () => {
      it('should call #saveTitle()', () => {
        taskItem.saveTitle = sinon.spy();
        taskItem.setState({editing: true});
        Simulate.blur(taskItem.titleInput);
        expect(taskItem.saveTitle.callCount).toEqual(1);
      });

      it('should toggle visibility of text field and task title', () => {
        taskItem.setState({editing: true});
        Simulate.blur(taskItem.titleInput);
        expect(taskItem.titleInput).toBe(null);
        expect(taskItem.titleText).toBeDefined();
      });
    });


    describe('`keyup` event triggered with enter key on text field', () => {
      it('should call #saveTitle()', () => {
        taskItem.saveTitle = sinon.spy();
        taskItem.setState({editing: true});
        Simulate.keyUp(taskItem.titleInput, {keyCode: 13});
        expect(taskItem.saveTitle.callCount).toEqual(1);
      });

      it('should toggle visibility of text field and task title', () => {
        taskItem.setState({editing: true});
        Simulate.keyUp(taskItem.titleInput, {keyCode: 13});
        expect(taskItem.titleInput).toBe(null);
        expect(taskItem.titleText).toBeDefined();
      });
    });


    describe('`keyup` event triggered with escape key on text field', () => {
      it('should call #stopEditing()', () => {
        taskItem.stopEditing = sinon.spy();
        taskItem.setState({editing: true});
        Simulate.keyUp(taskItem.titleInput, {keyCode: 27});
        expect(taskItem.stopEditing.callCount).toEqual(1);
      });

      it('should toggle visibility of text field and task title', () => {
        taskItem.setState({editing: true});
        Simulate.keyUp(taskItem.titleInput, {keyCode: 27});
        expect(taskItem.titleInput).toBe(null);
        expect(taskItem.titleText).toBeDefined();
      });
    });


    describe('`click` event triggered on edit button', () => {
      it('should display text field', () => {
        Simulate.click(taskItem.editButton);
        expect(taskItem.titleInput).toBeDefined();
      });

      it('should hide task title', () => {
        Simulate.click(taskItem.editButton);
        expect(taskItem.titleText).toBe(null);
      });
    });


    describe('`click` event triggered on delete button', () => {
      it('should call #delete()', () => {
        taskItem.delete = sinon.spy();
        taskItem.setState({editing: true});
        Simulate.click(taskItem.deleteButton);
        expect(taskItem.delete.callCount).toEqual(1);
      });
    });
  });
});
