import React, { Component } from 'react';
import PropTypes from 'prop-types';

import SideNav, { NavItem, NavIcon, NavText } from '@trendmicro/react-sidenav';

import styles from './SideMenu.module.scss';

class SideMenu extends Component {
  constructor(props) {
    super(props);
    this.checkIfUserAuth = this
      .checkIfUserAuth
      .bind(this);
  }

    logoutUser = (e) => {
      e.preventDefault();
      this.props.logoutUser();
    }

    menuToggler = () => this
      .props
      .handleMenuToggle()

    checkIfUserAuth() {
      if (this.props.loggedIn) {
        return (
          <SideNav className={styles.darkSideNav}>
            <SideNav.Toggle
              className={styles.sideNavToggler}
              onClick={() => { this.menuToggler(); }}
            />
            <SideNav.Nav defaultSelected="home">
              <NavItem
                eventKey="home"
                className={styles.sideNavIcon}
              >
                <NavIcon className={styles.sideNavIcon}>
                  <i
                    className="fa fa-fw fa-home"
                    style={{
                      fontSize: '1.75em',
                    }}
                  />
                </NavIcon>
                <NavText>
                    Organizations
                </NavText>
              </NavItem>
              <NavItem
                onClick={(e) => {
                  this.logoutUser(e);
                }}
                className={styles.sideNavIcon}
              >
                <NavIcon>
                  <i
                    className="fas fa-power-off"
                    style={{
                      fontSize: '1.75em',
                    }}
                  />
                </NavIcon>
                <NavText>
                    Logout
                </NavText>
              </NavItem>
              <NavItem className={styles.sideNavIcon}>
                <NavIcon>
                  <img src="/images/monogram_small_knockedoff_black.svg" alt="Yewno small logo" />
                </NavIcon>
                <NavText>
                    Yewno Sandbox Admin
                </NavText>
              </NavItem>
            </SideNav.Nav>
          </SideNav>
        );
      }
      return '';
    }

    render() {
      return (
        <div>
          {this.checkIfUserAuth()}
        </div>
      );
    }
}

SideMenu.propTypes = {
  loggedIn: PropTypes.bool.isRequired,
  handleMenuToggle: PropTypes.func.isRequired,
  logoutUser: PropTypes.func.isRequired,
};

export default SideMenu;
