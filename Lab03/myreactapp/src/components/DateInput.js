import React from 'react';

const DateInput = ({ id, register, error, min, ...rest }) => (
    <input
        id={id}
        type="date"
        {...register}
        className={error ? 'input-error' : ''}
        min={min}
        {...rest}
    />
);

export default DateInput;

