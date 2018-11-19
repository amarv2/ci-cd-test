import React from 'react';
import PropTypes from 'prop-types';

import OrganizationPageView from '../OrganizationPageView';
import LoginPageView from '../LoginPageView';

const LandingPageView = ({ loggedIn }) => {
  const isLoggedIn = loggedIn;
  if (isLoggedIn) {
    return <OrganizationPageView />;
  }
  return <LoginPageView />;
};

LandingPageView.propTypes = {
  loggedIn: PropTypes.bool.isRequired,
};

export default LandingPageView;
