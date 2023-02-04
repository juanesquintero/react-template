import React from 'react';
import logo from '@assets/logo.svg';
import '@app/App.scss';
import { useTranslation } from 'react-i18next';

function App() {
  const { t } = useTranslation();
  return (
    <div className="app">
      <header className="app-header">
        <img src={logo} className="app-logo" alt="logo" />
        <p>
          {t('home.edit_and_save')}
        </p>
        <a
          className="app-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          {t('home.learn_react')}
        </a>
      </header>
    </div>
  );
}

export default App;
