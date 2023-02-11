import React from 'react';
import '@app/App.scss';
import Header from './components/Header/Header';
import Courses from './components/Courses/Courses';

const App: React.FC = () => {
	return (
		<section>
			<Header />
			<Courses></Courses>
		</section>
	);
};

export default App;
