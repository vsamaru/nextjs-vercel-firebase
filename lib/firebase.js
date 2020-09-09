import admin from 'firebase-admin';

try {
  admin.initializeApp({
    apiKey: "AIzaSyCKH5LLzabIIhwJTwMSgkZyEPHlcBjejW0",
    authDomain: "jiijii.firebaseapp.com",
    databaseURL: "https://jiijii.firebaseio.com",
    projectId: "jiijii",
    storageBucket: "jiijii.appspot.com",
    messagingSenderId: "1079817905260",
    appId: "1:1079817905260:web:90cd407ddb7a86431a2449"
  }),
    databaseURL: 'https://jiijii.firebaseio.com'
  });
} catch (error) {
  /*
   * We skip the "already exists" message which is
   * not an actual error when we're hot-reloading.
   */
  if (!/already exists/u.test(error.message)) {
    // eslint-disable-next-line no-console
    console.error('Firebase admin initialization error', error.stack);
  }
}

export default admin.firestore();
