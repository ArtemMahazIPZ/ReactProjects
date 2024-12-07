import React, { useState } from 'react';

const EmployeeForm = ({ onSubmit, initialData }) => {
    const [name, setName] = useState(initialData?.name || '');
    const [position, setPosition] = useState(initialData?.position || '');

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit({ name, position });
    };

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label>Name:</label>
                <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
            </div>
            <div>
                <label>Position:</label>
                <input
                    type="text"
                    value={position}
                    onChange={(e) => setPosition(e.target.value)}
                />
            </div>
            <button type="submit">Submit</button>
        </form>
    );
};

export default EmployeeForm;
