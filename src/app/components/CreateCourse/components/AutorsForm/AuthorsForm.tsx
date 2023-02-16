import React, { useState } from 'react';
import '@app/App.scss';
import Input from '@src/app/common/Input/Input';
import Button from '@src/app/common/Button/Button';
import { mockedAuthorsList } from '@src/app/components/Courses/Courses.mock';
import AuthorItem from '../AuthorItem/AuthorItem';
import { IAuthor } from '@src/app/components/Courses/Courses.types';

const AuthorsForm: React.FC = () => {
	const [courseAuthors, setCourseAuthors] = useState([]);

	const onAddCourseAuthor = (author: IAuthor) => {
		setCourseAuthors([...courseAuthors, author]);
	};

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
					<AuthorItem {...author} onAddAuthor={onAddCourseAuthor} />
				))}
			</div>

			<div className='g-col-6'>
				<h5>Course Authors</h5>
				<ul>
					{courseAuthors.map((author) => (
						<li
							key={author.id}
							className='d-flex justify-content-between align-items-center'
						>
							{author.name}
						</li>
					))}
				</ul>
			</div>
		</div>
	);
};

export default AuthorsForm;
