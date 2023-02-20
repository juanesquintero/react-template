import React from 'react';
import '@app/App.scss';
import Header from './components/Header/Header';
import Courses from './components/Courses/Courses';
import CreateCourse from './components/CreateCourse/CreateCourse';

const App: React.FC = () => {
	return (
		<section className='app'>
			<Header />
			<main className='app__content'>
				<div className='app__content-section'>
					<Courses />
					<br />
					<CreateCourse />
				</div>
			</main>
			<footer></footer>
		</section>
	);
};

export default App;
