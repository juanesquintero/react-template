import React from 'react';
import './Link.scss';
import { useTranslation } from 'react-i18next';

const Logo: React.FC = () =>{ 
  const {t} = useTranslation();

  return (
    <>
      <a
        className="link"
        href="https://reactjs.org"
        target="_blank"
        rel="noopener noreferrer"
      >
        {t('home.learn_react')}
      </a>
    </>
  );
}

export default Logo;
