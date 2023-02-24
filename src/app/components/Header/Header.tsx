import React from 'react';
import './Header.scss';
import Logo from './components/Logo/Logo';
import SessionPanel from './components/SessionPanel/SessionPanel';
import { useLocation } from 'react-router-dom';
import { LOGGEDIN_ROUTES } from '@src/app/constants';

const Header: React.FC = () => {
	const currentPath = useLocation().pathname.replace('/', '');

	return (
		<header className='header'>
			<Logo></Logo>
			{LOGGEDIN_ROUTES.includes(currentPath) ? null : <SessionPanel />}
		</header>
	);
};

export default Header;
