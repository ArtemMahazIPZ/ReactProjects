import React from 'react';
import { Link } from 'react-router-dom';

const EmployeeCard = ({ employee }) => {
    return (
        <div>
            <h3>{employee.name}</h3>
            <p>Position: {employee.position}</p>
            <Link to={`/employees/${employee.id}`}>View Details</Link>
        </div>
    );
};

export default EmployeeCard;
