import { takeEvery, call, put } from 'redux-saga/effects';
import adminUserService from '../services/adminUserService/adminUserService';
import history from '../utils/History/history';
// import * as loginMock from '../mocks/Login';


export default function * loginSaga() {
  yield takeEvery('adminUserConstants.LOGIN_REQUEST', login);
}


function * login(action) {
  try {
    const response = yield call(
      adminUserService.login, action.payload.username, action.payload.password,
    );
    const user = response;
    history.go('/');
    yield put({ type: 'adminUserConstants.LOGIN_SUCCESS', user });
  } catch (error) {
    // dispatch a failure action to the store with the error
    yield put({ type: 'adminUserConstants.LOGIN_FAILURE', error });
  }
}
