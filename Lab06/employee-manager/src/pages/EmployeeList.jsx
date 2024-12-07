import React, { useContext } from 'react';
import EmployeeCard from '../components/EmployeeCard';
import { EmployeeContext } from '../context/EmployeeContext';

const EmployeeList = () => {
    const { employees } = useContext(EmployeeContext);

    return (
        <div>
            <h1>Employee List</h1>
            {employees.map((employee) => (
                <EmployeeCard key={employee.id} employee={employee} />
            ))}
        </div>
    );
};

export default EmployeeList;
