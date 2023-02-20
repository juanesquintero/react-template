import { APP_NAME } from '@src/app/constants';
import React from 'react';
import './Logo.scss';

const Logo: React.FC = () => {
	return (
		<span className='logo'>
			<img src='./logo.png' alt='logo' width='45' height='45'></img>
			<h5 className='logo__title'>{APP_NAME.toUpperCase()}</h5>
		</span>
	);
};

export default Logo;
