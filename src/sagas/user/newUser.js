import { takeLatest, call, put } from 'redux-saga/effects';
import userService from '../../services/userService/userService';
import history from '../../utils/History/history';

export default function * newUserSaga() {
  yield takeLatest('userConstants.CREATE_USER_REQUEST', createUser);
}


function * createUser(action) {
  const {
    name, surname, email, githubHandle, organizationName,
  } = action.payload;
  try {
    const response = yield call(
      userService.createUser, name, surname, email, githubHandle, organizationName,
    );
    const newOrganization = response;
    history.push(`/organizations/${organizationName}`);
    yield put({ type: 'userConstants.CREATE_USER_SUCCESS', newOrganization });
  } catch (error) {
    yield put({ type: 'userConstants.CREATE_USER_FAILURE', error });
  }
}
