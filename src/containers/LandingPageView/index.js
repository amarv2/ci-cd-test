import { connect } from 'react-redux';
import authUser from '../../selectors/auth';

import LandingPageView from './LandingPageView';

function mapStateToProps(state) {
  const { loggedIn } = authUser(state);
  return {
    loggedIn,
  };
}

export default connect(mapStateToProps)(LandingPageView);
