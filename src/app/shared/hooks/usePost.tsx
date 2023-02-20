import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import env from '../../../config/enviroment';

interface IPost {
	endpoint: string;
	body: Record<string, any>;
}

const usePost = async ({ endpoint, body }: IPost) => {
	try {
		const { data } = await axios.post(env.apiPath + endpoint, body, {
			headers: {
				'Content-Type': 'application/json',
			},
		});
		return data;
	} catch (err) {
		console.log('err', err);
		return err;
		// return err?.response?.data?.errors?.map();
	}
};

export default usePost;
