/**
 * User action types.
 *
 * @type {{GET_USERS_REQUEST: string, GET_USERS_SUCCESS: string}}
 */
export const Types = {
	GET_USERS_REQUEST: 'users/get_users_request',
	GET_USERS_SUCCESS: 'users/get_users_success',
	CREATE_USER_REQUEST: 'users/create_user_request',
	CREATE_USER_SUCCESS: 'users/create_user_success',
	DELETE_USER_REQUEST: 'users/delete_user_request',
	DELETE_USER_SUCCESS: 'users/delete_user_success'
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

/**
 * Action to create user.
 *
 * @param firstName
 * @param lastName
 * @returns {{type: string, payload: {firstName: *, lastName: *}}}
 */
export const createUserRequest = ({ firstName, lastName }) => ({
	type: Types.CREATE_USER_REQUEST,
	payload: {
		firstName,
		lastName
	}
});

/**
 * Action to delete user.
 *
 * @param id
 * @returns {{type: string, payload: {id: *}}}
 */
export const deleteUserRequest = id => ({
	type: Types.DELETE_USER_REQUEST,
	payload: {
		id
	}
});
