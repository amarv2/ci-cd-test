import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import OrganizationDetails from '../../components/OrganizationDetails';
import UsersConfirmationModal from '../../components/UsersConfirmationModal';
import organizationDetails from '../../selectors/organizationDetails';

class OrganizationDetailsPageView extends Component {
  componentWillMount() {
    this.props.getOrganizationDetails(this.props.params);
  }

  render() {
    return (
      <div>
        <OrganizationDetails data={this.props.selectedOrganization} urlParams={this.props.params} />
        <UsersConfirmationModal urlParams={this.props.params} />
      </div>
    );
  }
}


function mapStateToProps(state) {
  const { selectedOrganization } = organizationDetails(state);
  return { selectedOrganization };
}

function mapDispatchToProps(dispatch) {
  return {
    getOrganizationDetails: (organizationName) => {
      dispatch({ type: 'organizationDetailsConstants.ORGANIZATION_DETAILS_REQUEST', payload: { organizationName } });
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(OrganizationDetailsPageView);

OrganizationDetailsPageView.propTypes = {
  getOrganizationDetails: PropTypes.func.isRequired,
  params: PropTypes.string.isRequired,
  selectedOrganization: PropTypes.shape({
    id: PropTypes.number.isRequired,
    organizationName: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    users: PropTypes.array.isRequired,
  }).isRequired,
};
