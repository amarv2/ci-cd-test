import React from 'react';
import PropTypes from 'prop-types';

import styles from '../../../App.module.scss';
import modalStyles from '../ConfirmationModalContent.module.scss';

class DeleteUserModalView extends React.Component {
    closeConfirmationModal = () => {
      this.props.toggleConfirmationModal();
    }

    deleteUser = (id) => {
      this.props.deleteUser(id);
      this.props.getOrganizationDetails(this.props.urlParams);
      this.props.toggleConfirmationModal();
    }

    render() {
      return (
        <div>
          {this.props.selectedUser && (
            <div>
              <p>
                Are you sure you want to delete
                {' '}
                <span className={modalStyles.selectedUser}>
                  {this.props.selectedUser.name}
                  {' '}
                  {this.props.selectedUser.surname}
                </span>
                {' '}
              ?
              </p>
              <button type="button" className={`${styles.cancellationButton} mr-3`} onClick={() => { this.closeConfirmationModal(); }}>Cancel</button>
              <button type="submit" className={`${styles.confirmationButton} d-inline`} onClick={() => { this.deleteUser(this.props.selectedUser.id); }}>Delete</button>
            </div>
          )}
        </div>
      );
    }
}

DeleteUserModalView.propTypes = {
  toggleConfirmationModal: PropTypes.func.isRequired,
  deleteUser: PropTypes.func.isRequired,
  getOrganizationDetails: PropTypes.func.isRequired,
  urlParams: PropTypes.string.isRequired,
  selectedUser: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    surname: PropTypes.string.isRequired,
  }).isRequired,
};

export default DeleteUserModalView;
