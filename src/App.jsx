import React from 'react';
import PropTypes from 'prop-types';
import { Router, Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';
import history from './utils/History/history';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import LandingPageView from './containers/LandingPageView';
import OrganizationDetailsPageViewContainer from './containers/OrganizationDetailsPageView';
import CreateNewOrganizationView from './containers/CreateNewOrganizationView';
import UserDetailsPageViewContainer from './containers/UserDetailsPageView';
import EditUserPageViewContainer from './containers/EditUserPageView';
import CreateNewUserPageView from './containers/CreateNewUserPageView';
import SideMenu from './components/SideMenu';

import styles from './App.module.scss';

const App = ({ expandedMenu }) => (
  <Router history={history}>
    <div>
      <div>
        <SideMenu />
      </div>
      <div
        className={`${expandedMenu
          ? styles.sideMenuOpen
          : styles.sideMenuClosed} content-wrapper `}
      >
        <Switch>
          <Route exact path="/" component={LandingPageView} />
          <PrivateRoute
            exact
            path="/organizations/new"
            component={CreateNewOrganizationView}
          />
          <PrivateRoute
            exact
            path="/organizations/:organizationName"
            component={OrganizationDetailsPageViewContainer}
          />
          <PrivateRoute
            exact
            path="/organizations/:organizationName/users/new"
            component={CreateNewUserPageView}
          />
          <PrivateRoute
            exact
            path="/organizations/:organizationName/users/:userId"
            component={UserDetailsPageViewContainer}
          />
          <PrivateRoute
            exact
            path="/organizations/:organizationName/users/:userId/edit"
            component={EditUserPageViewContainer}
          />
        </Switch>
      </div>
    </div>
  </Router>
);

function mapStateToProps(state) {
  const { expandedMenu } = state.sideMenuReducer;
  return { expandedMenu };
}

export default connect(mapStateToProps)(App);

App.propTypes = {
  expandedMenu: PropTypes.bool.isRequired,
};
