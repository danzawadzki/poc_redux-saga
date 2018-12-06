import axios from 'axios';

/**
 * Getter for users list.
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

/**
 * Post to create new users.
 *
 * @param {string} firstName - User first name.
 * @param {string} lastName - User last name.
 * @returns {AxiosPromise<any>}
 */
export const createUser = ({ firstName, lastName }) => {
	return axios.post('/users', {
		firstName,
		lastName
	});
};

/**
 * Delete user with passed id.
 *
 * @param {number} id - User id.
 * @returns {AxiosPromise}
 */
export const deleteUser = id => {
	return axios.delete(`/users/${id}`);
};
