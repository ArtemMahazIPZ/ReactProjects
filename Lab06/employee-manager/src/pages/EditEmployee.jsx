import React, { useContext } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import EmployeeForm from '../components/EmployeeForm';
import { EmployeeContext } from '../context/EmployeeContext';

const EditEmployee = () => {
    const { id } = useParams();
    const { employees, updateEmployee } = useContext(EmployeeContext);
    const navigate = useNavigate();

    const employee = employees.find((emp) => emp.id === parseInt(id));

    if (!employee) {
        return <p>Employee not found!</p>;
    }

    const handleEdit = (updatedEmployee) => {
        updateEmployee(employee.id, { ...employee, ...updatedEmployee });
        navigate('/employees');
    };

    return (
        <div>
            <h1>Edit Employee</h1>
            <EmployeeForm onSubmit={handleEdit} initialData={employee} />
        </div>
    );
};

export default EditEmployee;
