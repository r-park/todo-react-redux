import { DISMISS_NOTIFICATION, SHOW_ERROR } from './action-types';


export function dismissNotification() {
  return {
    type: DISMISS_NOTIFICATION
  };
}

export function showError(message) {
  return {
    type: SHOW_ERROR,
    payload: message
  };
}