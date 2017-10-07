'use strict';

const functions = require('firebase-functions');

//const admin = require('firebase-admin');

//admin.initializeApp(functions.config().firebase);

// Max number of tasks per creator
const MAX_TASK_PER_CREATOR = 8;

// Limit the number of tasks by creator
exports.limitTasksPerCreatorFirestore = functions.firestore.document('/tasks/{taskId}').onCreate(event => {
  const parentRef = event.data.ref.parent;
  const task = event.data.data();

  // If delete occur or this is an existing record or no creator
  if ( event.data.previous ||
      !event.data || !task ||
      !task.creator || !task.creator.id)
    return;

  const creatorId = task.creator.id;
  console.log(creatorId);
  
  return parentRef.where('creator.id',"==", creatorId).get().then(snapshot => {
    console.log(snapshot);
    console.log(snapshot.size);
    
    if(snapshot.size >= MAX_TASK_PER_CREATOR) {
      return event.data.ref.delete();
    }
  });
});
