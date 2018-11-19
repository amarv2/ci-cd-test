import React from 'react';
import { Field, reduxForm } from 'redux-form';
import PropTypes from 'prop-types';

import ValidatedFields from '../ValidatedFields/ValidatedFields';
import LoginButton from '../LoginButton';

const CreateUserForm = ({ handleSubmit }) => (
  <div className="col-7 mx-auto">
    <form onSubmit={handleSubmit}>
      <div className="form-group">
        <label htmlFor="name">First Name</label>
        <Field name="name" component={ValidatedFields} type="text" />
      </div>
      <div className="form-group">
        <label htmlFor="surname">Last Name</label>
        <Field name="surname" component={ValidatedFields} type="text" />
      </div>
      <div className="form-group">
        <label htmlFor="email">Email</label>
        <Field name="email" component={ValidatedFields} type="email" />
      </div>
      <div className="form-group">
        <label htmlFor="githubHandle">Github handle</label>
        <Field name="githubHandle" component={ValidatedFields} type="text" />
      </div>
      <LoginButton buttonText="Submit" />
    </form>
  </div>
);

const createUserValidations = (values) => {
  const errors = {};
  if (!values.name) {
    errors.name = 'First name is required';
  }
  if (!values.surname) {
    errors.surname = 'Last name is required';
  }
  if (!values.email) {
    errors.email = 'Email is required';
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = 'Invalid email address';
  }
  return errors;
};

CreateUserForm.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
};

export default reduxForm({ form: 'create-user', validate: createUserValidations })(CreateUserForm);
