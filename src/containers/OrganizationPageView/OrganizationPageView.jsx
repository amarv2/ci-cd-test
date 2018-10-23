import React, { Component } from 'react';
import { OrganizationTable } from '../../components/OrganizationTable/OrganizationTable';

class OrganizationPageView extends Component {
    render() {
        return (
            <div>
              <div className="container">
                  <h1>Organizations</h1>
                    <div className="table-responsive">
                        <OrganizationTable />
                    </div>
                </div>
            </div>
        );
    }
}

export default OrganizationPageView;
