import React, { Component } from 'react';
import PropTypes from 'prop-types'
import SideNav, { NavItem, NavIcon, NavText } from '@trendmicro/react-sidenav';
import { sideMenuActions } from '../../actions/SideMenuActions'
import { adminUserActions } from '../../actions/AdminUserActions'
import { connect } from 'react-redux';
import { authUser } from '../../selectors/AuthSelector'

class SideMenu extends Component {
    constructor(props) {
        super(props)
        this.checkIfUserAuth = this
            .checkIfUserAuth
            .bind(this)
    }

    logoutUser = (e) => {
        e.preventDefault()
        const {dispatch} = this.props;
        dispatch(adminUserActions.logout());
    }

    menuToggler = () => this
        .props
        .handleMenuToggle()

    checkIfUserAuth() {
        if (this.props.loggedIn) {
            return (
                <SideNav>
                    <SideNav.Toggle onClick={this.menuToggler}/>
                    <SideNav.Nav defaultSelected="home">
                        <NavItem eventKey="home">
                            <NavIcon>
                                <i
                                    className="fa fa-fw fa-home"
                                    style={{
                                    fontSize: '1.75em'
                                }}/>
                            </NavIcon>
                            <NavText>
                                Organizations
                            </NavText>
                        </NavItem>
                        <NavItem
                            onClick={(e) => {
                            this.logoutUser(e)
                        }}>
                            <NavIcon >
                                <i
                                    className="fas fa-power-off"
                                    style={{
                                    fontSize: '1.75em'
                                }}/>
                            </NavIcon>
                            <NavText>
                                Logout
                            </NavText>
                        </NavItem>
                    </SideNav.Nav>
                </SideNav>
            )
        } else {
            return ''
        }
    }
    render() {
        return (
            <div>
                {this.checkIfUserAuth()}
            </div>
        );
    }
}

function mapDispatchToProps(dispatch) {
    return ({
        handleMenuToggle: () => {
            dispatch(sideMenuActions.toggleMenu())
        }
    })
}

function mapStateToProps(state) {
    const {loggedIn} = authUser(state)
    return ({loggedIn})
}
const sideMenuContainer = connect(mapStateToProps, mapDispatchToProps)(SideMenu)
export {sideMenuContainer as SideMenu}

SideMenu.prototypes = {
    loggedIn: PropTypes.bool,
    logoutUser: PropTypes.func.isRequired,
    menuToggler: PropTypes.func.isRequired,
    checkIfUserAuth: PropTypes.func.isRequired
}