import React from 'react';
import './CourseCard.scss';
import { ICourse } from '../../Courses.types';
import Button from '@src/app/common/Button/Button';
import formatCreationDate from '@src/app/helpers/formatCreationDate';
import getCourseDuration from '@src/app/helpers/getCourseDuration';

const CourseCard: React.FC<ICourse> = ({
	id,
	title,
	description,
	authors,
	duration,
	creationDate,
}: ICourse) => {
	return (
		<section className='course-card'>
			<div>
				<h5>{title}</h5>
				<p>{description}</p>
			</div>

			<div className='course-card-column'>
				<div>
					<strong>Authors:</strong>
					{authors.join(', ')}
				</div>
				<div>
					<strong>Duration:</strong>
					{getCourseDuration(duration)}
				</div>
				<div>
					<strong>Created:</strong>
					{formatCreationDate(creationDate)}
				</div>
				<Button
					text='Show course'
					style='outline-dark'
					icon='eye'
					size='sm'
					className='mt-3'
				/>
			</div>
		</section>
	);
};

export default CourseCard;
