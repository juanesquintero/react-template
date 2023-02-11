import React from 'react';

const Input: React.FC<any> = (props: any) => {
	const propsCopy = {
		...props,
		className: props.className + ' form-control',
	};
	return <input {...propsCopy} />;
};

export default Input;
