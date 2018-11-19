import React from 'react';
import PropTypes from 'prop-types';

import styles from '../../../App.module.scss';
import modalStyles from '../ConfirmationModalContent.module.scss';

class UnblockUserModalView extends React.Component {
    closeConfirmationModal = () => {
      this.props.toggleConfirmationModal();
    }

    unblockUser = (selectedUser) => {
      this.props.unblockUser(selectedUser);
      this.props.getOrganizationDetails(this.props.urlParams);
      this.props.toggleConfirmationModal();
    }

    render() {
      return (
        <div>
          {this.props.selectedUser && (
          <p>
            Are you sure you want to unblock
            {' '}
            <span className={modalStyles.selectedUser}>
              {this.props.selectedUser.name}
              {' '}
              {this.props.selectedUser.surname}
            </span>
            {' '}
            ?
          </p>
          )}
          <button type="button" className={`${styles.cancellationButton} mr-3`} onClick={() => { this.closeConfirmationModal(); }}>Cancel</button>
          <button type="submit" className={`${styles.confirmationButton} d-inline`} onClick={() => { this.unblockUser(this.props.selectedUser); }}>Unblock</button>
        </div>
      );
    }
}

UnblockUserModalView.propTypes = {
  toggleConfirmationModal: PropTypes.func.isRequired,
  unblockUser: PropTypes.func.isRequired,
  getOrganizationDetails: PropTypes.func.isRequired,
  urlParams: PropTypes.string.isRequired,
  selectedUser: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    surname: PropTypes.string.isRequired,
  }).isRequired,
};

export default UnblockUserModalView;
