import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import './i18n'; // Import your i18n configuration
import { I18nextProvider } from 'react-i18next';
import i18n from './i18n'; // Import the configured i18n instance
import { BrowserRouter } from 'react-router-dom';

ReactDOM.render(
  <React.StrictMode>
     <BrowserRouter>
    <I18nextProvider i18n={i18n}>
      <App />
    </I18nextProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
