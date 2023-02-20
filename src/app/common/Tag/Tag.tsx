import React from 'react';
import { ITagProps } from './Tag.types';

const Tag: React.FC<ITagProps> = ({ label, value }: ITagProps) => {
	return (
		<div>
			<strong>{label}</strong>: {value}
		</div>
	);
};

export default Tag;
