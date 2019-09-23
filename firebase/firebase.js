import firebase from 'firebase';
require('firebase/firestore');
import config from './config';

firebase.initializeApp(config);
export const db = firebase.firestore();

