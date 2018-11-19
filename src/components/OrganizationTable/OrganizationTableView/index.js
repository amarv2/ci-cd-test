import { connect } from 'react-redux';
import OrganizationTableView from './OrganizationTableView';

function mapStateToProps(state) {
  const { organizationOverview } = state;
  return {
    organizationOverview,
  };
}
function mapDispatchToProps(dispatch) {
  return ({
    getAllOrganizations: () => { dispatch({ type:'organizationConstants.GET_ALL_REQUEST' }); },
  });
}

export default connect(mapStateToProps, mapDispatchToProps)(OrganizationTableView);
