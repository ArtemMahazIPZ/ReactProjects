import React, { useContext } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { EmployeeContext } from '../context/EmployeeContext';

const EmployeeDetails = () => {
    const { id } = useParams();
    const { employees } = useContext(EmployeeContext);
    const navigate = useNavigate();

    const employee = employees.find((emp) => emp.id === parseInt(id));

    if (!employee) {
        return <p>Employee not found!</p>;
    }

    return (
        <div>
            <h1>{employee.name}</h1>
            <p>Position: {employee.position}</p>
            <button onClick={() => navigate('/employees')}>Back to List</button>
        </div>
    );
};

export default EmployeeDetails;
