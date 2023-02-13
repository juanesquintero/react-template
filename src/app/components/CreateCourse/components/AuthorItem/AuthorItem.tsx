import React from 'react';
import Button from '@src/app/common/Button/Button';
import { IAuthor } from '@src/app/components/Courses/Courses.types';

const AuthorItem: React.FC<IAuthor> = (props: IAuthor) => {
	return (
		<div className='d-flex justify-content-between align-items-center'>
			{props.name}
			<Button
				text='Add author'
				type='submit'
				style='outline-dark'
				size='sm'
				className='ml-auto'
			></Button>
		</div>
	);
};

export default AuthorItem;
