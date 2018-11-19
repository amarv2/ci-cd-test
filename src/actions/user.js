import userConstants from '../constants/user';

const userToggleConfirmationModal = (modalCategory) => ({
  type: userConstants.TOGGLE_CONFIRMATION_MODAL, modalCategory,
});


const toggleConfirmationModal = (modalCategory) => (dispatch) => {
  dispatch(userToggleConfirmationModal(modalCategory));
};

const userActions = {
  toggleConfirmationModal,
};

export default userActions;
