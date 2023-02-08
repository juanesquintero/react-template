import React from 'react';
import './Header.scss';
import Logo from './components/Logo/Logo';
import SessionPanel from './components/SessionPanel/SessionPanel';

const Header: React.FC = () => {
	return (
		<header className='header'>
			<Logo></Logo>
			<SessionPanel />
		</header>
	);
};

export default Header;
