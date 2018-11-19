import { connect } from 'react-redux';
import CreateOrganizationForm from './CreateOrganizationForm';

function mapDispatchToProps(dispatch) {
  return {
    onSubmit: (values) => {
      const {
        email, name, organizationType,
      } = values;
      dispatch({
        type: 'organizationConstants.CREATE_ORGANIZATION_REQUEST',
        payload: {
          name, email, organizationType,
        },
      });
    },
  };
}

export default connect(null, mapDispatchToProps)(CreateOrganizationForm);
