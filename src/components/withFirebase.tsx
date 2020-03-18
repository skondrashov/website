import React from 'react';
import app from 'firebase/app';
import 'firebase/firestore';

const config = {
  apiKey: "AIzaSyDMKvpiVwDzXDU57d_U9f3YSovb4e502zg",
  authDomain: "website-267000.firebaseapp.com",
  databaseURL: "https://website-267000.firebaseio.com",
  projectId: "website-267000",
  storageBucket: "website-267000.appspot.com",
  messagingSenderId: "179489860140",
  appId: "1:179489860140:web:6d9c19fa6e7ad1bbcdbf89",
  measurementId: "G-N2D25MN2LC"
};

class Firebase {
  db: app.firestore.Firestore;
  constructor() {
    app.initializeApp(config);
    this.db = app.firestore();
  }
};
const FirebaseContext = React.createContext({} as Firebase);

export const provideFirebase = (WrappedComponent: React.ComponentType) =>
  () =>
    <FirebaseContext.Provider value={new Firebase()}>
      <WrappedComponent/>
    </FirebaseContext.Provider>
  ;
;
export const consumeFirebase = (
  WrappedComponent: React.ComponentType<{db: app.firestore.Firestore}>
) =>
  () =>
    <FirebaseContext.Consumer>
      {firebase => <WrappedComponent db={firebase.db}/>}
    </FirebaseContext.Consumer>
  ;
;
