import React, {Component} from 'react';

class OrganizationTableRow extends Component {
    checkOrganizationType = () => {
        let type;
        switch(this.props.data.type){
            case 'trial':
                type = 'Trial'
                break;
            case 'some-role':
                type = 'Some role'
                break;
            case 'other-role':
                type = 'Other role'
                break;
            default:
                type = ''
                break;
        }
        return type;
    }
    render() {
        return (
            <tr>
                <td>{this.props.data.id}</td>
                <td>{this.props.data.organizationName}</td>
                <td>{this.props.data.email}</td>
                <td>{this.checkOrganizationType()}</td>
                <td>{this.props.data.users.length}</td>
            </tr>
        );
    }
}

export default OrganizationTableRow;
