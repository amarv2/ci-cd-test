import { connect } from 'react-redux';
import DeleteUserModalView from './DeleteUserModalView';

function mapStateToProps(state) {
  const { selectedUser } = state.usersReducer;
  return {
    selectedUser,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    toggleConfirmationModal: (modalCategory) => {
      dispatch({ type: 'userConstants.TOGGLE_CONFIRMATION_MODAL', modalCategory });
    },
    deleteUser: (id) => {
      const organizationName = window.location.href.split('/')[4];
      dispatch({ type: 'userConstants.DELETE_USER_REQUEST', payload: { id, organizationName } });
    },
    getOrganizationDetails: (organizationName) => {
      dispatch({ type: 'organizationDetailsConstants.ORGANIZATION_DETAILS_REQUEST', payload: { organizationName } });
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(DeleteUserModalView);
