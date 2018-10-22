import { organizationConstants } from '../constants/organizationConstants';
import * as organizationMock from '../mocks/Organizations';

const organization = organizationMock.default;
const initialState = organization ? { requestingOrganizations: false, organization } : {};

export function organizationOverview(state = initialState, action) {
    switch (action.type) {
    case organizationConstants.GETALL_REQUEST:
        return {
            ...state,
            requestingOrganizations: true,
            organizations: action.organization
        };
    case organizationConstants.GETALL_SUCCESS:
        return {
            ...state,
            requestingOrganizations: false,
            organizations: action.organization
        };
    case organizationConstants.GETALL_FAILURE:
        return {};
    default:
        return state;
    }
}
