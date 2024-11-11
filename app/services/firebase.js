import Service from '@ember/service';
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyC2iTmqnrlSU0sZc70NblQRu9rA4S1E7hg",
  authDomain: "ember-test2-4eb6c.firebaseapp.com",
  projectId: "ember-test2-4eb6c",
  storageBucket: "ember-test2-4eb6c.firebasestorage.app",
  messagingSenderId: "211230990174",
  appId: "1:211230990174:web:8e70b1f45e17f93247f9cf"
};

export default class FirebaseService extends Service {
  app = initializeApp(firebaseConfig);
  db = getFirestore(this.app);
}
