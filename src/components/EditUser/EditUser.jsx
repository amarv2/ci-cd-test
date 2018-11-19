import React from 'react';
import { Field, reduxForm } from 'redux-form';
import PropTypes from 'prop-types';

import store from '../../store';

import styles from '../../App.module.scss';


const organizations = store.getState().organizationOverview.organization;

const EditUser = ({ data, handleSubmit, reset }) => (
  <div>
    <form className="col-7 mx-auto" onSubmit={handleSubmit}>
      <div className="form-group">
        <label htmlFor="name">First Name</label>
        <Field className="form-control" name="name" component="input" type="text" placeholder={`${data.name}`} />
      </div>
      <div className="form-group">
        <label htmlFor="surname">Last Name</label>
        <Field className="form-control" name="surname" component="input" type="text" placeholder={`${data.surname}`} />
      </div>
      <div className="form-group">
        <label htmlFor="email">Email</label>
        <Field className="form-control" name="email" component="input" type="email" placeholder={`${data.email}`} />
      </div>
      <div className="form-group">
        <label htmlFor="githubHandle">Github handl</label>
        <Field className="form-control" name="githubHandle" component="input" type="text" placeholder={`${data.githubHandle}`} />
      </div>
      <div className="form-group">
        <label htmlFor="organizationList">Assign to organization</label>
        <Field name="organizationList" className="form-control" component="select">
          <option />
          {organizations.map((organization) => (
            <option key={organization.id}>{organization.organizationName}</option>
          ))}
        </Field>
      </div>
      <button onClick={() => { reset(); }} type="button" className={`${styles.cancellationButton} mr-3 mt-4 d-inline`}>
          Cancel changes
      </button>
      <button type="submit" className={`${styles.confirmationButton} mt-4 d-inline`}>
          Save changes
      </button>
    </form>
  </div>
);

EditUser.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  reset: PropTypes.func.isRequired,
  data: PropTypes.shape({
    name: PropTypes.string,
    id: PropTypes.number,
    email: PropTypes.string,
    surname: PropTypes.string,
    githubHandle: PropTypes.string,
  }).isRequired,
};

export default reduxForm({ form: 'edit-user' })(EditUser);
