import React from 'react';
import logo from '@assets/logo.svg';
import './Logo.scss';
import { Trans } from 'react-i18next';
import { LogoProps, LogoState } from './Logo.types';

class Logo extends React.Component<LogoProps, LogoState> {
  
  constructor(props: LogoProps) {
    super(props);
    this.state = {
      path: props.app?.path
    };
  }

   handleChangePath = (newPath: string) => {
    this.setState((state) => {
      return {path: newPath}
    });
  }

  render () {
    return (
      <>
        <img src={logo} className="logo" alt="logo" />
        <p>
          <Trans i18nKey='home.edit_and_save' values={{path: this.state.path}} />
        </p>
      </>
    );
  }
}

export default Logo;
