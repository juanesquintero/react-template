import React from 'react';
import { IInputProps } from './Input.types';

const Input: React.FC<IInputProps> = (props: IInputProps) => {
	const { label, style, size, ..._props } = props;

	_props.className = 'form-control m-1';
	if (style) {
		_props.className += ' btn-' + style;
	}
	if (size) {
		_props.className += ' btn-' + size;
	}

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
		<>
			{label ? <label>{label}</label> : null}
			{renderInput(props.type)}
		</>
	);
};

export default Input;
