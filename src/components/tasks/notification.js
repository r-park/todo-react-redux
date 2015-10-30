import React, { Component, PropTypes } from 'react';


export class Notification extends Component {
  static propTypes = {
    action: PropTypes.func.isRequired,
    actionLabel: PropTypes.string.isRequired,
    dismiss: PropTypes.func.isRequired,
    display: PropTypes.bool.isRequired,
    duration: PropTypes.number,
    message: PropTypes.string.isRequired
  };

  componentDidMount() {
    this.startTimer();
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.display) {
      this.startTimer();
    }
  }

  componentWillUnmount() {
    this.clearTimer();
  }

  clearTimer() {
    if (this.timerId) {
      clearTimeout(this.timerId);
    }
  }

  startTimer() {
    this.clearTimer();
    this.timerId = setTimeout(() => {
      this.props.dismiss();
    }, this.props.duration || 5000);
  }

  render() {
    const {
      action,
      actionLabel,
      message
    } = this.props;

    return (
      <div className="notification">
        <p className="notification__message" ref="message">{message}</p>
        <button
          className="notification__button"
          onClick={action}
          ref="button"
          type="button">{actionLabel}</button>
      </div>
    );
  }
}
