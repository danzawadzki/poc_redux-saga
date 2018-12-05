import UsersSagas from './users.saga';
import { all } from 'redux-saga/effects';

/**
 * Root saga combining all minor sagas.
 */
export default function* rootSaga() {
	yield all([...UsersSagas]);
}
