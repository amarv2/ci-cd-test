import organizationConstants from '../constants/organization';
import * as organizationMock from '../mocks/Organizations';
import Status from '../constants/status';

const organization = organizationMock.default;
const initialState = organization ? { organization, status: Status.INIT } : {};

export default function organizationOverview(state = initialState, action) {
  switch (action.type) {
    case organizationConstants.GET_ALL_REQUEST:
      return {
        ...state,
        status: Status.PENDING,
        organizations: action.organization,
      };
    case organizationConstants.GET_ALL_SUCCESS:
      return {
        ...state,
        status: Status.SUCCESS,
        organizations: action.organization,
      };
    case organizationConstants.GET_ALL_FAILURE:
      return {
        ...state,
        status: Status.FAIL,
      };
    case 'organizationConstants.CREATE_ORGANIZATION_REQUEST':
      return {
        ...state,
        status: Status.PENDING,
      };
    case 'organizationConstants.CREATE_ORGANIZATION_SUCCESS':
      return {
        ...state,
        status: Status.SUCCESS,
        organization: [...state.organization, ...action.newOrganization],
      };
    case 'organizationConstants.CREATE_ORGANIZATION_FAILURE':
      return {
        ...state,
        status: Status.FAIL,
      };
    default:
      return state;
  }
}
