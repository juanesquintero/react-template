import React from 'react';
import '@app/App.scss';
import Header from './components/Header/Header';
import { Outlet } from 'react-router-dom';

const App: React.FC = () => {
	return (
		<section className='app'>
			<Header />
			<main className='app__content'>
				<main className='app__content-section'>
					<Outlet />
				</main>
			</main>
			<footer></footer>
		</section>
	);
};

export default App;
