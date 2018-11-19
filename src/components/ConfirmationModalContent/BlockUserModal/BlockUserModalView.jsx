import React from 'react';
import PropTypes from 'prop-types';

import styles from '../../../App.module.scss';
import modalStyles from '../ConfirmationModalContent.module.scss';

class BlockUserModalView extends React.Component {
    closeConfirmationModal = () => {
      this.props.toggleConfirmationModal();
    }

    blockUser = (selectedUser) => {
      this.props.blockUser(selectedUser);
      this.props.getOrganizationDetails(this.props.urlParams);
      this.props.toggleConfirmationModal();
    }

    render() {
      return (
        <div>
          {this.props.selectedUser && (
          <p>
            Are you sure you want to block
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
          <button type="submit" className={`${styles.confirmationButton} d-inline`} onClick={() => { this.blockUser(this.props.selectedUser); }}>Block</button>
        </div>
      );
    }
}

BlockUserModalView.propTypes = {
  toggleConfirmationModal: PropTypes.func.isRequired,
  blockUser: PropTypes.func.isRequired,
  getOrganizationDetails: PropTypes.func.isRequired,
  urlParams: PropTypes.string.isRequired,
  selectedUser: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    surname: PropTypes.string.isRequired,
  }).isRequired,
};

export default BlockUserModalView;
