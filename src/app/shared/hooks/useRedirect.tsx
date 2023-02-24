import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const useRedirect = (route: string) => {
	const navigate = useNavigate();

	const redirect = () => {
		if (localStorage.getItem('token')) {
			navigate(route);
		}
	};

	useEffect(() => {
		redirect();
	}, [route]);

	return redirect;
};

export default useRedirect;
