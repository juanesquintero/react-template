import React from 'react';
import { IInputProps } from './Input.types';

const Input: React.FC<IInputProps> = (props: IInputProps) => {
	const { label, style, size, inline, ..._props } = props;

	const setClass = () => {
		_props.className = 'form-control m-1';
		if (style) {
			_props.className += ' btn-' + style;
		}
		if (size) {
			_props.className += ' btn-' + size;
		}
		if (inline) {
			_props.className += ' d-inline w-auto';
		}
	};

	const renderInput = (type: string) => {
		setClass();
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
