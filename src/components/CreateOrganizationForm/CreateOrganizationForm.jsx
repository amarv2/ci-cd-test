import React from 'react';
import { Field, reduxForm } from 'redux-form';
import PropTypes from 'prop-types';
import LoginButton from '../LoginButton/LoginButton';
import ValidatedFields from '../ValidatedFields/ValidatedFields';

const organizationTypes = ['trial', 'some-role', 'other-role'];


const CreateOrganizationForm = ({ handleSubmit }) => (
  <div>
    <h1 className="text-center my-4">Create new organization</h1>
    <form className="col-7 mx-auto" onSubmit={handleSubmit}>
      <div className="form-group">
        <label htmlFor="name">Organization name</label>
        <Field className="form-control" name="name" component={ValidatedFields} type="text" />
      </div>
      <div className="form-group">
        <label htmlFor="email">Organization email</label>
        <Field className="form-control" name="email" component={ValidatedFields} type="email" />
      </div>
      <div className="form-group">
        <label htmlFor="organizationType">Organization type</label>
        <Field name="organizationType" className="form-control" component="select">
          <option />
          {organizationTypes.map((type) => (
            <option key={type}>{type}</option>
          ))}
        </Field>
      </div>
      <LoginButton buttonText="Submit" />
    </form>
  </div>
);

CreateOrganizationForm.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
};

export default reduxForm({ form: 'create-organization' })(CreateOrganizationForm);
