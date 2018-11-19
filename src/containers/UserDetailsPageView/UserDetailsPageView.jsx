import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';

import userDetails from '../../selectors/user';
import UserDetails from '../../components/UserDetails';

class UserDetailsPageView extends Component {
    componentDidMount = () => {
      this.props.getUserDetails(this.props.organizationNameParams, this.props.userIdParams);
    }

    render() {
      return (
        <div>
          <UserDetails data={this.props.selectedUser} />
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
    getUserDetails: (organizationName, userId) => {
      dispatch({ type: 'userConstants.GET_USER_BY_ID_REQUEST', payload: { organizationName, userId } });
    },
  };
}

UserDetailsPageView.propTypes = {
  getUserDetails: PropTypes.func.isRequired,
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

export default connect(mapStateToProps, mapDispatchToProps)(UserDetailsPageView);
