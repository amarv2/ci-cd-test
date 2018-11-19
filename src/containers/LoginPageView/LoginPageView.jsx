import React, { Component } from 'react';

import PropTypes from 'prop-types';

import LoginForm from '../../components/LoginForm';
import history from '../../utils/History/history';

import styles from './LoginPageView.module.scss';

class LoginPageView extends Component {
  componentWillMount() {
    if (this.props.loggedIn) {
      history.push('/');
    }
  }

  render() {
    return (
      <div className={styles.loginPageView}>
        <LoginForm />
      </div>
    );
  }
}

LoginPageView.propTypes = {
  loggedIn: PropTypes.bool.isRequired,
};

export default LoginPageView;
