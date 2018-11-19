import React from 'react';
import { Field, reduxForm } from 'redux-form';
import PropTypes from 'prop-types';

import * as loginMock from '../../mocks/Login';

import LoginButton from '../LoginButton';

import ValidatedFields from '../ValidatedFields/ValidatedFields';
import styles from './LoginForm.module.scss';


const LoginForm = ({ handleSubmit }) => (
  <div className={`${styles.loginFormWrapper} col-4 mx-auto p-5`}>
    <form onSubmit={handleSubmit}>
      <img src="/images/yewno-full-logo.png" alt="" />
      <div>
        <label htmlFor="userName">Username</label>
        <Field name="username" component={ValidatedFields} type="text" />
      </div>
      <div>
        <label htmlFor="password">Password</label>
        <Field name="password" component={ValidatedFields} type="password" />
      </div>
      <LoginButton buttonText="Login" />
    </form>
  </div>
);

const loginValidations = (values) => {
  const errors = {};
  if (!values.username) {
    errors.username = 'Username is required';
  } else if (loginMock.default.adminUsername !== values.username) {
    errors.username = 'Invalid username';
  }
  if (!values.password) {
    errors.pasword = 'Password is required';
  } else if (loginMock.default.adminPassword !== values.password) {
    errors.password = 'Invalid password';
  }
  return errors;
};

LoginForm.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
};

export default reduxForm({
  form: 'login',
  validate: loginValidations,
})(LoginForm);
