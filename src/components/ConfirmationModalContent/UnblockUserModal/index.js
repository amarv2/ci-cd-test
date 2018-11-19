import { connect } from 'react-redux';
import UnblockUserModalView from './UnblockUserModalView';

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
    unblockUser: (selectedUser) => {
      const organizationName = decodeURI(window.location.href.split('/')[4]);
      const {
        id, name, surname, email, githubHandle,
      } = selectedUser;
      dispatch({
        type: 'userConstants.UNBLOCK_USER_REQUEST',
        payload: {
          id, organizationName, name, surname, email, githubHandle,
        },
      });
    },
    getOrganizationDetails: (organizationName) => {
      dispatch({ type: 'organizationDetailsConstants.ORGANIZATION_DETAILS_REQUEST', payload: { organizationName } });
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(UnblockUserModalView);
