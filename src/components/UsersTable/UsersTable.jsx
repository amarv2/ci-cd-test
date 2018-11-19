import React from 'react';
import PropTypes from 'prop-types';

import UsersTableRow from './UsersTableRow';

const UsersTable = ({ data, urlParams }) => (
  <table className="table table-hover">
    <thead>
      <tr>
        <th>First Name</th>
        <th>Last Name</th>
        <th>Email</th>
        <th>Github Handle</th>
        <th className="text-centered">Edit</th>
        <th className="text-centered">Block</th>
        <th className="text-centered">Delete</th>
        <th className="text-centered">View Details</th>
      </tr>
    </thead>
    <tbody>
      { data
        && data.users.map((users) => (
          <UsersTableRow key={users.id} data={users} urlParams={urlParams} />
        ))
      }
    </tbody>
  </table>
);

UsersTable.propTypes = {
  data: PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
    surname: PropTypes.string,
    githubHandle: PropTypes.string,
  }).isRequired,
  urlParams: PropTypes.string.isRequired,
};

export default UsersTable;
