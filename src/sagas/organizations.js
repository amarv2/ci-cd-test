import { takeLatest, call, put } from 'redux-saga/effects';
import organizationService from '../services/organizationService/organizationService';


export default function * organizationSaga() {
  yield takeLatest('organizationConstants.GET_ALL_REQUEST', getAllOrganizations);
}


function * getAllOrganizations() {
  try {
    const response = yield call(
      organizationService.getAll, ...[],
    );
    const organization = response;

    yield put({ type: 'organizationConstants.GET_ALL_SUCCESS', organization });
  } catch (error) {
    yield put({ type: 'organizationConstants.GET_ALL_FAILURE', error });
  }
}
