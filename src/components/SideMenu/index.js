import { connect } from 'react-redux';
import SideMenu from './SideMenu';

import sideMenuActions from '../../actions/sideMenu';
import authUser from '../../selectors/auth';
import adminUserActions from '../../actions/admin';

function mapDispatchToProps(dispatch) {
  return ({
    handleMenuToggle: () => {
      dispatch(sideMenuActions.toggleMenu());
    },
    logoutUser: () => {
      dispatch(adminUserActions.logout());
    },
  });
}

function mapStateToProps(state) {
  const { loggedIn } = authUser(state);
  return ({ loggedIn });
}
export default connect(mapStateToProps, mapDispatchToProps)(SideMenu);
