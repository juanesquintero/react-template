import React from 'react';
import './Home.scss';
import { HomeProps } from './Home.types';
import Logo from '@src/app/core/logo/Logo';
import { APP_FILE_PATH } from '@src/app/shared/constants';
import Link from '@src/app/core/link/Link';
import Counter from '@src/app/core/counter/Counter';

const Home: React.FC<HomeProps> = (props: HomeProps) => {
  return (
    <>
      <Logo app={{path: APP_FILE_PATH}}></Logo>
      <Link/>
      <br/>
      <Counter/>
    </>
  );
}

export default Home;
