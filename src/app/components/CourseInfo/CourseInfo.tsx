import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { ICourse } from '../Courses/Courses.types';
import useFetch from '@src/app/shared/hooks/useFetch';
import getCourseDuration from '@src/app/helpers/getCourseDuration';
import formatCreationDate from '@src/app/helpers/formatCreationDate';
import Tag from '@src/app/common/Tag/Tag';

const CourseInfo: React.FC = (props: any) => {
	const { courseid } = useParams();
	const data = useFetch(`/courses/${courseid}`) as ICourse;

	return (
		<div className='bg-white rounded px-5 py-3 my-5'>
			<Link to='/courses'> {'<< Back to courses'} </Link>
			<div className='text-center m-3 mb-5'>
				<h3>{data?.title}</h3>
			</div>
			<div className='row text-left'>
				<div className='col-6'>
					<p>{data?.description}</p>
				</div>
				<div className='col-6 d-block'>
					<Tag label='ID' value={data?.id} />
					<Tag label='Duration' value={getCourseDuration(data?.duration)} />
					<Tag label='Created' value={formatCreationDate(data?.creationDate)} />
					<Tag label='Authors' value={data?.authors?.join(', ')} />
				</div>
			</div>
		</div>
	);
};

export default CourseInfo;
