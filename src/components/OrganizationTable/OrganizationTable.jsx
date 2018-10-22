import React, { Component } from 'react';
import { connect } from 'react-redux';
import OrganizationTableRow from './OrganizationTableRow';

import {organizationActions} from '../../actions/OrganizationActions'

class OrganizationTable extends Component {
    componentDidMount() {
        this.getOrganizations()
    }
    getOrganizations = () => {
        this.props.getAllOrganizations()
    }
    render() {
        const {organizationOverview} = this.props;
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
                { organizationOverview.organizations &&
                    organizationOverview.organizations.map(oneOrganization => {
                        return (
                            <OrganizationTableRow key={oneOrganization.id} data={oneOrganization} />
                        )
                    })
                }
            </tbody>
        </table>
        );
    }
}

function mapStateToProps(state) {
    const { organizationOverview } = state;
    return {
        organizationOverview
    };
}
function mapDispatchToProps(dispatch) {
    return({
        getAllOrganizations: () => {dispatch(organizationActions.getAll())}
    })
}
const connectedOrganizationTable = connect(mapStateToProps,mapDispatchToProps)(OrganizationTable);
export { connectedOrganizationTable as OrganizationTable };