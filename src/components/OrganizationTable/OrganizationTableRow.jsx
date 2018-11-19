import React from 'react';
import PropTypes from 'prop-types';
import history from '../../utils/History/history';

export const checkOrganizationType = (data) => {
  let type;
  switch (data.type) {
    case 'trial':
      type = 'Trial';
      break;
    case 'some-role':
      type = 'Some role';
      break;
    case 'other-role':
      type = 'Other role';
      break;
    default:
      type = '';
      break;
  }
  return type;
};


const OrganizationTableRow = ({ data }) => (
  <tr onClick={() => history.push(`/organizations/${data.organizationName}`)}>
    <td>{data.id}</td>
    <td>{data.organizationName}</td>
    <td>{data.email}</td>
    <td>{checkOrganizationType(data)}</td>
    <td>{data.users.length}</td>
  </tr>
);


OrganizationTableRow.propTypes = {
  data: PropTypes.shape({
    id: PropTypes.number.isRequired,
    organizationName: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    users: PropTypes.array.isRequired,
  }).isRequired,
};

export default OrganizationTableRow;
