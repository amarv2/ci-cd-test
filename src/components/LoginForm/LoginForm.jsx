import React, { Component } from 'react';
import * as loginMock from '../../mocks/Login';

import LoginButton from '../LoginButton/LoginButton';
import { Field, reduxForm } from 'redux-form'

import {ValidatedFields} from '../ValidatedFields/ValidatedFIelds'
import './LoginForm.css';


class LoginForm extends Component {
    handleChange = (e) => {
        const { name, value } = e.target;
        this.setState({ [name]: value });
    }

    render() {
        const { loggingIn } = this.props;
        return (
        <div className="login-form-wrapper col-4 mx-auto p-5">
            <form onSubmit={this.props.handleSubmit} >
                <img src="/images/yewno-full-logo.png" alt="" />
                <div>
                    <label htmlFor="userName">Username</label>
                    <Field name="username" component={ValidatedFields} type="text" />
                </div>
                <div>
                    <label htmlFor="password">Password</label>
                    <Field name="password" component={ValidatedFields} type="password" />
                </div>
                <LoginButton buttonText="Login" loggingIn={loggingIn} />
            </form>
            </div>
        );
    }
}

const loginValidations = values => {
    const errors = {}
    if (!values.username) {
        errors.username = "Username is required"
    } else if (loginMock.default.adminUsername !== values.username) {
        errors.username = "Invalid username"
    }
    if (!values.password) {
        errors.pasword = "Password is required"
    } else if (loginMock.default.adminPassword !== values.password) {
        errors.password = "Invalid password"
    }
    return errors
}

export default reduxForm({
    form: 'login',
    validate: loginValidations
})(LoginForm)




