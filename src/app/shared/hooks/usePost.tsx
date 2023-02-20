import axios from 'axios';
import env from '../../../config/enviroment';

const usePost = async (endpoint: string, body: Record<string, any>) => {
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
