type IElementProps = {
	style?: string;
	size?: string;
	inline?: boolean;
};

const setStyleClass = (
	props: IElementProps,
	styleClass: { initial: string; prefix: string }
): string => {
	const { style, size, inline } = props;

	const { prefix, initial } = styleClass;

	let className = ` ${prefix} ${initial}`;

	const prefixClass = ` ${prefix}-`;

	if (style) {
		className += prefixClass + style;
	}
	if (size) {
		className += prefixClass + size;
	}
	if (inline) {
		className += ' d-inline w-auto';
	}

	return className;
};

export default setStyleClass;
