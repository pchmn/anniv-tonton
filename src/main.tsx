import App from '@app/App';
import { MantineProvider, TypographyStylesProvider } from '@mantine/core';
import { NotificationsProvider } from '@mantine/notifications';
import { initializeApp } from 'firebase/app';
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyCMIk653Cbvxy8sprAFFSEnR0VyBBJ3lps',
  authDomain: 'anniv-tonton.firebaseapp.com',
  projectId: 'anniv-tonton',
  storageBucket: 'anniv-tonton.appspot.com',
  messagingSenderId: '118446865248',
  appId: '1:118446865248:web:68c8fc0fd594be536bbc05'
};

// Initialize Firebase
initializeApp(firebaseConfig);

ReactDOM.render(
  <React.StrictMode>
    <MantineProvider theme={{ colorScheme: 'dark', primaryColor: 'cyan' }}>
      <TypographyStylesProvider>
        <NotificationsProvider>
          <App />
        </NotificationsProvider>
      </TypographyStylesProvider>
    </MantineProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
