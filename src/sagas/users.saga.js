import { takeEvery, takeLatest, take, call, fork, put } from 'redux-saga/effects';
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
 * Generator to create user.
 *
 * @param action
 * @returns {IterableIterator<CallEffect | *>}
 */
function* createUser(action) {
	try {
		yield call(api.createUser, {
			firstName: action.payload.firstName,
			lastName: action.payload.lastName
		});
		yield call(getUsers);
	} catch (e) {}
}

/**
 * Watcher for create user saga.
 *
 * @returns {IterableIterator<ForkEffect | *>}
 */
function* watchCreateUserRequest() {
	yield takeLatest(actions.Types.CREATE_USER_REQUEST, createUser);
}

/**
 * Generator to delete user.
 *
 * @param id
 * @returns {IterableIterator<CallEffect | *>}
 */
function* deleteUser({ id }) {
	console.log(id);
	try {
		yield call(api.deleteUser, id);
		yield call(getUsers);
	} catch (e) {}
}

/**
 * Watcher for delete user saga.
 *
 * @returns {IterableIterator<*>}
 */
function* watchDeleteUserRequest() {
	while (true) {
		const action = yield take(actions.Types.DELETE_USER_REQUEST);
		console.log(action);
		yield call(deleteUser, {
			id: action.payload.id
		});
	}
}

/**
 * Fork process.
 */
const usersSagas = [
	fork(watchGetUsersRequest),
	fork(watchCreateUserRequest),
	fork(watchDeleteUserRequest)
];

export default usersSagas;
