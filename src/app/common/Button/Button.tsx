import React from 'react';
import './Button.scss';
import { ButtonProps } from './Button.types';

const Button: React.FC<ButtonProps> = (props: ButtonProps) => {
	const { text, ..._props } = props;

	const styleClass = props.theme === 'light' ? 'button--light' : 'button';

	const content = props.icon ? (
		<>
			<i className={props.icon}></i> {text}
		</>
	) : (
		text
	);

	if (props.href) {
		return (
			<a className={styleClass} {..._props}>
				{content}
			</a>
		);
	}
	return (
		<button className={styleClass} type='button' {..._props}>
			{content}
		</button>
	);
};

export default Button;
