import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import firebase from 'firebase/app';
import { configureStore } from './store';
import { Provider } from 'react-redux';

const store = configureStore();

firebase.initializeApp({
  apiKey: 'AIzaSyBou2JN1OTtXTQK9BODLbC-A2DRBY6hO8I',
  authDomain: 'ecommerce-3a95f.firebaseapp.com',
  projectId: 'ecommerce-3a95f',
  storageBucket: 'ecommerce-3a95f.appspot.com',
  messagingSenderId: '735531265955',
  appId: '1:735531265955:web:d4bc5be74b0941b9327416',
});

ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>,
  document.getElementById('root')
);
