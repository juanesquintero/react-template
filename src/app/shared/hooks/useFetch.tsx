// src/useFetch.jsx

import env from '@src/config/enviroment';
import axios from 'axios';
import { useEffect, useState } from 'react';

const useFetch = (endpoint: string) => {
	const [data, setData] = useState();
	const [error, setError] = useState('');

	const getData = async () => {
		try {
			const { data } = await axios.get(env.apiPath + endpoint, {
				headers: {
					'Content-Type': 'application/json',
				},
			});
			setData(data.result);
		} catch (err) {
			console.log('err', err);
			setError(err);
			// return err?.response?.data?.errors?.map();
		}
	};

	useEffect(() => {
		getData();
	}, [endpoint]);

	return data;
};

export default useFetch;
