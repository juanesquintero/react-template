export interface IInputProps {
	label?: string;
	placeholder?: string;
	className?: string;
	inline?: boolean;
	onChange?: (param: any) => void;
	style?: style;
	type?: customInputType | inputType;
	size?: 'sm' | 'lg';
	children?: JSX.Element[] | JSX.Element;
}

export interface IInputAtrr extends IInputProps {
	className?: string;
}

type style = 'form-check' | 'form-control' | 'form-control-file';

type customInputType = 'textarea' | 'select';

type inputType =
	| 'text'
	| 'button'
	| 'checkbox'
	| 'color'
	| 'date'
	| 'datetime-local'
	| 'email'
	| 'file'
	| 'hidden'
	| 'image'
	| 'month'
	| 'number'
	| 'password'
	| 'radio'
	| 'range'
	| 'reset'
	| 'search'
	| 'submit'
	| 'tel'
	| 'text'
	| 'time'
	| 'url'
	| 'week';
