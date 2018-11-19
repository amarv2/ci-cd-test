import React from 'react';

const ValidatedFields = ({
  input,
  type,
  placeholder,
  id,
  meta: { touched, error },
}) => (
  <div>
    <input {...input} className="form-control" autoComplete="nope" placeholder={placeholder} type={type} id={id} />
    { touched && error && <p style={{ color: 'red' }}>{error}</p> }
  </div>
);

export default ValidatedFields;
