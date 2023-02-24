import React from 'react';
import { IButtonProps } from './Button.types';
import setStyleClass from '@src/app/helpers/setStyleClass';

const Button: React.FC<IButtonProps> = (props: IButtonProps) => {
	const { text, style, size, type = 'button', ..._props } = props;

	_props.className += setStyleClass(
		{ style, size },
		{ prefix: 'btn', initial: 'm-2' }
	);

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
		<button type={type} {..._props}>
			{content}
		</button>
	);
};

export default Button;
