'use strict';

const functions = require('firebase-functions');
const nodemailer = require('nodemailer');
const Firestore = require('@google-cloud/firestore');

// Max number of tasks per creator
const MAX_TASK_PER_CREATOR = 500;

// Limit the number of tasks by creator
exports.limitTasksPerCreatorFirestore = functions.firestore.document('/tasks/{taskId}').onCreate(event => {
  console.log("On create");
  const parentRef = event.data.ref.parent;
  const task = event.data.data();

  // If delete occur or this is an existing record or no creator
  if ( event.data.previous ||
      !event.data || !task ||
      !task.creator || !task.creator.id)
    return;

  const creatorId = task.creator.id;
  
  return parentRef.where('creator.id',"==", creatorId).get().then(snapshot => {
    
    if(snapshot.size >= MAX_TASK_PER_CREATOR) {
      return event.data.ref.delete();
    }
  });
});


//----------------SendEmail----------------

// Configure the email transport using the default SMTP transport and Mailgun.
// For other types of transports such as Sendgrid see https://nodemailer.com/transports/
// TODO: Configure the `from_email`, `send_notifications`, `email_api_key`, `email_domain` Google Cloud environment variables.
const shouldSendNotifications = encodeURIComponent(functions.config().send_notifications);
const fromEmail = encodeURIComponent(functions.config().email.from);
const emailApiKey = encodeURIComponent(functions.config().email.apikey);
const emailDomain = encodeURIComponent(functions.config().email.domain);

const emailAuth = {
  auth: {
      api_key: emailApiKey,
      domain: emailDomain
   }
 }

const mailTransport = nodemailer.createTransport(emailAuth);
const firestore = new Firestore();

exports.sendEmail = functions.firestore.document('/comments/{commentId}').onWrite(event => {
  
  if(!shouldSendNotifications) {
    console.log('send notifications turned off');
    return;
  }

  const comment = event.data.data();

  // Check for deleted comment
  if(!comment || !comment.taskId) {
    return
  }

  return firestore.collection('tasks').doc(comment.taskId).get().then( taskSnapshot => {
    const task = taskSnapshot.data();
    if(!task || !task.creator || !task.creator.email) {
      console.log('No email found');
      return;
    }

    const toEmail = task.creator.email;
    const mailOptions = {
      from: fromEmail,
      to: toEmail
    };
    
    const emailTemplate = `<h1>Comment updated</h1>.
      From: ${comment.creator.name}(${comment.creator.email}) <img src='${comment.creator.photoURL}'/><br/> 
      Body: ${comment.body} <br/>
      <a href='https://doocrate.midburnerot.com/task/${task.id}'>Click here to see the full task</a>
    `;
    
    const shortTitle = task.title.substr(0, 15);
    mailOptions.subject = `New comment - [${shortTitle}]`;
    mailOptions.text = emailTemplate;
    return mailTransport.sendMail(mailOptions).then(() => {
      console.log('email sent to:', toEmail);
    }).catch(error => {
      console.error('error sending mail:', error);  
    });
  }
)});