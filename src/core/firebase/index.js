import 'firebase';
import { FIREBASE_CONFIG } from 'src/config';


export const firebaseApp = firebase.initializeApp(FIREBASE_CONFIG);
export const firebaseAuth = firebaseApp.auth();
export const firebaseDb = firebaseApp.database();
