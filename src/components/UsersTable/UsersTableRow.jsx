import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import history from '../../utils/History/history';

import styles from './UsersTable.module.scss';

class UsersTableRow extends Component {
    editUserById = () => {
      this.props.getUserById(this.props.urlParams, this.props.data.id);
      history.push(`/organizations/${this.props.urlParams}/users/${this.props.data.id}/edit`);
      this.props.toggleEditMode();
    }

    toggleConfirmationModal = (category) => {
      this.props.getUserById(this.props.urlParams, this.props.data.id);
      this.props.toggleConfirmationModal(category);
    }

    goToUserDetails = () => {
      this.props.getUserById(this.props.urlParams, this.props.data.id);
      history.push(`/organizations/${this.props.urlParams}/users/${this.props.data.id}`);
    }

    render() {
      return (
        <tr className={`${this.props.data.active ? '' : styles.blockedUser}`}>
          <td>{ this.props.data.name }</td>
          <td>{ this.props.data.surname }</td>
          <td>{ this.props.data.email }</td>
          <td>{ this.props.data.githubHandle }</td>
          <td className="text-center cursor-pointer">
            <div
              onClick={() => { this.editUserById(); }}
              role="presentation"
            >
              <i className="far fa-edit" />
            </div>
          </td>
          <td className="text-center cursor-pointer">
            {this.props.data.active ? (
              <div
                onClick={() => { this.toggleConfirmationModal('blockUser'); }}
                role="presentation"
              >
                <i className="fas fa-ban" />
              </div>
            ) : (
              <div
                onClick={() => { this.toggleConfirmationModal('unblockUser'); }}
                role="presentation"
              >
                <i className="fas fa-check-circle" />
              </div>
            )}
          </td>
          <td className="text-center cursor-pointer">
            <div
              onClick={() => { this.toggleConfirmationModal('deleteUser'); }}
              role="presentation"
            >
              <i className="far fa-trash-alt" />
            </div>
          </td>
          <td className="text-center cursor-pointer">
            <div
              onClick={() => { this.goToUserDetails(); }}
              role="presentation"
            >
              <i className="far fa-eye" />
            </div>
          </td>
        </tr>
      );
    }
}

function mapDispatchToProps(dispatch) {
  return {
    toggleConfirmationModal: (modalCategory) => {
      dispatch({ type: 'userConstants.TOGGLE_CONFIRMATION_MODAL', modalCategory });
    },
    getUserById: (organizationName, userId) => {
      dispatch({ type: 'userConstants.GET_USER_BY_ID_REQUEST', payload: { organizationName, userId } });
    },
    toggleEditMode: () => {
      dispatch({ type: 'userConstants.USER_EDIT_MODE_TOGGLE' });
    },
  };
}

UsersTableRow.propTypes = {
  data: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    surname: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    githubHandle: PropTypes.string.isRequired,
    active: PropTypes.bool.isRequired,
  }).isRequired,
  urlParams: PropTypes.string.isRequired,
  toggleEditMode: PropTypes.func.isRequired,
  getUserById: PropTypes.func.isRequired,
  toggleConfirmationModal: PropTypes.func.isRequired,
};

export default connect(null, mapDispatchToProps)(UsersTableRow);
