import { takeLatest, call, put } from 'redux-saga/effects';
import userService from '../../services/userService/userService';

export default function * userDetailsSaga() {
  yield takeLatest('userConstants.GET_USER_BY_ID_REQUEST', getUserById);
}

function * getUserById(action) {
  try {
    const response = yield call(
      userService.getUserById, action.payload.organizationName, action.payload.userId,
    );
    const selectedUser = response;
    yield put({ type: 'userConstants.GET_USER_BY_ID_SUCCESS', selectedUser });
  } catch (error) {
    yield put({ type: 'userConstants.GET_USER_BY_ID_FAILURE', error });
  }
}
