import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { ICourse } from '../Courses/Courses.types';
import useFetch from '@src/app/shared/hooks/useFetch';
import getCourseDuration from '@src/app/helpers/getCourseDuration';
import formatCreationDate from '@src/app/helpers/formatCreationDate';

const CourseInfo: React.FC = (props: any) => {
	const { courseid } = useParams();
	const data = useFetch(`/courses/${courseid}`) as ICourse;

	return (
		<div className='bg-white rounded px-5 py-3 my-5'>
			<Link to='/courses'> {'<< Back to courses'} </Link>
			<div className='text-center m-3 mb-5'>
				<h5>{data?.title}</h5>
			</div>
			<div className='row text-left'>
				<div className='col-6'>
					<p>{data?.description}</p>
				</div>
				<div className='col-6 d-block'>
					<div>
						<strong>ID</strong>: {data?.id}
					</div>
					<div>
						<strong>Duration</strong>:{getCourseDuration(data?.duration)}
					</div>
					<div>
						<strong>Created</strong>:{formatCreationDate(data?.creationDate)}
					</div>
					<div>
						<strong>Authors</strong>:
						{data?.authors?.map((a) => (
							<p>{a}</p>
						))}
					</div>
				</div>
			</div>
		</div>
	);
};

export default CourseInfo;
