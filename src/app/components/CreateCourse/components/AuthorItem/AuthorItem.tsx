import React from 'react';
import Button from '@src/app/common/Button/Button';
import { IAuthorItemProps } from './AuthorItem.types';
import { IAuthor } from '@src/app/components/Courses/Courses.types';

const AuthorItem: React.FC<IAuthorItemProps> = (props: IAuthorItemProps) => {
	const { onAddAuthor, ...author } = props;
	return (
		<div
			key={author.id}
			className='d-flex justify-content-between align-items-center'
		>
			{author.name}
			<Button
				text='Add author'
				style='outline-dark'
				size='sm'
				className='ml-auto'
				onClick={() => onAddAuthor(author)}
			></Button>
		</div>
	);
};

export default AuthorItem;
