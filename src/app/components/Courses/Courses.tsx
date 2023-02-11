import React from 'react';
import './Courses.scss';
import CourseCard from './components/CourseCard/CourseCard';
import { mockedCoursesList } from './Courses.mock';

const Courses: React.FC = () => {
	return (
		<section>
			{mockedCoursesList.map((course) => (
				<div className='courses__item'>
					<CourseCard {...course}></CourseCard>
				</div>
			))}
		</section>
	);
};

export default Courses;
