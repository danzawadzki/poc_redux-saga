import { Types } from '../actions/users.actions';

/**
 * Initial state.
 */
const INITIAL_STATE = {
	items: []
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
				items: action.payload.items
			};
		}
		default: {
			return state;
		}
	}
}
