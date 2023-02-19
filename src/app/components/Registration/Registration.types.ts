export type RegistrationFieldsType = 'name' | 'email' | 'password';

export type RegistrationFormType = {
	[key in RegistrationFieldsType]?: string;
};
