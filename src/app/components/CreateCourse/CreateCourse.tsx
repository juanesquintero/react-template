import React from 'react';
import Input from '@src/app/common/Input/Input';
import Button from '@src/app/common/Button/Button';
import AuthorsForm from './components/AutorsForm/AuthorsForm';
import getCourseDuration from '@src/app/helpers/getCourseDuration';

const CreateCourse: React.FC = () => {
	return (
		<>
			<h5>Create Course</h5>
			<form className='bg-white rounded px-5 py-3'>
				<div className='form-group'>
					<div className='form-inline d-flex justify-content-between'>
						<Input
							label='Title'
							type='text'
							placeholder='Python Course No. 1'
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
						<Input label='Description' type='textarea' placeholder='Password' />
					</div>
					<div className='form-group d-flex align-items-center'>
						<Input label='Duration' type='number' />
						<p className='mt-5 ms-3'>{getCourseDuration(100)}</p>
					</div>
				</div>
				<AuthorsForm />
			</form>
		</>
	);
};

export default CreateCourse;
