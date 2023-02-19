export interface IInputAtrr {
	type?: customInputType | inputType;
	label?: string;
	placeholder?: string;
	className?: string;
	onChange?: (param: any) => void;
}

export interface IInputProps extends IInputAtrr {
	style?: styleType;
	size?: 'sm' | 'lg';
	inline?: boolean;
	children?: JSX.Element[] | JSX.Element;
}

type styleType = 'form-check' | 'form-control' | 'form-control-file';

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
