import React from 'react';
import CourseCard from './components/CourseCard/CourseCard';
import { mockedCoursesList } from './Courses.mock';

const Courses: React.FC = () => {
	return (
		<section>
			{mockedCoursesList.map((course) => (
				<CourseCard {...course}></CourseCard>
			))}
		</section>
	);
};

export default Courses;
