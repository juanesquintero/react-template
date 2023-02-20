import React from 'react';
import './Courses.scss';
import CourseCard from './components/CourseCard/CourseCard';
import { mockedCoursesList } from './Courses.mock';
import SearchBar from './components/SearchBar/SearchBar';

const Courses: React.FC = () => {
	return (
		<section>
			<SearchBar></SearchBar>
			{mockedCoursesList.map((course) => (
				<div key={course.id} className='courses__item'>
					<CourseCard {...course}></CourseCard>
				</div>
			))}
		</section>
	);
};

export default Courses;
