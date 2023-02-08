import React from 'react';
import './SessionPanel.scss';
import Button from '@src/app/common/Button/Button';

const SessionPanel: React.FC = () => {
	return (
		<span className='session-panel'>
			<p className='session-panel__username'>User Name</p>
			<Button theme='light'>Login</Button>
		</span>
	);
};

export default SessionPanel;
