import React from 'react';

const FieldGroup = ({ id, label, children, error }) => (
    <div className="form-group">
        <label htmlFor={id}>{label}</label>
        {children}
        {error && <p className="error-message">{error}</p>}
    </div>
);

export default FieldGroup;
