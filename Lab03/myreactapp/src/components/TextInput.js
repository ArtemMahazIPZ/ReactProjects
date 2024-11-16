import React from 'react';

const TextInput = ({ id, register, placeholder, error, ...rest }) => (
    <input
        id={id}
        {...register}
        placeholder={placeholder}
        className={error ? 'input-error' : ''}
        {...rest}
    />
);

export default TextInput;
