import React from 'react';
import './SessionPanel.scss';
import Button from '@src/app/common/Button/Button';
import { useNavigate } from 'react-router-dom';

const SessionPanel: React.FC = () => {
	const navigate = useNavigate();

	const logout = () => {
		localStorage.removeItem('token');
		navigate('/login');
	};

	return (
		<span className='session-panel'>
			<p className='session-panel__username'>User Name</p>
			<Button
				text='Logout'
				style='dark'
				icon='box-arrow-left'
				onClick={logout}
			/>
		</span>
	);
};

export default SessionPanel;
