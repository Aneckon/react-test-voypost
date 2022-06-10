import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';

const firebaseConfig = {
  apiKey: 'AIzaSyBDbszjQ6mIIYAgHlaLKXWfP_nY4Fgoq0w',
  authDomain: 'clean-technique-322512.firebaseapp.com',
  projectId: 'clean-technique-322512',
  storageBucket: 'clean-technique-322512.appspot.com',
  messagingSenderId: '329209152826',
  appId: '1:329209152826:web:d194207b654cd0c88bbc03',
  measurementId: 'G-LK3Y4FL44K',
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
