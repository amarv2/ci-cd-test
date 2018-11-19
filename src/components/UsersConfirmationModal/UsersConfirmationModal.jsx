import React from 'react';

import PropTypes from 'prop-types';
import {
  Modal,
  ModalHeader,
  ModalBody,
} from 'reactstrap';

import DeleteUserModalView from '../ConfirmationModalContent/DeleteUserModal';
import BlockUserModalView from '../ConfirmationModalContent/BlockUserModal';
import UnblockUserModal from '../ConfirmationModalContent/UnblockUserModal';

class UsersConfirmationModal extends React.Component {
    toggleConfirmationModal = () => {
      this.props.toggleConfirmationModal('none');
    }

    checkModalCategory = () => {
      if (this.props.modalCategory === 'blockUser') {
        return (
          <BlockUserModalView urlParams={this.props.urlParams} />
        );
      }
      if (this.props.modalCategory === 'deleteUser') {
        return (
          <DeleteUserModalView urlParams={this.props.urlParams} />
        );
      }
      if (this.props.modalCategory === 'unblockUser') {
        return (
          <UnblockUserModal urlParams={this.props.urlParams} />
        );
      }
      return '';
    }

    modalCategoryTitle = () => {
      switch (this.props.modalCategory) {
        case 'blockUser':
          return 'Block';
        case 'deleteUser':
          return 'Delete';
        case 'unblockUser':
          return 'Unblock';
        default:
          return '';
      }
    }

    render() {
      return (
        <div>
          <Modal
            isOpen={this.props.confirmationModalOpen}
            toggle={this.toggleConfirmationModal}
          >
            <ModalHeader>
              {this.modalCategoryTitle()}
            </ModalHeader>
            <ModalBody>
              {this.checkModalCategory()}
            </ModalBody>
          </Modal>
        </div>
      );
    }
}

export default UsersConfirmationModal;

UsersConfirmationModal.propTypes = {
  modalCategory: PropTypes.PropTypes.string.isRequired,
  confirmationModalOpen: PropTypes.bool.isRequired,
  toggleConfirmationModal: PropTypes.func.isRequired,
  urlParams: PropTypes.string.isRequired,
};
