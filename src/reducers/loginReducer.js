import { adminUserConstants } from '../constants/adminUserConstants';

const user = JSON.parse(localStorage.getItem('adminUser'));
const initialState = user
    ? {
        loggedIn: true,
        user
    }
    : {};

export function loginReducer(state = initialState, action) {
    switch (action.type) {
    case adminUserConstants.LOGIN_REQUEST:
        return { loggingIn: true, loggedIn: false };
    case adminUserConstants.LOGIN_SUCCESS:
        return { loggedIn: true, user: action.user };
    case adminUserConstants.LOGIN_FAILURE:
        return { loggingIn: false, loggedIn: false };
    case adminUserConstants.LOGOUT:
        return {};
    default:
        return state;
    }
}
