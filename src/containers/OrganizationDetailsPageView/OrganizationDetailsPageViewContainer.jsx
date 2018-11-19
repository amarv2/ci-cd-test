import React from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';

import OrganizationDetailsPageView from './OrganizationDetailsPageView';

const OrganizationDetailsPageViewContainer = ({ match }) => (
  <div>
    <OrganizationDetailsPageView params={match.params.organizationName} />
  </div>
);

export default withRouter(OrganizationDetailsPageViewContainer);

OrganizationDetailsPageViewContainer.propTypes = {
  match: PropTypes.shape({
    isExact: PropTypes.bool.isRequired,
    params: PropTypes.object.isRequired,
    path: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
  }).isRequired,
};
