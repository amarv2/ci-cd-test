import { connect } from 'react-redux';

import authUser from '../../selectors/auth';
import LoginPageView from './LoginPageView';

function mapStateToProps(state) {
  const { loggingIn, loggedIn } = authUser(state);
  return {
    loggingIn,
    loggedIn,
  };
}

export default connect(mapStateToProps)(LoginPageView);
