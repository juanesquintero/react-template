import React from 'react';
import './Button.scss';
import { ButtonProps } from './Button.types';

const Button: React.FC<ButtonProps> = (props: ButtonProps) => {
	const stylesClass = props.theme === 'light' ? 'button--light' : 'button';

	if (props.href) {
		return <a className={stylesClass} {...props} />;
	}
	return <button className={stylesClass} type='button' {...props} />;
};

export default Button;
