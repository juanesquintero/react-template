export interface IButtonProps {
	text: string;
	className?: string;
	style?: style;
	size?: 'sm' | 'lg';
	type?: 'button' | 'submit';
	href?: string;
	icon?: string;
	children?: JSX.Element[] | JSX.Element;
	onClick?: (param: any) => void;
}

type style =
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
