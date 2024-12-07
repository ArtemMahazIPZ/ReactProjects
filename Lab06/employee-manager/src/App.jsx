import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';
import EmployeeList from './pages/EmployeeList';
import EmployeeDetails from './pages/EmployeeDetails';
import AddEmployee from './pages/AddEmployee';
import EditEmployee from './pages/EditEmployee';
import EmployeeProvider from './context/EmployeeContext';
import './index.css';

const App = () => {
    return (
        <EmployeeProvider>
            <Router>
                <Header />
                <main>
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/employees" element={<EmployeeList />} />
                        <Route path="/employees/:id" element={<EmployeeDetails />} />
                        <Route path="/add" element={<AddEmployee />} />
                        <Route path="/edit/:id" element={<EditEmployee />} />
                    </Routes>
                </main>
            </Router>
        </EmployeeProvider>
    );
};

export default App;
