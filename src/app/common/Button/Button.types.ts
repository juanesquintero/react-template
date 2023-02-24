export interface IButtonProps {
	text?: string;
	title?: string;
	className?: string;
	style?: ButtonStyle;
	size?: ButtonSize;
	type?: ButtonType;
	href?: string;
	icon?: string;
	children?: JSX.Element[] | JSX.Element;
	onClick?: (param?: any) => void;
}

type ButtonType = 'button' | 'submit';

type ButtonSize = 'sm' | 'lg' | 'md';

type ButtonStyle =
	| 'outline-primary'
	| 'outline-secondary'
	| 'outline-success'
	| 'outline-danger'
	| 'outline-warning'
	| 'outline-info'
	| 'outline-light'
	| 'outline-dark'
	| 'primary'
	| 'secondary'
	| 'success'
	| 'danger'
	| 'warning'
	| 'info'
	| 'light'
	| 'dark';
