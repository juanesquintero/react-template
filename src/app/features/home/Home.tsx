import React from 'react';
import logo from '@assets/logo.svg';
import './Home.scss';
import { Trans, useTranslation } from 'react-i18next';
import { HomeProps } from './Home.types';

const Home: React.FC<HomeProps> = (props: HomeProps) => {
  const { t } = useTranslation();
  return (
    <>
      <img src={logo} className="home-logo" alt="logo" />
      <p>
        <Trans i18nKey='home.edit_and_save' values={{path: props.app?.path}} />
      </p>
      <a
        className="home-link"
        href="https://reactjs.org"
        target="_blank"
        rel="noopener noreferrer"
      >
        {t('home.learn_react')}
      </a>
    </>
  );
}

export default Home;
