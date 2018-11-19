import * as organizationMock from '../mocks/Organizations';
import Status from '../constants/status';


const selectedOrganization = organizationMock.default[0];
const initialState = selectedOrganization
  ? {
    status: Status.INIT,
    selectedOrganization,
  }
  : {};

export default function organizationDetailsReducer(state = initialState, action) {
  switch (action.type) {
    case 'organizationDetailsConstants.ORGANIZATION_DETAILS_REQUEST':
      return {
        ...state,
        status: Status.PENDING,
      };
    case 'organizationDetailsConstants.ORGANIZATION_DETAILS_SUCCESS':
      return {
        ...state,
        status: Status.SUCCESS,
        selectedOrganization: action.selectedOrganization,
      };
    case 'organizationDetailsConstants.ORGANIZATION_DETAILS_FAILURE':
      return {
        ...state,
        status: Status.FAIL,
      };
    case 'userConstants.DELETE_USER_REQUEST':
      return {
        ...state,
        status: Status.PENDING,
      };
    case 'userConstants.DELETE_USER_SUCCESS':
      return {
        ...state,
        status: Status.SUCCESS,
        selectedOrganization: action.selectedOrganization,
      };
    case 'userConstants.DELETE_USER_FAILURE':
      return {
        ...state,
        status: Status.FAIL,
      };
    case 'userConstants.BLOCK_USER_REQUEST':
      return {
        ...state,
        status: Status.PENDING,
      };
    case 'userConstants.BLOCK_USER_SUCCESS':
      return {
        ...state,
        status: Status.SUCCESS,
        selectedOrganization: action.selectedOrganization,
      };
    case 'userConstants.BLOCK_USER_FAILURE':
      return {
        ...state,
        status: Status.FAIL,
      };
    case 'userConstants.UNBLOCK_USER_REQUEST':
      return {
        ...state,
        status: Status.PENDING,
      };
    case 'userConstants.UNBLOCK_USER_SUCCESS':
      return {
        ...state,
        status: Status.SUCCESS,
        selectedOrganization: action.selectedOrganization,
      };
    case 'userConstants.UNBLOCK_USER_FAILURE':
      return {
        ...state,
        status: Status.FAIL,
      };
    default:
      return state;
  }
}
