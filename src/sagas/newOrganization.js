import { takeLatest, call, put } from 'redux-saga/effects';
import organizationService from '../services/organizationService/organizationService';
import history from '../utils/History/history';

export default function * newOrganizationSaga() {
  yield takeLatest('organizationConstants.CREATE_ORGANIZATION_REQUEST', createOrganization);
}


function * createOrganization(action) {
  const {
    name, email, organizationType,
  } = action.payload;
  try {
    const response = yield call(
      organizationService.createOrganization, name, email, organizationType,
    );
    const newOrganization = response;
    history.push('/');
    yield put({ type: 'organizationConstants.CREATE_ORGANIZATION_SUCCESS', newOrganization });
  } catch (error) {
    yield put({ type: 'organizationConstants.CREATE_ORGANIZATION_FAILURE', error });
  }
}
