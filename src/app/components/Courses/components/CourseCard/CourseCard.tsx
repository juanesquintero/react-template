import React from 'react';
import './CourseCard.scss';
import { ICourse } from '../../Courses.types';
import Button from '@src/app/common/Button/Button';
import formatCreationDate from '@src/app/helpers/formatCreationDate';
import getCourseDuration from '@src/app/helpers/getCourseDuration';

const CourseCard: React.FC<ICourse> = (props: ICourse) => {
	return (
		<section className='course-card'>
			<div>
				<h5>{props.title}</h5>
				<p>{props.description}</p>
			</div>

			<div className='course-card-column'>
				<div>
					<strong>Authors:</strong>
					{props.authors.join(', ')}
				</div>
				<div>
					<strong>Duration:</strong>
					{getCourseDuration(props.duration)}
				</div>
				<div>
					<strong>Created:</strong>
					{formatCreationDate(props.creationDate)}
				</div>
				<Button
					text='Show course'
					style='outline-dark'
					icon='bi bi-eye'
					size='sm'
				/>
			</div>
		</section>
	);
};

export default CourseCard;
