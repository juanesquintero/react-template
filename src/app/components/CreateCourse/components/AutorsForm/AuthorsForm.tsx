import React, { useState } from 'react';
import '@app/App.scss';
import { v4 as uuidv4 } from 'uuid';
import Input from '@src/app/common/Input/Input';
import Button from '@src/app/common/Button/Button';
import { mockedAuthorsList } from '@src/app/components/Courses/Courses.mock';
import AuthorItem from '../AuthorItem/AuthorItem';
import { IAuthor } from '@src/app/components/Courses/Courses.types';

const AuthorsForm: React.FC = () => {
	const [name, setName] = useState('');
	const [authors, setAuthors] = useState(mockedAuthorsList);
	const [courseAuthors, setCourseAuthors] = useState([]);

	const addCourseAuthor = (author: IAuthor) => {
		if (!courseAuthors.some((a: IAuthor) => a.id === author.id)) {
			setCourseAuthors([...courseAuthors, author]);
		}
	};

	const removeCourseAuthor = (author: IAuthor) => {
		setCourseAuthors(courseAuthors.filter((a: IAuthor) => a.id !== author.id));
	};

	const addAuthor = () => {
		if (!authors.some((a: IAuthor) => a.name === name)) {
			const author: IAuthor = { name, id: uuidv4() };
			setAuthors([...authors, author]);
			setName('');
		}
	};

	return (
		<div className='grid rounded border my-5 p-4'>
			<div className='g-col-6'>
				<h5>Add Author</h5>
				<Input
					label='Author Name'
					type='text'
					onChange={(e) => {
						setName(e.target.value);
					}}
				/>
				<Button
					text='Create Author'
					icon='plus'
					style='outline-dark'
					size='sm'
					onClick={addAuthor}
				/>
			</div>

			<div className='g-col-6'>
				<h5>Authors</h5>
				{authors.map((author) => (
					<AuthorItem
						{...author}
						onAdd={addCourseAuthor}
						onRemove={removeCourseAuthor}
						key={author.id}
					/>
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
