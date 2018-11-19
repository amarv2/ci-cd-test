import React, { Component } from 'react';
import PropTypes from 'prop-types';

import OrganizationTableRow from '..';

class OrganizationTableView extends Component {
  componentWillMount = () => {
    this.getOrganizations();
  }

  getOrganizations = () => {
    this.props.getAllOrganizations();
  }

  render() {
    const { organizationOverview } = this.props;
    return (
      <table className="table table-hover">
        <thead>
          <tr>
            <th>Id</th>
            <th>Organization Name</th>
            <th>Email</th>
            <th>Type</th>
            <th>Number of users</th>
          </tr>
        </thead>
        <tbody>
          {
            organizationOverview && organizationOverview.organization
            && organizationOverview.organization.map((selectedOrganization) => (
              <OrganizationTableRow key={selectedOrganization.id} data={selectedOrganization} />
            ))
          }
        </tbody>
      </table>
    );
  }
}

OrganizationTableView.propTypes = {
  getAllOrganizations: PropTypes.func.isRequired,
  organizationOverview: PropTypes.shape({
    organization: PropTypes.array.isRequired,
    status: PropTypes.string.isRequired,
  }).isRequired,
};

export default OrganizationTableView;
