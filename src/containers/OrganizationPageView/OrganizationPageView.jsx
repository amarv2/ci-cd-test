import React from 'react';
import { Link } from 'react-router-dom';
import OrganizationTableView from '../../components/OrganizationTable/OrganizationTableView';

import styles from '../../App.module.scss';

const OrganizationPageView = () => (
  <div>
    <div className="container">
      <div className="d-flex justify-content-between align-items-center my-4">
        <h1>Organizations</h1>
        <Link to="/organizations/new" className={`${styles.addNew}`}>
          <i className="fas fa-plus-circle" />
        </Link>
      </div>
      <div className="table-responsive">
        <OrganizationTableView />
      </div>
    </div>
  </div>
);

export default OrganizationPageView;
