import React, { useContext } from 'react';
import EmployeeForm from '../components/EmployeeForm';
import { EmployeeContext } from '../context/EmployeeContext';
import { useNavigate } from 'react-router-dom';

const AddEmployee = () => {
    const { addEmployee } = useContext(EmployeeContext);
    const navigate = useNavigate();

    const handleAdd = (newEmployee) => {
        addEmployee(newEmployee);
        navigate('/employees');
    };

    return (
        <div>
            <h1>Add Employee</h1>
            <EmployeeForm onSubmit={handleAdd} />
        </div>
    );
};

export default AddEmployee;
