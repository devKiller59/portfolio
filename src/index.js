import React from 'react';
import ReactDOM from 'react-dom/client';
import './assets/styles/index.css';
import App from './App';
import { I18nextProvider } from 'react-i18next';
import i18next from 'i18next';

import global_es from './assets/translations/es/global.json';
import global_en from './assets/translations/en/global.json';

i18next.init({
  interpolation: { escapeValue: false },
  lng: 'es',
  resources: {
    es: {
      global: global_es,
    },
    en: {
      global: global_en,
    }
  }
});

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <I18nextProvider i18n={i18next}>
      <App />
    </I18nextProvider>
  </React.StrictMode>
);