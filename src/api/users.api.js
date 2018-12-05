import axios from 'axios';

/**
 * Fetcher for users list.
 *
 * @returns {AxiosPromise<any>}
 */
export const getUsers = () => {
	return axios.get('/users', {
		params: {
			limit: 1000
		}
	});
};
