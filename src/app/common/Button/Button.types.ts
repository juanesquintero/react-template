export interface ButtonProps {
	text: string;
	theme: 'dark' | 'light';
	type?: 'button' | 'submit';
	href?: string;
	icon?: string;
	children?: JSX.Element[] | JSX.Element;
	onClick?: () => void;
}
