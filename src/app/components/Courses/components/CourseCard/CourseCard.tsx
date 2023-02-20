import React from 'react';
import './CourseCard.scss';
import { ICourse } from '../../Courses.types';
import Button from '@src/app/common/Button/Button';
import formatCreationDate from '@src/app/helpers/formatCreationDate';
import getCourseDuration from '@src/app/helpers/getCourseDuration';
import Tag from '@src/app/common/Tag/Tag';

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
				<Tag label='Authors' value={authors.join(', ')} />
				<Tag label='Duration' value={getCourseDuration(duration)} />
				<Tag label='Created' value={formatCreationDate(creationDate)} />
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
