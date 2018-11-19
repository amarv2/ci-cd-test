import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import LoginForm from './LoginForm';

function mapDispatchToProps(dispatch) {
  return {
    onSubmit: (values) => {
      const { username, password } = values;
      if (username && password) {
        dispatch({ type: 'adminUserConstants.LOGIN_REQUEST', payload: { username, password } });
      }
    },
  };
}

export default connect(null, mapDispatchToProps)(LoginForm);

LoginForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
