import React from 'react';
import PropTypes from 'prop-types';

import { withRouter } from 'react-router-dom';

import EditUserPageView from './EditUserPageView';

const EditUserPageViewContainer = ({ match }) => (
  <div>
    <EditUserPageView
      organizationNameParams={match.params.organizationName}
      userIdParams={match.params.userId}
    />
  </div>
);

EditUserPageViewContainer.propTypes = {
  match: PropTypes.shape({
    isExact: PropTypes.bool.isRequired,
    params: PropTypes.object.isRequired,
    path: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
  }).isRequired,
};

export default withRouter(EditUserPageViewContainer);
