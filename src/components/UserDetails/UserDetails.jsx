import React, { Component } from 'react';

import PropTypes from 'prop-types';


class UserDetails extends Component {
  toggleEditMode = () => {
    this.props.toggleEditMode();
  }

  checkUserStatus = () => {
    switch (this.props.data.active) {
      case true:
        return 'Active';
      case false:
        return 'Blocked';
      default:
        return '';
    }
  }

  render() {
    return (
      <div className="text-center">
        <h1 className="my-4">User details</h1>
        <div className="mx-auto col-7 my-5">
          { this.props.data && !this.props.isEditing && (
            <div className="card">
              <table className="table mb-0 table-striped table-hover">
                <tbody>
                  <tr>
                    <td>User:</td>
                    <td>
                      {this.props.data.name}
                      {' '}
                      {this.props.data.surname}
                    </td>
                  </tr>
                  <tr>
                    <td>User email:</td>
                    <td>{this.props.data.email}</td>
                  </tr>
                  <tr>
                    <td>User github handle</td>
                    <td>{this.props.data.githubHandle}</td>
                  </tr>
                  <tr>
                    <td>User status:</td>
                    <td>
                      {this.checkUserStatus()}
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          )}
        </div>
      </div>
    );
  }
}


UserDetails.propTypes = {
  toggleEditMode: PropTypes.func.isRequired,
  isEditing: PropTypes.bool.isRequired,
  data: PropTypes.shape({
    name: PropTypes.string.isRequired,
    surname: PropTypes.string,
    email: PropTypes.string.isRequired,
    githubHandle: PropTypes.string.isRequired,
    active: PropTypes.bool.isRequired,
  }).isRequired,
};

export default UserDetails;
