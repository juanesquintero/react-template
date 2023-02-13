import React from 'react';
import '@app/App.scss';
import Input from '@src/app/common/Input/Input';
import Button from '@src/app/common/Button/Button';
import { mockedAuthorsList } from '@src/app/components/Courses/Courses.mock';

const AuthorsForm: React.FC = () => {
	return (
		<div className='grid rounded border my-5 p-4'>
			<div className='g-col-6'>
				<h5>Add Author</h5>
				<Input label='Author Name' type='text' />
				<Button
					type='submit'
					text='Create Author'
					icon='plus'
					style='outline-dark'
					size='sm'
				/>
			</div>

			<div className='g-col-6'>
				<h5>Authors</h5>
				{mockedAuthorsList.map((author) => (
					<div className='d-flex justify-content-between align-items-center'>
						{author.name}
						<Button
							text='Add author'
							type='submit'
							style='outline-dark'
							size='sm'
							className='ml-auto'
						></Button>
					</div>
				))}
			</div>

			<div className='g-col-6'>
				<h5>Course Authors</h5>
				{mockedAuthorsList.map((author) => (
					<div className='d-flex justify-content-between align-items-center'>
						{author.name}
					</div>
				))}
			</div>
		</div>
	);
};

export default AuthorsForm;
