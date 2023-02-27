import React, { useState } from 'react';
import Input from '@src/app/common/Input/Input';
import Button from '@src/app/common/Button/Button';
import AuthorsForm from './components/AutorsForm/AuthorsForm';
import getCourseDuration from '@src/app/helpers/getCourseDuration';
import { mockedCoursesList } from '../Courses/Courses.mock';
import { useNavigate } from 'react-router-dom';
import { IAuthor, ICourse } from '../Courses/Courses.types';
import { useForm } from 'react-hook-form';

const CreateCourse: React.FC = () => {
	const [courseAuthors, setCourseAuthors] = useState([]);

	const addCourseAuthor = (author: IAuthor) => {
		if (!courseAuthors.some((a: IAuthor) => a.id === author.id)) {
			setCourseAuthors([...courseAuthors, author]);
		}
	};

	const removeCourseAuthor = (author: IAuthor) => {
		setCourseAuthors(courseAuthors.filter((a: IAuthor) => a.id !== author.id));
	};

	const navigate = useNavigate();

	// TODO FormMik react forms
	const { register, handleSubmit } = useForm<ICourse>({
		defaultValues: {
			title: '',
			description: '',
			duration: 0,
			creationDate: '',
		},
	});

	const onCreate = (data: ICourse) => {
		mockedCoursesList.push(data);
		navigate('/courses');
	};

	return (
		<div className='my-4'>
			<h5 className='my-4'>Create Course</h5>
			<form
				className='bg-white rounded px-5 py-3'
				onSubmit={handleSubmit(onCreate)}
			>
				<div className='form-group'>
					<div className='form-inline d-flex justify-content-between'>
						<Input
							name='title'
							label='Title'
							type='text'
							placeholder='Python Course No. 1'
							ref={register}
						/>

						<div className='d-flex align-items-baseline'>
							<Button
								type='submit'
								text='Create course'
								icon='plus'
								style='outline-dark'
							/>
						</div>
					</div>
					<div className='form-group'>
						<Input
							name='description'
							label='Description'
							type='textarea'
							placeholder='Password'
							ref={register}
						/>
					</div>
					<div className='form-group d-flex align-items-center'>
						<Input
							name='duration'
							label='Duration'
							type='number'
							ref={register}
						/>
						<p className='mt-5 ms-3'>{getCourseDuration(100)}</p>
					</div>
				</div>
				<AuthorsForm
					addCourseAuthor={addCourseAuthor}
					removeCourseAuthor={removeCourseAuthor}
					courseAuthors={courseAuthors}
				/>
			</form>
		</div>
	);
};

export default CreateCourse;
