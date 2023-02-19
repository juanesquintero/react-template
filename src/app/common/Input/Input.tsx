import setStyleClass from '@src/app/helpers/setStyleClass';
import React from 'react';
import { IInputAtrr, IInputProps } from './Input.types';

const Input: React.FC<IInputProps> = (props: IInputProps) => {
	const renderInput = (attrs: IInputAtrr) => {
		const { type } = attrs;
		const inputTag = {
			textarea: <textarea rows={3} {...attrs}></textarea>,
			select: <select {...attrs} />,
		};
		if (inputTag[type]) {
			return inputTag[type];
		}
		return <input type={type} {...attrs} />;
	};

	const setInputAttrs = (attrs: IInputAtrr): IInputAtrr => {
		attrs.className += setStyleClass(
			{ style, size, inline },
			{
				prefix: 'form-control',
				initial: 'm-1',
			}
		);
		return attrs;
	};

	const { label, style, size, inline, ..._props } = props;

	if (label) {
		const labelStyle = 'form-group text-start ' + _props.className;
		_props.className = '';
		return (
			<div className={labelStyle}>
				<label>{label}</label>
				{renderInput(setInputAttrs(_props))}
			</div>
		);
	}

	return renderInput(setInputAttrs(_props));
};

export default Input;
