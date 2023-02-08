import React from 'react';
import './SessionPanel.scss';
import Button from '@src/app/common/Button/Button';

const SessionPanel: React.FC = () => {
	return (
		<span className='session-panel'>
			<p className='session-panel__username'>User Name</p>
			<Button text='Logout' style='dark' icon='bi bi-box-arrow-left'></Button>
		</span>
	);
};

export default SessionPanel;
