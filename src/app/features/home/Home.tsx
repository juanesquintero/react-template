import React from 'react';
import './Home.scss';
import { HomeProps } from './Home.types';
import Logo from '@src/app/core/logo/Logo';
import { APP_FILE_PATH } from '@src/app/shared/constants';
import Link from '@src/app/core/link/Link';
import Button from '@src/app/core/button/Button';

const Home: React.FC<HomeProps> = (props: HomeProps) => {
  return (
    <>
      <Logo app={{path: APP_FILE_PATH}}></Logo>
      <Link></Link>
      <Button></Button>
    </>
  );
}

export default Home;
