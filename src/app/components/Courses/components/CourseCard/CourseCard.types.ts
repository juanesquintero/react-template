import { ICourse } from './../../Courses.types';

export type ICourseCardProps = Omit<ICourse, 'id'>;
