import axios from 'axios';
import env from '../../../config/enviroment';

const usePost = async (endpoint: string, body: Record<string, any>) => {
	try {
		const response = await axios.post(env.apiPath + endpoint, body);
		console.error(response.data);
		return response.data;
	} catch (err) {
		console.error(err);
		return err;
	}
};

export default usePost;
