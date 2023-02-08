export interface ICourse {
	id: string;
	title: string;
	description: string;
	creationDate: Date | string;
	duration: number;
	authors?: string[];
}

export interface IAuthor {
	id: string;
	name: string;
}
