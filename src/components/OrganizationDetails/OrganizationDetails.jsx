import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import UsersTable from '../UsersTable/UsersTable';


import styles from '../../App.module.scss';

const OrganizationDetails = ({ data, urlParams }) => {
  const organizationData = data;
  if (organizationData) {
    return (
      <div className="container">
        <div className="d-flex justify-content-between align-items-center my-4">
          <h1>{data.organizationName}</h1>
          <Link to={`/organizations/${urlParams}/users/new`} className={`${styles.addNew}`}>
            <i className="fas fa-plus-circle" />
          </Link>
        </div>
        <p className="mt-3">{data.email}</p>
        {data.users && data.users.length ? (
          <UsersTable data={data} urlParams={urlParams} />
        ) : (
          <p>This organization currently has no users</p>
        )}
      </div>
    );
  }
  return '';
};

OrganizationDetails.propTypes = {
  data: PropTypes.shape({
    organizationName: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired,
    type: PropTypes.string.isRequired,
    users: PropTypes.array.isRequired,
  }).isRequired,
  urlParams: PropTypes.string.isRequired,
};

export default OrganizationDetails;
