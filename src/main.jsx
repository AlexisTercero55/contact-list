import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import { ProfileContextProvider } from './context/ProfileContext';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ProfileContextProvider>
      <App />
    </ProfileContextProvider>
  </React.StrictMode>,
)
