import { fork } from 'redux-saga/effects';

import loginSaga from './login';
import organizationSaga from './organizations';
import userDetailsSaga from './user/userDetails';
import newOrganizationSaga from './newOrganization';
import organizationDetailsSaga from './organizationDetails';
import newUserSaga from './user/newUser';
import deleteUserSaga from './user/deleteUser';
import blockUserSaga from './user/blockUser';
import unBlockUserSaga from './user/unblockUser';

export default function * rootSaga() {
  yield [
    fork(loginSaga),
    fork(organizationSaga),
    fork(userDetailsSaga),
    fork(newOrganizationSaga),
    fork(organizationDetailsSaga),
    fork(newUserSaga),
    fork(deleteUserSaga),
    fork(blockUserSaga),
    fork(unBlockUserSaga),
  ];
}
