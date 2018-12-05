import { combineReducers } from 'redux';
import UserReducer from './users.reducer';

/**
 * Root reducer combining all minor reducers.
 */
export default combineReducers({
	users: UserReducer
});
