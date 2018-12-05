/**
 * User action types.
 *
 * @type {{GET_USERS_REQUEST: string, GET_USERS_SUCCESS: string}}
 */
export const Types = {
	GET_USERS_REQUEST: 'users/get_users_request',
	GET_USERS_SUCCESS: 'users/get_users_success'
};

/**
 * Action starting user fetch.
 *
 * @returns {{type: string}}
 */
export const getUsersRequest = () => ({
	type: Types.GET_USERS_REQUEST
});

/**
 * Action to fire on users fetch success.
 *
 * @param {Array<Object>} items
 * @returns {{type: string, payload: {items: *}}}
 */
export const getUsersSuccess = ({ items }) => ({
	type: Types.GET_USERS_SUCCESS,
	payload: {
		items
	}
});
