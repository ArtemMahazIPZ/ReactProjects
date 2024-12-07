import React, { createContext, useState } from 'react';

export const EmployeeContext = createContext();

const EmployeeProvider = ({ children }) => {
    const [employees, setEmployees] = useState([
        { id: 1, name: 'John Doe', position: 'Software Engineer' },
        { id: 2, name: 'Jane Smith', position: 'Project Manager' },
    ]);

    const addEmployee = (newEmployee) => {
        setEmployees([...employees, { id: Date.now(), ...newEmployee }]);
    };

    const updateEmployee = (id, updatedEmployee) => {
        setEmployees(
            employees.map((emp) => (emp.id === id ? updatedEmployee : emp))
        );
    };

    return (
        <EmployeeContext.Provider value={{ employees, addEmployee, updateEmployee }}>
            {children}
        </EmployeeContext.Provider>
    );
};

export default EmployeeProvider;
