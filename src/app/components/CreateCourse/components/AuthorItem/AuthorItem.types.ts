import { IAuthor } from '@src/app/components/Courses/Courses.types';

export interface IAuthorItemProps extends IAuthor {
	onAddAuthor: (author: IAuthor) => void;
}
