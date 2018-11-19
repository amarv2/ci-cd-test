import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Router, Route } from 'react-router-dom';
import './App.css';
import { connect } from 'react-redux';
import { history } from './utils/History/history';
import { PrivateRoute } from './components/PrivateRoute/PrivateRoute';
import OrganizationPageView from './containers/OrganizationPageView/OrganizationPageView';

import { LoginPageView } from './containers/LoginPageView/LoginPageView';


import { SideMenu } from './components/SideMenu/SideMenu';

class App extends Component {
    render() {
        const { expandedMenu } = this.props;
        return (
            <Router history={history}>
                <div>
                <div>
                    <SideMenu />
                  </div>
                    <div
                        className={`${expandedMenu
                            ? 'side-menu-open'
                            : 'side-menu-closed'} content-wrapper `}
                  >
                        <PrivateRoute exact path="/" component={OrganizationPageView} />
                        <Route path="/login" component={LoginPageView} />
                  </div>
              </div>
          </Router>
        );
    }
}

function mapStateToProps(state) {
    const { expandedMenu } = state.sideMenuReducer;
    return { expandedMenu };
}

const connectedApp = connect(mapStateToProps)(App)
export { connectedApp as App };

App.propTypes = {
    expandedMenu: PropTypes.bool.isRequired
};
