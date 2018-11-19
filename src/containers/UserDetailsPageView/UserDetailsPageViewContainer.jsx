import React from 'react';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';

import UserDetailsPageView from './UserDetailsPageView';

const UserDetailsPageViewContainer = ({ match }) => (
  <div>
    <UserDetailsPageView
      organizationNameParams={match.params.organizationName}
      userIdParams={match.params.userId}
    />
  </div>
);

UserDetailsPageViewContainer.propTypes = {
  match: PropTypes.shape({
    isExact: PropTypes.bool.isRequired,
    params: PropTypes.object.isRequired,
    path: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
  }).isRequired,
};

export default withRouter(UserDetailsPageViewContainer);
