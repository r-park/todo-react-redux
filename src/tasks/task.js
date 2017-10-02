import { Record } from 'immutable';


export const Task = new Record({
  key: null,
  title: null,
  assignee: null,
  circle: null,
  label: { }, //TODO: perhaps null is better here
  createdDate: null,
  dueDate: null,
  creator: null,
  description: null,
  creatorSpecialComments: null,
  communitySpecialComments: null,
  relevantContacts: null,
  assigneePhone: null, //TODO: might be better to put under user
  status: null,
});
