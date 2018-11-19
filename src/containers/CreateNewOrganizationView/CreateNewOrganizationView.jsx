import React from 'react';

import { Link } from 'react-router-dom';

import CreateOrganizationForm from '../../components/CreateOrganizationForm';
import styles from '../../App.module.scss';

const CreateNewOrganizationView = () => (
  <div>
    <Link to="/" className={styles.backArrow}>
      <i className="fas fa-arrow-left" />
    </Link>
    <CreateOrganizationForm />
  </div>
);

export default CreateNewOrganizationView;
