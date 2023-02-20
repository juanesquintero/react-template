import React from 'react';
import ReactDOM from 'react-dom/client';
import '@src/index.scss';
import '@src/config/i18n';
import App from '@app/App';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { Registration, Login, Courses, CreateCourse } from './app/components';
import CourseInfo from './app/components/CourseInfo/CourseInfo';

const root = ReactDOM.createRoot(
	document.getElementById('root') as HTMLElement
);
root.render(
	<React.StrictMode>
		<BrowserRouter>
			<Routes>
				<Route path='/' element={<App />}>
					<Route path='login' element={<Login />} />
					<Route path='registration' element={<Registration />} />
					<Route path='courses' element={<Courses />}></Route>
					<Route path='courses/add' element={<CreateCourse />} />
					<Route path='courses/:courseid' element={<CourseInfo />} />
				</Route>
			</Routes>
		</BrowserRouter>
	</React.StrictMode>
);
