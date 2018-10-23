import { organizationService } from '../services/organizationService/organizationService';
import { organizationConstants } from '../constants/organizationConstants';


function request() { return { type: organizationConstants.GETALL_REQUEST }; }
function success(organization) { return { type: organizationConstants.GETALL_SUCCESS, organization }; }
function failure(error) { return { type: organizationConstants.GETALL_FAILURE, error }; }

function getAll() {
    return (dispatch) => {
        dispatch(request());
        organizationService.getAll()
            .then(
                organization => dispatch(success(organization)),
                error => dispatch(failure(error.toString()))
            );
    };
}

export const organizationActions = {
    getAll
};
