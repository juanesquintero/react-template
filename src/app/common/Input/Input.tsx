import setStyleClass from '@src/app/helpers/setStyleClass';
import React from 'react';
import { IInputProps } from './Input.types';

const Input: React.FC<IInputProps> = (props: IInputProps) => {
	const { label, style, size, inline, ..._props } = props;

	_props.className += setStyleClass(
		{ style, size, inline },
		{
			prefix: 'form-control',
			initial: 'm-1',
		}
	);

	const renderInput = (type: string) => {
		const inputTag = {
			textarea: <textarea rows={3} {..._props}></textarea>,
			select: <select {..._props} />,
		};
		if (inputTag[type]) {
			delete _props.type;
			return inputTag[type];
		}
		return <input {..._props} />;
	};

	return (
		<div className='form-group my-2'>
			{label ? <label>{label}</label> : null}
			{renderInput(props.type)}
		</div>
	);
};

export default Input;
