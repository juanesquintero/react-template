export type LoginFieldsType = 'email' | 'password';

export type LoginFormType = {
	[key in LoginFieldsType]?: string;
};
