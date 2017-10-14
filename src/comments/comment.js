import { Record } from 'immutable';


export const Comment = new Record({
  id: null,
  taskId: null,
  created: new Date(),
  creator: null,
  body: null
});
