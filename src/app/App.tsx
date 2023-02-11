import React from 'react';
import '@app/App.scss';
import Header from './components/Header/Header';
import Courses from './components/Courses/Courses';

const App: React.FC = () => {
	return (
		<section className='app'>
			<Header />
			<main className='app__content'>
				<div className='app__content-section'>
					<Courses></Courses>
				</div>
			</main>
			<footer></footer>
		</section>
	);
};

export default App;
