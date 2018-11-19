import { takeEvery, call, put } from 'redux-saga/effects';
import organizationDetailsService from '../services/organizationDetailsService/organizationDetailsService';

export default function * organizationDetailsSaga() {
  yield takeEvery('organizationDetailsConstants.ORGANIZATION_DETAILS_REQUEST', getOrganizationDetails);
}


function * getOrganizationDetails(action) {
  try {
    const response = yield call(
      organizationDetailsService.getOrganizationDetailsByName, action.payload.organizationName,
    );
    const selectedOrganization = response;
    yield put({ type: 'organizationDetailsConstants.ORGANIZATION_DETAILS_SUCCESS', selectedOrganization });
  } catch (error) {
    yield put({ type: 'organizationDetailsConstants.ORGANIZATION_DETAILS_FAILURE', error });
  }
}
