import React from 'react';
import Button from '@src/app/common/Button/Button';
import { IAuthorItemProps } from './AuthorItem.types';

const AuthorItem: React.FC<IAuthorItemProps> = (props: IAuthorItemProps) => {
	const { onAdd, onRemove, ...author } = props;

	return (
		<div className='d-flex justify-content-between align-items-center'>
			<p>{author.name}</p>
			<span>
				{onAdd ? (
					<Button
						title='Add Author'
						icon='plus'
						style='outline-dark'
						size='sm'
						className='ml-auto'
						onClick={() => onAdd(author)}
					></Button>
				) : null}

				{onRemove ? (
					<Button
						title='Remove Author'
						icon='trash'
						style='outline-danger'
						size='sm'
						className='ml-auto'
						onClick={() => onRemove(author)}
					></Button>
				) : null}
			</span>
		</div>
	);
};

export default AuthorItem;
