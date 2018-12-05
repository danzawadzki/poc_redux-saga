import { takeEvery, call, fork, put } from 'redux-saga/effects';
import * as actions from '../actions/users.actions';
import * as api from '../api/users.api';

/**
 * Generator to fetch users list.
 */
function* getUsers() {
	try {
		const result = yield call(api.getUsers);
		yield put(actions.getUsersSuccess({ items: result.data.data }));
	} catch (e) {}
}

/**
 * Watcher for users fetcher.
 */
function* watchGetUsersRequest() {
	yield takeEvery(actions.Types.GET_USERS_REQUEST, getUsers);
}

/**
 * Fork process.
 */
const usersSagas = [fork(watchGetUsersRequest)];

export default usersSagas;
