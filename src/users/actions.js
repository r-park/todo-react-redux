import firebase from 'firebase';
import firebaseDb from 'firebase';

import { firebaseAuth } from 'src/firebase';

function getUserById(uid) {
  return firebaseDb.ref('/users/' + userId).once('name');
}
