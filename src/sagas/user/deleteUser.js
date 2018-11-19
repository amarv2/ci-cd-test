import { takeLatest, call, put } from 'redux-saga/effects';
import userService from '../../services/userService/userService';

export default function * deleteUserSaga() {
  yield takeLatest('userConstants.DELETE_USER_REQUEST', deleteUser);
}


function * deleteUser(action) {
  try {
    const response = yield call(
      userService.deleteUser, action.payload.id, action.payload.organizationName,
    );
    const selectedOrganization = response;
    yield put({ type: 'userConstants.DELETE_USER_SUCCESS', selectedOrganization });
  } catch (error) {
    yield put({ type: 'userConstants.DELETE_USER_FAILURE', error });
  }
}
