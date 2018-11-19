import Status from '../constants/status';

const user = JSON.parse(localStorage.getItem('adminUser'));
const initialState = user
  ? {
    loggedIn: true,
    status: Status.INIT,
    user,
  }
  : {};

export default function loginReducer(state = initialState, action) {
  switch (action.type) {
    case 'adminUserConstants.LOGIN_REQUEST':
      return {
        ...state,
        status: Status.PENDING,
      };
    case 'adminUserConstants.LOGIN_SUCCESS':
      return {
        ...state,
        status: Status.SUCCESS,
        loggedIn: true,
        user: action.user,
      };
    case 'adminUserConstants.LOGIN_FAILURE':
      return {
        ...state,
        status: Status.FAIL,
        loggedIn: false,
      };
    case 'adminUserConstants.LOGOUT':
      return {
        ...state,
      };
    default:
      return state;
  }
}
