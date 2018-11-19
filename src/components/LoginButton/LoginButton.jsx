import React from 'react';
import PropTypes from 'prop-types';

import styles from '../../App.module.scss';

const LoginButton = ({ buttonText }) => (
  <button type="submit" className={styles.confirmationButton}>
    {buttonText}
  </button>
);

LoginButton.propTypes = {
  buttonText: PropTypes.string.isRequired,
};

export default LoginButton;
