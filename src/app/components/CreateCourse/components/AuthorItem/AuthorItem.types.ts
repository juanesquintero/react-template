import { IAuthor } from '@src/app/components/Courses/Courses.types';

export interface IAuthorItemProps extends IAuthor {
	onAdd?: (author: IAuthor) => void;
	onRemove?: (author: IAuthor) => void;
}
