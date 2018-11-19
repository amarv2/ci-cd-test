import React from 'react';
import { Link } from 'react-router-dom';
import OrganizationTableView from '../../components/OrganizationTable/OrganizationTableView';

import styles from '../../App.module.scss';

const OrganizationPageView = () => (
  <div>
    <div className="container">
      <h1>Organizations</h1>
      <Link to="/organizations/new" className={`${styles.confirmationButton} d-inline-flex mt-4 mb-5`}>Create new organization</Link>
      <div className="table-responsive">
        <OrganizationTableView />
      </div>
    </div>
  </div>
);

export default OrganizationPageView;
