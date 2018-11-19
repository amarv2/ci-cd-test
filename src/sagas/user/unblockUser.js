import { takeLatest, call, put } from 'redux-saga/effects';
import userService from '../../services/userService/userService';

export default function * unblockUserSaga() {
  yield takeLatest('userConstants.UNBLOCK_USER_REQUEST', unblockUser);
}


function * unblockUser(action) {
  try {
    const response = yield call(
      userService.unblockUser,
      action.payload.id, action.payload.name,
      action.payload.surname,
      action.payload.email,
      action.payload.githubHandle,
      action.payload.organizationName,
    );
    const selectedOrganization = response;
    yield put({ type: 'userConstants.UNBLOCK_USER_SUCCESS', selectedOrganization });
  } catch (error) {
    yield put({ type: 'userConstants.UNBLOCK_USER_FAILURE', error });
  }
}
