import { adminUserConstants } from '../constants/adminUserConstants';
import { adminUserService } from '../services/adminUserService/adminUserService';
import { history } from '../utils/History/history';
import * as loginMock from '../mocks/Login';

function request(user) { return { type: adminUserConstants.LOGIN_REQUEST, user } }
function success(user) { return { type: adminUserConstants.LOGIN_SUCCESS, user } }
function failure(error) { return { type: adminUserConstants.LOGIN_FAILURE, error } }

function login(username, password) {
    return (dispatch) => {
        dispatch(request({ username }));
        adminUserService.login(username, password)
            .then((user) => {
                if (loginMock.default.adminUsername === user.username && loginMock.default.adminPassword === user.password) {
                    dispatch(success(user));
                    history.go('/');
                }
            }).catch((error) => {
                dispatch(failure(error));
            });
    };
}

function logout() {
    adminUserService.logout();
    return { type: adminUserConstants.LOGOUT };
}

export const adminUserActions = {
    login,
    logout,
};
