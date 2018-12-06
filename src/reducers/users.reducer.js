import { Types } from '../actions/users.actions';

/**
 * Initial state.
 */
const INITIAL_STATE = {
	items: [],
	error: ''
};

/**
 * Users reducer.
 *
 * @param state - Users redux state.
 * @param action - Action to dispatch.
 * @returns {{items: Array}}
 */
export default function users(state = INITIAL_STATE, action) {
	switch (action.type) {
		case Types.GET_USERS_SUCCESS: {
			return {
				...state,
				error: '',
				items: action.payload.items
			};
		}
		case Types.USERS_ERROR: {
			return {
				...state,
				error: action.payload.error
			};
		}
		default: {
			return state;
		}
	}
}
