import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import userDetails from '../../selectors/user';
import EditUser from '../../components/EditUser';


class EditUserPageView extends Component {
    componentDidMount = () => {
      this.props.getUserById(this.props.organizationNameParams, this.props.userIdParams);
      this.props.toggleEditMode();
    }

    render() {
      return (
        <div>
          <h1 className="text-center my-4">Edit user</h1>
          <EditUser
            data={this.props.selectedUser}
            organizationName={this.props.organizationNameParams}
          />
        </div>
      );
    }
}


function mapStateToProps(state) {
  const { selectedUser } = userDetails(state);
  return { selectedUser };
}

function mapDispatchToProps(dispatch) {
  return {
    getUserById: (organizationName, userId) => {
      dispatch({ type: 'userConstants.GET_USER_BY_ID_REQUEST', payload: { organizationName, userId } });
    },
    toggleEditMode: () => {
      dispatch({ type: 'TOGGLE_EDIT_MODE' });
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(EditUserPageView);

EditUserPageView.propTypes = {
  getUserById: PropTypes.func.isRequired,
  toggleEditMode: PropTypes.func.isRequired,
  organizationNameParams: PropTypes.string.isRequired,
  userIdParams: PropTypes.string.isRequired,
  selectedUser: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    surname: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    githubHandle: PropTypes.string.isRequired,
  }).isRequired,
};
