import React from 'react';
import { IButtonProps } from './Button.types';

const Button: React.FC<IButtonProps> = (props: IButtonProps) => {
	const { text, style, size, ..._props } = props;

	_props.className += ' btn m-2';
	if (style) {
		_props.className += ' btn-' + style;
	}
	if (size) {
		_props.className += ' btn-' + size;
	}

	const content = props.icon ? (
		<>
			<i className={'bi bi-' + props.icon}></i> {text}
		</>
	) : (
		text
	);

	if (props.href) {
		return <a {..._props}>{content}</a>;
	}
	return (
		<button type='button' {..._props}>
			{content}
		</button>
	);
};

export default Button;
