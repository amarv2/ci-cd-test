import * as organizationMock from '../mocks/Organizations';
import Status from '../constants/status';

const selectedUser = organizationMock.default[0].users[0];
const initialState = selectedUser
  ? {
    isEditing: false,
    status: Status.INIT,
    selectedUser,
    confirmationModalOpen: false,
    modalCategory: 'none',
  }
  : {};

export default function usersReducer(state = initialState, action) {
  switch (action.type) {
    case 'userConstants.GET_USER_BY_ID_REQUEST':
      return {
        ...state,
        status: Status.PENDING,
      };
    case 'userConstants.GET_USER_BY_ID_SUCCESS':
      return {
        ...state,
        status: Status.SUCCESS,
        selectedUser: action.selectedUser,
      };
    case 'userConstants.GET_USER_BY_ID_FAILURE':
      return {
        ...state,
        status: Status.FAIL,
      };
    case 'userConstants.USER_EDIT_MODE_TOGGLE':
      return {
        ...state,
        isEditing: !state.isEditing,
      };
    case 'userConstants.TOGGLE_CONFIRMATION_MODAL':
      return {
        ...state,
        confirmationModalOpen: !state.confirmationModalOpen,
        modalCategory: action.modalCategory,
        selectedUser: action.selectedUser,
      };
    default:
      return state;
  }
}
