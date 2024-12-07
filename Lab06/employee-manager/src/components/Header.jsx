import React from 'react';
import { Link } from 'react-router-dom';
import styles from '../Header.module.css';

const Header = () => {
    return (
        <header className={styles.header}>
            <nav>
                <ul className={styles.navList}>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/employees">Employee List</Link>
                    </li>
                    <li>
                        <Link to="/add">Add Employee</Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;
