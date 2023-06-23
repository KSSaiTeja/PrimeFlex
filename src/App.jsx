import React from 'react';
import logo from './logo.svg';
import './App.css';

import { GoogleOAuthProvider } from '@react-oauth/google';
import Google from './google';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />

        <GoogleOAuthProvider clientId="753907835501-hl24mcgefef8gt3qhc09lfcpiu8bummi.apps.googleusercontent.com">
          <Google />
        </GoogleOAuthProvider>
      </header>
    </div>
  );
}

export default App;