import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import CreateUserForm from './CreateUserForm';

function mapDispatchToProps(dispatch) {
  return {
    onSubmit: (values) => {
      const {
        name, surname, email, githubHandle,
      } = values;
      const organizationName = decodeURI(window.location.href.split('/')[4]);
      dispatch({
        type: 'userConstants.CREATE_USER_REQUEST',
        payload: {
          name, surname, email, githubHandle, organizationName,
        },
      });
    },
  };
}

export default connect(null, mapDispatchToProps)(CreateUserForm);

CreateUserForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
