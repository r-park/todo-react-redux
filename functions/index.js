'use strict';

const functions = require('firebase-functions');

// Max number of tasks per creator
const MAX_TASK_PER_CREATOR = 8;

// Limit the number of tasks by creator
exports.limitTasksPerCreator = functions.database.ref('/tasks/{taskId}').onWrite(event => {
  const parentRef = event.data.ref.parent;
  const task = event.data.val();

  // If delete occur or this is an existing record or no creator
  if ( event.data.previous.exists() ||
      !event.data.exists() || !task ||
      !task.creator || !task.creator.id)
    return;

  const creatorId = task.creator.id;
  console.log(creatorId);
  return parentRef.orderByChild('creator/id').equalTo(creatorId).on('value', snapshot => {
    console.log(snapshot.numChildren());
    if(snapshot.numChildren() >= MAX_TASK_PER_CREATOR) {
      return parentRef.child(event.data.key).remove();
    }
  });
});
