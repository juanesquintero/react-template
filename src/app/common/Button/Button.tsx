import React from 'react';
import { IButtonProps, IButtonAtrr } from './Button.types';

const Button: React.FC<IButtonProps> = (props: IButtonProps) => {
	const { text, style, size, ..._props }: IButtonAtrr = props;

	_props.className = 'btn m-1';
	if (style) {
		_props.className += ' btn-' + style;
	}
	if (size) {
		_props.className += ' btn-' + size;
	}

	const content = props.icon ? (
		<>
			<i className={props.icon}></i> {text}
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
