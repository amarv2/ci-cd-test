import { takeLatest, call, put } from 'redux-saga/effects';
import userService from '../../services/userService/userService';

export default function * blockUserSaga() {
  yield takeLatest('userConstants.BLOCK_USER_REQUEST', blockUser);
}


function * blockUser(action) {
  try {
    const response = yield call(
      userService.blockUser,
      action.payload.id, action.payload.name,
      action.payload.surname,
      action.payload.email,
      action.payload.githubHandle,
      action.payload.organizationName,
    );
    const selectedOrganization = response;
    yield put({ type: 'userConstants.BLOCK_USER_SUCCESS', selectedOrganization });
  } catch (error) {
    yield put({ type: 'userConstants.BLOCK_USER_FAILURE', error });
  }
}
