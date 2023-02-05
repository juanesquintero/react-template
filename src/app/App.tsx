import React from 'react';
import logo from '@assets/logo.svg';
import '@app/App.scss';
import { Trans, useTranslation } from 'react-i18next';

function App() {
  const { t } = useTranslation();
  return (
    <div className="app">
      <header className="app-header">
        <img src={logo} className="app-logo" alt="logo" />
        <p>
          <Trans i18nKey='home.edit_and_save' values={{path: 'src/app/App.tsx'}} />
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
