import React from 'react';

export const ValidatedFields = ({
    input,
    type,
    placeholder,
    id,
    meta: { touched, error }
}) => {
    return (
        <div>
            <input {...input} className="form-control" autoComplete="nope" placeholder={placeholder} type={type} id={id} />
            {touched && error && <p style={{ color: 'red' }}>{error}</p>}
        </div>
    );
};
