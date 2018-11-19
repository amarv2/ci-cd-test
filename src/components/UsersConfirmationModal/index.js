import { connect } from 'react-redux';

import UsersConfirmationModal from './UsersConfirmationModal';

function mapStateToProps(state) {
  const { confirmationModalOpen, modalCategory } = state.usersReducer;
  return {
    confirmationModalOpen,
    modalCategory,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    toggleConfirmationModal: (modalCategory) => {
      dispatch({ type: 'userConstants.TOGGLE_CONFIRMATION_MODAL', modalCategory });
    },
  };
}
export default connect(mapStateToProps, mapDispatchToProps)(UsersConfirmationModal);
