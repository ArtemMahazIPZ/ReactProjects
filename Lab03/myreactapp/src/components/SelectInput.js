import React from 'react';

const SelectInput = ({ id, register, options, error, ...rest }) => (
    <select id={id} {...register} className={error ? 'input-error' : ''} {...rest}>
        {options.map(({ value, label }) => (
            <option key={value} value={value}>
                {label}
            </option>
        ))}
    </select>
);

export default SelectInput;
