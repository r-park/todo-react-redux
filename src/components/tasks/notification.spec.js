import { Simulate } from 'react-addons-test-utils';
import { createTestComponent } from 'test/utils';
import { Notification } from './notification';


describe('Notification', () => {
  let notification;
  let props;

  beforeEach(() => {
    props = {
      action: sinon.spy(),
      actionLabel: 'actionLabel',
      dismiss: sinon.spy(),
      display: true,
      message: 'message'
    };
  });

  afterEach(() => {
    // cleanup setTimeout
    notification.clearTimer();
  });


  describe('Mounting the component', () => {
    it('should invoke `startTimer()`', () => {
      sinon.spy(Notification.prototype, 'startTimer');
      notification = createTestComponent(Notification, props);

      expect(notification.startTimer.callCount).toBe(1);

      Notification.prototype.startTimer.restore();
    });
  });


  describe('Unmounting the component', () => {
    it('should invoke `clearTimer()`', () => {
      notification = createTestComponent(Notification, props);
      sinon.spy(notification, 'clearTimer');
      notification.componentWillUnmount();

      expect(notification.clearTimer.callCount).toBe(1);
    });
  });


  describe('Receiving new props', () => {
    it('should re-start the timer if props.display === true', () => {
      notification = createTestComponent(Notification, props);
      sinon.spy(notification, 'startTimer');
      notification.componentWillReceiveProps({display: true});

      expect(notification.startTimer.callCount).toBe(1);
    });

    it('should NOT re-start the timer if props.display === false', () => {
      notification = createTestComponent(Notification, props);
      sinon.spy(notification, 'startTimer');
      notification.componentWillReceiveProps({display: false});

      expect(notification.startTimer.callCount).toBe(0);
    });
  });


  describe('Starting timer', () => {
    it('should invoke `clearTimer()`', () => {
      notification = createTestComponent(Notification, props);
      sinon.spy(notification, 'clearTimer');
      notification.startTimer();

      expect(notification.clearTimer.callCount).toBe(1);
    });

    it('should clear pre-existing timer (if any)', () => {
      notification = createTestComponent(Notification, props);

      expect(notification.timerId).toBeDefined();

      let timerId = notification.timerId;
      notification.startTimer();

      expect(notification.timerId).not.toBe(timerId);
    });
  });


  describe('Expired timer', () => {
    it('should invoke `props.dismiss()`', done => {
      props.duration = 10;
      notification = createTestComponent(Notification, props);

      setTimeout(() => {
        expect(notification.props.dismiss.callCount).toBe(1);
        done();
      }, 10);
    });
  });


  describe('DOM', () => {
    describe('message', () => {
      it('should display `props.message`', () => {
        notification = createTestComponent(Notification, props);
        expect(notification.message.innerText).toEqual(props.message);
      });
    });

    describe('button', () => {
      it('should be labeled with `props.actionLabel`', () => {
        notification = createTestComponent(Notification, props);
        expect(notification.button.innerText).toEqual(props.actionLabel);
      });

      it('should invoke `props.action` onClick', () => {
        notification = createTestComponent(Notification, props);
        Simulate.click(notification.button);
        expect(notification.props.action.callCount).toBe(1);
      });
    });
  });
});
